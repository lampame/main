(function () {
  'use strict';

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
  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }
  function _classPrivateMethodInitSpec(e, a) {
    _checkPrivateRedeclaration(e, a), a.add(e);
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
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
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
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
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
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
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
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
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var _vt;
  /*! For license information please see index.js.LICENSE.txt */
  var t = {
      2: function _(t) {
        function e(t, e, o) {
          t instanceof RegExp && (t = n(t, o)), e instanceof RegExp && (e = n(e, o));
          var i = r(t, e, o);
          return i && {
            start: i[0],
            end: i[1],
            pre: o.slice(0, i[0]),
            body: o.slice(i[0] + t.length, i[1]),
            post: o.slice(i[1] + e.length)
          };
        }
        function n(t, e) {
          var n = e.match(t);
          return n ? n[0] : null;
        }
        function r(t, e, n) {
          var r,
            o,
            i,
            s,
            a,
            u = n.indexOf(t),
            c = n.indexOf(e, u + 1),
            l = u;
          if (u >= 0 && c > 0) {
            for (r = [], i = n.length; l >= 0 && !a;) l == u ? (r.push(l), u = n.indexOf(t, l + 1)) : 1 == r.length ? a = [r.pop(), c] : ((o = r.pop()) < i && (i = o, s = c), c = n.indexOf(e, l + 1)), l = u < c && u >= 0 ? u : c;
            r.length && (a = [i, s]);
          }
          return a;
        }
        t.exports = e, e.range = r;
      },
      101: function _(t, e, n) {
        var r;
        t = n.nmd(t), function (o) {
          (t && t.exports, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global);
          var s = function s(t) {
            this.message = t;
          };
          (s.prototype = new Error()).name = "InvalidCharacterError";
          var a = function a(t) {
              throw new s(t);
            },
            u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            c = /[\t\n\f\r ]/g,
            l = {
              encode: function encode(t) {
                t = String(t), /[^\0-\xFF]/.test(t) && a("The string to be encoded contains characters outside of the Latin1 range.");
                for (var e, n, r, o, i = t.length % 3, s = "", c = -1, l = t.length - i; ++c < l;) e = t.charCodeAt(c) << 16, n = t.charCodeAt(++c) << 8, r = t.charCodeAt(++c), s += u.charAt((o = e + n + r) >> 18 & 63) + u.charAt(o >> 12 & 63) + u.charAt(o >> 6 & 63) + u.charAt(63 & o);
                return 2 == i ? (e = t.charCodeAt(c) << 8, n = t.charCodeAt(++c), s += u.charAt((o = e + n) >> 10) + u.charAt(o >> 4 & 63) + u.charAt(o << 2 & 63) + "=") : 1 == i && (o = t.charCodeAt(c), s += u.charAt(o >> 2) + u.charAt(o << 4 & 63) + "=="), s;
              },
              decode: function decode(t) {
                var e = (t = String(t).replace(c, "")).length;
                e % 4 == 0 && (e = (t = t.replace(/==?$/, "")).length), (e % 4 == 1 || /[^+a-zA-Z0-9/]/.test(t)) && a("Invalid character: the string to be decoded is not correctly encoded.");
                for (var n, r, o = 0, i = "", s = -1; ++s < e;) r = u.indexOf(t.charAt(s)), n = o % 4 ? 64 * n + r : r, o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
                return i;
              },
              version: "1.0.0"
            };
          void 0 === (r = function () {
            return l;
          }.call(e, n, e, t)) || (t.exports = r);
        }();
      },
      172: function _(t, e) {
        e.d = function (t) {
          if (!t) return 0;
          for (var e = (t = t.toString()).length, n = t.length; n--;) {
            var r = t.charCodeAt(n);
            56320 <= r && r <= 57343 && n--, 127 < r && r <= 2047 ? e++ : 2047 < r && r <= 65535 && (e += 2);
          }
          return e;
        };
      },
      526: function _(t) {
        var e = {
          utf8: {
            stringToBytes: function stringToBytes(t) {
              return e.bin.stringToBytes(unescape(encodeURIComponent(t)));
            },
            bytesToString: function bytesToString(t) {
              return decodeURIComponent(escape(e.bin.bytesToString(t)));
            }
          },
          bin: {
            stringToBytes: function stringToBytes(t) {
              for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
              return e;
            },
            bytesToString: function bytesToString(t) {
              for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
              return e.join("");
            }
          }
        };
        t.exports = e;
      },
      298: function _(t) {
        var e, n;
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
          rotl: function rotl(t, e) {
            return t << e | t >>> 32 - e;
          },
          rotr: function rotr(t, e) {
            return t << 32 - e | t >>> e;
          },
          endian: function endian(t) {
            if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
            for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
            return t;
          },
          randomBytes: function randomBytes(t) {
            for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
            return e;
          },
          bytesToWords: function bytesToWords(t) {
            for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
            return e;
          },
          wordsToBytes: function wordsToBytes(t) {
            for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
            return e;
          },
          bytesToHex: function bytesToHex(t) {
            for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));
            return e.join("");
          },
          hexToBytes: function hexToBytes(t) {
            for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
            return e;
          },
          bytesToBase64: function bytesToBase64(t) {
            for (var n = [], r = 0; r < t.length; r += 3) for (var o = t[r] << 16 | t[r + 1] << 8 | t[r + 2], i = 0; i < 4; i++) 8 * r + 6 * i <= 8 * t.length ? n.push(e.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
            return n.join("");
          },
          base64ToBytes: function base64ToBytes(t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var n = [], r = 0, o = 0; r < t.length; o = ++r % 4) 0 != o && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | e.indexOf(t.charAt(r)) >>> 6 - 2 * o);
            return n;
          }
        }, t.exports = n;
      },
      635: function _(t, e, n) {
        var r = n(31),
          o = n(338),
          i = n(221);
        t.exports = {
          XMLParser: o,
          XMLValidator: r,
          XMLBuilder: i
        };
      },
      118: function _(t) {
        t.exports = function (t) {
          return "function" == typeof t ? t : Array.isArray(t) ? function (e) {
            var _iterator = _createForOfIteratorHelper(t),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _n = _step.value;
                if ("string" == typeof _n && e === _n) return !0;
                if (_n instanceof RegExp && _n.test(e)) return !0;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } : function () {
            return !1;
          };
        };
      },
      705: function _(t, e) {
        var n = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
          r = "[" + n + "][" + n + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",
          o = new RegExp("^" + r + "$");
        e.isExist = function (t) {
          return void 0 !== t;
        }, e.isEmptyObject = function (t) {
          return 0 === Object.keys(t).length;
        }, e.merge = function (t, e, n) {
          if (e) {
            var _r = Object.keys(e),
              _o = _r.length;
            for (var _i = 0; _i < _o; _i++) t[_r[_i]] = "strict" === n ? [e[_r[_i]]] : e[_r[_i]];
          }
        }, e.getValue = function (t) {
          return e.isExist(t) ? t : "";
        }, e.isName = function (t) {
          return !(null == o.exec(t));
        }, e.getAllMatches = function (t, e) {
          var n = [];
          var r = e.exec(t);
          for (; r;) {
            var _o2 = [];
            _o2.startIndex = e.lastIndex - r[0].length;
            var _i2 = r.length;
            for (var _t2 = 0; _t2 < _i2; _t2++) _o2.push(r[_t2]);
            n.push(_o2), r = e.exec(t);
          }
          return n;
        }, e.nameRegexp = r;
      },
      31: function _(t, e, n) {
        var r = n(705),
          o = {
            allowBooleanAttributes: !1,
            unpairedTags: []
          };
        function i(t) {
          return " " === t || "\t" === t || "\n" === t || "\r" === t;
        }
        function s(t, e) {
          var n = e;
          for (; e < t.length; e++) if ("?" != t[e] && " " != t[e]) ;else {
            var _r2 = t.substr(n, e - n);
            if (e > 5 && "xml" === _r2) return d("InvalidXml", "XML declaration allowed only at the start of the document.", m(t, e));
            if ("?" == t[e] && ">" == t[e + 1]) {
              e++;
              break;
            }
          }
          return e;
        }
        function a(t, e) {
          if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
            for (e += 3; e < t.length; e++) if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
              e += 2;
              break;
            }
          } else if (t.length > e + 8 && "D" === t[e + 1] && "O" === t[e + 2] && "C" === t[e + 3] && "T" === t[e + 4] && "Y" === t[e + 5] && "P" === t[e + 6] && "E" === t[e + 7]) {
            var _n2 = 1;
            for (e += 8; e < t.length; e++) if ("<" === t[e]) _n2++;else if (">" === t[e] && (_n2--, 0 === _n2)) break;
          } else if (t.length > e + 9 && "[" === t[e + 1] && "C" === t[e + 2] && "D" === t[e + 3] && "A" === t[e + 4] && "T" === t[e + 5] && "A" === t[e + 6] && "[" === t[e + 7]) for (e += 8; e < t.length; e++) if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
            e += 2;
            break;
          }
          return e;
        }
        e.validate = function (t, e) {
          e = Object.assign({}, o, e);
          var n = [];
          var u = !1,
            c = !1;
          "\uFEFF" === t[0] && (t = t.substr(1));
          for (var _o3 = 0; _o3 < t.length; _o3++) if ("<" === t[_o3] && "?" === t[_o3 + 1]) {
            if (_o3 += 2, _o3 = s(t, _o3), _o3.err) return _o3;
          } else {
            if ("<" !== t[_o3]) {
              if (i(t[_o3])) continue;
              return d("InvalidChar", "char '" + t[_o3] + "' is not expected.", m(t, _o3));
            }
            {
              var _g = _o3;
              if (_o3++, "!" === t[_o3]) {
                _o3 = a(t, _o3);
                continue;
              }
              {
                var _y = !1;
                "/" === t[_o3] && (_y = !0, _o3++);
                var _v = "";
                for (; _o3 < t.length && ">" !== t[_o3] && " " !== t[_o3] && "\t" !== t[_o3] && "\n" !== t[_o3] && "\r" !== t[_o3]; _o3++) _v += t[_o3];
                if (_v = _v.trim(), "/" === _v[_v.length - 1] && (_v = _v.substring(0, _v.length - 1), _o3--), h = _v, !r.isName(h)) {
                  var _e2 = void 0;
                  return _e2 = 0 === _v.trim().length ? "Invalid space after '<'." : "Tag '" + _v + "' is an invalid name.", d("InvalidTag", _e2, m(t, _o3));
                }
                var _b = l(t, _o3);
                if (!1 === _b) return d("InvalidAttr", "Attributes for '" + _v + "' have open quote.", m(t, _o3));
                var _w = _b.value;
                if (_o3 = _b.index, "/" === _w[_w.length - 1]) {
                  var _n3 = _o3 - _w.length;
                  _w = _w.substring(0, _w.length - 1);
                  var _r3 = p(_w, e);
                  if (!0 !== _r3) return d(_r3.err.code, _r3.err.msg, m(t, _n3 + _r3.err.line));
                  u = !0;
                } else if (_y) {
                  if (!_b.tagClosed) return d("InvalidTag", "Closing tag '" + _v + "' doesn't have proper closing.", m(t, _o3));
                  if (_w.trim().length > 0) return d("InvalidTag", "Closing tag '" + _v + "' can't have attributes or invalid starting.", m(t, _g));
                  if (0 === n.length) return d("InvalidTag", "Closing tag '" + _v + "' has not been opened.", m(t, _g));
                  {
                    var _e3 = n.pop();
                    if (_v !== _e3.tagName) {
                      var _n4 = m(t, _e3.tagStartPos);
                      return d("InvalidTag", "Expected closing tag '" + _e3.tagName + "' (opened in line " + _n4.line + ", col " + _n4.col + ") instead of closing tag '" + _v + "'.", m(t, _g));
                    }
                    0 == n.length && (c = !0);
                  }
                } else {
                  var _r4 = p(_w, e);
                  if (!0 !== _r4) return d(_r4.err.code, _r4.err.msg, m(t, _o3 - _w.length + _r4.err.line));
                  if (!0 === c) return d("InvalidXml", "Multiple possible root nodes found.", m(t, _o3));
                  -1 !== e.unpairedTags.indexOf(_v) || n.push({
                    tagName: _v,
                    tagStartPos: _g
                  }), u = !0;
                }
                for (_o3++; _o3 < t.length; _o3++) if ("<" === t[_o3]) {
                  if ("!" === t[_o3 + 1]) {
                    _o3++, _o3 = a(t, _o3);
                    continue;
                  }
                  if ("?" !== t[_o3 + 1]) break;
                  if (_o3 = s(t, ++_o3), _o3.err) return _o3;
                } else if ("&" === t[_o3]) {
                  var _e4 = f(t, _o3);
                  if (-1 == _e4) return d("InvalidChar", "char '&' is not expected.", m(t, _o3));
                  _o3 = _e4;
                } else if (!0 === c && !i(t[_o3])) return d("InvalidXml", "Extra text at the end", m(t, _o3));
                "<" === t[_o3] && _o3--;
              }
            }
          }
          var h;
          return u ? 1 == n.length ? d("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", m(t, n[0].tagStartPos)) : !(n.length > 0) || d("InvalidXml", "Invalid '" + JSON.stringify(n.map(function (t) {
            return t.tagName;
          }), null, 4).replace(/\r?\n/g, "") + "' found.", {
            line: 1,
            col: 1
          }) : d("InvalidXml", "Start tag expected.", 1);
        };
        var u = '"',
          c = "'";
        function l(t, e) {
          var n = "",
            r = "",
            o = !1;
          for (; e < t.length; e++) {
            if (t[e] === u || t[e] === c) "" === r ? r = t[e] : r !== t[e] || (r = "");else if (">" === t[e] && "" === r) {
              o = !0;
              break;
            }
            n += t[e];
          }
          return "" === r && {
            value: n,
            index: e,
            tagClosed: o
          };
        }
        var h = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
        function p(t, e) {
          var n = r.getAllMatches(t, h),
            o = {};
          for (var _t3 = 0; _t3 < n.length; _t3++) {
            if (0 === n[_t3][1].length) return d("InvalidAttr", "Attribute '" + n[_t3][2] + "' has no space in starting.", y(n[_t3]));
            if (void 0 !== n[_t3][3] && void 0 === n[_t3][4]) return d("InvalidAttr", "Attribute '" + n[_t3][2] + "' is without value.", y(n[_t3]));
            if (void 0 === n[_t3][3] && !e.allowBooleanAttributes) return d("InvalidAttr", "boolean attribute '" + n[_t3][2] + "' is not allowed.", y(n[_t3]));
            var _r5 = n[_t3][2];
            if (!g(_r5)) return d("InvalidAttr", "Attribute '" + _r5 + "' is an invalid name.", y(n[_t3]));
            if (o.hasOwnProperty(_r5)) return d("InvalidAttr", "Attribute '" + _r5 + "' is repeated.", y(n[_t3]));
            o[_r5] = 1;
          }
          return !0;
        }
        function f(t, e) {
          if (";" === t[++e]) return -1;
          if ("#" === t[e]) return function (t, e) {
            var n = /\d/;
            for ("x" === t[e] && (e++, n = /[\da-fA-F]/); e < t.length; e++) {
              if (";" === t[e]) return e;
              if (!t[e].match(n)) break;
            }
            return -1;
          }(t, ++e);
          var n = 0;
          for (; e < t.length; e++, n++) if (!(t[e].match(/\w/) && n < 20)) {
            if (";" === t[e]) break;
            return -1;
          }
          return e;
        }
        function d(t, e, n) {
          return {
            err: {
              code: t,
              msg: e,
              line: n.line || n,
              col: n.col
            }
          };
        }
        function g(t) {
          return r.isName(t);
        }
        function m(t, e) {
          var n = t.substring(0, e).split(/\r?\n/);
          return {
            line: n.length,
            col: n[n.length - 1].length + 1
          };
        }
        function y(t) {
          return t.startIndex + t[1].length;
        }
      },
      221: function _(t, e, n) {
        var r = n(87),
          o = n(118),
          i = {
            attributeNamePrefix: "@_",
            attributesGroupName: !1,
            textNodeName: "#text",
            ignoreAttributes: !0,
            cdataPropName: !1,
            format: !1,
            indentBy: "  ",
            suppressEmptyNode: !1,
            suppressUnpairedNode: !0,
            suppressBooleanAttributes: !0,
            tagValueProcessor: function tagValueProcessor(t, e) {
              return e;
            },
            attributeValueProcessor: function attributeValueProcessor(t, e) {
              return e;
            },
            preserveOrder: !1,
            commentPropName: !1,
            unpairedTags: [],
            entities: [{
              regex: new RegExp("&", "g"),
              val: "&amp;"
            }, {
              regex: new RegExp(">", "g"),
              val: "&gt;"
            }, {
              regex: new RegExp("<", "g"),
              val: "&lt;"
            }, {
              regex: new RegExp("'", "g"),
              val: "&apos;"
            }, {
              regex: new RegExp('"', "g"),
              val: "&quot;"
            }],
            processEntities: !0,
            stopNodes: [],
            oneListGroup: !1
          };
        function s(t) {
          this.options = Object.assign({}, i, t), !0 === this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function () {
            return !1;
          } : (this.ignoreAttributesFn = o(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = c), this.processTextOrObjNode = a, this.options.format ? (this.indentate = u, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function () {
            return "";
          }, this.tagEndChar = ">", this.newLine = "");
        }
        function a(t, e, n, r) {
          var o = this.j2x(t, n + 1, r.concat(e));
          return void 0 !== t[this.options.textNodeName] && 1 === Object.keys(t).length ? this.buildTextValNode(t[this.options.textNodeName], e, o.attrStr, n) : this.buildObjectNode(o.val, e, o.attrStr, n);
        }
        function u(t) {
          return this.options.indentBy.repeat(t);
        }
        function c(t) {
          return !(!t.startsWith(this.options.attributeNamePrefix) || t === this.options.textNodeName) && t.substr(this.attrPrefixLen);
        }
        s.prototype.build = function (t) {
          return this.options.preserveOrder ? r(t, this.options) : (Array.isArray(t) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t = _defineProperty({}, this.options.arrayNodeName, t)), this.j2x(t, 0, []).val);
        }, s.prototype.j2x = function (t, e, n) {
          var r = "",
            o = "";
          var i = n.join(".");
          for (var _s in t) if (Object.prototype.hasOwnProperty.call(t, _s)) if (void 0 === t[_s]) this.isAttribute(_s) && (o += "");else if (null === t[_s]) this.isAttribute(_s) ? o += "" : "?" === _s[0] ? o += this.indentate(e) + "<" + _s + "?" + this.tagEndChar : o += this.indentate(e) + "<" + _s + "/" + this.tagEndChar;else if (t[_s] instanceof Date) o += this.buildTextValNode(t[_s], _s, "", e);else if ("object" != _typeof(t[_s])) {
            var _n5 = this.isAttribute(_s);
            if (_n5 && !this.ignoreAttributesFn(_n5, i)) r += this.buildAttrPairStr(_n5, "" + t[_s]);else if (!_n5) if (_s === this.options.textNodeName) {
              var _e5 = this.options.tagValueProcessor(_s, "" + t[_s]);
              o += this.replaceEntitiesValue(_e5);
            } else o += this.buildTextValNode(t[_s], _s, "", e);
          } else if (Array.isArray(t[_s])) {
            var _r6 = t[_s].length;
            var _i3 = "",
              _a = "";
            for (var _u = 0; _u < _r6; _u++) {
              var _r7 = t[_s][_u];
              if (void 0 === _r7) ;else if (null === _r7) "?" === _s[0] ? o += this.indentate(e) + "<" + _s + "?" + this.tagEndChar : o += this.indentate(e) + "<" + _s + "/" + this.tagEndChar;else if ("object" == _typeof(_r7)) {
                if (this.options.oneListGroup) {
                  var _t5 = this.j2x(_r7, e + 1, n.concat(_s));
                  _i3 += _t5.val, this.options.attributesGroupName && _r7.hasOwnProperty(this.options.attributesGroupName) && (_a += _t5.attrStr);
                } else _i3 += this.processTextOrObjNode(_r7, _s, e, n);
              } else if (this.options.oneListGroup) {
                var _t6 = this.options.tagValueProcessor(_s, _r7);
                _t6 = this.replaceEntitiesValue(_t6), _i3 += _t6;
              } else _i3 += this.buildTextValNode(_r7, _s, "", e);
            }
            this.options.oneListGroup && (_i3 = this.buildObjectNode(_i3, _s, _a, e)), o += _i3;
          } else if (this.options.attributesGroupName && _s === this.options.attributesGroupName) {
            var _e6 = Object.keys(t[_s]),
              _n6 = _e6.length;
            for (var _o4 = 0; _o4 < _n6; _o4++) r += this.buildAttrPairStr(_e6[_o4], "" + t[_s][_e6[_o4]]);
          } else o += this.processTextOrObjNode(t[_s], _s, e, n);
          return {
            attrStr: r,
            val: o
          };
        }, s.prototype.buildAttrPairStr = function (t, e) {
          return e = this.options.attributeValueProcessor(t, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && "true" === e ? " " + t : " " + t + '="' + e + '"';
        }, s.prototype.buildObjectNode = function (t, e, n, r) {
          if ("" === t) return "?" === e[0] ? this.indentate(r) + "<" + e + n + "?" + this.tagEndChar : this.indentate(r) + "<" + e + n + this.closeTag(e) + this.tagEndChar;
          {
            var _o5 = "</" + e + this.tagEndChar,
              _i4 = "";
            return "?" === e[0] && (_i4 = "?", _o5 = ""), !n && "" !== n || -1 !== t.indexOf("<") ? !1 !== this.options.commentPropName && e === this.options.commentPropName && 0 === _i4.length ? this.indentate(r) + "<!--".concat(t, "-->") + this.newLine : this.indentate(r) + "<" + e + n + _i4 + this.tagEndChar + t + this.indentate(r) + _o5 : this.indentate(r) + "<" + e + n + _i4 + ">" + t + _o5;
          }
        }, s.prototype.closeTag = function (t) {
          var e = "";
          return -1 !== this.options.unpairedTags.indexOf(t) ? this.options.suppressUnpairedNode || (e = "/") : e = this.options.suppressEmptyNode ? "/" : "></".concat(t), e;
        }, s.prototype.buildTextValNode = function (t, e, n, r) {
          if (!1 !== this.options.cdataPropName && e === this.options.cdataPropName) return this.indentate(r) + "<![CDATA[".concat(t, "]]>") + this.newLine;
          if (!1 !== this.options.commentPropName && e === this.options.commentPropName) return this.indentate(r) + "<!--".concat(t, "-->") + this.newLine;
          if ("?" === e[0]) return this.indentate(r) + "<" + e + n + "?" + this.tagEndChar;
          {
            var _o6 = this.options.tagValueProcessor(e, t);
            return _o6 = this.replaceEntitiesValue(_o6), "" === _o6 ? this.indentate(r) + "<" + e + n + this.closeTag(e) + this.tagEndChar : this.indentate(r) + "<" + e + n + ">" + _o6 + "</" + e + this.tagEndChar;
          }
        }, s.prototype.replaceEntitiesValue = function (t) {
          if (t && t.length > 0 && this.options.processEntities) for (var _e7 = 0; _e7 < this.options.entities.length; _e7++) {
            var _n7 = this.options.entities[_e7];
            t = t.replace(_n7.regex, _n7.val);
          }
          return t;
        }, t.exports = s;
      },
      87: function _(t) {
        function e(t, s, a, u) {
          var c = "",
            l = !1;
          for (var _h = 0; _h < t.length; _h++) {
            var _p = t[_h],
              _f = n(_p);
            if (void 0 === _f) continue;
            var _d = "";
            if (_d = 0 === a.length ? _f : "".concat(a, ".").concat(_f), _f === s.textNodeName) {
              var _t7 = _p[_f];
              o(_d, s) || (_t7 = s.tagValueProcessor(_f, _t7), _t7 = i(_t7, s)), l && (c += u), c += _t7, l = !1;
              continue;
            }
            if (_f === s.cdataPropName) {
              l && (c += u), c += "<![CDATA[".concat(_p[_f][0][s.textNodeName], "]]>"), l = !1;
              continue;
            }
            if (_f === s.commentPropName) {
              c += u + "<!--".concat(_p[_f][0][s.textNodeName], "-->"), l = !0;
              continue;
            }
            if ("?" === _f[0]) {
              var _t8 = r(_p[":@"], s),
                _e8 = "?xml" === _f ? "" : u;
              var _n8 = _p[_f][0][s.textNodeName];
              _n8 = 0 !== _n8.length ? " " + _n8 : "", c += _e8 + "<".concat(_f).concat(_n8).concat(_t8, "?>"), l = !0;
              continue;
            }
            var _g2 = u;
            "" !== _g2 && (_g2 += s.indentBy);
            var _m = u + "<".concat(_f).concat(r(_p[":@"], s)),
              _y2 = e(_p[_f], s, _d, _g2);
            -1 !== s.unpairedTags.indexOf(_f) ? s.suppressUnpairedNode ? c += _m + ">" : c += _m + "/>" : _y2 && 0 !== _y2.length || !s.suppressEmptyNode ? _y2 && _y2.endsWith(">") ? c += _m + ">".concat(_y2).concat(u, "</").concat(_f, ">") : (c += _m + ">", _y2 && "" !== u && (_y2.includes("/>") || _y2.includes("</")) ? c += u + s.indentBy + _y2 + u : c += _y2, c += "</".concat(_f, ">")) : c += _m + "/>", l = !0;
          }
          return c;
        }
        function n(t) {
          var e = Object.keys(t);
          for (var _n9 = 0; _n9 < e.length; _n9++) {
            var _r8 = e[_n9];
            if (t.hasOwnProperty(_r8) && ":@" !== _r8) return _r8;
          }
        }
        function r(t, e) {
          var n = "";
          if (t && !e.ignoreAttributes) for (var _r9 in t) {
            if (!t.hasOwnProperty(_r9)) continue;
            var _o7 = e.attributeValueProcessor(_r9, t[_r9]);
            _o7 = i(_o7, e), !0 === _o7 && e.suppressBooleanAttributes ? n += " ".concat(_r9.substr(e.attributeNamePrefix.length)) : n += " ".concat(_r9.substr(e.attributeNamePrefix.length), "=\"").concat(_o7, "\"");
          }
          return n;
        }
        function o(t, e) {
          var n = (t = t.substr(0, t.length - e.textNodeName.length - 1)).substr(t.lastIndexOf(".") + 1);
          for (var _r0 in e.stopNodes) if (e.stopNodes[_r0] === t || e.stopNodes[_r0] === "*." + n) return !0;
          return !1;
        }
        function i(t, e) {
          if (t && t.length > 0 && e.processEntities) for (var _n0 = 0; _n0 < e.entities.length; _n0++) {
            var _r1 = e.entities[_n0];
            t = t.replace(_r1.regex, _r1.val);
          }
          return t;
        }
        t.exports = function (t, n) {
          var r = "";
          return n.format && n.indentBy.length > 0 && (r = "\n"), e(t, n, "", r);
        };
      },
      193: function _(t, e, n) {
        var r = n(705);
        function o(t, e) {
          var n = "";
          for (; e < t.length && "'" !== t[e] && '"' !== t[e]; e++) n += t[e];
          if (n = n.trim(), -1 !== n.indexOf(" ")) throw new Error("External entites are not supported");
          var r = t[e++];
          var o = "";
          for (; e < t.length && t[e] !== r; e++) o += t[e];
          return [n, o, e];
        }
        function i(t, e) {
          return "!" === t[e + 1] && "-" === t[e + 2] && "-" === t[e + 3];
        }
        function s(t, e) {
          return "!" === t[e + 1] && "E" === t[e + 2] && "N" === t[e + 3] && "T" === t[e + 4] && "I" === t[e + 5] && "T" === t[e + 6] && "Y" === t[e + 7];
        }
        function a(t, e) {
          return "!" === t[e + 1] && "E" === t[e + 2] && "L" === t[e + 3] && "E" === t[e + 4] && "M" === t[e + 5] && "E" === t[e + 6] && "N" === t[e + 7] && "T" === t[e + 8];
        }
        function u(t, e) {
          return "!" === t[e + 1] && "A" === t[e + 2] && "T" === t[e + 3] && "T" === t[e + 4] && "L" === t[e + 5] && "I" === t[e + 6] && "S" === t[e + 7] && "T" === t[e + 8];
        }
        function c(t, e) {
          return "!" === t[e + 1] && "N" === t[e + 2] && "O" === t[e + 3] && "T" === t[e + 4] && "A" === t[e + 5] && "T" === t[e + 6] && "I" === t[e + 7] && "O" === t[e + 8] && "N" === t[e + 9];
        }
        function l(t) {
          if (r.isName(t)) return t;
          throw new Error("Invalid entity name ".concat(t));
        }
        t.exports = function (t, e) {
          var n = {};
          if ("O" !== t[e + 3] || "C" !== t[e + 4] || "T" !== t[e + 5] || "Y" !== t[e + 6] || "P" !== t[e + 7] || "E" !== t[e + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
          {
            e += 9;
            var _r10 = 1,
              _h2 = !1,
              _p2 = !1,
              _f2 = "";
            for (; e < t.length; e++) if ("<" !== t[e] || _p2) {
              if (">" === t[e]) {
                if (_p2 ? "-" === t[e - 1] && "-" === t[e - 2] && (_p2 = !1, _r10--) : _r10--, 0 === _r10) break;
              } else "[" === t[e] ? _h2 = !0 : _f2 += t[e];
            } else {
              if (_h2 && s(t, e)) {
                var _o8, _o9;
                var _r11 = void 0,
                  _i5 = void 0;
                e += 7, _o8 = o(t, e + 1), _o9 = _slicedToArray(_o8, 3), _r11 = _o9[0], _i5 = _o9[1], e = _o9[2], -1 === _i5.indexOf("&") && (n[l(_r11)] = {
                  regx: RegExp("&".concat(_r11, ";"), "g"),
                  val: _i5
                });
              } else if (_h2 && a(t, e)) e += 8;else if (_h2 && u(t, e)) e += 8;else if (_h2 && c(t, e)) e += 9;else {
                if (!i) throw new Error("Invalid DOCTYPE");
                _p2 = !0;
              }
              _r10++, _f2 = "";
            }
            if (0 !== _r10) throw new Error("Unclosed DOCTYPE");
          }
          return {
            entities: n,
            i: e
          };
        };
      },
      63: function _(t, e) {
        var n = {
          preserveOrder: !1,
          attributeNamePrefix: "@_",
          attributesGroupName: !1,
          textNodeName: "#text",
          ignoreAttributes: !0,
          removeNSPrefix: !1,
          allowBooleanAttributes: !1,
          parseTagValue: !0,
          parseAttributeValue: !1,
          trimValues: !0,
          cdataPropName: !1,
          numberParseOptions: {
            hex: !0,
            leadingZeros: !0,
            eNotation: !0
          },
          tagValueProcessor: function tagValueProcessor(t, e) {
            return e;
          },
          attributeValueProcessor: function attributeValueProcessor(t, e) {
            return e;
          },
          stopNodes: [],
          alwaysCreateTextNode: !1,
          isArray: function isArray() {
            return !1;
          },
          commentPropName: !1,
          unpairedTags: [],
          processEntities: !0,
          htmlEntities: !1,
          ignoreDeclaration: !1,
          ignorePiTags: !1,
          transformTagName: !1,
          transformAttributeName: !1,
          updateTag: function updateTag(t, e, n) {
            return t;
          }
        };
        e.buildOptions = function (t) {
          return Object.assign({}, n, t);
        }, e.defaultOptions = n;
      },
      299: function _(t, e, n) {
        var r = n(705),
          o = n(365),
          i = n(193),
          s = n(494),
          a = n(118);
        function u(t) {
          var e = Object.keys(t);
          for (var _n1 = 0; _n1 < e.length; _n1++) {
            var _r12 = e[_n1];
            this.lastEntities[_r12] = {
              regex: new RegExp("&" + _r12 + ";", "g"),
              val: t[_r12]
            };
          }
        }
        function c(t, e, n, r, o, i, s) {
          if (void 0 !== t && (this.options.trimValues && !r && (t = t.trim()), t.length > 0)) {
            s || (t = this.replaceEntitiesValue(t));
            var _r13 = this.options.tagValueProcessor(e, t, n, o, i);
            return null == _r13 ? t : _typeof(_r13) != _typeof(t) || _r13 !== t ? _r13 : this.options.trimValues || t.trim() === t ? x(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
          }
        }
        function l(t) {
          if (this.options.removeNSPrefix) {
            var _e9 = t.split(":"),
              _n10 = "/" === t.charAt(0) ? "/" : "";
            if ("xmlns" === _e9[0]) return "";
            2 === _e9.length && (t = _n10 + _e9[1]);
          }
          return t;
        }
        var h = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
        function p(t, e, n) {
          if (!0 !== this.options.ignoreAttributes && "string" == typeof t) {
            var _n11 = r.getAllMatches(t, h),
              _o0 = _n11.length,
              _i6 = {};
            for (var _t9 = 0; _t9 < _o0; _t9++) {
              var _r14 = this.resolveNameSpace(_n11[_t9][1]);
              if (this.ignoreAttributesFn(_r14, e)) continue;
              var _o1 = _n11[_t9][4],
                _s2 = this.options.attributeNamePrefix + _r14;
              if (_r14.length) if (this.options.transformAttributeName && (_s2 = this.options.transformAttributeName(_s2)), "__proto__" === _s2 && (_s2 = "#__proto__"), void 0 !== _o1) {
                this.options.trimValues && (_o1 = _o1.trim()), _o1 = this.replaceEntitiesValue(_o1);
                var _t0 = this.options.attributeValueProcessor(_r14, _o1, e);
                _i6[_s2] = null == _t0 ? _o1 : _typeof(_t0) != _typeof(_o1) || _t0 !== _o1 ? _t0 : x(_o1, this.options.parseAttributeValue, this.options.numberParseOptions);
              } else this.options.allowBooleanAttributes && (_i6[_s2] = !0);
            }
            if (!Object.keys(_i6).length) return;
            if (this.options.attributesGroupName) {
              var _t1 = {};
              return _t1[this.options.attributesGroupName] = _i6, _t1;
            }
            return _i6;
          }
        }
        var f = function f(t) {
          t = t.replace(/\r\n?/g, "\n");
          var e = new o("!xml");
          var n = e,
            r = "",
            s = "";
          for (var _a2 = 0; _a2 < t.length; _a2++) if ("<" === t[_a2]) {
            if ("/" === t[_a2 + 1]) {
              var _e0 = v(t, ">", _a2, "Closing Tag is not closed.");
              var _o10 = t.substring(_a2 + 2, _e0).trim();
              if (this.options.removeNSPrefix) {
                var _t10 = _o10.indexOf(":");
                -1 !== _t10 && (_o10 = _o10.substr(_t10 + 1));
              }
              this.options.transformTagName && (_o10 = this.options.transformTagName(_o10)), n && (r = this.saveTextToParentTag(r, n, s));
              var _i7 = s.substring(s.lastIndexOf(".") + 1);
              if (_o10 && -1 !== this.options.unpairedTags.indexOf(_o10)) throw new Error("Unpaired tag can not be used as closing tag: </".concat(_o10, ">"));
              var _u2 = 0;
              _i7 && -1 !== this.options.unpairedTags.indexOf(_i7) ? (_u2 = s.lastIndexOf(".", s.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : _u2 = s.lastIndexOf("."), s = s.substring(0, _u2), n = this.tagsNodeStack.pop(), r = "", _a2 = _e0;
            } else if ("?" === t[_a2 + 1]) {
              var _e1 = b(t, _a2, !1, "?>");
              if (!_e1) throw new Error("Pi Tag is not closed.");
              if (r = this.saveTextToParentTag(r, n, s), this.options.ignoreDeclaration && "?xml" === _e1.tagName || this.options.ignorePiTags) ;else {
                var _t11 = new o(_e1.tagName);
                _t11.add(this.options.textNodeName, ""), _e1.tagName !== _e1.tagExp && _e1.attrExpPresent && (_t11[":@"] = this.buildAttributesMap(_e1.tagExp, s, _e1.tagName)), this.addChild(n, _t11, s);
              }
              _a2 = _e1.closeIndex + 1;
            } else if ("!--" === t.substr(_a2 + 1, 3)) {
              var _e10 = v(t, "--\x3e", _a2 + 4, "Comment is not closed.");
              if (this.options.commentPropName) {
                var _o11 = t.substring(_a2 + 4, _e10 - 2);
                r = this.saveTextToParentTag(r, n, s), n.add(this.options.commentPropName, [_defineProperty({}, this.options.textNodeName, _o11)]);
              }
              _a2 = _e10;
            } else if ("!D" === t.substr(_a2 + 1, 2)) {
              var _e11 = i(t, _a2);
              this.docTypeEntities = _e11.entities, _a2 = _e11.i;
            } else if ("![" === t.substr(_a2 + 1, 2)) {
              var _e12 = v(t, "]]>", _a2, "CDATA is not closed.") - 2,
                _o12 = t.substring(_a2 + 9, _e12);
              r = this.saveTextToParentTag(r, n, s);
              var _i8 = this.parseTextData(_o12, n.tagname, s, !0, !1, !0, !0);
              null == _i8 && (_i8 = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [_defineProperty({}, this.options.textNodeName, _o12)]) : n.add(this.options.textNodeName, _i8), _a2 = _e12 + 2;
            } else {
              var _i9 = b(t, _a2, this.options.removeNSPrefix),
                _u3 = _i9.tagName;
              var _c = _i9.rawTagName;
              var _l = _i9.tagExp,
                _h3 = _i9.attrExpPresent,
                _p3 = _i9.closeIndex;
              this.options.transformTagName && (_u3 = this.options.transformTagName(_u3)), n && r && "!xml" !== n.tagname && (r = this.saveTextToParentTag(r, n, s, !1));
              var _f3 = n;
              if (_f3 && -1 !== this.options.unpairedTags.indexOf(_f3.tagname) && (n = this.tagsNodeStack.pop(), s = s.substring(0, s.lastIndexOf("."))), _u3 !== e.tagname && (s += s ? "." + _u3 : _u3), this.isItStopNode(this.options.stopNodes, s, _u3)) {
                var _e13 = "";
                if (_l.length > 0 && _l.lastIndexOf("/") === _l.length - 1) "/" === _u3[_u3.length - 1] ? (_u3 = _u3.substr(0, _u3.length - 1), s = s.substr(0, s.length - 1), _l = _u3) : _l = _l.substr(0, _l.length - 1), _a2 = _i9.closeIndex;else if (-1 !== this.options.unpairedTags.indexOf(_u3)) _a2 = _i9.closeIndex;else {
                  var _n12 = this.readStopNodeData(t, _c, _p3 + 1);
                  if (!_n12) throw new Error("Unexpected end of ".concat(_c));
                  _a2 = _n12.i, _e13 = _n12.tagContent;
                }
                var _r15 = new o(_u3);
                _u3 !== _l && _h3 && (_r15[":@"] = this.buildAttributesMap(_l, s, _u3)), _e13 && (_e13 = this.parseTextData(_e13, _u3, s, !0, _h3, !0, !0)), s = s.substr(0, s.lastIndexOf(".")), _r15.add(this.options.textNodeName, _e13), this.addChild(n, _r15, s);
              } else {
                if (_l.length > 0 && _l.lastIndexOf("/") === _l.length - 1) {
                  "/" === _u3[_u3.length - 1] ? (_u3 = _u3.substr(0, _u3.length - 1), s = s.substr(0, s.length - 1), _l = _u3) : _l = _l.substr(0, _l.length - 1), this.options.transformTagName && (_u3 = this.options.transformTagName(_u3));
                  var _t12 = new o(_u3);
                  _u3 !== _l && _h3 && (_t12[":@"] = this.buildAttributesMap(_l, s, _u3)), this.addChild(n, _t12, s), s = s.substr(0, s.lastIndexOf("."));
                } else {
                  var _t13 = new o(_u3);
                  this.tagsNodeStack.push(n), _u3 !== _l && _h3 && (_t13[":@"] = this.buildAttributesMap(_l, s, _u3)), this.addChild(n, _t13, s), n = _t13;
                }
                r = "", _a2 = _p3;
              }
            }
          } else r += t[_a2];
          return e.child;
        };
        function d(t, e, n) {
          var r = this.options.updateTag(e.tagname, n, e[":@"]);
          !1 === r || ("string" == typeof r ? (e.tagname = r, t.addChild(e)) : t.addChild(e));
        }
        var g = function g(t) {
          if (this.options.processEntities) {
            for (var _e14 in this.docTypeEntities) {
              var _n13 = this.docTypeEntities[_e14];
              t = t.replace(_n13.regx, _n13.val);
            }
            for (var _e15 in this.lastEntities) {
              var _n14 = this.lastEntities[_e15];
              t = t.replace(_n14.regex, _n14.val);
            }
            if (this.options.htmlEntities) for (var _e16 in this.htmlEntities) {
              var _n15 = this.htmlEntities[_e16];
              t = t.replace(_n15.regex, _n15.val);
            }
            t = t.replace(this.ampEntity.regex, this.ampEntity.val);
          }
          return t;
        };
        function m(t, e, n, r) {
          return t && (void 0 === r && (r = 0 === Object.keys(e.child).length), void 0 !== (t = this.parseTextData(t, e.tagname, n, !1, !!e[":@"] && 0 !== Object.keys(e[":@"]).length, r)) && "" !== t && e.add(this.options.textNodeName, t), t = ""), t;
        }
        function y(t, e, n) {
          var r = "*." + n;
          for (var _n16 in t) {
            var _o13 = t[_n16];
            if (r === _o13 || e === _o13) return !0;
          }
          return !1;
        }
        function v(t, e, n, r) {
          var o = t.indexOf(e, n);
          if (-1 === o) throw new Error(r);
          return o + e.length - 1;
        }
        function b(t, e, n) {
          var r = function (t, e) {
            var n,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ">",
              o = "";
            for (var _i0 = e; _i0 < t.length; _i0++) {
              var _e17 = t[_i0];
              if (n) _e17 === n && (n = "");else if ('"' === _e17 || "'" === _e17) n = _e17;else if (_e17 === r[0]) {
                if (!r[1]) return {
                  data: o,
                  index: _i0
                };
                if (t[_i0 + 1] === r[1]) return {
                  data: o,
                  index: _i0
                };
              } else "\t" === _e17 && (_e17 = " ");
              o += _e17;
            }
          }(t, e + 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ">");
          if (!r) return;
          var o = r.data;
          var i = r.index,
            s = o.search(/\s/);
          var a = o,
            u = !0;
          -1 !== s && (a = o.substring(0, s), o = o.substring(s + 1).trimStart());
          var c = a;
          if (n) {
            var _t14 = a.indexOf(":");
            -1 !== _t14 && (a = a.substr(_t14 + 1), u = a !== r.data.substr(_t14 + 1));
          }
          return {
            tagName: a,
            tagExp: o,
            closeIndex: i,
            attrExpPresent: u,
            rawTagName: c
          };
        }
        function w(t, e, n) {
          var r = n;
          var o = 1;
          for (; n < t.length; n++) if ("<" === t[n]) if ("/" === t[n + 1]) {
            var _i1 = v(t, ">", n, "".concat(e, " is not closed"));
            if (t.substring(n + 2, _i1).trim() === e && (o--, 0 === o)) return {
              tagContent: t.substring(r, n),
              i: _i1
            };
            n = _i1;
          } else if ("?" === t[n + 1]) n = v(t, "?>", n + 1, "StopNode is not closed.");else if ("!--" === t.substr(n + 1, 3)) n = v(t, "--\x3e", n + 3, "StopNode is not closed.");else if ("![" === t.substr(n + 1, 2)) n = v(t, "]]>", n, "StopNode is not closed.") - 2;else {
            var _r16 = b(t, n, ">");
            _r16 && ((_r16 && _r16.tagName) === e && "/" !== _r16.tagExp[_r16.tagExp.length - 1] && o++, n = _r16.closeIndex);
          }
        }
        function x(t, e, n) {
          if (e && "string" == typeof t) {
            var _e18 = t.trim();
            return "true" === _e18 || "false" !== _e18 && s(t, n);
          }
          return r.isExist(t) ? t : "";
        }
        t.exports = /*#__PURE__*/_createClass(function _class(t) {
          _classCallCheck(this, _class);
          this.options = t, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
            apos: {
              regex: /&(apos|#39|#x27);/g,
              val: "'"
            },
            gt: {
              regex: /&(gt|#62|#x3E);/g,
              val: ">"
            },
            lt: {
              regex: /&(lt|#60|#x3C);/g,
              val: "<"
            },
            quot: {
              regex: /&(quot|#34|#x22);/g,
              val: '"'
            }
          }, this.ampEntity = {
            regex: /&(amp|#38|#x26);/g,
            val: "&"
          }, this.htmlEntities = {
            space: {
              regex: /&(nbsp|#160);/g,
              val: " "
            },
            cent: {
              regex: /&(cent|#162);/g,
              val: "¢"
            },
            pound: {
              regex: /&(pound|#163);/g,
              val: "£"
            },
            yen: {
              regex: /&(yen|#165);/g,
              val: "¥"
            },
            euro: {
              regex: /&(euro|#8364);/g,
              val: "€"
            },
            copyright: {
              regex: /&(copy|#169);/g,
              val: "©"
            },
            reg: {
              regex: /&(reg|#174);/g,
              val: "®"
            },
            inr: {
              regex: /&(inr|#8377);/g,
              val: "₹"
            },
            num_dec: {
              regex: /&#([0-9]{1,7});/g,
              val: function val(t, e) {
                return String.fromCharCode(Number.parseInt(e, 10));
              }
            },
            num_hex: {
              regex: /&#x([0-9a-fA-F]{1,6});/g,
              val: function val(t, e) {
                return String.fromCharCode(Number.parseInt(e, 16));
              }
            }
          }, this.addExternalEntities = u, this.parseXml = f, this.parseTextData = c, this.resolveNameSpace = l, this.buildAttributesMap = p, this.isItStopNode = y, this.replaceEntitiesValue = g, this.readStopNodeData = w, this.saveTextToParentTag = m, this.addChild = d, this.ignoreAttributesFn = a(this.options.ignoreAttributes);
        });
      },
      338: function _(t, e, n) {
        var _n17 = n(63),
          r = _n17.buildOptions,
          o = n(299),
          _n18 = n(728),
          i = _n18.prettify,
          s = n(31);
        t.exports = /*#__PURE__*/function () {
          function _class2(t) {
            _classCallCheck(this, _class2);
            this.externalEntities = {}, this.options = r(t);
          }
          return _createClass(_class2, [{
            key: "parse",
            value: function parse(t, e) {
              if ("string" == typeof t) ;else {
                if (!t.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
                t = t.toString();
              }
              if (e) {
                !0 === e && (e = {});
                var _n19 = s.validate(t, e);
                if (!0 !== _n19) throw Error("".concat(_n19.err.msg, ":").concat(_n19.err.line, ":").concat(_n19.err.col));
              }
              var n = new o(this.options);
              n.addExternalEntities(this.externalEntities);
              var r = n.parseXml(t);
              return this.options.preserveOrder || void 0 === r ? r : i(r, this.options);
            }
          }, {
            key: "addEntity",
            value: function addEntity(t, e) {
              if (-1 !== e.indexOf("&")) throw new Error("Entity value can't have '&'");
              if (-1 !== t.indexOf("&") || -1 !== t.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
              if ("&" === e) throw new Error("An entity with value '&' is not permitted");
              this.externalEntities[t] = e;
            }
          }]);
        }();
      },
      728: function _(t, e) {
        function n(t, e, s) {
          var a;
          var u = {};
          for (var _c2 = 0; _c2 < t.length; _c2++) {
            var _l2 = t[_c2],
              _h4 = r(_l2);
            var _p4 = "";
            if (_p4 = void 0 === s ? _h4 : s + "." + _h4, _h4 === e.textNodeName) void 0 === a ? a = _l2[_h4] : a += "" + _l2[_h4];else {
              if (void 0 === _h4) continue;
              if (_l2[_h4]) {
                var _t15 = n(_l2[_h4], e, _p4);
                var _r17 = i(_t15, e);
                _l2[":@"] ? o(_t15, _l2[":@"], _p4, e) : 1 !== Object.keys(_t15).length || void 0 === _t15[e.textNodeName] || e.alwaysCreateTextNode ? 0 === Object.keys(_t15).length && (e.alwaysCreateTextNode ? _t15[e.textNodeName] = "" : _t15 = "") : _t15 = _t15[e.textNodeName], void 0 !== u[_h4] && u.hasOwnProperty(_h4) ? (Array.isArray(u[_h4]) || (u[_h4] = [u[_h4]]), u[_h4].push(_t15)) : e.isArray(_h4, _p4, _r17) ? u[_h4] = [_t15] : u[_h4] = _t15;
              }
            }
          }
          return "string" == typeof a ? a.length > 0 && (u[e.textNodeName] = a) : void 0 !== a && (u[e.textNodeName] = a), u;
        }
        function r(t) {
          var e = Object.keys(t);
          for (var _t16 = 0; _t16 < e.length; _t16++) {
            var _n20 = e[_t16];
            if (":@" !== _n20) return _n20;
          }
        }
        function o(t, e, n, r) {
          if (e) {
            var _o14 = Object.keys(e),
              _i10 = _o14.length;
            for (var _s3 = 0; _s3 < _i10; _s3++) {
              var _i11 = _o14[_s3];
              r.isArray(_i11, n + "." + _i11, !0, !0) ? t[_i11] = [e[_i11]] : t[_i11] = e[_i11];
            }
          }
        }
        function i(t, e) {
          var n = e.textNodeName,
            r = Object.keys(t).length;
          return 0 === r || !(1 !== r || !t[n] && "boolean" != typeof t[n] && 0 !== t[n]);
        }
        e.prettify = function (t, e) {
          return n(t, e);
        };
      },
      365: function _(t) {
        t.exports = /*#__PURE__*/function () {
          function _class3(t) {
            _classCallCheck(this, _class3);
            this.tagname = t, this.child = [], this[":@"] = {};
          }
          return _createClass(_class3, [{
            key: "add",
            value: function add(t, e) {
              "__proto__" === t && (t = "#__proto__"), this.child.push(_defineProperty({}, t, e));
            }
          }, {
            key: "addChild",
            value: function addChild(t) {
              "__proto__" === t.tagname && (t.tagname = "#__proto__"), t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push(_defineProperty(_defineProperty({}, t.tagname, t.child), ":@", t[":@"])) : this.child.push(_defineProperty({}, t.tagname, t.child));
            }
          }]);
        }();
      },
      135: function _(t) {
        function e(t) {
          return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
        }
        t.exports = function (t) {
          return null != t && (e(t) || function (t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && e(t.slice(0, 0));
          }(t) || !!t._isBuffer);
        };
      },
      542: function _(t, e, n) {
        !function () {
          var e = n(298),
            r = n(526).utf8,
            o = n(135),
            i = n(526).bin,
            _s4 = function s(t, n) {
              t.constructor == String ? t = n && "binary" === n.encoding ? i.stringToBytes(t) : r.stringToBytes(t) : o(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
              for (var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, h = -1732584194, p = 271733878, f = 0; f < a.length; f++) a[f] = 16711935 & (a[f] << 8 | a[f] >>> 24) | 4278255360 & (a[f] << 24 | a[f] >>> 8);
              a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;
              var d = _s4._ff,
                g = _s4._gg,
                m = _s4._hh,
                y = _s4._ii;
              for (f = 0; f < a.length; f += 16) {
                var v = c,
                  b = l,
                  w = h,
                  x = p;
                c = d(c, l, h, p, a[f + 0], 7, -680876936), p = d(p, c, l, h, a[f + 1], 12, -389564586), h = d(h, p, c, l, a[f + 2], 17, 606105819), l = d(l, h, p, c, a[f + 3], 22, -1044525330), c = d(c, l, h, p, a[f + 4], 7, -176418897), p = d(p, c, l, h, a[f + 5], 12, 1200080426), h = d(h, p, c, l, a[f + 6], 17, -1473231341), l = d(l, h, p, c, a[f + 7], 22, -45705983), c = d(c, l, h, p, a[f + 8], 7, 1770035416), p = d(p, c, l, h, a[f + 9], 12, -1958414417), h = d(h, p, c, l, a[f + 10], 17, -42063), l = d(l, h, p, c, a[f + 11], 22, -1990404162), c = d(c, l, h, p, a[f + 12], 7, 1804603682), p = d(p, c, l, h, a[f + 13], 12, -40341101), h = d(h, p, c, l, a[f + 14], 17, -1502002290), c = g(c, l = d(l, h, p, c, a[f + 15], 22, 1236535329), h, p, a[f + 1], 5, -165796510), p = g(p, c, l, h, a[f + 6], 9, -1069501632), h = g(h, p, c, l, a[f + 11], 14, 643717713), l = g(l, h, p, c, a[f + 0], 20, -373897302), c = g(c, l, h, p, a[f + 5], 5, -701558691), p = g(p, c, l, h, a[f + 10], 9, 38016083), h = g(h, p, c, l, a[f + 15], 14, -660478335), l = g(l, h, p, c, a[f + 4], 20, -405537848), c = g(c, l, h, p, a[f + 9], 5, 568446438), p = g(p, c, l, h, a[f + 14], 9, -1019803690), h = g(h, p, c, l, a[f + 3], 14, -187363961), l = g(l, h, p, c, a[f + 8], 20, 1163531501), c = g(c, l, h, p, a[f + 13], 5, -1444681467), p = g(p, c, l, h, a[f + 2], 9, -51403784), h = g(h, p, c, l, a[f + 7], 14, 1735328473), c = m(c, l = g(l, h, p, c, a[f + 12], 20, -1926607734), h, p, a[f + 5], 4, -378558), p = m(p, c, l, h, a[f + 8], 11, -2022574463), h = m(h, p, c, l, a[f + 11], 16, 1839030562), l = m(l, h, p, c, a[f + 14], 23, -35309556), c = m(c, l, h, p, a[f + 1], 4, -1530992060), p = m(p, c, l, h, a[f + 4], 11, 1272893353), h = m(h, p, c, l, a[f + 7], 16, -155497632), l = m(l, h, p, c, a[f + 10], 23, -1094730640), c = m(c, l, h, p, a[f + 13], 4, 681279174), p = m(p, c, l, h, a[f + 0], 11, -358537222), h = m(h, p, c, l, a[f + 3], 16, -722521979), l = m(l, h, p, c, a[f + 6], 23, 76029189), c = m(c, l, h, p, a[f + 9], 4, -640364487), p = m(p, c, l, h, a[f + 12], 11, -421815835), h = m(h, p, c, l, a[f + 15], 16, 530742520), c = y(c, l = m(l, h, p, c, a[f + 2], 23, -995338651), h, p, a[f + 0], 6, -198630844), p = y(p, c, l, h, a[f + 7], 10, 1126891415), h = y(h, p, c, l, a[f + 14], 15, -1416354905), l = y(l, h, p, c, a[f + 5], 21, -57434055), c = y(c, l, h, p, a[f + 12], 6, 1700485571), p = y(p, c, l, h, a[f + 3], 10, -1894986606), h = y(h, p, c, l, a[f + 10], 15, -1051523), l = y(l, h, p, c, a[f + 1], 21, -2054922799), c = y(c, l, h, p, a[f + 8], 6, 1873313359), p = y(p, c, l, h, a[f + 15], 10, -30611744), h = y(h, p, c, l, a[f + 6], 15, -1560198380), l = y(l, h, p, c, a[f + 13], 21, 1309151649), c = y(c, l, h, p, a[f + 4], 6, -145523070), p = y(p, c, l, h, a[f + 11], 10, -1120210379), h = y(h, p, c, l, a[f + 2], 15, 718787259), l = y(l, h, p, c, a[f + 9], 21, -343485551), c = c + v >>> 0, l = l + b >>> 0, h = h + w >>> 0, p = p + x >>> 0;
              }
              return e.endian([c, l, h, p]);
            };
          _s4._ff = function (t, e, n, r, o, i, s) {
            var a = t + (e & n | ~e & r) + (o >>> 0) + s;
            return (a << i | a >>> 32 - i) + e;
          }, _s4._gg = function (t, e, n, r, o, i, s) {
            var a = t + (e & r | n & ~r) + (o >>> 0) + s;
            return (a << i | a >>> 32 - i) + e;
          }, _s4._hh = function (t, e, n, r, o, i, s) {
            var a = t + (e ^ n ^ r) + (o >>> 0) + s;
            return (a << i | a >>> 32 - i) + e;
          }, _s4._ii = function (t, e, n, r, o, i, s) {
            var a = t + (n ^ (e | ~r)) + (o >>> 0) + s;
            return (a << i | a >>> 32 - i) + e;
          }, _s4._blocksize = 16, _s4._digestsize = 16, t.exports = function (t, n) {
            if (null == t) throw new Error("Illegal argument " + t);
            var r = e.wordsToBytes(_s4(t, n));
            return n && n.asBytes ? r : n && n.asString ? i.bytesToString(r) : e.bytesToHex(r);
          };
        }();
      },
      285: function _(t, e, n) {
        var r = n(2);
        t.exports = function (t) {
          return t ? ("{}" === t.substr(0, 2) && (t = "\\{\\}" + t.substr(2)), m(function (t) {
            return t.split("\\\\").join(o).split("\\{").join(i).split("\\}").join(s).split("\\,").join(a).split("\\.").join(u);
          }(t), !0).map(l)) : [];
        };
        var o = "\0SLASH" + Math.random() + "\0",
          i = "\0OPEN" + Math.random() + "\0",
          s = "\0CLOSE" + Math.random() + "\0",
          a = "\0COMMA" + Math.random() + "\0",
          u = "\0PERIOD" + Math.random() + "\0";
        function c(t) {
          return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
        }
        function l(t) {
          return t.split(o).join("\\").split(i).join("{").split(s).join("}").split(a).join(",").split(u).join(".");
        }
        function h(t) {
          if (!t) return [""];
          var e = [],
            n = r("{", "}", t);
          if (!n) return t.split(",");
          var o = n.pre,
            i = n.body,
            s = n.post,
            a = o.split(",");
          a[a.length - 1] += "{" + i + "}";
          var u = h(s);
          return s.length && (a[a.length - 1] += u.shift(), a.push.apply(a, u)), e.push.apply(e, a), e;
        }
        function p(t) {
          return "{" + t + "}";
        }
        function f(t) {
          return /^-?0\d/.test(t);
        }
        function d(t, e) {
          return t <= e;
        }
        function g(t, e) {
          return t >= e;
        }
        function m(t, e) {
          var n = [],
            o = r("{", "}", t);
          if (!o) return [t];
          var i = o.pre,
            a = o.post.length ? m(o.post, !1) : [""];
          if (/\$$/.test(o.pre)) for (var u = 0; u < a.length; u++) {
            var l = i + "{" + o.body + "}" + a[u];
            n.push(l);
          } else {
            var y,
              v,
              b = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body),
              w = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body),
              x = b || w,
              N = o.body.indexOf(",") >= 0;
            if (!x && !N) return o.post.match(/,.*\}/) ? m(t = o.pre + "{" + o.body + s + o.post) : [t];
            if (x) y = o.body.split(/\.\./);else if (1 === (y = h(o.body)).length && 1 === (y = m(y[0], !1).map(p)).length) return a.map(function (t) {
              return o.pre + y[0] + t;
            });
            if (x) {
              var A = c(y[0]),
                P = c(y[1]),
                O = Math.max(y[0].length, y[1].length),
                E = 3 == y.length ? Math.abs(c(y[2])) : 1,
                T = d;
              P < A && (E *= -1, T = g);
              var j = y.some(f);
              v = [];
              for (var S = A; T(S, P); S += E) {
                var $;
                if (w) "\\" === ($ = String.fromCharCode(S)) && ($ = "");else if ($ = String(S), j) {
                  var C = O - $.length;
                  if (C > 0) {
                    var I = new Array(C + 1).join("0");
                    $ = S < 0 ? "-" + I + $.slice(1) : I + $;
                  }
                }
                v.push($);
              }
            } else {
              v = [];
              for (var k = 0; k < y.length; k++) v.push.apply(v, m(y[k], !1));
            }
            for (k = 0; k < v.length; k++) for (u = 0; u < a.length; u++) l = i + v[k] + a[u], (!e || x || l) && n.push(l);
          }
          return n;
        }
      },
      829: function _(t) {
        function e(t) {
          return e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
            return _typeof(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
          }, e(t);
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return n = function n(t) {
            if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
            var n;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, s);
            }
            function s() {
              return r(t, arguments, i(this).constructor);
            }
            return s.prototype = Object.create(t.prototype, {
              constructor: {
                value: s,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), o(s, t);
          }, n(t);
        }
        function r(t, e, n) {
          return r = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          }() ? Reflect.construct : function (t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var i = new (Function.bind.apply(t, r))();
            return n && o(i, n.prototype), i;
          }, r.apply(null, arguments);
        }
        function o(t, e) {
          return o = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t;
          }, o(t, e);
        }
        function i(t) {
          return i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }, i(t);
        }
        var s = function (t) {
          function n(t) {
            var r;
            return function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, n), (r = function (t, n) {
              return !n || "object" !== e(n) && "function" != typeof n ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
              }(t) : n;
            }(this, i(n).call(this, t))).name = "ObjectPrototypeMutationError", r;
          }
          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), e && o(t, e);
          }(n, t), n;
        }(n(Error));
        function a(t, n) {
          for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {}, o = n.split("."), i = o.length, s = function s(e) {
              var n = o[e];
              if (!t) return {
                v: void 0
              };
              if ("+" === n) {
                if (Array.isArray(t)) return {
                  v: t.map(function (n, i) {
                    var s = o.slice(e + 1);
                    return s.length > 0 ? a(n, s.join("."), r) : r(t, i, o, e);
                  })
                };
                var i = o.slice(0, e).join(".");
                throw new Error("Object at wildcard (".concat(i, ") is not an array"));
              }
              t = r(t, n, o, e);
            }, u = 0; u < i; u++) {
            var c = s(u);
            if ("object" === e(c)) return c.v;
          }
          return t;
        }
        function u(t, e) {
          return t.length === e + 1;
        }
        t.exports = {
          set: function set(t, n, r) {
            if ("object" != e(t) || null === t) return t;
            if (void 0 === n) return t;
            if ("number" == typeof n) return t[n] = r, t[n];
            try {
              return a(t, n, function (t, e, n, o) {
                if (t === Reflect.getPrototypeOf({})) throw new s("Attempting to mutate Object.prototype");
                if (!t[e]) {
                  var i = Number.isInteger(Number(n[o + 1])),
                    a = "+" === n[o + 1];
                  t[e] = i || a ? [] : {};
                }
                return u(n, o) && (t[e] = r), t[e];
              });
            } catch (e) {
              if (e instanceof s) throw e;
              return t;
            }
          },
          get: function get(t, n) {
            if ("object" != e(t) || null === t) return t;
            if (void 0 === n) return t;
            if ("number" == typeof n) return t[n];
            try {
              return a(t, n, function (t, e) {
                return t[e];
              });
            } catch (e) {
              return t;
            }
          },
          has: function has(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("object" != e(t) || null === t) return !1;
            if (void 0 === n) return !1;
            if ("number" == typeof n) return n in t;
            try {
              var o = !1;
              return a(t, n, function (t, e, n, i) {
                if (!u(n, i)) return t && t[e];
                o = r.own ? t.hasOwnProperty(e) : e in t;
              }), o;
            } catch (t) {
              return !1;
            }
          },
          hasOwn: function hasOwn(t, e, n) {
            return this.has(t, e, n || {
              own: !0
            });
          },
          isIn: function isIn(t, n, r) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if ("object" != e(t) || null === t) return !1;
            if (void 0 === n) return !1;
            try {
              var i = !1,
                s = !1;
              return a(t, n, function (t, n, o, a) {
                return i = i || t === r || !!t && t[n] === r, s = u(o, a) && "object" === e(t) && n in t, t && t[n];
              }), o.validPath ? i && s : i;
            } catch (t) {
              return !1;
            }
          },
          ObjectPrototypeMutationError: s
        };
      },
      47: function _(t, e, n) {
        var r = n(410),
          o = function o(t) {
            return "string" == typeof t;
          };
        function i(t, e) {
          for (var n = [], r = 0; r < t.length; r++) {
            var o = t[r];
            o && "." !== o && (".." === o ? n.length && ".." !== n[n.length - 1] ? n.pop() : e && n.push("..") : n.push(o));
          }
          return n;
        }
        var s = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
          a = {};
        function u(t) {
          return s.exec(t).slice(1);
        }
        a.resolve = function () {
          for (var t = "", e = !1, n = arguments.length - 1; n >= -1 && !e; n--) {
            var r = n >= 0 ? arguments[n] : process.cwd();
            if (!o(r)) throw new TypeError("Arguments to path.resolve must be strings");
            r && (t = r + "/" + t, e = "/" === r.charAt(0));
          }
          return (e ? "/" : "") + (t = i(t.split("/"), !e).join("/")) || ".";
        }, a.normalize = function (t) {
          var e = a.isAbsolute(t),
            n = "/" === t.substr(-1);
          return (t = i(t.split("/"), !e).join("/")) || e || (t = "."), t && n && (t += "/"), (e ? "/" : "") + t;
        }, a.isAbsolute = function (t) {
          return "/" === t.charAt(0);
        }, a.join = function () {
          for (var t = "", e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            if (!o(n)) throw new TypeError("Arguments to path.join must be strings");
            n && (t += t ? "/" + n : n);
          }
          return a.normalize(t);
        }, a.relative = function (t, e) {
          function n(t) {
            for (var e = 0; e < t.length && "" === t[e]; e++);
            for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
            return e > n ? [] : t.slice(e, n + 1);
          }
          t = a.resolve(t).substr(1), e = a.resolve(e).substr(1);
          for (var r = n(t.split("/")), o = n(e.split("/")), i = Math.min(r.length, o.length), s = i, u = 0; u < i; u++) if (r[u] !== o[u]) {
            s = u;
            break;
          }
          var c = [];
          for (u = s; u < r.length; u++) c.push("..");
          return (c = c.concat(o.slice(s))).join("/");
        }, a._makeLong = function (t) {
          return t;
        }, a.dirname = function (t) {
          var e = u(t),
            n = e[0],
            r = e[1];
          return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
        }, a.basename = function (t, e) {
          var n = u(t)[2];
          return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n;
        }, a.extname = function (t) {
          return u(t)[3];
        }, a.format = function (t) {
          if (!r.isObject(t)) throw new TypeError("Parameter 'pathObject' must be an object, not " + _typeof(t));
          var e = t.root || "";
          if (!o(e)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + _typeof(t.root));
          return (t.dir ? t.dir + a.sep : "") + (t.base || "");
        }, a.parse = function (t) {
          if (!o(t)) throw new TypeError("Parameter 'pathString' must be a string, not " + _typeof(t));
          var e = u(t);
          if (!e || 4 !== e.length) throw new TypeError("Invalid path '" + t + "'");
          return e[1] = e[1] || "", e[2] = e[2] || "", e[3] = e[3] || "", {
            root: e[0],
            dir: e[0] + e[1].slice(0, e[1].length - 1),
            base: e[2],
            ext: e[3],
            name: e[2].slice(0, e[2].length - e[3].length)
          };
        }, a.sep = "/", a.delimiter = ":", t.exports = a;
      },
      647: function _(t, e) {
        var n = Object.prototype.hasOwnProperty;
        function r(t) {
          try {
            return decodeURIComponent(t.replace(/\+/g, " "));
          } catch (t) {
            return null;
          }
        }
        function o(t) {
          try {
            return encodeURIComponent(t);
          } catch (t) {
            return null;
          }
        }
        e.stringify = function (t, e) {
          e = e || "";
          var r,
            i,
            s = [];
          for (i in "string" != typeof e && (e = "?"), t) if (n.call(t, i)) {
            if ((r = t[i]) || null != r && !isNaN(r) || (r = ""), i = o(i), r = o(r), null === i || null === r) continue;
            s.push(i + "=" + r);
          }
          return s.length ? e + s.join("&") : "";
        }, e.parse = function (t) {
          for (var e, n = /([^=?#&]+)=?([^&]*)/g, o = {}; e = n.exec(t);) {
            var i = r(e[1]),
              s = r(e[2]);
            null === i || null === s || i in o || (o[i] = s);
          }
          return o;
        };
      },
      670: function _(t) {
        t.exports = function (t, e) {
          if (e = e.split(":")[0], !(t = +t)) return !1;
          switch (e) {
            case "http":
            case "ws":
              return 80 !== t;
            case "https":
            case "wss":
              return 443 !== t;
            case "ftp":
              return 21 !== t;
            case "gopher":
              return 70 !== t;
            case "file":
              return !1;
          }
          return 0 !== t;
        };
      },
      494: function _(t) {
        var e = /^[-+]?0x[a-fA-F0-9]+$/,
          n = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
        !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
        var r = {
          hex: !0,
          leadingZeros: !0,
          decimalPoint: ".",
          eNotation: !0
        };
        t.exports = function (t) {
          var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (o = Object.assign({}, r, o), !t || "string" != typeof t) return t;
          var i = t.trim();
          if (void 0 !== o.skipLike && o.skipLike.test(i)) return t;
          if (o.hex && e.test(i)) return Number.parseInt(i, 16);
          {
            var _e19 = n.exec(i);
            if (_e19) {
              var _n21 = _e19[1],
                _r18 = _e19[2];
              var _a3 = (s = _e19[3]) && -1 !== s.indexOf(".") ? ("." === (s = s.replace(/0+$/, "")) ? s = "0" : "." === s[0] ? s = "0" + s : "." === s[s.length - 1] && (s = s.substr(0, s.length - 1)), s) : s;
              var _u4 = _e19[4] || _e19[6];
              if (!o.leadingZeros && _r18.length > 0 && _n21 && "." !== i[2]) return t;
              if (!o.leadingZeros && _r18.length > 0 && !_n21 && "." !== i[1]) return t;
              {
                var _e20 = Number(i),
                  _s5 = "" + _e20;
                return -1 !== _s5.search(/[eE]/) || _u4 ? o.eNotation ? _e20 : t : -1 !== i.indexOf(".") ? "0" === _s5 && "" === _a3 || _s5 === _a3 || _n21 && _s5 === "-" + _a3 ? _e20 : t : _r18 ? _a3 === _s5 || _n21 + _a3 === _s5 ? _e20 : t : i === _s5 || i === _n21 + _s5 ? _e20 : t;
              }
            }
            return t;
          }
          var s;
        };
      },
      737: function _(t, e, n) {
        var r = n(670),
          o = n(647),
          i = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
          s = /[\n\r\t]/g,
          a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
          u = /:\d+$/,
          c = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
          l = /^[a-zA-Z]:/;
        function h(t) {
          return (t || "").toString().replace(i, "");
        }
        var p = [["#", "hash"], ["?", "query"], function (t, e) {
            return g(e.protocol) ? t.replace(/\\/g, "/") : t;
          }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
          f = {
            hash: 1,
            query: 1
          };
        function d(t) {
          var e,
            n = ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}).location || {},
            r = {},
            o = _typeof(t = t || n);
          if ("blob:" === t.protocol) r = new y(unescape(t.pathname), {});else if ("string" === o) for (e in r = new y(t, {}), f) delete r[e];else if ("object" === o) {
            for (e in t) e in f || (r[e] = t[e]);
            void 0 === r.slashes && (r.slashes = a.test(t.href));
          }
          return r;
        }
        function g(t) {
          return "file:" === t || "ftp:" === t || "http:" === t || "https:" === t || "ws:" === t || "wss:" === t;
        }
        function m(t, e) {
          t = (t = h(t)).replace(s, ""), e = e || {};
          var n,
            r = c.exec(t),
            o = r[1] ? r[1].toLowerCase() : "",
            i = !!r[2],
            a = !!r[3],
            u = 0;
          return i ? a ? (n = r[2] + r[3] + r[4], u = r[2].length + r[3].length) : (n = r[2] + r[4], u = r[2].length) : a ? (n = r[3] + r[4], u = r[3].length) : n = r[4], "file:" === o ? u >= 2 && (n = n.slice(2)) : g(o) ? n = r[4] : o ? i && (n = n.slice(2)) : u >= 2 && g(e.protocol) && (n = r[4]), {
            protocol: o,
            slashes: i || g(o),
            slashesCount: u,
            rest: n
          };
        }
        function y(t, e, n) {
          if (t = (t = h(t)).replace(s, ""), !(this instanceof y)) return new y(t, e, n);
          var i,
            a,
            u,
            c,
            f,
            v,
            b = p.slice(),
            w = _typeof(e),
            x = this,
            N = 0;
          for ("object" !== w && "string" !== w && (n = e, e = null), n && "function" != typeof n && (n = o.parse), i = !(a = m(t || "", e = d(e))).protocol && !a.slashes, x.slashes = a.slashes || i && e.slashes, x.protocol = a.protocol || e.protocol || "", t = a.rest, ("file:" === a.protocol && (2 !== a.slashesCount || l.test(t)) || !a.slashes && (a.protocol || a.slashesCount < 2 || !g(x.protocol))) && (b[3] = [/(.*)/, "pathname"]); N < b.length; N++) "function" != typeof (c = b[N]) ? (u = c[0], v = c[1], u != u ? x[v] = t : "string" == typeof u ? ~(f = "@" === u ? t.lastIndexOf(u) : t.indexOf(u)) && ("number" == typeof c[2] ? (x[v] = t.slice(0, f), t = t.slice(f + c[2])) : (x[v] = t.slice(f), t = t.slice(0, f))) : (f = u.exec(t)) && (x[v] = f[1], t = t.slice(0, f.index)), x[v] = x[v] || i && c[3] && e[v] || "", c[4] && (x[v] = x[v].toLowerCase())) : t = c(t, x);
          n && (x.query = n(x.query)), i && e.slashes && "/" !== x.pathname.charAt(0) && ("" !== x.pathname || "" !== e.pathname) && (x.pathname = function (t, e) {
            if ("" === t) return e;
            for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), r = n.length, o = n[r - 1], i = !1, s = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), s++) : s && (0 === r && (i = !0), n.splice(r, 1), s--);
            return i && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/");
          }(x.pathname, e.pathname)), "/" !== x.pathname.charAt(0) && g(x.protocol) && (x.pathname = "/" + x.pathname), r(x.port, x.protocol) || (x.host = x.hostname, x.port = ""), x.username = x.password = "", x.auth && (~(f = x.auth.indexOf(":")) ? (x.username = x.auth.slice(0, f), x.username = encodeURIComponent(decodeURIComponent(x.username)), x.password = x.auth.slice(f + 1), x.password = encodeURIComponent(decodeURIComponent(x.password))) : x.username = encodeURIComponent(decodeURIComponent(x.auth)), x.auth = x.password ? x.username + ":" + x.password : x.username), x.origin = "file:" !== x.protocol && g(x.protocol) && x.host ? x.protocol + "//" + x.host : "null", x.href = x.toString();
        }
        y.prototype = {
          set: function set(t, e, n) {
            var i = this;
            switch (t) {
              case "query":
                "string" == typeof e && e.length && (e = (n || o.parse)(e)), i[t] = e;
                break;
              case "port":
                i[t] = e, r(e, i.protocol) ? e && (i.host = i.hostname + ":" + e) : (i.host = i.hostname, i[t] = "");
                break;
              case "hostname":
                i[t] = e, i.port && (e += ":" + i.port), i.host = e;
                break;
              case "host":
                i[t] = e, u.test(e) ? (e = e.split(":"), i.port = e.pop(), i.hostname = e.join(":")) : (i.hostname = e, i.port = "");
                break;
              case "protocol":
                i.protocol = e.toLowerCase(), i.slashes = !n;
                break;
              case "pathname":
              case "hash":
                if (e) {
                  var s = "pathname" === t ? "/" : "#";
                  i[t] = e.charAt(0) !== s ? s + e : e;
                } else i[t] = e;
                break;
              case "username":
              case "password":
                i[t] = encodeURIComponent(e);
                break;
              case "auth":
                var a = e.indexOf(":");
                ~a ? (i.username = e.slice(0, a), i.username = encodeURIComponent(decodeURIComponent(i.username)), i.password = e.slice(a + 1), i.password = encodeURIComponent(decodeURIComponent(i.password))) : i.username = encodeURIComponent(decodeURIComponent(e));
            }
            for (var c = 0; c < p.length; c++) {
              var l = p[c];
              l[4] && (i[l[1]] = i[l[1]].toLowerCase());
            }
            return i.auth = i.password ? i.username + ":" + i.password : i.username, i.origin = "file:" !== i.protocol && g(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i;
          },
          toString: function toString(t) {
            t && "function" == typeof t || (t = o.stringify);
            var e,
              n = this,
              r = n.host,
              i = n.protocol;
            i && ":" !== i.charAt(i.length - 1) && (i += ":");
            var s = i + (n.protocol && n.slashes || g(n.protocol) ? "//" : "");
            return n.username ? (s += n.username, n.password && (s += ":" + n.password), s += "@") : n.password ? (s += ":" + n.password, s += "@") : "file:" !== n.protocol && g(n.protocol) && !r && "/" !== n.pathname && (s += "@"), (":" === r[r.length - 1] || u.test(n.hostname) && !n.port) && (r += ":"), s += r + n.pathname, (e = "object" == _typeof(n.query) ? t(n.query) : n.query) && (s += "?" !== e.charAt(0) ? "?" + e : e), n.hash && (s += n.hash), s;
          }
        }, y.extractProtocol = m, y.location = d, y.trimLeft = h, y.qs = o, t.exports = y;
      },
      410: function _() {},
      388: function _() {},
      805: function _() {},
      345: function _() {},
      800: function _() {}
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = e[r] = {
      id: r,
      loaded: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports;
  }
  n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, {
      a: e
    }), e;
  }, n.d = function (t, e) {
    for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
      enumerable: !0,
      get: e[r]
    });
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.nmd = function (t) {
    return t.paths = [], t.children || (t.children = []), t;
  };
  var r = {};
  n.d(r, {
    hT: function hT() {
      return C;
    },
    O4: function O4() {
      return I;
    },
    Kd: function Kd() {
      return S;
    },
    YK: function YK() {
      return $;
    },
    UU: function UU() {
      return en;
    },
    Gu: function Gu() {
      return F;
    },
    ky: function ky() {
      return oe;
    },
    h4: function h4() {
      return ne;
    },
    ch: function ch() {
      return re;
    },
    hq: function hq() {
      return Xt;
    },
    i5: function i5() {
      return ie;
    }
  });
  var o = n(737),
    i = n.n(o);
  function s(t) {
    if (!a(t)) throw new Error("Parameter was not an error");
  }
  function a(t) {
    return !!t && "object" == _typeof(t) && "[object Error]" === (e = t, Object.prototype.toString.call(e)) || t instanceof Error;
    var e;
  }
  var u = /*#__PURE__*/function (_Error) {
    function u(t, e) {
      var _this;
      _classCallCheck(this, u);
      var n = Array.prototype.slice.call(arguments),
        _ref3 = function (t) {
          var e,
            n = "";
          if (0 === t.length) e = {};else if (a(t[0])) e = {
            cause: t[0]
          }, n = t.slice(1).join(" ") || "";else if (t[0] && "object" == _typeof(t[0])) e = Object.assign({}, t[0]), n = t.slice(1).join(" ") || "";else {
            if ("string" != typeof t[0]) throw new Error("Invalid arguments passed to Layerr");
            e = {}, n = n = t.join(" ") || "";
          }
          return {
            options: e,
            shortMessage: n
          };
        }(n),
        r = _ref3.options,
        o = _ref3.shortMessage;
      var i = o;
      if (r.cause && (i = "".concat(i, ": ").concat(r.cause.message)), _this = _callSuper(this, u, [i]), _this.message = i, r.name && "string" == typeof r.name ? _this.name = r.name : _this.name = "Layerr", r.cause && Object.defineProperty(_assertThisInitialized(_this), "_cause", {
        value: r.cause
      }), Object.defineProperty(_assertThisInitialized(_this), "_info", {
        value: {}
      }), r.info && "object" == _typeof(r.info) && Object.assign(_this._info, r.info), Error.captureStackTrace) {
        var _t17 = r.constructorOpt || _this.constructor;
        Error.captureStackTrace(_assertThisInitialized(_this), _t17);
      }
      return _this;
    }
    _inherits(u, _Error);
    return _createClass(u, [{
      key: "toString",
      value: function toString() {
        var t = this.name || this.constructor.name || this.constructor.prototype.name;
        return this.message && (t = "".concat(t, ": ").concat(this.message)), t;
      }
    }], [{
      key: "cause",
      value: function cause(t) {
        return s(t), t._cause && a(t._cause) ? t._cause : null;
      }
    }, {
      key: "fullStack",
      value: function fullStack(t) {
        var _t$stack;
        s(t);
        var e = u.cause(t);
        return e ? "".concat(t.stack, "\ncaused by: ").concat(u.fullStack(e)) : (_t$stack = t.stack) !== null && _t$stack !== void 0 ? _t$stack : "";
      }
    }, {
      key: "info",
      value: function info(t) {
        s(t);
        var e = {},
          n = u.cause(t);
        return n && Object.assign(e, u.info(n)), t._info && Object.assign(e, t._info), e;
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  var c = n(47),
    l = n.n(c);
  var h = "__PATH_SEPARATOR_POSIX__",
    p = "__PATH_SEPARATOR_WINDOWS__";
  function f(t) {
    try {
      var _e21 = t.replace(/\//g, h).replace(/\\\\/g, p);
      return encodeURIComponent(_e21).split(p).join("\\\\").split(h).join("/");
    } catch (t) {
      throw new u(t, "Failed encoding path");
    }
  }
  function d(t) {
    return t.startsWith("/") ? t : "/" + t;
  }
  function g(t) {
    var e = t;
    return "/" !== e[0] && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
  }
  function m(t) {
    var e = new (i())(t).pathname;
    return e.length <= 0 && (e = "/"), g(e);
  }
  function y() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return function () {
      return function (t) {
        var e = [];
        if (0 === t.length) return "";
        if ("string" != typeof t[0]) throw new TypeError("Url must be a string. Received " + t[0]);
        if (t[0].match(/^[^/:]+:\/*$/) && t.length > 1) {
          var n = t.shift();
          t[0] = n + t[0];
        }
        t[0].match(/^file:\/\/\//) ? t[0] = t[0].replace(/^([^/:]+):\/*/, "$1:///") : t[0] = t[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          if ("string" != typeof o) throw new TypeError("Url must be a string. Received " + o);
          "" !== o && (r > 0 && (o = o.replace(/^[\/]+/, "")), o = r < t.length - 1 ? o.replace(/[\/]+$/, "") : o.replace(/[\/]+$/, "/"), e.push(o));
        }
        var i = e.join("/"),
          s = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
        return s.shift() + (s.length > 0 ? "?" : "") + s.join("&");
      }("object" == _typeof(arguments[0]) ? arguments[0] : [].slice.call(arguments));
    }(e.reduce(function (t, e, n) {
      return (0 === n || "/" !== e || "/" === e && "/" !== t[t.length - 1]) && t.push(e), t;
    }, []));
  }
  var v = n(542),
    b = n.n(v);
  var w = "abcdef0123456789";
  function x(t, e) {
    var n = t.url.replace("//", ""),
      r = -1 == n.indexOf("/") ? "/" : n.slice(n.indexOf("/")),
      o = t.method ? t.method.toUpperCase() : "GET",
      i = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth",
      s = "00000000".concat(e.nc).slice(-8),
      a = function (t, e, n, r, o, i, s) {
        var a = s || b()("".concat(e, ":").concat(n, ":").concat(r));
        return t && "md5-sess" === t.toLowerCase() ? b()("".concat(a, ":").concat(o, ":").concat(i)) : a;
      }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1),
      u = b()("".concat(o, ":").concat(r)),
      c = i ? b()("".concat(a, ":").concat(e.nonce, ":").concat(s, ":").concat(e.cnonce, ":").concat(i, ":").concat(u)) : b()("".concat(a, ":").concat(e.nonce, ":").concat(u)),
      l = {
        username: e.username,
        realm: e.realm,
        nonce: e.nonce,
        uri: r,
        qop: i,
        response: c,
        nc: s,
        cnonce: e.cnonce,
        algorithm: e.algorithm,
        opaque: e.opaque
      },
      h = [];
    for (var _t18 in l) l[_t18] && ("qop" === _t18 || "nc" === _t18 || "algorithm" === _t18 ? h.push("".concat(_t18, "=").concat(l[_t18])) : h.push("".concat(_t18, "=\"").concat(l[_t18], "\"")));
    return "Digest ".concat(h.join(", "));
  }
  function N(t) {
    return "digest" === (t.headers && t.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase();
  }
  var A = n(101),
    P = n.n(A);
  function O(t) {
    return P().decode(t);
  }
  function E(t, e) {
    var n;
    return "Basic ".concat((n = "".concat(t, ":").concat(e), P().encode(n)));
  }
  var T = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : "undefined" != typeof window ? window : globalThis,
    j = T.fetch.bind(T),
    S = (T.Request),
    $ = T.Response;
  var C = function (t) {
      return t.Auto = "auto", t.Digest = "digest", t.None = "none", t.Password = "password", t.Token = "token", t;
    }({}),
    I = function (t) {
      return t.DataTypeNoLength = "data-type-no-length", t.InvalidAuthType = "invalid-auth-type", t.InvalidOutputFormat = "invalid-output-format", t.LinkUnsupportedAuthType = "link-unsupported-auth", t.InvalidUpdateRange = "invalid-update-range", t.NotSupported = "not-supported", t;
    }({});
  function k(t, e, n, r, o) {
    switch (t.authType) {
      case C.Auto:
        e && n && (t.headers.Authorization = E(e, n));
        break;
      case C.Digest:
        t.digest = function (t, e, n) {
          return {
            username: t,
            password: e,
            ha1: n,
            nc: 0,
            algorithm: "md5",
            hasDigestAuth: !1
          };
        }(e, n, o);
        break;
      case C.None:
        break;
      case C.Password:
        t.headers.Authorization = E(e, n);
        break;
      case C.Token:
        t.headers.Authorization = "".concat((i = r).token_type, " ").concat(i.access_token);
        break;
      default:
        throw new u({
          info: {
            code: I.InvalidAuthType
          }
        }, "Invalid auth type: ".concat(t.authType));
    }
    var i;
  }
  n(345), n(800);
  var R = "@@HOTPATCHER",
    L = function L() {};
  function _(t) {
    return {
      original: t,
      methods: [t],
      "final": !1
    };
  }
  var M = /*#__PURE__*/function () {
    function M() {
      _classCallCheck(this, M);
      this._configuration = {
        registry: {},
        getEmptyAction: "null"
      }, this.__type__ = R;
    }
    return _createClass(M, [{
      key: "configuration",
      get: function get() {
        return this._configuration;
      }
    }, {
      key: "getEmptyAction",
      get: function get() {
        return this.configuration.getEmptyAction;
      },
      set: function set(t) {
        this.configuration.getEmptyAction = t;
      }
    }, {
      key: "control",
      value: function control(t) {
        var _this2 = this;
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!t || t.__type__ !== R) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
        return Object.keys(t.configuration.registry).forEach(function (n) {
          _this2.configuration.registry.hasOwnProperty(n) ? e && (_this2.configuration.registry[n] = Object.assign({}, t.configuration.registry[n])) : _this2.configuration.registry[n] = Object.assign({}, t.configuration.registry[n]);
        }), t._configuration = this.configuration, this;
      }
    }, {
      key: "execute",
      value: function execute(t) {
        var e = this.get(t) || L;
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
        return e.apply(void 0, r);
      }
    }, {
      key: "get",
      value: function get(t) {
        var e = this.configuration.registry[t];
        if (!e) switch (this.getEmptyAction) {
          case "null":
            return null;
          case "throw":
            throw new Error("Failed handling method request: No method provided for override: ".concat(t));
          default:
            throw new Error("Failed handling request which resulted in an empty method: Invalid empty-action specified: ".concat(this.getEmptyAction));
        }
        return function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          if (0 === e.length) throw new Error("Failed creating sequence: No functions provided");
          return function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            var o = n;
            var i = this;
            for (; e.length > 0;) o = [e.shift().apply(i, o)];
            return o[0];
          };
        }.apply(void 0, _toConsumableArray(e.methods));
      }
    }, {
      key: "isPatched",
      value: function isPatched(t) {
        return !!this.configuration.registry[t];
      }
    }, {
      key: "patch",
      value: function patch(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var _n$chain = n.chain,
          r = _n$chain === void 0 ? !1 : _n$chain;
        if (this.configuration.registry[t] && this.configuration.registry[t]["final"]) throw new Error("Failed patching '".concat(t, "': Method marked as being final"));
        if ("function" != typeof e) throw new Error("Failed patching '".concat(t, "': Provided method is not a function"));
        if (r) this.configuration.registry[t] ? this.configuration.registry[t].methods.push(e) : this.configuration.registry[t] = _(e);else if (this.isPatched(t)) {
          var _n22 = this.configuration.registry[t].original;
          this.configuration.registry[t] = Object.assign(_(e), {
            original: _n22
          });
        } else this.configuration.registry[t] = _(e);
        return this;
      }
    }, {
      key: "patchInline",
      value: function patchInline(t, e) {
        this.isPatched(t) || this.patch(t, e);
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
        return this.execute.apply(this, [t].concat(r));
      }
    }, {
      key: "plugin",
      value: function plugin(t) {
        var _this3 = this;
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return n.forEach(function (e) {
          _this3.patch(t, e, {
            chain: !0
          });
        }), this;
      }
    }, {
      key: "restore",
      value: function restore(t) {
        if (!this.isPatched(t)) throw new Error("Failed restoring method: No method present for key: ".concat(t));
        if ("function" != typeof this.configuration.registry[t].original) throw new Error("Failed restoring method: Original method not found or of invalid type for key: ".concat(t));
        return this.configuration.registry[t].methods = [this.configuration.registry[t].original], this;
      }
    }, {
      key: "setFinal",
      value: function setFinal(t) {
        if (!this.configuration.registry.hasOwnProperty(t)) throw new Error("Failed marking '".concat(t, "' as final: No method found for key"));
        return this.configuration.registry[t]["final"] = !0, this;
      }
    }]);
  }();
  var U = null;
  function F() {
    return U || (U = new M()), U;
  }
  function D(t) {
    return function (t) {
      if ("object" != _typeof(t) || null === t || "[object Object]" != Object.prototype.toString.call(t)) return !1;
      if (null === Object.getPrototypeOf(t)) return !0;
      var e = t;
      for (; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
      return Object.getPrototypeOf(t) === e;
    }(t) ? Object.assign({}, t) : Object.setPrototypeOf(Object.assign({}, t), Object.getPrototypeOf(t));
  }
  function B() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    var r = null,
      o = [].concat(e);
    for (; o.length > 0;) {
      var _t19 = o.shift();
      r = r ? V(r, _t19) : D(_t19);
    }
    return r;
  }
  function V(t, e) {
    var n = D(t);
    return Object.keys(e).forEach(function (t) {
      n.hasOwnProperty(t) ? Array.isArray(e[t]) ? n[t] = Array.isArray(n[t]) ? [].concat(_toConsumableArray(n[t]), _toConsumableArray(e[t])) : _toConsumableArray(e[t]) : "object" == _typeof(e[t]) && e[t] ? n[t] = "object" == _typeof(n[t]) && n[t] ? V(n[t], e[t]) : D(e[t]) : n[t] = e[t] : n[t] = e[t];
    }), n;
  }
  function W(t) {
    var e = {};
    var _iterator2 = _createForOfIteratorHelper(t.keys()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _n23 = _step2.value;
        e[_n23] = t.get(_n23);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return e;
  }
  function z() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    if (0 === e.length) return {};
    var r = {};
    return e.reduce(function (t, e) {
      return Object.keys(e).forEach(function (n) {
        var o = n.toLowerCase();
        r.hasOwnProperty(o) ? t[r[o]] = e[n] : (r[o] = n, t[n] = e[n]);
      }), t;
    }, {});
  }
  n(805);
  var G = "function" == typeof ArrayBuffer,
    q = Object.prototype.toString;
  function H(t) {
    return G && (t instanceof ArrayBuffer || "[object ArrayBuffer]" === q.call(t));
  }
  function X(t) {
    return null != t && null != t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
  }
  function Z(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      try {
        return Promise.resolve(t.apply(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    };
  }
  function Y(t, e, n) {
    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  }
  var K = Z(function (t) {
      var e = t._digest;
      return delete t._digest, e.hasDigestAuth && (t = B(t, {
        headers: {
          Authorization: x(t, e)
        }
      })), Y(et(t), function (n) {
        var r = !1;
        return o = function o(t) {
          return r ? t : n;
        }, (i = function () {
          if (401 == n.status) return e.hasDigestAuth = function (t, e) {
            if (!N(t)) return !1;
            var n = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
            for (;;) {
              var _r19 = t.headers && t.headers.get("www-authenticate") || "",
                _o15 = n.exec(_r19);
              if (!_o15) break;
              e[_o15[1]] = _o15[2] || _o15[3];
            }
            return e.nc += 1, e.cnonce = function () {
              var t = "";
              for (var _e22 = 0; _e22 < 32; ++_e22) t = "".concat(t).concat(w[Math.floor(16 * Math.random())]);
              return t;
            }(), !0;
          }(n, e), function () {
            if (e.hasDigestAuth) return Y(et(t = B(t, {
              headers: {
                Authorization: x(t, e)
              }
            })), function (t) {
              return 401 == t.status ? e.hasDigestAuth = !1 : e.nc++, r = !0, t;
            });
          }();
          e.nc++;
        }()) && i.then ? i.then(o) : o(i);
        var o, i;
      });
    }),
    J = Z(function (t, e) {
      return Y(et(t), function (n) {
        return n.ok ? (e.authType = C.Password, n) : 401 == n.status && N(n) ? (e.authType = C.Digest, k(e, e.username, e.password, void 0, void 0), t._digest = e.digest, K(t)) : n;
      });
    }),
    Q = Z(function (t, e) {
      return e.authType === C.Auto ? J(t, e) : t._digest ? K(t) : et(t);
    });
  function tt(t, e, n) {
    var r = D(t);
    return r.headers = z(e.headers, r.headers || {}, n.headers || {}), void 0 !== n.data && (r.data = n.data), n.signal && (r.signal = n.signal), e.httpAgent && (r.httpAgent = e.httpAgent), e.httpsAgent && (r.httpsAgent = e.httpsAgent), e.digest && (r._digest = e.digest), "boolean" == typeof e.withCredentials && (r.withCredentials = e.withCredentials), r;
  }
  function et(t) {
    var e = F();
    return e.patchInline("request", function (t) {
      return e.patchInline("fetch", j, t.url, function (t) {
        var e = {};
        var n = {
          method: t.method
        };
        if (t.headers && (e = z(e, t.headers)), void 0 !== t.data) {
          var _ref = function (t) {
              if ("string" == typeof t) return [t, {}];
              if (X(t)) return [t, {}];
              if (H(t)) return [t, {}];
              if (t && "object" == _typeof(t)) return [JSON.stringify(t), {
                "content-type": "application/json"
              }];
              throw new Error("Unable to convert request body: Unexpected body type: " + _typeof(t));
            }(t.data),
            _ref2 = _slicedToArray(_ref, 2),
            _r20 = _ref2[0],
            _o16 = _ref2[1];
          n.body = _r20, e = z(e, _o16);
        }
        return t.signal && (n.signal = t.signal), t.withCredentials && (n.credentials = "include"), n.headers = e, n;
      }(t));
    }, t);
  }
  var nt = n(285);
  var rt = function rt(t) {
      if ("string" != typeof t) throw new TypeError("invalid pattern");
      if (t.length > 65536) throw new TypeError("pattern is too long");
    },
    ot = {
      "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0],
      "[:alpha:]": ["\\p{L}\\p{Nl}", !0],
      "[:ascii:]": ["\\x00-\\x7f", !1],
      "[:blank:]": ["\\p{Zs}\\t", !0],
      "[:cntrl:]": ["\\p{Cc}", !0],
      "[:digit:]": ["\\p{Nd}", !0],
      "[:graph:]": ["\\p{Z}\\p{C}", !0, !0],
      "[:lower:]": ["\\p{Ll}", !0],
      "[:print:]": ["\\p{C}", !0],
      "[:punct:]": ["\\p{P}", !0],
      "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0],
      "[:upper:]": ["\\p{Lu}", !0],
      "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0],
      "[:xdigit:]": ["A-Fa-f0-9", !1]
    },
    it = function it(t) {
      return t.replace(/[[\]\\-]/g, "\\$&");
    },
    st = function st(t) {
      return t.join("");
    },
    at = function at(t, e) {
      var n = e;
      if ("[" !== t.charAt(n)) throw new Error("not in a brace expression");
      var r = [],
        o = [];
      var i = n + 1,
        s = !1,
        a = !1,
        u = !1,
        c = !1,
        l = n,
        h = "";
      t: for (; i < t.length;) {
        var _e23 = t.charAt(i);
        if ("!" !== _e23 && "^" !== _e23 || i !== n + 1) {
          if ("]" === _e23 && s && !u) {
            l = i + 1;
            break;
          }
          if (s = !0, "\\" !== _e23 || u) {
            if ("[" === _e23 && !u) for (var _i12 = 0, _Object$entries = Object.entries(ot); _i12 < _Object$entries.length; _i12++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i12], 2),
                _e24 = _Object$entries$_i[0],
                _Object$entries$_i$ = _slicedToArray(_Object$entries$_i[1], 3),
                _s6 = _Object$entries$_i$[0],
                _u5 = _Object$entries$_i$[1],
                _c3 = _Object$entries$_i$[2];
              if (t.startsWith(_e24, i)) {
                if (h) return ["$.", !1, t.length - n, !0];
                i += _e24.length, _c3 ? o.push(_s6) : r.push(_s6), a = a || _u5;
                continue t;
              }
            }
            u = !1, h ? (_e23 > h ? r.push(it(h) + "-" + it(_e23)) : _e23 === h && r.push(it(_e23)), h = "", i++) : t.startsWith("-]", i + 1) ? (r.push(it(_e23 + "-")), i += 2) : t.startsWith("-", i + 1) ? (h = _e23, i += 2) : (r.push(it(_e23)), i++);
          } else u = !0, i++;
        } else c = !0, i++;
      }
      if (l < i) return ["", !1, 0, !1];
      if (!r.length && !o.length) return ["$.", !1, t.length - n, !0];
      if (0 === o.length && 1 === r.length && /^\\?.$/.test(r[0]) && !c) {
        return [(p = 2 === r[0].length ? r[0].slice(-1) : r[0], p.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, l - n, !1];
      }
      var p;
      var f = "[" + (c ? "^" : "") + st(r) + "]",
        d = "[" + (c ? "" : "^") + st(o) + "]";
      return [r.length && o.length ? "(" + f + "|" + d + ")" : r.length ? f : d, a, l - n, !0];
    },
    ut = function ut(t) {
      var _ref4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _ref4$windowsPathsNoE = _ref4.windowsPathsNoEscape,
        e = _ref4$windowsPathsNoE === void 0 ? !1 : _ref4$windowsPathsNoE;
      return e ? t.replace(/\[([^\/\\])\]/g, "$1") : t.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
    },
    ct = new Set(["!", "?", "+", "*", "@"]),
    lt = function lt(t) {
      return ct.has(t);
    },
    ht = "(?!\\.)",
    pt = new Set(["[", "."]),
    ft = new Set(["..", "."]),
    dt = new Set("().*{}+?[]^$\\!"),
    gt = "[^/]",
    mt = gt + "*?",
    yt = gt + "+?";
  var _t4 = /*#__PURE__*/new WeakMap();
  var _e25 = /*#__PURE__*/new WeakMap();
  var _n24 = /*#__PURE__*/new WeakMap();
  var _r21 = /*#__PURE__*/new WeakMap();
  var _o17 = /*#__PURE__*/new WeakMap();
  var _i13 = /*#__PURE__*/new WeakMap();
  var _s7 = /*#__PURE__*/new WeakMap();
  var _a4 = /*#__PURE__*/new WeakMap();
  var _u6 = /*#__PURE__*/new WeakMap();
  var _c4 = /*#__PURE__*/new WeakMap();
  var _l3 = /*#__PURE__*/new WeakMap();
  var _vt_brand = /*#__PURE__*/new WeakSet();
  var vt = /*#__PURE__*/function () {
    function vt(_t20, _e26) {
      _classCallCheck(this, vt);
      _classPrivateMethodInitSpec(this, _vt_brand);
      _defineProperty(this, "type", void 0);
      _classPrivateFieldInitSpec(this, _t4, void 0);
      _classPrivateFieldInitSpec(this, _e25, void 0);
      _classPrivateFieldInitSpec(this, _n24, !1);
      _classPrivateFieldInitSpec(this, _r21, []);
      _classPrivateFieldInitSpec(this, _o17, void 0);
      _classPrivateFieldInitSpec(this, _i13, void 0);
      _classPrivateFieldInitSpec(this, _s7, void 0);
      _classPrivateFieldInitSpec(this, _a4, !1);
      _classPrivateFieldInitSpec(this, _u6, void 0);
      _classPrivateFieldInitSpec(this, _c4, void 0);
      _classPrivateFieldInitSpec(this, _l3, !1);
      var _n25 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      this.type = _t20, _t20 && _classPrivateFieldSet2(_e25, this, !0), _classPrivateFieldSet2(_o17, this, _e26), _classPrivateFieldSet2(_t4, this, _classPrivateFieldGet2(_o17, this) ? _classPrivateFieldGet2(_t4, _classPrivateFieldGet2(_o17, this)) : this), _classPrivateFieldSet2(_u6, this, _classPrivateFieldGet2(_t4, this) === this ? _n25 : _classPrivateFieldGet2(_u6, _classPrivateFieldGet2(_t4, this))), _classPrivateFieldSet2(_s7, this, _classPrivateFieldGet2(_t4, this) === this ? [] : _classPrivateFieldGet2(_s7, _classPrivateFieldGet2(_t4, this))), "!" !== _t20 || _classPrivateFieldGet2(_a4, _classPrivateFieldGet2(_t4, this)) || _classPrivateFieldGet2(_s7, this).push(this), _classPrivateFieldSet2(_i13, this, _classPrivateFieldGet2(_o17, this) ? _classPrivateFieldGet2(_r21, _classPrivateFieldGet2(_o17, this)).length : 0);
    }
    return _createClass(vt, [{
      key: "hasMagic",
      get: function get() {
        if (void 0 !== _classPrivateFieldGet2(_e25, this)) return _classPrivateFieldGet2(_e25, this);
        var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet2(_r21, this)),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _t21 = _step3.value;
            if ("string" != typeof _t21 && (_t21.type || _t21.hasMagic)) return _classPrivateFieldSet2(_e25, this, !0);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return _classPrivateFieldGet2(_e25, this);
      }
    }, {
      key: "toString",
      value: function toString() {
        return void 0 !== _classPrivateFieldGet2(_c4, this) ? _classPrivateFieldGet2(_c4, this) : this.type ? _classPrivateFieldSet2(_c4, this, this.type + "(" + _classPrivateFieldGet2(_r21, this).map(function (t) {
          return String(t);
        }).join("|") + ")") : _classPrivateFieldSet2(_c4, this, _classPrivateFieldGet2(_r21, this).map(function (t) {
          return String(t);
        }).join(""));
      }
    }, {
      key: "push",
      value: function push() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        for (var _i14 = 0, _e27 = e; _i14 < _e27.length; _i14++) {
          var _t22 = _e27[_i14];
          if ("" !== _t22) {
            if ("string" != typeof _t22 && !(_t22 instanceof vt && _classPrivateFieldGet2(_o17, _t22) === this)) throw new Error("invalid part: " + _t22);
            _classPrivateFieldGet2(_r21, this).push(_t22);
          }
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var _classPrivateFieldGet2$1;
        var t = null === this.type ? _classPrivateFieldGet2(_r21, this).slice().map(function (t) {
          return "string" == typeof t ? t : t.toJSON();
        }) : [this.type].concat(_toConsumableArray(_classPrivateFieldGet2(_r21, this).map(function (t) {
          return t.toJSON();
        })));
        return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === _classPrivateFieldGet2(_t4, this) || _classPrivateFieldGet2(_a4, _classPrivateFieldGet2(_t4, this)) && "!" === ((_classPrivateFieldGet2$1 = _classPrivateFieldGet2(_o17, this)) === null || _classPrivateFieldGet2$1 === void 0 ? void 0 : _classPrivateFieldGet2$1.type)) && t.push({}), t;
      }
    }, {
      key: "isStart",
      value: function isStart() {
        var _classPrivateFieldGet3;
        if (_classPrivateFieldGet2(_t4, this) === this) return !0;
        if (!((_classPrivateFieldGet3 = _classPrivateFieldGet2(_o17, this)) !== null && _classPrivateFieldGet3 !== void 0 && _classPrivateFieldGet3.isStart())) return !1;
        if (0 === _classPrivateFieldGet2(_i13, this)) return !0;
        var t = _classPrivateFieldGet2(_o17, this);
        for (var _e28 = 0; _e28 < _classPrivateFieldGet2(_i13, this); _e28++) {
          var _n26 = _classPrivateFieldGet2(_r21, t)[_e28];
          if (!(_n26 instanceof vt && "!" === _n26.type)) return !1;
        }
        return !0;
      }
    }, {
      key: "isEnd",
      value: function isEnd() {
        var _classPrivateFieldGet4, _classPrivateFieldGet5, _classPrivateFieldGet6;
        if (_classPrivateFieldGet2(_t4, this) === this) return !0;
        if ("!" === ((_classPrivateFieldGet4 = _classPrivateFieldGet2(_o17, this)) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.type)) return !0;
        if (!((_classPrivateFieldGet5 = _classPrivateFieldGet2(_o17, this)) !== null && _classPrivateFieldGet5 !== void 0 && _classPrivateFieldGet5.isEnd())) return !1;
        if (!this.type) return (_classPrivateFieldGet6 = _classPrivateFieldGet2(_o17, this)) === null || _classPrivateFieldGet6 === void 0 ? void 0 : _classPrivateFieldGet6.isEnd();
        var t = _classPrivateFieldGet2(_o17, this) ? _classPrivateFieldGet2(_r21, _classPrivateFieldGet2(_o17, this)).length : 0;
        return _classPrivateFieldGet2(_i13, this) === t - 1;
      }
    }, {
      key: "copyIn",
      value: function copyIn(t) {
        "string" == typeof t ? this.push(t) : this.push(t.clone(this));
      }
    }, {
      key: "clone",
      value: function clone(t) {
        var e = new vt(this.type, t);
        var _iterator4 = _createForOfIteratorHelper(_classPrivateFieldGet2(_r21, this)),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t23 = _step4.value;
            e.copyIn(_t23);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        return e;
      }
    }, {
      key: "toMMPattern",
      value: function toMMPattern() {
        if (this !== _classPrivateFieldGet2(_t4, this)) return _classPrivateFieldGet2(_t4, this).toMMPattern();
        var t = this.toString(),
          _this$toRegExpSource = this.toRegExpSource(),
          _this$toRegExpSource2 = _slicedToArray(_this$toRegExpSource, 4),
          e = _this$toRegExpSource2[0],
          n = _this$toRegExpSource2[1],
          r = _this$toRegExpSource2[2],
          o = _this$toRegExpSource2[3];
        if (!(r || _classPrivateFieldGet2(_e25, this) || _classPrivateFieldGet2(_u6, this).nocase && !_classPrivateFieldGet2(_u6, this).nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase())) return n;
        var i = (_classPrivateFieldGet2(_u6, this).nocase ? "i" : "") + (o ? "u" : "");
        return Object.assign(new RegExp("^".concat(e, "$"), i), {
          _src: e,
          _glob: t
        });
      }
    }, {
      key: "options",
      get: function get() {
        return _classPrivateFieldGet2(_u6, this);
      }
    }, {
      key: "toRegExpSource",
      value: function toRegExpSource(t) {
        var _this4 = this;
        var e = t !== null && t !== void 0 ? t : !!_classPrivateFieldGet2(_u6, this).dot;
        if (_classPrivateFieldGet2(_t4, this) === this && _assertClassBrand(_vt_brand, this, _h5).call(this), !this.type) {
          var _classPrivateFieldGet7;
          var _n27 = this.isStart() && this.isEnd(),
            _r22 = _classPrivateFieldGet2(_r21, this).map(function (e) {
              var _ref5 = "string" == typeof e ? _f4.call(vt, e, _classPrivateFieldGet2(_e25, _this4), _n27) : e.toRegExpSource(t),
                _ref6 = _slicedToArray(_ref5, 4),
                r = _ref6[0];
                _ref6[1];
                var i = _ref6[2],
                s = _ref6[3];
              return _classPrivateFieldSet2(_e25, _this4, _classPrivateFieldGet2(_e25, _this4) || i), _classPrivateFieldSet2(_n24, _this4, _classPrivateFieldGet2(_n24, _this4) || s), r;
            }).join("");
          var _o18 = "";
          if (this.isStart() && "string" == typeof _classPrivateFieldGet2(_r21, this)[0] && (1 !== _classPrivateFieldGet2(_r21, this).length || !ft.has(_classPrivateFieldGet2(_r21, this)[0]))) {
            var _n28 = pt,
              _i15 = e && _n28.has(_r22.charAt(0)) || _r22.startsWith("\\.") && _n28.has(_r22.charAt(2)) || _r22.startsWith("\\.\\.") && _n28.has(_r22.charAt(4)),
              _s8 = !e && !t && _n28.has(_r22.charAt(0));
            _o18 = _i15 ? "(?!(?:^|/)\\.\\.?(?:$|/))" : _s8 ? ht : "";
          }
          var _i16 = "";
          return this.isEnd() && _classPrivateFieldGet2(_a4, _classPrivateFieldGet2(_t4, this)) && "!" === ((_classPrivateFieldGet7 = _classPrivateFieldGet2(_o17, this)) === null || _classPrivateFieldGet7 === void 0 ? void 0 : _classPrivateFieldGet7.type) && (_i16 = "(?:$|\\/)"), [_o18 + _r22 + _i16, ut(_r22), _classPrivateFieldSet2(_e25, this, !!_classPrivateFieldGet2(_e25, this)), _classPrivateFieldGet2(_n24, this)];
        }
        var n = "*" === this.type || "+" === this.type,
          r = "!" === this.type ? "(?:(?!(?:" : "(?:";
        var o = _assertClassBrand(_vt_brand, this, _d2).call(this, e);
        if (this.isStart() && this.isEnd() && !o && "!" !== this.type) {
          var _t24 = this.toString();
          return _classPrivateFieldSet2(_r21, this, [_t24]), this.type = null, _classPrivateFieldSet2(_e25, this, void 0), [_t24, ut(this.toString()), !1, !1];
        }
        var i = !n || t || e ? "" : _assertClassBrand(_vt_brand, this, _d2).call(this, !0);
        i === o && (i = ""), i && (o = "(?:".concat(o, ")(?:").concat(i, ")*?"));
        var s = "";
        return s = "!" === this.type && _classPrivateFieldGet2(_l3, this) ? (this.isStart() && !e ? ht : "") + yt : r + o + ("!" === this.type ? "))" + (!this.isStart() || e || t ? "" : ht) + mt + ")" : "@" === this.type ? ")" : "?" === this.type ? ")?" : "+" === this.type && i ? ")" : "*" === this.type && i ? ")?" : ")".concat(this.type)), [s, ut(o), _classPrivateFieldSet2(_e25, this, !!_classPrivateFieldGet2(_e25, this)), _classPrivateFieldGet2(_n24, this)];
      }
    }], [{
      key: "fromGlob",
      value: function fromGlob(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var n = new vt(null, void 0, e);
        return _p5.call(vt, t, n, 0, e), n;
      }
    }]);
  }();
  _vt = vt;
  function _h5() {
    if (this !== _classPrivateFieldGet2(_t4, this)) throw new Error("should only call on root");
    if (_classPrivateFieldGet2(_a4, this)) return this;
    var t;
    for (this.toString(), _classPrivateFieldSet2(_a4, this, !0); t = _classPrivateFieldGet2(_s7, this).pop();) {
      if ("!" !== t.type) continue;
      var _e39 = t,
        _n39 = _classPrivateFieldGet2(_o17, _e39);
      for (; _n39;) {
        for (var _r34 = _classPrivateFieldGet2(_i13, _e39) + 1; !_n39.type && _r34 < _classPrivateFieldGet2(_r21, _n39).length; _r34++) {
          var _iterator9 = _createForOfIteratorHelper(_classPrivateFieldGet2(_r21, t)),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _e40 = _step9.value;
              if ("string" == typeof _e40) throw new Error("string part in extglob AST??");
              _e40.copyIn(_classPrivateFieldGet2(_r21, _n39)[_r34]);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
        _e39 = _n39, _n39 = _classPrivateFieldGet2(_o17, _e39);
      }
    }
    return this;
  }
  function _p5(t, e, n, r) {
    var o = !1,
      i = !1,
      s = -1,
      a = !1;
    if (null === e.type) {
      var _u8 = n,
        _c5 = "";
      for (; _u8 < t.length;) {
        var _n40 = t.charAt(_u8++);
        if (o || "\\" === _n40) o = !o, _c5 += _n40;else if (i) _u8 === s + 1 ? "^" !== _n40 && "!" !== _n40 || (a = !0) : "]" !== _n40 || _u8 === s + 2 && a || (i = !1), _c5 += _n40;else if ("[" !== _n40) {
          if (r.noext || !lt(_n40) || "(" !== t.charAt(_u8)) _c5 += _n40;else {
            e.push(_c5), _c5 = "";
            var _o24 = new _vt(_n40, e);
            _u8 = _p5.call(_vt, t, _o24, _u8, r), e.push(_o24);
          }
        } else i = !0, s = _u8, a = !1, _c5 += _n40;
      }
      return e.push(_c5), _u8;
    }
    var u = n + 1,
      c = new _vt(null, e);
    var l = [];
    var h = "";
    for (; u < t.length;) {
      var _n41 = t.charAt(u++);
      if (o || "\\" === _n41) o = !o, h += _n41;else if (i) u === s + 1 ? "^" !== _n41 && "!" !== _n41 || (a = !0) : "]" !== _n41 || u === s + 2 && a || (i = !1), h += _n41;else if ("[" !== _n41) {
        if (lt(_n41) && "(" === t.charAt(u)) {
          c.push(h), h = "";
          var _e41 = new _vt(_n41, c);
          c.push(_e41), u = _p5.call(_vt, t, _e41, u, r);
        } else if ("|" !== _n41) {
          if (")" === _n41) return "" === h && 0 === _classPrivateFieldGet2(_r21, e).length && _classPrivateFieldSet2(_l3, e, !0), c.push(h), h = "", e.push.apply(e, l.concat([c])), u;
          h += _n41;
        } else c.push(h), h = "", l.push(c), c = new _vt(null, e);
      } else i = !0, s = u, a = !1, h += _n41;
    }
    return e.type = null, _classPrivateFieldSet2(_e25, e, void 0), _classPrivateFieldSet2(_r21, e, [t.substring(n - 1)]), u;
  }
  function _d2(t) {
    var _this6 = this;
    return _classPrivateFieldGet2(_r21, this).map(function (e) {
      if ("string" == typeof e) throw new Error("string type in extglob ast??");
      var _e$toRegExpSource = e.toRegExpSource(t),
        _e$toRegExpSource2 = _slicedToArray(_e$toRegExpSource, 4),
        n = _e$toRegExpSource2[0];
        _e$toRegExpSource2[1];
        _e$toRegExpSource2[2];
        var i = _e$toRegExpSource2[3];
      return _classPrivateFieldSet2(_n24, _this6, _classPrivateFieldGet2(_n24, _this6) || i), n;
    }).filter(function (t) {
      return !(_this6.isStart() && _this6.isEnd() && !t);
    }).join("|");
  }
  function _f4(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = !1,
      o = "",
      i = !1;
    for (var _s10 = 0; _s10 < t.length; _s10++) {
      var _a7 = t.charAt(_s10);
      if (r) r = !1, o += (dt.has(_a7) ? "\\" : "") + _a7;else if ("\\" !== _a7) {
        if ("[" === _a7) {
          var _at = at(t, _s10),
            _at2 = _slicedToArray(_at, 4),
            _n42 = _at2[0],
            _r35 = _at2[1],
            _a8 = _at2[2],
            _u9 = _at2[3];
          if (_a8) {
            o += _n42, i = i || _r35, _s10 += _a8 - 1, e = e || _u9;
            continue;
          }
        }
        "*" !== _a7 ? "?" !== _a7 ? o += _a7.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (o += gt, e = !0) : (o += n && "*" === t ? yt : mt, e = !0);
      } else _s10 === t.length - 1 ? o += "\\\\" : r = !0;
    }
    return [o, ut(t), !!e, i];
  }
  var bt = function bt(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return rt(e), !(!n.nocomment && "#" === e.charAt(0)) && new Gt(e, n).match(t);
    },
    wt = /^\*+([^+@!?\*\[\(]*)$/,
    xt = function xt(t) {
      return function (e) {
        return !e.startsWith(".") && e.endsWith(t);
      };
    },
    Nt = function Nt(t) {
      return function (e) {
        return e.endsWith(t);
      };
    },
    At = function At(t) {
      return t = t.toLowerCase(), function (e) {
        return !e.startsWith(".") && e.toLowerCase().endsWith(t);
      };
    },
    Pt = function Pt(t) {
      return t = t.toLowerCase(), function (e) {
        return e.toLowerCase().endsWith(t);
      };
    },
    Ot = /^\*+\.\*+$/,
    Et = function Et(t) {
      return !t.startsWith(".") && t.includes(".");
    },
    Tt = function Tt(t) {
      return "." !== t && ".." !== t && t.includes(".");
    },
    jt = /^\.\*+$/,
    St = function St(t) {
      return "." !== t && ".." !== t && t.startsWith(".");
    },
    $t = /^\*+$/,
    Ct = function Ct(t) {
      return 0 !== t.length && !t.startsWith(".");
    },
    It = function It(t) {
      return 0 !== t.length && "." !== t && ".." !== t;
    },
    kt = /^\?+([^+@!?\*\[\(]*)?$/,
    Rt = function Rt(t) {
      var _t25 = _slicedToArray(t, 2),
        e = _t25[0],
        _t25$ = _t25[1],
        n = _t25$ === void 0 ? "" : _t25$;
      var r = Ut([e]);
      return n ? (n = n.toLowerCase(), function (t) {
        return r(t) && t.toLowerCase().endsWith(n);
      }) : r;
    },
    Lt = function Lt(t) {
      var _t26 = _slicedToArray(t, 2),
        e = _t26[0],
        _t26$ = _t26[1],
        n = _t26$ === void 0 ? "" : _t26$;
      var r = Ft([e]);
      return n ? (n = n.toLowerCase(), function (t) {
        return r(t) && t.toLowerCase().endsWith(n);
      }) : r;
    },
    _t = function _t(t) {
      var _t27 = _slicedToArray(t, 2),
        e = _t27[0],
        _t27$ = _t27[1],
        n = _t27$ === void 0 ? "" : _t27$;
      var r = Ft([e]);
      return n ? function (t) {
        return r(t) && t.endsWith(n);
      } : r;
    },
    Mt = function Mt(t) {
      var _t28 = _slicedToArray(t, 2),
        e = _t28[0],
        _t28$ = _t28[1],
        n = _t28$ === void 0 ? "" : _t28$;
      var r = Ut([e]);
      return n ? function (t) {
        return r(t) && t.endsWith(n);
      } : r;
    },
    Ut = function Ut(t) {
      var _t29 = _slicedToArray(t, 1),
        e = _t29[0];
      var n = e.length;
      return function (t) {
        return t.length === n && !t.startsWith(".");
      };
    },
    Ft = function Ft(t) {
      var _t30 = _slicedToArray(t, 1),
        e = _t30[0];
      var n = e.length;
      return function (t) {
        return t.length === n && "." !== t && ".." !== t;
      };
    },
    Dt = "object" == (typeof process === "undefined" ? "undefined" : _typeof(process)) && process ? "object" == _typeof(process.env) && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
  bt.sep = "win32" === Dt ? "\\" : "/";
  var Bt = Symbol("globstar **");
  bt.GLOBSTAR = Bt, bt.filter = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
      return bt(n, t, e);
    };
  };
  var Vt = function Vt(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return Object.assign({}, t, e);
  };
  bt.defaults = function (t) {
    if (!t || "object" != _typeof(t) || !Object.keys(t).length) return bt;
    var e = bt;
    return Object.assign(function (n, r) {
      return e(n, r, Vt(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}));
    }, {
      Minimatch: /*#__PURE__*/function (_e$Minimatch) {
        function Minimatch(e) {
          _classCallCheck(this, Minimatch);
          return _callSuper(this, Minimatch, [e, Vt(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})]);
        }
        _inherits(Minimatch, _e$Minimatch);
        return _createClass(Minimatch, null, [{
          key: "defaults",
          value: function defaults(n) {
            return e.defaults(Vt(t, n)).Minimatch;
          }
        }]);
      }(e.Minimatch),
      AST: /*#__PURE__*/function (_e$AST) {
        function AST(e, n) {
          _classCallCheck(this, AST);
          return _callSuper(this, AST, [e, n, Vt(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})]);
        }
        _inherits(AST, _e$AST);
        return _createClass(AST, null, [{
          key: "fromGlob",
          value: function fromGlob(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e.AST.fromGlob(n, Vt(t, r));
          }
        }]);
      }(e.AST),
      unescape: function unescape(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.unescape(n, Vt(t, r));
      },
      escape: function escape(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.escape(n, Vt(t, r));
      },
      filter: function filter(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.filter(n, Vt(t, r));
      },
      defaults: function defaults(n) {
        return e.defaults(Vt(t, n));
      },
      makeRe: function makeRe(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.makeRe(n, Vt(t, r));
      },
      braceExpand: function braceExpand(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.braceExpand(n, Vt(t, r));
      },
      match: function match(n, r) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return e.match(n, r, Vt(t, o));
      },
      sep: e.sep,
      GLOBSTAR: Bt
    });
  };
  var Wt = function Wt(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return rt(t), e.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : nt(t);
  };
  bt.braceExpand = Wt, bt.makeRe = function (t) {
    return new Gt(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).makeRe();
  }, bt.match = function (t, e) {
    var n = new Gt(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
    return t = t.filter(function (t) {
      return n.match(t);
    }), n.options.nonull && !t.length && t.push(e), t;
  };
  var zt = /[?*]|[+@!]\(.*?\)|\[|\]/;
  var Gt = /*#__PURE__*/function () {
    function Gt(t) {
      _classCallCheck(this, Gt);
      _defineProperty(this, "options", void 0);
      _defineProperty(this, "set", void 0);
      _defineProperty(this, "pattern", void 0);
      _defineProperty(this, "windowsPathsNoEscape", void 0);
      _defineProperty(this, "nonegate", void 0);
      _defineProperty(this, "negate", void 0);
      _defineProperty(this, "comment", void 0);
      _defineProperty(this, "empty", void 0);
      _defineProperty(this, "preserveMultipleSlashes", void 0);
      _defineProperty(this, "partial", void 0);
      _defineProperty(this, "globSet", void 0);
      _defineProperty(this, "globParts", void 0);
      _defineProperty(this, "nocase", void 0);
      _defineProperty(this, "isWindows", void 0);
      _defineProperty(this, "platform", void 0);
      _defineProperty(this, "windowsNoMagicRoot", void 0);
      _defineProperty(this, "regexp", void 0);
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      rt(t), e = e || {}, this.options = e, this.pattern = t, this.platform = e.platform || Dt, this.isWindows = "win32" === this.platform, this.windowsPathsNoEscape = !!e.windowsPathsNoEscape || !1 === e.allowWindowsEscape, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!e.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!e.nonegate, this.comment = !1, this.empty = !1, this.partial = !!e.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = void 0 !== e.windowsNoMagicRoot ? e.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    return _createClass(Gt, [{
      key: "hasMagic",
      value: function hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) return !0;
        var _iterator5 = _createForOfIteratorHelper(this.set),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _t31 = _step5.value;
            var _iterator6 = _createForOfIteratorHelper(_t31),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _e29 = _step6.value;
                if ("string" != typeof _e29) return !0;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return !1;
      }
    }, {
      key: "debug",
      value: function debug() {}
    }, {
      key: "make",
      value: function make() {
        var _this5 = this;
        var t = this.pattern,
          e = this.options;
        if (!e.nocomment && "#" === t.charAt(0)) return void (this.comment = !0);
        if (!t) return void (this.empty = !0);
        this.parseNegate(), this.globSet = _toConsumableArray(new Set(this.braceExpand())), e.debug && (this.debug = function () {
          var _console;
          return (_console = console).error.apply(_console, arguments);
        }), this.debug(this.pattern, this.globSet);
        var n = this.globSet.map(function (t) {
          return _this5.slashSplit(t);
        });
        this.globParts = this.preprocess(n), this.debug(this.pattern, this.globParts);
        var r = this.globParts.map(function (t, e, n) {
          if (_this5.isWindows && _this5.windowsNoMagicRoot) {
            var _e30 = !("" !== t[0] || "" !== t[1] || "?" !== t[2] && zt.test(t[2]) || zt.test(t[3])),
              _n29 = /^[a-z]:/i.test(t[0]);
            if (_e30) return [].concat(_toConsumableArray(t.slice(0, 4)), _toConsumableArray(t.slice(4).map(function (t) {
              return _this5.parse(t);
            })));
            if (_n29) return [t[0]].concat(_toConsumableArray(t.slice(1).map(function (t) {
              return _this5.parse(t);
            })));
          }
          return t.map(function (t) {
            return _this5.parse(t);
          });
        });
        if (this.debug(this.pattern, r), this.set = r.filter(function (t) {
          return -1 === t.indexOf(!1);
        }), this.isWindows) for (var _t32 = 0; _t32 < this.set.length; _t32++) {
          var _e31 = this.set[_t32];
          "" === _e31[0] && "" === _e31[1] && "?" === this.globParts[_t32][2] && "string" == typeof _e31[3] && /^[a-z]:$/i.test(_e31[3]) && (_e31[2] = "?");
        }
        this.debug(this.pattern, this.set);
      }
    }, {
      key: "preprocess",
      value: function preprocess(t) {
        if (this.options.noglobstar) for (var _e32 = 0; _e32 < t.length; _e32++) for (var _n30 = 0; _n30 < t[_e32].length; _n30++) "**" === t[_e32][_n30] && (t[_e32][_n30] = "*");
        var _this$options$optimiz = this.options.optimizationLevel,
          e = _this$options$optimiz === void 0 ? 1 : _this$options$optimiz;
        return e >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : t = e >= 1 ? this.levelOneOptimize(t) : this.adjascentGlobstarOptimize(t), t;
      }
    }, {
      key: "adjascentGlobstarOptimize",
      value: function adjascentGlobstarOptimize(t) {
        return t.map(function (t) {
          var e = -1;
          for (; -1 !== (e = t.indexOf("**", e + 1));) {
            var _n31 = e;
            for (; "**" === t[_n31 + 1];) _n31++;
            _n31 !== e && t.splice(e, _n31 - e);
          }
          return t;
        });
      }
    }, {
      key: "levelOneOptimize",
      value: function levelOneOptimize(t) {
        return t.map(function (t) {
          return 0 === (t = t.reduce(function (t, e) {
            var n = t[t.length - 1];
            return "**" === e && "**" === n ? t : ".." === e && n && ".." !== n && "." !== n && "**" !== n ? (t.pop(), t) : (t.push(e), t);
          }, [])).length ? [""] : t;
        });
      }
    }, {
      key: "levelTwoFileOptimize",
      value: function levelTwoFileOptimize(t) {
        Array.isArray(t) || (t = this.slashSplit(t));
        var e = !1;
        do {
          if (e = !1, !this.preserveMultipleSlashes) {
            for (var _n32 = 1; _n32 < t.length - 1; _n32++) {
              var _r23 = t[_n32];
              1 === _n32 && "" === _r23 && "" === t[0] || "." !== _r23 && "" !== _r23 || (e = !0, t.splice(_n32, 1), _n32--);
            }
            "." !== t[0] || 2 !== t.length || "." !== t[1] && "" !== t[1] || (e = !0, t.pop());
          }
          var _n33 = 0;
          for (; -1 !== (_n33 = t.indexOf("..", _n33 + 1));) {
            var _r24 = t[_n33 - 1];
            _r24 && "." !== _r24 && ".." !== _r24 && "**" !== _r24 && (e = !0, t.splice(_n33 - 1, 2), _n33 -= 2);
          }
        } while (e);
        return 0 === t.length ? [""] : t;
      }
    }, {
      key: "firstPhasePreProcess",
      value: function firstPhasePreProcess(t) {
        var e = !1;
        do {
          e = !1;
          var _iterator7 = _createForOfIteratorHelper(t),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _n34 = _step7.value;
              var _r25 = -1;
              for (; -1 !== (_r25 = _n34.indexOf("**", _r25 + 1));) {
                var _o19 = _r25;
                for (; "**" === _n34[_o19 + 1];) _o19++;
                _o19 > _r25 && _n34.splice(_r25 + 1, _o19 - _r25);
                var _i17 = _n34[_r25 + 1];
                var _s9 = _n34[_r25 + 2],
                  _a5 = _n34[_r25 + 3];
                if (".." !== _i17) continue;
                if (!_s9 || "." === _s9 || ".." === _s9 || !_a5 || "." === _a5 || ".." === _a5) continue;
                e = !0, _n34.splice(_r25, 1);
                var _u7 = _n34.slice(0);
                _u7[_r25] = "**", t.push(_u7), _r25--;
              }
              if (!this.preserveMultipleSlashes) {
                for (var _t33 = 1; _t33 < _n34.length - 1; _t33++) {
                  var _r26 = _n34[_t33];
                  1 === _t33 && "" === _r26 && "" === _n34[0] || "." !== _r26 && "" !== _r26 || (e = !0, _n34.splice(_t33, 1), _t33--);
                }
                "." !== _n34[0] || 2 !== _n34.length || "." !== _n34[1] && "" !== _n34[1] || (e = !0, _n34.pop());
              }
              var _o20 = 0;
              for (; -1 !== (_o20 = _n34.indexOf("..", _o20 + 1));) {
                var _t34 = _n34[_o20 - 1];
                if (_t34 && "." !== _t34 && ".." !== _t34 && "**" !== _t34) {
                  e = !0;
                  var _t35 = 1 === _o20 && "**" === _n34[_o20 + 1] ? ["."] : [];
                  _n34.splice.apply(_n34, [_o20 - 1, 2].concat(_t35)), 0 === _n34.length && _n34.push(""), _o20 -= 2;
                }
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        } while (e);
        return t;
      }
    }, {
      key: "secondPhasePreProcess",
      value: function secondPhasePreProcess(t) {
        for (var _e33 = 0; _e33 < t.length - 1; _e33++) for (var _n35 = _e33 + 1; _n35 < t.length; _n35++) {
          var _r27 = this.partsMatch(t[_e33], t[_n35], !this.preserveMultipleSlashes);
          if (_r27) {
            t[_e33] = [], t[_n35] = _r27;
            break;
          }
        }
        return t.filter(function (t) {
          return t.length;
        });
      }
    }, {
      key: "partsMatch",
      value: function partsMatch(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = 0,
          o = 0,
          i = [],
          s = "";
        for (; r < t.length && o < e.length;) if (t[r] === e[o]) i.push("b" === s ? e[o] : t[r]), r++, o++;else if (n && "**" === t[r] && e[o] === t[r + 1]) i.push(t[r]), r++;else if (n && "**" === e[o] && t[r] === e[o + 1]) i.push(e[o]), o++;else if ("*" !== t[r] || !e[o] || !this.options.dot && e[o].startsWith(".") || "**" === e[o]) {
          if ("*" !== e[o] || !t[r] || !this.options.dot && t[r].startsWith(".") || "**" === t[r]) return !1;
          if ("a" === s) return !1;
          s = "b", i.push(e[o]), r++, o++;
        } else {
          if ("b" === s) return !1;
          s = "a", i.push(t[r]), r++, o++;
        }
        return t.length === e.length && i;
      }
    }, {
      key: "parseNegate",
      value: function parseNegate() {
        if (this.nonegate) return;
        var t = this.pattern;
        var e = !1,
          n = 0;
        for (var _r28 = 0; _r28 < t.length && "!" === t.charAt(_r28); _r28++) e = !e, n++;
        n && (this.pattern = t.slice(n)), this.negate = e;
      }
    }, {
      key: "matchOne",
      value: function matchOne(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        var r = this.options;
        if (this.isWindows) {
          var _n36 = "string" == typeof t[0] && /^[a-z]:$/i.test(t[0]),
            _r29 = !_n36 && "" === t[0] && "" === t[1] && "?" === t[2] && /^[a-z]:$/i.test(t[3]),
            _o21 = "string" == typeof e[0] && /^[a-z]:$/i.test(e[0]),
            _i18 = _r29 ? 3 : _n36 ? 0 : void 0,
            _s0 = !_o21 && "" === e[0] && "" === e[1] && "?" === e[2] && "string" == typeof e[3] && /^[a-z]:$/i.test(e[3]) ? 3 : _o21 ? 0 : void 0;
          if ("number" == typeof _i18 && "number" == typeof _s0) {
            var _ref7 = [t[_i18], e[_s0]],
              _n37 = _ref7[0],
              _r30 = _ref7[1];
            _n37.toLowerCase() === _r30.toLowerCase() && (e[_s0] = _n37, _s0 > _i18 ? e = e.slice(_s0) : _i18 > _s0 && (t = t.slice(_i18)));
          }
        }
        var _this$options$optimiz2 = this.options.optimizationLevel,
          o = _this$options$optimiz2 === void 0 ? 1 : _this$options$optimiz2;
        o >= 2 && (t = this.levelTwoFileOptimize(t)), this.debug("matchOne", this, {
          file: t,
          pattern: e
        }), this.debug("matchOne", t.length, e.length);
        for (var i = 0, s = 0, a = t.length, u = e.length; i < a && s < u; i++, s++) {
          this.debug("matchOne loop");
          var c = e[s],
            l = t[i];
          if (this.debug(e, c, l), !1 === c) return !1;
          if (c === Bt) {
            this.debug("GLOBSTAR", [e, c, l]);
            var h = i,
              p = s + 1;
            if (p === u) {
              for (this.debug("** at the end"); i < a; i++) if ("." === t[i] || ".." === t[i] || !r.dot && "." === t[i].charAt(0)) return !1;
              return !0;
            }
            for (; h < a;) {
              var f = t[h];
              if (this.debug("\nglobstar while", t, h, e, p, f), this.matchOne(t.slice(h), e.slice(p), n)) return this.debug("globstar found match!", h, a, f), !0;
              if ("." === f || ".." === f || !r.dot && "." === f.charAt(0)) {
                this.debug("dot detected!", t, h, e, p);
                break;
              }
              this.debug("globstar swallow a segment, and continue"), h++;
            }
            return !(!n || (this.debug("\n>>> no match, partial?", t, h, e, p), h !== a));
          }
          var _o22 = void 0;
          if ("string" == typeof c ? (_o22 = l === c, this.debug("string match", c, l, _o22)) : (_o22 = c.test(l), this.debug("pattern match", c, l, _o22)), !_o22) return !1;
        }
        if (i === a && s === u) return !0;
        if (i === a) return n;
        if (s === u) return i === a - 1 && "" === t[i];
        throw new Error("wtf?");
      }
    }, {
      key: "braceExpand",
      value: function braceExpand() {
        return Wt(this.pattern, this.options);
      }
    }, {
      key: "parse",
      value: function parse(t) {
        rt(t);
        var e = this.options;
        if ("**" === t) return Bt;
        if ("" === t) return "";
        var n,
          r = null;
        (n = t.match($t)) ? r = e.dot ? It : Ct : (n = t.match(wt)) ? r = (e.nocase ? e.dot ? Pt : At : e.dot ? Nt : xt)(n[1]) : (n = t.match(kt)) ? r = (e.nocase ? e.dot ? Lt : Rt : e.dot ? _t : Mt)(n) : (n = t.match(Ot)) ? r = e.dot ? Tt : Et : (n = t.match(jt)) && (r = St);
        var o = vt.fromGlob(t, this.options).toMMPattern();
        return r && "object" == _typeof(o) && Reflect.defineProperty(o, "test", {
          value: r
        }), o;
      }
    }, {
      key: "makeRe",
      value: function makeRe() {
        if (this.regexp || !1 === this.regexp) return this.regexp;
        var t = this.set;
        if (!t.length) return this.regexp = !1, this.regexp;
        var e = this.options,
          n = e.noglobstar ? "[^/]*?" : e.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?",
          r = new Set(e.nocase ? ["i"] : []);
        var o = t.map(function (t) {
          var e = t.map(function (t) {
            if (t instanceof RegExp) {
              var _iterator8 = _createForOfIteratorHelper(t.flags.split("")),
                _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _e34 = _step8.value;
                  r.add(_e34);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
            return "string" == typeof t ? t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : t === Bt ? Bt : t._src;
          });
          return e.forEach(function (t, r) {
            var o = e[r + 1],
              i = e[r - 1];
            t === Bt && i !== Bt && (void 0 === i ? void 0 !== o && o !== Bt ? e[r + 1] = "(?:\\/|" + n + "\\/)?" + o : e[r] = n : void 0 === o ? e[r - 1] = i + "(?:\\/|" + n + ")?" : o !== Bt && (e[r - 1] = i + "(?:\\/|\\/" + n + "\\/)" + o, e[r + 1] = Bt));
          }), e.filter(function (t) {
            return t !== Bt;
          }).join("/");
        }).join("|");
        var _ref8 = t.length > 1 ? ["(?:", ")"] : ["", ""],
          _ref9 = _slicedToArray(_ref8, 2),
          i = _ref9[0],
          s = _ref9[1];
        o = "^" + i + o + s + "$", this.negate && (o = "^(?!" + o + ").+$");
        try {
          this.regexp = new RegExp(o, _toConsumableArray(r).join(""));
        } catch (t) {
          this.regexp = !1;
        }
        return this.regexp;
      }
    }, {
      key: "slashSplit",
      value: function slashSplit(t) {
        return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^\/]+/.test(t) ? [""].concat(_toConsumableArray(t.split(/\/+/))) : t.split(/\/+/);
      }
    }, {
      key: "match",
      value: function match(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.partial;
        if (this.debug("match", t, this.pattern), this.comment) return !1;
        if (this.empty) return "" === t;
        if ("/" === t && e) return !0;
        var n = this.options;
        this.isWindows && (t = t.split("\\").join("/"));
        var r = this.slashSplit(t);
        this.debug(this.pattern, "split", r);
        var o = this.set;
        this.debug(this.pattern, "set", o);
        var i = r[r.length - 1];
        if (!i) for (var _t36 = r.length - 2; !i && _t36 >= 0; _t36--) i = r[_t36];
        for (var _t37 = 0; _t37 < o.length; _t37++) {
          var _s1 = o[_t37];
          var _a6 = r;
          if (n.matchBase && 1 === _s1.length && (_a6 = [i]), this.matchOne(_a6, _s1, e)) return !!n.flipNegate || !this.negate;
        }
        return !n.flipNegate && this.negate;
      }
    }], [{
      key: "defaults",
      value: function defaults(t) {
        return bt.defaults(t).Minimatch;
      }
    }]);
  }();
  function qt(t) {
    var e = new Error("".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", "Invalid response: ").concat(t.status, " ").concat(t.statusText));
    return e.status = t.status, e.response = t, e;
  }
  function Ht(t, e) {
    var n = e.status;
    if (401 === n && t.digest) return e;
    if (n >= 400) throw qt(e);
    return e;
  }
  function Xt(t, e) {
    return arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
      data: e,
      headers: t.headers ? W(t.headers) : {},
      status: t.status,
      statusText: t.statusText
    } : e;
  }
  bt.AST = vt, bt.Minimatch = Gt, bt.escape = function (t) {
    var _ref0 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      _ref0$windowsPathsNoE = _ref0.windowsPathsNoEscape,
      e = _ref0$windowsPathsNoE === void 0 ? !1 : _ref0$windowsPathsNoE;
    return e ? t.replace(/[?*()[\]]/g, "[$&]") : t.replace(/[?*()[\]\\]/g, "\\$&");
  }, bt.unescape = ut;
  var Zt = (Yt = function Yt(t, e, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    var o = tt({
      url: y(t.remoteURL, f(e)),
      method: "COPY",
      headers: {
        Destination: y(t.remoteURL, f(n)),
        Overwrite: !1 === r.overwrite ? "F" : "T",
        Depth: r.shallow ? "0" : "infinity"
      }
    }, t, r);
    return s = function s(e) {
      Ht(t, e);
    }, (i = Q(o, t)) && i.then || (i = Promise.resolve(i)), s ? i.then(s) : i;
    var i, s;
  }, function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    try {
      return Promise.resolve(Yt.apply(this, t));
    } catch (t) {
      return Promise.reject(t);
    }
  });
  var Yt,
    Kt = n(635),
    Jt = n(829),
    Qt = n.n(Jt),
    te = function (t) {
      return t.Array = "array", t.Object = "object", t.Original = "original", t;
    }(te || {});
  function ee(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : te.Original;
    var r = Qt().get(t, e);
    return "array" === n && !1 === Array.isArray(r) ? [r] : "object" === n && Array.isArray(r) ? r[0] : r;
  }
  function ne(t) {
    return new Promise(function (e) {
      e(function (t) {
        var e = t.multistatus;
        if ("" === e) return {
          multistatus: {
            response: []
          }
        };
        if (!e) throw new Error("Invalid response: No root multistatus found");
        var n = {
          multistatus: Array.isArray(e) ? e[0] : e
        };
        return Qt().set(n, "multistatus.response", ee(n, "multistatus.response", te.Array)), Qt().set(n, "multistatus.response", Qt().get(n, "multistatus.response").map(function (t) {
          return function (t) {
            var e = Object.assign({}, t);
            return e.status ? Qt().set(e, "status", ee(e, "status", te.Object)) : (Qt().set(e, "propstat", ee(e, "propstat", te.Object)), Qt().set(e, "propstat.prop", ee(e, "propstat.prop", te.Object))), e;
          }(t);
        })), n;
      }(new Kt.XMLParser({
        allowBooleanAttributes: !0,
        attributeNamePrefix: "",
        textNodeName: "text",
        ignoreAttributes: !1,
        removeNSPrefix: !0,
        numberParseOptions: {
          hex: !0,
          leadingZeros: !1
        },
        attributeValueProcessor: function attributeValueProcessor(t, e, n) {
          return "true" === e || "false" === e ? "true" === e : e;
        },
        tagValueProcessor: function tagValueProcessor(t, e, n) {
          if (!n.endsWith("propstat.prop.displayname")) return e;
        }
      }).parse(t)));
    });
  }
  function re(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    var _t$getlastmodified = t.getlastmodified,
      r = _t$getlastmodified === void 0 ? null : _t$getlastmodified,
      _t$getcontentlength = t.getcontentlength,
      o = _t$getcontentlength === void 0 ? "0" : _t$getcontentlength,
      _t$resourcetype = t.resourcetype,
      i = _t$resourcetype === void 0 ? null : _t$resourcetype,
      _t$getcontenttype = t.getcontenttype,
      s = _t$getcontenttype === void 0 ? null : _t$getcontenttype,
      _t$getetag = t.getetag,
      a = _t$getetag === void 0 ? null : _t$getetag,
      u = i && "object" == _typeof(i) && void 0 !== i.collection ? "directory" : "file",
      c = {
        filename: e,
        basename: l().basename(e),
        lastmod: r,
        size: parseInt(o, 10),
        type: u,
        etag: "string" == typeof a ? a.replace(/"/g, "") : null
      };
    return "file" === u && (c.mime = s && "string" == typeof s ? s.split(";")[0] : ""), n && (void 0 !== t.displayname && (t.displayname = String(t.displayname)), c.props = t), c;
  }
  function oe(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = null;
    try {
      t.multistatus.response[0].propstat && (r = t.multistatus.response[0]);
    } catch (t) {}
    if (!r) throw new Error("Failed getting item stat: bad response");
    var _r31 = r,
      _r31$propstat = _r31.propstat,
      o = _r31$propstat.prop,
      i = _r31$propstat.status,
      _i$split = i.split(" ", 3),
      _i$split2 = _slicedToArray(_i$split, 3);
      _i$split2[0];
      var a = _i$split2[1],
      u = _i$split2[2],
      c = parseInt(a, 10);
    if (c >= 400) {
      var _t38 = new Error("Invalid response: ".concat(c, " ").concat(u));
      throw _t38.status = c, _t38;
    }
    return re(o, g(e), n);
  }
  function ie(t) {
    switch (String(t)) {
      case "-3":
        return "unlimited";
      case "-2":
      case "-1":
        return "unknown";
      default:
        return parseInt(String(t), 10);
    }
  }
  function se(t, e, n) {
    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  }
  var ae = function (t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      try {
        return Promise.resolve(t.apply(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    };
  }(function (t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var _n$details = n.details,
      r = _n$details === void 0 ? !1 : _n$details,
      o = tt({
        url: y(t.remoteURL, f(e)),
        method: "PROPFIND",
        headers: {
          Accept: "text/plain,application/xml",
          Depth: "0"
        }
      }, t, n);
    return se(Q(o, t), function (n) {
      return Ht(t, n), se(n.text(), function (t) {
        return se(ne(t), function (t) {
          var o = oe(t, e, r);
          return Xt(n, o, r);
        });
      });
    });
  });
  function ue(t, e, n) {
    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  }
  var ce = le(function (t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var r = function (t) {
      if (!t || "/" === t) return [];
      var e = t;
      var n = [];
      do {
        n.push(e), e = l().dirname(e);
      } while (e && "/" !== e);
      return n;
    }(g(e));
    r.sort(function (t, e) {
      return t.length > e.length ? 1 : e.length > t.length ? -1 : 0;
    });
    var o = !1;
    return function (t, e, n) {
      if ("function" == typeof t[fe]) {
        var _l5 = function _l4(t) {
          try {
            for (; !(r = s.next()).done;) if ((t = e(r.value)) && t.then) {
              if (!me(t)) return void t.then(_l5, i || (i = de.bind(null, o = new ge(), 2)));
              t = t.v;
            }
            o ? de(o, 1, t) : o = t;
          } catch (t) {
            de(o || (o = new ge()), 2, t);
          }
        };
        var r,
          o,
          i,
          s = t[fe]();
        if (_l5(), s["return"]) {
          var a = function a(t) {
            try {
              r.done || s["return"]();
            } catch (t) {}
            return t;
          };
          if (o && o.then) return o.then(a, function (t) {
            throw a(t);
          });
          a();
        }
        return o;
      }
      if (!("length" in t)) throw new TypeError("Object is not iterable");
      for (var u = [], c = 0; c < t.length; c++) u.push(t[c]);
      return function (t, e, n) {
        var r,
          o,
          i = -1;
        return function s(a) {
          try {
            for (; ++i < t.length && (!n || !n());) if ((a = e(i)) && a.then) {
              if (!me(a)) return void a.then(s, o || (o = de.bind(null, r = new ge(), 2)));
              a = a.v;
            }
            r ? de(r, 1, a) : r = a;
          } catch (t) {
            de(r || (r = new ge()), 2, t);
          }
        }(), r;
      }(u, function (t) {
        return e(u[t]);
      }, n);
    }(r, function (r) {
      return i = function i() {
        return function (n, o) {
          try {
            var i = ue(ae(t, r), function (t) {
              if ("directory" !== t.type) throw new Error("Path includes a file: ".concat(e));
            });
          } catch (t) {
            return o(t);
          }
          return i && i.then ? i.then(void 0, o) : i;
        }(0, function (e) {
          var i = e;
          return function () {
            if (404 === i.status) return o = !0, pe(ye(t, r, _objectSpread2(_objectSpread2({}, n), {}, {
              recursive: !1
            })));
            throw e;
          }();
        });
      }, (s = function () {
        if (o) return pe(ye(t, r, _objectSpread2(_objectSpread2({}, n), {}, {
          recursive: !1
        })));
      }()) && s.then ? s.then(i) : i();
      var i, s;
    }, function () {
      return !1;
    });
  });
  function le(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      try {
        return Promise.resolve(t.apply(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    };
  }
  function he() {}
  function pe(t, e) {
    if (!e) return t && t.then ? t.then(he) : Promise.resolve();
  }
  var fe = "undefined" != typeof Symbol ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
  function de(t, e, n) {
    if (!t.s) {
      if (n instanceof ge) {
        if (!n.s) return void (n.o = de.bind(null, t, e));
        1 & e && (e = n.s), n = n.v;
      }
      if (n && n.then) return void n.then(de.bind(null, t, e), de.bind(null, t, 2));
      t.s = e, t.v = n;
      var _r32 = t.o;
      _r32 && _r32(t);
    }
  }
  var ge = function () {
    function t() {}
    return t.prototype.then = function (e, n) {
      var r = new t(),
        o = this.s;
      if (o) {
        var _t39 = 1 & o ? e : n;
        if (_t39) {
          try {
            de(r, 1, _t39(this.v));
          } catch (t) {
            de(r, 2, t);
          }
          return r;
        }
        return this;
      }
      return this.o = function (t) {
        try {
          var _o23 = t.v;
          1 & t.s ? de(r, 1, e ? e(_o23) : _o23) : n ? de(r, 1, n(_o23)) : de(r, 2, _o23);
        } catch (t) {
          de(r, 2, t);
        }
      }, r;
    }, t;
  }();
  function me(t) {
    return t instanceof ge && 1 & t.s;
  }
  var ye = le(function (t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!0 === n.recursive) return ce(t, e, n);
    var r = tt({
      url: y(t.remoteURL, (o = f(e), o.endsWith("/") ? o : o + "/")),
      method: "MKCOL"
    }, t, n);
    var o;
    return ue(Q(r, t), function (e) {
      Ht(t, e);
    });
  });
  var ve = n(388),
    be = n.n(ve);
  var we = function (t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
          return Promise.resolve(t.apply(this, e));
        } catch (t) {
          return Promise.reject(t);
        }
      };
    }(function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      var r = {};
      if ("object" == _typeof(n.range) && "number" == typeof n.range.start) {
        var _t40 = "bytes=".concat(n.range.start, "-");
        "number" == typeof n.range.end && (_t40 = "".concat(_t40).concat(n.range.end)), r.Range = _t40;
      }
      var o = tt({
        url: y(t.remoteURL, f(e)),
        method: "GET",
        headers: r
      }, t, n);
      return s = function s(e) {
        if (Ht(t, e), r.Range && 206 !== e.status) {
          var _t41 = new Error("Invalid response code for partial request: ".concat(e.status));
          throw _t41.status = e.status, _t41;
        }
        return n.callback && setTimeout(function () {
          n.callback(e);
        }, 0), e.body;
      }, (i = Q(o, t)) && i.then || (i = Promise.resolve(i)), s ? i.then(s) : i;
      var i, s;
    }),
    xe = function xe() {},
    Ne = function (t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
          return Promise.resolve(t.apply(this, e));
        } catch (t) {
          return Promise.reject(t);
        }
      };
    }(function (t, e, n) {
      n.url || (n.url = y(t.remoteURL, f(e)));
      var r = tt(n, t, {});
      return i = function i(e) {
        return Ht(t, e), e;
      }, (o = Q(r, t)) && o.then || (o = Promise.resolve(o)), i ? o.then(i) : o;
      var o, i;
    }),
    Ae = function (t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
          return Promise.resolve(t.apply(this, e));
        } catch (t) {
          return Promise.reject(t);
        }
      };
    }(function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      var r = tt({
        url: y(t.remoteURL, f(e)),
        method: "DELETE"
      }, t, n);
      return i = function i(e) {
        Ht(t, e);
      }, (o = Q(r, t)) && o.then || (o = Promise.resolve(o)), i ? o.then(i) : o;
      var o, i;
    }),
    Pe = function (t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
          return Promise.resolve(t.apply(this, e));
        } catch (t) {
          return Promise.reject(t);
        }
      };
    }(function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return function (r, o) {
        try {
          var i = (s = ae(t, e, n), a = function a() {
            return !0;
          }, u ? a ? a(s) : s : (s && s.then || (s = Promise.resolve(s)), a ? s.then(a) : s));
        } catch (t) {
          return o(t);
        }
        var s, a, u;
        return i && i.then ? i.then(void 0, o) : i;
      }(0, function (t) {
        if (404 === t.status) return !1;
        throw t;
      });
    });
  function Oe(t, e, n) {
    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  }
  var Ee = function (t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      try {
        return Promise.resolve(t.apply(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    };
  }(function (t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var r = tt({
      url: y(t.remoteURL, f(e), "/"),
      method: "PROPFIND",
      headers: {
        Accept: "text/plain,application/xml",
        Depth: n.deep ? "infinity" : "1"
      }
    }, t, n);
    return Oe(Q(r, t), function (r) {
      return Ht(t, r), Oe(r.text(), function (o) {
        if (!o) throw new Error("Failed parsing directory contents: Empty response");
        return Oe(ne(o), function (o) {
          var i = d(e);
          var s = function (t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            var i = l().join(e, "/"),
              s = t.multistatus.response,
              a = s.map(function (t) {
                var e = function (t) {
                    try {
                      return t.replace(/^https?:\/\/[^\/]+/, "");
                    } catch (t) {
                      throw new u(t, "Failed normalising HREF");
                    }
                  }(t.href),
                  n = t.propstat.prop;
                return re(n, "/" === i ? decodeURIComponent(g(e)) : g(l().relative(decodeURIComponent(i), decodeURIComponent(e))), r);
              });
            return o ? a : a.filter(function (t) {
              return t.basename && ("file" === t.type || t.filename !== n.replace(/\/$/, ""));
            });
          }(o, d(t.remoteBasePath || t.remotePath), i, n.details, n.includeSelf);
          return n.glob && (s = function (t, e) {
            return t.filter(function (t) {
              return bt(t.filename, e, {
                matchBase: !0
              });
            });
          }(s, n.glob)), Xt(r, s, n.details);
        });
      });
    });
  });
  function Te(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      try {
        return Promise.resolve(t.apply(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    };
  }
  var je = Te(function (t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var r = tt({
      url: y(t.remoteURL, f(e)),
      method: "GET",
      headers: {
        Accept: "text/plain"
      },
      transformResponse: [Ie]
    }, t, n);
    return Se(Q(r, t), function (e) {
      return Ht(t, e), Se(e.text(), function (t) {
        return Xt(e, t, n.details);
      });
    });
  });
  function Se(t, e, n) {
    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  }
  var $e = Te(function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      var r = tt({
        url: y(t.remoteURL, f(e)),
        method: "GET"
      }, t, n);
      return Se(Q(r, t), function (e) {
        var r;
        return Ht(t, e), function (t, e) {
          var n = t();
          return n && n.then ? n.then(e) : e();
        }(function () {
          return Se(e.arrayBuffer(), function (t) {
            r = t;
          });
        }, function () {
          return Xt(e, r, n.details);
        });
      });
    }),
    Ce = Te(function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      var _n$format = n.format,
        r = _n$format === void 0 ? "binary" : _n$format;
      if ("binary" !== r && "text" !== r) throw new u({
        info: {
          code: I.InvalidOutputFormat
        }
      }, "Invalid output format: ".concat(r));
      return "text" === r ? je(t, e, n) : $e(t, e, n);
    }),
    Ie = function Ie(t) {
      return t;
    };
  function ke(t) {
    return new Kt.XMLBuilder({
      attributeNamePrefix: "@_",
      format: !0,
      ignoreAttributes: !1,
      suppressEmptyNode: !0
    }).build(Re({
      lockinfo: {
        "@_xmlns:d": "DAV:",
        lockscope: {
          exclusive: {}
        },
        locktype: {
          write: {}
        },
        owner: {
          href: t
        }
      }
    }, "d"));
  }
  function Re(t, e) {
    var n = _objectSpread2({}, t);
    for (var _t42 in n) n.hasOwnProperty(_t42) && (n[_t42] && "object" == _typeof(n[_t42]) && -1 === _t42.indexOf(":") ? (n["".concat(e, ":").concat(_t42)] = Re(n[_t42], e), delete n[_t42]) : !1 === /^@_/.test(_t42) && (n["".concat(e, ":").concat(_t42)] = n[_t42], delete n[_t42]));
    return n;
  }
  function Le(t, e, n) {
    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  }
  function _e(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      try {
        return Promise.resolve(t.apply(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    };
  }
  var Me = _e(function (t, e, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      var o = tt({
        url: y(t.remoteURL, f(e)),
        method: "UNLOCK",
        headers: {
          "Lock-Token": n
        }
      }, t, r);
      return Le(Q(o, t), function (e) {
        if (Ht(t, e), 204 !== e.status && 200 !== e.status) throw qt(e);
      });
    }),
    Ue = _e(function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      var r = n.refreshToken,
        _n$timeout = n.timeout,
        o = _n$timeout === void 0 ? Fe : _n$timeout,
        i = {
          Accept: "text/plain,application/xml",
          Timeout: o
        };
      r && (i.If = r);
      var s = tt({
        url: y(t.remoteURL, f(e)),
        method: "LOCK",
        headers: i,
        data: ke(t.contactHref)
      }, t, n);
      return Le(Q(s, t), function (e) {
        return Ht(t, e), Le(e.text(), function (t) {
          var n = (i = t, new Kt.XMLParser({
              removeNSPrefix: !0,
              parseAttributeValue: !0,
              parseTagValue: !0
            }).parse(i)),
            r = Qt().get(n, "prop.lockdiscovery.activelock.locktoken.href"),
            o = Qt().get(n, "prop.lockdiscovery.activelock.timeout");
          var i;
          if (!r) throw qt(e, "No lock token received: ");
          return {
            token: r,
            serverTimeout: o
          };
        });
      });
    }),
    Fe = "Infinite, Second-4100000000";
  function De(t, e, n) {
    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  }
  var Be = function (t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      try {
        return Promise.resolve(t.apply(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    };
  }(function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var n = e.path || "/",
      r = tt({
        url: y(t.remoteURL, n),
        method: "PROPFIND",
        headers: {
          Accept: "text/plain,application/xml",
          Depth: "0"
        }
      }, t, e);
    return De(Q(r, t), function (n) {
      return Ht(t, n), De(n.text(), function (t) {
        return De(ne(t), function (t) {
          var r = function (t) {
            try {
              var _t$multistatus$respon = _slicedToArray(t.multistatus.response, 1),
                _e35 = _t$multistatus$respon[0],
                _e$propstat$prop = _e35.propstat.prop,
                _n38 = _e$propstat$prop["quota-used-bytes"],
                _r33 = _e$propstat$prop["quota-available-bytes"];
              return void 0 !== _n38 && void 0 !== _r33 ? {
                used: parseInt(String(_n38), 10),
                available: ie(_r33)
              } : null;
            } catch (t) {}
            return null;
          }(t);
          return Xt(n, r, e.details);
        });
      });
    });
  });
  function Ve(t, e, n) {
    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  }
  var We = function (t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
          return Promise.resolve(t.apply(this, e));
        } catch (t) {
          return Promise.reject(t);
        }
      };
    }(function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      var _n$details2 = n.details,
        r = _n$details2 === void 0 ? !1 : _n$details2,
        o = tt({
          url: y(t.remoteURL, f(e)),
          method: "SEARCH",
          headers: {
            Accept: "text/plain,application/xml",
            "Content-Type": t.headers["Content-Type"] || "application/xml; charset=utf-8"
          }
        }, t, n);
      return Ve(Q(o, t), function (n) {
        return Ht(t, n), Ve(n.text(), function (t) {
          return Ve(ne(t), function (t) {
            var o = function (t, e, n) {
              var r = {
                truncated: !1,
                results: []
              };
              return r.truncated = t.multistatus.response.some(function (t) {
                var _split, _t$propstat;
                return "507" === ((_split = (t.status || ((_t$propstat = t.propstat) === null || _t$propstat === void 0 ? void 0 : _t$propstat.status)).split(" ", 3)) === null || _split === void 0 ? void 0 : _split[1]) && t.href.replace(/\/$/, "").endsWith(f(e).replace(/\/$/, ""));
              }), t.multistatus.response.forEach(function (t) {
                if (void 0 === t.propstat) return;
                var e = t.href.split("/").map(decodeURIComponent).join("/");
                r.results.push(re(t.propstat.prop, e, n));
              }), r;
            }(t, e, r);
            return Xt(n, o, r);
          });
        });
      });
    }),
    ze = function (t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
          return Promise.resolve(t.apply(this, e));
        } catch (t) {
          return Promise.reject(t);
        }
      };
    }(function (t, e, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      var o = tt({
        url: y(t.remoteURL, f(e)),
        method: "MOVE",
        headers: {
          Destination: y(t.remoteURL, f(n)),
          Overwrite: !1 === r.overwrite ? "F" : "T"
        }
      }, t, r);
      return s = function s(e) {
        Ht(t, e);
      }, (i = Q(o, t)) && i.then || (i = Promise.resolve(i)), s ? i.then(s) : i;
      var i, s;
    });
  var Ge = n(172);
  var qe = function (t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
          return Promise.resolve(t.apply(this, e));
        } catch (t) {
          return Promise.reject(t);
        }
      };
    }(function (t, e, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      var _r$contentLength = r.contentLength,
        o = _r$contentLength === void 0 ? !0 : _r$contentLength,
        _r$overwrite = r.overwrite,
        i = _r$overwrite === void 0 ? !0 : _r$overwrite,
        s = {
          "Content-Type": "application/octet-stream"
        };
      !1 === o || (s["Content-Length"] = "number" == typeof o ? "".concat(o) : "".concat(function (t) {
        if (H(t)) return t.byteLength;
        if (X(t)) return t.length;
        if ("string" == typeof t) return (0, Ge.d)(t);
        throw new u({
          info: {
            code: I.DataTypeNoLength
          }
        }, "Cannot calculate data length: Invalid type");
      }(n))), i || (s["If-None-Match"] = "*");
      var a = tt({
        url: y(t.remoteURL, f(e)),
        method: "PUT",
        headers: s,
        data: n
      }, t, r);
      return l = function l(e) {
        try {
          Ht(t, e);
        } catch (t) {
          var _e36 = t;
          if (412 !== _e36.status || i) throw _e36;
          return !1;
        }
        return !0;
      }, (c = Q(a, t)) && c.then || (c = Promise.resolve(c)), l ? c.then(l) : c;
      var c, l;
    }),
    He = function (t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        try {
          return Promise.resolve(t.apply(this, e));
        } catch (t) {
          return Promise.reject(t);
        }
      };
    }(function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      var r = tt({
        url: y(t.remoteURL, f(e)),
        method: "OPTIONS"
      }, t, n);
      return i = function i(e) {
        var _e$headers$get, _e$headers$get2;
        try {
          Ht(t, e);
        } catch (t) {
          throw t;
        }
        return {
          compliance: ((_e$headers$get = e.headers.get("DAV")) !== null && _e$headers$get !== void 0 ? _e$headers$get : "").split(",").map(function (t) {
            return t.trim();
          }),
          server: (_e$headers$get2 = e.headers.get("Server")) !== null && _e$headers$get2 !== void 0 ? _e$headers$get2 : ""
        };
      }, (o = Q(r, t)) && o.then || (o = Promise.resolve(o)), i ? o.then(i) : o;
      var o, i;
    });
  function Xe(t, e, n) {
    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t);
  }
  var Ze = Je(function (t, e, n, r, o) {
    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    if (n > r || n < 0) throw new u({
      info: {
        code: I.InvalidUpdateRange
      }
    }, "Invalid update range ".concat(n, " for partial update"));
    var s = {
        "Content-Type": "application/octet-stream",
        "Content-Length": "" + (r - n + 1),
        "Content-Range": "bytes ".concat(n, "-").concat(r, "/*")
      },
      a = tt({
        url: y(t.remoteURL, f(e)),
        method: "PUT",
        headers: s,
        data: o
      }, t, i);
    return Xe(Q(a, t), function (e) {
      Ht(t, e);
    });
  });
  function Ye(t, e) {
    var n = t();
    return n && n.then ? n.then(e) : e(n);
  }
  var Ke = Je(function (t, e, n, r, o) {
    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    if (n > r || n < 0) throw new u({
      info: {
        code: I.InvalidUpdateRange
      }
    }, "Invalid update range ".concat(n, " for partial update"));
    var s = {
        "Content-Type": "application/x-sabredav-partialupdate",
        "Content-Length": "" + (r - n + 1),
        "X-Update-Range": "bytes=".concat(n, "-").concat(r)
      },
      a = tt({
        url: y(t.remoteURL, f(e)),
        method: "PATCH",
        headers: s,
        data: o
      }, t, i);
    return Xe(Q(a, t), function (e) {
      Ht(t, e);
    });
  });
  function Je(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      try {
        return Promise.resolve(t.apply(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    };
  }
  var Qe = Je(function (t, e, n, r, o) {
      var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      return Xe(He(t, e, i), function (s) {
        var a = !1;
        return Ye(function () {
          if (s.compliance.includes("sabredav-partialupdate")) return Xe(Ke(t, e, n, r, o, i), function (t) {
            return a = !0, t;
          });
        }, function (c) {
          var l = !1;
          return a ? c : Ye(function () {
            if (s.server.includes("Apache") && s.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Xe(Ze(t, e, n, r, o, i), function (t) {
              return l = !0, t;
            });
          }, function (t) {
            if (l) return t;
            throw new u({
              info: {
                code: I.NotSupported
              }
            }, "Not supported");
          });
        });
      });
    }),
    tn = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
  function en(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var _e$authType = e.authType,
      n = _e$authType === void 0 ? null : _e$authType,
      r = e.remoteBasePath,
      _e$contactHref = e.contactHref,
      o = _e$contactHref === void 0 ? tn : _e$contactHref,
      i = e.ha1,
      _e$headers = e.headers,
      s = _e$headers === void 0 ? {} : _e$headers,
      a = e.httpAgent,
      c = e.httpsAgent,
      l = e.password,
      h = e.token,
      p = e.username,
      d = e.withCredentials;
    var g = n;
    g || (g = p || l ? C.Password : C.None);
    var v = {
      authType: g,
      remoteBasePath: r,
      contactHref: o,
      ha1: i,
      headers: Object.assign({}, s),
      httpAgent: a,
      httpsAgent: c,
      password: l,
      remotePath: m(t),
      remoteURL: t,
      token: h,
      username: p,
      withCredentials: d
    };
    return k(v, p, l, h, i), {
      copyFile: function copyFile(t, e, n) {
        return Zt(v, t, e, n);
      },
      createDirectory: function createDirectory(t, e) {
        return ye(v, t, e);
      },
      createReadStream: function createReadStream(t, e) {
        return function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          var r = new (be().PassThrough)();
          return we(t, e, n).then(function (t) {
            t.pipe(r);
          })["catch"](function (t) {
            r.emit("error", t);
          }), r;
        }(v, t, e);
      },
      createWriteStream: function createWriteStream(t, e, n) {
        return function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xe;
          var o = new (be().PassThrough)(),
            i = {};
          !1 === n.overwrite && (i["If-None-Match"] = "*");
          var s = tt({
            url: y(t.remoteURL, f(e)),
            method: "PUT",
            headers: i,
            data: o,
            maxRedirects: 0
          }, t, n);
          return Q(s, t).then(function (e) {
            return Ht(t, e);
          }).then(function (t) {
            setTimeout(function () {
              r(t);
            }, 0);
          })["catch"](function (t) {
            o.emit("error", t);
          }), o;
        }(v, t, e, n);
      },
      customRequest: function customRequest(t, e) {
        return Ne(v, t, e);
      },
      deleteFile: function deleteFile(t, e) {
        return Ae(v, t, e);
      },
      exists: function exists(t, e) {
        return Pe(v, t, e);
      },
      getDirectoryContents: function getDirectoryContents(t, e) {
        return Ee(v, t, e);
      },
      getFileContents: function getFileContents(t, e) {
        return Ce(v, t, e);
      },
      getFileDownloadLink: function getFileDownloadLink(t) {
        return function (t, e) {
          var n = y(t.remoteURL, f(e));
          var r = /^https:/i.test(n) ? "https" : "http";
          switch (t.authType) {
            case C.None:
              break;
            case C.Password:
              {
                var _e37 = O(t.headers.Authorization.replace(/^Basic /i, "").trim());
                n = n.replace(/^https?:\/\//, "".concat(r, "://").concat(_e37, "@"));
                break;
              }
            default:
              throw new u({
                info: {
                  code: I.LinkUnsupportedAuthType
                }
              }, "Unsupported auth type for file link: ".concat(t.authType));
          }
          return n;
        }(v, t);
      },
      getFileUploadLink: function getFileUploadLink(t) {
        return function (t, e) {
          var n = "".concat(y(t.remoteURL, f(e)), "?Content-Type=application/octet-stream");
          var r = /^https:/i.test(n) ? "https" : "http";
          switch (t.authType) {
            case C.None:
              break;
            case C.Password:
              {
                var _e38 = O(t.headers.Authorization.replace(/^Basic /i, "").trim());
                n = n.replace(/^https?:\/\//, "".concat(r, "://").concat(_e38, "@"));
                break;
              }
            default:
              throw new u({
                info: {
                  code: I.LinkUnsupportedAuthType
                }
              }, "Unsupported auth type for file link: ".concat(t.authType));
          }
          return n;
        }(v, t);
      },
      getHeaders: function getHeaders() {
        return Object.assign({}, v.headers);
      },
      getQuota: function getQuota(t) {
        return Be(v, t);
      },
      lock: function lock(t, e) {
        return Ue(v, t, e);
      },
      moveFile: function moveFile(t, e, n) {
        return ze(v, t, e, n);
      },
      putFileContents: function putFileContents(t, e, n) {
        return qe(v, t, e, n);
      },
      partialUpdateFileContents: function partialUpdateFileContents(t, e, n, r, o) {
        return Qe(v, t, e, n, r, o);
      },
      getDAVCompliance: function getDAVCompliance(t) {
        return He(v, t);
      },
      search: function search(t, e) {
        return We(v, t, e);
      },
      setHeaders: function setHeaders(t) {
        v.headers = Object.assign({}, t);
      },
      stat: function stat(t, e) {
        return ae(v, t, e);
      },
      unlock: function unlock(t, e, n) {
        return Me(v, t, e, n);
      }
    };
  }
  r.hT;
    r.O4;
    r.Kd;
    r.YK;
    var an = r.UU;
    r.Gu;
    r.ky;
    r.h4;
    r.ch;
    r.hq;
    r.i5;

  Lampa.Platform.tv();
  function add() {
    var client = an("https://some-server.org", {
      authType: AuthType.Digest,
      username: "user",
      password: "pass"
    });
    client.getDirectoryContents("/").then(function (data) {
      console.log(data);
    })["catch"](function (err) {
      console.error(err);
    });
  }
  function startPlugin() {
    window.plugin_webdav = true;
    if (window.appready) add();else {
      Lampa.Listener.follow("app", function (e) {
        if (e.type === "ready") add();
      });
    }
  }
  if (!window.plugin_webdav) startPlugin();

})();
