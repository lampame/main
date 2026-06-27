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
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
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
  function _wrapRegExp() {
    _wrapRegExp = function (e, r) {
      return new BabelRegExp(e, void 0, r);
    };
    var e = RegExp.prototype,
      r = new WeakMap();
    function BabelRegExp(e, t, p) {
      var o = RegExp(e, t);
      return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
    }
    function buildGroups(e, t) {
      var p = r.get(t);
      return Object.keys(p).reduce(function (r, t) {
        var o = p[t];
        if ("number" == typeof o) r[t] = e[o];else {
          for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
          r[t] = e[o[i]];
        }
        return r;
      }, Object.create(null));
    }
    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
      var t = e.exec.call(this, r);
      if (t) {
        t.groups = buildGroups(t, this);
        var p = t.indices;
        p && (p.groups = buildGroups(p, this));
      }
      return t;
    }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
      if ("string" == typeof p) {
        var o = r.get(this);
        return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
          if ("" === t) return e;
          var p = o[r];
          return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
        }));
      }
      if ("function" == typeof p) {
        var i = this;
        return e[Symbol.replace].call(this, t, function () {
          var e = arguments;
          return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
        });
      }
      return e[Symbol.replace].call(this, t, p);
    }, _wrapRegExp.apply(this, arguments);
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

  var globalThis$e = require('../internals/global-this');
  var getOwnPropertyDescriptor$3 = require('../internals/object-get-own-property-descriptor').f;
  var createNonEnumerableProperty$5 = require('../internals/create-non-enumerable-property');
  var defineBuiltIn$6 = require('../internals/define-built-in');
  var defineGlobalProperty$1 = require('../internals/define-global-property');
  var copyConstructorProperties$2 = require('../internals/copy-constructor-properties');
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
        descriptor = getOwnPropertyDescriptor$3(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (_typeof(sourceProperty) == _typeof(targetProperty)) continue;
        copyConstructorProperties$2(sourceProperty, targetProperty);
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

  var require$$0$7 = /*@__PURE__*/getAugmentedNamespace(_export);

  var hasRequiredEs_globalThis;

  function requireEs_globalThis () {
  	if (hasRequiredEs_globalThis) return es_globalThis;
  	hasRequiredEs_globalThis = 1;

  	var $ = require$$0$7;
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

  var globalThis$d = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3$4 = /*@__PURE__*/getAugmentedNamespace(globalThis$d);

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

  var fails$g;
  var hasRequiredFails;

  function requireFails () {
  	if (hasRequiredFails) return fails$g;
  	hasRequiredFails = 1;

  	fails$g = function (exec) {
  	  try {
  	    return !!exec();
  	  } catch (error) {
  	    return true;
  	  }
  	};
  	return fails$g;
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

  var $$j = require('../internals/export');
  var exec$3 = require('../internals/regexp-exec');

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$j({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$3
  }, {
    exec: exec$3
  });

  var $$i = require('../internals/export');
  var fails$f = require('../internals/fails');
  var isArray$3 = require('../internals/is-array');
  var isObject$4 = require('../internals/is-object');
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
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$2 >= 51 || !fails$f(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$4(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$3(O);
  };
  var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$i({
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
  var call$9 = require('../internals/function-call');
  var uncurryThis$g = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');
  var fails$e = require('../internals/fails');
  var anObject$8 = require('../internals/an-object');
  var isCallable$b = require('../internals/is-callable');
  var isObject$3 = require('../internals/is-object');
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
  var concat = uncurryThis$g([].concat);
  var push$4 = uncurryThis$g([].push);
  var stringIndexOf$3 = uncurryThis$g(''.indexOf);
  var stringSlice$6 = uncurryThis$g(''.slice);
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
      var replacer = isObject$3(searchValue) ? getMethod$2(searchValue, REPLACE) : undefined;
      return replacer ? call$9(replacer, searchValue, O, replaceValue) : call$9(nativeReplace, toString$9(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$8(this);
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
          accumulatedResult += stringSlice$6(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$6(S, nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var DESCRIPTORS$8 = require('../internals/descriptors');
  var globalThis$c = require('../internals/global-this');
  var uncurryThis$f = require('../internals/function-uncurry-this');
  var isForced$2 = require('../internals/is-forced');
  var inheritIfRequired$1 = require('../internals/inherit-if-required');
  var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property');
  var create = require('../internals/object-create');
  var getOwnPropertyNames$1 = require('../internals/object-get-own-property-names').f;
  var isPrototypeOf$5 = require('../internals/object-is-prototype-of');
  var isRegExp = require('../internals/is-regexp');
  var toString$8 = require('../internals/to-string');
  var getRegExpFlags$3 = require('../internals/regexp-get-flags');
  var stickyHelpers$1 = require('../internals/regexp-sticky-helpers');
  var proxyAccessor = require('../internals/proxy-accessor');
  var defineBuiltIn$5 = require('../internals/define-built-in');
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
  var exec$2 = uncurryThis$f(RegExpPrototype$1.exec);
  var charAt$1 = uncurryThis$f(''.charAt);
  var replace$3 = uncurryThis$f(''.replace);
  var stringIndexOf$2 = uncurryThis$f(''.indexOf);
  var stringSlice$5 = uncurryThis$f(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
  var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$8 && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$d(function () {
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
    for (var keys = getOwnPropertyNames$1(NativeRegExp), index = 0; keys.length > index;) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
    }
    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    defineBuiltIn$5(globalThis$c, 'RegExp', RegExpWrapper, {
      constructor: true
    });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies$1('RegExp');

  var PROPER_FUNCTION_NAME$1 = require('../internals/function-name').PROPER;
  var defineBuiltIn$4 = require('../internals/define-built-in');
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
    defineBuiltIn$4(RegExpPrototype, TO_STRING, function toString() {
      var R = anObject$7(this);
      var pattern = $toString$1(R.source);
      var flags = $toString$1(getRegExpFlags$2(R));
      return '/' + pattern + '/' + flags;
    }, {
      unsafe: true
    });
  }

  var uncurryThis$e = require('../internals/function-uncurry-this');
  var id = 0;
  var postfix = Math.random();
  var toString$7 = uncurryThis$e(1.1.toString);
  module.exports = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id + postfix, 36);
  };

  var uid$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3$3 = /*@__PURE__*/getAugmentedNamespace(uid$2);

  var es_symbol = {};

  // `Symbol.prototype.description` getter
  var $$h = require('../internals/export');
  var DESCRIPTORS$7 = require('../internals/descriptors');
  var globalThis$b = require('../internals/global-this');
  var call$8 = require('../internals/function-call');
  var uncurryThis$d = require('../internals/function-uncurry-this');
  var hasOwn$4 = require('../internals/has-own-property');
  var isCallable$a = require('../internals/is-callable');
  var isPrototypeOf$4 = require('../internals/object-is-prototype-of');
  var toString$6 = require('../internals/to-string');
  var defineBuiltInAccessor$2 = require('../internals/define-built-in-accessor');
  var copyConstructorProperties$1 = require('../internals/copy-constructor-properties');
  var NativeSymbol = globalThis$b.Symbol;
  var SymbolPrototype$1 = NativeSymbol && NativeSymbol.prototype;
  if (DESCRIPTORS$7 && isCallable$a(NativeSymbol) && (!('description' in SymbolPrototype$1) ||
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
        var symbol = call$8(nativeFor, this, stringKey);
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
    var replace$2 = uncurryThis$d(''.replace);
    var stringSlice$4 = uncurryThis$d(''.slice);
    defineBuiltInAccessor$2(SymbolPrototype$1, 'description', {
      configurable: true,
      get: function description() {
        var symbol = thisSymbolValue(this);
        if (hasOwn$4(EmptyStringDescriptionStore, symbol)) return '';
        var string = symbolDescriptiveString(symbol);
        var desc = NATIVE_SYMBOL$3 ? stringSlice$4(string, 7, -1) : replace$2(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$h({
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

  var $$g = require('../internals/export');
  var globalThis$9 = require('../internals/global-this');
  var call$7 = require('../internals/function-call');
  var uncurryThis$c = require('../internals/function-uncurry-this');
  var IS_PURE$4 = require('../internals/is-pure');
  var DESCRIPTORS$6 = require('../internals/descriptors');
  var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
  var fails$b = require('../internals/fails');
  var hasOwn$3 = require('../internals/has-own-property');
  var isPrototypeOf$3 = require('../internals/object-is-prototype-of');
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
  var $Symbol = globalThis$9.Symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
  var RangeError = globalThis$9.RangeError;
  var TypeError$2 = globalThis$9.TypeError;
  var QObject = globalThis$9.QObject;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$3 = uncurryThis$c([].push);
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
  var setSymbolDescriptor = DESCRIPTORS$6 && fails$b(function () {
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
    if (!DESCRIPTORS$6) symbol.description = description;
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
      if (!DESCRIPTORS$6 || call$7($propertyIsEnumerable, properties, key)) $defineProperty$1(O, key, properties[key]);
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
      if (isPrototypeOf$3(SymbolPrototype, this)) throw new TypeError$2('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
      var tag = uid$1(description);
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
      if (DESCRIPTORS$6 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
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
    if (DESCRIPTORS$6) {
      // https://tc39.es/ecma262/#sec-symbol.prototype.description
      defineBuiltInAccessor$1(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$1(this).description;
        }
      });
      if (!IS_PURE$4) {
        defineBuiltIn$3(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
          unsafe: true
        });
      }
    }
  }
  $$g({
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
  $$g({
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
  $$g({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$2,
    sham: !DESCRIPTORS$6
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
  $$g({
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

  var uncurryThis$b = require('../internals/function-uncurry-this');
  var toString$5 = uncurryThis$b({}.toString);
  var stringSlice$3 = uncurryThis$b(''.slice);
  module.exports = function (it) {
    return stringSlice$3(toString$5(it), 8, -1);
  };

  var classofRaw = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$4 = /*@__PURE__*/getAugmentedNamespace(classofRaw);

  var classof$5;
  var hasRequiredClassof;

  function requireClassof () {
  	if (hasRequiredClassof) return classof$5;
  	hasRequiredClassof = 1;

  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var isCallable = require$$5$4;
  	var classofRaw = require$$1$4;
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

  var getBuiltIn$3 = require('../internals/get-built-in');
  var isCallable$8 = require('../internals/is-callable');
  var isPrototypeOf$2 = require('../internals/object-is-prototype-of');
  var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
  var $Object$1 = Object;
  module.exports = USE_SYMBOL_AS_UID ? function (it) {
    return _typeof(it) == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$8($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$1(it));
  };

  var isSymbol$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$3 = /*@__PURE__*/getAugmentedNamespace(isSymbol$2);

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

  var $$f = require('../internals/export');
  var getBuiltIn$2 = require('../internals/get-built-in');
  var apply$1 = require('../internals/function-apply');
  var call$6 = require('../internals/function-call');
  var uncurryThis$a = require('../internals/function-uncurry-this');
  var fails$a = require('../internals/fails');
  var isArray$2 = require('../internals/is-array');
  var isCallable$7 = require('../internals/is-callable');
  var isRawJSON = require('../internals/is-raw-json');
  var isSymbol$1 = require('../internals/is-symbol');
  var classof$4 = require('../internals/classof-raw');
  var toString$3 = require('../internals/to-string');
  var arraySlice$1 = require('../internals/array-slice');
  var parseJSONString = require('../internals/parse-json-string');
  var uid = require('../internals/uid');
  var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection');
  var NATIVE_RAW_JSON = require('../internals/native-raw-json');
  var $String$2 = String;
  var $stringify = getBuiltIn$2('JSON', 'stringify');
  var exec$1 = uncurryThis$a(/./.exec);
  var charAt = uncurryThis$a(''.charAt);
  var charCodeAt$1 = uncurryThis$a(''.charCodeAt);
  var replace$1 = uncurryThis$a(''.replace);
  var slice = uncurryThis$a(''.slice);
  var push$2 = uncurryThis$a([].push);
  var numberToString = uncurryThis$a(1.1.toString);
  var surrogates = /[\uD800-\uDFFF]/g;
  var leadingSurrogates = /^[\uD800-\uDBFF]$/;
  var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
  var MARK = uid();
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
    if (!isCallable$7($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$7($replacer)) value = call$6($replacer, this, $String$2(key), value);
      if (!isSymbol$1(value)) return value;
    };
    return apply$1($stringify, null, args);
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
    if (isCallable$7(replacer)) return replacer;
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
  if ($stringify) $$f({
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

  	var $ = require$$0$7;
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

  var path$1;
  var hasRequiredPath;

  function requirePath () {
  	if (hasRequiredPath) return path$1;
  	hasRequiredPath = 1;

  	var globalThis = require$$3$4;
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

  var call$5 = require('../internals/function-call');
  var uncurryThis$9 = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$5 = require('../internals/an-object');
  var isObject$2 = require('../internals/is-object');
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
  var push$1 = uncurryThis$9([].push);
  var stringSlice$2 = uncurryThis$9(''.slice);
  var stringIndexOf$1 = uncurryThis$9(''.indexOf);

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
      var splitter = isObject$2(separator) ? getMethod$1(separator, SPLIT) : undefined;
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
        var z = regExpExec$1(splitter, UNSUPPORTED_Y ? stringSlice$2(S, q) : S);
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
  var fails$7 = require('../internals/fails');
  var classof$3 = require('../internals/classof-raw');
  var $Object = Object;
  var split = uncurryThis$8(''.split);

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

  var require$$2$2 = /*@__PURE__*/getAugmentedNamespace(indexedObject);

  var toIndexedObject$1;
  var hasRequiredToIndexedObject;

  function requireToIndexedObject () {
  	if (hasRequiredToIndexedObject) return toIndexedObject$1;
  	hasRequiredToIndexedObject = 1;

  	// toObject with fallback for non-array-like ES3 strings
  	var IndexedObject = require$$2$2;
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	toIndexedObject$1 = function (it) {
  	  return IndexedObject(requireObjectCoercible(it));
  	};
  	return toIndexedObject$1;
  }

  var DESCRIPTORS$5 = require('../internals/descriptors');
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
  exports.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
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

  var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertyDescriptor);

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
  	var nativeGetOwnPropertyDescriptor = require$$2$1.f;
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

  var DESCRIPTORS$4 = require('../internals/descriptors');
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
  exports.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
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

  var require$$1$3 = /*@__PURE__*/getAugmentedNamespace(objectDefineProperty);

  var wellKnownSymbolDefine;
  var hasRequiredWellKnownSymbolDefine;

  function requireWellKnownSymbolDefine () {
  	if (hasRequiredWellKnownSymbolDefine) return wellKnownSymbolDefine;
  	hasRequiredWellKnownSymbolDefine = 1;

  	var path = requirePath();
  	var hasOwn = requireHasOwnProperty();
  	var wrappedWellKnownSymbolModule = requireWellKnownSymbolWrapped();
  	var defineProperty = require$$1$3.f;
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

  var require$$0$6 = /*@__PURE__*/getAugmentedNamespace(isObject$1);

  var anObject$3;
  var hasRequiredAnObject;

  function requireAnObject () {
  	if (hasRequiredAnObject) return anObject$3;
  	hasRequiredAnObject = 1;

  	var isObject = require$$0$6;
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
  	var definePropertyModule = require$$1$3;
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

  var addToUnscopables$3;
  var hasRequiredAddToUnscopables;

  function requireAddToUnscopables () {
  	if (hasRequiredAddToUnscopables) return addToUnscopables$3;
  	hasRequiredAddToUnscopables = 1;

  	var wellKnownSymbol = requireWellKnownSymbol();
  	var create = requireObjectCreate();
  	var defineProperty = require$$1$3.f;
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

  var globalThis$7 = require('../internals/global-this');
  var isCallable$5 = require('../internals/is-callable');
  var WeakMap$1 = globalThis$7.WeakMap;
  module.exports = isCallable$5(WeakMap$1) && /native code/.test(String(WeakMap$1));

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
  	var definePropertyModule = require$$1$3;
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

  var globalThis$6 = require('../internals/global-this');
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
    handlePrototype(globalThis$6[COLLECTION_NAME] && globalThis$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }
  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var $$e = require('../internals/export');
  var call$3 = require('../internals/function-call');
  var IS_PURE$3 = require('../internals/is-pure');
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
        if (!IS_PURE$3 && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf) {
            setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$1])) {
            defineBuiltIn$2(CurrentIteratorPrototype, ITERATOR$1, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
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
      } else $$e({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }

    // define iterator
    if ((!IS_PURE$3 || FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
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

  var require$$3$1 = /*@__PURE__*/getAugmentedNamespace(iteratorDefine);

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
  	var defineProperty = require$$1$3.f;
  	var defineIterator = require$$3$1;
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
  	var defineIterator = require$$3$1;
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
  var fails$6 = require('../internals/fails');
  var isCallable$3 = require('../internals/is-callable');
  var hasOwn$1 = require('../internals/has-own-property');
  var DESCRIPTORS$3 = require('../internals/descriptors');
  var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
  var inspectSource$2 = require('../internals/inspect-source');
  var InternalStateModule = require('../internals/internal-state');
  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$1 = Object.defineProperty;
  var stringSlice$1 = uncurryThis$7(''.slice);
  var replace = uncurryThis$7(''.replace);
  var join = uncurryThis$7([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS$3 && !fails$6(function () {
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
      if (DESCRIPTORS$3) defineProperty$1(value, 'name', {
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
        if (DESCRIPTORS$3) defineProperty$1(value, 'prototype', {
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
  	var definePropertyModule = require$$1$3;
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

  var require$$2 = /*@__PURE__*/getAugmentedNamespace(objectToString);

  var hasRequiredEs_object_toString;

  function requireEs_object_toString () {
  	if (hasRequiredEs_object_toString) return es_object_toString;
  	hasRequiredEs_object_toString = 1;

  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var toString = require$$2;

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

  	var classof = require$$1$4;

  	// `IsArray` abstract operation
  	// https://tc39.es/ecma262/#sec-isarray
  	// eslint-disable-next-line es/no-array-isarray -- safe
  	isArray$1 = Array.isArray || function isArray(argument) {
  	  return classof(argument) === 'Array';
  	};
  	return isArray$1;
  }

  var uncurryThis$6 = require('../internals/function-uncurry-this');
  var fails$5 = require('../internals/fails');
  var isCallable$2 = require('../internals/is-callable');
  var classof$1 = require('../internals/classof');
  var getBuiltIn$1 = require('../internals/get-built-in');
  var inspectSource$1 = require('../internals/inspect-source');
  var noop = function noop() {/* empty */};
  var construct = getBuiltIn$1('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec = uncurryThis$6(constructorRegExp.exec);
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
  module.exports = !construct || fails$5(function () {
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
  	var definePropertyModule = require$$1$3;
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	createProperty = function (object, key, value) {
  	  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));else object[key] = value;
  	};
  	return createProperty;
  }

  var DESCRIPTORS$2 = require('../internals/descriptors');
  var isArray = require('../internals/is-array');
  var $TypeError$1 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$2 && !function () {
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

  var require$$8 = /*@__PURE__*/getAugmentedNamespace(arraySetLength);

  var call$2 = require('../internals/function-call');
  var uncurryThis$5 = require('../internals/function-uncurry-this');
  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
  var anObject$2 = require('../internals/an-object');
  var isObject = require('../internals/is-object');
  var toLength = require('../internals/to-length');
  var toString$1 = require('../internals/to-string');
  var requireObjectCoercible = require('../internals/require-object-coercible');
  var getMethod = require('../internals/get-method');
  var advanceStringIndex = require('../internals/advance-string-index');
  var getRegExpFlags = require('../internals/regexp-get-flags');
  var regExpExec = require('../internals/regexp-exec-abstract');
  var stringIndexOf = uncurryThis$5(''.indexOf);

  // @@match logic
  fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isObject(regexp) ? getMethod(regexp, MATCH) : undefined;
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

  var uncurryThis$4 = require('../internals/function-uncurry-this');
  module.exports = uncurryThis$4([].slice);

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
  	var isConstructor = require$$0$2;
  	var isObject = require$$0$6;
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

  var uncurryThis$3 = require('../internals/function-uncurry-this');
  var aCallable$3 = require('../internals/a-callable');
  module.exports = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$3(aCallable$3(Object.getOwnPropertyDescriptor(object, key)[method]));
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
  	var uncurryThisAccessor = require$$0;
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

  var setToStringTag;
  var hasRequiredSetToStringTag;

  function requireSetToStringTag () {
  	if (hasRequiredSetToStringTag) return setToStringTag;
  	hasRequiredSetToStringTag = 1;

  	var defineProperty = require$$1$3.f;
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
  	var defineProperty = require$$1$3;
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

  var aCallable$2;
  var hasRequiredACallable;

  function requireACallable () {
  	if (hasRequiredACallable) return aCallable$2;
  	hasRequiredACallable = 1;

  	var isCallable = require$$5$4;
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

  var $$d = require('../internals/export');
  var functionApply$1 = require('../internals/function-apply');
  var aCallable$1 = require('../internals/a-callable');
  var anObject$1 = require('../internals/an-object');
  var fails$4 = require('../internals/fails');

  // MS Edge argumentsList argument is optional
  var OPTIONAL_ARGUMENTS_LIST = !fails$4(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.apply(function () {/* empty */});
  });

  // `Reflect.apply` method
  // https://tc39.es/ecma262/#sec-reflect.apply
  $$d({
    target: 'Reflect',
    stat: true,
    forced: OPTIONAL_ARGUMENTS_LIST
  }, {
    apply: function apply(target, thisArgument, argumentsList) {
      return functionApply$1(aCallable$1(target), thisArgument, anObject$1(argumentsList));
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

  	var classofRaw = require$$1$4;
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

  var globalThis$3 = require('../internals/global-this');
  var DESCRIPTORS$1 = require('../internals/descriptors');

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  module.exports = function (name) {
    if (!DESCRIPTORS$1) return globalThis$3[name];
    var descriptor = getOwnPropertyDescriptor$1(globalThis$3, name);
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

  var $$c = require('../internals/export');
  var IS_PURE$2 = require('../internals/is-pure');
  var NativePromiseConstructor$1 = require('../internals/promise-native-constructor');
  var fails$3 = require('../internals/fails');
  var getBuiltIn = require('../internals/get-built-in');
  var isCallable$1 = require('../internals/is-callable');
  var speciesConstructor = require('../internals/species-constructor');
  var promiseResolve$1 = require('../internals/promise-resolve');
  var defineBuiltIn = require('../internals/define-built-in');
  var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var NON_GENERIC = !!NativePromiseConstructor$1 && fails$3(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromisePrototype$1['finally'].call({
      then: function then() {/* empty */}
    }, function () {/* empty */});
  });

  // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally
  $$c({
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
  if (!IS_PURE$2 && isCallable$1(NativePromiseConstructor$1)) {
    var method = getBuiltIn('Promise').prototype['finally'];
    if (NativePromisePrototype$1['finally'] !== method) {
      defineBuiltIn(NativePromisePrototype$1, 'finally', method, {
        unsafe: true
      });
    }
  }

  var globalThis$2 = require('../internals/global-this');
  var NativePromiseConstructor = require('../internals/promise-native-constructor');
  var isCallable = require('../internals/is-callable');
  var isForced$1 = require('../internals/is-forced');
  var inspectSource = require('../internals/inspect-source');
  var wellKnownSymbol$1 = require('../internals/well-known-symbol');
  var ENVIRONMENT = require('../internals/environment');
  var IS_PURE$1 = require('../internals/is-pure');
  var V8_VERSION = require('../internals/environment-v8-version');
  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  var SPECIES = wellKnownSymbol$1('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis$2.PromiseRejectionEvent);
  var FORCED_PROMISE_CONSTRUCTOR = isForced$1('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
    if (IS_PURE$1 && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
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
  	var globalThis = require$$3$4;
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

  var bind = require('../internals/function-bind-context');
  var call = require('../internals/function-call');
  var anObject = require('../internals/an-object');
  var tryToString = require('../internals/try-to-string');
  var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
  var lengthOfArrayLike$1 = require('../internals/length-of-array-like');
  var isPrototypeOf$1 = require('../internals/object-is-prototype-of');
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
        for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
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
      if (_typeof(result) == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
    }
    return new Result(false);
  };

  var iterate = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$5 = /*@__PURE__*/getAugmentedNamespace(iterate);

  var $$b = require('../internals/export');
  var from = require('../internals/array-from');
  var checkCorrectnessOfIteration$1 = require('../internals/check-correctness-of-iteration');
  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$b({
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

  	var $ = require$$0$7;
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

  function Component$1() {
    Lampa.Lang.add({
      clientChoose: {
        ru: "Выбор клиента",
        en: "Select client",
        uk: "Вибір клієnta",
        zh: "选择客户端",
        ro: "Selectați clientul"
      },
      pathMovie: {
        "ru": "Путь сохранения фильмов",
        "en": "Path to save movies",
        "uk": "Шлях збереження фільмів",
        "ro": "Calea de salvare a filmelor"
      },
      pathTV: {
        "ru": "Путь сохранения сериалов",
        "en": "Path to save TV shows",
        "uk": "Шлях збереження серіалів",
        "ro": "Calea de salvare a serialelor"
      },
      pathMovieQbit: {
        "ru": "Категория/Метка для фильмов",
        "en": "Category/Label for movies",
        "uk": "Категорія/Мітка pentru фільмів",
        "ro": "Categorie/Etichetă pentru filme"
      },
      pathTVQbit: {
        "ru": "Категория/Метка для сериалов",
        "en": "Category/Label for TV shows",
        "uk": "Категорія/Мітка pentru серіалів",
        "ro": "Categorie/Etichetă pentru seriale"
      },
      universalAction: {
        ru: "Действие",
        en: "Action",
        uk: "Дія",
        zh: "行动",
        ro: "Acțiune"
      },
      openUniversal: {
        ru: "Открывать в клиенте",
        en: "Open in external client",
        uk: "Відкрити у застосунку",
        zh: "在外部客户端打开",
        ro: "Deschide în client extern"
      },
      copyUniversal: {
        ru: "Копировать ссылку",
        en: "Copy link",
        uk: "Скопіювати посилання",
        zh: "复制到缓冲区",
        ro: "Copiază link-ul"
      },
      tweak: {
        ru: "Tweak",
        en: "Tweak",
        uk: "Tweak",
        zh: "高级设置",
        ro: "Optimizare (Tweak)"
      },
      LMEProxy: {
        ru: "Прокси",
        en: "Proxy",
        uk: "Проксі",
        zh: "Proxy",
        ro: "Proxy"
      },
      LMEProxyDescription: {
        en: "The proxy service from the LME project can help when connecting through external addresses. For example, Keenetic or Synology DNS",
        ru: "Прокси сервис от проекта LME, может помочь при подключении через внешние адреса. Например Keenetic или Synology DNS",
        uk: "Проксі-сервіс від проєкту LME може допомогти при підключенні через зовнішні адреси. Наприклад, Keenetic або Synology DNS",
        ro: "Serviciul proxy din proiectul LME poate ajuta la conectarea prin adrese externe. De exemplu, Keenetic sau Synology DNS"
      },
      TransmissionRPCRoute: {
        ru: "RPC Path",
        en: "RPC Path",
        uk: "RPC Path",
        zh: "RPC 路径",
        ro: "Cale RPC"
      },
      TransmissionRPCRouteDescription: {
        ru: "Изменение пути API. Не трогать без необходимости, если используете KeenDNS указать /app/transmission/rpc",
        en: "Change api route. Do not change without need, if you use KeenDNS, specify /app/transmission/rpc",
        uk: "Змінити маршрут API. Не чіпати без нагальної потреби, якщо ви використовуєте KeenDNS, вкажіть /app/transmission/rpc",
        zh: "更改API路径。如无必要，请勿更改, 如使用 KeenDNS，请指定 /app/transmission/rpc",
        ro: "Modifică ruta API. Nu schimbați fără necesitate, dacă folosiți KeenDNS, specificați /app/transmission/rpc"
      },
      //Auth
      AuthSuccess: {
        en: "Authentication successful",
        ru: "Аутентификация успешна",
        uk: "Аутентифікація успішна",
        ro: "Autentificare reușită"
      },
      AuthDenied: {
        en: "Authentication denied",
        ru: "Аутентификация отклонена",
        uk: "Аутентифікацію відхилено",
        ro: "Autentificare respinsă"
      },
      torrentmanager_auth_mode: {
        en: "Auth mode",
        ru: "Режим авторизации",
        uk: "Режим авторизації",
        ro: "Mod autentificare"
      },
      torrentmanager_auth_mode_session: {
        en: "Session (qB <= 5.1)",
        ru: "Сессия (qB <= 5.1)",
        uk: "Сесія (qB <= 5.1)",
        ro: "Sesiune (qB <= 5.1)"
      },
      torrentmanager_auth_mode_apikey: {
        en: "API key (qB >= 5.2 beta)",
        ru: "API key (qB >= 5.2 beta)",
        uk: "API key (qB >= 5.2 beta)",
        ro: "Cheie API (qB >= 5.2 beta)"
      },
      torrentmanager_api_key: {
        en: "API key",
        ru: "API key",
        uk: "API key",
        ro: "Cheie API"
      },
      torrentmanager_test_connection: {
        en: "Test connection",
        ru: "Проверить подключение",
        uk: "Перевірити підключення",
        ro: "Testează conexiunea"
      },
      torrentmanager_reauth_now: {
        en: "Re-auth now",
        ru: "Переавторизоваться",
        uk: "Переавторизуватись",
        ro: "Re-autentificare acum"
      },
      torrentmanager_retry: {
        en: "Retry",
        ru: "Повторить",
        uk: "Повторити",
        ro: "Reîncearcă"
      },
      torrentmanager_open_settings: {
        en: "Open settings",
        ru: "Открыть настройки",
        uk: "Відкрити налаштування",
        ro: "Deschide setările"
      },
      torrentmanager_state_loading: {
        en: "Loading torrents",
        ru: "Загрузка торрентов",
        uk: "Завантаження торрентів",
        ro: "Se încarcă torrentele"
      },
      torrentmanager_state_empty_title: {
        en: "No torrents found",
        ru: "Торренты не найдены",
        uk: "Торрентів не знайдено",
        ro: "Nu s-au găsit torrente"
      },
      torrentmanager_state_empty_description: {
        en: "The list is empty right now",
        ru: "Список сейчас пуст",
        uk: "Список зараз порожній",
        ro: "Lista este goală în acest moment"
      },
      torrentmanager_state_auth_title: {
        en: "Authorization required",
        ru: "Требуется авторизация",
        uk: "Потрібна авторизація",
        ro: "Necesită autentificare"
      },
      torrentmanager_state_auth_description: {
        en: "Check credentials and reconnect to the torrent client",
        ru: "Проверьте учетные данные и повторите подключение к торрент-клиенту",
        uk: "Перевірте облікові дані та повторіть підключення до торрент-клієнта",
        ro: "Verifică datele de acces și reconectează-te la clientul torrent"
      },
      torrentmanager_state_network_title: {
        en: "Connection error",
        ru: "Ошибка соединения",
        uk: "Помилка з'єднання",
        ro: "Eroare de conexiune"
      },
      torrentmanager_state_network_description: {
        en: "Cannot reach torrent client. Check address, proxy, and network",
        ru: "Не удалось подключиться к торрент-клиенту. Проверьте адрес, прокси и сеть",
        uk: "Не вдалося підключитися до торрент-клієнта. Перевірте адресу, проксі та мережу",
        ro: "Clientul torrent nu poate fi accesat. Verifică adresa, proxy-ul și rețeaua"
      },
      torrentmanager_url_requires_protocol: {
        en: "Address must start with http:// or https://",
        ru: "Адрес должен начинаться с http:// или https://",
        uk: "Адреса має починатися з http:// або https://",
        ro: "Adresa trebuie să înceapă cu http:// sau https://"
      },
      torrentmanager_state_server_title: {
        en: "Server unavailable",
        ru: "Сервер недоступен",
        uk: "Сервер недоступний",
        ro: "Server indisponibil"
      },
      torrentmanager_state_server_description: {
        en: "Torrent client returned a server error",
        ru: "Торрент-клиент вернул серверную ошибку",
        uk: "Торрент-клієнт повернув серверну помилку",
        ro: "Clientul torrent a raportat o eroare de server"
      },
      torrentmanager_secret_set: {
        en: "saved",
        ru: "сохранен",
        uk: "збережено",
        ro: "salvat"
      },
      torrentmanager_secret_not_set: {
        en: "not set",
        ru: "не задан",
        uk: "не задано",
        ro: "nesetat"
      },
      torrentmanager_secret_saved: {
        en: "Secret updated",
        ru: "Секрет обновлен",
        uk: "Секрет оновлено",
        ro: "Secret actualizat"
      },
      //Panel
      clientNotClient: {
        en: "Either the client is not configured or the server is not responding, check the console, you might find the answer there",
        ru: "Или клиент не настроен или сервер не отвечает, узри консоль, возможно там найдешь ответ",
        uk: "Або клієнт не налаштований, або сервер не відповідає, перевір консоль, можливо там знайдеш відповідь",
        ro: "Clientul nu este configurat sau serverul nu răspunde, verifică consola pentru detalii"
      },
      somethingWentWrong: {
        en: "Something went wrong",
        ru: "Что-то пошло не так",
        uk: "Щось пішло не так",
        ro: "Ceva nu a mers bine"
      },
      //Panel action
      actionWithTorrent: {
        en: "Action with torrent",
        ru: "Действие с торрентом",
        uk: "Дія з торрентом",
        ro: "Acțiune cu torrentul"
      },
      resume: {
        en: "Resume",
        ru: "Возобновить",
        uk: "Відновити",
        ro: "Reia"
      },
      pause: {
        en: "Pause",
        ru: "Пауза",
        uk: "Пауза",
        ro: "Pauză"
      },
      "delete": {
        en: "Delete",
        ru: "Удалить",
        uk: "Видалити",
        ro: "Șterge"
      },
      fullDelete: {
        en: "Full delete",
        ru: "Полное удаление",
        uk: "Повне видалення",
        ro: "Ștergere completă"
      },
      actionSentSuccessfully: {
        "en": "Action sent successfully",
        "ru": "Действие успешно отправлено",
        "uk": "Дію успішно надіслано",
        "ro": "Acțiune trimisă cu succes"
      },
      actionReturnedError: {
        en: "Action returned an error",
        ru: "Действие вернуло ошибку",
        uk: "Дія повернула помилку",
        ro: "Acțiunea a returnat o eroare"
      },
      torrent_select_file: {
        en: "Select file to play",
        ru: "Выберите файл для воспроизведения",
        uk: "Виберіть файл для відтворення",
        ro: "Selectați fișierul pentru redare"
      },
      sort_by_name: {
        en: "Sort by name",
        ru: "Сортировать по имени",
        uk: "Сортувати за назвою",
        ro: "Sortare după nume"
      },
      sort_by_size: {
        en: "Sort by size",
        ru: "Сортировать по размеру",
        uk: "Сортувати за розміром",
        ro: "Sortare după mărime"
      },
      sort_by_progress: {
        en: "Sort by progress",
        ru: "Сортировать по прогрессу",
        uk: "Сортувати за прогресом",
        ro: "Sortare după progres"
      },
      openCard: {
        en: "Open",
        ru: "Открыть",
        uk: "Відкрити",
        ro: "Deschide"
      },
      add_metadata: {
        en: "Add metadata",
        ru: "Добавить метаданные",
        uk: "Додати метадані",
        ro: "Adaugă metadate"
      },
      torrentmanager_nothing_found: {
        en: "Nothing found",
        ru: "Ничего не найдено",
        uk: "Нічого не знайдено",
        ro: "Nu s-a găsit nimic"
      },
      torrentmanager_metadata_updated: {
        en: "Metadata updated",
        ru: "Метаданные обновлены",
        uk: "Метадані оновлено",
        ro: "Metadate actualizate"
      },
      torrentmanager_metadata_error: {
        en: "Metadata error",
        ru: "Ошибка метаданных",
        uk: "Помилка метаданів",
        ro: "Eroare metadate"
      },
      torrentmanager_metadata_updated_all: {
        en: "Metadata updated",
        ru: "Метаданные обновлены",
        uk: "Метадані оновлено",
        ro: "Metadate actualizate"
      },
      torrentmanager_metadata_added: {
        en: "Metadata added",
        ru: "Метаданные добавлены",
        uk: "Метадані додано",
        ro: "Metadate adăugate"
      },
      add_metadata_all: {
        en: "Parse all",
        ru: "Парсить все",
        uk: "Парсити все",
        ro: "Procesează tot"
      },
      torrentmanager_settings_thanks: {
        en: "Thanks",
        ru: "Благодарность",
        uk: "Подяка",
        ro: "Mulțumesc"
      },
      torrentmanager_settings_thanks_description: {
        en: "Support for Torrent Manager development is voluntary. Thank you for your contribution.",
        ru: "Поддержка развития Torrent Manager добровольная. Спасибо за вклад.",
        uk: "Підтримка розвитку Torrent Manager добровільна. Дякуємо за внесок.",
        ro: "Susținerea dezvoltării Torrent Manager este voluntară. Vă mulțumim pentru contribuție."
      },
      selectResult: {
        en: "Select result",
        ru: "Выберите результат",
        uk: "Виберіть результат",
        ro: "Selectați rezultatul"
      }
    });
  }

  var $$a = require('../internals/export');
  var uncurryThis$2 = require('../internals/function-uncurry-this-clause');
  var $indexOf = require('../internals/array-includes').indexOf;
  var arrayMethodIsStrict$2 = require('../internals/array-method-is-strict');
  var nativeIndexOf = uncurryThis$2([].indexOf);
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$2 = NEGATIVE_ZERO || !arrayMethodIsStrict$2('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$a({
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

  var $$9 = require('../internals/export');
  var $map = require('../internals/array-iteration').map;
  var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$9({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

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
  var IS_PURE = require('../internals/is-pure');
  var DESCRIPTORS = require('../internals/descriptors');
  var globalThis$1 = require('../internals/global-this');
  var path = require('../internals/path');
  var uncurryThis$1 = require('../internals/function-uncurry-this');
  var isForced = require('../internals/is-forced');
  var hasOwn = require('../internals/has-own-property');
  var inheritIfRequired = require('../internals/inherit-if-required');
  var isPrototypeOf = require('../internals/object-is-prototype-of');
  var isSymbol = require('../internals/is-symbol');
  var toPrimitive = require('../internals/to-primitive');
  var fails$2 = require('../internals/fails');
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
  var stringSlice = uncurryThis$1(''.slice);
  var charCodeAt = uncurryThis$1(''.charCodeAt);

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
  var FORCED$1 = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));
  var calledWithNew = function calledWithNew(dummy) {
    // includes check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails$2(function () {
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
  if (FORCED$1 && !IS_PURE) NumberPrototype.constructor = NumberWrapper;
  $$7({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED$1
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
  if (FORCED$1 || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);

  var $$6 = require('../internals/export');
  var $find = require('../internals/array-iteration').find;
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
  $$6({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES$1
  }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$2(FIND);

  var regexp2 = /(?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv/;
  function getProgressClass(progress) {
    if (progress >= 100) {
      return 'is-high';
    }
    if (progress >= 50) {
      return 'is-mid';
    }
    return 'is-low';
  }
  function Item(data) {
    this.id = data.id; // зберігаємо ідентифікатор торренту
    var initialProgress = Number((data.completed * 100).toFixed(2));
    var itemN = Lampa.Template.get('lmetorrent_item__card', {
      title: data.name,
      size: Lampa.Utils.bytesToSize(data.size, 0),
      state: data.state,
      "data-completed": initialProgress,
      completed: initialProgress + "%",
      image: data.image,
      image_src: '',
      quality: data.name.match(regexp2) ? data.name.match(regexp2).toString().replace(/[ .()]/g, '') : ''
    });
    itemN.find('.lmetorrent_card__completed').addClass(getProgressClass(initialProgress));
    this.render = function () {
      return itemN;
    };

    // Метод для оновлення статусу та прогресу
    this.update = function (newData) {
      // Припускається, що відповідні елементи мають класи для статусу та прогресу
      itemN.find('.lmetorrent_card__state').text(newData.state);
      var progress = Number((newData.completed * 100).toFixed(2));
      itemN.attr("data-completed", progress);
      itemN.find('.lmetorrent_card__completed').removeClass('is-low is-mid is-high').addClass(getProgressClass(progress)).text(progress + "%");
    };
    this.destroy = function () {
      itemN.remove();
    };
  }

  function Header(data) {
    var item = Lampa.Template.get("lmetorrent_header", {
      space: Lampa.Utils.bytesToSize(data.space, 0)
    });
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      item.remove();
    };
  }

  var $$5 = require('../internals/export');
  var $values = require('../internals/object-to-array').values;

  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  $$5({
    target: 'Object',
    stat: true
  }, {
    values: function values(O) {
      return $values(O);
    }
  });

  function buildTmdbImageUrl(path) {
    var posterSize = Lampa.Storage.field('poster_size') || 'w200';
    return Lampa.Api.img(path, posterSize);
  }
  function buildTmdbImagesApiUrl(label) {
    var tmdbLang = Lampa.Storage.field('tmdb_lang') || Lampa.Storage.get('language') || 'en';
    return Lampa.TMDB.api("".concat(label, "/images?api_key=").concat(Lampa.TMDB.key(), "&language=").concat(tmdbLang));
  }
  function fetchPosterFromSource(method, id) {
    var source = Lampa.Storage.get('source', 'tmdb');
    if (!source || source === 'tmdb') return Promise.resolve('');
    return new Promise(function (resolve) {
      Lampa.Api.full({
        id: id,
        method: method,
        source: source
      }, function (data) {
        var movie = data.movie || data;
        var poster = movie.poster || movie.img || '';
        if (poster) return resolve(poster);
        var path = movie.poster_path || movie.backdrop_path || movie.profile_path || '';
        if (path) return resolve(buildTmdbImageUrl(path));
        resolve('');
      }, function () {
        return resolve('');
      });
    });
  }
  function getPosterFromLabels(_x) {
    return _getPosterFromLabels.apply(this, arguments);
  }
  function _getPosterFromLabels() {
    _getPosterFromLabels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(labels) {
      var labelArray, label, _label$split, _label$split2, method, id, sourcePoster, response, poster, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            // Ищем лейблы, которые начинаются на tv или movie и содержат цифры после косой
            labelArray = Array.isArray(labels) ? labels : labels.split(','); // Find label matching tv/movie pattern
            label = labelArray.find(function (label) {
              return /^(tv|movie)\/\d+$/.test(label);
            });
            if (label) {
              _context.n = 1;
              break;
            }
            return _context.a(2, './img/img_load.svg');
          case 1:
            _label$split = label.split('/'), _label$split2 = _slicedToArray(_label$split, 2), method = _label$split2[0], id = _label$split2[1];
            _context.n = 2;
            return fetchPosterFromSource(method, id);
          case 2:
            sourcePoster = _context.v;
            if (!sourcePoster) {
              _context.n = 3;
              break;
            }
            return _context.a(2, sourcePoster);
          case 3:
            _context.p = 3;
            _context.n = 4;
            return new Promise(function (resolve, reject) {
              Lampa.Network.silent(buildTmdbImagesApiUrl(label), resolve, reject);
            });
          case 4:
            response = _context.v;
            poster = response && response.posters && response.posters[0];
            if (!(poster && poster.file_path)) {
              _context.n = 5;
              break;
            }
            return _context.a(2, buildTmdbImageUrl(poster.file_path));
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.log('getPosterFromLabels: images API failed', _t);
          case 7:
            return _context.a(2, './img/img_load.svg');
        }
      }, _callee, null, [[3, 6]]);
    }));
    return _getPosterFromLabels.apply(this, arguments);
  }

  var LME_PROXY_URL = "https://apx.lme.isroot.in/destination/";
  var LME_SIMKL_URL = "https://apx.lme.isroot.in/simkl/";

  var es_string_endsWith = {};

  var isRegexp;
  var hasRequiredIsRegexp;

  function requireIsRegexp () {
  	if (hasRequiredIsRegexp) return isRegexp;
  	hasRequiredIsRegexp = 1;

  	var isObject = require$$0$6;
  	var classof = require$$1$4;
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

  var hasRequiredEs_string_endsWith;

  function requireEs_string_endsWith () {
  	if (hasRequiredEs_string_endsWith) return es_string_endsWith;
  	hasRequiredEs_string_endsWith = 1;

  	var $ = require$$0$7;
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var getOwnPropertyDescriptor = require$$2$1.f;
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var notARegExp = requireNotARegexp();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
  	var IS_PURE = requireIsPure();
  	var slice = uncurryThis(''.slice);
  	var min = Math.min;
  	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
  	// https://github.com/zloirock/core-js/pull/702
  	var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  	  return descriptor && !descriptor.writable;
  	}();

  	// `String.prototype.endsWith` method
  	// https://tc39.es/ecma262/#sec-string.prototype.endswith
  	$({
  	  target: 'String',
  	  proto: true,
  	  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
  	}, {
  	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
  	    var that = toString(requireObjectCoercible(this));
  	    notARegExp(searchString);
  	    var search = toString(searchString);
  	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
  	    var len = that.length;
  	    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
  	    return slice(that, end - search.length, end) === search;
  	  }
  	});
  	return es_string_endsWith;
  }

  requireEs_string_endsWith();

  var HTTP_URL_PATTERN = /^https?:\/\/[^/\s?#]+(?:[/?#]|$)/i;
  var INVALID_STRING_VALUES = {
    undefined: true,
    null: true
  };
  function sanitizeConfigString(value) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var normalized = typeof value === "string" ? value.trim() : value === null || typeof value === "undefined" ? "" : String(value).trim();
    if (!normalized) {
      return fallback;
    }
    if (INVALID_STRING_VALUES[normalized.toLowerCase()]) {
      return fallback;
    }
    return normalized;
  }
  function normalizeBaseUrl(rawUrl) {
    var normalized = sanitizeConfigString(rawUrl);
    if (!normalized) {
      return "";
    }
    return normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized;
  }
  function normalizeApiPath(rawPath) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var normalizedFallback = sanitizeConfigString(fallback);
    var normalizedPath = sanitizeConfigString(rawPath, normalizedFallback);
    if (!normalizedPath) {
      return "";
    }
    return normalizedPath.charAt(0) === "/" ? normalizedPath : "/".concat(normalizedPath);
  }
  function createConfigError(message) {
    var error = new Error(message);
    error.name = "TorrentClientConfigError";
    error.isConfigError = true;
    return error;
  }
  function isHttpUrl(url) {
    return HTTP_URL_PATTERN.test(url);
  }
  function isRelativeUrl(url) {
    return url.charAt(0) === "/";
  }
  function normalizeProxyUrl(rawProxyUrl) {
    var normalized = sanitizeConfigString(rawProxyUrl, LME_PROXY_URL);
    return normalized.endsWith("/") ? normalized : "".concat(normalized, "/");
  }
  function resolveClientBaseUrl() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var clientName = options.clientName || "Torrent client";
    var normalizedUrl = normalizeBaseUrl(config.url);
    if (!normalizedUrl) {
      throw createConfigError("".concat(clientName, " URL is not configured"));
    }
    if (config.useProxy) {
      if (!isHttpUrl(normalizedUrl)) {
        throw createConfigError("".concat(clientName, " URL must include http:// or https:// when proxy is enabled"));
      }
      return "".concat(normalizeProxyUrl(config.proxy)).concat(normalizedUrl);
    }
    if (!isHttpUrl(normalizedUrl) && !isRelativeUrl(normalizedUrl)) {
      throw createConfigError("".concat(clientName, " URL has invalid format"));
    }
    return normalizedUrl;
  }

  var CONFIG_PREFIX$1 = "lmetorrentqBittorent";
  function getConfig$1() {
    var rawApiKey = Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "ApiKey"));
    return {
      url: sanitizeConfigString(Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Url"))),
      useProxy: Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Proxy")) === true,
      proxy: LME_PROXY_URL,
      apiKey: rawApiKey && rawApiKey !== "undefined" && rawApiKey !== "null" ? rawApiKey : ""
    };
  }
  function getApiBase$1() {
    return resolveClientBaseUrl(getConfig$1(), {
      clientName: "qBittorrent"
    });
  }
  function getHeaders$1(contentType) {
    var config = getConfig$1();
    var headers = {};
    if (contentType) {
      headers["Content-Type"] = contentType;
    }
    if (config.useProxy) {
      headers["x-requested-with"] = "lme-plugins";
    }
    if (config.apiKey) {
      headers.Authorization = "Bearer ".concat(config.apiKey);
    }
    return headers;
  }
  function normalizeError(error, fallback) {
    var message = error && (error.responseText || error.statusText || error.message) || fallback;
    var normalized = new Error(message);
    if (error && typeof error.status !== "undefined") {
      normalized.status = error.status;
    }
    return normalized;
  }
  function ajaxRequest(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    getConfig$1();
    var method = (options.method || "GET").toUpperCase();
    var settings = {
      url: "".concat(getApiBase$1()).concat(path),
      method: method,
      timeout: typeof options.timeout === "number" ? options.timeout : 10000,
      headers: getHeaders$1(options.contentType)
    };
    if (options.data) {
      settings.data = options.data;
    }
    return $.ajax(settings);
  }
  function makeRequest(_x) {
    return _makeRequest.apply(this, arguments);
  }
  function _makeRequest() {
    _makeRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(path) {
      var options,
        config,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            config = getConfig$1();
            if (config.url) {
              _context.n = 1;
              break;
            }
            throw new Error("qBittorrent URL is not configured");
          case 1:
            _context.p = 1;
            _context.n = 2;
            return ajaxRequest(path, options);
          case 2:
            return _context.a(2, _context.v);
          case 3:
            _context.p = 3;
            _t = _context.v;
            throw normalizeError(_t, "qBittorrent request failed");
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _makeRequest.apply(this, arguments);
  }
  function auth$1() {
    return _auth$1.apply(this, arguments);
  }
  function _auth$1() {
    _auth$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var showNotification,
        config,
        _args2 = arguments,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            showNotification = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : true;
            config = getConfig$1();
            if (config.url) {
              _context2.n = 1;
              break;
            }
            if (showNotification) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthDenied")
              });
            }
            throw new Error("qBittorrent URL is not configured");
          case 1:
            if (config.apiKey) {
              _context2.n = 2;
              break;
            }
            if (showNotification) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthDenied")
              });
            }
            throw new Error("qBittorrent API key is not configured");
          case 2:
            _context2.p = 2;
            _context2.n = 3;
            return ajaxRequest("/api/v2/app/version", {
              method: "GET"
            });
          case 3:
            if (showNotification) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthSuccess")
              });
            }
            return _context2.a(2, true);
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.log("TDM", "qBittorrent auth error:", _t2);
            if (showNotification) {
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthDenied")
              });
            }
            throw normalizeError(_t2, "qBittorrent auth failed");
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
    }));
    return _auth$1.apply(this, arguments);
  }
  function GetData$1() {
    return _GetData$1.apply(this, arguments);
  }
  function _GetData$1() {
    _GetData$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var response, torrents, _t0;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return makeRequest("/api/v2/sync/maindata", {
              method: "GET"
            });
          case 1:
            response = _context4.v;
            if (!(!response || !response.torrents)) {
              _context4.n = 2;
              break;
            }
            return _context4.a(2, []);
          case 2:
            torrents = Object.values(response.torrents);
            return _context4.a(2, Promise.all(torrents.map(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrent) {
                var _t3, _t4, _t5, _t6, _t7, _t8, _t9;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      _t3 = torrent.name;
                      _t4 = torrent.infohash_v1 || torrent.hash;
                      _t5 = torrent.size;
                      _t6 = torrent.state ? torrent.state.charAt(0).toUpperCase() + torrent.state.slice(1) : "";
                      _t7 = torrent.tags;
                      _context3.n = 1;
                      return getPosterFromLabels(torrent.tags);
                    case 1:
                      _t8 = _context3.v;
                      _t9 = Number(torrent.progress) || 0;
                      return _context3.a(2, {
                        name: _t3,
                        id: _t4,
                        size: _t5,
                        state: _t6,
                        labels: _t7,
                        image: _t8,
                        completed: _t9
                      });
                  }
                }, _callee3);
              }));
              return function (_x9) {
                return _ref.apply(this, arguments);
              };
            }())));
          case 3:
            _context4.p = 3;
            _t0 = _context4.v;
            console.log("TDM", "qBittorrent GetData error:", _t0);
            throw _t0;
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return _GetData$1.apply(this, arguments);
  }
  function GetInfo$1() {
    return _GetInfo$1.apply(this, arguments);
  }
  function _GetInfo$1() {
    _GetInfo$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var response;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return makeRequest("/api/v2/sync/maindata", {
              method: "GET"
            });
          case 1:
            response = _context5.v;
            return _context5.a(2, {
              space: response && response.server_state ? response.server_state.free_space_on_disk : 0
            });
        }
      }, _callee5);
    }));
    return _GetInfo$1.apply(this, arguments);
  }
  function normalizeActionByVersion(action, versionString) {
    var match = String(versionString || "").match(/^v?(\d+)(?:\.\d+)?/i);
    var major = match ? Number(match[1]) : 0;
    var normalized = _objectSpread2({}, action);
    if (major >= 5) {
      if (normalized.action === "resume") normalized.action = "start";
      if (normalized.action === "pause") normalized.action = "stop";
    }
    return normalized;
  }
  function SendCommand$1(_x2, _x3) {
    return _SendCommand$1.apply(this, arguments);
  }
  function _SendCommand$1() {
    _SendCommand$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(action, torrentData) {
      var version, normalizedAction, commandPath, requestData, _t1;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return makeRequest("/api/v2/app/version", {
              method: "GET"
            });
          case 1:
            version = _context6.v;
            normalizedAction = normalizeActionByVersion(action, version);
            commandPath = "/api/v2/torrents/".concat(normalizedAction.action);
            requestData = {
              hashes: torrentData.id
            };
            if (normalizedAction.action === "delete") {
              requestData.deleteFiles = normalizedAction.deleteFiles ? "true" : "false";
            }
            _context6.n = 2;
            return makeRequest(commandPath, {
              method: "POST",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              data: requestData
            });
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionSentSuccessfully")
            });
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t1 = _context6.v;
            console.log("TDM", "qBittorrent SendCommand error:", _t1);
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionReturnedError")
            });
            throw _t1;
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    return _SendCommand$1.apply(this, arguments);
  }
  function SendTask$1(_x4, _x5, _x6) {
    return _SendTask$1.apply(this, arguments);
  }
  function _SendTask$1() {
    _SendTask$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(selectedTorrent, labels, dtype) {
      var _t10;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (selectedTorrent) {
              _context7.n = 1;
              break;
            }
            throw new Error("No torrent selected");
          case 1:
            _context7.p = 1;
            _context7.n = 2;
            return makeRequest("/api/v2/torrents/add", {
              method: "POST",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              data: {
                tags: labels || "",
                urls: selectedTorrent.MagnetUri || selectedTorrent.Link,
                category: Lampa.Storage.get("lmetorrentqBittorent".concat(dtype)) || "",
                firstLastPiecePrio: Lampa.Storage.field("lmetorrentqBittorentfirstLastPiecePrio") ? "true" : "false",
                sequentialDownload: Lampa.Storage.field("lmetorrentqBittorentSequentialDownload") ? "true" : "false"
              }
            });
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionSentSuccessfully")
            });
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t10 = _context7.v;
            console.log("TDM", "qBittorrent SendTask error:", _t10);
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionReturnedError")
            });
            throw _t10;
          case 4:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 3]]);
    }));
    return _SendTask$1.apply(this, arguments);
  }
  function setTags(_x7, _x8) {
    return _setTags.apply(this, arguments);
  }
  function _setTags() {
    _setTags = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(torrentId, tags) {
      var tagValue;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            tagValue = Array.isArray(tags) ? tags.join(",") : tags;
            return _context8.a(2, makeRequest("/api/v2/torrents/addTags", {
              method: "POST",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              data: {
                hashes: torrentId,
                tags: tagValue
              }
            }));
        }
      }, _callee8);
    }));
    return _setTags.apply(this, arguments);
  }
  var Qbittorent = {
    auth: auth$1,
    GetData: GetData$1,
    GetInfo: GetInfo$1,
    SendCommand: SendCommand$1,
    SendTask: SendTask$1,
    setTags: setTags
  };

  var $$4 = require('../internals/export');
  var $filter = require('../internals/array-iteration').filter;
  var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$4({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  /**
   * Torrent Parser Utility
   * 
   * This module provides functionality to parse torrent names and
   * fetch corresponding metadata from TMDB.
   */

  /**
   * Clean torrent name by removing quality, year, and other technical information
   * 
   * @param {string} name - Original torrent name
   * @returns {string} - Cleaned name suitable for metadata search
   */
  function cleanName(name) {
    if (!name) return {
      query: '',
      year: null
    };

    // Regular expression to extract the main title from torrent name
    // Removes season/episode markers, year, quality indicators, etc.
    var regex = /*#__PURE__*/_wrapRegExp(/^(.+?)(?:[.\s(](19\d{2}|20\d{2})[.\s)]|S\d{1,2}(?:E\d{1,2})?|[.\s](?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv)/i, {
      title: 1,
      year: 2
    });
    var match = name.match(regex);

    // If we have a match with a title group, use it
    if (match && match.groups && match.groups.title) {
      // Replace dots between words with spaces
      return {
        query: match.groups.title.replace(/\./g, ' ').trim(),
        year: match.groups.year || null
      };
    }

    // Fallback: just replace dots with spaces
    return {
      query: name.replace(/\./g, ' ').trim(),
      year: null
    };
  }

  /**
   * Search for media metadata on TMDB
   * 
   * @param {string} query - Search query
   * @returns {Promise<Object>} - Promise resolving to TMDB response
   */
  function searchTMDB(_x) {
    return _searchTMDB.apply(this, arguments);
  }
  /**
   * Handle case when multiple results are found
   * 
   * @param {Array} results - Array of TMDB results
   * @returns {Promise<Object>} - Promise resolving to selected media info
   */
  function _searchTMDB() {
    _searchTMDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
      var tmdbLang, url, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            tmdbLang = Lampa.Storage.field('tmdb_lang') || Lampa.Storage.get('language') || 'en';
            url = Lampa.TMDB.api("search/multi?include_adult=true&query=".concat(encodeURIComponent(query), "&api_key=").concat(Lampa.TMDB.key(), "&language=").concat(tmdbLang));
            _context.p = 1;
            _context.n = 2;
            return new Promise(function (resolve, reject) {
              Lampa.Network.silent(url, resolve, reject, null, {
                timeout: 10000
              });
            });
          case 2:
            return _context.a(2, _context.v);
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error('TMDB', 'search error:', _t);
            throw new Error("Failed to fetch data from TMDB: ".concat(_t.statusText || _t.message));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _searchTMDB.apply(this, arguments);
  }
  function handleMultipleResults(results) {
    return new Promise(function (resolve, reject) {
      var enabled = Lampa.Controller.enabled().name;

      // Format menu items with title and date information
      var menuItems = results.map(function (result) {
        return {
          title: "".concat(result.title || result.name, " (").concat(result.media_type, ")") + (result.media_type === 'tv' && result.first_air_date ? " - ".concat(result.first_air_date) : '') + (result.media_type === 'movie' && result.release_date ? " - ".concat(result.release_date) : ''),
          media_type: result.media_type,
          id: result.id
        };
      });

      // Show selection menu
      Lampa.Select.show({
        title: Lampa.Lang.translate('selectResult'),
        items: menuItems,
        onBack: function onBack() {
          // Повертаємось до попереднього контролера, якщо він існує
          var currentController = Lampa.Controller.enabled();
          if (currentController && currentController.name !== enabled) {
            Lampa.Controller.toggle(enabled);
          } else {
            // Якщо контролер не змінився, просто вимикаємо меню
            Lampa.Controller.toggle('menu');
          }
          reject(new Error('Selection canceled by user'));
        },
        onSelect: function onSelect(selected) {
          resolve({
            media_type: selected.media_type,
            id: selected.id
          });
        }
      });
    });
  }

  /**
   * Process torrents to find metadata
   * 
   * @param {Object|Array} torrentData - Torrent data to process
   * @returns {Promise<Array>} - Promise resolving to array of media info
   */
  function processTorrents(_x2) {
    return _processTorrents.apply(this, arguments);
  }
  function _processTorrents() {
    _processTorrents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrentData) {
      var torrents, results, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            console.log('TDM', 'Processing torrents:', _typeof(torrentData), torrentData);

            // Ensure we're working with an array
            torrents = Array.isArray(torrentData) ? torrentData : [torrentData];
            _context3.p = 1;
            _context3.n = 2;
            return Promise.all(torrents.map(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrent) {
                var name, cleanedNameInfo, response, strictMatches, _t2;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      _context2.p = 0;
                      // Clean the torrent name
                      name = torrent.name || torrent;
                      cleanedNameInfo = cleanName(name);
                      if (cleanedNameInfo.query) {
                        _context2.n = 1;
                        break;
                      }
                      console.warn('TDM', 'Empty torrent name after cleaning');
                      return _context2.a(2, null);
                    case 1:
                      _context2.n = 2;
                      return searchTMDB(cleanedNameInfo.query);
                    case 2:
                      response = _context2.v;
                      if (!(!response.results || response.results.length === 0)) {
                        _context2.n = 3;
                        break;
                      }
                      console.log('TDM', 'No results found for ', cleanedNameInfo.query);
                      return _context2.a(2, null);
                    case 3:
                      if (!(response.results.length === 1)) {
                        _context2.n = 4;
                        break;
                      }
                      return _context2.a(2, response.results[0]);
                    case 4:
                      if (!cleanedNameInfo.year) {
                        _context2.n = 5;
                        break;
                      }
                      strictMatches = response.results.filter(function (r) {
                        var rYear = (r.release_date || r.first_air_date || '').slice(0, 4);
                        return rYear === cleanedNameInfo.year;
                      });
                      if (!(strictMatches.length === 1)) {
                        _context2.n = 5;
                        break;
                      }
                      return _context2.a(2, strictMatches[0]);
                    case 5:
                      _context2.n = 6;
                      return handleMultipleResults(response.results);
                    case 6:
                      return _context2.a(2, _context2.v);
                    case 7:
                      _context2.p = 7;
                      _t2 = _context2.v;
                      console.error('TDM', 'torrent processing error:', _t2);
                      return _context2.a(2, null);
                  }
                }, _callee2, null, [[0, 7]]);
              }));
              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }()));
          case 2:
            results = _context3.v;
            return _context3.a(2, results.filter(function (result) {
              return result !== null;
            }));
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            console.error('TDM', 'torrent processing overall error:', _t3);
            throw _t3;
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return _processTorrents.apply(this, arguments);
  }

  var DEFAULT_RPC_PATH = "/transmission/rpc";
  var DEFAULT_STATUS_MAP = {
    0: "Stopped",
    1: "Queued to verify local data",
    2: "Verifying local data",
    3: "Queued to download",
    4: "Downloading",
    5: "Queued to seed",
    6: "Seeding"
  };
  function createTransmissionLikeClient() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var configPrefix = options.configPrefix;
    var clientName = options.clientName || "Transmission-like";
    var statusMap = options.statusMap || DEFAULT_STATUS_MAP;
    var extraFields = Array.isArray(options.extraFields) ? options.extraFields : [];
    var getExtraConfig = typeof options.getExtraConfig === "function" ? options.getExtraConfig : function () {
      return {};
    };
    var mapTorrentData = typeof options.mapTorrentData === "function" ? options.mapTorrentData : null;
    var handleCustomAction = typeof options.handleCustomAction === "function" ? options.handleCustomAction : null;
    if (!configPrefix) {
      throw new Error("configPrefix is required for transmissionLikeClient");
    }
    function getConfig() {
      return _objectSpread2({
        url: sanitizeConfigString(Lampa.Storage.field("".concat(configPrefix, "Url"))),
        user: sanitizeConfigString(Lampa.Storage.field("".concat(configPrefix, "User"))),
        pass: sanitizeConfigString(Lampa.Storage.field("".concat(configPrefix, "Pass"))),
        path: normalizeApiPath(Lampa.Storage.get("".concat(configPrefix, "Path")), DEFAULT_RPC_PATH),
        useProxy: Lampa.Storage.field("".concat(configPrefix, "Proxy")) === true,
        autostart: Lampa.Storage.field("".concat(configPrefix, "Autostart")),
        sequentialDownload: Lampa.Storage.field("".concat(configPrefix, "SequentialDownload")),
        proxy: LME_PROXY_URL
      }, getExtraConfig(configPrefix));
    }
    function getHeaders() {
      var config = getConfig();
      var headers = {
        Authorization: "Basic ".concat(btoa((config.user || "") + ":" + (config.pass || ""))),
        "Content-Type": "application/json"
      };
      var sessionId = Lampa.Storage.get("".concat(configPrefix, "Key"));
      if (sessionId) {
        headers["X-Transmission-Session-Id"] = sessionId;
      }
      if (config.useProxy) {
        headers["x-requested-with"] = "lme-plugins";
      }
      return headers;
    }
    function getApiUrl() {
      var config = getConfig();
      return "".concat(resolveClientBaseUrl(config, {
        clientName: clientName
      })).concat(config.path);
    }
    function reguest(headers, body, timeout) {
      return new Promise(function (resolve, reject) {
        var network = new Lampa.Reguest();
        network.timeout(timeout);
        network.quiet(getApiUrl(), resolve, reject, body, {
          headers: headers,
          type: "POST",
          dataType: "json"
        });
      });
    }
    function makeRequest(_x) {
      return _makeRequest.apply(this, arguments);
    }
    function _makeRequest() {
      _makeRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
        var timeout,
          body,
          sessionId,
          _args = arguments,
          _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              timeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10000;
              body = JSON.stringify(data);
              _context.p = 1;
              _context.n = 2;
              return reguest(getHeaders(), body, timeout);
            case 2:
              return _context.a(2, _context.v);
            case 3:
              _context.p = 3;
              _t = _context.v;
              if (!(_t.status === 409)) {
                _context.n = 4;
                break;
              }
              sessionId = _t.getResponseHeader ? _t.getResponseHeader("X-Transmission-Session-Id") : null;
              if (!sessionId) {
                _context.n = 4;
                break;
              }
              Lampa.Storage.set("".concat(configPrefix, "Key"), sessionId);
              return _context.a(2, reguest(getHeaders(), body, timeout));
            case 4:
              throw _t;
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }));
      return _makeRequest.apply(this, arguments);
    }
    function normalizeRequestError(error, fallbackMessage) {
      var message = error && (error.statusText || error.message) ? error.statusText || error.message : fallbackMessage;
      var normalized = new Error(String(message || fallbackMessage));
      if (error && typeof error.status !== "undefined") {
        normalized.status = error.status;
      }
      return normalized;
    }
    function setLabels(_x2, _x3) {
      return _setLabels.apply(this, arguments);
    }
    function _setLabels() {
      _setLabels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrentId, labels) {
        var labelList;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              labelList = Array.isArray(labels) ? labels : [labels];
              _context2.n = 1;
              return makeRequest({
                method: "torrent-set",
                arguments: {
                  ids: [torrentId],
                  labels: labelList
                }
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return _setLabels.apply(this, arguments);
    }
    function auth() {
      return _auth.apply(this, arguments);
    }
    function _auth() {
      _auth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var showNotification,
          sessionId,
          _args3 = arguments,
          _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              showNotification = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : true;
              _context3.p = 1;
              _context3.n = 2;
              return makeRequest({
                method: "session-get"
              });
            case 2:
              if (showNotification) {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate("AuthSuccess")
                });
              }
              _context3.n = 5;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              if (!(_t2.status === 409)) {
                _context3.n = 4;
                break;
              }
              sessionId = _t2.getResponseHeader("X-Transmission-Session-Id");
              if (!sessionId) {
                _context3.n = 4;
                break;
              }
              Lampa.Storage.set("".concat(configPrefix, "Key"), sessionId);
              if (showNotification) {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate("AuthSuccess")
                });
              }
              return _context3.a(2);
            case 4:
              console.error("TDM", "".concat(clientName, " authentication failed"), _t2);
              if (showNotification) {
                Lampa.Bell.push({
                  text: Lampa.Lang.translate("AuthDenied")
                });
              }
              throw _t2;
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }));
      return _auth.apply(this, arguments);
    }
    function GetData() {
      return _GetData.apply(this, arguments);
    }
    function _GetData() {
      _GetData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var fields, response, _t0;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.p = 0;
              fields = ["labels", "status", "totalSize", "percentComplete", "percentDone", "name", "id"].concat(_toConsumableArray(extraFields));
              _context5.n = 1;
              return makeRequest({
                method: "torrent-get",
                arguments: {
                  fields: fields
                }
              });
            case 1:
              response = _context5.v;
              return _context5.a(2, Promise.all(response.arguments.torrents.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(torrent) {
                  var baseItem, extraData, _t3, _t4, _t5, _t6, _t7, _t8, _t9;
                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.n) {
                      case 0:
                        _t3 = torrent.name;
                        _t4 = torrent.id;
                        _t5 = torrent.totalSize;
                        _t6 = statusMap[torrent.status];
                        _t7 = torrent.labels;
                        _context4.n = 1;
                        return getPosterFromLabels(torrent.labels);
                      case 1:
                        _t8 = _context4.v;
                        _t9 = torrent.percentDone;
                        baseItem = {
                          name: _t3,
                          id: _t4,
                          size: _t5,
                          state: _t6,
                          labels: _t7,
                          image: _t8,
                          completed: _t9
                        };
                        if (mapTorrentData) {
                          _context4.n = 2;
                          break;
                        }
                        return _context4.a(2, baseItem);
                      case 2:
                        extraData = mapTorrentData(torrent, baseItem, getConfig()) || {};
                        return _context4.a(2, _objectSpread2(_objectSpread2({}, baseItem), extraData));
                    }
                  }, _callee4);
                }));
                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }())));
            case 2:
              _context5.p = 2;
              _t0 = _context5.v;
              console.error("TDM", "".concat(clientName, " GetData error:"), _t0);
              throw normalizeRequestError(_t0, "Failed to fetch torrent data");
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }));
      return _GetData.apply(this, arguments);
    }
    function GetInfo() {
      return _GetInfo.apply(this, arguments);
    }
    function _GetInfo() {
      _GetInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var response, _t1;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return makeRequest({
                method: "session-get"
              });
            case 1:
              response = _context6.v;
              return _context6.a(2, {
                space: response.arguments["download-dir-free-space"]
              });
            case 2:
              _context6.p = 2;
              _t1 = _context6.v;
              console.error("TDM", "".concat(clientName, " GetInfo error:"), _t1);
              throw normalizeRequestError(_t1, "Failed to fetch session info");
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }));
      return _GetInfo.apply(this, arguments);
    }
    function handleParseAction(_x4, _x5) {
      return _handleParseAction.apply(this, arguments);
    }
    function _handleParseAction() {
      _handleParseAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(action, torrentData) {
        var response, mediaTypeId;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (!(action.action !== "parse" && action.action !== "parse-all")) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2, false);
            case 1:
              _context7.n = 2;
              return processTorrents(torrentData);
            case 2:
              response = _context7.v;
              if (!(!response || response.length === 0)) {
                _context7.n = 3;
                break;
              }
              throw new Error("No valid metadata found");
            case 3:
              mediaTypeId = "".concat(response[0].media_type, "/").concat(response[0].id);
              _context7.n = 4;
              return makeRequest({
                method: "torrent-set",
                arguments: {
                  ids: torrentData.id,
                  labels: [mediaTypeId]
                }
              });
            case 4:
              Lampa.Bell.push({
                text: Lampa.Lang.translate("actionSentSuccessfully")
              });
              return _context7.a(2, true);
          }
        }, _callee7);
      }));
      return _handleParseAction.apply(this, arguments);
    }
    function handleDefaultCommand(_x6, _x7) {
      return _handleDefaultCommand.apply(this, arguments);
    }
    function _handleDefaultCommand() {
      _handleDefaultCommand = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(action, torrentData) {
        var method, _t10;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              method = "";
              _t10 = action.action;
              _context8.n = _t10 === "resume" ? 1 : _t10 === "pause" ? 2 : _t10 === "delete" ? 3 : 4;
              break;
            case 1:
              method = "torrent-start";
              return _context8.a(3, 5);
            case 2:
              method = "torrent-stop";
              return _context8.a(3, 5);
            case 3:
              method = "torrent-remove";
              return _context8.a(3, 5);
            case 4:
              throw new Error("Unknown action: ".concat(action.action));
            case 5:
              _context8.n = 6;
              return makeRequest({
                method: method,
                arguments: {
                  ids: torrentData.id,
                  "delete-local-data": action.deleteFiles ? true : false
                }
              });
            case 6:
              Lampa.Bell.push({
                text: Lampa.Lang.translate("actionSentSuccessfully")
              });
            case 7:
              return _context8.a(2);
          }
        }, _callee8);
      }));
      return _handleDefaultCommand.apply(this, arguments);
    }
    function SendCommand(_x8, _x9) {
      return _SendCommand.apply(this, arguments);
    }
    function _SendCommand() {
      _SendCommand = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(action, torrentData) {
        var parsed, handled, _t11;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _context9.p = 0;
              _context9.n = 1;
              return handleParseAction(action, torrentData);
            case 1:
              parsed = _context9.v;
              if (!parsed) {
                _context9.n = 2;
                break;
              }
              return _context9.a(2);
            case 2:
              if (!handleCustomAction) {
                _context9.n = 4;
                break;
              }
              _context9.n = 3;
              return handleCustomAction({
                action: action,
                torrentData: torrentData,
                getConfig: getConfig,
                makeRequest: makeRequest,
                statusMap: statusMap
              });
            case 3:
              handled = _context9.v;
              if (!handled) {
                _context9.n = 4;
                break;
              }
              return _context9.a(2);
            case 4:
              _context9.n = 5;
              return handleDefaultCommand(action, torrentData);
            case 5:
              _context9.n = 7;
              break;
            case 6:
              _context9.p = 6;
              _t11 = _context9.v;
              console.error("TDM", "".concat(clientName, " SendCommand error:"), _t11);
              Lampa.Bell.push({
                text: Lampa.Lang.translate("actionReturnedError")
              });
              throw _t11;
            case 7:
              return _context9.a(2);
          }
        }, _callee9, null, [[0, 6]]);
      }));
      return _SendCommand.apply(this, arguments);
    }
    function SendTask(_x0, _x1, _x10) {
      return _SendTask.apply(this, arguments);
    }
    function _SendTask() {
      _SendTask = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(selectedTorrent, labels, dtype) {
        var config, addResponse, torrentId, labelResponse, _t12;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (selectedTorrent) {
                _context0.n = 1;
                break;
              }
              throw new Error("No torrent selected");
            case 1:
              config = getConfig();
              _context0.p = 2;
              _context0.n = 3;
              return makeRequest({
                method: "torrent-add",
                arguments: _objectSpread2({
                  paused: config.autostart ? true : false,
                  sequentialDownload: config.sequentialDownload ? true : false,
                  filename: selectedTorrent.MagnetUri || selectedTorrent.Link,
                  labels: [labels]
                }, Lampa.Storage.get("".concat(configPrefix).concat(dtype)) ? {
                  "download-dir": Lampa.Storage.get("".concat(configPrefix).concat(dtype))
                } : {})
              });
            case 3:
              addResponse = _context0.v;
              if (!(addResponse.result !== "success" || Object.keys(addResponse.arguments).length === 0)) {
                _context0.n = 4;
                break;
              }
              throw new Error("Failed to add torrent: ".concat(addResponse.result));
            case 4:
              torrentId = addResponse.arguments["torrent-added"] && addResponse.arguments["torrent-added"].id;
              if (torrentId) {
                _context0.n = 5;
                break;
              }
              throw new Error("Torrent added but no ID returned");
            case 5:
              _context0.n = 6;
              return makeRequest({
                method: "torrent-set",
                arguments: {
                  ids: torrentId,
                  labels: [labels]
                }
              });
            case 6:
              labelResponse = _context0.v;
              if (!(labelResponse.result !== "success")) {
                _context0.n = 7;
                break;
              }
              throw new Error("Failed to set labels: ".concat(labelResponse.result));
            case 7:
              Lampa.Bell.push({
                text: Lampa.Lang.translate("actionSentSuccessfully")
              });
              _context0.n = 9;
              break;
            case 8:
              _context0.p = 8;
              _t12 = _context0.v;
              console.error("TDM", "".concat(clientName, " SendTask error:"), _t12);
              Lampa.Bell.push({
                text: _t12.message || Lampa.Lang.translate("actionReturnedError")
              });
              throw _t12;
            case 9:
              return _context0.a(2);
          }
        }, _callee0, null, [[2, 8]]);
      }));
      return _SendTask.apply(this, arguments);
    }
    return {
      auth: auth,
      GetData: GetData,
      GetInfo: GetInfo,
      SendCommand: SendCommand,
      SendTask: SendTask,
      setLabels: setLabels,
      transmissionStatus: statusMap
    };
  }

  var Transmission = createTransmissionLikeClient({
    configPrefix: "lmetorrenttransmission",
    clientName: "Transmission"
  });

  var es_string_includes = {};

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

  var $$3 = require('../internals/export');
  var $includes = require('../internals/array-includes').includes;
  var fails$1 = require('../internals/fails');
  var addToUnscopables$1 = require('../internals/add-to-unscopables');

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$1(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // Safari 26.4- bug
  var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails$1(function () {
    // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
    return [, 1].includes(undefined, 1);
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$3({
    target: 'Array',
    proto: true,
    forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX
  }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('includes');

  var es_array_reduce = {};

  var arrayReduce;
  var hasRequiredArrayReduce;

  function requireArrayReduce () {
  	if (hasRequiredArrayReduce) return arrayReduce;
  	hasRequiredArrayReduce = 1;

  	var aCallable = requireACallable();
  	var toObject = requireToObject();
  	var IndexedObject = require$$2$2;
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

  var arrayMethodIsStrict$1;
  var hasRequiredArrayMethodIsStrict;

  function requireArrayMethodIsStrict () {
  	if (hasRequiredArrayMethodIsStrict) return arrayMethodIsStrict$1;
  	hasRequiredArrayMethodIsStrict = 1;

  	var fails = requireFails();
  	arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  	  var method = [][METHOD_NAME];
  	  return !!method && fails(function () {
  	    // eslint-disable-next-line no-useless-call -- required for testing
  	    method.call(null, argument || function () {
  	      return 1;
  	    }, 1);
  	  });
  	};
  	return arrayMethodIsStrict$1;
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

  var es_string_startsWith = {};

  var hasRequiredEs_string_startsWith;

  function requireEs_string_startsWith () {
  	if (hasRequiredEs_string_startsWith) return es_string_startsWith;
  	hasRequiredEs_string_startsWith = 1;

  	var $ = require$$0$7;
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var getOwnPropertyDescriptor = require$$2$1.f;
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
    // Спочатку розбиваємо по наявних переносах рядків
    var initialLines = text.split('\n');
    var lines = [];

    // Функція для розбиття довгого слова на частини
    function breakLongWord(word, maxWidth) {
      var brokenLines = [];
      var currentPart = '';
      for (var i = 0; i < word.length; i++) {
        var char = word[i];
        var testPart = currentPart + char;
        var metrics = context.measureText(testPart);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && currentPart !== '') {
          brokenLines.push(currentPart);
          currentPart = char;
        } else {
          currentPart = testPart;
        }
      }
      if (currentPart !== '') {
        brokenLines.push(currentPart);
      }
      return brokenLines;
    }

    // Потім для кожного рядка застосовуємо переноси за шириною
    initialLines.forEach(function (initialLine) {
      var words = initialLine.split(' ');
      var currentLine = '';
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        // Перевіряємо, чи слово не занадто довге
        var wordMetrics = context.measureText(word);
        if (wordMetrics.width > width - 40) {
          // Якщо є поточний рядок, додаємо його до списку
          if (currentLine !== '') {
            lines.push(currentLine);
            currentLine = '';
          }
          // Розбиваємо довге слово на частини
          var brokenWordLines = breakLongWord(word, width - 40);
          lines.push.apply(lines, _toConsumableArray(brokenWordLines));
        } else {
          // Слово не занадто довге, обробляємо звичайним чином
          var testLine = currentLine === '' ? word : currentLine + ' ' + word;
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > width - 40 && currentLine !== '') {
            lines.push(currentLine);
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        }
      }
      // Додаємо останній рядок, якщо він не порожній
      if (currentLine !== '') {
        lines.push(currentLine);
      }
    });

    // Відображення тексту
    var lineHeight = 58;
    var startY = (height - lines.length * lineHeight) / 2 + lineHeight / 2;
    lines.forEach(function (line, index) {
      context.fillText(line, width / 2, startY + index * lineHeight);
    });
    return canvas.toDataURL('image/png');
  }

  /**
   * @file IndexedDB утиліти для зберігання метаданих торрентів.
   * Інкапсулює логіку роботи з Lampa.DB (IndexedDB).
   */

  var DB_NAME = 'lme_torrentmanager';
  var DB_VERSION = 4; // Збільшено версію для гарантованого оновлення

  /**
   * Отримує список всіх можливих імен таблиць для всіх клієнтів.
   * @returns {string[]} Масив імен таблиць.
   */
  function getAllTableNames() {
    var clients = ['synology', 'qbittorent', 'transmission', 'keenetic', 'universal']; // Додайте сюди інших клієнтів за потреби
    return clients.map(function (client) {
      return "".concat(client, "_metadata");
    });
  }

  /**
   * Допоміжна функція для отримання назви таблиці (сховища) на основі активного клієнта.
   * @returns {string} Назва таблиці, напр. 'synology_metadata'.
   */
  function getTableName() {
    var client = Lampa.Storage.field('lmetorrentSelect');
    if (!client) {
      console.error('[DB] Активний клієнт не вибрано!');
      return 'default_metadata';
    }
    return "".concat(client.toLowerCase(), "_metadata");
  }
  var dbPromise = null;

  /**
   * Ініціалізує та відкриває IndexedDB, використовуючи патерн singleton promise.
   * @returns {Promise<object>} Promise, який вирішується об'єктом бази даних Lampa.DB.
   */
  function initDB() {
    if (dbPromise) {
      return dbPromise;
    }
    dbPromise = new Promise(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
        var allTables, db, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (Lampa.DB) {
                _context.n = 1;
                break;
              }
              console.error('Lampa.DB не визначено.');
              dbPromise = null; // Скидаємо для повторної спроби
              return _context.a(2, reject(new Error('Lampa.DB is not defined')));
            case 1:
              allTables = getAllTableNames();
              db = new Lampa.DB(DB_NAME, allTables, DB_VERSION);
              _context.p = 2;
              _context.n = 3;
              return db.openDatabase();
            case 3:
              console.log("TDM", "Database '".concat(DB_NAME, "' successfully opened/updated to version ").concat(DB_VERSION, "."));
              resolve(db);
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error("TDM", "Critical error '".concat(DB_NAME, "':"), _t);
              dbPromise = null; // Скидаємо для повторної спроби
              reject(_t);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    return dbPromise;
  }

  /**
   * Зберігає метадані для ключа.
   * @param {string} key - Ключ (ідентифікатор торренту).
   * @param {any} value - Значення для збереження.
   * @returns {Promise<void>}
   */
  function saveMetadata(_x3, _x4) {
    return _saveMetadata.apply(this, arguments);
  }

  /**
   * Отримує метадані за ключем.
   * @param {string} key - Ключ (ідентифікатор торренту).
   * @returns {Promise<any|null>}
   */
  function _saveMetadata() {
    _saveMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(key, value) {
      var db, tableName, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return initDB();
          case 1:
            db = _context2.v;
            tableName = getTableName();
            _context2.n = 2;
            return db.rewriteData(tableName, key, value);
          case 2:
            console.log("TDM", "Metadata for key '".concat(key, "' successfully saved in table '").concat(tableName, "'."));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error("TDM", "Error in saveMetadata:", _t2);
            throw _t2;
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return _saveMetadata.apply(this, arguments);
  }
  function getMetadata(_x5) {
    return _getMetadata.apply(this, arguments);
  }
  function _getMetadata() {
    _getMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(key) {
      var db, tableName, result, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return initDB();
          case 1:
            db = _context3.v;
            tableName = getTableName();
            _context3.n = 2;
            return db.getData(tableName, key);
          case 2:
            result = _context3.v;
            if (!result) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2, result);
          case 3:
            return _context3.a(2, null);
          case 4:
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t3 = _context3.v;
            console.error("TDM", "Error in getMetadata:", _t3);
            throw _t3;
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 5]]);
    }));
    return _getMetadata.apply(this, arguments);
  }

  var SIMKL_SEARCH_URL = "".concat(LME_SIMKL_URL, "search/file");
  function parseResponse$1(response) {
    if (!response) {
      return null;
    }
    if (typeof response === 'string') {
      try {
        return JSON.parse(response);
      } catch (error) {
        return null;
      }
    }
    if (_typeof(response) !== 'object') {
      return null;
    }
    return response;
  }
  function normalizeTmdbId(value) {
    var id = String(value || '').trim();
    if (!/^\d+$/.test(id)) {
      return null;
    }
    var numericId = Number(id);
    return Number.isFinite(numericId) && numericId > 0 ? numericId : null;
  }
  function normalizeMoviePayload(payload) {
    var movieIds = payload && payload.movie && payload.movie.ids ? payload.movie.ids : {};
    var tmdbId = normalizeTmdbId(movieIds.moviedb || movieIds.tmdb);
    if (!tmdbId) {
      return null;
    }
    return {
      media_type: 'movie',
      tmdb_id: tmdbId
    };
  }
  function normalizeShowPayload(payload) {
    var showIds = payload && payload.show && payload.show.ids ? payload.show.ids : {};
    var tmdbId = normalizeTmdbId(showIds.tmdbtv || showIds.tmdb);
    if (!tmdbId) {
      return null;
    }
    return {
      media_type: 'tv',
      tmdb_id: tmdbId
    };
  }
  function normalizeSimklPayload(payload) {
    var type = String(payload && payload.type || '').toLowerCase();
    if (type === 'movie') {
      return normalizeMoviePayload(payload);
    }
    if (type === 'episode' || type === 'show') {
      return normalizeShowPayload(payload);
    }
    return null;
  }
  function buildRequestOptions() {
    return {
      timeout: 10000,
      type: 'POST',
      dataType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
  }
  function requestSearchByFileName(_x) {
    return _requestSearchByFileName.apply(this, arguments);
  }
  function _requestSearchByFileName() {
    _requestSearchByFileName = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(fileName) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            return _context.a(2, new Promise(function (resolve, reject) {
              Lampa.Network.silent(SIMKL_SEARCH_URL, resolve, reject, JSON.stringify({
                file: fileName,
                part: 1
              }), buildRequestOptions());
            }));
        }
      }, _callee);
    }));
    return _requestSearchByFileName.apply(this, arguments);
  }
  function resolveTmdbFromSimkl(_x2) {
    return _resolveTmdbFromSimkl.apply(this, arguments);
  }
  function _resolveTmdbFromSimkl() {
    _resolveTmdbFromSimkl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(fileName) {
      var normalizedFileName, response, payload, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            normalizedFileName = String(fileName || '').trim();
            if (normalizedFileName) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, null);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return requestSearchByFileName(normalizedFileName);
          case 2:
            response = _context2.v;
            payload = parseResponse$1(response);
            if (payload) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2, null);
          case 3:
            return _context2.a(2, normalizeSimklPayload(payload));
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            console.log('TDM', 'Simkl search error:', _t);
            return _context2.a(2, null);
        }
      }, _callee2, null, [[1, 4]]);
    }));
    return _resolveTmdbFromSimkl.apply(this, arguments);
  }

  var CONFIG_PREFIX = 'lmetorrentsynology';
  var AUTH_ERROR_CODES = [105, 106, 107, 119];
  var SIMKL_RETRY_INTERVAL = 1000 * 60 * 60 * 12;
  var simklSearchCache = {};
  function getConfig() {
    return {
      url: sanitizeConfigString(Lampa.Storage.field("".concat(CONFIG_PREFIX, "Url"))),
      user: sanitizeConfigString(Lampa.Storage.field("".concat(CONFIG_PREFIX, "User"))),
      pass: sanitizeConfigString(Lampa.Storage.field("".concat(CONFIG_PREFIX, "Pass"))),
      useProxy: Lampa.Storage.field("".concat(CONFIG_PREFIX, "Proxy")) === true,
      proxy: LME_PROXY_URL
    };
  }
  function getApiBase() {
    return resolveClientBaseUrl(getConfig(), {
      clientName: 'Synology'
    });
  }
  function getHeaders() {
    var config = getConfig();
    var headers = {
      Authorization: "Basic ".concat(btoa((config.user || '') + ':' + (config.pass || ''))),
      'Content-Type': 'application/json'
    };
    if (config.useProxy) {
      headers['x-requested-with'] = 'lme-plugins';
    }
    return headers;
  }
  function buildQuery(params) {
    return Object.keys(params).filter(function (key) {
      return params[key] !== undefined && params[key] !== null;
    }).map(function (key) {
      return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
    }).join('&');
  }
  function makeUrl(path, params) {
    var query = buildQuery(params || {});
    var base = getApiBase();
    var urlPath = "".concat(base).concat(path);
    if (!query) return urlPath;
    return urlPath.includes('?') ? "".concat(urlPath, "&").concat(query) : "".concat(urlPath, "?").concat(query);
  }
  function parseResponse(response) {
    if (typeof response === 'string') {
      return JSON.parse(response);
    }
    if (!response || _typeof(response) !== 'object') {
      throw new Error('Invalid Synology response');
    }
    return response;
  }
  function parseErrorPayload(error) {
    if (!error) {
      return null;
    }
    if (error.responseJSON) {
      return error.responseJSON;
    }
    if (typeof error.responseText === 'string' && error.responseText.trim()) {
      try {
        return JSON.parse(error.responseText);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
  function getSynologyErrorCode(payload) {
    if (!payload || payload.success !== false || !payload.error) {
      return null;
    }
    var code = Number(payload.error.code);
    return Number.isNaN(code) ? null : code;
  }
  function createSynologyError(message, code) {
    var error = new Error(message);
    if (code !== undefined && code !== null) {
      error.code = Number(code);
    }
    return error;
  }
  function clearSid() {
    Lampa.Storage.set("".concat(CONFIG_PREFIX, "Key"), '');
  }
  function saveSid(sid) {
    Lampa.Storage.set("".concat(CONFIG_PREFIX, "Key"), {
      sID: sid,
      createDate: Math.floor(Date.now() / 1000)
    });
  }
  function getSid() {
    var session = Lampa.Storage.field("".concat(CONFIG_PREFIX, "Key"));
    if (session && _typeof(session) === 'object' && session.sID) {
      return session.sID;
    }
    return '';
  }
  var authPromise = null;
  function auth() {
    return _auth.apply(this, arguments);
  }
  function _auth() {
    _auth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var showNotification,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            showNotification = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : true;
            if (!authPromise) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, authPromise);
          case 1:
            authPromise = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
              var config, response, payload, code, _payload, _code, normalizedError, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    config = getConfig();
                    if (!(!config.url || !config.user || !config.pass)) {
                      _context.n = 1;
                      break;
                    }
                    clearSid();
                    if (showNotification) {
                      Lampa.Bell.push({
                        text: Lampa.Lang.translate('AuthDenied')
                      });
                    }
                    authPromise = null;
                    throw createSynologyError('Synology credentials are not configured');
                  case 1:
                    _context.p = 1;
                    _context.n = 2;
                    return new Promise(function (resolve, reject) {
                      var network = new Lampa.Reguest();
                      network.quiet(makeUrl('/webapi/auth.cgi', {
                        api: 'SYNO.API.Auth',
                        method: 'login',
                        account: config.user,
                        passwd: config.pass,
                        format: 'sid',
                        version: 7,
                        session: 'LMETorrentManager'
                      }), resolve, reject, null, {
                        headers: getHeaders(),
                        type: 'GET',
                        dataType: 'json'
                      });
                    });
                  case 2:
                    response = _context.v;
                    payload = parseResponse(response);
                    code = getSynologyErrorCode(payload);
                    if (!(code !== null || !payload.data || !payload.data.sid)) {
                      _context.n = 3;
                      break;
                    }
                    throw createSynologyError("Synology auth error: ".concat(code), code);
                  case 3:
                    saveSid(payload.data.sid);
                    if (showNotification) {
                      Lampa.Bell.push({
                        text: Lampa.Lang.translate('AuthSuccess')
                      });
                    }
                    authPromise = null;
                    return _context.a(2, payload.data.sid);
                  case 4:
                    _context.p = 4;
                    _t = _context.v;
                    clearSid();
                    _payload = parseErrorPayload(_t);
                    _code = getSynologyErrorCode(_payload);
                    normalizedError = _code !== null ? createSynologyError("Synology auth error: ".concat(_code), _code) : _t instanceof Error ? _t : createSynologyError('Synology auth failed');
                    console.log('TDM', 'Synology auth', normalizedError.code || '', normalizedError);
                    if (showNotification) {
                      Lampa.Bell.push({
                        text: Lampa.Lang.translate('AuthDenied')
                      });
                    }
                    authPromise = null;
                    throw normalizedError;
                  case 5:
                    return _context.a(2);
                }
              }, _callee, null, [[1, 4]]);
            }))();
            return _context2.a(2, authPromise);
        }
      }, _callee2);
    }));
    return _auth.apply(this, arguments);
  }
  function requestSynology(_x) {
    return _requestSynology.apply(this, arguments);
  }
  function _requestSynology() {
    _requestSynology = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(path) {
      var params,
        options,
        requestOptions,
        requestParams,
        sid,
        response,
        payload,
        code,
        _payload2,
        _code2,
        _args3 = arguments,
        _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            params = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            options = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
            requestOptions = {
              method: options.method || 'GET',
              requiresSid: options.requiresSid !== false,
              retryOnAuthError: options.retryOnAuthError !== false
            };
            requestParams = _objectSpread2({}, params);
            if (!requestOptions.requiresSid) {
              _context3.n = 4;
              break;
            }
            sid = getSid();
            if (sid) {
              _context3.n = 2;
              break;
            }
            _context3.n = 1;
            return auth(false);
          case 1:
            sid = getSid();
          case 2:
            if (sid) {
              _context3.n = 3;
              break;
            }
            throw createSynologyError('Synology SID is not available');
          case 3:
            requestParams._sid = sid;
          case 4:
            _context3.p = 4;
            _context3.n = 5;
            return new Promise(function (resolve, reject) {
              var network = new Lampa.Reguest();
              network.quiet(makeUrl(path, requestParams), resolve, reject, null, {
                headers: getHeaders(),
                type: requestOptions.method,
                dataType: 'json'
              });
            });
          case 5:
            response = _context3.v;
            payload = parseResponse(response);
            code = getSynologyErrorCode(payload);
            if (!(code !== null && AUTH_ERROR_CODES.includes(code) && requestOptions.requiresSid && requestOptions.retryOnAuthError)) {
              _context3.n = 7;
              break;
            }
            if (getSid() === requestParams._sid) {
              clearSid();
            }
            _context3.n = 6;
            return auth(false);
          case 6:
            return _context3.a(2, requestSynology(path, params, _objectSpread2(_objectSpread2({}, requestOptions), {}, {
              retryOnAuthError: false
            })));
          case 7:
            if (!(code !== null)) {
              _context3.n = 8;
              break;
            }
            throw createSynologyError("Synology API error: ".concat(code), code);
          case 8:
            return _context3.a(2, payload);
          case 9:
            _context3.p = 9;
            _t2 = _context3.v;
            _payload2 = parseErrorPayload(_t2);
            _code2 = getSynologyErrorCode(_payload2);
            if (!(_code2 !== null && AUTH_ERROR_CODES.includes(_code2) && requestOptions.requiresSid && requestOptions.retryOnAuthError)) {
              _context3.n = 11;
              break;
            }
            if (getSid() === requestParams._sid) {
              clearSid();
            }
            _context3.n = 10;
            return auth(false);
          case 10:
            return _context3.a(2, requestSynology(path, params, _objectSpread2(_objectSpread2({}, requestOptions), {}, {
              retryOnAuthError: false
            })));
          case 11:
            throw _code2 !== null ? createSynologyError("Synology API error: ".concat(_code2), _code2) : _t2 instanceof Error ? _t2 : createSynologyError('Synology request failed');
          case 12:
            return _context3.a(2);
        }
      }, _callee3, null, [[4, 9]]);
    }));
    return _requestSynology.apply(this, arguments);
  }
  function getFileTransferTotals(task) {
    var files = task && task.additional && Array.isArray(task.additional.file) ? task.additional.file : [];
    return files.reduce(function (acc, file) {
      acc.size += Number(file && file.size) || 0;
      acc.downloaded += Number(file && file.size_downloaded) || 0;
      return acc;
    }, {
      size: 0,
      downloaded: 0
    });
  }
  function getTaskProgress(task) {
    var transfer = task && task.additional && task.additional.transfer ? task.additional.transfer : {};
    var fileTotals = getFileTransferTotals(task);
    var size = Number(task && task.size) || 0;
    var downloaded = Number(transfer.size_downloaded) || 0;

    // Synology may return size=0 or downloaded=0 for some tasks even when file stats are present.
    if (!size && fileTotals.size > 0) {
      size = fileTotals.size;
    }
    if (!downloaded && fileTotals.downloaded > 0) {
      downloaded = fileTotals.downloaded;
    }
    var completed = size > 0 ? downloaded / size : 0;
    var status = String(task && task.status || '').toLowerCase();
    if ((status === 'finished' || status === 'seeding') && completed < 1) {
      completed = 1;
    }
    completed = Math.max(0, Math.min(1, completed));
    return {
      size: size,
      completed: completed
    };
  }
  function normalizeTaskState(status, completed) {
    var raw = String(status || '');
    var lower = raw.toLowerCase();

    // If progress is already full, do not keep "downloading" in UI.
    if (completed >= 1 && lower.indexOf('download') >= 0) {
      return 'Finished';
    }
    return raw ? raw.charAt(0).toUpperCase() + raw.slice(1) : '';
  }
  function hasMetadataReference(metadata) {
    return Boolean(metadata && metadata.tmdb_id && (metadata.media_type === 'movie' || metadata.media_type === 'tv'));
  }
  function shouldTrySimklLookup(metadata, title) {
    if (!title) {
      return false;
    }
    if (hasMetadataReference(metadata)) {
      return false;
    }
    var failedAt = Number(metadata && metadata.simkl_failed_at) || 0;
    if (!failedAt) {
      return true;
    }
    return Date.now() - failedAt > SIMKL_RETRY_INTERVAL;
  }
  function getSimklCacheKey(title) {
    return String(title || '').trim().toLowerCase();
  }
  function resolveSimklWithCache(_x2) {
    return _resolveSimklWithCache.apply(this, arguments);
  }
  function _resolveSimklWithCache() {
    _resolveSimklWithCache = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(title) {
      var cacheKey;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            cacheKey = getSimklCacheKey(title);
            if (cacheKey) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2, null);
          case 1:
            if (!simklSearchCache[cacheKey]) {
              simklSearchCache[cacheKey] = resolveTmdbFromSimkl(title).finally(function () {
                delete simklSearchCache[cacheKey];
              });
            }
            return _context4.a(2, simklSearchCache[cacheKey]);
        }
      }, _callee4);
    }));
    return _resolveSimklWithCache.apply(this, arguments);
  }
  function resolvePosterByMetadata(_x3) {
    return _resolvePosterByMetadata.apply(this, arguments);
  }
  function _resolvePosterByMetadata() {
    _resolvePosterByMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(metadata) {
      var label, resolvedPoster;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (hasMetadataReference(metadata)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, '');
          case 1:
            label = "".concat(metadata.media_type, "/").concat(metadata.tmdb_id);
            _context5.n = 2;
            return getPosterFromLabels(label);
          case 2:
            resolvedPoster = _context5.v;
            if (!(!resolvedPoster || resolvedPoster === './img/img_load.svg')) {
              _context5.n = 3;
              break;
            }
            return _context5.a(2, '');
          case 3:
            return _context5.a(2, resolvedPoster);
        }
      }, _callee5);
    }));
    return _resolvePosterByMetadata.apply(this, arguments);
  }
  function hydrateMetadataFromSimkl(_x4, _x5, _x6) {
    return _hydrateMetadataFromSimkl.apply(this, arguments);
  }
  function _hydrateMetadataFromSimkl() {
    _hydrateMetadataFromSimkl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(torrentId, title, metadata) {
      var now, currentMetadata, match, failedMetadata, nextMetadata, resolvedPoster, _t3;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (shouldTrySimklLookup(metadata, title)) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, metadata);
          case 1:
            now = Date.now();
            currentMetadata = metadata && _typeof(metadata) === 'object' ? metadata : {};
            _context6.n = 2;
            return resolveSimklWithCache(title);
          case 2:
            match = _context6.v;
            if (!(!match || !match.tmdb_id || !match.media_type)) {
              _context6.n = 4;
              break;
            }
            failedMetadata = _objectSpread2(_objectSpread2({}, currentMetadata), {}, {
              simkl_checked_at: now,
              simkl_failed_at: now
            });
            _context6.n = 3;
            return saveMetadata(String(torrentId), failedMetadata);
          case 3:
            return _context6.a(2, failedMetadata);
          case 4:
            nextMetadata = _objectSpread2(_objectSpread2({}, currentMetadata), {}, {
              tmdb_id: match.tmdb_id,
              media_type: match.media_type,
              simkl_checked_at: now,
              simkl_failed_at: 0,
              updated_at: now
            });
            _context6.p = 5;
            _context6.n = 6;
            return resolvePosterByMetadata(nextMetadata);
          case 6:
            resolvedPoster = _context6.v;
            if (resolvedPoster) {
              nextMetadata.poster = resolvedPoster;
            }
            _context6.n = 8;
            break;
          case 7:
            _context6.p = 7;
            _t3 = _context6.v;
            console.log('TDM', 'Synology Simkl poster resolve error:', _t3);
          case 8:
            _context6.n = 9;
            return saveMetadata(String(torrentId), nextMetadata);
          case 9:
            return _context6.a(2, nextMetadata);
        }
      }, _callee6, null, [[5, 7]]);
    }));
    return _hydrateMetadataFromSimkl.apply(this, arguments);
  }
  function GetData() {
    return _GetData.apply(this, arguments);
  }
  function _GetData() {
    _GetData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var payload, tasks, _t5;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.p = 0;
            _context8.n = 1;
            return requestSynology('/webapi/DownloadStation/task.cgi', {
              api: 'SYNO.DownloadStation.Task',
              version: 3,
              method: 'list',
              additional: 'file,transfer',
              limit: -1
            });
          case 1:
            payload = _context8.v;
            tasks = payload && payload.data && Array.isArray(payload.data.tasks) ? payload.data.tasks : [];
            return _context8.a(2, Promise.all(tasks.map(/*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(torrent) {
                var metadata, title, progress, imageUrl, resolvedPoster, nextMetadata, _t4;
                return _regenerator().w(function (_context7) {
                  while (1) switch (_context7.n) {
                    case 0:
                      _context7.n = 1;
                      return getMetadata(torrent.id);
                    case 1:
                      metadata = _context7.v;
                      title = torrent.title || torrent.id;
                      progress = getTaskProgress(torrent);
                      _context7.n = 2;
                      return hydrateMetadataFromSimkl(torrent.id, title, metadata);
                    case 2:
                      metadata = _context7.v;
                      imageUrl = metadata && metadata.poster ? metadata.poster : ''; // Backward compatibility for older metadata rows without cached poster.
                      if (!(!imageUrl && hasMetadataReference(metadata))) {
                        _context7.n = 8;
                        break;
                      }
                      _context7.p = 3;
                      _context7.n = 4;
                      return resolvePosterByMetadata(metadata);
                    case 4:
                      resolvedPoster = _context7.v;
                      if (!resolvedPoster) {
                        _context7.n = 6;
                        break;
                      }
                      imageUrl = resolvedPoster;
                      nextMetadata = _objectSpread2(_objectSpread2({}, metadata), {}, {
                        poster: resolvedPoster,
                        updated_at: Date.now()
                      });
                      _context7.n = 5;
                      return saveMetadata(String(torrent.id), _objectSpread2({}, nextMetadata));
                    case 5:
                      metadata = nextMetadata;
                    case 6:
                      _context7.n = 8;
                      break;
                    case 7:
                      _context7.p = 7;
                      _t4 = _context7.v;
                      console.log('TDM', 'Synology poster resolve error:', _t4);
                    case 8:
                      if (!imageUrl) {
                        imageUrl = textToImage(title);
                      }
                      return _context7.a(2, {
                        name: title,
                        id: torrent.id,
                        size: progress.size,
                        state: normalizeTaskState(torrent.status, progress.completed),
                        completed: progress.completed,
                        image: imageUrl,
                        tmdb_id: metadata ? metadata.tmdb_id : null,
                        media_type: metadata ? metadata.media_type : null
                      });
                  }
                }, _callee7, null, [[3, 7]]);
              }));
              return function (_x10) {
                return _ref2.apply(this, arguments);
              };
            }())));
          case 2:
            _context8.p = 2;
            _t5 = _context8.v;
            console.error('TDM', 'GetData error:', _t5);
            throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 AJAX \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ".concat(_t5.message || _t5));
          case 3:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 2]]);
    }));
    return _GetData.apply(this, arguments);
  }
  function normalizePath(path) {
    if (!path || typeof path !== 'string') {
      return '';
    }
    return path.startsWith('/') ? path : "/".concat(path);
  }
  function isShareMatched(sharePath, targetPath) {
    if (!sharePath || !targetPath) {
      return false;
    }
    return targetPath === sharePath || targetPath.indexOf("".concat(sharePath, "/")) === 0;
  }
  function getShareFreeSpace(share) {
    if (!share || !share.additional || !share.additional.volume_status || typeof share.additional.volume_status.freespace === 'undefined') {
      return null;
    }
    var freeSpace = Number(share.additional.volume_status.freespace);
    return Number.isNaN(freeSpace) ? null : freeSpace;
  }
  function GetInfo() {
    return _GetInfo.apply(this, arguments);
  }
  function _GetInfo() {
    _GetInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var payload, shares, moviesPath, tvPath, selectedShare, _t6;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _context9.p = 0;
            _context9.n = 1;
            return requestSynology('/webapi/entry.cgi', {
              version: 2,
              api: 'SYNO.FileStation.List',
              method: 'list_share',
              additional: 'volume_status'
            });
          case 1:
            payload = _context9.v;
            shares = payload && payload.data && Array.isArray(payload.data.shares) ? payload.data.shares : [];
            if (shares.length) {
              _context9.n = 2;
              break;
            }
            throw new Error('Failed to fetch volume information');
          case 2:
            moviesPath = normalizePath(Lampa.Storage.get("".concat(CONFIG_PREFIX, "PathMovies")));
            tvPath = normalizePath(Lampa.Storage.get("".concat(CONFIG_PREFIX, "PathTV")));
            selectedShare = null;
            if (moviesPath || tvPath) {
              selectedShare = shares.find(function (share) {
                var sharePath = share.path;
                return isShareMatched(sharePath, moviesPath) || isShareMatched(sharePath, tvPath);
              }) || null;
            }
            if (!selectedShare || getShareFreeSpace(selectedShare) === null) {
              selectedShare = shares.find(function (share) {
                return getShareFreeSpace(share) !== null;
              }) || null;
            }
            return _context9.a(2, {
              space: selectedShare ? getShareFreeSpace(selectedShare) : 0
            });
          case 3:
            _context9.p = 3;
            _t6 = _context9.v;
            console.error('TDM', 'Error fetching session info:', _t6);
            throw new Error("Failed to fetch session info: ".concat(_t6.message));
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 3]]);
    }));
    return _GetInfo.apply(this, arguments);
  }
  function SendCommand(_x7, _x8) {
    return _SendCommand.apply(this, arguments);
  }
  function _SendCommand() {
    _SendCommand = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(action, torrentData) {
      var _t7;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.p = 0;
            _context0.n = 1;
            return requestSynology('/webapi/DownloadStation/task.cgi', {
              api: 'SYNO.DownloadStation.Task',
              version: 1,
              method: action.action,
              id: torrentData.id
            });
          case 1:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('actionSentSuccessfully')
            });
            _context0.n = 3;
            break;
          case 2:
            _context0.p = 2;
            _t7 = _context0.v;
            console.log('TDM', 'Send action:', _t7);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('actionReturnedError')
            });
            throw _t7;
          case 3:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 2]]);
    }));
    return _SendCommand.apply(this, arguments);
  }
  function SendTask(_x9, _x0, _x1) {
    return _SendTask.apply(this, arguments);
  }
  function _SendTask() {
    _SendTask = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(selectedTorrent, labels, dtype) {
      var sourceUri, destination, _t8;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            _context1.p = 0;
            sourceUri = selectedTorrent && (selectedTorrent.MagnetUri || selectedTorrent.Link);
            if (sourceUri) {
              _context1.n = 1;
              break;
            }
            throw new Error('No torrent URI provided');
          case 1:
            destination = Lampa.Storage.get("".concat(CONFIG_PREFIX, "Path").concat(dtype)) || '';
            _context1.n = 2;
            return requestSynology('/webapi/DownloadStation/task.cgi', {
              api: 'SYNO.DownloadStation.Task',
              version: 1,
              method: 'create',
              uri: sourceUri,
              destination: destination || undefined
            });
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('actionSentSuccessfully')
            });
            _context1.n = 4;
            break;
          case 3:
            _context1.p = 3;
            _t8 = _context1.v;
            console.log('TDM', 'Send file:', _t8);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('actionReturnedError')
            });
            throw _t8;
          case 4:
            return _context1.a(2);
        }
      }, _callee1, null, [[0, 3]]);
    }));
    return _SendTask.apply(this, arguments);
  }
  var Synology = {
    auth: auth,
    GetData: GetData,
    GetInfo: GetInfo,
    SendCommand: SendCommand,
    SendTask: SendTask
  };

  var $$2 = require('../internals/export');
  var $findIndex = require('../internals/array-iteration').findIndex;
  var addToUnscopables = require('../internals/add-to-unscopables');
  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-findindex -- testing
  if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
    SKIPS_HOLES = false;
  });

  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findindex
  $$2({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
  }, {
    findIndex: function findIndex(callbackfn /* , that = undefined */) {
      return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND_INDEX);

  var $$1 = require('../internals/export');
  var uncurryThis = require('../internals/function-uncurry-this');
  var aCallable = require('../internals/a-callable');
  var toObject = require('../internals/to-object');
  var lengthOfArrayLike = require('../internals/length-of-array-like');
  var deletePropertyOrThrow = require('../internals/delete-property-or-throw');
  var toString = require('../internals/to-string');
  var fails = require('../internals/fails');
  var internalSort = require('../internals/array-sort');
  var arrayMethodIsStrict = require('../internals/array-method-is-strict');
  var FF = require('../internals/environment-ff-version');
  var IE_OR_EDGE = require('../internals/environment-is-ie-or-edge');
  var V8 = require('../internals/environment-v8-version');
  var WEBKIT = require('../internals/environment-webkit-version');
  var test = [];
  var nativeSort = uncurryThis(test.sort);
  var push = uncurryThis(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict('sort');
  var STABLE_SORT = !fails(function () {
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
  $$1({
    target: 'Array',
    proto: true,
    forced: FORCED
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

  var MEDIA_EXTENSIONS = ["mp4", "mkv", "avi", "mov", "webm", "ts", "m4v", "mpg", "mpeg"];
  function normalizeSortName(name) {
    return String(name || "").replace(/\d+/g, function (match) {
      return match.length > 3 ? match : "000".concat(match).slice(-4);
    });
  }
  function sortFiles(files, sortType) {
    return _toConsumableArray(files).sort(function (a, b) {
      if (sortType === "name") {
        return normalizeSortName(a.name).localeCompare(normalizeSortName(b.name));
      }
      if (sortType === "size") {
        return Number(b.length || 0) - Number(a.length || 0);
      }
      if (sortType === "progress") {
        var aProgress = Number(a.bytesCompleted || 0) / Number(a.length || 1);
        var bProgress = Number(b.bytesCompleted || 0) / Number(b.length || 1);
        return bProgress - aProgress;
      }
      return 0;
    });
  }
  function buildWebdavUrl(config, dirName, filePath) {
    var webdavFilePath = "".concat(config.webdavUrl, "/").concat(dirName, "/").concat(filePath);
    var authUrl = "".concat(config.user, ":").concat(config.pass, "@").concat(webdavFilePath.replace(/^https?:\/\//, ""));
    return "https://".concat(authUrl);
  }
  function buildPlaylistItems(config, mediaFiles, dirName) {
    return mediaFiles.map(function (file) {
      return {
        url: buildWebdavUrl(config, dirName, file.name),
        title: String(file.name || "").split("/").pop(),
        timeline: false
      };
    });
  }
  function buildFileSelectItem(file) {
    var fileName = String(file.name || "").split("/").pop();
    var fileSize = file.length ? Lampa.Utils.bytesToSize(file.length) : "";
    var fileExt = String(fileName || "").split(".").pop().toLowerCase();
    var progressText = "";
    if (typeof file.bytesCompleted !== "undefined" && file.length) {
      var percent = Math.round(file.bytesCompleted / file.length * 100);
      progressText = "".concat(percent, "% \u2022 ");
    }
    var icon = "🎥";
    if (["mp4", "mov", "m4v"].indexOf(fileExt) >= 0) icon = "🎬";else if (["mkv", "avi"].indexOf(fileExt) >= 0) icon = "🎞️";else if (["ts", "mpg", "mpeg"].indexOf(fileExt) >= 0) icon = "📺";
    return {
      title: "".concat(icon, " ").concat(fileName),
      subtitle: "".concat(progressText).concat(fileSize),
      file: file,
      template: "selectbox_item",
      selected: false
    };
  }
  function handleKeeneticAction(_x) {
    return _handleKeeneticAction.apply(this, arguments);
  }
  function _handleKeeneticAction() {
    _handleKeeneticAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
      var action, torrentData, getConfig, config, mediaFiles, downloadDir, dirName, file, _openSelector;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            action = _ref.action, torrentData = _ref.torrentData, getConfig = _ref.getConfig;
            if (!(action.action !== "play")) {
              _context.n = 1;
              break;
            }
            return _context.a(2, false);
          case 1:
            if (!(!torrentData.files || torrentData.files.length === 0)) {
              _context.n = 2;
              break;
            }
            throw new Error("No files available for playback");
          case 2:
            config = getConfig();
            if (config.webdavUrl) {
              _context.n = 3;
              break;
            }
            throw new Error("WebDAV URL not configured");
          case 3:
            mediaFiles = torrentData.files.filter(function (file) {
              var ext = String(file.name || "").split(".").pop().toLowerCase();
              return MEDIA_EXTENSIONS.indexOf(ext) >= 0;
            });
            if (!(mediaFiles.length === 0)) {
              _context.n = 4;
              break;
            }
            throw new Error("No media files found in torrent");
          case 4:
            downloadDir = String(torrentData.downloadDir || "");
            dirName = downloadDir.split("/").filter(Boolean).pop() || "";
            if (!(mediaFiles.length === 1)) {
              _context.n = 5;
              break;
            }
            file = mediaFiles[0];
            Lampa.Player.play({
              url: buildWebdavUrl(config, dirName, file.name),
              title: String(file.name || "").split("/").pop(),
              timeline: false
            });
            return _context.a(2, true);
          case 5:
            _openSelector = function openSelector(sortType) {
              var sortedFiles = sortFiles(mediaFiles, sortType || "name");
              var sortButtons = [{
                title: "\uD83D\uDD24 ".concat(Lampa.Lang.translate("sort_by_name")),
                sort: "name",
                separator: true
              }, {
                title: "\uD83D\uDCCA ".concat(Lampa.Lang.translate("sort_by_size")),
                sort: "size"
              }, {
                title: "\uD83D\uDCE5 ".concat(Lampa.Lang.translate("sort_by_progress")),
                sort: "progress"
              }];
              var fileItems = sortedFiles.map(buildFileSelectItem);
              Lampa.Select.show({
                title: Lampa.Lang.translate("torrent_select_file"),
                items: [].concat(sortButtons, _toConsumableArray(fileItems)),
                onSelect: function onSelect(item) {
                  if (item.sort) {
                    _openSelector(item.sort);
                    return;
                  }
                  var selectedFile = item.file;
                  var playlist = buildPlaylistItems(config, sortedFiles, dirName);
                  var selectedIndex = sortedFiles.findIndex(function (file) {
                    return file.name === selectedFile.name;
                  });
                  if (selectedIndex >= 0) {
                    Lampa.Player.play(playlist[selectedIndex]);
                    Lampa.Player.playlist(playlist);
                  }
                },
                onBack: function onBack() {
                  Lampa.Controller.toggle("content");
                }
              });
            };
            _openSelector("name");
            return _context.a(2, true);
        }
      }, _callee);
    }));
    return _handleKeeneticAction.apply(this, arguments);
  }
  var Keenetic = createTransmissionLikeClient({
    configPrefix: "lmetorrentkeenetic",
    clientName: "Keenetic",
    extraFields: ["downloadDir", "files"],
    getExtraConfig: function getExtraConfig(configPrefix) {
      return {
        webdavUrl: Lampa.Storage.field("".concat(configPrefix, "WebdavUrl"))
      };
    },
    mapTorrentData: function mapTorrentData(torrent) {
      return {
        downloadDir: torrent.downloadDir,
        files: torrent.files
      };
    },
    handleCustomAction: handleKeeneticAction
  });

  var CLIENTS = {
    qBittorent: Qbittorent,
    qbittorent: Qbittorent,
    transmission: Transmission,
    synology: Synology,
    keenetic: Keenetic
  };
  var authInFlight = {};
  var pollingCircuitState = {};
  var POLLING_METHODS = {
    GetData: true,
    GetInfo: true
  };
  var BACKOFF_AFTER_FAILURES = 3;
  var BACKOFF_STEPS_MS = [30000, 60000, 120000, 300000];
  var BACKOFF_JITTER_RATIO = 0.15;
  function getStatusCode(error) {
    if (!error || typeof error.status === "undefined") {
      return null;
    }
    var status = Number(error.status);
    return Number.isNaN(status) ? null : status;
  }
  function isPollingMethod(methodName) {
    return POLLING_METHODS[methodName] === true;
  }
  function getPollingKey(clientName, methodName) {
    return "".concat(clientName, ":").concat(methodName);
  }
  function getPollingState(clientName, methodName) {
    var key = getPollingKey(clientName, methodName);
    if (!pollingCircuitState[key]) {
      pollingCircuitState[key] = {
        consecutiveFailures: 0,
        blockedUntil: 0,
        hardBlocked: false,
        lastStatus: null,
        lastMessage: "",
        lastErrorAt: 0
      };
    }
    return pollingCircuitState[key];
  }
  function resetPollingState(clientName, methodName) {
    var state = getPollingState(clientName, methodName);
    state.consecutiveFailures = 0;
    state.blockedUntil = 0;
    state.hardBlocked = false;
    state.lastStatus = null;
    state.lastMessage = "";
    state.lastErrorAt = 0;
  }
  function isHardClientStatus(status) {
    return status >= 400 && status < 500 && status !== 401 && status !== 403 && status !== 408 && status !== 409 && status !== 429;
  }
  function isBackoffCandidate(error) {
    var status = getStatusCode(error);
    if (status === null) {
      var message = String(error && error.message || "").toLowerCase();
      return message.indexOf("timeout") >= 0 || message.indexOf("network") >= 0 || message.indexOf("cors") >= 0;
    }
    if (status === 0 || status === 401 || status === 403 || status === 408 || status === 429) {
      return true;
    }
    return status >= 500 && status < 600;
  }
  function createPollingBlockedError(clientName, methodName, state) {
    var statusSuffix = state.lastStatus !== null ? " (HTTP ".concat(state.lastStatus, ")") : "";
    if (state.hardBlocked) {
      var hardError = new Error("".concat(clientName, " ").concat(methodName, " polling blocked after repeated client errors").concat(statusSuffix));
      hardError.status = state.lastStatus;
      hardError.client = clientName;
      hardError.method = methodName;
      hardError.isBackoffError = true;
      hardError.isCircuitOpen = true;
      hardError.isHardBlocked = true;
      return hardError;
    }
    var retryAfterMs = Math.max(0, state.blockedUntil - Date.now());
    var retryAfterSec = Math.ceil(retryAfterMs / 1000);
    var softError = new Error("".concat(clientName, " ").concat(methodName, " polling paused for ").concat(retryAfterSec, "s").concat(statusSuffix));
    softError.status = state.lastStatus;
    softError.client = clientName;
    softError.method = methodName;
    softError.retryAfterMs = retryAfterMs;
    softError.isBackoffError = true;
    softError.isCircuitOpen = true;
    softError.isHardBlocked = false;
    return softError;
  }
  function getPollingBlockedError(clientName, methodName) {
    var state = getPollingState(clientName, methodName);
    if (state.hardBlocked) {
      return createPollingBlockedError(clientName, methodName, state);
    }
    if (state.blockedUntil > Date.now()) {
      return createPollingBlockedError(clientName, methodName, state);
    }
    if (state.blockedUntil > 0) {
      state.blockedUntil = 0;
    }
    return null;
  }
  function registerPollingFailure(clientName, methodName, error) {
    var state = getPollingState(clientName, methodName);
    var status = getStatusCode(error);
    state.consecutiveFailures += 1;
    state.lastStatus = status;
    state.lastMessage = String(error && error.message || "");
    state.lastErrorAt = Date.now();
    if (status !== null && isHardClientStatus(status) && state.consecutiveFailures >= BACKOFF_AFTER_FAILURES) {
      state.hardBlocked = true;
      state.blockedUntil = 0;
      return;
    }
    if (!isBackoffCandidate(error) || state.consecutiveFailures < BACKOFF_AFTER_FAILURES) {
      return;
    }
    var rawStep = state.consecutiveFailures - BACKOFF_AFTER_FAILURES;
    var stepIndex = Math.min(rawStep, BACKOFF_STEPS_MS.length - 1);
    var delayMs = BACKOFF_STEPS_MS[stepIndex];
    var jitterMs = Math.round(delayMs * BACKOFF_JITTER_RATIO * Math.random());
    state.blockedUntil = Date.now() + delayMs + jitterMs;
  }
  function getClient(clientName) {
    return CLIENTS[clientName] || null;
  }
  function hasClient(clientName) {
    return Boolean(getClient(clientName));
  }
  function getActiveClientName() {
    return Lampa.Storage.field("lmetorrentSelect");
  }
  function getErrorCode(error) {
    if (!error) {
      return null;
    }
    if (typeof error.code === "number" && !Number.isNaN(error.code)) {
      return error.code;
    }
    if (error.responseJSON && error.responseJSON.error && typeof error.responseJSON.error.code !== "undefined") {
      var parsed = Number(error.responseJSON.error.code);
      return Number.isNaN(parsed) ? null : parsed;
    }
    return null;
  }
  function isAuthError(clientName, error) {
    var status = Number(error && error.status);
    var code = getErrorCode(error);
    if (status === 401 || status === 403) {
      return true;
    }
    if (clientName === "synology" && code === 105) {
      return true;
    }
    return false;
  }
  function normalizeClientError(clientName, methodName, error) {
    var normalized = error instanceof Error ? error : new Error(String(error || "Client request failed"));
    if (error && typeof error.status !== "undefined") {
      normalized.status = error.status;
    }
    var code = getErrorCode(error);
    if (code !== null) {
      normalized.code = code;
    }
    normalized.client = clientName;
    normalized.method = methodName;
    normalized.isAuthError = isAuthError(clientName, error);
    return normalized;
  }
  function authenticateClient(_x) {
    return _authenticateClient.apply(this, arguments);
  }
  function _authenticateClient() {
    _authenticateClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(clientName) {
      var silent,
        client,
        _args = arguments;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            silent = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
            client = getClient(clientName);
            if (!(!client || typeof client.auth !== "function")) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!authInFlight[clientName]) {
              _context.n = 2;
              break;
            }
            return _context.a(2, authInFlight[clientName]);
          case 2:
            authInFlight[clientName] = Promise.resolve().then(function () {
              return client.auth(!silent);
            }).finally(function () {
              authInFlight[clientName] = null;
            });
            return _context.a(2, authInFlight[clientName]);
        }
      }, _callee);
    }));
    return _authenticateClient.apply(this, arguments);
  }
  function executeClientMethod(_x2, _x3) {
    return _executeClientMethod.apply(this, arguments);
  }
  function _executeClientMethod() {
    _executeClientMethod = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(clientName, methodName) {
      var args,
        options,
        client,
        retryAuth,
        silentAuth,
        usePollingGuard,
        blockedError,
        result,
        normalized,
        retryResult,
        normalizedRetryError,
        _args2 = arguments,
        _t,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            args = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : [];
            options = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
            client = getClient(clientName);
            if (client) {
              _context2.n = 1;
              break;
            }
            throw new Error("Unknown client type: ".concat(clientName));
          case 1:
            if (!(typeof client[methodName] !== "function")) {
              _context2.n = 2;
              break;
            }
            throw new Error("Unknown method '".concat(methodName, "' for client '").concat(clientName, "'"));
          case 2:
            retryAuth = options.retryAuth !== false;
            silentAuth = options.silentAuth !== false;
            usePollingGuard = options.backgroundPolling === true && isPollingMethod(methodName);
            if (!usePollingGuard) {
              _context2.n = 3;
              break;
            }
            blockedError = getPollingBlockedError(clientName, methodName);
            if (!blockedError) {
              _context2.n = 3;
              break;
            }
            throw blockedError;
          case 3:
            _context2.p = 3;
            _context2.n = 4;
            return client[methodName].apply(client, _toConsumableArray(args));
          case 4:
            result = _context2.v;
            if (isPollingMethod(methodName)) {
              resetPollingState(clientName, methodName);
            }
            return _context2.a(2, result);
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            normalized = normalizeClientError(clientName, methodName, _t);
            if (!(retryAuth && normalized.isAuthError && typeof client.auth === "function")) {
              _context2.n = 10;
              break;
            }
            _context2.p = 6;
            _context2.n = 7;
            return authenticateClient(clientName, silentAuth);
          case 7:
            _context2.n = 8;
            return client[methodName].apply(client, _toConsumableArray(args));
          case 8:
            retryResult = _context2.v;
            if (isPollingMethod(methodName)) {
              resetPollingState(clientName, methodName);
            }
            return _context2.a(2, retryResult);
          case 9:
            _context2.p = 9;
            _t2 = _context2.v;
            normalizedRetryError = normalizeClientError(clientName, methodName, _t2);
            if (usePollingGuard) {
              registerPollingFailure(clientName, methodName, normalizedRetryError);
            }
            throw normalizedRetryError;
          case 10:
            if (usePollingGuard) {
              registerPollingFailure(clientName, methodName, normalized);
            }
            throw normalized;
          case 11:
            return _context2.a(2);
        }
      }, _callee2, null, [[6, 9], [3, 5]]);
    }));
    return _executeClientMethod.apply(this, arguments);
  }

  /**
   * Оновлення метаданих для одного торента.
   * Викликається з torrent_actions.js
   *
   * @param {Object} torrent - об'єкт торента (як у твоєму списку)
   * @param {Object} client  - інформація про клієнта (тип + налаштування)
   */
  function updateMetadataForTorrent(_x, _x2) {
    return _updateMetadataForTorrent.apply(this, arguments);
  }
  /**
   * Простий TMDB-флоу для пошуку медіа інформації
   *
   * @param {Object} torrent - об'єкт торента
   * @returns {Promise<Object|null>} - нормалізований результат TMDB або null
   */
  function _updateMetadataForTorrent() {
    _updateMetadataForTorrent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(torrent, client) {
      var mediaInfo, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return findMediaInfoViaTMDB(torrent);
          case 1:
            mediaInfo = _context.v;
            if (mediaInfo) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            _t = client.type;
            _context.n = _t === 'transmission' ? 3 : _t === 'keenetic' ? 3 : _t === 'qbittorrent' ? 5 : _t === 'synology' ? 7 : 9;
            break;
          case 3:
            _context.n = 4;
            return updateTransmissionLikeMetadata(torrent, client, mediaInfo);
          case 4:
            return _context.a(3, 10);
          case 5:
            _context.n = 6;
            return updateQbittorrentMetadata(torrent, client, mediaInfo);
          case 6:
            return _context.a(3, 10);
          case 7:
            _context.n = 8;
            return updateSynologyMetadata(torrent, client, mediaInfo);
          case 8:
            return _context.a(3, 10);
          case 9:
            console.log('TDM', 'Unknown client type for metadata:', client.type);
          case 10:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _updateMetadataForTorrent.apply(this, arguments);
  }
  function findMediaInfoViaTMDB(_x3) {
    return _findMediaInfoViaTMDB.apply(this, arguments);
  }
  /**
   * Пошук в TMDB з використанням існуючого парсера
   *
   * @param {Object} torrent - торент для пошуку 
   * @returns {Promise<Array>} - результати пошуку
   */
  function _findMediaInfoViaTMDB() {
    _findMediaInfoViaTMDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrent) {
      var results;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return tmdbSearch(torrent);
          case 1:
            results = _context2.v;
            if (!(!results || !results.length)) {
              _context2.n = 2;
              break;
            }
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_nothing_found') //'Нічого не знайдено для ' + torrent.name
            });
            return _context2.a(2, null);
          case 2:
            return _context2.a(2, normalizeTmdbResult(results[0]));
        }
      }, _callee2);
    }));
    return _findMediaInfoViaTMDB.apply(this, arguments);
  }
  function tmdbSearch(_x4) {
    return _tmdbSearch.apply(this, arguments);
  }
  /**
   * Показ модального вікна для вибору результату TMDB
   *
   * @param {Array} results - масив результатів пошуку
   * @returns {Promise<Object|null>} - обраний результат або null
   */
  function _tmdbSearch() {
    _tmdbSearch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrent) {
      var results, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return processTorrents([torrent]);
          case 1:
            results = _context3.v;
            return _context3.a(2, results || []);
          case 2:
            _context3.p = 2;
            _t2 = _context3.v;
            console.error('TDM', 'TMDB search error:', _t2);
            return _context3.a(2, []);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return _tmdbSearch.apply(this, arguments);
  }

  /**
   * Нормалізація результату TMDB до простого об'єкта
   *
   * @param {Object} item - результат з TMDB
   * @returns {Object} - нормалізований об'єкт
   */
  function normalizeTmdbResult(item) {
    return {
      id: item.id,
      media_type: item.media_type || 'movie',
      // або за твоїми правилами
      title: item.title || item.name,
      year: (item.release_date || item.first_air_date || '').slice(0, 4) || null
    };
  }

  /**
   * Форматування тегу для метаданих
   *
   * @param {Object} mediaInfo - інформація про медіа
   * @returns {string} - відформатований тег
   */
  function buildMetadataTag(mediaInfo) {
    // ПОВИННО відповідати поточному формату тегу в плагіні!
    // приклад, якщо так уже є:
    return mediaInfo.media_type + '/' + mediaInfo.id;
  }

  /**
   * Оновлення метаданих для Transmission/Keenetic
   *
   * @param {Object} torrent - об'єкт торента
   * @param {Object} client - інформація про клієнта
   * @param {Object} mediaInfo - інформація про медіа з TMDB
   */
  function updateTransmissionLikeMetadata(_x5, _x6, _x7) {
    return _updateTransmissionLikeMetadata.apply(this, arguments);
  }
  /**
   * Оновлення метаданих для qBittorrent
   *
   * @param {Object} torrent - об'єкт торента
   * @param {Object} client - інформація про клієнта
   * @param {Object} mediaInfo - інформація про медіа з TMDB
   */
  function _updateTransmissionLikeMetadata() {
    _updateTransmissionLikeMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(torrent, client, mediaInfo) {
      var label, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            label = buildMetadataTag(mediaInfo);
            _context4.p = 1;
            if (!(client.type === 'transmission')) {
              _context4.n = 3;
              break;
            }
            _context4.n = 2;
            return Transmission.setLabels(torrent.id, label);
          case 2:
            _context4.n = 4;
            break;
          case 3:
            _context4.n = 4;
            return Keenetic.setLabels(torrent.id, label);
          case 4:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
            });
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t3 = _context4.v;
            console.error('TDM', 'updateTransmissionLikeMetadata error:', _t3);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
            });
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 5]]);
    }));
    return _updateTransmissionLikeMetadata.apply(this, arguments);
  }
  function updateQbittorrentMetadata(_x8, _x9, _x0) {
    return _updateQbittorrentMetadata.apply(this, arguments);
  }
  /**
   * Оновлення метаданих для Synology
   *
   * @param {Object} torrent - об'єкт торента
   * @param {Object} client - інформація про клієнта
   * @param {Object} mediaInfo - інформація про медіа з TMDB
   */
  function _updateQbittorrentMetadata() {
    _updateQbittorrentMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(torrent, client, mediaInfo) {
      var tagValue, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            tagValue = buildMetadataTag(mediaInfo); // той самий формат, що й при додаванні
            _context5.p = 1;
            _context5.n = 2;
            return Qbittorent.setTags(torrent.id, tagValue);
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
            });
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t4 = _context5.v;
            console.error('TDM', 'updateQbittorrentMetadata error:', _t4);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
            });
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return _updateQbittorrentMetadata.apply(this, arguments);
  }
  function updateSynologyMetadata(_x1, _x10, _x11) {
    return _updateSynologyMetadata.apply(this, arguments);
  }
  /**
   * Масове оновлення метаданих для всіх торентів
   *
   * @param {Array} torrents - масив торентів
   * @param {Object} client - інформація про клієнта
   */
  function _updateSynologyMetadata() {
    _updateSynologyMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(torrent, client, mediaInfo) {
      var key, metadataTag, poster, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.p = 0;
            key = String(torrent && torrent.id || "");
            if (key) {
              _context6.n = 1;
              break;
            }
            throw new Error("Synology metadata update: empty torrent id");
          case 1:
            metadataTag = buildMetadataTag(mediaInfo);
            _context6.n = 2;
            return getPosterFromLabels(metadataTag);
          case 2:
            poster = _context6.v;
            _context6.n = 3;
            return saveMetadata(key, {
              tmdb_id: mediaInfo.id,
              media_type: mediaInfo.media_type,
              poster: poster && poster !== './img/img_load.svg' ? poster : '',
              updated_at: Date.now()
            });
          case 3:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
            });
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t5 = _context6.v;
            console.error('TDM', 'updateSynologyMetadata error:', _t5);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
            });
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 4]]);
    }));
    return _updateSynologyMetadata.apply(this, arguments);
  }
  function updateAllMetadata(_x12, _x13) {
    return _updateAllMetadata.apply(this, arguments);
  }
  function _updateAllMetadata() {
    _updateAllMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(torrents, client) {
      var _iterator, _step, torrent, _t6;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _iterator = _createForOfIteratorHelper(torrents);
            _context7.p = 1;
            _iterator.s();
          case 2:
            if ((_step = _iterator.n()).done) {
              _context7.n = 5;
              break;
            }
            torrent = _step.value;
            _context7.n = 3;
            return updateMetadataForTorrent(torrent, client);
          case 3:
            _context7.n = 4;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 500);
            });
          case 4:
            _context7.n = 2;
            break;
          case 5:
            _context7.n = 7;
            break;
          case 6:
            _context7.p = 6;
            _t6 = _context7.v;
            _iterator.e(_t6);
          case 7:
            _context7.p = 7;
            _iterator.f();
            return _context7.f(7);
          case 8:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated_all') //'Оновлення метаданих завершено'
            });
          case 9:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 6, 7, 8]]);
    }));
    return _updateAllMetadata.apply(this, arguments);
  }

  var METADATA_CLIENTS = {
    qBittorent: {
      type: "qbittorrent",
      prefix: "lmetorrentqBittorent",
      withCredentials: false
    },
    transmission: {
      type: "transmission",
      prefix: "lmetorrenttransmission",
      withCredentials: true
    },
    keenetic: {
      type: "keenetic",
      prefix: "lmetorrentkeenetic",
      withCredentials: true
    },
    synology: {
      type: "synology",
      prefix: "lmetorrentsynology",
      withCredentials: true
    }
  };
  function buildMetadataClientConfig(clientName) {
    var client = METADATA_CLIENTS[clientName];
    if (!client) {
      return null;
    }
    var config = {
      type: client.type,
      url: Lampa.Storage.field("".concat(client.prefix, "Url")),
      useProxy: Lampa.Storage.field("".concat(client.prefix, "Proxy")) === true
    };
    if (client.withCredentials) {
      config.user = Lampa.Storage.field("".concat(client.prefix, "User"));
      config.pass = Lampa.Storage.field("".concat(client.prefix, "Pass"));
    }
    return config;
  }
  function isMetadataAction(actionType) {
    return actionType === "parse" || actionType === "parse-all";
  }
  function openTorrentCard(torrentData) {
    var cardInfo = null;
    if (torrentData.tmdb_id && torrentData.media_type) {
      cardInfo = {
        tID: torrentData.tmdb_id,
        method: torrentData.media_type
      };
    } else {
      cardInfo = parseLabels(torrentData.labels);
    }
    if (!cardInfo) {
      Lampa.Bell.push({
        text: "No metadata available for this torrent"
      });
      return;
    }
    Lampa.Activity.push({
      url: "",
      component: "full",
      id: cardInfo.tID,
      method: cardInfo.method,
      source: Lampa.Storage.field("source") || "tmdb"
    });
  }
  function handleMetadataAction(_x, _x2, _x3, _x4) {
    return _handleMetadataAction.apply(this, arguments);
  }
  function _handleMetadataAction() {
    _handleMetadataAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(actionType, torrentData, torrentList, clientName) {
      var clientConfig;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            clientConfig = buildMetadataClientConfig(clientName);
            if (clientConfig) {
              _context.n = 1;
              break;
            }
            Lampa.Bell.push({
              text: "Unknown client type"
            });
            return _context.a(2);
          case 1:
            if (!(actionType === "parse")) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return updateMetadataForTorrent(torrentData, clientConfig);
          case 2:
            return _context.a(2);
          case 3:
            _context.n = 4;
            return updateAllMetadata(torrentList, clientConfig);
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _handleMetadataAction.apply(this, arguments);
  }
  function parseLabels(labels) {
    if (!labels) {
      return null;
    }
    var labelArray = Array.isArray(labels) ? labels : labels.split(",");
    var matchedLabel = labelArray.find(function (label) {
      return /^(tv|movie)\/\d+$/.test(label);
    });
    if (!matchedLabel) {
      return null;
    }
    var _matchedLabel$split = matchedLabel.split("/"),
      _matchedLabel$split2 = _slicedToArray(_matchedLabel$split, 2),
      method = _matchedLabel$split2[0],
      tID = _matchedLabel$split2[1];
    return {
      method: method,
      tID: tID
    };
  }
  function showTorrentMenu(torrentData) {
    var allTorrents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var client = Lampa.Storage.field("lmetorrentSelect");
    var enabled = Lampa.Controller.enabled().name;
    var hasMetadata = torrentData.tmdb_id && torrentData.media_type || parseLabels(torrentData.labels);
    var torrentList = Array.isArray(allTorrents) ? allTorrents : [];
    var menuItems = [{
      title: Lampa.Lang.translate("resume"),
      action: "resume"
    }, {
      title: Lampa.Lang.translate("pause"),
      action: "pause"
    }, {
      title: Lampa.Lang.translate("delete"),
      action: "delete"
    }].concat(_toConsumableArray(hasMetadata ? [{
      title: Lampa.Lang.translate("openCard"),
      action: "card"
    }] : []), [{
      title: Lampa.Lang.translate("add_metadata"),
      action: "parse"
    }]);
    if (torrentList.length > 1) {
      menuItems.push({
        title: Lampa.Lang.translate("add_metadata_all"),
        action: "parse-all"
      });
    }
    if (client === "keenetic") {
      menuItems.push({
        title: "Play",
        action: "play"
      });
    }
    if (client !== "synology") {
      menuItems.push({
        title: Lampa.Lang.translate("fullDelete"),
        action: "delete",
        deleteFiles: true
      });
    }
    Lampa.Select.show({
      title: torrentData.name,
      items: menuItems,
      onBack: function onBack() {
        var currentController = Lampa.Controller.enabled();
        if (currentController && currentController.name !== enabled) {
          Lampa.Controller.toggle(enabled);
        } else {
          Lampa.Controller.toggle("menu");
        }
      },
      onSelect: function onSelect(action) {
        handleTorrentAction(action, torrentData, torrentList);
      }
    });
  }
  function handleTorrentAction(_x5, _x6) {
    return _handleTorrentAction.apply(this, arguments);
  }
  function _handleTorrentAction() {
    _handleTorrentAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(action, torrentData) {
      var allTorrents,
        client,
        torrentList,
        actionType,
        _args2 = arguments,
        _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            allTorrents = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : [];
            client = Lampa.Storage.field("lmetorrentSelect");
            torrentList = Array.isArray(allTorrents) ? allTorrents : [];
            actionType = action && action.action;
            if (!(actionType === "card")) {
              _context2.n = 1;
              break;
            }
            openTorrentCard(torrentData);
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            if (!isMetadataAction(actionType)) {
              _context2.n = 3;
              break;
            }
            _context2.n = 2;
            return handleMetadataAction(actionType, torrentData, torrentList, client);
          case 2:
            return _context2.a(2);
          case 3:
            _context2.n = 4;
            return executeClientMethod(client, "SendCommand", [action, torrentData], {
              silentAuth: true
            });
          case 4:
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            console.error("TDM", "Error handling action:", _t);
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionReturnedError")
            });
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 5]]);
    }));
    return _handleTorrentAction.apply(this, arguments);
  }

  var TorrentStateManager = /*#__PURE__*/function () {
    function TorrentStateManager() {
      _classCallCheck(this, TorrentStateManager);
      this.torrents = [];
      this.timer = null;
      this.listener = Lampa.Listener;
      this.updateInProgress = false;
    }
    return _createClass(TorrentStateManager, [{
      key: "start",
      value: function start() {
        if (this.timer) {
          return;
        }
        this.timer = this.update.bind(this);
        Lampa.Timer.add(15000, this.timer, true);
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.timer) {
          Lampa.Timer.remove(this.timer);
          this.timer = null;
        }
      }
    }, {
      key: "update",
      value: function () {
        var _update = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var client_name, isUniversal, new_torrents, has_active_downloads_before, has_active_downloads_after;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (!this.updateInProgress) {
                  _context.n = 1;
                  break;
                }
                return _context.a(2);
              case 1:
                this.updateInProgress = true;
                _context.p = 2;
                client_name = Lampa.Storage.get('lmetorrentSelect');
                isUniversal = client_name === 'universal' || client_name === 'universalClient';
                if (!(isUniversal || !hasClient(client_name))) {
                  _context.n = 3;
                  break;
                }
                return _context.a(2);
              case 3:
                _context.n = 4;
                return executeClientMethod(client_name, 'GetData', [], {
                  silentAuth: true,
                  backgroundPolling: true
                });
              case 4:
                new_torrents = _context.v;
                if (new_torrents) {
                  has_active_downloads_before = this.hasActiveDownloads();
                  this.torrents = new_torrents;
                  has_active_downloads_after = this.hasActiveDownloads();
                  this.listener.send('torrents:updated', {
                    torrents: this.torrents
                  });
                  if (has_active_downloads_before !== has_active_downloads_after) {
                    this.listener.send('torrents:status_changed', {
                      active: has_active_downloads_after
                    });
                  }
                }
                _context.n = 6;
                break;
              case 5:
                _context.p = 5;
                _context.v;
              case 6:
                _context.p = 6;
                this.updateInProgress = false;
                return _context.f(6);
              case 7:
                return _context.a(2);
            }
          }, _callee, this, [[2, 5, 6, 7]]);
        }));
        function update() {
          return _update.apply(this, arguments);
        }
        return update;
      }()
    }, {
      key: "hasActiveDownloads",
      value: function hasActiveDownloads() {
        return this.torrents.some(function (torrent) {
          var state = String(torrent && torrent.state || '').toLowerCase();
          return state.indexOf('download') >= 0 || state.indexOf('check') >= 0;
        });
      }
    }, {
      key: "on",
      value: function on(event, callback) {
        this.listener.follow(event, callback);
      }
    }]);
  }();
  var TorrentStateManager$1 = new TorrentStateManager();

  var UPDATE_INTERVAL_MS = 15000;
  var ERROR_KIND = {
    AUTH: "auth",
    NETWORK: "network",
    SERVER: "server",
    UNKNOWN: "unknown"
  };
  function Component() {
    var self = this;
    var client = Lampa.Storage.field("lmetorrentSelect");
    var network = new Lampa.Reguest();
    var updateTick = null;
    var updateInProgress = false;
    var items = [];
    var headerItem = null;
    var torrentItemsById = {};
    var active;
    var last;
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250
    });
    var html = $("<div class='lmetorrent-module'></div>");
    var head = $("<div class='lmetorrent-head'></div>");
    var body = $('<div class="lmetorrent-catalog--list category-full"></div>');
    scroll.append(head);
    scroll.append(body);
    html.append(scroll.render());
    function reloadPanel() {
      Lampa.Activity.replace({
        url: "",
        title: (client || "").toUpperCase() + " Manager",
        component: "lmetorrentPanel",
        page: 1
      });
    }
    function openSettings() {
      if (Lampa.Controller) Lampa.Controller.toggle('settings');
      setTimeout(function () {
        if (Lampa.Settings && typeof Lampa.Settings.create === 'function') {
          Lampa.Settings.create('lmetorrent');
        }
      }, 10);
    }
    function stopAutoUpdate() {
      if (updateTick) {
        Lampa.Timer.remove(updateTick);
        updateTick = null;
      }
    }
    function pauseHeaderPolling() {
      TorrentStateManager$1.stop();
    }
    function resumeHeaderPolling() {
      TorrentStateManager$1.start();
    }
    function destroyAllItems() {
      Lampa.Arrays.destroy(items);
      items = [];
      headerItem = null;
      torrentItemsById = {};
      active = null;
      last = null;
    }
    function destroyTorrentItems() {
      Object.keys(torrentItemsById).forEach(function (torrentId) {
        var item = torrentItemsById[torrentId];
        if (item && typeof item.destroy === "function") {
          item.destroy();
        }
      });
      torrentItemsById = {};
      items = headerItem ? [headerItem] : [];
    }
    function trackItemFocus(item) {
      item.render().on("hover:focus", function () {
        last = item.render()[0];
        active = items.indexOf(item);
        if (active >= 0) {
          scroll.update(items[active].render(), true);
        }
      });
    }
    function renderState(title, description) {
      var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (options.resetHeader) {
        head.empty();
        destroyAllItems();
      } else {
        destroyTorrentItems();
      }
      body.empty().removeClass("category-full").addClass("lmetorrent-catalog--state");
      var container = $('<div class="lmetorrent-state"></div>');
      container.append("<div class=\"lmetorrent-state__title\">".concat(title, "</div>"));
      if (description) {
        container.append("<div class=\"lmetorrent-state__description\">".concat(description, "</div>"));
      }
      if (actions.length) {
        var actionList = $('<div class="lmetorrent-state__actions"></div>');
        actions.forEach(function (action) {
          var button = $("<div class=\"simple-button selector\">".concat(action.title, "</div>"));
          button.on("hover:enter", action.onEnter);
          button.on("hover:focus", function () {
            last = button[0];
            scroll.update(button, true);
          });
          actionList.append(button);
        });
        container.append(actionList);
      }
      body.append(container);
    }
    function classifyError(error) {
      if (!error) {
        return ERROR_KIND.UNKNOWN;
      }
      if (error.isAuthError) {
        return ERROR_KIND.AUTH;
      }
      var status = Number(error.status);
      if (status === 401 || status === 403) {
        return ERROR_KIND.AUTH;
      }
      if (status >= 500) {
        return ERROR_KIND.SERVER;
      }
      var message = String(error.message || "").toLowerCase();
      if (status === 0 || message.indexOf("timeout") >= 0 || message.indexOf("network") >= 0 || message.indexOf("cors") >= 0) {
        return ERROR_KIND.NETWORK;
      }
      return ERROR_KIND.UNKNOWN;
    }
    function fetchClientData(_x) {
      return _fetchClientData.apply(this, arguments);
    }
    function _fetchClientData() {
      _fetchClientData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(clientType) {
        var _yield$Promise$all, _yield$Promise$all2, data, info;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (hasClient(clientType)) {
                _context2.n = 1;
                break;
              }
              throw new Error("Unknown client type");
            case 1:
              _context2.n = 2;
              return Promise.all([executeClientMethod(clientType, "GetData", [], {
                silentAuth: true
              }), executeClientMethod(clientType, "GetInfo", [], {
                silentAuth: true
              })]);
            case 2:
              _yield$Promise$all = _context2.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              data = _yield$Promise$all2[0];
              info = _yield$Promise$all2[1];
              return _context2.a(2, {
                data: data,
                info: info
              });
          }
        }, _callee2);
      }));
      return _fetchClientData.apply(this, arguments);
    }
    this.renderLoadingState = function () {
      renderState(Lampa.Lang.translate("torrentmanager_state_loading"), "", [], {
        resetHeader: true
      });
    };
    this.renderEmptyState = function () {
      renderState(Lampa.Lang.translate("torrentmanager_state_empty_title"), Lampa.Lang.translate("torrentmanager_state_empty_description"), [{
        title: Lampa.Lang.translate("torrentmanager_retry"),
        onEnter: reloadPanel
      }]);
    };
    this.renderErrorState = function (error) {
      console.error("TDM", "Panel load error:", error);
      var kind = classifyError(error);
      var actions = [{
        title: Lampa.Lang.translate("torrentmanager_retry"),
        onEnter: reloadPanel
      }, {
        title: Lampa.Lang.translate("torrentmanager_open_settings"),
        onEnter: openSettings
      }];
      if (kind === ERROR_KIND.AUTH) {
        renderState(Lampa.Lang.translate("torrentmanager_state_auth_title"), Lampa.Lang.translate("torrentmanager_state_auth_description"), actions, {
          resetHeader: true
        });
        return;
      }
      if (kind === ERROR_KIND.NETWORK) {
        renderState(Lampa.Lang.translate("torrentmanager_state_network_title"), Lampa.Lang.translate("torrentmanager_state_network_description"), actions, {
          resetHeader: true
        });
        return;
      }
      if (kind === ERROR_KIND.SERVER) {
        renderState(Lampa.Lang.translate("torrentmanager_state_server_title"), Lampa.Lang.translate("torrentmanager_state_server_description"), actions, {
          resetHeader: true
        });
        return;
      }
      renderState(Lampa.Lang.translate("somethingWentWrong"), Lampa.Lang.translate("clientNotClient"), actions, {
        resetHeader: true
      });
    };
    this.create = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            pauseHeaderPolling();
            stopAutoUpdate();
            this.activity.loader(true);
            self.renderLoadingState();
            _context.p = 1;
            _context.n = 2;
            return fetchClientData(client);
          case 2:
            result = _context.v;
            self.build(result);
            startAutoUpdate();
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            self.renderErrorState(_t);
          case 4:
            this.activity.loader(false);
            this.activity.toggle();
            return _context.a(2, this.render());
        }
      }, _callee, this, [[1, 3]]);
    }));
    this.build = function (result) {
      scroll.minus();
      body.removeClass("lmetorrent-catalog--state").addClass("category-full");
      head.empty();
      body.empty();
      destroyAllItems();
      if (result && result.info) {
        self.renderHeader(result.info);
      }
      var torrents = Array.isArray(result && result.data) ? result.data : [];
      if (!torrents.length) {
        self.renderEmptyState();
        return;
      }
      self.renderTorrentList(torrents);
    };
    this.renderHeader = function (data) {
      var item = new Header(data);
      item.render().on("hover:enter", reloadPanel);
      trackItemFocus(item);
      head.append(item.render());
      headerItem = item;
      items = [item];
    };
    this.renderTorrentList = function (torrents) {
      body.removeClass("lmetorrent-catalog--state").addClass("category-full");
      body.empty();
      destroyTorrentItems();
      torrents.forEach(function (torrentData) {
        var item = new Item(torrentData);
        trackItemFocus(item);
        item.render().on("hover:enter", function () {
          showTorrentMenu(torrentData, torrents);
        });
        body.append(item.render());
        items.push(item);
        torrentItemsById[String(torrentData.id)] = item;
      });
    };
    function refreshTorrents() {
      return _refreshTorrents.apply(this, arguments);
    }
    function _refreshTorrents() {
      _refreshTorrents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var torrents, knownIds, nextIds, needRebuild, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!updateInProgress) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              updateInProgress = true;
              _context3.p = 2;
              _context3.n = 3;
              return executeClientMethod(client, "GetData", [], {
                silentAuth: true,
                backgroundPolling: true
              });
            case 3:
              torrents = _context3.v;
              if (Array.isArray(torrents)) {
                _context3.n = 4;
                break;
              }
              return _context3.a(2);
            case 4:
              if (torrents.length) {
                _context3.n = 5;
                break;
              }
              if (!body.hasClass("lmetorrent-catalog--state") || Object.keys(torrentItemsById).length) {
                self.renderEmptyState();
              }
              return _context3.a(2);
            case 5:
              knownIds = Object.keys(torrentItemsById);
              nextIds = torrents.map(function (torrent) {
                return String(torrent.id);
              });
              needRebuild = body.hasClass("lmetorrent-catalog--state") || knownIds.length !== nextIds.length || nextIds.some(function (torrentId) {
                return !torrentItemsById[torrentId];
              });
              if (!needRebuild) {
                _context3.n = 6;
                break;
              }
              self.renderTorrentList(torrents);
              return _context3.a(2);
            case 6:
              torrents.forEach(function (torrent) {
                var item = torrentItemsById[String(torrent.id)];
                if (item && typeof item.update === "function") {
                  item.update(torrent);
                }
              });
              _context3.n = 8;
              break;
            case 7:
              _context3.p = 7;
              _t2 = _context3.v;
              if (!_t2 || !_t2.isBackoffError) {
                console.error("TDM", "Auto update error:", _t2);
              }
            case 8:
              _context3.p = 8;
              updateInProgress = false;
              return _context3.f(8);
            case 9:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 7, 8, 9]]);
      }));
      return _refreshTorrents.apply(this, arguments);
    }
    function startAutoUpdate() {
      if (!hasClient(client) || updateTick) {
        return;
      }
      updateTick = refreshTorrents;
      Lampa.Timer.add(UPDATE_INTERVAL_MS, updateTick);
    }
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.background = function () {
      Lampa.Background.immediately("");
    };
    this.start = function () {
      if (Lampa.Activity.active().activity !== this.activity) return;
      this.background();
      Lampa.Controller.add("content", {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        left: function left() {
          if (Navigator.canmove("left")) Navigator.move("left");else Lampa.Controller.toggle("menu");
        },
        right: function right() {
          Navigator.move("right");
        },
        up: function up() {
          if (Navigator.canmove("up")) Navigator.move("up");else Lampa.Controller.toggle("head");
        },
        down: function down() {
          if (Navigator.canmove("down")) Navigator.move("down");
        },
        back: this.back
      });
      Lampa.Controller.toggle("content");
    };
    this.pause = function () {
      stopAutoUpdate();
      resumeHeaderPolling();
    };
    this.stop = function () {
      stopAutoUpdate();
      resumeHeaderPolling();
    };
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      stopAutoUpdate();
      resumeHeaderPolling();
      network.clear();
      destroyAllItems();
      scroll.destroy();
      html.remove();
      items = null;
      network = null;
    };
  }

  var UKRAINIAN_THANKS_URL = 'https://lampame.donatik.me/';
  var DEFAULT_THANKS_URL = 'https://t.me/tribute/app?startapp=d5WS';
  function getCurrentLanguage() {
    return String(Lampa.Storage.get('language', 'ru') || 'ru').toLowerCase();
  }
  function getThanksUrlByLanguage() {
    return getCurrentLanguage() === 'uk' ? UKRAINIAN_THANKS_URL : DEFAULT_THANKS_URL;
  }
  function openThanksModal() {
    var thanksUrl = getThanksUrlByLanguage();
    var html = Lampa.Template.get('modal_qr', {
      title: Lampa.Lang.translate('torrentmanager_settings_thanks'),
      text: Lampa.Lang.translate('torrentmanager_settings_thanks_description'),
      qr_text: "<a href=\"".concat(thanksUrl, "\">").concat(thanksUrl, "</a>")
    });
    var qrElement = html.find('.account-modal-split__qr-code');
    var enabledController = Lampa.Controller.enabled().name;
    Lampa.Utils.qrcode(thanksUrl, qrElement, function (error) {
      console.error('TDM', 'Unable to generate thanks QR code', error);
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

  function Main$1(manifest) {
    //Создание пункта меню
    Lampa.SettingsApi.addComponent({
      component: manifest.component,
      name: manifest.name,
      icon: manifest.icon
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + 'Thanks',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_settings_thanks')
      },
      onChange: function onChange() {
        openThanksModal();
      }
    });
    function hasSecretValue(value) {
      return Boolean(String(value || "").trim());
    }
    function updateSecretLabel(item, label, storageKey) {
      var status = hasSecretValue(Lampa.Storage.field(storageKey)) ? Lampa.Lang.translate('torrentmanager_secret_set') : Lampa.Lang.translate('torrentmanager_secret_not_set');
      item.find('.settings-param__name').text("".concat(label, " (").concat(status, ")"));
    }
    function openSecretEditor(storageKey, title) {
      Lampa.Input.edit({
        title: title,
        value: Lampa.Storage.field(storageKey) || "",
        free: true,
        nosave: true,
        password: true
      }, function (newValue) {
        Lampa.Storage.set(storageKey, String(newValue || ""));
        Lampa.Bell.push({
          text: Lampa.Lang.translate('torrentmanager_secret_saved')
        });
        Lampa.Settings.update();
      });
    }
    function runClientAuth(clientName, clearSession) {
      var client = null;
      var sessionKey = "";
      if (clientName === "qBittorent") {
        client = Qbittorent;
      } else if (clientName === "transmission") {
        client = Transmission;
        sessionKey = "".concat(manifest.component, "transmissionKey");
      } else if (clientName === "synology") {
        client = Synology;
        sessionKey = "".concat(manifest.component, "synologyKey");
      } else if (clientName === "keenetic") {
        client = Keenetic;
        sessionKey = "".concat(manifest.component, "keeneticKey");
      }
      if (!client || typeof client.auth !== "function") {
        return;
      }
      if (clearSession && sessionKey) {
        Lampa.Storage.set(sessionKey, "");
      }
      Promise.resolve().then(function () {
        return client.auth(true);
      }).catch(function () {});
    }
    function normalizeInputValue(value) {
      if (typeof value === "string") {
        return value.trim();
      }
      if (value === null || typeof value === "undefined") {
        return "";
      }
      return String(value).trim();
    }
    function isAddressWithProtocol(value) {
      return /^https?:\/\/\S+$/i.test(value);
    }
    function createAddressValidationHandler(storageKey) {
      var lastValidValue = "";
      var storedValue = normalizeInputValue(Lampa.Storage.field(storageKey));
      if (isAddressWithProtocol(storedValue)) {
        lastValidValue = storedValue;
      }
      return function (newValue) {
        var normalizedValue = normalizeInputValue(newValue);
        if (!normalizedValue) {
          lastValidValue = "";
          Lampa.Storage.set(storageKey, "");
          Lampa.Settings.update();
          return;
        }
        if (!isAddressWithProtocol(normalizedValue)) {
          Lampa.Storage.set(storageKey, lastValidValue);
          Lampa.Bell.push({
            text: Lampa.Lang.translate('torrentmanager_url_requires_protocol')
          });
          Lampa.Settings.update();
          return;
        }
        lastValidValue = normalizedValue;
        if (newValue !== normalizedValue) {
          Lampa.Storage.set(storageKey, normalizedValue);
        }
        Lampa.Settings.update();
      };
    }

    //Select Client
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + 'Select',
        type: 'select',
        default: 'no_client',
        values: {
          no_client: 'None',
          universalClient: "Universal",
          qBittorent: "qBittorent",
          transmission: "Transmission",
          keenetic: "Keenetic Transmission",
          synology: "Synology"
        }
      },
      field: {
        name: Lampa.Lang.translate('clientChoose')
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    //Proxy TMDB
    // Lampa.SettingsApi.addParam({
    //     component: manifest.component,
    //     param: {
    //         name: manifest.component + 'proxyTMDB',
    //         type: 'trigger',
    //         default: 'false',
    //         values: {
    //             true: Lampa.Lang.translate('true'),
    //             false: Lampa.Lang.translate('false')
    //         },
    //     },
    //     field: {
    //         name: 'Proxy TMDB posters',
    //     },
    //     onRender: function (item) {
    //         var forbiddenValues = ["universalClient", "synology", "no_client"];
    //         var clientValue = Lampa.Storage.field(manifest.component + 'proxyTMDB');
    //         // indexOf возвращает -1, если значения нет в массиве
    //         if (forbiddenValues.indexOf(clientValue) === -1) {
    //             item.show();
    //         } else item.hide();
    //     },
    //     onChange: function () {
    //         Lampa.Settings.update();
    //     }
    // })
    //Universal action
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + 'UniversalAction',
        type: 'select',
        default: 'no_client',
        values: {
          open: Lampa.Lang.translate('openUniversal'),
          click: Lampa.Lang.translate('copyUniversal')
        }
      },
      field: {
        name: Lampa.Lang.translate('UniversalAction')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "universalClient") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    //qBittorent
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("qBittorentUrl") || ""}`,
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: "Address"
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
          item.show();
        } else item.hide();
      },
      onChange: createAddressValidationHandler(manifest.component + "qBittorentUrl")
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentApiKey",
        type: "button"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_api_key')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
          updateSecretLabel(item, Lampa.Lang.translate('torrentmanager_api_key'), manifest.component + "qBittorentApiKey");
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        openSecretEditor(manifest.component + "qBittorentApiKey", 'qBittorrent API key');
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "qBittorentTestConnection"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_test_connection')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("qBittorent", false);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "qBittorentReauth"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_reauth_now')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("qBittorent", true);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false,
        name: manifest.component + "qBittorentTweak"
      },
      field: {
        name: Lampa.Lang.translate('tweak')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    // qBittorent Tweak part
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentSequentialDownload",
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false
      },
      field: {
        name: 'Sequential Download'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentfirstLastPiecePrio",
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false
      },
      field: {
        name: 'Prioritize download first last piece'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentProxy",
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false
      },
      field: {
        name: Lampa.Lang.translate('LMEProxy'),
        description: Lampa.Lang.translate('LMEProxyDescription')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentMovies",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: Lampa.Lang.translate('pathMovieQbit')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentTV",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: Lampa.Lang.translate('pathTVQbit')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    //Transmission
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "transmissionUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: 'Address'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
          item.show();
        } else item.hide();
      },
      onChange: createAddressValidationHandler(manifest.component + "transmissionUrl")
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "transmissionUser",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: 'Login'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "transmissionPass",
        type: "button" //доступно select,input,trigger,title,static
      },
      field: {
        name: 'Password'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
          updateSecretLabel(item, 'Password', manifest.component + "transmissionPass");
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        openSecretEditor(manifest.component + "transmissionPass", 'Transmission Password');
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "transmissionTestConnection"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_test_connection')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("transmission", false);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "transmissionReauth"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_reauth_now')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("transmission", true);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false,
        name: manifest.component + "transmissionTweak"
      },
      field: {
        name: Lampa.Lang.translate('tweak')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    // Transmission Tweak part
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "transmissionAutostart",
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: true
      },
      field: {
        name: 'Autostop'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "transmissionSequentialDownload",
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false
      },
      field: {
        name: 'SequentialDownload'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "transmissionProxy",
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false
      },
      field: {
        name: Lampa.Lang.translate('LMEProxy'),
        description: Lampa.Lang.translate('LMEProxyDescription')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "transmissionPath",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '/transmission/rpc',
        values: '/transmission/rpc',
        default: '/transmission/rpc'
      },
      field: {
        name: Lampa.Lang.translate('TransmissionRPCRoute'),
        description: Lampa.Lang.translate('TransmissionRPCRouteDescription')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "transmissionMovies",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: Lampa.Lang.translate('pathMovie')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "transmissionTV",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: Lampa.Lang.translate('pathTV')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "transmission" && Lampa.Storage.field(manifest.component + "transmissionTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    //Synology
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "synologyUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("synologyUrl") || ""}`,
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: 'Address'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          item.show();
        } else item.hide();
      },
      onChange: createAddressValidationHandler(manifest.component + "synologyUrl")
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "synologyUser",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: 'Login'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "synologyPass",
        type: "button" //доступно select,input,trigger,title,static
      },
      field: {
        name: 'Password'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          updateSecretLabel(item, 'Password', manifest.component + "synologyPass");
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        openSecretEditor(manifest.component + "synologyPass", 'Synology Password');
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "synologyTestConnection"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_test_connection')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("synology", false);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "synologyReauth"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_reauth_now')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("synology", true);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "synologyPathMovies",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: Lampa.Lang.translate('pathMovie')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "synologyPathTV",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: Lampa.Lang.translate('pathTV')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false,
        name: manifest.component + "synologyProxy"
      },
      field: {
        name: Lampa.Lang.translate('LMEProxy'),
        description: Lampa.Lang.translate('LMEProxyDescription')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "synology") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    // Synology Tweak part

    // Keenetic Transmission
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: 'Address'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          item.show();
        } else item.hide();
      },
      onChange: createAddressValidationHandler(manifest.component + "keeneticUrl")
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticUser",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: 'Login'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticPass",
        type: "button" //доступно select,input,trigger,title,static
      },
      field: {
        name: 'Password'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          updateSecretLabel(item, 'Password', manifest.component + "keeneticPass");
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        openSecretEditor(manifest.component + "keeneticPass", 'Keenetic Password');
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "keeneticTestConnection"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_test_connection')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("keenetic", false);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "keeneticReauth"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_reauth_now')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        runClientAuth("keenetic", true);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticWebdavUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: 'WebDAV URL',
        description: 'URL for WebDAV access to files'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          item.show();
        } else item.hide();
      },
      onChange: createAddressValidationHandler(manifest.component + "keeneticWebdavUrl")
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false,
        name: manifest.component + "keeneticTweak"
      },
      field: {
        name: Lampa.Lang.translate('tweak')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic") {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });

    // Keenetic Tweak part
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticAutostart",
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: true
      },
      field: {
        name: 'Autostop'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticSequentialDownload",
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false
      },
      field: {
        name: 'SequentialDownload'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticProxy",
        type: "trigger",
        //доступно select,input,trigger,title,static
        default: false
      },
      field: {
        name: Lampa.Lang.translate('LMEProxy'),
        description: Lampa.Lang.translate('LMEProxyDescription')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticPath",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '/transmission/rpc',
        values: '/transmission/rpc',
        default: '/transmission/rpc'
      },
      field: {
        name: Lampa.Lang.translate('TransmissionRPCRoute'),
        description: Lampa.Lang.translate('TransmissionRPCRouteDescription')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticMovies",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: Lampa.Lang.translate('pathMovie')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "keeneticTV",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        default: ''
      },
      field: {
        name: Lampa.Lang.translate('pathTV')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "keenetic" && Lampa.Storage.field(manifest.component + "keeneticTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
  }

  function Main(selectedTorrent) {
    if (Lampa.Storage.field("lmetorrentUniversalAction") === "open") {
      //if (Lampa.Platform.is('android')) $('<a href="' + selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link + '"><a/>')[0].click()
      //else
      window.location.assign(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link);
    } else {
      Lampa.Utils.copyTextToClipboard(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link, function () {
        Lampa.Bell.push({
          text: Lampa.Lang.translate('copy_secuses')
        });
      }, function () {
        Lampa.Bell.push({
          text: Lampa.Lang.translate('copy_error')
        });
      });
    }
  }

  var DOWNLOAD_ICON = "<svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path><path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path></g></svg>";
  var CLIENT_MENU = {
    qBittorent: {
      title: "qBittorrent",
      type: "client",
      clientName: "qBittorent"
    },
    transmission: {
      title: "Transmission",
      type: "client",
      clientName: "transmission"
    },
    keenetic: {
      title: "Keenetic",
      type: "client",
      clientName: "keenetic"
    },
    synology: {
      title: "Synology",
      type: "client",
      clientName: "synology"
    },
    universalClient: {
      title: "Universal",
      type: "universal"
    }
  };
  function sendToClient(clientName, selectedTorrent, labels, dtype) {
    executeClientMethod(clientName, "SendTask", [selectedTorrent, labels, dtype], {
      silentAuth: true
    }).catch(function () {});
  }
  function sendToUniversal(selectedTorrent) {
    Main(selectedTorrent);
  }
  function buildButtonTitle(label) {
    return "<div class=\"btnTDdownload wait\">".concat(DOWNLOAD_ICON).concat(label, "</div>");
  }
  function resolveTorrentLabels(movie) {
    var type = movie && movie.first_air_date ? "tv" : "movie";
    return "".concat(type, "/").concat(movie && movie.id);
  }
  function resolveDestinationType(movie) {
    return movie && movie.first_air_date ? "TV" : "Movies";
  }
  function Send() {
    Lampa.Listener.follow("torrent", function (e) {
      if (e.type !== "onlong") {
        return;
      }
      var selectedTorrent = e.element;
      var activeMovie = Lampa.Activity.active().movie;
      var labels = resolveTorrentLabels(activeMovie);
      var dtype = resolveDestinationType(activeMovie);
      var selectedClient = Lampa.Storage.field("lmetorrentSelect");
      var menuConfig = CLIENT_MENU[selectedClient];
      if (!menuConfig) {
        return;
      }
      e.menu.push({
        title: buildButtonTitle(menuConfig.title),
        onSelect: function onSelect() {
          if (menuConfig.type === "universal") {
            sendToUniversal(selectedTorrent);
            return;
          }
          sendToClient(menuConfig.clientName, selectedTorrent, labels, dtype);
        }
      });
    });
  }

  function startClient(_x) {
    return _startClient.apply(this, arguments);
  }
  function _startClient() {
    _startClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(client) {
      var data, info, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            if (hasClient(client)) {
              _context2.n = 1;
              break;
            }
            throw new Error('Unknown client type');
          case 1:
            _context2.n = 2;
            return executeClientMethod(client, 'GetData', [], {
              silentAuth: true
            });
          case 2:
            data = _context2.v;
            info = null;
            _context2.p = 3;
            _context2.n = 4;
            return executeClientMethod(client, 'GetInfo', [], {
              silentAuth: true
            });
          case 4:
            info = _context2.v;
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _context2.v;
            info = null;
          case 6:
            result = {
              data: data,
              info: info
            };
            console.log('TDM:', result);
            return _context2.a(2, result);
          case 7:
            _context2.p = 7;
            _t2 = _context2.v;
            console.error('TDM', 'Error fetching client data:', _t2);
            throw _t2;
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 5], [0, 7]]);
    }));
    return _startClient.apply(this, arguments);
  }
  function torrentInfo() {
    Lampa.Listener.follow('full', function (e) {
      if (e.type === 'complite') {
        setTimeout(function () {
          function findTorrent(data, method, id) {
            var searchLabel = "".concat(method, "/").concat(id);
            return data.find(function (item) {
              return item.labels && item.labels.includes(searchLabel);
            });
          }
          var activeClient = getActiveClientName();
          if (!hasClient(activeClient)) {
            return;
          }
          startClient(activeClient).then(function (r) {
            if (r && r.data) {
              var torrent = findTorrent(r.data, e.object.method, e.object.id);
              if (torrent) {
                // Create button element
                var $button = $("<div class=\"full-start__button selector button--lme_torrent\">\n                                <svg fill=\"currentColor\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 588.601 588.6\" xml:space=\"preserve\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g> <path d=\"M168.405,288.048c-3.019,0.084-4.936,0.419-5.864,0.728v20.174l5.632-0.059c6.463-0.078,10.558-4.35,10.558-10.768 C178.73,291.017,174.636,287.869,168.405,288.048z\"></path> <path d=\"M82.324,290.445c-8.177,0.227-12.49,10.278-12.49,22.491c0,12.045,4.588,21.674,12.49,21.737 c8.089,0.079,12.701-9.761,12.701-22.412C95.018,300.86,90.688,290.213,82.324,290.445z\"></path> <path d=\"M125.722,289.235c-2.813,0.082-4.617,0.396-5.484,0.696v19.515l5.276-0.059c6.03-0.074,9.858-4.203,9.858-10.404 C135.372,292.117,131.544,289.074,125.722,289.235z\"></path> <path d=\"M539.568,49.201h-178.2c-0.786,0-1.561,0.074-2.347,0.124V0L11.228,46.419v494.562L359.032,588.6v-50.814 c0.78,0.053,1.55,0.115,2.341,0.115h178.2c20.852,0,37.8-16.959,37.8-37.8v-413.1C577.368,66.161,560.425,49.201,539.568,49.201z M361.368,70.801h178.2c8.928,0,16.2,7.267,16.2,16.2v271.329c-23.272-58.704-70.2-90.393-132.864-99.347 c-18.879-2.705-21.79,0.886-19.687,19.517c1.482,13.252,11.786,9.158,18.747,10.022c56.574,7.085,103.982,49.642,115.288,104.147 c7.267,34.974-1.266,71.872-21.305,101.05h-14.08c36.64-49.116,38.834-102.389,2.964-149.575 c-33.307-43.802-99.62-61.505-145.8-42.604V71.043C359.797,70.93,360.572,70.801,361.368,70.801z M359.032,333.687 c2.226-0.891,4.25-1.703,6.265-2.479c45.752-17.649,97.817-0.606,122.096,39.946c23.757,39.726,14.223,90.034-22.892,122.565 h-14.122c3.912-2.942,7.73-6.181,11.411-9.734c26.314-25.376,35.374-56.162,24.01-90.925 c-11.527-35.258-37.446-55.244-74.007-60.592c-18.114-2.647-36.956,1.244-52.761,9.661V333.687z M359.032,378.891 c0.169-0.163,0.327-0.354,0.506-0.517c22.939-22.17,62.259-21.479,84.555,1.397c22.687,23.277,22.887,60.307-2.479,81.949 c-13.11,11.175-29.995,20.408-46.659,24.49c-11.935,2.921-23.905,4.777-35.923,6.021V378.891z M296.331,275.25l49.401-1.7v11.156 l-19.232,0.514v61.077l-11.938-0.19v-60.57l-18.236,0.493V275.25H296.331z M60.247,292.37l-12.49,0.332v49.265l-7.771-0.11v-48.953 l-11.929,0.321V284.5l32.189-1.113V292.37z M81.857,343.459c-12.677-0.211-20.545-12.983-20.545-30.26 c0-18.077,8.521-31.118,21.209-31.572c13.458-0.466,21.526,12.714,21.526,30.085C104.048,332.153,94.521,343.67,81.857,343.459z M136.836,343.343c-0.738-1.867-1.917-6.982-3.31-14.776c-1.395-8.147-3.73-10.721-8.819-10.895l-4.47,0.025v25.393l-8.701-0.138 v-60.515c3.267-0.828,8.208-1.55,13.324-1.73c7.056-0.242,11.907,1.071,15.238,4.504c2.745,2.797,4.316,7.148,4.316,12.469 c0,8.137-4.398,13.685-9.042,15.868v0.284c3.533,1.641,5.688,6.012,6.951,12.056c1.572,7.857,2.911,15.161,3.963,17.607 L136.836,343.343z M180.312,344.023c-0.788-1.935-2.059-7.229-3.554-15.298c-1.484-8.427-3.995-11.096-9.429-11.264l-4.788,0.021 v26.262l-9.305-0.143v-62.574c3.488-0.865,8.754-1.608,14.241-1.798c7.549-0.274,12.738,1.086,16.313,4.627 c2.942,2.896,4.617,7.394,4.617,12.906c0,8.412-4.704,14.16-9.682,16.428v0.295c3.783,1.688,6.096,6.207,7.446,12.477 c1.68,8.127,3.119,15.684,4.237,18.22L180.312,344.023z M231.742,344.82l-33.874-0.533v-65.646l32.598-1.118v10.083l-22.539,0.609 v17.075l21.266-0.306v9.978l-21.266,0.137v19.438l23.815,0.189V344.82z M241.052,277.151l12.234-0.422l15.515,29.141 c4.061,7.668,7.604,15.688,10.434,23.235h0.19c-0.73-9.313-1.004-18.299-1.004-28.94v-24.301l10.491-0.366v70.208l-11.675-0.18 l-15.881-30.47c-3.828-7.515-7.791-15.884-10.702-23.535l-0.264,0.105c0.43,8.812,0.517,17.819,0.517,29.072v24.421l-9.848-0.152 v-67.816H241.052z M539.568,516.301h-4.915c8.644-11.56,15.746-23.467,21.115-35.743v19.543 C555.769,509.035,548.507,516.301,539.568,516.301z\"></path> </g> </g></svg>\n                                <span>".concat(torrent.completed > 0 ? "".concat(torrent.state, " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : torrent.state, "</span>\n                            </div>"));

                // Attach event handlers
                $button.on("hover:enter", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                  var enabled, menu;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        enabled = Lampa.Controller.enabled().name;
                        menu = [];
                        menu.push({
                          title: Lampa.Lang.translate('resume'),
                          action: 'resume'
                        }, {
                          title: Lampa.Lang.translate('pause'),
                          action: 'pause'
                        }, {
                          title: Lampa.Lang.translate('delete'),
                          action: 'delete'
                        });

                        // Add play option for Keenetic client
                        if (activeClient === 'keenetic') {
                          menu.push({
                            title: Lampa.Lang.translate('play'),
                            action: 'play'
                          });
                        }

                        // Add full delete option for clients that support it
                        if (activeClient !== 'synology') menu.push({
                          title: Lampa.Lang.translate('fullDelete'),
                          action: 'delete',
                          deleteFiles: true
                        });

                        // Set menu
                        Lampa.Select.show({
                          title: torrent.completed > 0 ? "".concat(torrent.state, " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : torrent.state,
                          items: menu,
                          onBack: function onBack() {
                            // Повертаємось до попереднього контролера, якщо він існує
                            var currentController = Lampa.Controller.enabled();
                            if (currentController && currentController.name !== enabled) {
                              Lampa.Controller.toggle(enabled);
                            } else {
                              // Якщо контролер не змінився, просто вимикаємо меню
                              Lampa.Controller.toggle('menu');
                            }
                          },
                          onSelect: function onSelect(a) {
                            return executeClientMethod(activeClient, 'SendCommand', [a, torrent], {
                              silentAuth: true
                            });
                          }
                        });
                      case 1:
                        return _context.a(2);
                    }
                  }, _callee);
                })));

                // Append button to container
                e.object.activity.render().find('.full-start-new__buttons').append($button);
              }
            } else {
              console.error('TDM', 'Failed to get torrent client data');
            }
          });
        }, 100);
      }
    });
  }

  /**
   * Utility functions for Torrent Manager plugin
   */

  /**
   * Create a panel navigation item for Lampa.Select.show
   * @returns {Function} Function that calls Lampa.Activity.push
   */
  function createPanelNavigationItem() {
    return function () {
      Lampa.Activity.push({
        url: '',
        title: String(Lampa.Storage.get('lmetorrentSelect') || '').toUpperCase() + " Manager",
        component: 'lmetorrentPanel',
        page: 1
      });
    };
  }

  var HeaderIconController = /*#__PURE__*/function () {
    function HeaderIconController(element) {
      _classCallCheck(this, HeaderIconController);
      this.element = $(element);
      this.bind();
      this.listen();
    }
    return _createClass(HeaderIconController, [{
      key: "bind",
      value: function bind() {
        this.element.on('hover:enter', this.showSidebar.bind(this));
      }
    }, {
      key: "listen",
      value: function listen() {
        TorrentStateManager$1.on('torrents:status_changed', this.updateColor.bind(this));
      }
    }, {
      key: "showSidebar",
      value: function showSidebar() {
        var torrents = TorrentStateManager$1.torrents.filter(function (torrent) {
          var state = String(torrent && torrent.state || '').toLowerCase();
          var isCompleted = Number(torrent && torrent.completed) >= 1;
          return !isCompleted && state.indexOf('finish') < 0;
        });
        var sortedTorrents = this.sortTorrents(torrents);
        var activeDownloads = torrents.filter(function (torrent) {
          var state = String(torrent && torrent.state || '').toLowerCase();
          return state.indexOf('download') >= 0 || state.indexOf('check') >= 0;
        }).length;
        // Create items for Lampa.Select.show
        var items = [
        // Panel navigation item
        //createPanelNavigationItem(),
        {
          title: String(Lampa.Storage.get('lmetorrentSelect') || '').toUpperCase() + " Manager",
          action: 'panel',
          onSelect: function onSelect() {
            createPanelNavigationItem()();
          }
        }].concat(_toConsumableArray(sortedTorrents.map(function (torrent) {
          return {
            title: "".concat(torrent.name, " (").concat(Math.round((torrent.completed || 0) * 100), "%)"),
            action: 'torrent',
            torrent: torrent
          };
        })));
        Lampa.Select.show({
          title: "Torrents (".concat(activeDownloads, "/").concat(TorrentStateManager$1.torrents.length, ")"),
          items: items,
          onBack: function onBack() {
            Lampa.Controller.toggle('content');
          },
          onSelect: function onSelect(item) {
            if (item.action === 'torrent') {
              showTorrentMenu(item.torrent, TorrentStateManager$1.torrents);
            } else if (item.action === 'panel') {
              item.onSelect();
            }
            // For summary item, we could show a general menu or just do nothing
          }
        });
      }
    }, {
      key: "sortTorrents",
      value: function sortTorrents(torrents) {
        return torrents.sort(function (a, b) {
          var aState = String(a && a.state || '').toLowerCase();
          var bState = String(b && b.state || '').toLowerCase();
          var aDownloading = aState.indexOf('download') >= 0;
          var bDownloading = bState.indexOf('download') >= 0;
          if (aDownloading && !bDownloading) return -1;
          if (!aDownloading && bDownloading) return 1;
          return String(b && b.id || '').localeCompare(String(a && a.id || ''));
        });
      }
    }, {
      key: "updateColor",
      value: function updateColor(event) {
        if (event.active) {
          this.element.css('color', 'yellow');
        } else {
          this.element.css('color', 'limegreen');
        }
      }
    }]);
  }();

  var TORRENT_ICON = "\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M12 4L12 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M16 10L12 14L8 10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M4 18H20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    </svg>\n";
  var DomInjector = /*#__PURE__*/function () {
    function DomInjector() {
      _classCallCheck(this, DomInjector);
    }
    return _createClass(DomInjector, [{
      key: "inject",
      value: function inject() {
        var iconElement = Lampa.Head.addIcon(TORRENT_ICON);
        iconElement.addClass('torrent-manager-icon');
        return new HeaderIconController(iconElement);
      }
    }]);
  }();
  var DomInjector$1 = new DomInjector();

  /** 
   * Plugin manifest information
   */
  var MANIFEST = {
    type: 'other',
    version: '3.1',
    author: '@lme_chat',
    name: 'Torrent Manager',
    description: 'Manager and Runner query',
    component: 'lmetorrent',
    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M13.684 23.94a12.013 12.013 0 0 0 9.599-7.79c-.118.044-.26.096-.432.147c-2 .59-3.404-.466-3.687-.649c-.283-.18-.587-.48-.643-.464c-.183 1.132-1.218 2.706-3.58 3.42c-1.295.391-2.687.4-3.681-.157l.328.822c.13.328.351.866.488 1.192c0 0 .858 2.044 1.608 3.48M2.723 7.153l3.54-.66c.323-.059.68.124.794.407l2.432 6.07c.332.633.399.773.615 1.043c0 0 1.68 2.398 4.24 1.812c1.726-.394 2.532-1.69 2.587-2.612c.057-.296-.032-.669-.185-1.016L13.832 5.61c-.117-.266.022-.527.306-.581l2.953-.55a.69.69 0 0 1 .706.376l3.227 6.91c.13.276.394.712.588.966c0 0 .671.964 1.747.78c.266 0 .569-.143.569-.143c.047-.43.072-.866.072-1.31c0-6.627-5.373-12-12.002-12C5.372.06 0 5.433 0 12.06c0 5.319 3.46 9.827 8.252 11.402a24.768 24.768 0 0 1-.919-2.121L2.298 7.808c-.111-.297.083-.59.425-.654\"/></svg>"
  };
  var SELECT_KEY = "".concat(MANIFEST.component, "Select");
  var SYNOLOGY_KEY = "lmetorrentsynologyKey";

  /**
   * Register all UI templates with Lampa
   */
  function registerTemplates() {
    // CSS styles
    Lampa.Template.add('lmemStyle', "\n        <style>\n            @charset 'UTF-8';.btnTDdownload{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}svg.btnTDdownload{width:36px;height:36px;margin-right:5%}.lmetorrent-error_body{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.lmetorrent-error_body .lmetorrent-error_result{margin-top:2em}.lmetorrent-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 2% 0 2%;margin:0 2% 2% 2%}.lmetorrent-header__update{white-space:nowrap}.lmetorrent-header__space{margin-left:auto}.lmetorrent-catalog--list.category-full{margin-left:0;padding:0 2.5%}.lmetorrent-catalog--state{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:45vh;padding:0 2%}.lmetorrent-state{max-width:46em;width:100%;text-align:center}.lmetorrent-state__title{font-size:1.35em;font-weight:600}.lmetorrent-state__description{margin-top:.8em;opacity:.85;line-height:1.4}.lmetorrent-state__actions{margin-top:1.3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:.7em}.lmetorrent-catalog--list.category-full .card.card--category .card__view{margin-bottom:.72em}.lmetorrent_card__completed{position:absolute;right:0;bottom:0;font-size:.8em;-webkit-border-radius:.3em;-moz-border-radius:.3em;padding:.4em .4em;border-radius:.3em;text-align:center;font-weight:bold;background-color:var(--background-color);color:var(--text-color)}.lmetorrent_card__completed.is-low{--background-color:#fcc;--text-color:#900}.lmetorrent_card__completed.is-mid{--background-color:#ffc;--text-color:#990}.lmetorrent_card__completed.is-high{--background-color:#cfc;--text-color:#090}.lmetorrent_card__state{left:0;top:0}.lmetorrent_card__size{left:0;bottom:0}.lmetorrent_card__size,.lmetorrent_card__state{position:absolute;padding:.4em .4em;background:#fff;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}@media screen and (max-width:900px){.lmetorrent-head{margin:0 2% 3% 2%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;row-gap:.6em}.lmetorrent-header__space{margin-left:0;width:100%;font-size:.95em;opacity:.85}.lmetorrent-catalog--list.category-full{margin-left:0;padding:0 1%}}@media screen and (max-width:767px){.lmetorrent-head{margin:0 2% 2.4% 2%;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.8em}.lmetorrent-header__update{font-size:1.12em}.lmetorrent-header__space{margin-left:auto;width:auto;font-size:1.08em;opacity:.98;white-space:nowrap}.lmetorrent-catalog--list.category-full{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0}.lmetorrent-catalog--list.category-full .card.card--category{width:33.3333% !important;min-width:0;padding-left:.22em;padding-right:.22em}}@media screen and (max-width:560px){.lmetorrent-head{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.lmetorrent-catalog--list.category-full{padding:0}.lmetorrent-catalog--list.category-full .card.card--category .card__view{margin-bottom:.5em}.lmetorrent_card__size,.lmetorrent_card__state,.lmetorrent_card__completed{font-size:.68em}}@media screen and (max-width:420px){.lmetorrent-head{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;row-gap:.55em}.lmetorrent-header__space{width:100%;margin-left:0}}.lmetorrent-item{margin-left:.5em;margin-right:.5em;margin-bottom:1em;width:-webkit-calc(14.2857142857% - 1em);width:calc(14.2857142857% - 1em);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:solid .01em #fff;-webkit-border-radius:.8em;border-radius:.8em}.lmetorrent-item.focus{border:solid .26em #fff}.lmetorrent-item__data{margin-bottom:.4em}.lmetorrent-item__state{top:.5em;left:.5em;padding:.1em .3em;font-weight:bold;-webkit-border-radius:.25em;border-radius:.25em;color:#292d32;background-color:#eee}.lmetorrent-item__badge>svg{width:1em;height:1em;vertical-align:bottom}.lmetorrent-item__name{font-size:1.1em;margin-top:.8em;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}@media screen and (max-width:580px){.lmetorrent-item{width:21%}}@media screen and (max-width:385px){.lmetorrent-item__name{display:none}}.torrent-manager-icon{--icon-status-color:limegreen;color:var(--icon-status-color)}.torrent-manager-sidebar{position:fixed;top:0;right:-350px;width:350px;height:100%;background-color:rgba(0,0,0,0.85);z-index:1000;-webkit-transition:right .3s;-o-transition:right .3s;transition:right .3s;color:white;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.torrent-manager-sidebar.visible{right:0}.torrent-manager-sidebar__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;font-weight:bold;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.torrent-manager-sidebar__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:10px;overflow-y:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px;background-color:rgba(255,255,255,0.1);-webkit-border-radius:5px;border-radius:5px;cursor:pointer;gap:10px}.torrent-manager-sidebar__item:hover{background-color:rgba(255,255,255,0.2)}.torrent-manager-sidebar__item-name{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item-percent{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}\n        </style>\n    ");

    // Header template
    Lampa.Template.add('lmetorrent_header', "<div class=\"lmetorrent-header__data lmetorrent-header__update simple-button selector\">Update</div>\n          <div class=\"lmetorrent-header__data lmetorrent-header__space\">Free space: {space}</div>\n        ");

    // List item template
    Lampa.Template.add('lmetorrent_item', "<div class=\"card selector lmetorrent-item\">\n            <div class=\"lmetorrent-item__data lmetorrent-item__name\">{name}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__state\">{state}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__progress\">{size} / {completed}</div>\n        </div>");

    // Card item template
    Lampa.Template.add('lmetorrent_item__card', "<div class=\"card card--category selector layer--visible layer--render\">\n            <div class=\"card__view\">\n                <img src=\"{image}\" data-src=\"{image_src}\" alt=\"{title}\" class=\"card__img\">\n                <div class=\"card__icons\">\n                    <div class=\"card__icons-inner\">\n                    </div>\n                </div>\n                <div class=\"lmetorrent_card__state\">{state}</div>\n                <div class=\"lmetorrent_card__size\">{size}</div>\n                <div class=\"lmetorrent_card__completed\" data-completed=\"{data-completed}\">{completed}</div>\n            </div>\n        </div>");
  }

  /**
   * Check if a session key date is older than 5 days
   * 
   * @param {number} keyDate - Timestamp of the key creation date
   * @returns {boolean} - True if the key is old or doesn't exist
   */
  function isKeyDateOld(keyDate) {
    if (!keyDate) {
      return true;
    }
    var currentTimestamp = Math.floor(Date.now() / 1000);
    var fiveDaysInSeconds = 5 * 24 * 60 * 60;
    var timestampFiveDaysAgo = currentTimestamp - fiveDaysInSeconds;
    return keyDate < timestampFiveDaysAgo;
  }

  /**
   * Create and add menu button for the plugin
   * 
   * @returns {JQuery} - The created button element
   */
  function createMenuButton() {
    return Lampa.Menu.addButton(MANIFEST.icon, MANIFEST.name, createPanelNavigationItem());
  }

  /**
   * Initialize client authentication based on selected client
   */
  function initializeClientAuth() {
    var selectedClient = Lampa.Storage.get(SELECT_KEY);
    var clientAuthHandlers = {
      qBittorent: function qBittorent() {
        return Qbittorent.auth(false).catch(function () {});
      },
      transmission: function transmission() {
        return Transmission.auth();
      },
      keenetic: function keenetic() {
        return Keenetic.auth();
      },
      synology: function synology() {
        var synologyKey = Lampa.Storage.field(SYNOLOGY_KEY);
        var hasValidSynologySid = synologyKey && _typeof(synologyKey) === "object" && synologyKey.sID;
        if (!hasValidSynologySid || isKeyDateOld(synologyKey.createDate)) {
          return Synology.auth();
        }
        return Promise.resolve();
      }
    };
    var authHandler = clientAuthHandlers[selectedClient];
    if (authHandler) {
      authHandler();
    }
  }

  /**
   * Main plugin initialization function
   */
  function initializePlugin() {
    try {
      // Initialize language support
      Component$1();

      // Register UI templates
      registerTemplates();

      // Register panel component
      Lampa.Component.add('lmetorrentPanel', Component);

      // Register plugin in manifest
      Lampa.Manifest.plugins = MANIFEST;

      // Add menu button if not using universal client
      var selectedClient = Lampa.Storage.get(SELECT_KEY);
      if (selectedClient !== 'universalClient') {
        torrentInfo();
        createMenuButton();
      }

      // Add CSS styles
      $('body').append(Lampa.Template.get('lmemStyle', {}, true));

      // Initialize configuration
      Main$1(MANIFEST);

      // Initialize downloader
      Send();

      // Initialize client authentication
      initializeClientAuth();

      // Initialize new header feature
      DomInjector$1.inject();
      TorrentStateManager$1.start();
    } catch (error) {
      console.error('TDM', 'Error initializing Torrent Manager plugin:', error);
    }
  }

  /**
   * Start the plugin when Lampa is ready
   */
  function startPlugin() {
    window.plugin_lmetorrent_ready = true;
    if (window.appready) {
      initializePlugin();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
          initializePlugin();
        }
      });
    }
  }

  // Initialize the plugin if not already initialized
  if (!window.plugin_lmetorrent_ready) {
    startPlugin();
  }

})();
