var PorcupineWeb = (function (exports) {
  'use strict';

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }

  function _arrayLikeToArray$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray$3(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest();
  }

  function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$1(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _typeof$2(o) {
    "@babel/helpers - typeof";

    return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$2(o);
  }

  function _toPrimitive$1(input, hint) {
    if (_typeof$2(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof$2(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey$1(arg) {
    var key = _toPrimitive$1(arg, "string");
    return _typeof$2(key) === "symbol" ? key : String(key);
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
    }
  }
  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey$1(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var regeneratorRuntime$2 = {exports: {}};

  var _typeof$1 = {exports: {}};

  _typeof$1.exports;

  (function (module) {
  	function _typeof(o) {
  	  "@babel/helpers - typeof";

  	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
  	    return typeof o;
  	  } : function (o) {
  	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
  	}
  	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (_typeof$1));

  var _typeofExports = _typeof$1.exports;

  regeneratorRuntime$2.exports;

  (function (module) {
  	var _typeof = _typeofExports["default"];
  	function _regeneratorRuntime() {
  	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
  	    return e;
  	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  	  var t,
  	    e = {},
  	    r = Object.prototype,
  	    n = r.hasOwnProperty,
  	    o = Object.defineProperty || function (t, e, r) {
  	      t[e] = r.value;
  	    },
  	    i = "function" == typeof Symbol ? Symbol : {},
  	    a = i.iterator || "@@iterator",
  	    c = i.asyncIterator || "@@asyncIterator",
  	    u = i.toStringTag || "@@toStringTag";
  	  function define(t, e, r) {
  	    return Object.defineProperty(t, e, {
  	      value: r,
  	      enumerable: !0,
  	      configurable: !0,
  	      writable: !0
  	    }), t[e];
  	  }
  	  try {
  	    define({}, "");
  	  } catch (t) {
  	    define = function define(t, e, r) {
  	      return t[e] = r;
  	    };
  	  }
  	  function wrap(t, e, r, n) {
  	    var i = e && e.prototype instanceof Generator ? e : Generator,
  	      a = Object.create(i.prototype),
  	      c = new Context(n || []);
  	    return o(a, "_invoke", {
  	      value: makeInvokeMethod(t, r, c)
  	    }), a;
  	  }
  	  function tryCatch(t, e, r) {
  	    try {
  	      return {
  	        type: "normal",
  	        arg: t.call(e, r)
  	      };
  	    } catch (t) {
  	      return {
  	        type: "throw",
  	        arg: t
  	      };
  	    }
  	  }
  	  e.wrap = wrap;
  	  var h = "suspendedStart",
  	    l = "suspendedYield",
  	    f = "executing",
  	    s = "completed",
  	    y = {};
  	  function Generator() {}
  	  function GeneratorFunction() {}
  	  function GeneratorFunctionPrototype() {}
  	  var p = {};
  	  define(p, a, function () {
  	    return this;
  	  });
  	  var d = Object.getPrototypeOf,
  	    v = d && d(d(values([])));
  	  v && v !== r && n.call(v, a) && (p = v);
  	  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  	  function defineIteratorMethods(t) {
  	    ["next", "throw", "return"].forEach(function (e) {
  	      define(t, e, function (t) {
  	        return this._invoke(e, t);
  	      });
  	    });
  	  }
  	  function AsyncIterator(t, e) {
  	    function invoke(r, o, i, a) {
  	      var c = tryCatch(t[r], t, o);
  	      if ("throw" !== c.type) {
  	        var u = c.arg,
  	          h = u.value;
  	        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
  	          invoke("next", t, i, a);
  	        }, function (t) {
  	          invoke("throw", t, i, a);
  	        }) : e.resolve(h).then(function (t) {
  	          u.value = t, i(u);
  	        }, function (t) {
  	          return invoke("throw", t, i, a);
  	        });
  	      }
  	      a(c.arg);
  	    }
  	    var r;
  	    o(this, "_invoke", {
  	      value: function value(t, n) {
  	        function callInvokeWithMethodAndArg() {
  	          return new e(function (e, r) {
  	            invoke(t, n, e, r);
  	          });
  	        }
  	        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
  	      }
  	    });
  	  }
  	  function makeInvokeMethod(e, r, n) {
  	    var o = h;
  	    return function (i, a) {
  	      if (o === f) throw new Error("Generator is already running");
  	      if (o === s) {
  	        if ("throw" === i) throw a;
  	        return {
  	          value: t,
  	          done: !0
  	        };
  	      }
  	      for (n.method = i, n.arg = a;;) {
  	        var c = n.delegate;
  	        if (c) {
  	          var u = maybeInvokeDelegate(c, n);
  	          if (u) {
  	            if (u === y) continue;
  	            return u;
  	          }
  	        }
  	        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
  	          if (o === h) throw o = s, n.arg;
  	          n.dispatchException(n.arg);
  	        } else "return" === n.method && n.abrupt("return", n.arg);
  	        o = f;
  	        var p = tryCatch(e, r, n);
  	        if ("normal" === p.type) {
  	          if (o = n.done ? s : l, p.arg === y) continue;
  	          return {
  	            value: p.arg,
  	            done: n.done
  	          };
  	        }
  	        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
  	      }
  	    };
  	  }
  	  function maybeInvokeDelegate(e, r) {
  	    var n = r.method,
  	      o = e.iterator[n];
  	    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
  	    var i = tryCatch(o, e.iterator, r.arg);
  	    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
  	    var a = i.arg;
  	    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  	  }
  	  function pushTryEntry(t) {
  	    var e = {
  	      tryLoc: t[0]
  	    };
  	    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  	  }
  	  function resetTryEntry(t) {
  	    var e = t.completion || {};
  	    e.type = "normal", delete e.arg, t.completion = e;
  	  }
  	  function Context(t) {
  	    this.tryEntries = [{
  	      tryLoc: "root"
  	    }], t.forEach(pushTryEntry, this), this.reset(!0);
  	  }
  	  function values(e) {
  	    if (e || "" === e) {
  	      var r = e[a];
  	      if (r) return r.call(e);
  	      if ("function" == typeof e.next) return e;
  	      if (!isNaN(e.length)) {
  	        var o = -1,
  	          i = function next() {
  	            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
  	            return next.value = t, next.done = !0, next;
  	          };
  	        return i.next = i;
  	      }
  	    }
  	    throw new TypeError(_typeof(e) + " is not iterable");
  	  }
  	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
  	    value: GeneratorFunctionPrototype,
  	    configurable: !0
  	  }), o(GeneratorFunctionPrototype, "constructor", {
  	    value: GeneratorFunction,
  	    configurable: !0
  	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
  	    var e = "function" == typeof t && t.constructor;
  	    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  	  }, e.mark = function (t) {
  	    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  	  }, e.awrap = function (t) {
  	    return {
  	      __await: t
  	    };
  	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
  	    return this;
  	  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
  	    void 0 === i && (i = Promise);
  	    var a = new AsyncIterator(wrap(t, r, n, o), i);
  	    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
  	      return t.done ? t.value : a.next();
  	    });
  	  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
  	    return this;
  	  }), define(g, "toString", function () {
  	    return "[object Generator]";
  	  }), e.keys = function (t) {
  	    var e = Object(t),
  	      r = [];
  	    for (var n in e) r.push(n);
  	    return r.reverse(), function next() {
  	      for (; r.length;) {
  	        var t = r.pop();
  	        if (t in e) return next.value = t, next.done = !1, next;
  	      }
  	      return next.done = !0, next;
  	    };
  	  }, e.values = values, Context.prototype = {
  	    constructor: Context,
  	    reset: function reset(e) {
  	      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
  	    },
  	    stop: function stop() {
  	      this.done = !0;
  	      var t = this.tryEntries[0].completion;
  	      if ("throw" === t.type) throw t.arg;
  	      return this.rval;
  	    },
  	    dispatchException: function dispatchException(e) {
  	      if (this.done) throw e;
  	      var r = this;
  	      function handle(n, o) {
  	        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
  	      }
  	      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
  	        var i = this.tryEntries[o],
  	          a = i.completion;
  	        if ("root" === i.tryLoc) return handle("end");
  	        if (i.tryLoc <= this.prev) {
  	          var c = n.call(i, "catchLoc"),
  	            u = n.call(i, "finallyLoc");
  	          if (c && u) {
  	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
  	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
  	          } else if (c) {
  	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
  	          } else {
  	            if (!u) throw new Error("try statement without catch or finally");
  	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
  	          }
  	        }
  	      }
  	    },
  	    abrupt: function abrupt(t, e) {
  	      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
  	        var o = this.tryEntries[r];
  	        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
  	          var i = o;
  	          break;
  	        }
  	      }
  	      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
  	      var a = i ? i.completion : {};
  	      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
  	    },
  	    complete: function complete(t, e) {
  	      if ("throw" === t.type) throw t.arg;
  	      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
  	    },
  	    finish: function finish(t) {
  	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
  	        var r = this.tryEntries[e];
  	        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
  	      }
  	    },
  	    "catch": function _catch(t) {
  	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
  	        var r = this.tryEntries[e];
  	        if (r.tryLoc === t) {
  	          var n = r.completion;
  	          if ("throw" === n.type) {
  	            var o = n.arg;
  	            resetTryEntry(r);
  	          }
  	          return o;
  	        }
  	      }
  	      throw new Error("illegal catch attempt");
  	    },
  	    delegateYield: function delegateYield(e, r, n) {
  	      return this.delegate = {
  	        iterator: values(e),
  	        resultName: r,
  	        nextLoc: n
  	      }, "next" === this.method && (this.arg = t), y;
  	    }
  	  }, e;
  	}
  	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (regeneratorRuntime$2));

  var regeneratorRuntimeExports = regeneratorRuntime$2.exports;

  // TODO(Babel 8): Remove this file.

  var runtime$1 = regeneratorRuntimeExports();
  var regenerator$1 = runtime$1;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime$1;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime$1;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime$1);
    }
  }

  var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator$1);

  const E_CANCELED = new Error('request for lock canceled');

  var __awaiter$2 = function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  class Semaphore {
      constructor(_value, _cancelError = E_CANCELED) {
          this._value = _value;
          this._cancelError = _cancelError;
          this._weightedQueues = [];
          this._weightedWaiters = [];
      }
      acquire(weight = 1) {
          if (weight <= 0)
              throw new Error(`invalid weight ${weight}: must be positive`);
          return new Promise((resolve, reject) => {
              if (!this._weightedQueues[weight - 1])
                  this._weightedQueues[weight - 1] = [];
              this._weightedQueues[weight - 1].push({ resolve, reject });
              this._dispatch();
          });
      }
      runExclusive(callback, weight = 1) {
          return __awaiter$2(this, void 0, void 0, function* () {
              const [value, release] = yield this.acquire(weight);
              try {
                  return yield callback(value);
              }
              finally {
                  release();
              }
          });
      }
      waitForUnlock(weight = 1) {
          if (weight <= 0)
              throw new Error(`invalid weight ${weight}: must be positive`);
          return new Promise((resolve) => {
              if (!this._weightedWaiters[weight - 1])
                  this._weightedWaiters[weight - 1] = [];
              this._weightedWaiters[weight - 1].push(resolve);
              this._dispatch();
          });
      }
      isLocked() {
          return this._value <= 0;
      }
      getValue() {
          return this._value;
      }
      setValue(value) {
          this._value = value;
          this._dispatch();
      }
      release(weight = 1) {
          if (weight <= 0)
              throw new Error(`invalid weight ${weight}: must be positive`);
          this._value += weight;
          this._dispatch();
      }
      cancel() {
          this._weightedQueues.forEach((queue) => queue.forEach((entry) => entry.reject(this._cancelError)));
          this._weightedQueues = [];
      }
      _dispatch() {
          var _a;
          for (let weight = this._value; weight > 0; weight--) {
              const queueEntry = (_a = this._weightedQueues[weight - 1]) === null || _a === void 0 ? void 0 : _a.shift();
              if (!queueEntry)
                  continue;
              const previousValue = this._value;
              const previousWeight = weight;
              this._value -= weight;
              weight = this._value + 1;
              queueEntry.resolve([previousValue, this._newReleaser(previousWeight)]);
          }
          this._drainUnlockWaiters();
      }
      _newReleaser(weight) {
          let called = false;
          return () => {
              if (called)
                  return;
              called = true;
              this.release(weight);
          };
      }
      _drainUnlockWaiters() {
          for (let weight = this._value; weight > 0; weight--) {
              if (!this._weightedWaiters[weight - 1])
                  continue;
              this._weightedWaiters[weight - 1].forEach((waiter) => waiter());
              this._weightedWaiters[weight - 1] = [];
          }
      }
  }

  var __awaiter$1 = function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  class Mutex {
      constructor(cancelError) {
          this._semaphore = new Semaphore(1, cancelError);
      }
      acquire() {
          return __awaiter$1(this, void 0, void 0, function* () {
              const [, releaser] = yield this._semaphore.acquire();
              return releaser;
          });
      }
      runExclusive(callback) {
          return this._semaphore.runExclusive(() => callback());
      }
      isLocked() {
          return this._semaphore.isLocked();
      }
      waitForUnlock() {
          return this._semaphore.waitForUnlock();
      }
      release() {
          if (this._semaphore.isLocked())
              this._semaphore.release();
      }
      cancel() {
          return this._semaphore.cancel();
      }
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var regeneratorRuntime$1 = createCommonjsModule(function (module) {
  var _typeof = _typeof_1["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // TODO(Babel 8): Remove this file.

  var runtime = regeneratorRuntime$1();
  var regenerator = runtime;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }

  const t=new WeakMap;function e(t,e){return new Proxy(t,{get:(t,r)=>e(t[r])})}class r{constructor(){this.value=void 0,this.exports=null;}getState(){return this.exports.asyncify_get_state()}assertNoneState(){let t=this.getState();if(0!==t)throw new Error(`Invalid async state ${t}, expected 0.`)}wrapImportFn(t){return (...e)=>{if(2===this.getState())return this.exports.asyncify_stop_rewind(),this.value;this.assertNoneState();let r=t(...e);if(!(s=r)||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof s.then)return r;var s;this.exports.asyncify_start_unwind(16),this.value=r;}}wrapModuleImports(t){return e(t,t=>"function"==typeof t?this.wrapImportFn(t):t)}wrapImports(t){if(void 0!==t)return e(t,(t=Object.create(null))=>this.wrapModuleImports(t))}wrapExportFn(e){let r=t.get(e);return void 0!==r||(r=async(...t)=>{this.assertNoneState();let r=e(...t);for(;1===this.getState();)this.exports.asyncify_stop_unwind(),this.value=await this.value,this.assertNoneState(),this.exports.asyncify_start_rewind(16),r=e();return this.assertNoneState(),r},t.set(e,r)),r}wrapExports(e){let r=Object.create(null);for(let t in e){let s=e[t];"function"!=typeof s||t.startsWith("asyncify_")||(s=this.wrapExportFn(s)),Object.defineProperty(r,t,{enumerable:!0,value:s});}return t.set(e,r),r}init(t,e){const{exports:r}=t,n=r.memory||e.env&&e.env.memory;new Int32Array(n.buffer,16).set([24,1024]),this.exports=this.wrapExports(r),Object.setPrototypeOf(t,s.prototype);}}class s extends WebAssembly.Instance{constructor(t,e){let s=new r;super(t,s.wrapImports(e)),s.init(this,e);}get exports(){return t.get(super.exports)}}async function n(t,e){let s=new r,n=await WebAssembly.instantiate(t,s.wrapImports(e));return s.init(n instanceof WebAssembly.Instance?n:n.instance,e),n}async function a(t,e){let s=new r,n=await WebAssembly.instantiateStreaming(t,s.wrapImports(e));return s.init(n.instance,e),n}Object.defineProperty(s.prototype,"exports",{enumerable:!0});

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf$1(o, p);
  }

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
  }

  function _possibleConstructorReturn$1(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized$1(self);
  }

  function _getPrototypeOf$1(o) {
    _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$1(o);
  }

  function ownKeys$1$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  /*
    Copyright 2022 Picovoice Inc.

    You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
    file accompanying this source.

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
    an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
  */
  /**
   * BasePvFile Class
   * This class mocks the file system using in-memory storage.
   */
  var PvFile = /*#__PURE__*/function () {
    function PvFile() {
      _classCallCheck(this, PvFile);
      _defineProperty(this, "_path", void 0);
      _defineProperty(this, "_meta", void 0);
    }
    _createClass(PvFile, [{
      key: "meta",
      get:
      /**
       * Getter for file's meta information.
       */
      function get() {
        if (this._meta === undefined) {
          return undefined;
        }
        return _objectSpread$1$1({
          version: 0
        }, this._meta);
      }
      /**
       * Get the file pointer from the _filePtrs map.
       * @param ptr The pointer to BasePvFile instance to get from the map.
       * @returns BasePvFile returns the current file instance related to ptr.
       */
    }], [{
      key: "getPtr",
      value: function getPtr(ptr) {
        return PvFile._filePtrs.get(ptr);
      }
      /**
       * Saves the BasePvFile instance to the map with an associated ptr.
       * @param ptr The file pointer to save as the key.
       * @param instance The BasePvFile instance to save as the value.
       */
    }, {
      key: "setPtr",
      value: function setPtr(ptr, instance) {
        PvFile._filePtrs.set(ptr, instance);
      }
      /**
       * Removes the ptr from the _filePtrs map.
       * @param ptr The file pointer to remove.
       */
    }, {
      key: "removePtr",
      value: function removePtr(ptr) {
        PvFile._filePtrs["delete"](ptr);
      }
    }]);
    return PvFile;
  }();
  _defineProperty(PvFile, "_filePtrs", new Map());

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }
  function _isNativeReflectConstruct$1$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  /**
   * Indexed DB configurations
   */
  var DB_NAME = 'pv_db';
  var PV_FILE_STORE = 'pv_file';
  var DB_VERSION = 3;
  /**
   * Helper to get IndexedDB.
   */
  function getDB() {
    return new Promise(function (resolve, reject) {
      var request = self.indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = function () {
        reject(request.error);
      };
      request.onsuccess = function () {
        resolve(request.result);
      };
      request.onupgradeneeded = function () {
        if (!request.result.objectStoreNames.contains(PV_FILE_STORE)) {
          request.result.createObjectStore(PV_FILE_STORE);
        }
      };
    });
  }
  /**
   * PvFile Class
   * This class mocks the file system using IndexedDB.
   * IndexedDB is REQUIRED.
   */
  var PvFileIDB = /*#__PURE__*/function (_PvFile) {
    _inherits$1(PvFileIDB, _PvFile);
    var _super = _createSuper$1(PvFileIDB);
    /**
     * Constructor of PvFile instance.
     * @param path The path of a file.
     * @param meta The metadata of the file.
     * @param db The db instance currently related to the opened file.
     * @param mode The mode - either readonly or readwrite.
     */
    function PvFileIDB(path, meta, db, mode) {
      var _this;
      _classCallCheck(this, PvFileIDB);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized$1(_this), "_pageSize", 65536);
      _defineProperty(_assertThisInitialized$1(_this), "_db", void 0);
      _defineProperty(_assertThisInitialized$1(_this), "_mode", void 0);
      _defineProperty(_assertThisInitialized$1(_this), "_pagePtr", 0);
      _defineProperty(_assertThisInitialized$1(_this), "_pageOffset", 0);
      _this._path = path;
      _this._meta = meta;
      _this._db = db;
      _this._mode = mode;
      return _this;
    }
    /**
     * Opens a file and return an instance of PvFile. A file can be opened in readonly or readwrite mode
     * which follows IndexedDB standard of reading and writing values to the db.
     * The file is stored as an Uint8Array separated by pages.
     * NOTE: The key exactly matching the path expects a value of type PvFileMeta.
     * @param path The path of the file to open stored in IndexedDB.
     * @param mode A string, if it contains 'r' in the string, it will open the file in readonly mode, else it
     * will open in readwrite mode.
     * @returns Promise<PvFile> An instance of PvFile.
     * @throws Error if IndexedDB is not supported.
     */
    _createClass(PvFileIDB, [{
      key: "close",
      value:
      /**
       * Closes the db connection. Any other instance function call will not work once
       * the db is closed.
       */
      function () {
        var _close = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          return regenerator.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this._db.close();
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function close() {
          return _close.apply(this, arguments);
        }
        return close;
      }()
      /**
       * Reads a total of 'count' elements, each with a size of 'size' bytes from the current position in the stream.
       * Moves the stream by the amount of elements read.
       * If the last few bytes is smaller than 'size' it will not read (similar to fread) the bytes.
       * @param size The element size.
       * @param count The number of elements to read.
       * @returns Promise<Uint8Array> A Uint8Array with the elements copied to it.
       * @throws Error if file doesn't exist or if EOF.
       */
    }, {
      key: "read",
      value: function () {
        var _read = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(size, count) {
          var _this2 = this;
          return regenerator.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  if (!_this2.exists()) {
                    reject(new Error("'".concat(_this2._path, "' doesn't exist.")));
                    return;
                  }
                  if (_this2._isEOF) {
                    var err = new Error("EOF");
                    err.name = "EndOfFile";
                    reject(err);
                    return;
                  }
                  var copied = 0;
                  var maxToCopy = Math.min(size * count, _this2._meta.size);
                  var totalElems = maxToCopy - maxToCopy % size;
                  var buffer = new Uint8Array(totalElems);
                  var keyRange = IDBKeyRange.bound("".concat(_this2._path, "-").concat(PvFileIDB.createPage(_this2._pagePtr)), "".concat(_this2._path, "-").concat(PvFileIDB.createPage(_this2._meta.numPages)));
                  var store = _this2._store;
                  var req = store.openCursor(keyRange);
                  req.onsuccess = function () {
                    var cursor = req.result;
                    if (!cursor || _this2._isEOF) {
                      return;
                    }
                    var toCopy = Math.min(totalElems - copied, cursor.value.length - _this2._pageOffset);
                    buffer.set(cursor.value.slice(_this2._pageOffset, _this2._pageOffset + toCopy), copied);
                    copied += toCopy;
                    _this2._pageOffset += toCopy;
                    if (_this2._pageOffset === _this2._pageSize) {
                      _this2._pagePtr += 1;
                      _this2._pageOffset = 0;
                    }
                    if (copied < totalElems) {
                      cursor["continue"]();
                    }
                  };
                  store.transaction.onerror = function () {
                    reject(store.transaction.error);
                  };
                  store.transaction.oncomplete = function () {
                    resolve(buffer.slice(0, copied));
                  };
                }));
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function read(_x, _x2) {
          return _read.apply(this, arguments);
        }
        return read;
      }()
      /**
       * Writes an Uint8Array to IndexedDB seperated by pages.
       * @param content The bytes to save.
       * @param version Version of the file.
       */
    }, {
      key: "write",
      value: function () {
        var _write = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(content) {
          var _this3 = this;
          var version,
            _args4 = arguments;
          return regenerator.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                version = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 1;
                return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(resolve, reject) {
                    var store, getCurrentPage, last, newContent, newSize, newMeta, pages, i, keyRange;
                    return regenerator.wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!(_this3._mode === "readonly")) {
                            _context3.next = 3;
                            break;
                          }
                          reject(new Error("Instance is readonly mode only."));
                          return _context3.abrupt("return");
                        case 3:
                          if (!(typeof version !== "number" && version <= 0)) {
                            _context3.next = 6;
                            break;
                          }
                          reject(new Error("Version should be a positive number"));
                          return _context3.abrupt("return");
                        case 6:
                          store = _this3._store;
                          getCurrentPage = function getCurrentPage() {
                            return new Promise(function (res) {
                              var req = store.get("".concat(_this3._path, "-").concat(PvFileIDB.createPage(_this3._pagePtr)));
                              req.onsuccess = function () {
                                if (req.result !== undefined) {
                                  res(req.result.slice(0, _this3._pageOffset));
                                } else {
                                  res(new Uint8Array(0));
                                }
                              };
                            });
                          };
                          _context3.next = 10;
                          return getCurrentPage();
                        case 10:
                          last = _context3.sent;
                          newContent = new Uint8Array(last.length + content.length);
                          newContent.set(last);
                          newContent.set(content, last.length);
                          newSize = _this3._pagePtr * _this3._pageSize + newContent.length;
                          newMeta = {
                            size: newSize,
                            numPages: Math.ceil(newSize / _this3._pageSize),
                            version: version
                          };
                          store.put(newMeta, _this3._path);
                          pages = Math.ceil(newContent.length / _this3._pageSize);
                          for (i = 0; i < pages; i++) {
                            store.put(newContent.slice(i * _this3._pageSize, (i + 1) * _this3._pageSize), "".concat(_this3._path, "-").concat(PvFileIDB.createPage(_this3._pagePtr + i)));
                          }
                          if (_this3.exists() && newMeta.numPages < _this3._meta.numPages) {
                            keyRange = IDBKeyRange.bound("".concat(_this3._path, "-").concat(PvFileIDB.createPage(newMeta.numPages)), "".concat(_this3._path, "-").concat(PvFileIDB.createPage(_this3._meta.numPages)), true);
                            store["delete"](keyRange);
                          }
                          store.transaction.onerror = function () {
                            reject(store.transaction.error);
                          };
                          store.transaction.oncomplete = function () {
                            _this3._meta = newMeta;
                            _this3.seek(0, 2);
                            resolve();
                          };
                        case 22:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3);
                  }));
                  return function (_x4, _x5) {
                    return _ref.apply(this, arguments);
                  };
                }()));
              case 2:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        function write(_x3) {
          return _write.apply(this, arguments);
        }
        return write;
      }()
      /**
       * Moves the current position in the stream by 'offset' elements at 'whence' position.
       * @param offset The number of bytes to move.
       * @param whence One of:
       *  - 0: moves position from beginning of file.
       *  - 1: moves position from current position in the stream.
       *  - 2: moves position from the last element of the file.
       * @throws Error if file doesn't exist or if EOF.
       */
    }, {
      key: "seek",
      value: function seek(offset, whence) {
        if (!this.exists() && this._mode === "readonly") {
          throw new Error("'".concat(this._path, "' doesn't exist."));
        }
        if (offset < 0) {
          var err = new Error("EOF");
          err.name = "EndOfFile";
          throw err;
        }
        var newOffset;
        if (whence === 0) {
          newOffset = Math.min(offset, this._meta.size);
        } else if (whence === 1) {
          var currentOffset = this._pageSize * this._pagePtr + this._pageOffset;
          newOffset = Math.min(currentOffset + offset, this._meta.size);
        } else if (whence === 2) {
          newOffset = Math.min(this._meta.size + offset, this._meta.size);
        } else {
          throw new Error("Invalid operation: ".concat(whence, "."));
        }
        this._pageOffset = newOffset % this._pageSize;
        this._pagePtr = Math.floor(newOffset / this._pageSize);
      }
      /**
       * Returns the number of bytes from the beginning of the file.
       */
    }, {
      key: "tell",
      value: function tell() {
        if (!this.exists()) {
          return -1;
        }
        return this._pagePtr * this._pageSize + this._pageOffset;
      }
      /**
       * Removes a file and any related pages given the path.
       */
    }, {
      key: "remove",
      value: function () {
        var _remove = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6() {
          var _this4 = this;
          return regenerator.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(resolve, reject) {
                    var numPages, keyRange, store, req;
                    return regenerator.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          numPages = _this4._meta.numPages;
                          keyRange = IDBKeyRange.bound(_this4._path, "".concat(_this4._path, "-").concat(PvFileIDB.createPage(numPages)));
                          store = _this4._store;
                          req = store["delete"](keyRange);
                          req.onerror = function () {
                            reject(req.error);
                          };
                          req.onsuccess = function () {
                            _this4._meta = undefined;
                            _this4._pageOffset = 0;
                            _this4._pagePtr = 0;
                            resolve();
                          };
                        case 6:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee5);
                  }));
                  return function (_x6, _x7) {
                    return _ref2.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        function remove() {
          return _remove.apply(this, arguments);
        }
        return remove;
      }()
      /**
       * Checks if the following path exists.
       */
    }, {
      key: "exists",
      value: function exists() {
        return this._meta !== undefined;
      }
      /**
       * Checks if the current stream is EOF.
       */
    }, {
      key: "_isEOF",
      get: function get() {
        return this._pagePtr >= this._meta.numPages - 1 && this._pageOffset >= this._meta.size % this._pageSize;
      }
      /**
       * Creates an index which as a key to save page data to IndexedDB.
       * This formats the file into 0000, 0001, 0002 ...
       * @param page The page number to format.
       */
    }, {
      key: "_store",
      get:
      /**
       * Gets a objectStore instance from the PvFile instance.
       */
      function get() {
        return this._db.transaction(PV_FILE_STORE, this._mode).objectStore(PV_FILE_STORE);
      }
    }], [{
      key: "open",
      value: function open(path, mode) {
        if (!self.indexedDB) {
          var error = new Error("IndexedDB is not supported");
          error.name = "IndexedDBNotSupported";
          throw error;
        }
        return new Promise( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7(resolve, reject) {
            var db, req, _error2;
            return regenerator.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return getDB();
                case 3:
                  db = _context7.sent;
                  req = db.transaction(PV_FILE_STORE, "readwrite").objectStore(PV_FILE_STORE).get(path);
                  req.onerror = function () {
                    reject(req.error);
                  };
                  req.onsuccess = function () {
                    var meta = req.result;
                    var dbMode = mode.includes('r') ? "readonly" : "readwrite";
                    if (meta === undefined && dbMode === "readonly") {
                      var _error = new Error("'".concat(path, "' doesn't exist."));
                      _error.name = "FileNotExists";
                      reject(_error);
                      return;
                    }
                    var fileIDB = new PvFileIDB(path, meta, db, dbMode);
                    if (mode.includes('a')) {
                      fileIDB.seek(0, 2);
                    }
                    resolve(fileIDB);
                  };
                  _context7.next = 12;
                  break;
                case 9:
                  _context7.prev = 9;
                  _context7.t0 = _context7["catch"](0);
                  if (_context7.t0.name === "InvalidStateError") {
                    _error2 = new Error("IndexedDB is not supported");
                    _error2.name = "IndexedDBNotSupported";
                    reject(_error2);
                  } else {
                    reject(_context7.t0);
                  }
                case 12:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, null, [[0, 9]]);
          }));
          return function (_x8, _x9) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    }, {
      key: "createPage",
      value: function createPage(page) {
        return ("000" + page).slice(-4);
      }
    }]);
    return PvFileIDB;
  }(PvFile);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }
  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  /**
   * PvFileMem Class
   * This class mocks the file system using in-memory storage.
   */
  var PvFileMem = /*#__PURE__*/function (_PvFile) {
    _inherits$1(PvFileMem, _PvFile);
    var _super = _createSuper$2(PvFileMem);
    function PvFileMem(path, meta, db, mode) {
      var _this;
      _classCallCheck(this, PvFileMem);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized$1(_this), "_pos", 0);
      _defineProperty(_assertThisInitialized$1(_this), "_mode", void 0);
      _this._path = path;
      _this._meta = meta;
      _this._mode = mode;
      return _this;
    }
    _createClass(PvFileMem, [{
      key: "close",
      value: function close() {
        return;
      }
    }, {
      key: "read",
      value: function read(size, count) {
        if (!this.exists()) {
          throw new Error("'".concat(this._path, "' doesn't exist."));
        }
        if (this._isEOF) {
          var err = new Error("EOF");
          err.name = "EndOfFile";
          throw err;
        }
        var toCopy = Math.min(size * count, this._file.length - this._pos);
        var totalElems = toCopy - toCopy % size;
        var buffer = new Uint8Array(totalElems);
        buffer.set(this._file.slice(this._pos, this._pos + totalElems), 0);
        this._pos += totalElems;
        return buffer;
      }
    }, {
      key: "write",
      value: function write(content) {
        var newFile = new Uint8Array(this._pos + content.length);
        if (this._file !== undefined) {
          newFile.set(this._file.slice(0, this._pos));
          newFile.set(content, this._pos);
        } else {
          newFile.set(content);
        }
        this._file = newFile;
        this._pos += content.length;
      }
    }, {
      key: "seek",
      value: function seek(offset, whence) {
        if (!this.exists() && this._mode === "readonly") {
          throw new Error("'".concat(this._path, "' doesn't exist."));
        }
        if (offset < 0) {
          var err = new Error("EOF");
          err.name = "EndOfFile";
          throw err;
        }
        var newOffset;
        if (whence === 0) {
          newOffset = Math.min(offset, this._file.length);
        } else if (whence === 1) {
          newOffset = Math.min(this._pos + offset, this._file.length);
        } else if (whence === 2) {
          newOffset = Math.min(this._file.length + offset, this._file.length);
        } else {
          throw new Error("Invalid operation: ".concat(whence, "."));
        }
        this._pos = newOffset;
      }
    }, {
      key: "tell",
      value: function tell() {
        if (!this.exists()) {
          return -1;
        }
        return this._pos;
      }
    }, {
      key: "remove",
      value: function () {
        var _remove = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          return regenerator.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                PvFileMem._memFiles["delete"](this._path);
                this._file = undefined;
                this._pos = 0;
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function remove() {
          return _remove.apply(this, arguments);
        }
        return remove;
      }()
    }, {
      key: "exists",
      value: function exists() {
        return this._file !== undefined;
      }
    }, {
      key: "_isEOF",
      get: function get() {
        return this._pos >= this._file.length;
      }
    }, {
      key: "_file",
      get: function get() {
        return PvFileMem._memFiles.get(this._path);
      },
      set: function set(content) {
        PvFileMem._memFiles.set(this._path, content);
      }
    }], [{
      key: "open",
      value: function open(path, mode) {
        var file = PvFileMem._memFiles.get(path);
        var dbMode = mode.includes('r') ? "readonly" : "readwrite";
        if (file === undefined && dbMode === "readonly") {
          var error = new Error("'".concat(path, "' doesn't exist."));
          error.name = "FileNotExists";
          throw error;
        }
        var fileMem = new PvFileMem(path, undefined, undefined, dbMode);
        if (mode.includes('a')) {
          fileMem.seek(0, 2);
        }
        return fileMem;
      }
    }]);
    return PvFileMem;
  }(PvFile);
  _defineProperty(PvFileMem, "_memFiles", new Map());

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray$1$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1$1(o, minLen); }
  function _arrayLikeToArray$1$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  /**
   * Convert a null terminated phrase stored inside an array buffer to a string
   *
   * @param arrayBuffer input array buffer
   * @param indexStart the index at which the phrase is stored
   * @return retrieved string
   */
  function arrayBufferToStringAtIndex(arrayBuffer, indexStart) {
    var indexEnd = indexStart;
    while (arrayBuffer[indexEnd] !== 0) {
      indexEnd++;
    }
    var utf8decoder = new TextDecoder('utf-8');
    return utf8decoder.decode(arrayBuffer.subarray(indexStart, indexEnd));
  }
  /**
   * Decode a base64 string and stored it in a Uint8Array array
   *
   * @param base64String input base64 string
   * @return decoded array
   */
  function base64ToUint8Array(base64String) {
    var base64StringDecoded = atob(base64String);
    var binaryArray = new Uint8Array(base64StringDecoded.length);
    for (var i = 0; i < base64StringDecoded.length; i++) {
      binaryArray[i] = base64StringDecoded.charCodeAt(i);
    }
    return binaryArray;
  }
  /**
   * Convert a string header to JS object
   *
   * @param stringHeader input string in json format
   * @return retrieved object
   */
  // eslint-disable-next-line
  function stringHeaderToObject(stringHeader) {
    var objectHeader = {};
    var _iterator = _createForOfIteratorHelper$2(stringHeader.split('\r\n')),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var property = _step.value;
        var keyValuePair = property.split(': ');
        if (keyValuePair[0] !== '') {
          // @ts-ignore
          objectHeader[keyValuePair[0]] = keyValuePair[1];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return objectHeader;
  }
  /**
   * A wrapper to fetch that also supports timeout
   *
   * @param uri the URL of the resource
   * @param options other options related to fetch
   * @param time timeout value
   * @return received response
   */
  function fetchWithTimeout(_x) {
    return _fetchWithTimeout.apply(this, arguments);
  }
  /**
   * Checking whether the given AccessKey is valid
   *
   * @return true if the AccessKey is valid, false if not
   */
  function _fetchWithTimeout() {
    _fetchWithTimeout = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(uri) {
      var options,
        time,
        controller,
        config,
        timeout,
        response,
        _args = arguments;
      return regenerator.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            time = _args.length > 2 && _args[2] !== undefined ? _args[2] : 5000;
            controller = new AbortController();
            config = _objectSpread$3(_objectSpread$3({}, options), {}, {
              signal: controller.signal
            });
            timeout = setTimeout(function () {
              controller.abort();
            }, time);
            _context.next = 7;
            return fetch(uri, config);
          case 7:
            response = _context.sent;
            clearTimeout(timeout);
            return _context.abrupt("return", response);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchWithTimeout.apply(this, arguments);
  }
  function isAccessKeyValid(accessKey) {
    if (typeof accessKey !== 'string') {
      return false;
    }
    var accessKeyCleaned = accessKey.trim();
    if (accessKeyCleaned === '') {
      return false;
    }
    try {
      return btoa(atob(accessKeyCleaned)) === accessKeyCleaned;
    } catch (err) {
      return false;
    }
  }
  /**
   * Opens the file given the path and mode.
   * @returns PvFile instance.
   */
  function open(_x2, _x3) {
    return _open.apply(this, arguments);
  }
  /**
   * PvFile helper.
   * Write modelBase64 to modelPath depending on options forceWrite and version.
   */
  function _open() {
    _open = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(path, mode) {
      var error;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return PvFileIDB.open(path, mode);
          case 3:
            return _context2.abrupt("return", _context2.sent);
          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            if (_context2.t0.name === 'IndexedDBNotSupported') {
              // eslint-disable-next-line no-console
              console.warn('IndexedDB is not supported. Fallback to in-memory storage.');
            } else if (_context2.t0.name !== 'FileNotExists') {
              // eslint-disable-next-line no-console
              console.warn("Unable to access IndexedDB (".concat(_context2.t0.toString(), "). Fallback to in-memory storage."));
            }
            if (!(
            // @ts-ignore
            typeof WorkerGlobalScope !== 'undefined' &&
            // @ts-ignore
            self instanceof WorkerGlobalScope)) {
              _context2.next = 16;
              break;
            }
            if (!(_context2.t0.name === 'FileNotExists')) {
              _context2.next = 12;
              break;
            }
            throw _context2.t0;
          case 12:
            // eslint-disable-next-line no-console
            console.error('In-memory storage cannot be used inside a worker.');
            error = new Error("Failed to start PvFile: ".concat(_context2.t0.toString()));
            error.name = 'PvFileNotSupported';
            throw error;
          case 16:
            return _context2.abrupt("return", PvFileMem.open(path, mode));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 6]]);
    }));
    return _open.apply(this, arguments);
  }
  function fromBase64(_x4, _x5, _x6, _x7) {
    return _fromBase.apply(this, arguments);
  }
  function _fromBase() {
    _fromBase = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(modelPath, modelBase64, forceWrite, version) {
      var pvFile;
      return regenerator.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return open(modelPath, 'w');
          case 2:
            pvFile = _context3.sent;
            if (!(forceWrite || pvFile.meta === undefined || version > pvFile.meta.version)) {
              _context3.next = 6;
              break;
            }
            _context3.next = 6;
            return pvFile.write(base64ToUint8Array(modelBase64), version);
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _fromBase.apply(this, arguments);
  }
  var BACKOFF_CAP_MILLISECONDS = 5000;
  var BACKOFF_START_MILLISECONDS = 2;
  /**
   * PvFile helper.
   * Write publicPath's model to modelPath depending on options forceWrite and version.
   */
  function fromPublicDirectory(_x8, _x9, _x10, _x11, _x12) {
    return _fromPublicDirectory.apply(this, arguments);
  }
  /**
   * Takes a Picovoice model file and either decodes it from base64 or fetches
   * it from the public directory. Saves the result to storage on version increase or
   * if forceWrite is enabled.
   */
  function _fromPublicDirectory() {
    _fromPublicDirectory = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(modelPath, publicPath, forceWrite, version, numFetchReties) {
      var pvFile, waitTimeMilliseconds, delay, numAttemptsLeft, error, response, data, responseText;
      return regenerator.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return open(modelPath, 'w');
          case 2:
            pvFile = _context4.sent;
            if (!(forceWrite || pvFile.meta === undefined || version > pvFile.meta.version)) {
              _context4.next = 43;
              break;
            }
            if (!(numFetchReties < 0)) {
              _context4.next = 6;
              break;
            }
            throw Error('numFetchRetries must be a positive number');
          case 6:
            waitTimeMilliseconds = BACKOFF_START_MILLISECONDS;
            delay = function delay(delayMilliseconds) {
              return new Promise(function (resolve) {
                setTimeout(resolve, delayMilliseconds);
              });
            };
            numAttemptsLeft = numFetchReties + 1;
            error = null;
          case 10:
            if (!(numAttemptsLeft > 0)) {
              _context4.next = 38;
              break;
            }
            error = null;
            _context4.prev = 12;
            _context4.next = 15;
            return fetch(publicPath, {
              cache: 'no-cache'
            });
          case 15:
            response = _context4.sent;
            if (!response.ok) {
              _context4.next = 23;
              break;
            }
            _context4.next = 19;
            return response.arrayBuffer();
          case 19:
            data = _context4.sent;
            _context4.next = 22;
            return pvFile.write(new Uint8Array(data), version);
          case 22:
            return _context4.abrupt("return");
          case 23:
            _context4.next = 25;
            return response.text();
          case 25:
            responseText = _context4.sent;
            error = new Error("Error response returned while fetching model from '".concat(publicPath, "': ").concat(responseText));
            _context4.next = 32;
            break;
          case 29:
            _context4.prev = 29;
            _context4.t0 = _context4["catch"](12);
            error = new Error("Failed to fetch model from '".concat(publicPath, "': ").concat(_context4.t0.message));
          case 32:
            numAttemptsLeft--;
            _context4.next = 35;
            return delay(waitTimeMilliseconds);
          case 35:
            waitTimeMilliseconds = Math.min(BACKOFF_CAP_MILLISECONDS, waitTimeMilliseconds * BACKOFF_START_MILLISECONDS);
            _context4.next = 10;
            break;
          case 38:
            if (!(error !== null)) {
              _context4.next = 42;
              break;
            }
            throw error;
          case 42:
            throw new Error("Unexpected error encountered while fetching model from '".concat(publicPath, "'"));
          case 43:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[12, 29]]);
    }));
    return _fromPublicDirectory.apply(this, arguments);
  }
  function loadModel(_x13) {
    return _loadModel.apply(this, arguments);
  }
  function _loadModel() {
    _loadModel = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(model) {
      var base64, publicPath, customWritePath, _model$forceWrite, forceWrite, _model$version, version, _model$numFetchRetrie, numFetchRetries;
      return regenerator.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(model === undefined || model === null)) {
              _context5.next = 2;
              break;
            }
            throw new Error('The model is undefined / empty');
          case 2:
            base64 = model.base64, publicPath = model.publicPath, customWritePath = model.customWritePath, _model$forceWrite = model.forceWrite, forceWrite = _model$forceWrite === void 0 ? false : _model$forceWrite, _model$version = model.version, version = _model$version === void 0 ? 1 : _model$version, _model$numFetchRetrie = model.numFetchRetries, numFetchRetries = _model$numFetchRetrie === void 0 ? 0 : _model$numFetchRetrie;
            if (!(customWritePath === undefined || customWritePath === null)) {
              _context5.next = 5;
              break;
            }
            throw new Error('The customWritePath of the provided model is undefined / empty');
          case 5:
            if (!(base64 !== undefined && base64 !== null)) {
              _context5.next = 10;
              break;
            }
            _context5.next = 8;
            return fromBase64(customWritePath, base64, forceWrite, version);
          case 8:
            _context5.next = 16;
            break;
          case 10:
            if (!(publicPath !== undefined && publicPath !== null)) {
              _context5.next = 15;
              break;
            }
            _context5.next = 13;
            return fromPublicDirectory(customWritePath, publicPath, forceWrite, version, numFetchRetries);
          case 13:
            _context5.next = 16;
            break;
          case 15:
            throw new Error("The provided model doesn't contain a valid publicPath or base64 value");
          case 16:
            return _context5.abrupt("return", customWritePath);
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _loadModel.apply(this, arguments);
  }

  /*
    Copyright 2022 Picovoice Inc.

    You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
    file accompanying this source.

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
    an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
  */
  /* eslint camelcase: 0, arrow-body-style: 0, @typescript-eslint/no-unused-vars: 0, @typescript-eslint/explicit-module-boundary-types: 0 */
  var wasiSnapshotPreview1Emulator = {
    args_get: function args_get(input) {
      return 0;
    },
    args_sizes_get: function args_sizes_get(input) {
      return 0;
    },
    environ_get: function environ_get(input) {
      return 0;
    },
    environ_sizes_get: function environ_sizes_get(input) {
      return 0;
    },
    clock_res_get: function clock_res_get(input) {
      return 0;
    },
    clock_time_get: function clock_time_get(input) {
      return 0;
    },
    fd_advise: function fd_advise(input) {
      return 0;
    },
    fd_allocate: function fd_allocate(input) {
      return 0;
    },
    fd_close: function fd_close(input) {
      return 0;
    },
    fd_datasync: function fd_datasync(input) {
      return 0;
    },
    fd_fdstat_get: function fd_fdstat_get(input) {
      return 0;
    },
    fd_fdstat_set_flags: function fd_fdstat_set_flags(input) {
      return 0;
    },
    fd_fdstat_set_rights: function fd_fdstat_set_rights(input) {
      return 0;
    },
    fd_filestat_get: function fd_filestat_get(input) {
      return 0;
    },
    fd_filestat_set_size: function fd_filestat_set_size(input) {
      return 0;
    },
    fd_filestat_set_times: function fd_filestat_set_times(input) {
      return 0;
    },
    fd_pread: function fd_pread(input) {
      return 0;
    },
    fd_prestat_get: function fd_prestat_get(input) {
      return 0;
    },
    fd_prestat_dir_name: function fd_prestat_dir_name(input) {
      return 0;
    },
    fd_pwrite: function fd_pwrite(input) {
      return 0;
    },
    fd_read: function fd_read(input) {
      return 0;
    },
    fd_readdir: function fd_readdir(input) {
      return 0;
    },
    fd_renumber: function fd_renumber(input) {
      return 0;
    },
    fd_seek: function fd_seek(input) {
      return 0;
    },
    fd_sync: function fd_sync(input) {
      return 0;
    },
    fd_tell: function fd_tell(input) {
      return 0;
    },
    fd_write: function fd_write(input) {
      return 0;
    },
    path_create_directory: function path_create_directory(input) {
      return 0;
    },
    path_filestat_get: function path_filestat_get(input) {
      return 0;
    },
    path_filestat_set_times: function path_filestat_set_times(input) {
      return 0;
    },
    path_link: function path_link(input) {
      return 0;
    },
    path_open: function path_open(input) {
      return 0;
    },
    path_readlink: function path_readlink(input) {
      return 0;
    },
    path_remove_directory: function path_remove_directory(input) {
      return 0;
    },
    path_rename: function path_rename(input) {
      return 0;
    },
    path_symlink: function path_symlink(input) {
      return 0;
    },
    path_unlink_file: function path_unlink_file(input) {
      return 0;
    },
    poll_oneoff: function poll_oneoff(input) {
      return 0;
    },
    proc_exit: function proc_exit(input) {
      return 0;
    },
    proc_raise: function proc_raise(input) {
      return 0;
    },
    sched_yield: function sched_yield(input) {
      return 0;
    },
    random_get: function random_get(input) {
      return 0;
    },
    sock_recv: function sock_recv(input) {
      return 0;
    },
    sock_send: function sock_send(input) {
      return 0;
    },
    sock_shutdown: function sock_shutdown(input) {
      return 0;
    }
  };

  /**
   * Imports and Exports functions required for WASM.
   *
   * @param memory Initialized WebAssembly memory object.
   * @param wasm The wasm file in base64 string or stream to public path (i.e. fetch("file.wasm")) to initialize.
   * @param pvError The PvError object to store error details.
   * @returns An object containing the exported functions from WASM.
   */
  function buildWasm(_x, _x2, _x3) {
    return _buildWasm.apply(this, arguments);
  }
  function _buildWasm() {
    _buildWasm = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee9(memory, wasm, pvError) {
      var memoryBufferUint8, memoryBufferInt32, pvConsoleLogWasm, pvAssertWasm, pvTimeWasm, pvHttpsRequestWasm, pvGetBrowserInfo, pvGetOriginInfo, pvFileOpenWasm, pvFileCloseWasm, pvFileReadWasm, pvFileWriteWasm, pvFileSeekWasm, pvFileTellWasm, pvFileRemoveWasm, importObject, instance, response, data, wasmCodeArray, aligned_alloc;
      return regenerator.wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            memoryBufferUint8 = new Uint8Array(memory.buffer);
            memoryBufferInt32 = new Int32Array(memory.buffer);
            pvConsoleLogWasm = function pvConsoleLogWasm(index) {
              // eslint-disable-next-line no-console
              console.log(arrayBufferToStringAtIndex(memoryBufferUint8, index));
            };
            pvAssertWasm = function pvAssertWasm(expr, line, fileNameAddress) {
              if (expr === 0) {
                var fileName = arrayBufferToStringAtIndex(memoryBufferUint8, fileNameAddress);
                throw new Error("assertion failed at line ".concat(line, " in \"").concat(fileName, "\""));
              }
            };
            pvTimeWasm = function pvTimeWasm() {
              return Date.now() / 1000;
            };
            pvHttpsRequestWasm = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(httpMethodAddress, serverNameAddress, endpointAddress, headerAddress, bodyAddress, timeoutMs, responseAddressAddress, responseSizeAddress, responseCodeAddress) {
                var httpMethod, serverName, endpoint, header, body, headerObject, response, responseText, statusCode, responseAddress, i;
                return regenerator.wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      httpMethod = arrayBufferToStringAtIndex(memoryBufferUint8, httpMethodAddress);
                      serverName = arrayBufferToStringAtIndex(memoryBufferUint8, serverNameAddress);
                      endpoint = arrayBufferToStringAtIndex(memoryBufferUint8, endpointAddress);
                      header = arrayBufferToStringAtIndex(memoryBufferUint8, headerAddress);
                      body = arrayBufferToStringAtIndex(memoryBufferUint8, bodyAddress);
                      headerObject = stringHeaderToObject(header);
                      _context.prev = 6;
                      _context.next = 9;
                      return fetchWithTimeout('https://' + serverName + endpoint, {
                        method: httpMethod,
                        headers: headerObject,
                        body: body
                      }, timeoutMs);
                    case 9:
                      response = _context.sent;
                      statusCode = response.status;
                      _context.next = 17;
                      break;
                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](6);
                      pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvHttpsRequestWasm', "Failed to fetch: ".concat(_context.t0));
                      return _context.abrupt("return");
                    case 17:
                      _context.prev = 17;
                      _context.next = 20;
                      return response.text();
                    case 20:
                      responseText = _context.sent;
                      _context.next = 27;
                      break;
                    case 23:
                      _context.prev = 23;
                      _context.t1 = _context["catch"](17);
                      pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvHttpsRequestWasm', "Failed to get response text: ".concat(_context.t1));
                      return _context.abrupt("return");
                    case 27:
                      _context.next = 29;
                      return aligned_alloc(Int8Array.BYTES_PER_ELEMENT, (responseText.length + 1) * Int8Array.BYTES_PER_ELEMENT);
                    case 29:
                      responseAddress = _context.sent;
                      if (!(responseAddress === 0)) {
                        _context.next = 34;
                        break;
                      }
                      pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvMallocError', "pvHttpsRequestWasm: cannot allocate memory for response");
                      memoryBufferInt32[responseAddressAddress / Int32Array.BYTES_PER_ELEMENT] = 0;
                      return _context.abrupt("return");
                    case 34:
                      memoryBufferInt32[responseSizeAddress / Int32Array.BYTES_PER_ELEMENT] = responseText.length + 1;
                      memoryBufferInt32[responseAddressAddress / Int32Array.BYTES_PER_ELEMENT] = responseAddress;
                      for (i = 0; i < responseText.length; i++) {
                        memoryBufferUint8[responseAddress + i] = responseText.charCodeAt(i);
                      }
                      memoryBufferUint8[responseAddress + responseText.length] = 0;
                      memoryBufferInt32[responseCodeAddress / Int32Array.BYTES_PER_ELEMENT] = statusCode;
                    case 39:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, null, [[6, 13], [17, 23]]);
              }));
              return function pvHttpsRequestWasm(_x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12) {
                return _ref.apply(this, arguments);
              };
            }();
            pvGetBrowserInfo = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(browserInfoAddressAddress) {
                var userAgent, browserInfoAddress, i;
                return regenerator.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      userAgent = navigator.userAgent !== undefined ? navigator.userAgent : 'unknown'; // eslint-disable-next-line
                      _context2.next = 3;
                      return aligned_alloc(Uint8Array.BYTES_PER_ELEMENT, (userAgent.length + 1) * Uint8Array.BYTES_PER_ELEMENT);
                    case 3:
                      browserInfoAddress = _context2.sent;
                      if (!(browserInfoAddress === 0)) {
                        _context2.next = 8;
                        break;
                      }
                      pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvMallocError', "pvGetBrowserInfo: cannot allocate memory for browser info");
                      memoryBufferInt32[browserInfoAddressAddress / Int32Array.BYTES_PER_ELEMENT] = 0;
                      return _context2.abrupt("return");
                    case 8:
                      memoryBufferInt32[browserInfoAddressAddress / Int32Array.BYTES_PER_ELEMENT] = browserInfoAddress;
                      for (i = 0; i < userAgent.length; i++) {
                        memoryBufferUint8[browserInfoAddress + i] = userAgent.charCodeAt(i);
                      }
                      memoryBufferUint8[browserInfoAddress + userAgent.length] = 0;
                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function pvGetBrowserInfo(_x13) {
                return _ref2.apply(this, arguments);
              };
            }();
            pvGetOriginInfo = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(originInfoAddressAddress) {
                var _self$origin;
                var origin, hostname, originInfoAddress, i;
                return regenerator.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      origin = (_self$origin = self.origin) !== null && _self$origin !== void 0 ? _self$origin : self.location.origin;
                      hostname = new URL(origin).hostname; // eslint-disable-next-line
                      _context3.next = 4;
                      return aligned_alloc(Uint8Array.BYTES_PER_ELEMENT, (hostname.length + 1) * Uint8Array.BYTES_PER_ELEMENT);
                    case 4:
                      originInfoAddress = _context3.sent;
                      if (!(originInfoAddress === 0)) {
                        _context3.next = 9;
                        break;
                      }
                      pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvMallocError', "pvGetOriginInfo: cannot allocate memory for origin info");
                      memoryBufferInt32[originInfoAddressAddress / Int32Array.BYTES_PER_ELEMENT] = 0;
                      return _context3.abrupt("return");
                    case 9:
                      memoryBufferInt32[originInfoAddressAddress / Int32Array.BYTES_PER_ELEMENT] = originInfoAddress;
                      for (i = 0; i < hostname.length; i++) {
                        memoryBufferUint8[originInfoAddress + i] = hostname.charCodeAt(i);
                      }
                      memoryBufferUint8[originInfoAddress + hostname.length] = 0;
                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function pvGetOriginInfo(_x14) {
                return _ref3.apply(this, arguments);
              };
            }();
            pvFileOpenWasm = /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(fileAddress, pathAddress, modeAddress, statusAddress) {
                var path, mode, file;
                return regenerator.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      path = arrayBufferToStringAtIndex(memoryBufferUint8, pathAddress);
                      mode = arrayBufferToStringAtIndex(memoryBufferUint8, modeAddress);
                      _context4.prev = 2;
                      _context4.next = 5;
                      return open(path, mode);
                    case 5:
                      file = _context4.sent;
                      PvFile.setPtr(fileAddress, file);
                      memoryBufferInt32[statusAddress / Int32Array.BYTES_PER_ELEMENT] = 0;
                      _context4.next = 14;
                      break;
                    case 10:
                      _context4.prev = 10;
                      _context4.t0 = _context4["catch"](2);
                      if (_context4.t0.name !== "FileNotExists") {
                        pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvFileOpenWasm', _context4.t0);
                      }
                      memoryBufferInt32[statusAddress / Int32Array.BYTES_PER_ELEMENT] = -1;
                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4, null, [[2, 10]]);
              }));
              return function pvFileOpenWasm(_x15, _x16, _x17, _x18) {
                return _ref4.apply(this, arguments);
              };
            }();
            pvFileCloseWasm = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(fileAddress, statusAddress) {
                var file;
                return regenerator.wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return PvFile.getPtr(fileAddress);
                    case 3:
                      file = _context5.sent;
                      _context5.next = 6;
                      return file.close();
                    case 6:
                      memoryBufferInt32[statusAddress / Int32Array.BYTES_PER_ELEMENT] = 0;
                      _context5.next = 13;
                      break;
                    case 9:
                      _context5.prev = 9;
                      _context5.t0 = _context5["catch"](0);
                      pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvFileCloseWasm', _context5.t0);
                      memoryBufferInt32[statusAddress / Int32Array.BYTES_PER_ELEMENT] = -1;
                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, null, [[0, 9]]);
              }));
              return function pvFileCloseWasm(_x19, _x20) {
                return _ref5.apply(this, arguments);
              };
            }();
            pvFileReadWasm = /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(fileAddress, contentAddress, size, count, numReadAddress) {
                var file, content;
                return regenerator.wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return PvFile.getPtr(fileAddress);
                    case 3:
                      file = _context6.sent;
                      _context6.next = 6;
                      return file.read(size, count);
                    case 6:
                      content = _context6.sent;
                      memoryBufferUint8.set(content, contentAddress);
                      memoryBufferInt32[numReadAddress / Int32Array.BYTES_PER_ELEMENT] = content.length / size;
                      _context6.next = 15;
                      break;
                    case 11:
                      _context6.prev = 11;
                      _context6.t0 = _context6["catch"](0);
                      pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvFileReadWasm', _context6.t0);
                      memoryBufferInt32[numReadAddress / Int32Array.BYTES_PER_ELEMENT] = -1;
                    case 15:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, null, [[0, 11]]);
              }));
              return function pvFileReadWasm(_x21, _x22, _x23, _x24, _x25) {
                return _ref6.apply(this, arguments);
              };
            }();
            pvFileWriteWasm = /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7(fileAddress, contentAddress, size, count, numWriteAddress) {
                var file, content;
                return regenerator.wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return PvFile.getPtr(fileAddress);
                    case 3:
                      file = _context7.sent;
                      content = new Uint8Array(size * count);
                      content.set(memoryBufferUint8.slice(contentAddress, contentAddress + size * count), 0);
                      _context7.next = 8;
                      return file.write(content);
                    case 8:
                      memoryBufferInt32[numWriteAddress / Int32Array.BYTES_PER_ELEMENT] = content.length / size;
                      _context7.next = 15;
                      break;
                    case 11:
                      _context7.prev = 11;
                      _context7.t0 = _context7["catch"](0);
                      pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvFileWriteWasm', _context7.t0);
                      memoryBufferInt32[numWriteAddress / Int32Array.BYTES_PER_ELEMENT] = 1;
                    case 15:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7, null, [[0, 11]]);
              }));
              return function pvFileWriteWasm(_x26, _x27, _x28, _x29, _x30) {
                return _ref7.apply(this, arguments);
              };
            }();
            pvFileSeekWasm = function pvFileSeekWasm(fileAddress, offset, whence, statusAddress) {
              try {
                var file = PvFile.getPtr(fileAddress);
                file.seek(offset, whence);
                memoryBufferInt32[statusAddress / Int32Array.BYTES_PER_ELEMENT] = 0;
              } catch (e) {
                pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvFileSeekWasm', e);
                memoryBufferInt32[statusAddress / Int32Array.BYTES_PER_ELEMENT] = -1;
              }
            };
            pvFileTellWasm = function pvFileTellWasm(fileAddress, offsetAddress) {
              try {
                var file = PvFile.getPtr(fileAddress);
                memoryBufferInt32[offsetAddress / Int32Array.BYTES_PER_ELEMENT] = file.tell();
              } catch (e) {
                pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvFileTellWasm', e);
                memoryBufferInt32[offsetAddress / Int32Array.BYTES_PER_ELEMENT] = -1;
              }
            };
            pvFileRemoveWasm = /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee8(pathAddress, statusAddress) {
                var path, file;
                return regenerator.wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      path = arrayBufferToStringAtIndex(memoryBufferUint8, pathAddress);
                      _context8.prev = 1;
                      _context8.next = 4;
                      return open(path, "w");
                    case 4:
                      file = _context8.sent;
                      _context8.next = 7;
                      return file.remove();
                    case 7:
                      memoryBufferInt32[statusAddress / Int32Array.BYTES_PER_ELEMENT] = 0;
                      _context8.next = 14;
                      break;
                    case 10:
                      _context8.prev = 10;
                      _context8.t0 = _context8["catch"](1);
                      pvError === null || pvError === void 0 ? void 0 : pvError.addError('pvFileRemoveWasm', _context8.t0);
                      memoryBufferInt32[statusAddress / Int32Array.BYTES_PER_ELEMENT] = -1;
                    case 14:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8, null, [[1, 10]]);
              }));
              return function pvFileRemoveWasm(_x31, _x32) {
                return _ref8.apply(this, arguments);
              };
            }();
            importObject = {
              // eslint-disable-next-line camelcase
              wasi_snapshot_preview1: wasiSnapshotPreview1Emulator,
              env: {
                memory: memory,
                pv_console_log_wasm: pvConsoleLogWasm,
                pv_assert_wasm: pvAssertWasm,
                pv_time_wasm: pvTimeWasm,
                pv_https_request_wasm: pvHttpsRequestWasm,
                pv_get_browser_info: pvGetBrowserInfo,
                pv_get_origin_info: pvGetOriginInfo,
                pv_file_open_wasm: pvFileOpenWasm,
                pv_file_close_wasm: pvFileCloseWasm,
                pv_file_read_wasm: pvFileReadWasm,
                pv_file_write_wasm: pvFileWriteWasm,
                pv_file_seek_wasm: pvFileSeekWasm,
                pv_file_tell_wasm: pvFileTellWasm,
                pv_file_remove_wasm: pvFileRemoveWasm
              }
            };
            if (!(wasm instanceof Promise)) {
              _context9.next = 34;
              break;
            }
            if (!a) {
              _context9.next = 23;
              break;
            }
            _context9.next = 20;
            return a(wasm, importObject);
          case 20:
            instance = _context9.sent.instance;
            _context9.next = 32;
            break;
          case 23:
            _context9.next = 25;
            return wasm;
          case 25:
            response = _context9.sent;
            _context9.next = 28;
            return response.arrayBuffer();
          case 28:
            data = _context9.sent;
            _context9.next = 31;
            return n(new Uint8Array(data), importObject);
          case 31:
            instance = _context9.sent.instance;
          case 32:
            _context9.next = 38;
            break;
          case 34:
            wasmCodeArray = base64ToUint8Array(wasm);
            _context9.next = 37;
            return n(wasmCodeArray, importObject);
          case 37:
            instance = _context9.sent.instance;
          case 38:
            aligned_alloc = instance.exports.aligned_alloc;
            return _context9.abrupt("return", instance.exports);
          case 40:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _buildWasm.apply(this, arguments);
  }

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
  }

  /*
    Copyright 2023 Picovoice Inc.

    You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
    file accompanying this source.

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
    an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
  */
  var PvError = /*#__PURE__*/function () {
    function PvError() {
      _classCallCheck(this, PvError);
      _defineProperty(this, "_maxNumErrors", 10);
      _defineProperty(this, "_errors", []);
      _defineProperty(this, "_lastError", void 0);
    }
    _createClass(PvError, [{
      key: "addError",
      value:
      /**
       * Store an error with a key and message.
       */
      function addError(key, error) {
        this._lastError = error instanceof Error ? error : new Error(error);
        if (this._errors.length >= this._maxNumErrors) {
          this._errors.shift();
        }
        if (error instanceof Error) {
          this._errors.push({
            key: key,
            message: error.toString()
          });
        } else {
          this._errors.push({
            key: key,
            message: JSON.stringify(error)
          });
        }
      }
      /**
       * Get all recent error messages. Cleans up error list.
       */
    }, {
      key: "getErrors",
      value: function getErrors() {
        var errors = _toConsumableArray(this._errors);
        this._errors = [];
        return errors;
      }
      /**
       * Get errors formatted into a string.
       */
    }, {
      key: "getErrorString",
      value: function getErrorString() {
        return this.getErrors().map(function (_ref) {
          var key = _ref.key,
            message = _ref.message;
          return "'".concat(key, "' failed with: ").concat(message, ".");
        }).join('\n');
      }
      /**
       * Returns the last error message added to the object.
       */
    }, {
      key: "getLastError",
      value: function getLastError() {
        return this._lastError;
      }
      /**
       * Sets the maximum number of errors it can store.
       */
    }, {
      key: "setMaxErrorNum",
      value: function setMaxErrorNum(num) {
        this._maxNumErrors = num;
      }
    }]);
    return PvError;
  }();

  const simd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));

  /*
    Copyright 2022-2023 Picovoice Inc.

    You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
    file accompanying this source.

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
    an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
  */
  var PvStatus;
  (function (PvStatus) {
    PvStatus[PvStatus["SUCCESS"] = 10000] = "SUCCESS";
    PvStatus[PvStatus["OUT_OF_MEMORY"] = 10001] = "OUT_OF_MEMORY";
    PvStatus[PvStatus["IO_ERROR"] = 10002] = "IO_ERROR";
    PvStatus[PvStatus["INVALID_ARGUMENT"] = 10003] = "INVALID_ARGUMENT";
    PvStatus[PvStatus["STOP_ITERATION"] = 10004] = "STOP_ITERATION";
    PvStatus[PvStatus["KEY_ERROR"] = 10005] = "KEY_ERROR";
    PvStatus[PvStatus["INVALID_STATE"] = 10006] = "INVALID_STATE";
    PvStatus[PvStatus["RUNTIME_ERROR"] = 10007] = "RUNTIME_ERROR";
    PvStatus[PvStatus["ACTIVATION_ERROR"] = 10008] = "ACTIVATION_ERROR";
    PvStatus[PvStatus["ACTIVATION_LIMIT_REACHED"] = 10009] = "ACTIVATION_LIMIT_REACHED";
    PvStatus[PvStatus["ACTIVATION_THROTTLED"] = 10010] = "ACTIVATION_THROTTLED";
    PvStatus[PvStatus["ACTIVATION_REFUSED"] = 10011] = "ACTIVATION_REFUSED";
  })(PvStatus || (PvStatus = {}));

  var ALEXA_64 = "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";

  var AMERICANO_64 = "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";

  var BLUEBERRY_64 = "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";

  var BUMBLEBEE_64 = "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";

  var COMPUTER_64 = "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";

  var GRAPEFRUIT_64 = "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";

  var GRASSHOPPER_64 = "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";

  var HEY_GOOGLE_64 = "c48Ih/Pg5IKYaAN99lCHpxYKDv093WA3+wYDPBFiUL0k0/s64+BLu/o+Dj4iPTUdfT33lyx2Hd6Gv55pCJn5yfACnGvFd/YpIWT3KZE5jlV26LUhHtbGL/S2qkm6Sqt5YUrpJE2dFfGGz/JF4urnWfTiwDxXjvho7JoaG5cHTuOJRVWXR3+3/tAVVYR+Qb6oddyuMz4GdpG7kd0Nye/CDX6c+as4gRkiAPvjHXswMMZkt/Q/fiGo4TqfM4boC3SiNCSBXQNirwCCE8jEhuud7GlI80niy21pwN/eAHlVwADmPqkNjpjqxRBDBwwmWCD6Xw6ZeHSv6Q4+zTkbV6uT31Wab7Ih9p+ZJs//9DdIeDK5B5cH8nrivxVvBJEaglgskTp3i58lhJExYxahYKp857vGrj/MprVma/0VfNHmW3Byqs/Q1eK7oJGbKd5tO8//NU48wq9nO7a0DynhGdAQSbib2ozOocHLJvm/UNprXZPx8az9JKWIgVWu4VGTgRSHaLHNsUd0dj7k9GofIhV7KBOucOafY4KRCKQQyGIXzJA3l89KhHtxUhicPfctV/RvRfSuLpfS1dC/0e4iBHNzfy1cx/w4gz5D8NP6UXYehnoG+JcrSWW5d/KDkVjtHOsEDhXM137SsRBMtnPcnHjIjF/B5tsUVL0KHE/+zf4tBPNwTUHPq1R0KaKZwYYZmzwunUsobkINtkIMf1wJhosN//8SUjUmaqSLdewz6YT0WHXYmKkJHHF728nt3MYZ91N46jlhMCgVUArl0uNwKF3ZMN6RCnEJECnwYa271WSykBwsbS+ljROaPTNyyHADosNWGLRWc+o3bbfNjWX0nrgnef5mxbouVJVtF9v4KN2hPXKJ6ZbPxkgmsdUN9dvjaPGaRpeTkJKXkVKfk2+mhdhhnIpcGBB58S0LpHTnLEz2D4PwL5MD5JWllvJvtAzka41TdOkBXl18CvKxYMDZDNM5Lql0S0xpoUabZ8o+QlJh+3vAMEfqnzeG0Bs6T86HaJX8/gHvi07BaPqeuH43NEIUPNNrr9sJDQCFJA+iezGIadyQraB7yaw8hZj0v3PKPDGWfkToz2IVmMslkQLhEqbLeTBW/nKIdQofzoWYklfglYyByg5LC5gCApImwSqGz0V72P7lbZyWn7Thn+aRB/s29h0SltD/fTFcJTPfmk3HMj8r+7u8WxyChF2Wxw2lhIKb4ToIghXgO1MOxReip3Fl6X+Wq2/xY2wmfkbxSQ5CRUjXLFOOAqf8+bjV5WNy2VGCymAC9EOnjpK/uslNI21OIrFMTIuWEwESAlBuyNfqahLKTYgMH9dGw1vwCaTwgmVJlqkXM1Ji80ARKcYXRqzFfC5/P9NOxwmbk7/j/DYZvQ20ZNR6Znee3PDjyUOsR322WMq2RAVTZqA0rErH81Ti618iNKjuK4x5+h+ZvkHlLDpqCV/Ebtq8ZihfV739kweiMFXxYZjkA6/7GQEwl8XwY00NpkHLx81vjXGTkXxoSU3F7jVbAXamDSpyJOvN6psOKKLrMhxKSemnY6CevDD2BBRG3cRrn3lQlasiqA70FUT+nt06mDSETl8xIr7SX9RHkgS3r81l/tJTf8Y0+BBr/fv3CTMTi0EFRGkW5azrla6tZ/gV5WvVhkwFvsGqOczDwEfzMiXRQAIdyJhTWakRFxbnB2gY/FPWpRnbWtfIWn+n+Okc/n55ovni3QDmYqa0OnNciXzx7Mh+PjMrL4juHD0c9fPXC3N8Jnb6iqp3aYbt28I1ZsSbnClj8WWNwBrf5S7zR4xeF2EJtYfM54yvRrkz7JZLpr43yLrsmbbQIQM36si7dLpTtWqYECsipzEnHIp5J4wkoOsByOGaceIQjTilTDZjlKxAWK8zzzPC6+GJnhCUYeUXxbpVMjkJNPRx7SspPPPqGl2zAt7mZ9vcWoFMFr1/i7SsNRQDSWmCeICGuNthb0wfmKQYMMbwPiTi15YnhlXX9236ztquYiIKBbWKASrLpaUtUU1kT6r95uXPg0WSb2+yh16BDsT6ytQ7A9lEdHHFuD1pB3Gp597aoXp8S9dNyCbu4uoYXyHuWNBo3U2LS7K4iEtuDqpumFtXzLCV12F3uWVdgAMOUruQAJlbRpc5+OJBL9R5XxDmMjN+1DHSLeAHM6GEES1F6YJAMCs1UnuFCll0hurnm2RCRHBq/usKf0AYLV/f63BSHq+hwvBXVVCgY7LaWD6kDoAbsZlHNpgEJTm4vz1pfzUWfOzocNBt14mor4P9Skp3Sa25ifZtqo4BZhWJ+NtMCU3welTg4j7TethF2atbvQeMRZJdvjT6kj3I6MuKKZ3NjmWg0POI0QEMu8UFWzusiY+5K8Qn/ZWRMRd2lp1UcPQULu94wj2n2P0WNQpm0MDQANCpF5z54d0d1z5RfzQR99PQq8HXZ7MYfYe9QN6ihUN+JILxntcxvUnrYmXjyZqiAPMubbVkcyMGFvICvA8L7c1itR97dNb0WOQrSiq1xWp99Mnsy5wR6H5fHPoCrt88jNTY20SNFebzfzdqj1NbPxb289VFhWcGXE7PtSlEwbgDosZse7dnxwvkSfnPVZJntIKm7KiWl26cMvA1UVSrrkGX0bjntg98iOkLC/O5du5cF7rwEbqCEvxVeT4lllarRxrOlz2famFmUcJgpRymXR+ZlK0UZJI4IGfKJr0EYpTYvxKr5skm6rUo00g3UJMgNylYmQkx7X6lr/GRk94qVcha/KLQYi9XXPjeGxhLyQ2NZbSuyrp12BiFOTY2frdJ5EoCpZvjyYlLS44CO2wrmo12YwyIJOl1Pq56J9CxfxXtAXt9Q+LwHp8VUIpC78HwK5HMPtKCiUEAbgEs4vnxBKlmvSijCLkRHlx4YZt9EXwine8zAQL9t+KIy0EFPdmNXYD2H4VCM2iM/ZGvXd0EB2D7At4BPt6ON8TvWlWgS5bBZJsZfZ7v2cZk3vjdDXUTZR6+FfQl5ZZS+0+qPFU70Wa9xPlgIQtPQIXYVMwjQXrZQp6V6H+DcFTeuZZLKwYZz4BDiwUvjid0xy9p5+FpJTnJmCdzB+bpdu363vNXoreEZ08/qp+f7V80SiGJUHl38suS5PDR7Eo9VsvBAlPzhJ1l2yRzqoIP3fEjpHKDVoulUaJEOZeGy2Vxf2+XZNfnbNSCCcvHpR2WkMS6SbckhAg/q8v0WlSbVNOvuubznwuzn7EHkDkJNnDEcGakTJu7m92zFyFneRbabVZkeAeT2kp5odi2Vh3VCnLpzOA4ZF6FC1Pfy9PLKb58uqHSsqVohffge9uh8V3ECWEVobxUPAO4teDUmlxYPbgxRp4p3gH6pY8oIQKUPioZCx3728pueuUqy3/G7tHtvdQb5FEvMq7xAqqH4SIDJfEBdCHZcliM7Xi1DbzaNAPWkYDT2NLplKSArO0pGkj5j7DmEZ/YKkRxWyzCfkNOHJ+CI0T+Dt7NToH+63PqCrMe6h6ejHzD9u4HSwhT4LPnYbWDOyvKOwT9jJww3HUghCZCuVuGO3b6Dp8bJOY8vqEXQDJkSQtUEbj40spo5IrzhIXK2l6YOS8ZTAOfJMGDk2Jipk4ISEgFUeaOaPn/+s2ua5VP7Ou7GCdpkQQ8ke7R+z+x2tum5muN6ijKZsXaS5PdDVEE9ct75F+7X3Dt8S2IqaMAvjhW2u8vVib+C45PdMbB9u8PZCjOuCXEP/QmnOeKP/le4/C1iVfluVCJcHe/9Q5pwhCMCN1U1pC/tduPl2LeaEuY6dk91u1U6qvOEmmSq3+PUwssEwwhBVfk/3zehoyzqigJ6N/MS0RkyUQUIWkze+h5pfsnOfRYq0zm9z46PO5wAZa9XudyW4BkcRoz/XuEehdVmI1DeERH1yCh7ks1Jv0zQHavA+Aqdx9KazVIyvtBkY4qimv4HIWUs092GwVE33iGkxUHsKiiDBWdvAn6GD9QVaF0mAKzMU6+PyS3REkFPXFWweIk4f2drTfFiJl5U4Oq9SzFIc47phEuCTcHl9OBrJMgMHps7S5kZPcNGh3fPeTRGgiqMK1xQHRg8A8psEBHpWr9M3Hz/jy11t/BUh79VAgoPhMcbqIMiwliVanzWqtapjZ01zyHXGMY7zwHiXhQqH70ql+gFmlZ10fPMFgva5QN84KW0jofTFH5v/JVGWa33XHOlD+AXULm5j6P+32VfymQ68XA/TRt37YvnjWdHcVUXjkcIJIjsKaPhODAP/wYN0mZxXQroIpYPnW7GYUhQXiDnp3V19HmBBfJqqmhNwGT648154lX7KlKHDZ7SKvSne2k0gCVO7m4PztkNQjZ17T9SFxHs788Nzpekc/T6K7M9nNmhHmWDDYIgGlwYEQPaz0PSAEiuvsS4bfLJlzvRuY1lH42MPrhHgJzROy9xP+hzDdeY/MD/Dq+nzbWiZv0HU/pW92/L8h40g4aoMT5H3WlSPtO4985SiixeWAsQWBGRG6pujok/bFvzzu8lqJisYnWFo80f5Ryxg9l/3QxLs3dqs3cDLgD08zNYlzybNoiJsynuFW6gIluZOSsdDxWFD1MZ7bsEEzxdx/2eeMDc4Cgk4By5FSf2TvDolpF0VWt7+KwT0DoMhV3XQOuinrkdDqDTiTpwOIkPiJYG3llEcFjL7192WaqKNEHlCXSlAajZy5HcKbR0DHbWqSyUctQ16TOaW8ydXeFLI8kFWGp83yA8uRnonQRsr/EatNpj8W1zAliVNMI0EVImubmdYGAiQ9RZXKGJo4Y8y4lbcDl0GQWa+hw7cF1MAyH/lnNwhsxiVFjOCtFPLdssanNsD+8c/CG6FGpVW1yNjDV7vfzJKRbiQYOPonk51UAo6MSgTCiyaVe/mwg4XTM3N+Hl10475vMLisyZbElw9TQwlhJCdqRJ9pMffUrCqGqbwJzWgQE4ve/n5d/uqf2K8gTiZrTjv63eWWKwWb/ieSs/0er0s0OW9uiViFr7qsKOgxvPp2iMlw6oznsXItAJDLu2h8x3mTQIhcnPka50kmFBoplOsAmOBRd9cv4KJ0Q4GMWoSYb+7bsfnSSBSkti+UJDWXCsQ9kPmu9+1/D3zOXo3LVzIoZhlpPrnHwkH8GjMXdjjpLEqAN1Ycz9YTvHuUkpiAOKr3E6QhFXeZIkc3bdF/C+F/mYSgewb+LwQ86tD4N44RWCLsFaQX5Gjz02obaOq/uBii51zAhvOboPSlgcy6kAPSgrFTcL9fKWg7GdpKGStUQ4x8aKdqhKW0DiMzNB6oJZx7umNwLkKExjKMjPiloJF0Muq139oEztWB9Nlp3g2PLgfzSh1zf6T06okCxBQCk0mL7Sn2FTuZm/YgIyYBYBf1oaaNPP8tLzqEnIiNbnLmhBe6TC/LlHaZcQvGATKGF13RhlImAyz/1kUOkNLARwGA=";

  var HEY_SIRI_64 = "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";

  var JARVIS_64 = "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";

  var OK_GOOGLE_64 = "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";

  var PICOVOICE_64 = "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";

  var PORCUPINE_64 = "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";

  var TERMINATOR_64 = "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";

  /*
    Copyright 2021 Picovoice Inc.

    You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
    file accompanying this source.

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
    an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
  */
  exports.BuiltInKeyword = void 0;
  (function (BuiltInKeyword) {
    BuiltInKeyword["Alexa"] = "Alexa";
    BuiltInKeyword["Americano"] = "Americano";
    BuiltInKeyword["Blueberry"] = "Blueberry";
    BuiltInKeyword["Bumblebee"] = "Bumblebee";
    BuiltInKeyword["Computer"] = "Computer";
    BuiltInKeyword["Grapefruit"] = "Grapefruit";
    BuiltInKeyword["Grasshopper"] = "Grasshopper";
    BuiltInKeyword["HeyGoogle"] = "Hey Google";
    BuiltInKeyword["HeySiri"] = "Hey Siri";
    BuiltInKeyword["Jarvis"] = "Jarvis";
    BuiltInKeyword["OkayGoogle"] = "Okay Google";
    BuiltInKeyword["Picovoice"] = "Picovoice";
    BuiltInKeyword["Porcupine"] = "Porcupine";
    BuiltInKeyword["Terminator"] = "Terminator";
  })(exports.BuiltInKeyword || (exports.BuiltInKeyword = {}));
  var BUILT_IN_KEYWORD_BYTES = new Map();
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Alexa, ALEXA_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Americano, AMERICANO_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Blueberry, BLUEBERRY_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Bumblebee, BUMBLEBEE_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Computer, COMPUTER_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Jarvis, JARVIS_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Grapefruit, GRAPEFRUIT_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Grasshopper, GRASSHOPPER_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.HeyGoogle, HEY_GOOGLE_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.HeySiri, HEY_SIRI_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.OkayGoogle, OK_GOOGLE_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Picovoice, PICOVOICE_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Porcupine, PORCUPINE_64);
  BUILT_IN_KEYWORD_BYTES.set(exports.BuiltInKeyword.Terminator, TERMINATOR_64);

  function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var DEFAULT_SENSITIVITY = 0.5;
  function keywordsProcess(_x) {
    return _keywordsProcess.apply(this, arguments);
  }
  function _keywordsProcess() {
    _keywordsProcess = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(keywords) {
      var keywordSensitivities, keywordLabels, keywordPaths, _iterator, _step, _keywordArgNormalized, keyword, keywordArgNormalized, customWritePath, validEnums, builtInName, keywordEnum, _i, _keywordSensitivities, sensitivity, sensitivities;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(keywords === undefined || keywords === null)) {
              _context.next = 2;
              break;
            }
            throw new Error('The keywords argument is undefined / empty');
          case 2:
            if (Array.isArray(keywords)) {
              _context.next = 6;
              break;
            }
            keywords = [keywords]; // eslint-disable-line
            _context.next = 8;
            break;
          case 6:
            if (!(keywords.length === 0)) {
              _context.next = 8;
              break;
            }
            throw new Error('The keywords argument array is empty');
          case 8:
            keywordSensitivities = [];
            keywordLabels = [];
            keywordPaths = [];
            _iterator = _createForOfIteratorHelper$1(keywords);
            _context.prev = 12;
            _iterator.s();
          case 14:
            if ((_step = _iterator.n()).done) {
              _context.next = 50;
              break;
            }
            keyword = _step.value;
            // normalize keywords to PorcupineKeyword
            keywordArgNormalized = void 0;
            if (!(typeof keyword === 'string')) {
              _context.next = 21;
              break;
            }
            keywordArgNormalized = {
              builtin: keyword,
              sensitivity: DEFAULT_SENSITIVITY
            };
            _context.next = 26;
            break;
          case 21:
            if (!(_typeof$2(keyword) !== 'object')) {
              _context.next = 25;
              break;
            }
            throw new Error('Invalid keyword argument type: ' + keyword + ' : ' + _typeof$2(keyword));
          case 25:
            keywordArgNormalized = keyword;
          case 26:
            if (!('label' in keywordArgNormalized)) {
              _context.next = 34;
              break;
            }
            customWritePath = keywordArgNormalized.customWritePath ? keywordArgNormalized.customWritePath : keywordArgNormalized.label;
            _context.next = 30;
            return loadModel(_objectSpread$2(_objectSpread$2({}, keywordArgNormalized), {}, {
              customWritePath: customWritePath
            }));
          case 30:
            keywordLabels.push(keywordArgNormalized.label);
            keywordPaths.push(customWritePath);
            _context.next = 47;
            break;
          case 34:
            if (!('builtin' in keywordArgNormalized)) {
              _context.next = 46;
              break;
            }
            validEnums = Object.values(exports.BuiltInKeyword);
            builtInName = keywordArgNormalized.builtin; // @ts-ignore
            keywordEnum = exports.BuiltInKeyword[builtInName.replace(' ', '')];
            if (validEnums.includes(keywordEnum)) {
              _context.next = 40;
              break;
            }
            throw new Error("Keyword ".concat(builtInName, " does not map to list of built-in keywords (").concat(validEnums, ")"));
          case 40:
            _context.next = 42;
            return loadModel({
              base64: BUILT_IN_KEYWORD_BYTES.get(keywordEnum),
              customWritePath: keywordArgNormalized.builtin,
              forceWrite: true
            });
          case 42:
            keywordLabels.push(keywordArgNormalized.builtin);
            keywordPaths.push(keywordArgNormalized.builtin);
            _context.next = 47;
            break;
          case 46:
            throw new Error('Unknown keyword argument: ' + JSON.stringify(keyword));
          case 47:
            keywordSensitivities.push((_keywordArgNormalized = keywordArgNormalized.sensitivity) !== null && _keywordArgNormalized !== void 0 ? _keywordArgNormalized : DEFAULT_SENSITIVITY);
          case 48:
            _context.next = 14;
            break;
          case 50:
            _context.next = 55;
            break;
          case 52:
            _context.prev = 52;
            _context.t0 = _context["catch"](12);
            _iterator.e(_context.t0);
          case 55:
            _context.prev = 55;
            _iterator.f();
            return _context.finish(55);
          case 58:
            _i = 0, _keywordSensitivities = keywordSensitivities;
          case 59:
            if (!(_i < _keywordSensitivities.length)) {
              _context.next = 68;
              break;
            }
            sensitivity = _keywordSensitivities[_i];
            if (!(typeof sensitivity !== 'number')) {
              _context.next = 63;
              break;
            }
            throw new Error('Sensitivity is not a number (in range [0,1]): ' + sensitivity);
          case 63:
            if (!(sensitivity < 0 || sensitivity > 1)) {
              _context.next = 65;
              break;
            }
            throw new Error('Sensitivity is outside of range [0, 1]: ' + sensitivity);
          case 65:
            _i++;
            _context.next = 59;
            break;
          case 68:
            if (!(keywordSensitivities.length !== keywordLabels.length)) {
              _context.next = 70;
              break;
            }
            throw new Error("keywordSensitivities (".concat(keywordSensitivities.length, ") and keywordLabels (").concat(keywordLabels.length, ") length differs"));
          case 70:
            sensitivities = new Float32Array(keywordSensitivities);
            return _context.abrupt("return", [keywordPaths, keywordLabels, sensitivities]);
          case 72:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[12, 52, 55, 58]]);
    }));
    return _keywordsProcess.apply(this, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$1()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var PorcupineError = /*#__PURE__*/function (_Error) {
    _inherits(PorcupineError, _Error);
    var _super = _createSuper(PorcupineError);
    function PorcupineError(status, message) {
      var _this;
      var messageStack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var pvError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      _classCallCheck$1(this, PorcupineError);
      _this = _super.call(this, PorcupineError.errorToString(message, messageStack, pvError));
      _defineProperty$1(_assertThisInitialized(_this), "_status", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "_shortMessage", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "_messageStack", void 0);
      _this._status = status;
      _this.name = 'PorcupineError';
      _this._shortMessage = message;
      _this._messageStack = messageStack;
      return _this;
    }
    _createClass$1(PorcupineError, [{
      key: "status",
      get: function get() {
        return this._status;
      }
    }, {
      key: "shortMessage",
      get: function get() {
        return this._shortMessage;
      }
    }, {
      key: "messageStack",
      get: function get() {
        return this._messageStack;
      }
    }], [{
      key: "errorToString",
      value: function errorToString(initial, messageStack) {
        var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var msg = initial;
        if (pvError) {
          var pvErrorMessage = pvError.getErrorString();
          if (pvErrorMessage.length > 0) {
            msg += "\nDetails: ".concat(pvErrorMessage);
          }
        }
        if (messageStack.length > 0) {
          msg += ": ".concat(messageStack.reduce(function (acc, value, index) {
            return acc + '\n  [' + index + '] ' + value;
          }, ''));
        }
        return msg;
      }
    }]);
    return PorcupineError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var PorcupineOutOfMemoryError = /*#__PURE__*/function (_PorcupineError) {
    _inherits(PorcupineOutOfMemoryError, _PorcupineError);
    var _super2 = _createSuper(PorcupineOutOfMemoryError);
    function PorcupineOutOfMemoryError(message, messageStack) {
      var _this2;
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineOutOfMemoryError);
      _this2 = _super2.call(this, PvStatus.OUT_OF_MEMORY, message, messageStack, pvError);
      _this2.name = 'PorcupineOutOfMemoryError';
      return _this2;
    }
    return _createClass$1(PorcupineOutOfMemoryError);
  }(PorcupineError);
  var PorcupineIOError = /*#__PURE__*/function (_PorcupineError2) {
    _inherits(PorcupineIOError, _PorcupineError2);
    var _super3 = _createSuper(PorcupineIOError);
    function PorcupineIOError(message) {
      var _this3;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineIOError);
      _this3 = _super3.call(this, PvStatus.IO_ERROR, message, messageStack, pvError);
      _this3.name = 'PorcupineIOError';
      return _this3;
    }
    return _createClass$1(PorcupineIOError);
  }(PorcupineError);
  var PorcupineInvalidArgumentError = /*#__PURE__*/function (_PorcupineError3) {
    _inherits(PorcupineInvalidArgumentError, _PorcupineError3);
    var _super4 = _createSuper(PorcupineInvalidArgumentError);
    function PorcupineInvalidArgumentError(message) {
      var _this4;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineInvalidArgumentError);
      _this4 = _super4.call(this, PvStatus.INVALID_ARGUMENT, message, messageStack, pvError);
      _this4.name = 'PorcupineInvalidArgumentError';
      return _this4;
    }
    return _createClass$1(PorcupineInvalidArgumentError);
  }(PorcupineError);
  var PorcupineStopIterationError = /*#__PURE__*/function (_PorcupineError4) {
    _inherits(PorcupineStopIterationError, _PorcupineError4);
    var _super5 = _createSuper(PorcupineStopIterationError);
    function PorcupineStopIterationError(message) {
      var _this5;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineStopIterationError);
      _this5 = _super5.call(this, PvStatus.STOP_ITERATION, message, messageStack, pvError);
      _this5.name = 'PorcupineStopIterationError';
      return _this5;
    }
    return _createClass$1(PorcupineStopIterationError);
  }(PorcupineError);
  var PorcupineKeyError = /*#__PURE__*/function (_PorcupineError5) {
    _inherits(PorcupineKeyError, _PorcupineError5);
    var _super6 = _createSuper(PorcupineKeyError);
    function PorcupineKeyError(message) {
      var _this6;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineKeyError);
      _this6 = _super6.call(this, PvStatus.KEY_ERROR, message, messageStack, pvError);
      _this6.name = 'PorcupineKeyError';
      return _this6;
    }
    return _createClass$1(PorcupineKeyError);
  }(PorcupineError);
  var PorcupineInvalidStateError = /*#__PURE__*/function (_PorcupineError6) {
    _inherits(PorcupineInvalidStateError, _PorcupineError6);
    var _super7 = _createSuper(PorcupineInvalidStateError);
    function PorcupineInvalidStateError(message) {
      var _this7;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineInvalidStateError);
      _this7 = _super7.call(this, PvStatus.INVALID_STATE, message, messageStack, pvError);
      _this7.name = 'PorcupineInvalidStateError';
      return _this7;
    }
    return _createClass$1(PorcupineInvalidStateError);
  }(PorcupineError);
  var PorcupineRuntimeError = /*#__PURE__*/function (_PorcupineError7) {
    _inherits(PorcupineRuntimeError, _PorcupineError7);
    var _super8 = _createSuper(PorcupineRuntimeError);
    function PorcupineRuntimeError(message) {
      var _this8;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineRuntimeError);
      _this8 = _super8.call(this, PvStatus.RUNTIME_ERROR, message, messageStack, pvError);
      _this8.name = 'PorcupineRuntimeError';
      return _this8;
    }
    return _createClass$1(PorcupineRuntimeError);
  }(PorcupineError);
  var PorcupineActivationError = /*#__PURE__*/function (_PorcupineError8) {
    _inherits(PorcupineActivationError, _PorcupineError8);
    var _super9 = _createSuper(PorcupineActivationError);
    function PorcupineActivationError(message) {
      var _this9;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineActivationError);
      _this9 = _super9.call(this, PvStatus.ACTIVATION_ERROR, message, messageStack, pvError);
      _this9.name = 'PorcupineActivationError';
      return _this9;
    }
    return _createClass$1(PorcupineActivationError);
  }(PorcupineError);
  var PorcupineActivationLimitReachedError = /*#__PURE__*/function (_PorcupineError9) {
    _inherits(PorcupineActivationLimitReachedError, _PorcupineError9);
    var _super10 = _createSuper(PorcupineActivationLimitReachedError);
    function PorcupineActivationLimitReachedError(message) {
      var _this10;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineActivationLimitReachedError);
      _this10 = _super10.call(this, PvStatus.ACTIVATION_LIMIT_REACHED, message, messageStack, pvError);
      _this10.name = 'PorcupineActivationLimitReachedError';
      return _this10;
    }
    return _createClass$1(PorcupineActivationLimitReachedError);
  }(PorcupineError);
  var PorcupineActivationThrottledError = /*#__PURE__*/function (_PorcupineError10) {
    _inherits(PorcupineActivationThrottledError, _PorcupineError10);
    var _super11 = _createSuper(PorcupineActivationThrottledError);
    function PorcupineActivationThrottledError(message) {
      var _this11;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineActivationThrottledError);
      _this11 = _super11.call(this, PvStatus.ACTIVATION_THROTTLED, message, messageStack, pvError);
      _this11.name = 'PorcupineActivationThrottledError';
      return _this11;
    }
    return _createClass$1(PorcupineActivationThrottledError);
  }(PorcupineError);
  var PorcupineActivationRefusedError = /*#__PURE__*/function (_PorcupineError11) {
    _inherits(PorcupineActivationRefusedError, _PorcupineError11);
    var _super12 = _createSuper(PorcupineActivationRefusedError);
    function PorcupineActivationRefusedError(message) {
      var _this12;
      var messageStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var pvError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck$1(this, PorcupineActivationRefusedError);
      _this12 = _super12.call(this, PvStatus.ACTIVATION_REFUSED, message, messageStack, pvError);
      _this12.name = 'PorcupineActivationRefusedError';
      return _this12;
    }
    return _createClass$1(PorcupineActivationRefusedError);
  }(PorcupineError);
  function pvStatusToException(pvStatus, errorMessage) {
    var messageStack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var pvError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    switch (pvStatus) {
      case PvStatus.OUT_OF_MEMORY:
        return new PorcupineOutOfMemoryError(errorMessage, messageStack, pvError);
      case PvStatus.IO_ERROR:
        return new PorcupineIOError(errorMessage, messageStack, pvError);
      case PvStatus.INVALID_ARGUMENT:
        return new PorcupineInvalidArgumentError(errorMessage, messageStack, pvError);
      case PvStatus.STOP_ITERATION:
        return new PorcupineStopIterationError(errorMessage, messageStack, pvError);
      case PvStatus.KEY_ERROR:
        return new PorcupineKeyError(errorMessage, messageStack, pvError);
      case PvStatus.INVALID_STATE:
        return new PorcupineInvalidStateError(errorMessage, messageStack, pvError);
      case PvStatus.RUNTIME_ERROR:
        return new PorcupineRuntimeError(errorMessage, messageStack, pvError);
      case PvStatus.ACTIVATION_ERROR:
        return new PorcupineActivationError(errorMessage, messageStack, pvError);
      case PvStatus.ACTIVATION_LIMIT_REACHED:
        return new PorcupineActivationLimitReachedError(errorMessage, messageStack, pvError);
      case PvStatus.ACTIVATION_THROTTLED:
        return new PorcupineActivationThrottledError(errorMessage, messageStack, pvError);
      case PvStatus.ACTIVATION_REFUSED:
        return new PorcupineActivationRefusedError(errorMessage, messageStack, pvError);
      default:
        // eslint-disable-next-line no-console
        console.warn("Unmapped error code: ".concat(pvStatus));
        return new PorcupineError(pvStatus, errorMessage);
    }
  }

  var porcupine_errors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PorcupineError: PorcupineError,
    PorcupineOutOfMemoryError: PorcupineOutOfMemoryError,
    PorcupineIOError: PorcupineIOError,
    PorcupineInvalidArgumentError: PorcupineInvalidArgumentError,
    PorcupineStopIterationError: PorcupineStopIterationError,
    PorcupineKeyError: PorcupineKeyError,
    PorcupineInvalidStateError: PorcupineInvalidStateError,
    PorcupineRuntimeError: PorcupineRuntimeError,
    PorcupineActivationError: PorcupineActivationError,
    PorcupineActivationLimitReachedError: PorcupineActivationLimitReachedError,
    PorcupineActivationThrottledError: PorcupineActivationThrottledError,
    PorcupineActivationRefusedError: PorcupineActivationRefusedError,
    pvStatusToException: pvStatusToException
  });

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var Porcupine = /*#__PURE__*/function () {
    function Porcupine(handleWasm, keywordLabels, keywordDetectionCallback, processErrorCallback) {
      _classCallCheck$1(this, Porcupine);
      _defineProperty$1(this, "_pvPorcupineDelete", void 0);
      _defineProperty$1(this, "_pvPorcupineProcess", void 0);
      _defineProperty$1(this, "_pvGetErrorStack", void 0);
      _defineProperty$1(this, "_pvFreeErrorStack", void 0);
      _defineProperty$1(this, "_wasmMemory", void 0);
      _defineProperty$1(this, "_pvFree", void 0);
      _defineProperty$1(this, "_processMutex", void 0);
      _defineProperty$1(this, "_objectAddress", void 0);
      _defineProperty$1(this, "_inputBufferAddress", void 0);
      _defineProperty$1(this, "_keywordIndexAddress", void 0);
      _defineProperty$1(this, "_keywordLabels", void 0);
      _defineProperty$1(this, "_messageStackAddressAddressAddress", void 0);
      _defineProperty$1(this, "_messageStackDepthAddress", void 0);
      _defineProperty$1(this, "_keywordDetectionCallback", void 0);
      _defineProperty$1(this, "_processErrorCallback", void 0);
      Porcupine._frameLength = handleWasm.frameLength;
      Porcupine._sampleRate = handleWasm.sampleRate;
      Porcupine._version = handleWasm.version;
      this._pvPorcupineDelete = handleWasm.pvPorcupineDelete;
      this._pvPorcupineProcess = handleWasm.pvPorcupineProcess;
      this._pvGetErrorStack = handleWasm.pvGetErrorStack;
      this._pvFreeErrorStack = handleWasm.pvFreeErrorStack;
      this._wasmMemory = handleWasm.memory;
      this._pvFree = handleWasm.pvFree;
      this._objectAddress = handleWasm.objectAddress;
      this._inputBufferAddress = handleWasm.inputBufferAddress;
      this._keywordIndexAddress = handleWasm.keywordIndexAddress;
      this._messageStackAddressAddressAddress = handleWasm.messageStackAddressAddressAddress;
      this._messageStackDepthAddress = handleWasm.messageStackDepthAddress;
      this._keywordLabels = new Map();
      for (var i = 0; i < keywordLabels.length; i++) {
        this._keywordLabels.set(i, keywordLabels[i]);
      }
      this._processMutex = new Mutex();
      this._keywordDetectionCallback = keywordDetectionCallback;
      this._processErrorCallback = processErrorCallback;
    }
    /**
     * Get Porcupine engine version.
     */
    _createClass$1(Porcupine, [{
      key: "version",
      get: function get() {
        return Porcupine._version;
      }
      /**
       * Get frame length.
       */
    }, {
      key: "frameLength",
      get: function get() {
        return Porcupine._frameLength;
      }
      /**
       * Get sample rate.
       */
    }, {
      key: "sampleRate",
      get: function get() {
        return Porcupine._sampleRate;
      }
      /**
       * Get keyword labels.
       */
    }, {
      key: "keywordLabels",
      get: function get() {
        return this._keywordLabels;
      }
      /**
       * Creates an instance of the Porcupine wake word engine using either
       * a '.pv' file in public directory or a base64'd string.
       *
       * @param accessKey AccessKey generated by Picovoice Console.
       * @param keywords - Built-in or object containing a base64
       * representation of or path to public binary of a Porcupine keyword model and their sensitivities.
       * Can be provided as an array or a single keyword.
       * @param keywordDetectionCallback User-defined callback to run after a keyword is detected.
       * @param model object containing a base64 string
       * representation of or path to public binary of a Porcupine parameter model used to initialize Porcupine.
       * @param model.base64 The model in base64 string to initialize Leopard.
       * @param model.publicPath The model path relative to the public directory.
       * @param model.customWritePath Custom path to save the model in storage.
       * Set to a different name to use multiple models across `Porcupine` instances.
       * @param model.forceWrite Flag to overwrite the model in storage even if it exists.
       * @param model.version Leopard model version. Set to a higher number to update the model file.
       * @param options Optional configuration arguments, see PorcupineOptions for details.
       *
       * @returns An instance of the Porcupine engine.
       */
    }, {
      key: "process",
      value:
      /**
       * Processes a frame of audio. The required sample rate can be retrieved from '.sampleRate' and the length
       * of frame (number of audio samples per frame) can be retrieved from '.frameLength' The audio needs to be
       * 16-bit linearly-encoded. Furthermore, the engine operates on single-channel audio.
       *
       * @param pcm A frame of audio with properties described above.
       */
      function () {
        var _process = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(pcm) {
          var _this = this;
          var error;
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(pcm instanceof Int16Array)) {
                  error = new PorcupineInvalidArgumentError("The argument 'pcm' must be provided as an Int16Array");
                  if (this._processErrorCallback) {
                    this._processErrorCallback(error);
                  } else {
                    // eslint-disable-next-line no-console
                    console.error(error);
                  }
                }
                this._processMutex.runExclusive( /*#__PURE__*/_asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                  var memoryBuffer, status, memoryBufferUint8, memoryBufferView, messageStack, _error, keywordIndex, _this$_keywordLabels$;
                  return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (!(_this._wasmMemory === undefined)) {
                          _context.next = 2;
                          break;
                        }
                        throw new PorcupineInvalidStateError('Attempted to call Porcupine process after release.');
                      case 2:
                        memoryBuffer = new Int16Array(_this._wasmMemory.buffer);
                        memoryBuffer.set(pcm, _this._inputBufferAddress / Int16Array.BYTES_PER_ELEMENT);
                        _context.next = 6;
                        return _this._pvPorcupineProcess(_this._objectAddress, _this._inputBufferAddress, _this._keywordIndexAddress);
                      case 6:
                        status = _context.sent;
                        memoryBufferUint8 = new Uint8Array(_this._wasmMemory.buffer);
                        memoryBufferView = new DataView(_this._wasmMemory.buffer);
                        if (!(status !== PvStatus.SUCCESS)) {
                          _context.next = 15;
                          break;
                        }
                        _context.next = 12;
                        return Porcupine.getMessageStack(_this._pvGetErrorStack, _this._pvFreeErrorStack, _this._messageStackAddressAddressAddress, _this._messageStackDepthAddress, memoryBufferView, memoryBufferUint8);
                      case 12:
                        messageStack = _context.sent;
                        _error = pvStatusToException(status, "Processing failed", messageStack);
                        if (_this._processErrorCallback) {
                          _this._processErrorCallback(_error);
                        } else {
                          // eslint-disable-next-line no-console
                          console.error(_error);
                        }
                      case 15:
                        keywordIndex = memoryBufferView.getInt32(_this._keywordIndexAddress, true);
                        if (keywordIndex !== -1) {
                          _this._keywordDetectionCallback({
                            label: (_this$_keywordLabels$ = _this._keywordLabels.get(keywordIndex)) !== null && _this$_keywordLabels$ !== void 0 ? _this$_keywordLabels$ : '',
                            index: keywordIndex
                          });
                        }
                      case 17:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                })))["catch"](function (error) {
                  if (_this._processErrorCallback) {
                    _this._processErrorCallback(error);
                  } else {
                    // eslint-disable-next-line no-console
                    console.error(error);
                  }
                });
              case 2:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function process(_x) {
          return _process.apply(this, arguments);
        }
        return process;
      }()
      /**
       * Releases resources acquired by WebAssembly module.
       */
    }, {
      key: "release",
      value: function () {
        var _release = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
          return _regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._pvPorcupineDelete(this._objectAddress);
              case 2:
                _context3.next = 4;
                return this._pvFree(this._messageStackAddressAddressAddress);
              case 4:
                _context3.next = 6;
                return this._pvFree(this._messageStackDepthAddress);
              case 6:
                _context3.next = 8;
                return this._pvFree(this._inputBufferAddress);
              case 8:
                _context3.next = 10;
                return this._pvFree(this._keywordIndexAddress);
              case 10:
                delete this._wasmMemory;
                this._wasmMemory = undefined;
              case 12:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function release() {
          return _release.apply(this, arguments);
        }
        return release;
      }()
    }, {
      key: "onmessage",
      value: function () {
        var _onmessage = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(e) {
          return _regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = e.data.command;
                _context4.next = _context4.t0 === 'process' ? 3 : 6;
                break;
              case 3:
                _context4.next = 5;
                return this.process(e.data.inputFrame);
              case 5:
                return _context4.abrupt("break", 7);
              case 6:
                // eslint-disable-next-line no-console
                console.warn("Unrecognized command: ".concat(e.data.command));
              case 7:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
        function onmessage(_x2) {
          return _onmessage.apply(this, arguments);
        }
        return onmessage;
      }()
    }], [{
      key: "create",
      value: function () {
        var _create = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(accessKey, keywords, keywordDetectionCallback, model) {
          var options,
            _yield$keywordsProces,
            _yield$keywordsProces2,
            keywordPaths,
            keywordLabels,
            sensitivities,
            customWritePath,
            modelPath,
            _args5 = arguments;
          return _regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                options = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : {};
                _context5.next = 3;
                return keywordsProcess(keywords);
              case 3:
                _yield$keywordsProces = _context5.sent;
                _yield$keywordsProces2 = _slicedToArray(_yield$keywordsProces, 3);
                keywordPaths = _yield$keywordsProces2[0];
                keywordLabels = _yield$keywordsProces2[1];
                sensitivities = _yield$keywordsProces2[2];
                customWritePath = model.customWritePath ? model.customWritePath : 'porcupine_model';
                _context5.next = 11;
                return loadModel(_objectSpread$1(_objectSpread$1({}, model), {}, {
                  customWritePath: customWritePath
                }));
              case 11:
                modelPath = _context5.sent;
                return _context5.abrupt("return", this._init(accessKey, keywordPaths, keywordLabels, keywordDetectionCallback, sensitivities, modelPath, options));
              case 13:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
        function create(_x3, _x4, _x5, _x6) {
          return _create.apply(this, arguments);
        }
        return create;
      }()
      /**
       * Set base64 wasm file.
       * @param wasm Base64'd wasm file to use to initialize wasm.
       */
    }, {
      key: "setWasm",
      value: function setWasm(wasm) {
        if (this._wasm === undefined) {
          this._wasm = wasm;
        }
      }
      /**
       * Set base64 wasm file with SIMD feature.
       * @param wasmSimd Base64'd wasm file to use to initialize wasm.
       */
    }, {
      key: "setWasmSimd",
      value: function setWasmSimd(wasmSimd) {
        if (this._wasmSimd === undefined) {
          this._wasmSimd = wasmSimd;
        }
      }
    }, {
      key: "setSdk",
      value: function setSdk(sdk) {
        Porcupine._sdk = sdk;
      }
    }, {
      key: "_init",
      value: function () {
        var _init2 = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(accessKey, keywordPaths, keywordLabels, keywordDetectionCallback, sensitivities, modelPath) {
          var _this2 = this;
          var options,
            processErrorCallback,
            _args7 = arguments;
          return _regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                options = _args7.length > 6 && _args7[6] !== undefined ? _args7[6] : {};
                if (isAccessKeyValid(accessKey)) {
                  _context7.next = 3;
                  break;
                }
                throw new PorcupineInvalidArgumentError('Invalid AccessKey');
              case 3:
                if (!(keywordPaths.length !== keywordLabels.length || keywordPaths.length !== sensitivities.length)) {
                  _context7.next = 5;
                  break;
                }
                throw new PorcupineInvalidArgumentError("Number of keyword paths given (".concat(keywordPaths.length, ") does not match number of \n          keyword labels (").concat(keywordLabels.length, ") or sensitivities (").concat(sensitivities.length, ")"));
              case 5:
                processErrorCallback = options.processErrorCallback;
                return _context7.abrupt("return", new Promise(function (resolve, reject) {
                  Porcupine._porcupineMutex.runExclusive( /*#__PURE__*/_asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
                    var isSimd, wasmOutput;
                    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return simd();
                        case 2:
                          isSimd = _context6.sent;
                          _context6.next = 5;
                          return Porcupine.initWasm(accessKey.trim(), isSimd ? _this2._wasmSimd : _this2._wasm, modelPath, keywordPaths, sensitivities);
                        case 5:
                          wasmOutput = _context6.sent;
                          return _context6.abrupt("return", new Porcupine(wasmOutput, keywordLabels, keywordDetectionCallback, processErrorCallback));
                        case 7:
                        case "end":
                          return _context6.stop();
                      }
                    }, _callee6);
                  }))).then(function (result) {
                    resolve(result);
                  })["catch"](function (error) {
                    reject(error);
                  });
                }));
              case 7:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        function _init(_x7, _x8, _x9, _x10, _x11, _x12) {
          return _init2.apply(this, arguments);
        }
        return _init;
      }()
    }, {
      key: "initWasm",
      value: function () {
        var _initWasm = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(accessKey, wasmBase64, modelPath, keywordPaths, sensitivities) {
          var memory, memoryBufferUint8, memoryBufferInt32, memoryBufferFloat32, pvError, exports, aligned_alloc, pv_free, pv_porcupine_version, pv_porcupine_frame_length, pv_porcupine_process, pv_porcupine_delete, pv_porcupine_init, pv_sample_rate, pv_set_sdk, pv_get_error_stack, pv_free_error_stack, objectAddressAddress, accessKeyAddress, i, modelPathEncoded, modelPathAddress, keywordPathsAddressAddress, keywordPathsAddressList, _iterator, _step, keywordPath, keywordPathEncoded, keywordPathAddress, sensitivityAddress, keywordIndexAddress, sdkEncoded, sdkAddress, messageStackDepthAddress, messageStackAddressAddressAddress, status, memoryBufferView, messageStack, objectAddress, sampleRate, frameLength, versionAddress, version, inputBufferAddress;
          return _regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                // A WebAssembly page has a constant size of 64KiB. -> 1MiB ~= 16 pages
                // minimum memory requirements for init: 17 pages
                memory = new WebAssembly.Memory({
                  initial: 256
                });
                memoryBufferUint8 = new Uint8Array(memory.buffer);
                memoryBufferInt32 = new Int32Array(memory.buffer);
                memoryBufferFloat32 = new Float32Array(memory.buffer);
                pvError = new PvError();
                _context8.next = 7;
                return buildWasm(memory, wasmBase64, pvError);
              case 7:
                exports = _context8.sent;
                aligned_alloc = exports.aligned_alloc;
                pv_free = exports.pv_free;
                pv_porcupine_version = exports.pv_porcupine_version;
                pv_porcupine_frame_length = exports.pv_porcupine_frame_length;
                pv_porcupine_process = exports.pv_porcupine_process;
                pv_porcupine_delete = exports.pv_porcupine_delete;
                pv_porcupine_init = exports.pv_porcupine_init;
                pv_sample_rate = exports.pv_sample_rate;
                pv_set_sdk = exports.pv_set_sdk;
                pv_get_error_stack = exports.pv_get_error_stack;
                pv_free_error_stack = exports.pv_free_error_stack; // acquire and init memory for c_object
                _context8.next = 21;
                return aligned_alloc(Int32Array.BYTES_PER_ELEMENT, Int32Array.BYTES_PER_ELEMENT);
              case 21:
                objectAddressAddress = _context8.sent;
                if (!(objectAddressAddress === 0)) {
                  _context8.next = 24;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 24:
                _context8.next = 26;
                return aligned_alloc(Uint8Array.BYTES_PER_ELEMENT, (accessKey.length + 1) * Uint8Array.BYTES_PER_ELEMENT);
              case 26:
                accessKeyAddress = _context8.sent;
                if (!(accessKeyAddress === 0)) {
                  _context8.next = 29;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 29:
                for (i = 0; i < accessKey.length; i++) {
                  memoryBufferUint8[accessKeyAddress + i] = accessKey.charCodeAt(i);
                }
                memoryBufferUint8[accessKeyAddress + accessKey.length] = 0;
                modelPathEncoded = new TextEncoder().encode(modelPath); // acquire and init memory for c_model_path
                _context8.next = 34;
                return aligned_alloc(Uint8Array.BYTES_PER_ELEMENT, (modelPathEncoded.length + 1) * Uint8Array.BYTES_PER_ELEMENT);
              case 34:
                modelPathAddress = _context8.sent;
                if (!(modelPathAddress === 0)) {
                  _context8.next = 37;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 37:
                memoryBufferUint8.set(modelPathEncoded, modelPathAddress);
                memoryBufferUint8[modelPathAddress + modelPathEncoded.length] = 0;
                // acquire and init memory for c_keyword_paths
                _context8.next = 41;
                return aligned_alloc(Int32Array.BYTES_PER_ELEMENT, keywordPaths.length * Int32Array.BYTES_PER_ELEMENT);
              case 41:
                keywordPathsAddressAddress = _context8.sent;
                if (!(keywordPathsAddressAddress === 0)) {
                  _context8.next = 44;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 44:
                keywordPathsAddressList = [];
                _iterator = _createForOfIteratorHelper(keywordPaths);
                _context8.prev = 46;
                _iterator.s();
              case 48:
                if ((_step = _iterator.n()).done) {
                  _context8.next = 61;
                  break;
                }
                keywordPath = _step.value;
                keywordPathEncoded = new TextEncoder().encode(keywordPath);
                _context8.next = 53;
                return aligned_alloc(Uint8Array.BYTES_PER_ELEMENT, (keywordPathEncoded.length + 1) * Uint8Array.BYTES_PER_ELEMENT);
              case 53:
                keywordPathAddress = _context8.sent;
                if (!(keywordPathAddress === 0)) {
                  _context8.next = 56;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 56:
                memoryBufferUint8.set(keywordPathEncoded, keywordPathAddress);
                memoryBufferUint8[keywordPathAddress + keywordPathEncoded.length] = 0;
                keywordPathsAddressList.push(keywordPathAddress);
              case 59:
                _context8.next = 48;
                break;
              case 61:
                _context8.next = 66;
                break;
              case 63:
                _context8.prev = 63;
                _context8.t0 = _context8["catch"](46);
                _iterator.e(_context8.t0);
              case 66:
                _context8.prev = 66;
                _iterator.f();
                return _context8.finish(66);
              case 69:
                memoryBufferInt32.set(new Int32Array(keywordPathsAddressList), keywordPathsAddressAddress / Int32Array.BYTES_PER_ELEMENT);
                _context8.next = 72;
                return aligned_alloc(Float32Array.BYTES_PER_ELEMENT, keywordPaths.length * Float32Array.BYTES_PER_ELEMENT);
              case 72:
                sensitivityAddress = _context8.sent;
                if (!(sensitivityAddress === 0)) {
                  _context8.next = 75;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 75:
                memoryBufferFloat32.set(sensitivities, sensitivityAddress / Float32Array.BYTES_PER_ELEMENT);
                _context8.next = 78;
                return aligned_alloc(Int32Array.BYTES_PER_ELEMENT, Int32Array.BYTES_PER_ELEMENT);
              case 78:
                keywordIndexAddress = _context8.sent;
                if (!(keywordIndexAddress === 0)) {
                  _context8.next = 81;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 81:
                sdkEncoded = new TextEncoder().encode(this._sdk);
                _context8.next = 84;
                return aligned_alloc(Uint8Array.BYTES_PER_ELEMENT, (sdkEncoded.length + 1) * Uint8Array.BYTES_PER_ELEMENT);
              case 84:
                sdkAddress = _context8.sent;
                if (sdkAddress) {
                  _context8.next = 87;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 87:
                memoryBufferUint8.set(sdkEncoded, sdkAddress);
                memoryBufferUint8[sdkAddress + sdkEncoded.length] = 0;
                _context8.next = 91;
                return pv_set_sdk(sdkAddress);
              case 91:
                _context8.next = 93;
                return aligned_alloc(Int32Array.BYTES_PER_ELEMENT, Int32Array.BYTES_PER_ELEMENT);
              case 93:
                messageStackDepthAddress = _context8.sent;
                if (messageStackDepthAddress) {
                  _context8.next = 96;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 96:
                _context8.next = 98;
                return aligned_alloc(Int32Array.BYTES_PER_ELEMENT, Int32Array.BYTES_PER_ELEMENT);
              case 98:
                messageStackAddressAddressAddress = _context8.sent;
                if (messageStackAddressAddressAddress) {
                  _context8.next = 101;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 101:
                _context8.next = 103;
                return pv_porcupine_init(accessKeyAddress, modelPathAddress, keywordPaths.length, keywordPathsAddressAddress, sensitivityAddress, objectAddressAddress);
              case 103:
                status = _context8.sent;
                _context8.next = 106;
                return pv_free(accessKeyAddress);
              case 106:
                _context8.next = 108;
                return pv_free(modelPathAddress);
              case 108:
                _context8.next = 110;
                return pv_free(keywordPathsAddressAddress);
              case 110:
                _context8.next = 112;
                return pv_free(sensitivityAddress);
              case 112:
                memoryBufferView = new DataView(memory.buffer);
                if (!(status !== PvStatus.SUCCESS)) {
                  _context8.next = 118;
                  break;
                }
                _context8.next = 116;
                return Porcupine.getMessageStack(pv_get_error_stack, pv_free_error_stack, messageStackAddressAddressAddress, messageStackDepthAddress, memoryBufferView, memoryBufferUint8);
              case 116:
                messageStack = _context8.sent;
                throw pvStatusToException(status, "Initialization failed", messageStack, pvError);
              case 118:
                objectAddress = memoryBufferView.getInt32(objectAddressAddress, true);
                _context8.next = 121;
                return pv_free(objectAddressAddress);
              case 121:
                _context8.next = 123;
                return pv_sample_rate();
              case 123:
                sampleRate = _context8.sent;
                _context8.next = 126;
                return pv_porcupine_frame_length();
              case 126:
                frameLength = _context8.sent;
                _context8.next = 129;
                return pv_porcupine_version();
              case 129:
                versionAddress = _context8.sent;
                version = arrayBufferToStringAtIndex(memoryBufferUint8, versionAddress);
                _context8.next = 133;
                return aligned_alloc(Int16Array.BYTES_PER_ELEMENT, frameLength * Int16Array.BYTES_PER_ELEMENT);
              case 133:
                inputBufferAddress = _context8.sent;
                if (!(inputBufferAddress === 0)) {
                  _context8.next = 136;
                  break;
                }
                throw new PorcupineOutOfMemoryError('malloc failed: Cannot allocate memory');
              case 136:
                return _context8.abrupt("return", {
                  aligned_alloc: aligned_alloc,
                  memory: memory,
                  pvFree: pv_free,
                  frameLength: frameLength,
                  sampleRate: sampleRate,
                  version: version,
                  inputBufferAddress: inputBufferAddress,
                  keywordIndexAddress: keywordIndexAddress,
                  objectAddress: objectAddress,
                  messageStackAddressAddressAddress: messageStackAddressAddressAddress,
                  messageStackDepthAddress: messageStackDepthAddress,
                  pvPorcupineDelete: pv_porcupine_delete,
                  pvPorcupineProcess: pv_porcupine_process,
                  pvGetErrorStack: pv_get_error_stack,
                  pvFreeErrorStack: pv_free_error_stack
                });
              case 137:
              case "end":
                return _context8.stop();
            }
          }, _callee8, this, [[46, 63, 66, 69]]);
        }));
        function initWasm(_x13, _x14, _x15, _x16, _x17) {
          return _initWasm.apply(this, arguments);
        }
        return initWasm;
      }()
    }, {
      key: "getMessageStack",
      value: function () {
        var _getMessageStack = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9(pv_get_error_stack, pv_free_error_stack, messageStackAddressAddressAddress, messageStackDepthAddress, memoryBufferView, memoryBufferUint8) {
          var status, messageStackAddressAddress, messageStackDepth, messageStack, i, messageStackAddress, message;
          return _regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return pv_get_error_stack(messageStackAddressAddressAddress, messageStackDepthAddress);
              case 2:
                status = _context9.sent;
                if (!(status !== PvStatus.SUCCESS)) {
                  _context9.next = 5;
                  break;
                }
                throw pvStatusToException(status, "Unable to get Porcupine error state");
              case 5:
                messageStackAddressAddress = memoryBufferView.getInt32(messageStackAddressAddressAddress, true);
                messageStackDepth = memoryBufferView.getInt32(messageStackDepthAddress, true);
                messageStack = [];
                for (i = 0; i < messageStackDepth; i++) {
                  messageStackAddress = memoryBufferView.getInt32(messageStackAddressAddress + i * Int32Array.BYTES_PER_ELEMENT, true);
                  message = arrayBufferToStringAtIndex(memoryBufferUint8, messageStackAddress);
                  messageStack.push(message);
                }
                _context9.next = 11;
                return pv_free_error_stack(messageStackAddressAddress);
              case 11:
                return _context9.abrupt("return", messageStack);
              case 12:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        }));
        function getMessageStack(_x18, _x19, _x20, _x21, _x22, _x23) {
          return _getMessageStack.apply(this, arguments);
        }
        return getMessageStack;
      }()
    }]);
    return Porcupine;
  }();
  _defineProperty$1(Porcupine, "_frameLength", void 0);
  _defineProperty$1(Porcupine, "_sampleRate", void 0);
  _defineProperty$1(Porcupine, "_version", void 0);
  _defineProperty$1(Porcupine, "_wasm", void 0);
  _defineProperty$1(Porcupine, "_wasmSimd", void 0);
  _defineProperty$1(Porcupine, "_sdk", "web");
  _defineProperty$1(Porcupine, "_porcupineMutex", new Mutex());

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }

  function decodeBase64(base64, enableUnicode) {
      var binaryString = atob(base64);
      if (enableUnicode) {
          var binaryView = new Uint8Array(binaryString.length);
          for (var i = 0, n = binaryString.length; i < n; ++i) {
              binaryView[i] = binaryString.charCodeAt(i);
          }
          return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
      }
      return binaryString;
  }

  function createURL(base64, sourcemapArg, enableUnicodeArg) {
      var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
      var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
      var source = decodeBase64(base64, enableUnicode);
      var start = source.indexOf('\n', 10) + 1;
      var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
      var blob = new Blob([body], { type: 'application/javascript' });
      return URL.createObjectURL(blob);
  }

  function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
      var url;
      return function WorkerFactory(options) {
          url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
          return new Worker(url, options);
      };
  }

  var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgZnVuY3Rpb24gX3R5cGVvZiQyKG8pIHsKICAgICJAYmFiZWwvaGVscGVycyAtIHR5cGVvZiI7CgogICAgcmV0dXJuIF90eXBlb2YkMiA9ICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiAic3ltYm9sIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBvOwogICAgfSA6IGZ1bmN0aW9uIChvKSB7CiAgICAgIHJldHVybiBvICYmICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/ICJzeW1ib2wiIDogdHlwZW9mIG87CiAgICB9LCBfdHlwZW9mJDIobyk7CiAgfQoKICBmdW5jdGlvbiBfdG9QcmltaXRpdmUkMShpbnB1dCwgaGludCkgewogICAgaWYgKF90eXBlb2YkMihpbnB1dCkgIT09ICJvYmplY3QiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7CiAgICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07CiAgICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7CiAgICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgImRlZmF1bHQiKTsKICAgICAgaWYgKF90eXBlb2YkMihyZXMpICE9PSAib2JqZWN0IikgcmV0dXJuIHJlczsKICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS4iKTsKICAgIH0KICAgIHJldHVybiAoaGludCA9PT0gInN0cmluZyIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsKICB9CgogIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5JDEoYXJnKSB7CiAgICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlJDEoYXJnLCAic3RyaW5nIik7CiAgICByZXR1cm4gX3R5cGVvZiQyKGtleSkgPT09ICJzeW1ib2wiID8ga2V5IDogU3RyaW5nKGtleSk7CiAgfQoKICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkkMShvYmosIGtleSwgdmFsdWUpIHsKICAgIGtleSA9IF90b1Byb3BlcnR5S2V5JDEoa2V5KTsKICAgIGlmIChrZXkgaW4gb2JqKSB7CiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgewogICAgICAgIHZhbHVlOiB2YWx1ZSwKICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLAogICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSwKICAgICAgICB3cml0YWJsZTogdHJ1ZQogICAgICB9KTsKICAgIH0gZWxzZSB7CiAgICAgIG9ialtrZXldID0gdmFsdWU7CiAgICB9CiAgICByZXR1cm4gb2JqOwogIH0KCiAgZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwJDEoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7CiAgICB0cnkgewogICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7CiAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7CiAgICB9IGNhdGNoIChlcnJvcikgewogICAgICByZWplY3QoZXJyb3IpOwogICAgICByZXR1cm47CiAgICB9CiAgICBpZiAoaW5mby5kb25lKSB7CiAgICAgIHJlc29sdmUodmFsdWUpOwogICAgfSBlbHNlIHsKICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOwogICAgfQogIH0KICBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvciQxKGZuKSB7CiAgICByZXR1cm4gZnVuY3Rpb24gKCkgewogICAgICB2YXIgc2VsZiA9IHRoaXMsCiAgICAgICAgYXJncyA9IGFyZ3VtZW50czsKICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsKICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7CiAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHsKICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcCQxKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCAibmV4dCIsIHZhbHVlKTsKICAgICAgICB9CiAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikgewogICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwJDEoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csICJ0aHJvdyIsIGVycik7CiAgICAgICAgfQogICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7CiAgICAgIH0pOwogICAgfTsKICB9CgogIGZ1bmN0aW9uIGdldERlZmF1bHRFeHBvcnRGcm9tQ2pzICh4KSB7CiAgCXJldHVybiB4ICYmIHguX19lc01vZHVsZSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ2RlZmF1bHQnKSA/IHhbJ2RlZmF1bHQnXSA6IHg7CiAgfQoKICB2YXIgcmVnZW5lcmF0b3JSdW50aW1lJDIgPSB7ZXhwb3J0czoge319OwoKICB2YXIgX3R5cGVvZiQxID0ge2V4cG9ydHM6IHt9fTsKCiAgX3R5cGVvZiQxLmV4cG9ydHM7CgogIChmdW5jdGlvbiAobW9kdWxlKSB7CiAgCWZ1bmN0aW9uIF90eXBlb2YobykgewogIAkgICJAYmFiZWwvaGVscGVycyAtIHR5cGVvZiI7CgogIAkgIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gImZ1bmN0aW9uIiA9PSB0eXBlb2YgU3ltYm9sICYmICJzeW1ib2wiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgewogIAkgICAgcmV0dXJuIHR5cGVvZiBvOwogIAkgIH0gOiBmdW5jdGlvbiAobykgewogIAkgICAgcmV0dXJuIG8gJiYgImZ1bmN0aW9uIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gInN5bWJvbCIgOiB0eXBlb2YgbzsKICAJICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbImRlZmF1bHQiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvKTsKICAJfQogIAltb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1siZGVmYXVsdCJdID0gbW9kdWxlLmV4cG9ydHM7IAogIH0gKF90eXBlb2YkMSkpOwoKICB2YXIgX3R5cGVvZkV4cG9ydHMgPSBfdHlwZW9mJDEuZXhwb3J0czsKCiAgcmVnZW5lcmF0b3JSdW50aW1lJDIuZXhwb3J0czsKCiAgKGZ1bmN0aW9uIChtb2R1bGUpIHsKICAJdmFyIF90eXBlb2YgPSBfdHlwZW9mRXhwb3J0c1siZGVmYXVsdCJdOwogIAlmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkgewogIAkgIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7CiAgCSAgICByZXR1cm4gZTsKICAJICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbImRlZmF1bHQiXSA9IG1vZHVsZS5leHBvcnRzOwogIAkgIHZhciB0LAogIAkgICAgZSA9IHt9LAogIAkgICAgciA9IE9iamVjdC5wcm90b3R5cGUsCiAgCSAgICBuID0gci5oYXNPd25Qcm9wZXJ0eSwKICAJICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHsKICAJICAgICAgdFtlXSA9IHIudmFsdWU7CiAgCSAgICB9LAogIAkgICAgaSA9ICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LAogIAkgICAgYSA9IGkuaXRlcmF0b3IgfHwgIkBAaXRlcmF0b3IiLAogIAkgICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCAiQEBhc3luY0l0ZXJhdG9yIiwKICAJICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8ICJAQHRvU3RyaW5nVGFnIjsKICAJICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikgewogIAkgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBlLCB7CiAgCSAgICAgIHZhbHVlOiByLAogIAkgICAgICBlbnVtZXJhYmxlOiAhMCwKICAJICAgICAgY29uZmlndXJhYmxlOiAhMCwKICAJICAgICAgd3JpdGFibGU6ICEwCiAgCSAgICB9KSwgdFtlXTsKICAJICB9CiAgCSAgdHJ5IHsKICAJICAgIGRlZmluZSh7fSwgIiIpOwogIAkgIH0gY2F0Y2ggKHQpIHsKICAJICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZSh0LCBlLCByKSB7CiAgCSAgICAgIHJldHVybiB0W2VdID0gcjsKICAJICAgIH07CiAgCSAgfQogIAkgIGZ1bmN0aW9uIHdyYXAodCwgZSwgciwgbikgewogIAkgICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvciwKICAJICAgICAgYSA9IE9iamVjdC5jcmVhdGUoaS5wcm90b3R5cGUpLAogIAkgICAgICBjID0gbmV3IENvbnRleHQobiB8fCBbXSk7CiAgCSAgICByZXR1cm4gbyhhLCAiX2ludm9rZSIsIHsKICAJICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYykKICAJICAgIH0pLCBhOwogIAkgIH0KICAJICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7CiAgCSAgICB0cnkgewogIAkgICAgICByZXR1cm4gewogIAkgICAgICAgIHR5cGU6ICJub3JtYWwiLAogIAkgICAgICAgIGFyZzogdC5jYWxsKGUsIHIpCiAgCSAgICAgIH07CiAgCSAgICB9IGNhdGNoICh0KSB7CiAgCSAgICAgIHJldHVybiB7CiAgCSAgICAgICAgdHlwZTogInRocm93IiwKICAJICAgICAgICBhcmc6IHQKICAJICAgICAgfTsKICAJICAgIH0KICAJICB9CiAgCSAgZS53cmFwID0gd3JhcDsKICAJICB2YXIgaCA9ICJzdXNwZW5kZWRTdGFydCIsCiAgCSAgICBsID0gInN1c3BlbmRlZFlpZWxkIiwKICAJICAgIGYgPSAiZXhlY3V0aW5nIiwKICAJICAgIHMgPSAiY29tcGxldGVkIiwKICAJICAgIHkgPSB7fTsKICAJICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fQogIAkgIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge30KICAJICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9CiAgCSAgdmFyIHAgPSB7fTsKICAJICBkZWZpbmUocCwgYSwgZnVuY3Rpb24gKCkgewogIAkgICAgcmV0dXJuIHRoaXM7CiAgCSAgfSk7CiAgCSAgdmFyIGQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsCiAgCSAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpOwogIAkgIHYgJiYgdiAhPT0gciAmJiBuLmNhbGwodiwgYSkgJiYgKHAgPSB2KTsKICAJICB2YXIgZyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHApOwogIAkgIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7CiAgCSAgICBbIm5leHQiLCAidGhyb3ciLCAicmV0dXJuIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkgewogIAkgICAgICBkZWZpbmUodCwgZSwgZnVuY3Rpb24gKHQpIHsKICAJICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpOwogIAkgICAgICB9KTsKICAJICAgIH0pOwogIAkgIH0KICAJICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKHQsIGUpIHsKICAJICAgIGZ1bmN0aW9uIGludm9rZShyLCBvLCBpLCBhKSB7CiAgCSAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7CiAgCSAgICAgIGlmICgidGhyb3ciICE9PSBjLnR5cGUpIHsKICAJICAgICAgICB2YXIgdSA9IGMuYXJnLAogIAkgICAgICAgICAgaCA9IHUudmFsdWU7CiAgCSAgICAgICAgcmV0dXJuIGggJiYgIm9iamVjdCIgPT0gX3R5cGVvZihoKSAmJiBuLmNhbGwoaCwgIl9fYXdhaXQiKSA/IGUucmVzb2x2ZShoLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHQpIHsKICAJICAgICAgICAgIGludm9rZSgibmV4dCIsIHQsIGksIGEpOwogIAkgICAgICAgIH0sIGZ1bmN0aW9uICh0KSB7CiAgCSAgICAgICAgICBpbnZva2UoInRocm93IiwgdCwgaSwgYSk7CiAgCSAgICAgICAgfSkgOiBlLnJlc29sdmUoaCkudGhlbihmdW5jdGlvbiAodCkgewogIAkgICAgICAgICAgdS52YWx1ZSA9IHQsIGkodSk7CiAgCSAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHsKICAJICAgICAgICAgIHJldHVybiBpbnZva2UoInRocm93IiwgdCwgaSwgYSk7CiAgCSAgICAgICAgfSk7CiAgCSAgICAgIH0KICAJICAgICAgYShjLmFyZyk7CiAgCSAgICB9CiAgCSAgICB2YXIgcjsKICAJICAgIG8odGhpcywgIl9pbnZva2UiLCB7CiAgCSAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0LCBuKSB7CiAgCSAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7CiAgCSAgICAgICAgICByZXR1cm4gbmV3IGUoZnVuY3Rpb24gKGUsIHIpIHsKICAJICAgICAgICAgICAgaW52b2tlKHQsIG4sIGUsIHIpOwogIAkgICAgICAgICAgfSk7CiAgCSAgICAgICAgfQogIAkgICAgICAgIHJldHVybiByID0gciA/IHIudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTsKICAJICAgICAgfQogIAkgICAgfSk7CiAgCSAgfQogIAkgIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoZSwgciwgbikgewogIAkgICAgdmFyIG8gPSBoOwogIAkgICAgcmV0dXJuIGZ1bmN0aW9uIChpLCBhKSB7CiAgCSAgICAgIGlmIChvID09PSBmKSB0aHJvdyBuZXcgRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmciKTsKICAJICAgICAgaWYgKG8gPT09IHMpIHsKICAJICAgICAgICBpZiAoInRocm93IiA9PT0gaSkgdGhyb3cgYTsKICAJICAgICAgICByZXR1cm4gewogIAkgICAgICAgICAgdmFsdWU6IHQsCiAgCSAgICAgICAgICBkb25lOiAhMAogIAkgICAgICAgIH07CiAgCSAgICAgIH0KICAJICAgICAgZm9yIChuLm1ldGhvZCA9IGksIG4uYXJnID0gYTs7KSB7CiAgCSAgICAgICAgdmFyIGMgPSBuLmRlbGVnYXRlOwogIAkgICAgICAgIGlmIChjKSB7CiAgCSAgICAgICAgICB2YXIgdSA9IG1heWJlSW52b2tlRGVsZWdhdGUoYywgbik7CiAgCSAgICAgICAgICBpZiAodSkgewogIAkgICAgICAgICAgICBpZiAodSA9PT0geSkgY29udGludWU7CiAgCSAgICAgICAgICAgIHJldHVybiB1OwogIAkgICAgICAgICAgfQogIAkgICAgICAgIH0KICAJICAgICAgICBpZiAoIm5leHQiID09PSBuLm1ldGhvZCkgbi5zZW50ID0gbi5fc2VudCA9IG4uYXJnO2Vsc2UgaWYgKCJ0aHJvdyIgPT09IG4ubWV0aG9kKSB7CiAgCSAgICAgICAgICBpZiAobyA9PT0gaCkgdGhyb3cgbyA9IHMsIG4uYXJnOwogIAkgICAgICAgICAgbi5kaXNwYXRjaEV4Y2VwdGlvbihuLmFyZyk7CiAgCSAgICAgICAgfSBlbHNlICJyZXR1cm4iID09PSBuLm1ldGhvZCAmJiBuLmFicnVwdCgicmV0dXJuIiwgbi5hcmcpOwogIAkgICAgICAgIG8gPSBmOwogIAkgICAgICAgIHZhciBwID0gdHJ5Q2F0Y2goZSwgciwgbik7CiAgCSAgICAgICAgaWYgKCJub3JtYWwiID09PSBwLnR5cGUpIHsKICAJICAgICAgICAgIGlmIChvID0gbi5kb25lID8gcyA6IGwsIHAuYXJnID09PSB5KSBjb250aW51ZTsKICAJICAgICAgICAgIHJldHVybiB7CiAgCSAgICAgICAgICAgIHZhbHVlOiBwLmFyZywKICAJICAgICAgICAgICAgZG9uZTogbi5kb25lCiAgCSAgICAgICAgICB9OwogIAkgICAgICAgIH0KICAJICAgICAgICAidGhyb3ciID09PSBwLnR5cGUgJiYgKG8gPSBzLCBuLm1ldGhvZCA9ICJ0aHJvdyIsIG4uYXJnID0gcC5hcmcpOwogIAkgICAgICB9CiAgCSAgICB9OwogIAkgIH0KICAJICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpIHsKICAJICAgIHZhciBuID0gci5tZXRob2QsCiAgCSAgICAgIG8gPSBlLml0ZXJhdG9yW25dOwogIAkgICAgaWYgKG8gPT09IHQpIHJldHVybiByLmRlbGVnYXRlID0gbnVsbCwgInRocm93IiA9PT0gbiAmJiBlLml0ZXJhdG9yWyJyZXR1cm4iXSAmJiAoci5tZXRob2QgPSAicmV0dXJuIiwgci5hcmcgPSB0LCBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpLCAidGhyb3ciID09PSByLm1ldGhvZCkgfHwgInJldHVybiIgIT09IG4gJiYgKHIubWV0aG9kID0gInRocm93Iiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICciICsgbiArICInIG1ldGhvZCIpKSwgeTsKICAJICAgIHZhciBpID0gdHJ5Q2F0Y2gobywgZS5pdGVyYXRvciwgci5hcmcpOwogIAkgICAgaWYgKCJ0aHJvdyIgPT09IGkudHlwZSkgcmV0dXJuIHIubWV0aG9kID0gInRocm93Iiwgci5hcmcgPSBpLmFyZywgci5kZWxlZ2F0ZSA9IG51bGwsIHk7CiAgCSAgICB2YXIgYSA9IGkuYXJnOwogIAkgICAgcmV0dXJuIGEgPyBhLmRvbmUgPyAocltlLnJlc3VsdE5hbWVdID0gYS52YWx1ZSwgci5uZXh0ID0gZS5uZXh0TG9jLCAicmV0dXJuIiAhPT0gci5tZXRob2QgJiYgKHIubWV0aG9kID0gIm5leHQiLCByLmFyZyA9IHQpLCByLmRlbGVnYXRlID0gbnVsbCwgeSkgOiBhIDogKHIubWV0aG9kID0gInRocm93Iiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdCIpLCByLmRlbGVnYXRlID0gbnVsbCwgeSk7CiAgCSAgfQogIAkgIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeSh0KSB7CiAgCSAgICB2YXIgZSA9IHsKICAJICAgICAgdHJ5TG9jOiB0WzBdCiAgCSAgICB9OwogIAkgICAgMSBpbiB0ICYmIChlLmNhdGNoTG9jID0gdFsxXSksIDIgaW4gdCAmJiAoZS5maW5hbGx5TG9jID0gdFsyXSwgZS5hZnRlckxvYyA9IHRbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlKTsKICAJICB9CiAgCSAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeSh0KSB7CiAgCSAgICB2YXIgZSA9IHQuY29tcGxldGlvbiB8fCB7fTsKICAJICAgIGUudHlwZSA9ICJub3JtYWwiLCBkZWxldGUgZS5hcmcsIHQuY29tcGxldGlvbiA9IGU7CiAgCSAgfQogIAkgIGZ1bmN0aW9uIENvbnRleHQodCkgewogIAkgICAgdGhpcy50cnlFbnRyaWVzID0gW3sKICAJICAgICAgdHJ5TG9jOiAicm9vdCIKICAJICAgIH1dLCB0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7CiAgCSAgfQogIAkgIGZ1bmN0aW9uIHZhbHVlcyhlKSB7CiAgCSAgICBpZiAoZSB8fCAiIiA9PT0gZSkgewogIAkgICAgICB2YXIgciA9IGVbYV07CiAgCSAgICAgIGlmIChyKSByZXR1cm4gci5jYWxsKGUpOwogIAkgICAgICBpZiAoImZ1bmN0aW9uIiA9PSB0eXBlb2YgZS5uZXh0KSByZXR1cm4gZTsKICAJICAgICAgaWYgKCFpc05hTihlLmxlbmd0aCkpIHsKICAJICAgICAgICB2YXIgbyA9IC0xLAogIAkgICAgICAgICAgaSA9IGZ1bmN0aW9uIG5leHQoKSB7CiAgCSAgICAgICAgICAgIGZvciAoOyArK28gPCBlLmxlbmd0aDspIGlmIChuLmNhbGwoZSwgbykpIHJldHVybiBuZXh0LnZhbHVlID0gZVtvXSwgbmV4dC5kb25lID0gITEsIG5leHQ7CiAgCSAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITAsIG5leHQ7CiAgCSAgICAgICAgICB9OwogIAkgICAgICAgIHJldHVybiBpLm5leHQgPSBpOwogIAkgICAgICB9CiAgCSAgICB9CiAgCSAgICB0aHJvdyBuZXcgVHlwZUVycm9yKF90eXBlb2YoZSkgKyAiIGlzIG5vdCBpdGVyYWJsZSIpOwogIAkgIH0KICAJICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIG8oZywgImNvbnN0cnVjdG9yIiwgewogIAkgICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLAogIAkgICAgY29uZmlndXJhYmxlOiAhMAogIAkgIH0pLCBvKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCAiY29uc3RydWN0b3IiLCB7CiAgCSAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sCiAgCSAgICBjb25maWd1cmFibGU6ICEwCiAgCSAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB1LCAiR2VuZXJhdG9yRnVuY3Rpb24iKSwgZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKHQpIHsKICAJICAgIHZhciBlID0gImZ1bmN0aW9uIiA9PSB0eXBlb2YgdCAmJiB0LmNvbnN0cnVjdG9yOwogIAkgICAgcmV0dXJuICEhZSAmJiAoZSA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgIkdlbmVyYXRvckZ1bmN0aW9uIiA9PT0gKGUuZGlzcGxheU5hbWUgfHwgZS5uYW1lKSk7CiAgCSAgfSwgZS5tYXJrID0gZnVuY3Rpb24gKHQpIHsKICAJICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YodCwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKHQuX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZSh0LCB1LCAiR2VuZXJhdG9yRnVuY3Rpb24iKSksIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShnKSwgdDsKICAJICB9LCBlLmF3cmFwID0gZnVuY3Rpb24gKHQpIHsKICAJICAgIHJldHVybiB7CiAgCSAgICAgIF9fYXdhaXQ6IHQKICAJICAgIH07CiAgCSAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBjLCBmdW5jdGlvbiAoKSB7CiAgCSAgICByZXR1cm4gdGhpczsKICAJICB9KSwgZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZS5hc3luYyA9IGZ1bmN0aW9uICh0LCByLCBuLCBvLCBpKSB7CiAgCSAgICB2b2lkIDAgPT09IGkgJiYgKGkgPSBQcm9taXNlKTsKICAJICAgIHZhciBhID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcCh0LCByLCBuLCBvKSwgaSk7CiAgCSAgICByZXR1cm4gZS5pc0dlbmVyYXRvckZ1bmN0aW9uKHIpID8gYSA6IGEubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHQpIHsKICAJICAgICAgcmV0dXJuIHQuZG9uZSA/IHQudmFsdWUgOiBhLm5leHQoKTsKICAJICAgIH0pOwogIAkgIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhnKSwgZGVmaW5lKGcsIHUsICJHZW5lcmF0b3IiKSwgZGVmaW5lKGcsIGEsIGZ1bmN0aW9uICgpIHsKICAJICAgIHJldHVybiB0aGlzOwogIAkgIH0pLCBkZWZpbmUoZywgInRvU3RyaW5nIiwgZnVuY3Rpb24gKCkgewogIAkgICAgcmV0dXJuICJbb2JqZWN0IEdlbmVyYXRvcl0iOwogIAkgIH0pLCBlLmtleXMgPSBmdW5jdGlvbiAodCkgewogIAkgICAgdmFyIGUgPSBPYmplY3QodCksCiAgCSAgICAgIHIgPSBbXTsKICAJICAgIGZvciAodmFyIG4gaW4gZSkgci5wdXNoKG4pOwogIAkgICAgcmV0dXJuIHIucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkgewogIAkgICAgICBmb3IgKDsgci5sZW5ndGg7KSB7CiAgCSAgICAgICAgdmFyIHQgPSByLnBvcCgpOwogIAkgICAgICAgIGlmICh0IGluIGUpIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITEsIG5leHQ7CiAgCSAgICAgIH0KICAJICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0OwogIAkgICAgfTsKICAJICB9LCBlLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7CiAgCSAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCwKICAJICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChlKSB7CiAgCSAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9ICJuZXh0IiwgdGhpcy5hcmcgPSB0LCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIWUpIGZvciAodmFyIHIgaW4gdGhpcykgInQiID09PSByLmNoYXJBdCgwKSAmJiBuLmNhbGwodGhpcywgcikgJiYgIWlzTmFOKCtyLnNsaWNlKDEpKSAmJiAodGhpc1tyXSA9IHQpOwogIAkgICAgfSwKICAJICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7CiAgCSAgICAgIHRoaXMuZG9uZSA9ICEwOwogIAkgICAgICB2YXIgdCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uOwogIAkgICAgICBpZiAoInRocm93IiA9PT0gdC50eXBlKSB0aHJvdyB0LmFyZzsKICAJICAgICAgcmV0dXJuIHRoaXMucnZhbDsKICAJICAgIH0sCiAgCSAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZSkgewogIAkgICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBlOwogIAkgICAgICB2YXIgciA9IHRoaXM7CiAgCSAgICAgIGZ1bmN0aW9uIGhhbmRsZShuLCBvKSB7CiAgCSAgICAgICAgcmV0dXJuIGEudHlwZSA9ICJ0aHJvdyIsIGEuYXJnID0gZSwgci5uZXh0ID0gbiwgbyAmJiAoci5tZXRob2QgPSAibmV4dCIsIHIuYXJnID0gdCksICEhbzsKICAJICAgICAgfQogIAkgICAgICBmb3IgKHZhciBvID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IG8gPj0gMDsgLS1vKSB7CiAgCSAgICAgICAgdmFyIGkgPSB0aGlzLnRyeUVudHJpZXNbb10sCiAgCSAgICAgICAgICBhID0gaS5jb21wbGV0aW9uOwogIAkgICAgICAgIGlmICgicm9vdCIgPT09IGkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKCJlbmQiKTsKICAJICAgICAgICBpZiAoaS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7CiAgCSAgICAgICAgICB2YXIgYyA9IG4uY2FsbChpLCAiY2F0Y2hMb2MiKSwKICAJICAgICAgICAgICAgdSA9IG4uY2FsbChpLCAiZmluYWxseUxvYyIpOwogIAkgICAgICAgICAgaWYgKGMgJiYgdSkgewogIAkgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7CiAgCSAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoaS5maW5hbGx5TG9jKTsKICAJICAgICAgICAgIH0gZWxzZSBpZiAoYykgewogIAkgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7CiAgCSAgICAgICAgICB9IGVsc2UgewogIAkgICAgICAgICAgICBpZiAoIXUpIHRocm93IG5ldyBFcnJvcigidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHkiKTsKICAJICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShpLmZpbmFsbHlMb2MpOwogIAkgICAgICAgICAgfQogIAkgICAgICAgIH0KICAJICAgICAgfQogIAkgICAgfSwKICAJICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHQsIGUpIHsKICAJICAgICAgZm9yICh2YXIgciA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyByID49IDA7IC0tcikgewogIAkgICAgICAgIHZhciBvID0gdGhpcy50cnlFbnRyaWVzW3JdOwogIAkgICAgICAgIGlmIChvLnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgbi5jYWxsKG8sICJmaW5hbGx5TG9jIikgJiYgdGhpcy5wcmV2IDwgby5maW5hbGx5TG9jKSB7CiAgCSAgICAgICAgICB2YXIgaSA9IG87CiAgCSAgICAgICAgICBicmVhazsKICAJICAgICAgICB9CiAgCSAgICAgIH0KICAJICAgICAgaSAmJiAoImJyZWFrIiA9PT0gdCB8fCAiY29udGludWUiID09PSB0KSAmJiBpLnRyeUxvYyA8PSBlICYmIGUgPD0gaS5maW5hbGx5TG9jICYmIChpID0gbnVsbCk7CiAgCSAgICAgIHZhciBhID0gaSA/IGkuY29tcGxldGlvbiA6IHt9OwogIAkgICAgICByZXR1cm4gYS50eXBlID0gdCwgYS5hcmcgPSBlLCBpID8gKHRoaXMubWV0aG9kID0gIm5leHQiLCB0aGlzLm5leHQgPSBpLmZpbmFsbHlMb2MsIHkpIDogdGhpcy5jb21wbGV0ZShhKTsKICAJICAgIH0sCiAgCSAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUodCwgZSkgewogIAkgICAgICBpZiAoInRocm93IiA9PT0gdC50eXBlKSB0aHJvdyB0LmFyZzsKICAJICAgICAgcmV0dXJuICJicmVhayIgPT09IHQudHlwZSB8fCAiY29udGludWUiID09PSB0LnR5cGUgPyB0aGlzLm5leHQgPSB0LmFyZyA6ICJyZXR1cm4iID09PSB0LnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSB0LmFyZywgdGhpcy5tZXRob2QgPSAicmV0dXJuIiwgdGhpcy5uZXh0ID0gImVuZCIpIDogIm5vcm1hbCIgPT09IHQudHlwZSAmJiBlICYmICh0aGlzLm5leHQgPSBlKSwgeTsKICAJICAgIH0sCiAgCSAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaCh0KSB7CiAgCSAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHsKICAJICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTsKICAJICAgICAgICBpZiAoci5maW5hbGx5TG9jID09PSB0KSByZXR1cm4gdGhpcy5jb21wbGV0ZShyLmNvbXBsZXRpb24sIHIuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KHIpLCB5OwogIAkgICAgICB9CiAgCSAgICB9LAogIAkgICAgImNhdGNoIjogZnVuY3Rpb24gX2NhdGNoKHQpIHsKICAJICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkgewogIAkgICAgICAgIHZhciByID0gdGhpcy50cnlFbnRyaWVzW2VdOwogIAkgICAgICAgIGlmIChyLnRyeUxvYyA9PT0gdCkgewogIAkgICAgICAgICAgdmFyIG4gPSByLmNvbXBsZXRpb247CiAgCSAgICAgICAgICBpZiAoInRocm93IiA9PT0gbi50eXBlKSB7CiAgCSAgICAgICAgICAgIHZhciBvID0gbi5hcmc7CiAgCSAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkocik7CiAgCSAgICAgICAgICB9CiAgCSAgICAgICAgICByZXR1cm4gbzsKICAJICAgICAgICB9CiAgCSAgICAgIH0KICAJICAgICAgdGhyb3cgbmV3IEVycm9yKCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHQiKTsKICAJICAgIH0sCiAgCSAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGUsIHIsIG4pIHsKICAJICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7CiAgCSAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhlKSwKICAJICAgICAgICByZXN1bHROYW1lOiByLAogIAkgICAgICAgIG5leHRMb2M6IG4KICAJICAgICAgfSwgIm5leHQiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB0KSwgeTsKICAJICAgIH0KICAJICB9LCBlOwogIAl9CiAgCW1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzWyJkZWZhdWx0Il0gPSBtb2R1bGUuZXhwb3J0czsgCiAgfSAocmVnZW5lcmF0b3JSdW50aW1lJDIpKTsKCiAgdmFyIHJlZ2VuZXJhdG9yUnVudGltZUV4cG9ydHMgPSByZWdlbmVyYXRvclJ1bnRpbWUkMi5leHBvcnRzOwoKICAvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLgoKICB2YXIgcnVudGltZSQxID0gcmVnZW5lcmF0b3JSdW50aW1lRXhwb3J0cygpOwogIHZhciByZWdlbmVyYXRvciQxID0gcnVudGltZSQxOwoKICAvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PQogIHRyeSB7CiAgICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lJDE7CiAgfSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHsKICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gIm9iamVjdCIpIHsKICAgICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lJDE7CiAgICB9IGVsc2UgewogICAgICBGdW5jdGlvbigiciIsICJyZWdlbmVyYXRvclJ1bnRpbWUgPSByIikocnVudGltZSQxKTsKICAgIH0KICB9CgogIHZhciBfcmVnZW5lcmF0b3JSdW50aW1lID0gLypAX19QVVJFX18qL2dldERlZmF1bHRFeHBvcnRGcm9tQ2pzKHJlZ2VuZXJhdG9yJDEpOwoKICBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7CiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOwogIH0KCiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGwpIHsKICAgIHZhciB0ID0gbnVsbCA9PSByID8gbnVsbCA6ICJ1bmRlZmluZWQiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbIkBAaXRlcmF0b3IiXTsKICAgIGlmIChudWxsICE9IHQpIHsKICAgICAgdmFyIGUsCiAgICAgICAgbiwKICAgICAgICBpLAogICAgICAgIHUsCiAgICAgICAgYSA9IFtdLAogICAgICAgIGYgPSAhMCwKICAgICAgICBvID0gITE7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKGkgPSAodCA9IHQuY2FsbChyKSkubmV4dCwgMCA9PT0gbCkgewogICAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuOwogICAgICAgICAgZiA9ICExOwogICAgICAgIH0gZWxzZSBmb3IgKDsgIShmID0gKGUgPSBpLmNhbGwodCkpLmRvbmUpICYmIChhLnB1c2goZS52YWx1ZSksIGEubGVuZ3RoICE9PSBsKTsgZiA9ICEwKTsKICAgICAgfSBjYXRjaCAocikgewogICAgICAgIG8gPSAhMCwgbiA9IHI7CiAgICAgIH0gZmluYWxseSB7CiAgICAgICAgdHJ5IHsKICAgICAgICAgIGlmICghZiAmJiBudWxsICE9IHRbInJldHVybiJdICYmICh1ID0gdFsicmV0dXJuIl0oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuOwogICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICBpZiAobykgdGhyb3cgbjsKICAgICAgICB9CiAgICAgIH0KICAgICAgcmV0dXJuIGE7CiAgICB9CiAgfQoKICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQzKGFyciwgbGVuKSB7CiAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsKICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsKICAgIHJldHVybiBhcnIyOwogIH0KCiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDMobywgbWluTGVuKSB7CiAgICBpZiAoIW8pIHJldHVybjsKICAgIGlmICh0eXBlb2YgbyA9PT0gInN0cmluZyIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheSQzKG8sIG1pbkxlbik7CiAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7CiAgICBpZiAobiA9PT0gIk9iamVjdCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsKICAgIGlmIChuID09PSAiTWFwIiB8fCBuID09PSAiU2V0IikgcmV0dXJuIEFycmF5LmZyb20obyk7CiAgICBpZiAobiA9PT0gIkFyZ3VtZW50cyIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheSQzKG8sIG1pbkxlbik7CiAgfQoKICBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgewogICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC4iKTsKICB9CgogIGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgewogICAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQzKGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOwogIH0KCiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrJDEoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7CiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgewogICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24iKTsKICAgIH0KICB9CgogIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzJDEodGFyZ2V0LCBwcm9wcykgewogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgewogICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOwogICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7CiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsKICAgICAgaWYgKCJ2YWx1ZSIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7CiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5JDEoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsKICAgIH0KICB9CiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzJDEoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7CiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMkMShDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOwogICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyQxKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7CiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsICJwcm90b3R5cGUiLCB7CiAgICAgIHdyaXRhYmxlOiBmYWxzZQogICAgfSk7CiAgICByZXR1cm4gQ29uc3RydWN0b3I7CiAgfQoKICBjb25zdCBFX0NBTkNFTEVEID0gbmV3IEVycm9yKCdyZXF1ZXN0IGZvciBsb2NrIGNhbmNlbGVkJyk7CgogIHZhciBfX2F3YWl0ZXIkMiA9IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHsKICAgICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9CiAgICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgewogICAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfQogICAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbInRocm93Il0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfQogICAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH0KICAgICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTsKICAgICAgfSk7CiAgfTsKICBjbGFzcyBTZW1hcGhvcmUgewogICAgICBjb25zdHJ1Y3RvcihfdmFsdWUsIF9jYW5jZWxFcnJvciA9IEVfQ0FOQ0VMRUQpIHsKICAgICAgICAgIHRoaXMuX3ZhbHVlID0gX3ZhbHVlOwogICAgICAgICAgdGhpcy5fY2FuY2VsRXJyb3IgPSBfY2FuY2VsRXJyb3I7CiAgICAgICAgICB0aGlzLl93ZWlnaHRlZFF1ZXVlcyA9IFtdOwogICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzID0gW107CiAgICAgIH0KICAgICAgYWNxdWlyZSh3ZWlnaHQgPSAxKSB7CiAgICAgICAgICBpZiAod2VpZ2h0IDw9IDApCiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTsKICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7CiAgICAgICAgICAgICAgaWYgKCF0aGlzLl93ZWlnaHRlZFF1ZXVlc1t3ZWlnaHQgLSAxXSkKICAgICAgICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRRdWV1ZXNbd2VpZ2h0IC0gMV0gPSBbXTsKICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFF1ZXVlc1t3ZWlnaHQgLSAxXS5wdXNoKHsgcmVzb2x2ZSwgcmVqZWN0IH0pOwogICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoKCk7CiAgICAgICAgICB9KTsKICAgICAgfQogICAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2ssIHdlaWdodCA9IDEpIHsKICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsKICAgICAgICAgICAgICBjb25zdCBbdmFsdWUsIHJlbGVhc2VdID0geWllbGQgdGhpcy5hY3F1aXJlKHdlaWdodCk7CiAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKHZhbHVlKTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgZmluYWxseSB7CiAgICAgICAgICAgICAgICAgIHJlbGVhc2UoKTsKICAgICAgICAgICAgICB9CiAgICAgICAgICB9KTsKICAgICAgfQogICAgICB3YWl0Rm9yVW5sb2NrKHdlaWdodCA9IDEpIHsKICAgICAgICAgIGlmICh3ZWlnaHQgPD0gMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApOwogICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7CiAgICAgICAgICAgICAgaWYgKCF0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0pCiAgICAgICAgICAgICAgICAgIHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSA9IFtdOwogICAgICAgICAgICAgIHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXS5wdXNoKHJlc29sdmUpOwogICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoKCk7CiAgICAgICAgICB9KTsKICAgICAgfQogICAgICBpc0xvY2tlZCgpIHsKICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSA8PSAwOwogICAgICB9CiAgICAgIGdldFZhbHVlKCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlOwogICAgICB9CiAgICAgIHNldFZhbHVlKHZhbHVlKSB7CiAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlOwogICAgICAgICAgdGhpcy5fZGlzcGF0Y2goKTsKICAgICAgfQogICAgICByZWxlYXNlKHdlaWdodCA9IDEpIHsKICAgICAgICAgIGlmICh3ZWlnaHQgPD0gMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApOwogICAgICAgICAgdGhpcy5fdmFsdWUgKz0gd2VpZ2h0OwogICAgICAgICAgdGhpcy5fZGlzcGF0Y2goKTsKICAgICAgfQogICAgICBjYW5jZWwoKSB7CiAgICAgICAgICB0aGlzLl93ZWlnaHRlZFF1ZXVlcy5mb3JFYWNoKChxdWV1ZSkgPT4gcXVldWUuZm9yRWFjaCgoZW50cnkpID0+IGVudHJ5LnJlamVjdCh0aGlzLl9jYW5jZWxFcnJvcikpKTsKICAgICAgICAgIHRoaXMuX3dlaWdodGVkUXVldWVzID0gW107CiAgICAgIH0KICAgICAgX2Rpc3BhdGNoKCkgewogICAgICAgICAgdmFyIF9hOwogICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7CiAgICAgICAgICAgICAgY29uc3QgcXVldWVFbnRyeSA9IChfYSA9IHRoaXMuX3dlaWdodGVkUXVldWVzW3dlaWdodCAtIDFdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2hpZnQoKTsKICAgICAgICAgICAgICBpZiAoIXF1ZXVlRW50cnkpCiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLl92YWx1ZTsKICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1dlaWdodCA9IHdlaWdodDsKICAgICAgICAgICAgICB0aGlzLl92YWx1ZSAtPSB3ZWlnaHQ7CiAgICAgICAgICAgICAgd2VpZ2h0ID0gdGhpcy5fdmFsdWUgKyAxOwogICAgICAgICAgICAgIHF1ZXVlRW50cnkucmVzb2x2ZShbcHJldmlvdXNWYWx1ZSwgdGhpcy5fbmV3UmVsZWFzZXIocHJldmlvdXNXZWlnaHQpXSk7CiAgICAgICAgICB9CiAgICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTsKICAgICAgfQogICAgICBfbmV3UmVsZWFzZXIod2VpZ2h0KSB7CiAgICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2U7CiAgICAgICAgICByZXR1cm4gKCkgPT4gewogICAgICAgICAgICAgIGlmIChjYWxsZWQpCiAgICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlOwogICAgICAgICAgICAgIHRoaXMucmVsZWFzZSh3ZWlnaHQpOwogICAgICAgICAgfTsKICAgICAgfQogICAgICBfZHJhaW5VbmxvY2tXYWl0ZXJzKCkgewogICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7CiAgICAgICAgICAgICAgaWYgKCF0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0pCiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgICAgIHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXS5mb3JFYWNoKCh3YWl0ZXIpID0+IHdhaXRlcigpKTsKICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTsKICAgICAgICAgIH0KICAgICAgfQogIH0KCiAgdmFyIF9fYXdhaXRlciQxID0gZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgewogICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0KICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9CiAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9CiAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQogICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOwogICAgICB9KTsKICB9OwogIGNsYXNzIE11dGV4IHsKICAgICAgY29uc3RydWN0b3IoY2FuY2VsRXJyb3IpIHsKICAgICAgICAgIHRoaXMuX3NlbWFwaG9yZSA9IG5ldyBTZW1hcGhvcmUoMSwgY2FuY2VsRXJyb3IpOwogICAgICB9CiAgICAgIGFjcXVpcmUoKSB7CiAgICAgICAgICByZXR1cm4gX19hd2FpdGVyJDEodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7CiAgICAgICAgICAgICAgY29uc3QgWywgcmVsZWFzZXJdID0geWllbGQgdGhpcy5fc2VtYXBob3JlLmFjcXVpcmUoKTsKICAgICAgICAgICAgICByZXR1cm4gcmVsZWFzZXI7CiAgICAgICAgICB9KTsKICAgICAgfQogICAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2spIHsKICAgICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUucnVuRXhjbHVzaXZlKCgpID0+IGNhbGxiYWNrKCkpOwogICAgICB9CiAgICAgIGlzTG9ja2VkKCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5pc0xvY2tlZCgpOwogICAgICB9CiAgICAgIHdhaXRGb3JVbmxvY2soKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLndhaXRGb3JVbmxvY2soKTsKICAgICAgfQogICAgICByZWxlYXNlKCkgewogICAgICAgICAgaWYgKHRoaXMuX3NlbWFwaG9yZS5pc0xvY2tlZCgpKQogICAgICAgICAgICAgIHRoaXMuX3NlbWFwaG9yZS5yZWxlYXNlKCk7CiAgICAgIH0KICAgICAgY2FuY2VsKCkgewogICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5jYW5jZWwoKTsKICAgICAgfQogIH0KCiAgZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgewogICAgdHJ5IHsKICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOwogICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOwogICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgcmVqZWN0KGVycm9yKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgaWYgKGluZm8uZG9uZSkgewogICAgICByZXNvbHZlKHZhbHVlKTsKICAgIH0gZWxzZSB7CiAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsKICAgIH0KICB9CiAgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsKICAgIHJldHVybiBmdW5jdGlvbiAoKSB7CiAgICAgIHZhciBzZWxmID0gdGhpcywKICAgICAgICBhcmdzID0gYXJndW1lbnRzOwogICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgewogICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsKICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgewogICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCAibmV4dCIsIHZhbHVlKTsKICAgICAgICB9CiAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikgewogICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCAidGhyb3ciLCBlcnIpOwogICAgICAgIH0KICAgICAgICBfbmV4dCh1bmRlZmluZWQpOwogICAgICB9KTsKICAgIH07CiAgfQoKICBmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbikgewogICAgdmFyIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfTsKICAJcmV0dXJuIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0czsKICB9CgogIHZhciBfdHlwZW9mXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7CiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHsKICAgICJAYmFiZWwvaGVscGVycyAtIHR5cGVvZiI7CgogICAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsKICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7CiAgICB9IDogZnVuY3Rpb24gKG9iaikgewogICAgICByZXR1cm4gb2JqICYmICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyAic3ltYm9sIiA6IHR5cGVvZiBvYmo7CiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbImRlZmF1bHQiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopOwogIH0KICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1siZGVmYXVsdCJdID0gbW9kdWxlLmV4cG9ydHM7CiAgfSk7CgogIHZhciByZWdlbmVyYXRvclJ1bnRpbWUkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHsKICB2YXIgX3R5cGVvZiA9IF90eXBlb2ZfMVsiZGVmYXVsdCJdOwogIGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7CiAgICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkgewogICAgICByZXR1cm4gZXhwb3J0czsKICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1siZGVmYXVsdCJdID0gbW9kdWxlLmV4cG9ydHM7CiAgICB2YXIgZXhwb3J0cyA9IHt9LAogICAgICBPcCA9IE9iamVjdC5wcm90b3R5cGUsCiAgICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LAogICAgICBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHsKICAgICAgICBvYmpba2V5XSA9IGRlc2MudmFsdWU7CiAgICAgIH0sCiAgICAgICRTeW1ib2wgPSAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSwKICAgICAgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8ICJAQGl0ZXJhdG9yIiwKICAgICAgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCAiQEBhc3luY0l0ZXJhdG9yIiwKICAgICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8ICJAQHRvU3RyaW5nVGFnIjsKICAgIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHsKICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgewogICAgICAgIHZhbHVlOiB2YWx1ZSwKICAgICAgICBlbnVtZXJhYmxlOiAhMCwKICAgICAgICBjb25maWd1cmFibGU6ICEwLAogICAgICAgIHdyaXRhYmxlOiAhMAogICAgICB9KSwgb2JqW2tleV07CiAgICB9CiAgICB0cnkgewogICAgICBkZWZpbmUoe30sICIiKTsKICAgIH0gY2F0Y2ggKGVycikgewogICAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7CiAgICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7CiAgICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLAogICAgICAgIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSwKICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pOwogICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZ2VuZXJhdG9yLCAiX2ludm9rZSIsIHsKICAgICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KQogICAgICB9KSwgZ2VuZXJhdG9yOwogICAgfQogICAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7CiAgICAgIHRyeSB7CiAgICAgICAgcmV0dXJuIHsKICAgICAgICAgIHR5cGU6ICJub3JtYWwiLAogICAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKQogICAgICAgIH07CiAgICAgIH0gY2F0Y2ggKGVycikgewogICAgICAgIHJldHVybiB7CiAgICAgICAgICB0eXBlOiAidGhyb3ciLAogICAgICAgICAgYXJnOiBlcnIKICAgICAgICB9OwogICAgICB9CiAgICB9CiAgICBleHBvcnRzLndyYXAgPSB3cmFwOwogICAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTsKICAgIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9CiAgICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9CiAgICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9CiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTsKICAgIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9KTsKICAgIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiwKICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7CiAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7CiAgICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7CiAgICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7CiAgICAgIFsibmV4dCIsICJ0aHJvdyIsICJyZXR1cm4iXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHsKICAgICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uIChhcmcpIHsKICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpOwogICAgICAgIH0pOwogICAgICB9KTsKICAgIH0KICAgIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkgewogICAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkgewogICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpOwogICAgICAgIGlmICgidGhyb3ciICE9PSByZWNvcmQudHlwZSkgewogICAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmcsCiAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlOwogICAgICAgICAgcmV0dXJuIHZhbHVlICYmICJvYmplY3QiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCAiX19hd2FpdCIpID8gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgewogICAgICAgICAgICBpbnZva2UoIm5leHQiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsKICAgICAgICAgICAgaW52b2tlKCJ0aHJvdyIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgIH0pIDogUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7CiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpOwogICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7CiAgICAgICAgICAgIHJldHVybiBpbnZva2UoInRocm93IiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7CiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpOwogICAgICB9CiAgICAgIHZhciBwcmV2aW91c1Byb21pc2U7CiAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICJfaW52b2tlIiwgewogICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShtZXRob2QsIGFyZykgewogICAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7CiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgewogICAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9CiAgICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7CiAgICAgICAgfQogICAgICB9KTsKICAgIH0KICAgIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkgewogICAgICB2YXIgc3RhdGUgPSAic3VzcGVuZGVkU3RhcnQiOwogICAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7CiAgICAgICAgaWYgKCJleGVjdXRpbmciID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nIik7CiAgICAgICAgaWYgKCJjb21wbGV0ZWQiID09PSBzdGF0ZSkgewogICAgICAgICAgaWYgKCJ0aHJvdyIgPT09IG1ldGhvZCkgdGhyb3cgYXJnOwogICAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTsKICAgICAgICB9CiAgICAgICAgZm9yIChjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZCwgY29udGV4dC5hcmcgPSBhcmc7OykgewogICAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTsKICAgICAgICAgIGlmIChkZWxlZ2F0ZSkgewogICAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTsKICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7CiAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTsKICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICAgIGlmICgibmV4dCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoInRocm93IiA9PT0gY29udGV4dC5tZXRob2QpIHsKICAgICAgICAgICAgaWYgKCJzdXNwZW5kZWRTdGFydCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9ICJjb21wbGV0ZWQiLCBjb250ZXh0LmFyZzsKICAgICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7CiAgICAgICAgICB9IGVsc2UgInJldHVybiIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KCJyZXR1cm4iLCBjb250ZXh0LmFyZyk7CiAgICAgICAgICBzdGF0ZSA9ICJleGVjdXRpbmciOwogICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpOwogICAgICAgICAgaWYgKCJub3JtYWwiID09PSByZWNvcmQudHlwZSkgewogICAgICAgICAgICBpZiAoc3RhdGUgPSBjb250ZXh0LmRvbmUgPyAiY29tcGxldGVkIiA6ICJzdXNwZW5kZWRZaWVsZCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlOwogICAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLAogICAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZQogICAgICAgICAgICB9OwogICAgICAgICAgfQogICAgICAgICAgInRocm93IiA9PT0gcmVjb3JkLnR5cGUgJiYgKHN0YXRlID0gImNvbXBsZXRlZCIsIGNvbnRleHQubWV0aG9kID0gInRocm93IiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTsKICAgICAgICB9CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7CiAgICAgIHZhciBtZXRob2ROYW1lID0gY29udGV4dC5tZXRob2QsCiAgICAgICAgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07CiAgICAgIGlmICh1bmRlZmluZWQgPT09IG1ldGhvZCkgcmV0dXJuIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCAidGhyb3ciID09PSBtZXRob2ROYW1lICYmIGRlbGVnYXRlLml0ZXJhdG9yWyJyZXR1cm4iXSAmJiAoY29udGV4dC5tZXRob2QgPSAicmV0dXJuIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQsIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpLCAidGhyb3ciID09PSBjb250ZXh0Lm1ldGhvZCkgfHwgInJldHVybiIgIT09IG1ldGhvZE5hbWUgJiYgKGNvbnRleHQubWV0aG9kID0gInRocm93IiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICciICsgbWV0aG9kTmFtZSArICInIG1ldGhvZCIpKSwgQ29udGludWVTZW50aW5lbDsKICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTsKICAgICAgaWYgKCJ0aHJvdyIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSAidGhyb3ciLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcsIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsOwogICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7CiAgICAgIHJldHVybiBpbmZvID8gaW5mby5kb25lID8gKGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlLCBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jLCAicmV0dXJuIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gIm5leHQiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSAidGhyb3ciLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0IiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTsKICAgIH0KICAgIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7CiAgICAgIHZhciBlbnRyeSA9IHsKICAgICAgICB0cnlMb2M6IGxvY3NbMF0KICAgICAgfTsKICAgICAgMSBpbiBsb2NzICYmIChlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV0pLCAyIGluIGxvY3MgJiYgKGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdLCBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7CiAgICB9CiAgICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7CiAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9OwogICAgICByZWNvcmQudHlwZSA9ICJub3JtYWwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDsKICAgIH0KICAgIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHsKICAgICAgdGhpcy50cnlFbnRyaWVzID0gW3sKICAgICAgICB0cnlMb2M6ICJyb290IgogICAgICB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTsKICAgIH0KICAgIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkgewogICAgICBpZiAoaXRlcmFibGUpIHsKICAgICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07CiAgICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7CiAgICAgICAgaWYgKCJmdW5jdGlvbiIgPT0gdHlwZW9mIGl0ZXJhYmxlLm5leHQpIHJldHVybiBpdGVyYWJsZTsKICAgICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHsKICAgICAgICAgIHZhciBpID0gLTEsCiAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkgewogICAgICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDsKICAgICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7CiAgICAgICAgICAgIH07CiAgICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDsKICAgICAgICB9CiAgICAgIH0KICAgICAgcmV0dXJuIHsKICAgICAgICBuZXh0OiBkb25lUmVzdWx0CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBkb25lUmVzdWx0KCkgewogICAgICByZXR1cm4gewogICAgICAgIHZhbHVlOiB1bmRlZmluZWQsCiAgICAgICAgZG9uZTogITAKICAgICAgfTsKICAgIH0KICAgIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lUHJvcGVydHkoR3AsICJjb25zdHJ1Y3RvciIsIHsKICAgICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLAogICAgICBjb25maWd1cmFibGU6ICEwCiAgICB9KSwgZGVmaW5lUHJvcGVydHkoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsICJjb25zdHJ1Y3RvciIsIHsKICAgICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLAogICAgICBjb25maWd1cmFibGU6ICEwCiAgICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCAiR2VuZXJhdG9yRnVuY3Rpb24iKSwgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikgewogICAgICB2YXIgY3RvciA9ICJmdW5jdGlvbiIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7CiAgICAgIHJldHVybiAhIWN0b3IgJiYgKGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8ICJHZW5lcmF0b3JGdW5jdGlvbiIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpOwogICAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikgewogICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsICJHZW5lcmF0b3JGdW5jdGlvbiIpKSwgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApLCBnZW5GdW47CiAgICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykgewogICAgICByZXR1cm4gewogICAgICAgIF9fYXdhaXQ6IGFyZwogICAgICB9OwogICAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7CiAgICAgIHZvaWQgMCA9PT0gUHJvbWlzZUltcGwgJiYgKFByb21pc2VJbXBsID0gUHJvbWlzZSk7CiAgICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksIFByb21pc2VJbXBsKTsKICAgICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHsKICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTsKICAgICAgfSk7CiAgICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCAiR2VuZXJhdG9yIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9KSwgZGVmaW5lKEdwLCAidG9TdHJpbmciLCBmdW5jdGlvbiAoKSB7CiAgICAgIHJldHVybiAiW29iamVjdCBHZW5lcmF0b3JdIjsKICAgIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAodmFsKSB7CiAgICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKSwKICAgICAgICBrZXlzID0gW107CiAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIGtleXMucHVzaChrZXkpOwogICAgICByZXR1cm4ga2V5cy5yZXZlcnNlKCksIGZ1bmN0aW9uIG5leHQoKSB7CiAgICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykgewogICAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7CiAgICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0OwogICAgICAgIH0KICAgICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7CiAgICAgIH07CiAgICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7CiAgICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LAogICAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoc2tpcFRlbXBSZXNldCkgewogICAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gIm5leHQiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpICJ0IiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7CiAgICAgIH0sCiAgICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7CiAgICAgICAgdGhpcy5kb25lID0gITA7CiAgICAgICAgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjsKICAgICAgICBpZiAoInRocm93IiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZzsKICAgICAgICByZXR1cm4gdGhpcy5ydmFsOwogICAgICB9LAogICAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7CiAgICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZXhjZXB0aW9uOwogICAgICAgIHZhciBjb250ZXh0ID0gdGhpczsKICAgICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHsKICAgICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9ICJ0aHJvdyIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9ICJuZXh0IiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDsKICAgICAgICB9CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldLAogICAgICAgICAgICByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uOwogICAgICAgICAgaWYgKCJyb290IiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKCJlbmQiKTsKICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7CiAgICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCAiY2F0Y2hMb2MiKSwKICAgICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksICJmaW5hbGx5TG9jIik7CiAgICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7CiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7CiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7CiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHsKICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoIWhhc0ZpbmFsbHkpIHRocm93IG5ldyBFcnJvcigidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHkiKTsKICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfSwKICAgICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksICJmaW5hbGx5TG9jIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgewogICAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBmaW5hbGx5RW50cnkgJiYgKCJicmVhayIgPT09IHR5cGUgfHwgImNvbnRpbnVlIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTsKICAgICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTsKICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSAibmV4dCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTsKICAgICAgfSwKICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHsKICAgICAgICBpZiAoInRocm93IiA9PT0gcmVjb3JkLnR5cGUpIHRocm93IHJlY29yZC5hcmc7CiAgICAgICAgcmV0dXJuICJicmVhayIgPT09IHJlY29yZC50eXBlIHx8ICJjb250aW51ZSIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6ICJyZXR1cm4iID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gInJldHVybiIsIHRoaXMubmV4dCA9ICJlbmQiKSA6ICJub3JtYWwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsOwogICAgICB9LAogICAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShlbnRyeSksIENvbnRpbnVlU2VudGluZWw7CiAgICAgICAgfQogICAgICB9LAogICAgICAiY2F0Y2giOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7CiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgewogICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOwogICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7CiAgICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uOwogICAgICAgICAgICBpZiAoInRocm93IiA9PT0gcmVjb3JkLnR5cGUpIHsKICAgICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZzsKICAgICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gdGhyb3duOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICB0aHJvdyBuZXcgRXJyb3IoImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdCIpOwogICAgICB9LAogICAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7CiAgICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSwKICAgICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsCiAgICAgICAgICBuZXh0TG9jOiBuZXh0TG9jCiAgICAgICAgfSwgIm5leHQiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsOwogICAgICB9CiAgICB9LCBleHBvcnRzOwogIH0KICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1siZGVmYXVsdCJdID0gbW9kdWxlLmV4cG9ydHM7CiAgfSk7CgogIC8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuCgogIHZhciBydW50aW1lID0gcmVnZW5lcmF0b3JSdW50aW1lJDEoKTsKICB2YXIgcmVnZW5lcmF0b3IgPSBydW50aW1lOwoKICAvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PQogIHRyeSB7CiAgICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lOwogIH0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7CiAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICJvYmplY3QiKSB7CiAgICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTsKICAgIH0gZWxzZSB7CiAgICAgIEZ1bmN0aW9uKCJyIiwgInJlZ2VuZXJhdG9yUnVudGltZSA9IHIiKShydW50aW1lKTsKICAgIH0KICB9CgogIGNvbnN0IHQ9bmV3IFdlYWtNYXA7ZnVuY3Rpb24gZSh0LGUpe3JldHVybiBuZXcgUHJveHkodCx7Z2V0Oih0LHIpPT5lKHRbcl0pfSl9Y2xhc3Mgcntjb25zdHJ1Y3Rvcigpe3RoaXMudmFsdWU9dm9pZCAwLHRoaXMuZXhwb3J0cz1udWxsO31nZXRTdGF0ZSgpe3JldHVybiB0aGlzLmV4cG9ydHMuYXN5bmNpZnlfZ2V0X3N0YXRlKCl9YXNzZXJ0Tm9uZVN0YXRlKCl7bGV0IHQ9dGhpcy5nZXRTdGF0ZSgpO2lmKDAhPT10KXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhc3luYyBzdGF0ZSAke3R9LCBleHBlY3RlZCAwLmApfXdyYXBJbXBvcnRGbih0KXtyZXR1cm4gKC4uLmUpPT57aWYoMj09PXRoaXMuZ2V0U3RhdGUoKSlyZXR1cm4gdGhpcy5leHBvcnRzLmFzeW5jaWZ5X3N0b3BfcmV3aW5kKCksdGhpcy52YWx1ZTt0aGlzLmFzc2VydE5vbmVTdGF0ZSgpO2xldCByPXQoLi4uZSk7aWYoIShzPXIpfHwib2JqZWN0IiE9dHlwZW9mIHMmJiJmdW5jdGlvbiIhPXR5cGVvZiBzfHwiZnVuY3Rpb24iIT10eXBlb2Ygcy50aGVuKXJldHVybiByO3ZhciBzO3RoaXMuZXhwb3J0cy5hc3luY2lmeV9zdGFydF91bndpbmQoMTYpLHRoaXMudmFsdWU9cjt9fXdyYXBNb2R1bGVJbXBvcnRzKHQpe3JldHVybiBlKHQsdD0+ImZ1bmN0aW9uIj09dHlwZW9mIHQ/dGhpcy53cmFwSW1wb3J0Rm4odCk6dCl9d3JhcEltcG9ydHModCl7aWYodm9pZCAwIT09dClyZXR1cm4gZSh0LCh0PU9iamVjdC5jcmVhdGUobnVsbCkpPT50aGlzLndyYXBNb2R1bGVJbXBvcnRzKHQpKX13cmFwRXhwb3J0Rm4oZSl7bGV0IHI9dC5nZXQoZSk7cmV0dXJuIHZvaWQgMCE9PXJ8fChyPWFzeW5jKC4uLnQpPT57dGhpcy5hc3NlcnROb25lU3RhdGUoKTtsZXQgcj1lKC4uLnQpO2Zvcig7MT09PXRoaXMuZ2V0U3RhdGUoKTspdGhpcy5leHBvcnRzLmFzeW5jaWZ5X3N0b3BfdW53aW5kKCksdGhpcy52YWx1ZT1hd2FpdCB0aGlzLnZhbHVlLHRoaXMuYXNzZXJ0Tm9uZVN0YXRlKCksdGhpcy5leHBvcnRzLmFzeW5jaWZ5X3N0YXJ0X3Jld2luZCgxNikscj1lKCk7cmV0dXJuIHRoaXMuYXNzZXJ0Tm9uZVN0YXRlKCkscn0sdC5zZXQoZSxyKSkscn13cmFwRXhwb3J0cyhlKXtsZXQgcj1PYmplY3QuY3JlYXRlKG51bGwpO2ZvcihsZXQgdCBpbiBlKXtsZXQgcz1lW3RdOyJmdW5jdGlvbiIhPXR5cGVvZiBzfHx0LnN0YXJ0c1dpdGgoImFzeW5jaWZ5XyIpfHwocz10aGlzLndyYXBFeHBvcnRGbihzKSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsdCx7ZW51bWVyYWJsZTohMCx2YWx1ZTpzfSk7fXJldHVybiB0LnNldChlLHIpLHJ9aW5pdCh0LGUpe2NvbnN0e2V4cG9ydHM6cn09dCxuPXIubWVtb3J5fHxlLmVudiYmZS5lbnYubWVtb3J5O25ldyBJbnQzMkFycmF5KG4uYnVmZmVyLDE2KS5zZXQoWzI0LDEwMjRdKSx0aGlzLmV4cG9ydHM9dGhpcy53cmFwRXhwb3J0cyhyKSxPYmplY3Quc2V0UHJvdG90eXBlT2YodCxzLnByb3RvdHlwZSk7fX1jbGFzcyBzIGV4dGVuZHMgV2ViQXNzZW1ibHkuSW5zdGFuY2V7Y29uc3RydWN0b3IodCxlKXtsZXQgcz1uZXcgcjtzdXBlcih0LHMud3JhcEltcG9ydHMoZSkpLHMuaW5pdCh0aGlzLGUpO31nZXQgZXhwb3J0cygpe3JldHVybiB0LmdldChzdXBlci5leHBvcnRzKX19YXN5bmMgZnVuY3Rpb24gbih0LGUpe2xldCBzPW5ldyByLG49YXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUodCxzLndyYXBJbXBvcnRzKGUpKTtyZXR1cm4gcy5pbml0KG4gaW5zdGFuY2VvZiBXZWJBc3NlbWJseS5JbnN0YW5jZT9uOm4uaW5zdGFuY2UsZSksbn1hc3luYyBmdW5jdGlvbiBhKHQsZSl7bGV0IHM9bmV3IHIsbj1hd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyh0LHMud3JhcEltcG9ydHMoZSkpO3JldHVybiBzLmluaXQobi5pbnN0YW5jZSxlKSxufU9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLnByb3RvdHlwZSwiZXhwb3J0cyIse2VudW1lcmFibGU6ITB9KTsKCiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHsKICAgICJAYmFiZWwvaGVscGVycyAtIHR5cGVvZiI7CgogICAgcmV0dXJuIF90eXBlb2YgPSAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsKICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7CiAgICB9IDogZnVuY3Rpb24gKG9iaikgewogICAgICByZXR1cm4gb2JqICYmICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyAic3ltYm9sIiA6IHR5cGVvZiBvYmo7CiAgICB9LCBfdHlwZW9mKG9iaik7CiAgfQoKICBmdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsKICAgIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gIm9iamVjdCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsKICAgIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsKICAgIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsKICAgICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCAiZGVmYXVsdCIpOwogICAgICBpZiAoX3R5cGVvZihyZXMpICE9PSAib2JqZWN0IikgcmV0dXJuIHJlczsKICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS4iKTsKICAgIH0KICAgIHJldHVybiAoaGludCA9PT0gInN0cmluZyIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsKICB9CgogIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgewogICAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsICJzdHJpbmciKTsKICAgIHJldHVybiBfdHlwZW9mKGtleSkgPT09ICJzeW1ib2wiID8ga2V5IDogU3RyaW5nKGtleSk7CiAgfQoKICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7CiAgICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOwogICAgaWYgKGtleSBpbiBvYmopIHsKICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7CiAgICAgICAgdmFsdWU6IHZhbHVlLAogICAgICAgIGVudW1lcmFibGU6IHRydWUsCiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLAogICAgICAgIHdyaXRhYmxlOiB0cnVlCiAgICAgIH0pOwogICAgfSBlbHNlIHsKICAgICAgb2JqW2tleV0gPSB2YWx1ZTsKICAgIH0KICAgIHJldHVybiBvYmo7CiAgfQoKICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7CiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgewogICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24iKTsKICAgIH0KICB9CgogIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsKICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsKICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsKICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOwogICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7CiAgICAgIGlmICgidmFsdWUiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOwogICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOwogICAgfQogIH0KICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7CiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsKICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsKICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgInByb3RvdHlwZSIsIHsKICAgICAgd3JpdGFibGU6IGZhbHNlCiAgICB9KTsKICAgIHJldHVybiBDb25zdHJ1Y3RvcjsKICB9CgogIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQkMShzZWxmKSB7CiAgICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7CiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcigidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkIik7CiAgICB9CiAgICByZXR1cm4gc2VsZjsKICB9CgogIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZiQxKG8sIHApIHsKICAgIF9zZXRQcm90b3R5cGVPZiQxID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7CiAgICAgIG8uX19wcm90b19fID0gcDsKICAgICAgcmV0dXJuIG87CiAgICB9OwogICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZiQxKG8sIHApOwogIH0KCiAgZnVuY3Rpb24gX2luaGVyaXRzJDEoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsKICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gImZ1bmN0aW9uIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7CiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uIik7CiAgICB9CiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsKICAgICAgY29uc3RydWN0b3I6IHsKICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsCiAgICAgICAgd3JpdGFibGU6IHRydWUsCiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlCiAgICAgIH0KICAgIH0pOwogICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCAicHJvdG90eXBlIiwgewogICAgICB3cml0YWJsZTogZmFsc2UKICAgIH0pOwogICAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZiQxKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsKICB9CgogIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJDEoc2VsZiwgY2FsbCkgewogICAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09ICJvYmplY3QiIHx8IHR5cGVvZiBjYWxsID09PSAiZnVuY3Rpb24iKSkgewogICAgICByZXR1cm4gY2FsbDsKICAgIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7CiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkIik7CiAgICB9CiAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZCQxKHNlbGYpOwogIH0KCiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mJDEobykgewogICAgX2dldFByb3RvdHlwZU9mJDEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsKICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsKICAgIH07CiAgICByZXR1cm4gX2dldFByb3RvdHlwZU9mJDEobyk7CiAgfQoKICBmdW5jdGlvbiBvd25LZXlzJDEkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH0KICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyQxJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfQogIC8qDQogICAgQ29weXJpZ2h0IDIwMjIgUGljb3ZvaWNlIEluYy4NCgogICAgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBsaWNlbnNlLiBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgbG9jYXRlZCBpbiB0aGUgIkxJQ0VOU0UiDQogICAgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBzb3VyY2UuDQoKICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24NCiAgICBhbiAiQVMgSVMiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUNCiAgICBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLg0KICAqLwogIC8qKg0KICAgKiBCYXNlUHZGaWxlIENsYXNzDQogICAqIFRoaXMgY2xhc3MgbW9ja3MgdGhlIGZpbGUgc3lzdGVtIHVzaW5nIGluLW1lbW9yeSBzdG9yYWdlLg0KICAgKi8KICB2YXIgUHZGaWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgIGZ1bmN0aW9uIFB2RmlsZSgpIHsKICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB2RmlsZSk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAiX3BhdGgiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgIl9tZXRhIiwgdm9pZCAwKTsKICAgIH0KICAgIF9jcmVhdGVDbGFzcyhQdkZpbGUsIFt7CiAgICAgIGtleTogIm1ldGEiLAogICAgICBnZXQ6CiAgICAgIC8qKg0KICAgICAgICogR2V0dGVyIGZvciBmaWxlJ3MgbWV0YSBpbmZvcm1hdGlvbi4NCiAgICAgICAqLwogICAgICBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgaWYgKHRoaXMuX21ldGEgPT09IHVuZGVmaW5lZCkgewogICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkMSQxKHsKICAgICAgICAgIHZlcnNpb246IDAKICAgICAgICB9LCB0aGlzLl9tZXRhKTsKICAgICAgfQogICAgICAvKioNCiAgICAgICAqIEdldCB0aGUgZmlsZSBwb2ludGVyIGZyb20gdGhlIF9maWxlUHRycyBtYXAuDQogICAgICAgKiBAcGFyYW0gcHRyIFRoZSBwb2ludGVyIHRvIEJhc2VQdkZpbGUgaW5zdGFuY2UgdG8gZ2V0IGZyb20gdGhlIG1hcC4NCiAgICAgICAqIEByZXR1cm5zIEJhc2VQdkZpbGUgcmV0dXJucyB0aGUgY3VycmVudCBmaWxlIGluc3RhbmNlIHJlbGF0ZWQgdG8gcHRyLg0KICAgICAgICovCiAgICB9XSwgW3sKICAgICAga2V5OiAiZ2V0UHRyIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFB0cihwdHIpIHsKICAgICAgICByZXR1cm4gUHZGaWxlLl9maWxlUHRycy5nZXQocHRyKTsKICAgICAgfQogICAgICAvKioNCiAgICAgICAqIFNhdmVzIHRoZSBCYXNlUHZGaWxlIGluc3RhbmNlIHRvIHRoZSBtYXAgd2l0aCBhbiBhc3NvY2lhdGVkIHB0ci4NCiAgICAgICAqIEBwYXJhbSBwdHIgVGhlIGZpbGUgcG9pbnRlciB0byBzYXZlIGFzIHRoZSBrZXkuDQogICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIEJhc2VQdkZpbGUgaW5zdGFuY2UgdG8gc2F2ZSBhcyB0aGUgdmFsdWUuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAic2V0UHRyIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFB0cihwdHIsIGluc3RhbmNlKSB7CiAgICAgICAgUHZGaWxlLl9maWxlUHRycy5zZXQocHRyLCBpbnN0YW5jZSk7CiAgICAgIH0KICAgICAgLyoqDQogICAgICAgKiBSZW1vdmVzIHRoZSBwdHIgZnJvbSB0aGUgX2ZpbGVQdHJzIG1hcC4NCiAgICAgICAqIEBwYXJhbSBwdHIgVGhlIGZpbGUgcG9pbnRlciB0byByZW1vdmUuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAicmVtb3ZlUHRyIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVB0cihwdHIpIHsKICAgICAgICBQdkZpbGUuX2ZpbGVQdHJzWyJkZWxldGUiXShwdHIpOwogICAgICB9CiAgICB9XSk7CiAgICByZXR1cm4gUHZGaWxlOwogIH0oKTsKICBfZGVmaW5lUHJvcGVydHkoUHZGaWxlLCAiX2ZpbGVQdHJzIiwgbmV3IE1hcCgpKTsKCiAgZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDEoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSQxKCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mJDEoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZiQxKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiQxKHRoaXMsIHJlc3VsdCk7IH07IH0KICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDEkMSgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAidW5kZWZpbmVkIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gImZ1bmN0aW9uIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH0KICAvKioNCiAgICogSW5kZXhlZCBEQiBjb25maWd1cmF0aW9ucw0KICAgKi8KICB2YXIgREJfTkFNRSA9ICdwdl9kYic7CiAgdmFyIFBWX0ZJTEVfU1RPUkUgPSAncHZfZmlsZSc7CiAgdmFyIERCX1ZFUlNJT04gPSAzOwogIC8qKg0KICAgKiBIZWxwZXIgdG8gZ2V0IEluZGV4ZWREQi4NCiAgICovCiAgZnVuY3Rpb24gZ2V0REIoKSB7CiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgewogICAgICB2YXIgcmVxdWVzdCA9IHNlbGYuaW5kZXhlZERCLm9wZW4oREJfTkFNRSwgREJfVkVSU0lPTik7CiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHsKICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7CiAgICAgIH07CiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKCkgewogICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpOwogICAgICB9OwogICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uICgpIHsKICAgICAgICBpZiAoIXJlcXVlc3QucmVzdWx0Lm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoUFZfRklMRV9TVE9SRSkpIHsKICAgICAgICAgIHJlcXVlc3QucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKFBWX0ZJTEVfU1RPUkUpOwogICAgICAgIH0KICAgICAgfTsKICAgIH0pOwogIH0KICAvKioNCiAgICogUHZGaWxlIENsYXNzDQogICAqIFRoaXMgY2xhc3MgbW9ja3MgdGhlIGZpbGUgc3lzdGVtIHVzaW5nIEluZGV4ZWREQi4NCiAgICogSW5kZXhlZERCIGlzIFJFUVVJUkVELg0KICAgKi8KICB2YXIgUHZGaWxlSURCID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUHZGaWxlKSB7CiAgICBfaW5oZXJpdHMkMShQdkZpbGVJREIsIF9QdkZpbGUpOwogICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQxKFB2RmlsZUlEQik7CiAgICAvKioNCiAgICAgKiBDb25zdHJ1Y3RvciBvZiBQdkZpbGUgaW5zdGFuY2UuDQogICAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggb2YgYSBmaWxlLg0KICAgICAqIEBwYXJhbSBtZXRhIFRoZSBtZXRhZGF0YSBvZiB0aGUgZmlsZS4NCiAgICAgKiBAcGFyYW0gZGIgVGhlIGRiIGluc3RhbmNlIGN1cnJlbnRseSByZWxhdGVkIHRvIHRoZSBvcGVuZWQgZmlsZS4NCiAgICAgKiBAcGFyYW0gbW9kZSBUaGUgbW9kZSAtIGVpdGhlciByZWFkb25seSBvciByZWFkd3JpdGUuDQogICAgICovCiAgICBmdW5jdGlvbiBQdkZpbGVJREIocGF0aCwgbWV0YSwgZGIsIG1vZGUpIHsKICAgICAgdmFyIF90aGlzOwogICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHZGaWxlSURCKTsKICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTsKICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQkMShfdGhpcyksICJfcGFnZVNpemUiLCA2NTUzNik7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkJDEoX3RoaXMpLCAiX2RiIiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQkMShfdGhpcyksICJfbW9kZSIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkJDEoX3RoaXMpLCAiX3BhZ2VQdHIiLCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQkMShfdGhpcyksICJfcGFnZU9mZnNldCIsIDApOwogICAgICBfdGhpcy5fcGF0aCA9IHBhdGg7CiAgICAgIF90aGlzLl9tZXRhID0gbWV0YTsKICAgICAgX3RoaXMuX2RiID0gZGI7CiAgICAgIF90aGlzLl9tb2RlID0gbW9kZTsKICAgICAgcmV0dXJuIF90aGlzOwogICAgfQogICAgLyoqDQogICAgICogT3BlbnMgYSBmaWxlIGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgUHZGaWxlLiBBIGZpbGUgY2FuIGJlIG9wZW5lZCBpbiByZWFkb25seSBvciByZWFkd3JpdGUgbW9kZQ0KICAgICAqIHdoaWNoIGZvbGxvd3MgSW5kZXhlZERCIHN0YW5kYXJkIG9mIHJlYWRpbmcgYW5kIHdyaXRpbmcgdmFsdWVzIHRvIHRoZSBkYi4NCiAgICAgKiBUaGUgZmlsZSBpcyBzdG9yZWQgYXMgYW4gVWludDhBcnJheSBzZXBhcmF0ZWQgYnkgcGFnZXMuDQogICAgICogTk9URTogVGhlIGtleSBleGFjdGx5IG1hdGNoaW5nIHRoZSBwYXRoIGV4cGVjdHMgYSB2YWx1ZSBvZiB0eXBlIFB2RmlsZU1ldGEuDQogICAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggb2YgdGhlIGZpbGUgdG8gb3BlbiBzdG9yZWQgaW4gSW5kZXhlZERCLg0KICAgICAqIEBwYXJhbSBtb2RlIEEgc3RyaW5nLCBpZiBpdCBjb250YWlucyAncicgaW4gdGhlIHN0cmluZywgaXQgd2lsbCBvcGVuIHRoZSBmaWxlIGluIHJlYWRvbmx5IG1vZGUsIGVsc2UgaXQNCiAgICAgKiB3aWxsIG9wZW4gaW4gcmVhZHdyaXRlIG1vZGUuDQogICAgICogQHJldHVybnMgUHJvbWlzZTxQdkZpbGU+IEFuIGluc3RhbmNlIG9mIFB2RmlsZS4NCiAgICAgKiBAdGhyb3dzIEVycm9yIGlmIEluZGV4ZWREQiBpcyBub3Qgc3VwcG9ydGVkLg0KICAgICAqLwogICAgX2NyZWF0ZUNsYXNzKFB2RmlsZUlEQiwgW3sKICAgICAga2V5OiAiY2xvc2UiLAogICAgICB2YWx1ZToKICAgICAgLyoqDQogICAgICAgKiBDbG9zZXMgdGhlIGRiIGNvbm5lY3Rpb24uIEFueSBvdGhlciBpbnN0YW5jZSBmdW5jdGlvbiBjYWxsIHdpbGwgbm90IHdvcmsgb25jZQ0KICAgICAgICogdGhlIGRiIGlzIGNsb3NlZC4NCiAgICAgICAqLwogICAgICBmdW5jdGlvbiAoKSB7CiAgICAgICAgdmFyIF9jbG9zZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkgewogICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHsKICAgICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHsKICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICB0aGlzLl9kYi5jbG9zZSgpOwogICAgICAgICAgICAgIGNhc2UgMToKICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7CiAgICAgICAgfSkpOwogICAgICAgIGZ1bmN0aW9uIGNsb3NlKCkgewogICAgICAgICAgcmV0dXJuIF9jbG9zZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgIH0KICAgICAgICByZXR1cm4gY2xvc2U7CiAgICAgIH0oKQogICAgICAvKioNCiAgICAgICAqIFJlYWRzIGEgdG90YWwgb2YgJ2NvdW50JyBlbGVtZW50cywgZWFjaCB3aXRoIGEgc2l6ZSBvZiAnc2l6ZScgYnl0ZXMgZnJvbSB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgc3RyZWFtLg0KICAgICAgICogTW92ZXMgdGhlIHN0cmVhbSBieSB0aGUgYW1vdW50IG9mIGVsZW1lbnRzIHJlYWQuDQogICAgICAgKiBJZiB0aGUgbGFzdCBmZXcgYnl0ZXMgaXMgc21hbGxlciB0aGFuICdzaXplJyBpdCB3aWxsIG5vdCByZWFkIChzaW1pbGFyIHRvIGZyZWFkKSB0aGUgYnl0ZXMuDQogICAgICAgKiBAcGFyYW0gc2l6ZSBUaGUgZWxlbWVudCBzaXplLg0KICAgICAgICogQHBhcmFtIGNvdW50IFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gcmVhZC4NCiAgICAgICAqIEByZXR1cm5zIFByb21pc2U8VWludDhBcnJheT4gQSBVaW50OEFycmF5IHdpdGggdGhlIGVsZW1lbnRzIGNvcGllZCB0byBpdC4NCiAgICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgZmlsZSBkb2Vzbid0IGV4aXN0IG9yIGlmIEVPRi4NCiAgICAgICAqLwogICAgfSwgewogICAgICBrZXk6ICJyZWFkIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICB2YXIgX3JlYWQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoc2l6ZSwgY291bnQpIHsKICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzOwogICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0MikgewogICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7CiAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoInJldHVybiIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsKICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpczIuZXhpc3RzKCkpIHsKICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCInIi5jb25jYXQoX3RoaXMyLl9wYXRoLCAiJyBkb2Vzbid0IGV4aXN0LiIpKSk7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIGlmIChfdGhpczIuX2lzRU9GKSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcigiRU9GIik7CiAgICAgICAgICAgICAgICAgICAgZXJyLm5hbWUgPSAiRW5kT2ZGaWxlIjsKICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTsKICAgICAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgdmFyIGNvcGllZCA9IDA7CiAgICAgICAgICAgICAgICAgIHZhciBtYXhUb0NvcHkgPSBNYXRoLm1pbihzaXplICogY291bnQsIF90aGlzMi5fbWV0YS5zaXplKTsKICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsRWxlbXMgPSBtYXhUb0NvcHkgLSBtYXhUb0NvcHkgJSBzaXplOwogICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkodG90YWxFbGVtcyk7CiAgICAgICAgICAgICAgICAgIHZhciBrZXlSYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKCIiLmNvbmNhdChfdGhpczIuX3BhdGgsICItIikuY29uY2F0KFB2RmlsZUlEQi5jcmVhdGVQYWdlKF90aGlzMi5fcGFnZVB0cikpLCAiIi5jb25jYXQoX3RoaXMyLl9wYXRoLCAiLSIpLmNvbmNhdChQdkZpbGVJREIuY3JlYXRlUGFnZShfdGhpczIuX21ldGEubnVtUGFnZXMpKSk7CiAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IF90aGlzMi5fc3RvcmU7CiAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKGtleVJhbmdlKTsKICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDsKICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnNvciB8fCBfdGhpczIuX2lzRU9GKSB7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHZhciB0b0NvcHkgPSBNYXRoLm1pbih0b3RhbEVsZW1zIC0gY29waWVkLCBjdXJzb3IudmFsdWUubGVuZ3RoIC0gX3RoaXMyLl9wYWdlT2Zmc2V0KTsKICAgICAgICAgICAgICAgICAgICBidWZmZXIuc2V0KGN1cnNvci52YWx1ZS5zbGljZShfdGhpczIuX3BhZ2VPZmZzZXQsIF90aGlzMi5fcGFnZU9mZnNldCArIHRvQ29weSksIGNvcGllZCk7CiAgICAgICAgICAgICAgICAgICAgY29waWVkICs9IHRvQ29weTsKICAgICAgICAgICAgICAgICAgICBfdGhpczIuX3BhZ2VPZmZzZXQgKz0gdG9Db3B5OwogICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczIuX3BhZ2VPZmZzZXQgPT09IF90aGlzMi5fcGFnZVNpemUpIHsKICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5fcGFnZVB0ciArPSAxOwogICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLl9wYWdlT2Zmc2V0ID0gMDsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcGllZCA8IHRvdGFsRWxlbXMpIHsKICAgICAgICAgICAgICAgICAgICAgIGN1cnNvclsiY29udGludWUiXSgpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgICAgICAgc3RvcmUudHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3RvcmUudHJhbnNhY3Rpb24uZXJyb3IpOwogICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgICBzdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYnVmZmVyLnNsaWNlKDAsIGNvcGllZCkpOwogICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgfSkpOwogICAgICAgICAgICAgIGNhc2UgMToKICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0sIF9jYWxsZWUyKTsKICAgICAgICB9KSk7CiAgICAgICAgZnVuY3Rpb24gcmVhZChfeCwgX3gyKSB7CiAgICAgICAgICByZXR1cm4gX3JlYWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHJlYWQ7CiAgICAgIH0oKQogICAgICAvKioNCiAgICAgICAqIFdyaXRlcyBhbiBVaW50OEFycmF5IHRvIEluZGV4ZWREQiBzZXBlcmF0ZWQgYnkgcGFnZXMuDQogICAgICAgKiBAcGFyYW0gY29udGVudCBUaGUgYnl0ZXMgdG8gc2F2ZS4NCiAgICAgICAqIEBwYXJhbSB2ZXJzaW9uIFZlcnNpb24gb2YgdGhlIGZpbGUuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAid3JpdGUiLAogICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgIHZhciBfd3JpdGUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQoY29udGVudCkgewogICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7CiAgICAgICAgICB2YXIgdmVyc2lvbiwKICAgICAgICAgICAgX2FyZ3M0ID0gYXJndW1lbnRzOwogICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQkKF9jb250ZXh0NCkgewogICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDQucHJldiA9IF9jb250ZXh0NC5uZXh0KSB7CiAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgdmVyc2lvbiA9IF9hcmdzNC5sZW5ndGggPiAxICYmIF9hcmdzNFsxXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M0WzFdIDogMTsKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KCJyZXR1cm4iLCBuZXcgUHJvbWlzZSggLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMocmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlLCBnZXRDdXJyZW50UGFnZSwgbGFzdCwgbmV3Q29udGVudCwgbmV3U2l6ZSwgbmV3TWV0YSwgcGFnZXMsIGksIGtleVJhbmdlOwogICAgICAgICAgICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvci53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHsKICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF90aGlzMy5fbW9kZSA9PT0gInJlYWRvbmx5IikpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCJJbnN0YW5jZSBpcyByZWFkb25seSBtb2RlIG9ubHkuIikpOwogICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KCJyZXR1cm4iKTsKICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOgogICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB2ZXJzaW9uICE9PSAibnVtYmVyIiAmJiB2ZXJzaW9uIDw9IDApKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDY7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigiVmVyc2lvbiBzaG91bGQgYmUgYSBwb3NpdGl2ZSBudW1iZXIiKSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoInJldHVybiIpOwogICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6CiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBfdGhpczMuX3N0b3JlOwogICAgICAgICAgICAgICAgICAgICAgICAgIGdldEN1cnJlbnRQYWdlID0gZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlcykgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuZ2V0KCIiLmNvbmNhdChfdGhpczMuX3BhdGgsICItIikuY29uY2F0KFB2RmlsZUlEQi5jcmVhdGVQYWdlKF90aGlzMy5fcGFnZVB0cikpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMocmVxLnJlc3VsdC5zbGljZSgwLCBfdGhpczMuX3BhZ2VPZmZzZXQpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzKG5ldyBVaW50OEFycmF5KDApKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTA7CiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRQYWdlKCk7CiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6CiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCA9IF9jb250ZXh0My5zZW50OwogICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQgPSBuZXcgVWludDhBcnJheShsYXN0Lmxlbmd0aCArIGNvbnRlbnQubGVuZ3RoKTsKICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDb250ZW50LnNldChsYXN0KTsKICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDb250ZW50LnNldChjb250ZW50LCBsYXN0Lmxlbmd0aCk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IF90aGlzMy5fcGFnZVB0ciAqIF90aGlzMy5fcGFnZVNpemUgKyBuZXdDb250ZW50Lmxlbmd0aDsKICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNZXRhID0gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogbmV3U2l6ZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVBhZ2VzOiBNYXRoLmNlaWwobmV3U2l6ZSAvIF90aGlzMy5fcGFnZVNpemUpLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvbgogICAgICAgICAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUucHV0KG5ld01ldGEsIF90aGlzMy5fcGF0aCk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXMgPSBNYXRoLmNlaWwobmV3Q29udGVudC5sZW5ndGggLyBfdGhpczMuX3BhZ2VTaXplKTsKICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFnZXM7IGkrKykgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUucHV0KG5ld0NvbnRlbnQuc2xpY2UoaSAqIF90aGlzMy5fcGFnZVNpemUsIChpICsgMSkgKiBfdGhpczMuX3BhZ2VTaXplKSwgIiIuY29uY2F0KF90aGlzMy5fcGF0aCwgIi0iKS5jb25jYXQoUHZGaWxlSURCLmNyZWF0ZVBhZ2UoX3RoaXMzLl9wYWdlUHRyICsgaSkpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzMy5leGlzdHMoKSAmJiBuZXdNZXRhLm51bVBhZ2VzIDwgX3RoaXMzLl9tZXRhLm51bVBhZ2VzKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlSYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKCIiLmNvbmNhdChfdGhpczMuX3BhdGgsICItIikuY29uY2F0KFB2RmlsZUlEQi5jcmVhdGVQYWdlKG5ld01ldGEubnVtUGFnZXMpKSwgIiIuY29uY2F0KF90aGlzMy5fcGF0aCwgIi0iKS5jb25jYXQoUHZGaWxlSURCLmNyZWF0ZVBhZ2UoX3RoaXMzLl9tZXRhLm51bVBhZ2VzKSksIHRydWUpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVbImRlbGV0ZSJdKGtleVJhbmdlKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUudHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChzdG9yZS50cmFuc2FjdGlvbi5lcnJvcik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLl9tZXRhID0gbmV3TWV0YTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5zZWVrKDAsIDIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpOwogICAgICAgICAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjI6CiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7CiAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZTMpOwogICAgICAgICAgICAgICAgICB9KSk7CiAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3g0LCBfeDUpIHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgfSgpKSk7CiAgICAgICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSwgX2NhbGxlZTQpOwogICAgICAgIH0pKTsKICAgICAgICBmdW5jdGlvbiB3cml0ZShfeDMpIHsKICAgICAgICAgIHJldHVybiBfd3JpdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHdyaXRlOwogICAgICB9KCkKICAgICAgLyoqDQogICAgICAgKiBNb3ZlcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgc3RyZWFtIGJ5ICdvZmZzZXQnIGVsZW1lbnRzIGF0ICd3aGVuY2UnIHBvc2l0aW9uLg0KICAgICAgICogQHBhcmFtIG9mZnNldCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIG1vdmUuDQogICAgICAgKiBAcGFyYW0gd2hlbmNlIE9uZSBvZjoNCiAgICAgICAqICAtIDA6IG1vdmVzIHBvc2l0aW9uIGZyb20gYmVnaW5uaW5nIG9mIGZpbGUuDQogICAgICAgKiAgLSAxOiBtb3ZlcyBwb3NpdGlvbiBmcm9tIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHN0cmVhbS4NCiAgICAgICAqICAtIDI6IG1vdmVzIHBvc2l0aW9uIGZyb20gdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgZmlsZS4NCiAgICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgZmlsZSBkb2Vzbid0IGV4aXN0IG9yIGlmIEVPRi4NCiAgICAgICAqLwogICAgfSwgewogICAgICBrZXk6ICJzZWVrIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWsob2Zmc2V0LCB3aGVuY2UpIHsKICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkgJiYgdGhpcy5fbW9kZSA9PT0gInJlYWRvbmx5IikgewogICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCInIi5jb25jYXQodGhpcy5fcGF0aCwgIicgZG9lc24ndCBleGlzdC4iKSk7CiAgICAgICAgfQogICAgICAgIGlmIChvZmZzZXQgPCAwKSB7CiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCJFT0YiKTsKICAgICAgICAgIGVyci5uYW1lID0gIkVuZE9mRmlsZSI7CiAgICAgICAgICB0aHJvdyBlcnI7CiAgICAgICAgfQogICAgICAgIHZhciBuZXdPZmZzZXQ7CiAgICAgICAgaWYgKHdoZW5jZSA9PT0gMCkgewogICAgICAgICAgbmV3T2Zmc2V0ID0gTWF0aC5taW4ob2Zmc2V0LCB0aGlzLl9tZXRhLnNpemUpOwogICAgICAgIH0gZWxzZSBpZiAod2hlbmNlID09PSAxKSB7CiAgICAgICAgICB2YXIgY3VycmVudE9mZnNldCA9IHRoaXMuX3BhZ2VTaXplICogdGhpcy5fcGFnZVB0ciArIHRoaXMuX3BhZ2VPZmZzZXQ7CiAgICAgICAgICBuZXdPZmZzZXQgPSBNYXRoLm1pbihjdXJyZW50T2Zmc2V0ICsgb2Zmc2V0LCB0aGlzLl9tZXRhLnNpemUpOwogICAgICAgIH0gZWxzZSBpZiAod2hlbmNlID09PSAyKSB7CiAgICAgICAgICBuZXdPZmZzZXQgPSBNYXRoLm1pbih0aGlzLl9tZXRhLnNpemUgKyBvZmZzZXQsIHRoaXMuX21ldGEuc2l6ZSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiSW52YWxpZCBvcGVyYXRpb246ICIuY29uY2F0KHdoZW5jZSwgIi4iKSk7CiAgICAgICAgfQogICAgICAgIHRoaXMuX3BhZ2VPZmZzZXQgPSBuZXdPZmZzZXQgJSB0aGlzLl9wYWdlU2l6ZTsKICAgICAgICB0aGlzLl9wYWdlUHRyID0gTWF0aC5mbG9vcihuZXdPZmZzZXQgLyB0aGlzLl9wYWdlU2l6ZSk7CiAgICAgIH0KICAgICAgLyoqDQogICAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnl0ZXMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBmaWxlLg0KICAgICAgICovCiAgICB9LCB7CiAgICAgIGtleTogInRlbGwiLAogICAgICB2YWx1ZTogZnVuY3Rpb24gdGVsbCgpIHsKICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHsKICAgICAgICAgIHJldHVybiAtMTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2VQdHIgKiB0aGlzLl9wYWdlU2l6ZSArIHRoaXMuX3BhZ2VPZmZzZXQ7CiAgICAgIH0KICAgICAgLyoqDQogICAgICAgKiBSZW1vdmVzIGEgZmlsZSBhbmQgYW55IHJlbGF0ZWQgcGFnZXMgZ2l2ZW4gdGhlIHBhdGguDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAicmVtb3ZlIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICB2YXIgX3JlbW92ZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IubWFyayhmdW5jdGlvbiBfY2FsbGVlNigpIHsKICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzOwogICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0NikgewogICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7CiAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoInJldHVybiIsIG5ldyBQcm9taXNlKCAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUocmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIG51bVBhZ2VzLCBrZXlSYW5nZSwgc3RvcmUsIHJlcTsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3Iud3JhcChmdW5jdGlvbiBfY2FsbGVlNSQoX2NvbnRleHQ1KSB7CiAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDUucHJldiA9IF9jb250ZXh0NS5uZXh0KSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgICAgICAgICAgICAgICBudW1QYWdlcyA9IF90aGlzNC5fbWV0YS5udW1QYWdlczsKICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlSYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKF90aGlzNC5fcGF0aCwgIiIuY29uY2F0KF90aGlzNC5fcGF0aCwgIi0iKS5jb25jYXQoUHZGaWxlSURCLmNyZWF0ZVBhZ2UobnVtUGFnZXMpKSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBfdGhpczQuX3N0b3JlOwogICAgICAgICAgICAgICAgICAgICAgICAgIHJlcSA9IHN0b3JlWyJkZWxldGUiXShrZXlSYW5nZSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuX21ldGEgPSB1bmRlZmluZWQ7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuX3BhZ2VPZmZzZXQgPSAwOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0Ll9wYWdlUHRyID0gMDsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6CiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5zdG9wKCk7CiAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZTUpOwogICAgICAgICAgICAgICAgICB9KSk7CiAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3g2LCBfeDcpIHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgICAgIH0oKSkpOwogICAgICAgICAgICAgIGNhc2UgMToKICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5zdG9wKCk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0sIF9jYWxsZWU2KTsKICAgICAgICB9KSk7CiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlKCkgewogICAgICAgICAgcmV0dXJuIF9yZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHJlbW92ZTsKICAgICAgfSgpCiAgICAgIC8qKg0KICAgICAgICogQ2hlY2tzIGlmIHRoZSBmb2xsb3dpbmcgcGF0aCBleGlzdHMuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAiZXhpc3RzIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4aXN0cygpIHsKICAgICAgICByZXR1cm4gdGhpcy5fbWV0YSAhPT0gdW5kZWZpbmVkOwogICAgICB9CiAgICAgIC8qKg0KICAgICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHN0cmVhbSBpcyBFT0YuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAiX2lzRU9GIiwKICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2VQdHIgPj0gdGhpcy5fbWV0YS5udW1QYWdlcyAtIDEgJiYgdGhpcy5fcGFnZU9mZnNldCA+PSB0aGlzLl9tZXRhLnNpemUgJSB0aGlzLl9wYWdlU2l6ZTsKICAgICAgfQogICAgICAvKioNCiAgICAgICAqIENyZWF0ZXMgYW4gaW5kZXggd2hpY2ggYXMgYSBrZXkgdG8gc2F2ZSBwYWdlIGRhdGEgdG8gSW5kZXhlZERCLg0KICAgICAgICogVGhpcyBmb3JtYXRzIHRoZSBmaWxlIGludG8gMDAwMCwgMDAwMSwgMDAwMiAuLi4NCiAgICAgICAqIEBwYXJhbSBwYWdlIFRoZSBwYWdlIG51bWJlciB0byBmb3JtYXQuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAiX3N0b3JlIiwKICAgICAgZ2V0OgogICAgICAvKioNCiAgICAgICAqIEdldHMgYSBvYmplY3RTdG9yZSBpbnN0YW5jZSBmcm9tIHRoZSBQdkZpbGUgaW5zdGFuY2UuDQogICAgICAgKi8KICAgICAgZnVuY3Rpb24gZ2V0KCkgewogICAgICAgIHJldHVybiB0aGlzLl9kYi50cmFuc2FjdGlvbihQVl9GSUxFX1NUT1JFLCB0aGlzLl9tb2RlKS5vYmplY3RTdG9yZShQVl9GSUxFX1NUT1JFKTsKICAgICAgfQogICAgfV0sIFt7CiAgICAgIGtleTogIm9wZW4iLAogICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbihwYXRoLCBtb2RlKSB7CiAgICAgICAgaWYgKCFzZWxmLmluZGV4ZWREQikgewogICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCJJbmRleGVkREIgaXMgbm90IHN1cHBvcnRlZCIpOwogICAgICAgICAgZXJyb3IubmFtZSA9ICJJbmRleGVkREJOb3RTdXBwb3J0ZWQiOwogICAgICAgICAgdGhyb3cgZXJyb3I7CiAgICAgICAgfQogICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgICAgIHZhciBfcmVmMyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IubWFyayhmdW5jdGlvbiBfY2FsbGVlNyhyZXNvbHZlLCByZWplY3QpIHsKICAgICAgICAgICAgdmFyIGRiLCByZXEsIF9lcnJvcjI7CiAgICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvci53cmFwKGZ1bmN0aW9uIF9jYWxsZWU3JChfY29udGV4dDcpIHsKICAgICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDcucHJldiA9IF9jb250ZXh0Ny5uZXh0KSB7CiAgICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ny5wcmV2ID0gMDsKICAgICAgICAgICAgICAgICAgX2NvbnRleHQ3Lm5leHQgPSAzOwogICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0REIoKTsKICAgICAgICAgICAgICAgIGNhc2UgMzoKICAgICAgICAgICAgICAgICAgZGIgPSBfY29udGV4dDcuc2VudDsKICAgICAgICAgICAgICAgICAgcmVxID0gZGIudHJhbnNhY3Rpb24oUFZfRklMRV9TVE9SRSwgInJlYWR3cml0ZSIpLm9iamVjdFN0b3JlKFBWX0ZJTEVfU1RPUkUpLmdldChwYXRoKTsKICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7CiAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGEgPSByZXEucmVzdWx0OwogICAgICAgICAgICAgICAgICAgIHZhciBkYk1vZGUgPSBtb2RlLmluY2x1ZGVzKCdyJykgPyAicmVhZG9ubHkiIDogInJlYWR3cml0ZSI7CiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGEgPT09IHVuZGVmaW5lZCAmJiBkYk1vZGUgPT09ICJyZWFkb25seSIpIHsKICAgICAgICAgICAgICAgICAgICAgIHZhciBfZXJyb3IgPSBuZXcgRXJyb3IoIiciLmNvbmNhdChwYXRoLCAiJyBkb2Vzbid0IGV4aXN0LiIpKTsKICAgICAgICAgICAgICAgICAgICAgIF9lcnJvci5uYW1lID0gIkZpbGVOb3RFeGlzdHMiOwogICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF9lcnJvcik7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHZhciBmaWxlSURCID0gbmV3IFB2RmlsZUlEQihwYXRoLCBtZXRhLCBkYiwgZGJNb2RlKTsKICAgICAgICAgICAgICAgICAgICBpZiAobW9kZS5pbmNsdWRlcygnYScpKSB7CiAgICAgICAgICAgICAgICAgICAgICBmaWxlSURCLnNlZWsoMCwgMik7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZUlEQik7CiAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gMTI7CiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgY2FzZSA5OgogICAgICAgICAgICAgICAgICBfY29udGV4dDcucHJldiA9IDk7CiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ny50MCA9IF9jb250ZXh0N1siY2F0Y2giXSgwKTsKICAgICAgICAgICAgICAgICAgaWYgKF9jb250ZXh0Ny50MC5uYW1lID09PSAiSW52YWxpZFN0YXRlRXJyb3IiKSB7CiAgICAgICAgICAgICAgICAgICAgX2Vycm9yMiA9IG5ldyBFcnJvcigiSW5kZXhlZERCIGlzIG5vdCBzdXBwb3J0ZWQiKTsKICAgICAgICAgICAgICAgICAgICBfZXJyb3IyLm5hbWUgPSAiSW5kZXhlZERCTm90U3VwcG9ydGVkIjsKICAgICAgICAgICAgICAgICAgICByZWplY3QoX2Vycm9yMik7CiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF9jb250ZXh0Ny50MCk7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGNhc2UgMTI6CiAgICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LnN0b3AoKTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0sIF9jYWxsZWU3LCBudWxsLCBbWzAsIDldXSk7CiAgICAgICAgICB9KSk7CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94OCwgX3g5KSB7CiAgICAgICAgICAgIHJldHVybiBfcmVmMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfTsKICAgICAgICB9KCkpOwogICAgICB9CiAgICB9LCB7CiAgICAgIGtleTogImNyZWF0ZVBhZ2UiLAogICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUGFnZShwYWdlKSB7CiAgICAgICAgcmV0dXJuICgiMDAwIiArIHBhZ2UpLnNsaWNlKC00KTsKICAgICAgfQogICAgfV0pOwogICAgcmV0dXJuIFB2RmlsZUlEQjsKICB9KFB2RmlsZSk7CgogIGZ1bmN0aW9uIF9jcmVhdGVTdXBlciQyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDIoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YkMShEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mJDEodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJDEodGhpcywgcmVzdWx0KTsgfTsgfQogIGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMigpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAidW5kZWZpbmVkIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gImZ1bmN0aW9uIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH0KICAvKioNCiAgICogUHZGaWxlTWVtIENsYXNzDQogICAqIFRoaXMgY2xhc3MgbW9ja3MgdGhlIGZpbGUgc3lzdGVtIHVzaW5nIGluLW1lbW9yeSBzdG9yYWdlLg0KICAgKi8KICB2YXIgUHZGaWxlTWVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUHZGaWxlKSB7CiAgICBfaW5oZXJpdHMkMShQdkZpbGVNZW0sIF9QdkZpbGUpOwogICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQyKFB2RmlsZU1lbSk7CiAgICBmdW5jdGlvbiBQdkZpbGVNZW0ocGF0aCwgbWV0YSwgZGIsIG1vZGUpIHsKICAgICAgdmFyIF90aGlzOwogICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHZGaWxlTWVtKTsKICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTsKICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQkMShfdGhpcyksICJfcG9zIiwgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkJDEoX3RoaXMpLCAiX21vZGUiLCB2b2lkIDApOwogICAgICBfdGhpcy5fcGF0aCA9IHBhdGg7CiAgICAgIF90aGlzLl9tZXRhID0gbWV0YTsKICAgICAgX3RoaXMuX21vZGUgPSBtb2RlOwogICAgICByZXR1cm4gX3RoaXM7CiAgICB9CiAgICBfY3JlYXRlQ2xhc3MoUHZGaWxlTWVtLCBbewogICAgICBrZXk6ICJjbG9zZSIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAicmVhZCIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKHNpemUsIGNvdW50KSB7CiAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7CiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIiciLmNvbmNhdCh0aGlzLl9wYXRoLCAiJyBkb2Vzbid0IGV4aXN0LiIpKTsKICAgICAgICB9CiAgICAgICAgaWYgKHRoaXMuX2lzRU9GKSB7CiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCJFT0YiKTsKICAgICAgICAgIGVyci5uYW1lID0gIkVuZE9mRmlsZSI7CiAgICAgICAgICB0aHJvdyBlcnI7CiAgICAgICAgfQogICAgICAgIHZhciB0b0NvcHkgPSBNYXRoLm1pbihzaXplICogY291bnQsIHRoaXMuX2ZpbGUubGVuZ3RoIC0gdGhpcy5fcG9zKTsKICAgICAgICB2YXIgdG90YWxFbGVtcyA9IHRvQ29weSAtIHRvQ29weSAlIHNpemU7CiAgICAgICAgdmFyIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHRvdGFsRWxlbXMpOwogICAgICAgIGJ1ZmZlci5zZXQodGhpcy5fZmlsZS5zbGljZSh0aGlzLl9wb3MsIHRoaXMuX3BvcyArIHRvdGFsRWxlbXMpLCAwKTsKICAgICAgICB0aGlzLl9wb3MgKz0gdG90YWxFbGVtczsKICAgICAgICByZXR1cm4gYnVmZmVyOwogICAgICB9CiAgICB9LCB7CiAgICAgIGtleTogIndyaXRlIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdyaXRlKGNvbnRlbnQpIHsKICAgICAgICB2YXIgbmV3RmlsZSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX3BvcyArIGNvbnRlbnQubGVuZ3RoKTsKICAgICAgICBpZiAodGhpcy5fZmlsZSAhPT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICBuZXdGaWxlLnNldCh0aGlzLl9maWxlLnNsaWNlKDAsIHRoaXMuX3BvcykpOwogICAgICAgICAgbmV3RmlsZS5zZXQoY29udGVudCwgdGhpcy5fcG9zKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgbmV3RmlsZS5zZXQoY29udGVudCk7CiAgICAgICAgfQogICAgICAgIHRoaXMuX2ZpbGUgPSBuZXdGaWxlOwogICAgICAgIHRoaXMuX3BvcyArPSBjb250ZW50Lmxlbmd0aDsKICAgICAgfQogICAgfSwgewogICAgICBrZXk6ICJzZWVrIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWsob2Zmc2V0LCB3aGVuY2UpIHsKICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkgJiYgdGhpcy5fbW9kZSA9PT0gInJlYWRvbmx5IikgewogICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCInIi5jb25jYXQodGhpcy5fcGF0aCwgIicgZG9lc24ndCBleGlzdC4iKSk7CiAgICAgICAgfQogICAgICAgIGlmIChvZmZzZXQgPCAwKSB7CiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCJFT0YiKTsKICAgICAgICAgIGVyci5uYW1lID0gIkVuZE9mRmlsZSI7CiAgICAgICAgICB0aHJvdyBlcnI7CiAgICAgICAgfQogICAgICAgIHZhciBuZXdPZmZzZXQ7CiAgICAgICAgaWYgKHdoZW5jZSA9PT0gMCkgewogICAgICAgICAgbmV3T2Zmc2V0ID0gTWF0aC5taW4ob2Zmc2V0LCB0aGlzLl9maWxlLmxlbmd0aCk7CiAgICAgICAgfSBlbHNlIGlmICh3aGVuY2UgPT09IDEpIHsKICAgICAgICAgIG5ld09mZnNldCA9IE1hdGgubWluKHRoaXMuX3BvcyArIG9mZnNldCwgdGhpcy5fZmlsZS5sZW5ndGgpOwogICAgICAgIH0gZWxzZSBpZiAod2hlbmNlID09PSAyKSB7CiAgICAgICAgICBuZXdPZmZzZXQgPSBNYXRoLm1pbih0aGlzLl9maWxlLmxlbmd0aCArIG9mZnNldCwgdGhpcy5fZmlsZS5sZW5ndGgpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkludmFsaWQgb3BlcmF0aW9uOiAiLmNvbmNhdCh3aGVuY2UsICIuIikpOwogICAgICAgIH0KICAgICAgICB0aGlzLl9wb3MgPSBuZXdPZmZzZXQ7CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAidGVsbCIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0ZWxsKCkgewogICAgICAgIGlmICghdGhpcy5leGlzdHMoKSkgewogICAgICAgICAgcmV0dXJuIC0xOwogICAgICAgIH0KICAgICAgICByZXR1cm4gdGhpcy5fcG9zOwogICAgICB9CiAgICB9LCB7CiAgICAgIGtleTogInJlbW92ZSIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgdmFyIF9yZW1vdmUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHsKICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvci53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7CiAgICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7CiAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgUHZGaWxlTWVtLl9tZW1GaWxlc1siZGVsZXRlIl0odGhpcy5fcGF0aCk7CiAgICAgICAgICAgICAgICB0aGlzLl9maWxlID0gdW5kZWZpbmVkOwogICAgICAgICAgICAgICAgdGhpcy5fcG9zID0gMDsKICAgICAgICAgICAgICBjYXNlIDM6CiAgICAgICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpOwogICAgICAgIH0pKTsKICAgICAgICBmdW5jdGlvbiByZW1vdmUoKSB7CiAgICAgICAgICByZXR1cm4gX3JlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgIH0KICAgICAgICByZXR1cm4gcmVtb3ZlOwogICAgICB9KCkKICAgIH0sIHsKICAgICAga2V5OiAiZXhpc3RzIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4aXN0cygpIHsKICAgICAgICByZXR1cm4gdGhpcy5fZmlsZSAhPT0gdW5kZWZpbmVkOwogICAgICB9CiAgICB9LCB7CiAgICAgIGtleTogIl9pc0VPRiIsCiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgIHJldHVybiB0aGlzLl9wb3MgPj0gdGhpcy5fZmlsZS5sZW5ndGg7CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAiX2ZpbGUiLAogICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICByZXR1cm4gUHZGaWxlTWVtLl9tZW1GaWxlcy5nZXQodGhpcy5fcGF0aCk7CiAgICAgIH0sCiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGNvbnRlbnQpIHsKICAgICAgICBQdkZpbGVNZW0uX21lbUZpbGVzLnNldCh0aGlzLl9wYXRoLCBjb250ZW50KTsKICAgICAgfQogICAgfV0sIFt7CiAgICAgIGtleTogIm9wZW4iLAogICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbihwYXRoLCBtb2RlKSB7CiAgICAgICAgdmFyIGZpbGUgPSBQdkZpbGVNZW0uX21lbUZpbGVzLmdldChwYXRoKTsKICAgICAgICB2YXIgZGJNb2RlID0gbW9kZS5pbmNsdWRlcygncicpID8gInJlYWRvbmx5IiA6ICJyZWFkd3JpdGUiOwogICAgICAgIGlmIChmaWxlID09PSB1bmRlZmluZWQgJiYgZGJNb2RlID09PSAicmVhZG9ubHkiKSB7CiAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoIiciLmNvbmNhdChwYXRoLCAiJyBkb2Vzbid0IGV4aXN0LiIpKTsKICAgICAgICAgIGVycm9yLm5hbWUgPSAiRmlsZU5vdEV4aXN0cyI7CiAgICAgICAgICB0aHJvdyBlcnJvcjsKICAgICAgICB9CiAgICAgICAgdmFyIGZpbGVNZW0gPSBuZXcgUHZGaWxlTWVtKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBkYk1vZGUpOwogICAgICAgIGlmIChtb2RlLmluY2x1ZGVzKCdhJykpIHsKICAgICAgICAgIGZpbGVNZW0uc2VlaygwLCAyKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGZpbGVNZW07CiAgICAgIH0KICAgIH1dKTsKICAgIHJldHVybiBQdkZpbGVNZW07CiAgfShQdkZpbGUpOwogIF9kZWZpbmVQcm9wZXJ0eShQdkZpbGVNZW0sICJfbWVtRmlsZXMiLCBuZXcgTWFwKCkpOwoKICBmdW5jdGlvbiBvd25LZXlzJDMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9CiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCQzKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH0KICBmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09ICJ1bmRlZmluZWQiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvWyJAQGl0ZXJhdG9yIl07IGlmICghaXQpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDEkMShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09ICJudW1iZXIiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLiIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0WyJyZXR1cm4iXSAhPSBudWxsKSBpdFsicmV0dXJuIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfQogIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQxJDEobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09ICJzdHJpbmciKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkMSQxKG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09ICJPYmplY3QiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSAiTWFwIiB8fCBuID09PSAiU2V0IikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSAiQXJndW1lbnRzIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDEkMShvLCBtaW5MZW4pOyB9CiAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkkMSQxKGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07IHJldHVybiBhcnIyOyB9CiAgLyoqDQogICAqIENvbnZlcnQgYSBudWxsIHRlcm1pbmF0ZWQgcGhyYXNlIHN0b3JlZCBpbnNpZGUgYW4gYXJyYXkgYnVmZmVyIHRvIGEgc3RyaW5nDQogICAqDQogICAqIEBwYXJhbSBhcnJheUJ1ZmZlciBpbnB1dCBhcnJheSBidWZmZXINCiAgICogQHBhcmFtIGluZGV4U3RhcnQgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBwaHJhc2UgaXMgc3RvcmVkDQogICAqIEByZXR1cm4gcmV0cmlldmVkIHN0cmluZw0KICAgKi8KICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvU3RyaW5nQXRJbmRleChhcnJheUJ1ZmZlciwgaW5kZXhTdGFydCkgewogICAgdmFyIGluZGV4RW5kID0gaW5kZXhTdGFydDsKICAgIHdoaWxlIChhcnJheUJ1ZmZlcltpbmRleEVuZF0gIT09IDApIHsKICAgICAgaW5kZXhFbmQrKzsKICAgIH0KICAgIHZhciB1dGY4ZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTsKICAgIHJldHVybiB1dGY4ZGVjb2Rlci5kZWNvZGUoYXJyYXlCdWZmZXIuc3ViYXJyYXkoaW5kZXhTdGFydCwgaW5kZXhFbmQpKTsKICB9CiAgLyoqDQogICAqIERlY29kZSBhIGJhc2U2NCBzdHJpbmcgYW5kIHN0b3JlZCBpdCBpbiBhIFVpbnQ4QXJyYXkgYXJyYXkNCiAgICoNCiAgICogQHBhcmFtIGJhc2U2NFN0cmluZyBpbnB1dCBiYXNlNjQgc3RyaW5nDQogICAqIEByZXR1cm4gZGVjb2RlZCBhcnJheQ0KICAgKi8KICBmdW5jdGlvbiBiYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7CiAgICB2YXIgYmFzZTY0U3RyaW5nRGVjb2RlZCA9IGF0b2IoYmFzZTY0U3RyaW5nKTsKICAgIHZhciBiaW5hcnlBcnJheSA9IG5ldyBVaW50OEFycmF5KGJhc2U2NFN0cmluZ0RlY29kZWQubGVuZ3RoKTsKICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZTY0U3RyaW5nRGVjb2RlZC5sZW5ndGg7IGkrKykgewogICAgICBiaW5hcnlBcnJheVtpXSA9IGJhc2U2NFN0cmluZ0RlY29kZWQuY2hhckNvZGVBdChpKTsKICAgIH0KICAgIHJldHVybiBiaW5hcnlBcnJheTsKICB9CiAgLyoqDQogICAqIENvbnZlcnQgYSBzdHJpbmcgaGVhZGVyIHRvIEpTIG9iamVjdA0KICAgKg0KICAgKiBAcGFyYW0gc3RyaW5nSGVhZGVyIGlucHV0IHN0cmluZyBpbiBqc29uIGZvcm1hdA0KICAgKiBAcmV0dXJuIHJldHJpZXZlZCBvYmplY3QNCiAgICovCiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lCiAgZnVuY3Rpb24gc3RyaW5nSGVhZGVyVG9PYmplY3Qoc3RyaW5nSGVhZGVyKSB7CiAgICB2YXIgb2JqZWN0SGVhZGVyID0ge307CiAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkMihzdHJpbmdIZWFkZXIuc3BsaXQoJ1xyXG4nKSksCiAgICAgIF9zdGVwOwogICAgdHJ5IHsKICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHsKICAgICAgICB2YXIgcHJvcGVydHkgPSBfc3RlcC52YWx1ZTsKICAgICAgICB2YXIga2V5VmFsdWVQYWlyID0gcHJvcGVydHkuc3BsaXQoJzogJyk7CiAgICAgICAgaWYgKGtleVZhbHVlUGFpclswXSAhPT0gJycpIHsKICAgICAgICAgIC8vIEB0cy1pZ25vcmUKICAgICAgICAgIG9iamVjdEhlYWRlcltrZXlWYWx1ZVBhaXJbMF1dID0ga2V5VmFsdWVQYWlyWzFdOwogICAgICAgIH0KICAgICAgfQogICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgIF9pdGVyYXRvci5lKGVycik7CiAgICB9IGZpbmFsbHkgewogICAgICBfaXRlcmF0b3IuZigpOwogICAgfQogICAgcmV0dXJuIG9iamVjdEhlYWRlcjsKICB9CiAgLyoqDQogICAqIEEgd3JhcHBlciB0byBmZXRjaCB0aGF0IGFsc28gc3VwcG9ydHMgdGltZW91dA0KICAgKg0KICAgKiBAcGFyYW0gdXJpIHRoZSBVUkwgb2YgdGhlIHJlc291cmNlDQogICAqIEBwYXJhbSBvcHRpb25zIG90aGVyIG9wdGlvbnMgcmVsYXRlZCB0byBmZXRjaA0KICAgKiBAcGFyYW0gdGltZSB0aW1lb3V0IHZhbHVlDQogICAqIEByZXR1cm4gcmVjZWl2ZWQgcmVzcG9uc2UNCiAgICovCiAgZnVuY3Rpb24gZmV0Y2hXaXRoVGltZW91dChfeCkgewogICAgcmV0dXJuIF9mZXRjaFdpdGhUaW1lb3V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgfQogIC8qKg0KICAgKiBDaGVja2luZyB3aGV0aGVyIHRoZSBnaXZlbiBBY2Nlc3NLZXkgaXMgdmFsaWQNCiAgICoNCiAgICogQHJldHVybiB0cnVlIGlmIHRoZSBBY2Nlc3NLZXkgaXMgdmFsaWQsIGZhbHNlIGlmIG5vdA0KICAgKi8KICBmdW5jdGlvbiBfZmV0Y2hXaXRoVGltZW91dCgpIHsKICAgIF9mZXRjaFdpdGhUaW1lb3V0ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvci5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUodXJpKSB7CiAgICAgIHZhciBvcHRpb25zLAogICAgICAgIHRpbWUsCiAgICAgICAgY29udHJvbGxlciwKICAgICAgICBjb25maWcsCiAgICAgICAgdGltZW91dCwKICAgICAgICByZXNwb25zZSwKICAgICAgICBfYXJncyA9IGFyZ3VtZW50czsKICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHsKICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICBvcHRpb25zID0gX2FyZ3MubGVuZ3RoID4gMSAmJiBfYXJnc1sxXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3NbMV0gOiB7fTsKICAgICAgICAgICAgdGltZSA9IF9hcmdzLmxlbmd0aCA+IDIgJiYgX2FyZ3NbMl0gIT09IHVuZGVmaW5lZCA/IF9hcmdzWzJdIDogNTAwMDsKICAgICAgICAgICAgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTsKICAgICAgICAgICAgY29uZmlnID0gX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgb3B0aW9ucyksIHt9LCB7CiAgICAgICAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbAogICAgICAgICAgICB9KTsKICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTsKICAgICAgICAgICAgfSwgdGltZSk7CiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3OwogICAgICAgICAgICByZXR1cm4gZmV0Y2godXJpLCBjb25maWcpOwogICAgICAgICAgY2FzZSA3OgogICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0LnNlbnQ7CiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTsKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgicmV0dXJuIiwgcmVzcG9uc2UpOwogICAgICAgICAgY2FzZSAxMDoKICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7CiAgICAgICAgfQogICAgICB9LCBfY2FsbGVlKTsKICAgIH0pKTsKICAgIHJldHVybiBfZmV0Y2hXaXRoVGltZW91dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogIH0KICBmdW5jdGlvbiBpc0FjY2Vzc0tleVZhbGlkKGFjY2Vzc0tleSkgewogICAgaWYgKHR5cGVvZiBhY2Nlc3NLZXkgIT09ICdzdHJpbmcnKSB7CiAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KICAgIHZhciBhY2Nlc3NLZXlDbGVhbmVkID0gYWNjZXNzS2V5LnRyaW0oKTsKICAgIGlmIChhY2Nlc3NLZXlDbGVhbmVkID09PSAnJykgewogICAgICByZXR1cm4gZmFsc2U7CiAgICB9CiAgICB0cnkgewogICAgICByZXR1cm4gYnRvYShhdG9iKGFjY2Vzc0tleUNsZWFuZWQpKSA9PT0gYWNjZXNzS2V5Q2xlYW5lZDsKICAgIH0gY2F0Y2ggKGVycikgewogICAgICByZXR1cm4gZmFsc2U7CiAgICB9CiAgfQogIC8qKg0KICAgKiBPcGVucyB0aGUgZmlsZSBnaXZlbiB0aGUgcGF0aCBhbmQgbW9kZS4NCiAgICogQHJldHVybnMgUHZGaWxlIGluc3RhbmNlLg0KICAgKi8KICBmdW5jdGlvbiBvcGVuKF94MiwgX3gzKSB7CiAgICByZXR1cm4gX29wZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICB9CiAgLyoqDQogICAqIFB2RmlsZSBoZWxwZXIuDQogICAqIFdyaXRlIG1vZGVsQmFzZTY0IHRvIG1vZGVsUGF0aCBkZXBlbmRpbmcgb24gb3B0aW9ucyBmb3JjZVdyaXRlIGFuZCB2ZXJzaW9uLg0KICAgKi8KICBmdW5jdGlvbiBfb3BlbigpIHsKICAgIF9vcGVuID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvci5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKHBhdGgsIG1vZGUpIHsKICAgICAgdmFyIGVycm9yOwogICAgICByZXR1cm4gcmVnZW5lcmF0b3Iud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7CiAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDA7CiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMzsKICAgICAgICAgICAgcmV0dXJuIFB2RmlsZUlEQi5vcGVuKHBhdGgsIG1vZGUpOwogICAgICAgICAgY2FzZSAzOgogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdCgicmV0dXJuIiwgX2NvbnRleHQyLnNlbnQpOwogICAgICAgICAgY2FzZSA2OgogICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDY7CiAgICAgICAgICAgIF9jb250ZXh0Mi50MCA9IF9jb250ZXh0MlsiY2F0Y2giXSgwKTsKICAgICAgICAgICAgaWYgKF9jb250ZXh0Mi50MC5uYW1lID09PSAnSW5kZXhlZERCTm90U3VwcG9ydGVkJykgewogICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlCiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbmRleGVkREIgaXMgbm90IHN1cHBvcnRlZC4gRmFsbGJhY2sgdG8gaW4tbWVtb3J5IHN0b3JhZ2UuJyk7CiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NvbnRleHQyLnQwLm5hbWUgIT09ICdGaWxlTm90RXhpc3RzJykgewogICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlCiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCJVbmFibGUgdG8gYWNjZXNzIEluZGV4ZWREQiAoIi5jb25jYXQoX2NvbnRleHQyLnQwLnRvU3RyaW5nKCksICIpLiBGYWxsYmFjayB0byBpbi1tZW1vcnkgc3RvcmFnZS4iKSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKCEoCiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUKICAgICAgICAgICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJgogICAgICAgICAgICAvLyBAdHMtaWdub3JlCiAgICAgICAgICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSkpIHsKICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDE2OwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmICghKF9jb250ZXh0Mi50MC5uYW1lID09PSAnRmlsZU5vdEV4aXN0cycpKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxMjsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aHJvdyBfY29udGV4dDIudDA7CiAgICAgICAgICBjYXNlIDEyOgogICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZQogICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbi1tZW1vcnkgc3RvcmFnZSBjYW5ub3QgYmUgdXNlZCBpbnNpZGUgYSB3b3JrZXIuJyk7CiAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKCJGYWlsZWQgdG8gc3RhcnQgUHZGaWxlOiAiLmNvbmNhdChfY29udGV4dDIudDAudG9TdHJpbmcoKSkpOwogICAgICAgICAgICBlcnJvci5uYW1lID0gJ1B2RmlsZU5vdFN1cHBvcnRlZCc7CiAgICAgICAgICAgIHRocm93IGVycm9yOwogICAgICAgICAgY2FzZSAxNjoKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoInJldHVybiIsIFB2RmlsZU1lbS5vcGVuKHBhdGgsIG1vZGUpKTsKICAgICAgICAgIGNhc2UgMTc6CiAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTsKICAgICAgICB9CiAgICAgIH0sIF9jYWxsZWUyLCBudWxsLCBbWzAsIDZdXSk7CiAgICB9KSk7CiAgICByZXR1cm4gX29wZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICB9CiAgZnVuY3Rpb24gZnJvbUJhc2U2NChfeDQsIF94NSwgX3g2LCBfeDcpIHsKICAgIHJldHVybiBfZnJvbUJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICB9CiAgZnVuY3Rpb24gX2Zyb21CYXNlKCkgewogICAgX2Zyb21CYXNlID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvci5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKG1vZGVsUGF0aCwgbW9kZWxCYXNlNjQsIGZvcmNlV3JpdGUsIHZlcnNpb24pIHsKICAgICAgdmFyIHB2RmlsZTsKICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0MykgewogICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHsKICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyOwogICAgICAgICAgICByZXR1cm4gb3Blbihtb2RlbFBhdGgsICd3Jyk7CiAgICAgICAgICBjYXNlIDI6CiAgICAgICAgICAgIHB2RmlsZSA9IF9jb250ZXh0My5zZW50OwogICAgICAgICAgICBpZiAoIShmb3JjZVdyaXRlIHx8IHB2RmlsZS5tZXRhID09PSB1bmRlZmluZWQgfHwgdmVyc2lvbiA+IHB2RmlsZS5tZXRhLnZlcnNpb24pKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA2OwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gNjsKICAgICAgICAgICAgcmV0dXJuIHB2RmlsZS53cml0ZShiYXNlNjRUb1VpbnQ4QXJyYXkobW9kZWxCYXNlNjQpLCB2ZXJzaW9uKTsKICAgICAgICAgIGNhc2UgNjoKICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc3RvcCgpOwogICAgICAgIH0KICAgICAgfSwgX2NhbGxlZTMpOwogICAgfSkpOwogICAgcmV0dXJuIF9mcm9tQmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogIH0KICB2YXIgQkFDS09GRl9DQVBfTUlMTElTRUNPTkRTID0gNTAwMDsKICB2YXIgQkFDS09GRl9TVEFSVF9NSUxMSVNFQ09ORFMgPSAyOwogIC8qKg0KICAgKiBQdkZpbGUgaGVscGVyLg0KICAgKiBXcml0ZSBwdWJsaWNQYXRoJ3MgbW9kZWwgdG8gbW9kZWxQYXRoIGRlcGVuZGluZyBvbiBvcHRpb25zIGZvcmNlV3JpdGUgYW5kIHZlcnNpb24uDQogICAqLwogIGZ1bmN0aW9uIGZyb21QdWJsaWNEaXJlY3RvcnkoX3g4LCBfeDksIF94MTAsIF94MTEsIF94MTIpIHsKICAgIHJldHVybiBfZnJvbVB1YmxpY0RpcmVjdG9yeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogIH0KICAvKioNCiAgICogVGFrZXMgYSBQaWNvdm9pY2UgbW9kZWwgZmlsZSBhbmQgZWl0aGVyIGRlY29kZXMgaXQgZnJvbSBiYXNlNjQgb3IgZmV0Y2hlcw0KICAgKiBpdCBmcm9tIHRoZSBwdWJsaWMgZGlyZWN0b3J5LiBTYXZlcyB0aGUgcmVzdWx0IHRvIHN0b3JhZ2Ugb24gdmVyc2lvbiBpbmNyZWFzZSBvcg0KICAgKiBpZiBmb3JjZVdyaXRlIGlzIGVuYWJsZWQuDQogICAqLwogIGZ1bmN0aW9uIF9mcm9tUHVibGljRGlyZWN0b3J5KCkgewogICAgX2Zyb21QdWJsaWNEaXJlY3RvcnkgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQobW9kZWxQYXRoLCBwdWJsaWNQYXRoLCBmb3JjZVdyaXRlLCB2ZXJzaW9uLCBudW1GZXRjaFJldGllcykgewogICAgICB2YXIgcHZGaWxlLCB3YWl0VGltZU1pbGxpc2Vjb25kcywgZGVsYXksIG51bUF0dGVtcHRzTGVmdCwgZXJyb3IsIHJlc3BvbnNlLCBkYXRhLCByZXNwb25zZVRleHQ7CiAgICAgIHJldHVybiByZWdlbmVyYXRvci53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHsKICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDQucHJldiA9IF9jb250ZXh0NC5uZXh0KSB7CiAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMjsKICAgICAgICAgICAgcmV0dXJuIG9wZW4obW9kZWxQYXRoLCAndycpOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBwdkZpbGUgPSBfY29udGV4dDQuc2VudDsKICAgICAgICAgICAgaWYgKCEoZm9yY2VXcml0ZSB8fCBwdkZpbGUubWV0YSA9PT0gdW5kZWZpbmVkIHx8IHZlcnNpb24gPiBwdkZpbGUubWV0YS52ZXJzaW9uKSkgewogICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gNDM7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKCEobnVtRmV0Y2hSZXRpZXMgPCAwKSkgewogICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gNjsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aHJvdyBFcnJvcignbnVtRmV0Y2hSZXRyaWVzIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTsKICAgICAgICAgIGNhc2UgNjoKICAgICAgICAgICAgd2FpdFRpbWVNaWxsaXNlY29uZHMgPSBCQUNLT0ZGX1NUQVJUX01JTExJU0VDT05EUzsKICAgICAgICAgICAgZGVsYXkgPSBmdW5jdGlvbiBkZWxheShkZWxheU1pbGxpc2Vjb25kcykgewogICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgewogICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheU1pbGxpc2Vjb25kcyk7CiAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIG51bUF0dGVtcHRzTGVmdCA9IG51bUZldGNoUmV0aWVzICsgMTsKICAgICAgICAgICAgZXJyb3IgPSBudWxsOwogICAgICAgICAgY2FzZSAxMDoKICAgICAgICAgICAgaWYgKCEobnVtQXR0ZW1wdHNMZWZ0ID4gMCkpIHsKICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDM4OwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVycm9yID0gbnVsbDsKICAgICAgICAgICAgX2NvbnRleHQ0LnByZXYgPSAxMjsKICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxNTsKICAgICAgICAgICAgcmV0dXJuIGZldGNoKHB1YmxpY1BhdGgsIHsKICAgICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJwogICAgICAgICAgICB9KTsKICAgICAgICAgIGNhc2UgMTU6CiAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQ0LnNlbnQ7CiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHsKICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDIzOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTk7CiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpOwogICAgICAgICAgY2FzZSAxOToKICAgICAgICAgICAgZGF0YSA9IF9jb250ZXh0NC5zZW50OwogICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDIyOwogICAgICAgICAgICByZXR1cm4gcHZGaWxlLndyaXRlKG5ldyBVaW50OEFycmF5KGRhdGEpLCB2ZXJzaW9uKTsKICAgICAgICAgIGNhc2UgMjI6CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KCJyZXR1cm4iKTsKICAgICAgICAgIGNhc2UgMjM6CiAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMjU7CiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7CiAgICAgICAgICBjYXNlIDI1OgogICAgICAgICAgICByZXNwb25zZVRleHQgPSBfY29udGV4dDQuc2VudDsKICAgICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoIkVycm9yIHJlc3BvbnNlIHJldHVybmVkIHdoaWxlIGZldGNoaW5nIG1vZGVsIGZyb20gJyIuY29uY2F0KHB1YmxpY1BhdGgsICInOiAiKS5jb25jYXQocmVzcG9uc2VUZXh0KSk7CiAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMzI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyOToKICAgICAgICAgICAgX2NvbnRleHQ0LnByZXYgPSAyOTsKICAgICAgICAgICAgX2NvbnRleHQ0LnQwID0gX2NvbnRleHQ0WyJjYXRjaCJdKDEyKTsKICAgICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoIkZhaWxlZCB0byBmZXRjaCBtb2RlbCBmcm9tICciLmNvbmNhdChwdWJsaWNQYXRoLCAiJzogIikuY29uY2F0KF9jb250ZXh0NC50MC5tZXNzYWdlKSk7CiAgICAgICAgICBjYXNlIDMyOgogICAgICAgICAgICBudW1BdHRlbXB0c0xlZnQtLTsKICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAzNTsKICAgICAgICAgICAgcmV0dXJuIGRlbGF5KHdhaXRUaW1lTWlsbGlzZWNvbmRzKTsKICAgICAgICAgIGNhc2UgMzU6CiAgICAgICAgICAgIHdhaXRUaW1lTWlsbGlzZWNvbmRzID0gTWF0aC5taW4oQkFDS09GRl9DQVBfTUlMTElTRUNPTkRTLCB3YWl0VGltZU1pbGxpc2Vjb25kcyAqIEJBQ0tPRkZfU1RBUlRfTUlMTElTRUNPTkRTKTsKICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDM4OgogICAgICAgICAgICBpZiAoIShlcnJvciAhPT0gbnVsbCkpIHsKICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDQyOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHRocm93IGVycm9yOwogICAgICAgICAgY2FzZSA0MjoKICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJVbmV4cGVjdGVkIGVycm9yIGVuY291bnRlcmVkIHdoaWxlIGZldGNoaW5nIG1vZGVsIGZyb20gJyIuY29uY2F0KHB1YmxpY1BhdGgsICInIikpOwogICAgICAgICAgY2FzZSA0MzoKICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuc3RvcCgpOwogICAgICAgIH0KICAgICAgfSwgX2NhbGxlZTQsIG51bGwsIFtbMTIsIDI5XV0pOwogICAgfSkpOwogICAgcmV0dXJuIF9mcm9tUHVibGljRGlyZWN0b3J5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgfQogIGZ1bmN0aW9uIGxvYWRNb2RlbChfeDEzKSB7CiAgICByZXR1cm4gX2xvYWRNb2RlbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogIH0KICBmdW5jdGlvbiBfbG9hZE1vZGVsKCkgewogICAgX2xvYWRNb2RlbCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IubWFyayhmdW5jdGlvbiBfY2FsbGVlNShtb2RlbCkgewogICAgICB2YXIgYmFzZTY0LCBwdWJsaWNQYXRoLCBjdXN0b21Xcml0ZVBhdGgsIF9tb2RlbCRmb3JjZVdyaXRlLCBmb3JjZVdyaXRlLCBfbW9kZWwkdmVyc2lvbiwgdmVyc2lvbiwgX21vZGVsJG51bUZldGNoUmV0cmllLCBudW1GZXRjaFJldHJpZXM7CiAgICAgIHJldHVybiByZWdlbmVyYXRvci53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHsKICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDUucHJldiA9IF9jb250ZXh0NS5uZXh0KSB7CiAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgIGlmICghKG1vZGVsID09PSB1bmRlZmluZWQgfHwgbW9kZWwgPT09IG51bGwpKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAyOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG1vZGVsIGlzIHVuZGVmaW5lZCAvIGVtcHR5Jyk7CiAgICAgICAgICBjYXNlIDI6CiAgICAgICAgICAgIGJhc2U2NCA9IG1vZGVsLmJhc2U2NCwgcHVibGljUGF0aCA9IG1vZGVsLnB1YmxpY1BhdGgsIGN1c3RvbVdyaXRlUGF0aCA9IG1vZGVsLmN1c3RvbVdyaXRlUGF0aCwgX21vZGVsJGZvcmNlV3JpdGUgPSBtb2RlbC5mb3JjZVdyaXRlLCBmb3JjZVdyaXRlID0gX21vZGVsJGZvcmNlV3JpdGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX21vZGVsJGZvcmNlV3JpdGUsIF9tb2RlbCR2ZXJzaW9uID0gbW9kZWwudmVyc2lvbiwgdmVyc2lvbiA9IF9tb2RlbCR2ZXJzaW9uID09PSB2b2lkIDAgPyAxIDogX21vZGVsJHZlcnNpb24sIF9tb2RlbCRudW1GZXRjaFJldHJpZSA9IG1vZGVsLm51bUZldGNoUmV0cmllcywgbnVtRmV0Y2hSZXRyaWVzID0gX21vZGVsJG51bUZldGNoUmV0cmllID09PSB2b2lkIDAgPyAwIDogX21vZGVsJG51bUZldGNoUmV0cmllOwogICAgICAgICAgICBpZiAoIShjdXN0b21Xcml0ZVBhdGggPT09IHVuZGVmaW5lZCB8fCBjdXN0b21Xcml0ZVBhdGggPT09IG51bGwpKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA1OwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGN1c3RvbVdyaXRlUGF0aCBvZiB0aGUgcHJvdmlkZWQgbW9kZWwgaXMgdW5kZWZpbmVkIC8gZW1wdHknKTsKICAgICAgICAgIGNhc2UgNToKICAgICAgICAgICAgaWYgKCEoYmFzZTY0ICE9PSB1bmRlZmluZWQgJiYgYmFzZTY0ICE9PSBudWxsKSkgewogICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMTA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA4OwogICAgICAgICAgICByZXR1cm4gZnJvbUJhc2U2NChjdXN0b21Xcml0ZVBhdGgsIGJhc2U2NCwgZm9yY2VXcml0ZSwgdmVyc2lvbik7CiAgICAgICAgICBjYXNlIDg6CiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMTY7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAxMDoKICAgICAgICAgICAgaWYgKCEocHVibGljUGF0aCAhPT0gdW5kZWZpbmVkICYmIHB1YmxpY1BhdGggIT09IG51bGwpKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAxNTsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDEzOwogICAgICAgICAgICByZXR1cm4gZnJvbVB1YmxpY0RpcmVjdG9yeShjdXN0b21Xcml0ZVBhdGgsIHB1YmxpY1BhdGgsIGZvcmNlV3JpdGUsIHZlcnNpb24sIG51bUZldGNoUmV0cmllcyk7CiAgICAgICAgICBjYXNlIDEzOgogICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDE2OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgMTU6CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiVGhlIHByb3ZpZGVkIG1vZGVsIGRvZXNuJ3QgY29udGFpbiBhIHZhbGlkIHB1YmxpY1BhdGggb3IgYmFzZTY0IHZhbHVlIik7CiAgICAgICAgICBjYXNlIDE2OgogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdCgicmV0dXJuIiwgY3VzdG9tV3JpdGVQYXRoKTsKICAgICAgICAgIGNhc2UgMTc6CiAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTsKICAgICAgICB9CiAgICAgIH0sIF9jYWxsZWU1KTsKICAgIH0pKTsKICAgIHJldHVybiBfbG9hZE1vZGVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgfQoKICAvKg0KICAgIENvcHlyaWdodCAyMDIyIFBpY292b2ljZSBJbmMuDQoKICAgIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgbGljZW5zZS4gQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGxvY2F0ZWQgaW4gdGhlICJMSUNFTlNFIg0KICAgIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgc291cmNlLg0KCiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uDQogICAgYW4gIkFTIElTIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlDQogICAgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4NCiAgKi8KICAvKiBlc2xpbnQgY2FtZWxjYXNlOiAwLCBhcnJvdy1ib2R5LXN0eWxlOiAwLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnM6IDAsIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXM6IDAgKi8KICB2YXIgd2FzaVNuYXBzaG90UHJldmlldzFFbXVsYXRvciA9IHsKICAgIGFyZ3NfZ2V0OiBmdW5jdGlvbiBhcmdzX2dldChpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBhcmdzX3NpemVzX2dldDogZnVuY3Rpb24gYXJnc19zaXplc19nZXQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZW52aXJvbl9nZXQ6IGZ1bmN0aW9uIGVudmlyb25fZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGVudmlyb25fc2l6ZXNfZ2V0OiBmdW5jdGlvbiBlbnZpcm9uX3NpemVzX2dldChpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBjbG9ja19yZXNfZ2V0OiBmdW5jdGlvbiBjbG9ja19yZXNfZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGNsb2NrX3RpbWVfZ2V0OiBmdW5jdGlvbiBjbG9ja190aW1lX2dldChpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9hZHZpc2U6IGZ1bmN0aW9uIGZkX2FkdmlzZShpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9hbGxvY2F0ZTogZnVuY3Rpb24gZmRfYWxsb2NhdGUoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfY2xvc2U6IGZ1bmN0aW9uIGZkX2Nsb3NlKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX2RhdGFzeW5jOiBmdW5jdGlvbiBmZF9kYXRhc3luYyhpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9mZHN0YXRfZ2V0OiBmdW5jdGlvbiBmZF9mZHN0YXRfZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX2Zkc3RhdF9zZXRfZmxhZ3M6IGZ1bmN0aW9uIGZkX2Zkc3RhdF9zZXRfZmxhZ3MoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfZmRzdGF0X3NldF9yaWdodHM6IGZ1bmN0aW9uIGZkX2Zkc3RhdF9zZXRfcmlnaHRzKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX2ZpbGVzdGF0X2dldDogZnVuY3Rpb24gZmRfZmlsZXN0YXRfZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX2ZpbGVzdGF0X3NldF9zaXplOiBmdW5jdGlvbiBmZF9maWxlc3RhdF9zZXRfc2l6ZShpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9maWxlc3RhdF9zZXRfdGltZXM6IGZ1bmN0aW9uIGZkX2ZpbGVzdGF0X3NldF90aW1lcyhpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9wcmVhZDogZnVuY3Rpb24gZmRfcHJlYWQoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfcHJlc3RhdF9nZXQ6IGZ1bmN0aW9uIGZkX3ByZXN0YXRfZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX3ByZXN0YXRfZGlyX25hbWU6IGZ1bmN0aW9uIGZkX3ByZXN0YXRfZGlyX25hbWUoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfcHdyaXRlOiBmdW5jdGlvbiBmZF9wd3JpdGUoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfcmVhZDogZnVuY3Rpb24gZmRfcmVhZChpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9yZWFkZGlyOiBmdW5jdGlvbiBmZF9yZWFkZGlyKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX3JlbnVtYmVyOiBmdW5jdGlvbiBmZF9yZW51bWJlcihpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF9zZWVrOiBmdW5jdGlvbiBmZF9zZWVrKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIGZkX3N5bmM6IGZ1bmN0aW9uIGZkX3N5bmMoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgZmRfdGVsbDogZnVuY3Rpb24gZmRfdGVsbChpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBmZF93cml0ZTogZnVuY3Rpb24gZmRfd3JpdGUoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgcGF0aF9jcmVhdGVfZGlyZWN0b3J5OiBmdW5jdGlvbiBwYXRoX2NyZWF0ZV9kaXJlY3RvcnkoaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9LAogICAgcGF0aF9maWxlc3RhdF9nZXQ6IGZ1bmN0aW9uIHBhdGhfZmlsZXN0YXRfZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHBhdGhfZmlsZXN0YXRfc2V0X3RpbWVzOiBmdW5jdGlvbiBwYXRoX2ZpbGVzdGF0X3NldF90aW1lcyhpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBwYXRoX2xpbms6IGZ1bmN0aW9uIHBhdGhfbGluayhpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBwYXRoX29wZW46IGZ1bmN0aW9uIHBhdGhfb3BlbihpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBwYXRoX3JlYWRsaW5rOiBmdW5jdGlvbiBwYXRoX3JlYWRsaW5rKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHBhdGhfcmVtb3ZlX2RpcmVjdG9yeTogZnVuY3Rpb24gcGF0aF9yZW1vdmVfZGlyZWN0b3J5KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHBhdGhfcmVuYW1lOiBmdW5jdGlvbiBwYXRoX3JlbmFtZShpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBwYXRoX3N5bWxpbms6IGZ1bmN0aW9uIHBhdGhfc3ltbGluayhpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBwYXRoX3VubGlua19maWxlOiBmdW5jdGlvbiBwYXRoX3VubGlua19maWxlKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHBvbGxfb25lb2ZmOiBmdW5jdGlvbiBwb2xsX29uZW9mZihpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBwcm9jX2V4aXQ6IGZ1bmN0aW9uIHByb2NfZXhpdChpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICBwcm9jX3JhaXNlOiBmdW5jdGlvbiBwcm9jX3JhaXNlKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHNjaGVkX3lpZWxkOiBmdW5jdGlvbiBzY2hlZF95aWVsZChpbnB1dCkgewogICAgICByZXR1cm4gMDsKICAgIH0sCiAgICByYW5kb21fZ2V0OiBmdW5jdGlvbiByYW5kb21fZ2V0KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHNvY2tfcmVjdjogZnVuY3Rpb24gc29ja19yZWN2KGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHNvY2tfc2VuZDogZnVuY3Rpb24gc29ja19zZW5kKGlucHV0KSB7CiAgICAgIHJldHVybiAwOwogICAgfSwKICAgIHNvY2tfc2h1dGRvd246IGZ1bmN0aW9uIHNvY2tfc2h1dGRvd24oaW5wdXQpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9CiAgfTsKCiAgLyoqDQogICAqIEltcG9ydHMgYW5kIEV4cG9ydHMgZnVuY3Rpb25zIHJlcXVpcmVkIGZvciBXQVNNLg0KICAgKg0KICAgKiBAcGFyYW0gbWVtb3J5IEluaXRpYWxpemVkIFdlYkFzc2VtYmx5IG1lbW9yeSBvYmplY3QuDQogICAqIEBwYXJhbSB3YXNtIFRoZSB3YXNtIGZpbGUgaW4gYmFzZTY0IHN0cmluZyBvciBzdHJlYW0gdG8gcHVibGljIHBhdGggKGkuZS4gZmV0Y2goImZpbGUud2FzbSIpKSB0byBpbml0aWFsaXplLg0KICAgKiBAcGFyYW0gcHZFcnJvciBUaGUgUHZFcnJvciBvYmplY3QgdG8gc3RvcmUgZXJyb3IgZGV0YWlscy4NCiAgICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGV4cG9ydGVkIGZ1bmN0aW9ucyBmcm9tIFdBU00uDQogICAqLwogIGZ1bmN0aW9uIGJ1aWxkV2FzbShfeCwgX3gyLCBfeDMpIHsKICAgIHJldHVybiBfYnVpbGRXYXNtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgfQogIGZ1bmN0aW9uIF9idWlsZFdhc20oKSB7CiAgICBfYnVpbGRXYXNtID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvci5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU5KG1lbW9yeSwgd2FzbSwgcHZFcnJvcikgewogICAgICB2YXIgbWVtb3J5QnVmZmVyVWludDgsIG1lbW9yeUJ1ZmZlckludDMyLCBwdkNvbnNvbGVMb2dXYXNtLCBwdkFzc2VydFdhc20sIHB2VGltZVdhc20sIHB2SHR0cHNSZXF1ZXN0V2FzbSwgcHZHZXRCcm93c2VySW5mbywgcHZHZXRPcmlnaW5JbmZvLCBwdkZpbGVPcGVuV2FzbSwgcHZGaWxlQ2xvc2VXYXNtLCBwdkZpbGVSZWFkV2FzbSwgcHZGaWxlV3JpdGVXYXNtLCBwdkZpbGVTZWVrV2FzbSwgcHZGaWxlVGVsbFdhc20sIHB2RmlsZVJlbW92ZVdhc20sIGltcG9ydE9iamVjdCwgaW5zdGFuY2UsIHJlc3BvbnNlLCBkYXRhLCB3YXNtQ29kZUFycmF5LCBhbGlnbmVkX2FsbG9jOwogICAgICByZXR1cm4gcmVnZW5lcmF0b3Iud3JhcChmdW5jdGlvbiBfY2FsbGVlOSQoX2NvbnRleHQ5KSB7CiAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQ5LnByZXYgPSBfY29udGV4dDkubmV4dCkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICBtZW1vcnlCdWZmZXJVaW50OCA9IG5ldyBVaW50OEFycmF5KG1lbW9yeS5idWZmZXIpOwogICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMiA9IG5ldyBJbnQzMkFycmF5KG1lbW9yeS5idWZmZXIpOwogICAgICAgICAgICBwdkNvbnNvbGVMb2dXYXNtID0gZnVuY3Rpb24gcHZDb25zb2xlTG9nV2FzbShpbmRleCkgewogICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlCiAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlCdWZmZXJUb1N0cmluZ0F0SW5kZXgobWVtb3J5QnVmZmVyVWludDgsIGluZGV4KSk7CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIHB2QXNzZXJ0V2FzbSA9IGZ1bmN0aW9uIHB2QXNzZXJ0V2FzbShleHByLCBsaW5lLCBmaWxlTmFtZUFkZHJlc3MpIHsKICAgICAgICAgICAgICBpZiAoZXhwciA9PT0gMCkgewogICAgICAgICAgICAgICAgdmFyIGZpbGVOYW1lID0gYXJyYXlCdWZmZXJUb1N0cmluZ0F0SW5kZXgobWVtb3J5QnVmZmVyVWludDgsIGZpbGVOYW1lQWRkcmVzcyk7CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoImFzc2VydGlvbiBmYWlsZWQgYXQgbGluZSAiLmNvbmNhdChsaW5lLCAiIGluIFwiIikuY29uY2F0KGZpbGVOYW1lLCAiXCIiKSk7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9OwogICAgICAgICAgICBwdlRpbWVXYXNtID0gZnVuY3Rpb24gcHZUaW1lV2FzbSgpIHsKICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSAvIDEwMDA7CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIHB2SHR0cHNSZXF1ZXN0V2FzbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShodHRwTWV0aG9kQWRkcmVzcywgc2VydmVyTmFtZUFkZHJlc3MsIGVuZHBvaW50QWRkcmVzcywgaGVhZGVyQWRkcmVzcywgYm9keUFkZHJlc3MsIHRpbWVvdXRNcywgcmVzcG9uc2VBZGRyZXNzQWRkcmVzcywgcmVzcG9uc2VTaXplQWRkcmVzcywgcmVzcG9uc2VDb2RlQWRkcmVzcykgewogICAgICAgICAgICAgICAgdmFyIGh0dHBNZXRob2QsIHNlcnZlck5hbWUsIGVuZHBvaW50LCBoZWFkZXIsIGJvZHksIGhlYWRlck9iamVjdCwgcmVzcG9uc2UsIHJlc3BvbnNlVGV4dCwgc3RhdHVzQ29kZSwgcmVzcG9uc2VBZGRyZXNzLCBpOwogICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHsKICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHsKICAgICAgICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICAgICAgICBodHRwTWV0aG9kID0gYXJyYXlCdWZmZXJUb1N0cmluZ0F0SW5kZXgobWVtb3J5QnVmZmVyVWludDgsIGh0dHBNZXRob2RBZGRyZXNzKTsKICAgICAgICAgICAgICAgICAgICAgIHNlcnZlck5hbWUgPSBhcnJheUJ1ZmZlclRvU3RyaW5nQXRJbmRleChtZW1vcnlCdWZmZXJVaW50OCwgc2VydmVyTmFtZUFkZHJlc3MpOwogICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQgPSBhcnJheUJ1ZmZlclRvU3RyaW5nQXRJbmRleChtZW1vcnlCdWZmZXJVaW50OCwgZW5kcG9pbnRBZGRyZXNzKTsKICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciA9IGFycmF5QnVmZmVyVG9TdHJpbmdBdEluZGV4KG1lbW9yeUJ1ZmZlclVpbnQ4LCBoZWFkZXJBZGRyZXNzKTsKICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBhcnJheUJ1ZmZlclRvU3RyaW5nQXRJbmRleChtZW1vcnlCdWZmZXJVaW50OCwgYm9keUFkZHJlc3MpOwogICAgICAgICAgICAgICAgICAgICAgaGVhZGVyT2JqZWN0ID0gc3RyaW5nSGVhZGVyVG9PYmplY3QoaGVhZGVyKTsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA2OwogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDk7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hXaXRoVGltZW91dCgnaHR0cHM6Ly8nICsgc2VydmVyTmFtZSArIGVuZHBvaW50LCB7CiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogaHR0cE1ldGhvZCwKICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyT2JqZWN0LAogICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5CiAgICAgICAgICAgICAgICAgICAgICB9LCB0aW1lb3V0TXMpOwogICAgICAgICAgICAgICAgICAgIGNhc2UgOToKICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQuc2VudDsKICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTc7CiAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOgogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEzOwogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFsiY2F0Y2giXSg2KTsKICAgICAgICAgICAgICAgICAgICAgIHB2RXJyb3IgPT09IG51bGwgfHwgcHZFcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHZFcnJvci5hZGRFcnJvcigncHZIdHRwc1JlcXVlc3RXYXNtJywgIkZhaWxlZCB0byBmZXRjaDogIi5jb25jYXQoX2NvbnRleHQudDApKTsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoInJldHVybiIpOwogICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTc7CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjA7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpOwogICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6CiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRleHQgPSBfY29udGV4dC5zZW50OwogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI3OwogICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzoKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAyMzsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQxID0gX2NvbnRleHRbImNhdGNoIl0oMTcpOwogICAgICAgICAgICAgICAgICAgICAgcHZFcnJvciA9PT0gbnVsbCB8fCBwdkVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwdkVycm9yLmFkZEVycm9yKCdwdkh0dHBzUmVxdWVzdFdhc20nLCAiRmFpbGVkIHRvIGdldCByZXNwb25zZSB0ZXh0OiAiLmNvbmNhdChfY29udGV4dC50MSkpOwogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgicmV0dXJuIik7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNzoKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyOTsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGlnbmVkX2FsbG9jKEludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgKHJlc3BvbnNlVGV4dC5sZW5ndGggKyAxKSAqIEludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOToKICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQWRkcmVzcyA9IF9jb250ZXh0LnNlbnQ7CiAgICAgICAgICAgICAgICAgICAgICBpZiAoIShyZXNwb25zZUFkZHJlc3MgPT09IDApKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzNDsKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICBwdkVycm9yID09PSBudWxsIHx8IHB2RXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHB2RXJyb3IuYWRkRXJyb3IoJ3B2TWFsbG9jRXJyb3InLCAicHZIdHRwc1JlcXVlc3RXYXNtOiBjYW5ub3QgYWxsb2NhdGUgbWVtb3J5IGZvciByZXNwb25zZSIpOwogICAgICAgICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVySW50MzJbcmVzcG9uc2VBZGRyZXNzQWRkcmVzcyAvIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRdID0gMDsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoInJldHVybiIpOwogICAgICAgICAgICAgICAgICAgIGNhc2UgMzQ6CiAgICAgICAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMltyZXNwb25zZVNpemVBZGRyZXNzIC8gSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVF0gPSByZXNwb25zZVRleHQubGVuZ3RoICsgMTsKICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlckludDMyW3Jlc3BvbnNlQWRkcmVzc0FkZHJlc3MgLyBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXSA9IHJlc3BvbnNlQWRkcmVzczsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByZXNwb25zZVRleHQubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVyVWludDhbcmVzcG9uc2VBZGRyZXNzICsgaV0gPSByZXNwb25zZVRleHQuY2hhckNvZGVBdChpKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlclVpbnQ4W3Jlc3BvbnNlQWRkcmVzcyArIHJlc3BvbnNlVGV4dC5sZW5ndGhdID0gMDsKICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlckludDMyW3Jlc3BvbnNlQ29kZUFkZHJlc3MgLyBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXSA9IHN0YXR1c0NvZGU7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOToKICAgICAgICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1s2LCAxM10sIFsxNywgMjNdXSk7CiAgICAgICAgICAgICAgfSkpOwogICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBwdkh0dHBzUmVxdWVzdFdhc20oX3g0LCBfeDUsIF94NiwgX3g3LCBfeDgsIF94OSwgX3gxMCwgX3gxMSwgX3gxMikgewogICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgICAgICB9OwogICAgICAgICAgICB9KCk7CiAgICAgICAgICAgIHB2R2V0QnJvd3NlckluZm8gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgIHZhciBfcmVmMiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IubWFyayhmdW5jdGlvbiBfY2FsbGVlMihicm93c2VySW5mb0FkZHJlc3NBZGRyZXNzKSB7CiAgICAgICAgICAgICAgICB2YXIgdXNlckFnZW50LCBicm93c2VySW5mb0FkZHJlc3MsIGk7CiAgICAgICAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3Iud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7CiAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHsKICAgICAgICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50ICE9PSB1bmRlZmluZWQgPyBuYXZpZ2F0b3IudXNlckFnZW50IDogJ3Vua25vd24nOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMzsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGlnbmVkX2FsbG9jKFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQsICh1c2VyQWdlbnQubGVuZ3RoICsgMSkgKiBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTsKICAgICAgICAgICAgICAgICAgICBjYXNlIDM6CiAgICAgICAgICAgICAgICAgICAgICBicm93c2VySW5mb0FkZHJlc3MgPSBfY29udGV4dDIuc2VudDsKICAgICAgICAgICAgICAgICAgICAgIGlmICghKGJyb3dzZXJJbmZvQWRkcmVzcyA9PT0gMCkpIHsKICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA4OwogICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIHB2RXJyb3IgPT09IG51bGwgfHwgcHZFcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHZFcnJvci5hZGRFcnJvcigncHZNYWxsb2NFcnJvcicsICJwdkdldEJyb3dzZXJJbmZvOiBjYW5ub3QgYWxsb2NhdGUgbWVtb3J5IGZvciBicm93c2VyIGluZm8iKTsKICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlckludDMyW2Jyb3dzZXJJbmZvQWRkcmVzc0FkZHJlc3MgLyBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXSA9IDA7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdCgicmV0dXJuIik7CiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OgogICAgICAgICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVySW50MzJbYnJvd3NlckluZm9BZGRyZXNzQWRkcmVzcyAvIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRdID0gYnJvd3NlckluZm9BZGRyZXNzOwogICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZXJBZ2VudC5sZW5ndGg7IGkrKykgewogICAgICAgICAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJVaW50OFticm93c2VySW5mb0FkZHJlc3MgKyBpXSA9IHVzZXJBZ2VudC5jaGFyQ29kZUF0KGkpOwogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVyVWludDhbYnJvd3NlckluZm9BZGRyZXNzICsgdXNlckFnZW50Lmxlbmd0aF0gPSAwOwogICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6CiAgICAgICAgICAgICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlMik7CiAgICAgICAgICAgICAgfSkpOwogICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBwdkdldEJyb3dzZXJJbmZvKF94MTMpIHsKICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0oKTsKICAgICAgICAgICAgcHZHZXRPcmlnaW5JbmZvID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgICAgICAgICB2YXIgX3JlZjMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMob3JpZ2luSW5mb0FkZHJlc3NBZGRyZXNzKSB7CiAgICAgICAgICAgICAgICB2YXIgX3NlbGYkb3JpZ2luOwogICAgICAgICAgICAgICAgdmFyIG9yaWdpbiwgaG9zdG5hbWUsIG9yaWdpbkluZm9BZGRyZXNzLCBpOwogICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0MykgewogICAgICAgICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgICAgICAgb3JpZ2luID0gKF9zZWxmJG9yaWdpbiA9IHNlbGYub3JpZ2luKSAhPT0gbnVsbCAmJiBfc2VsZiRvcmlnaW4gIT09IHZvaWQgMCA/IF9zZWxmJG9yaWdpbiA6IHNlbGYubG9jYXRpb24ub3JpZ2luOwogICAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWUgPSBuZXcgVVJMKG9yaWdpbikuaG9zdG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZQogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA0OwogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduZWRfYWxsb2MoVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgKGhvc3RuYW1lLmxlbmd0aCArIDEpICogVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OgogICAgICAgICAgICAgICAgICAgICAgb3JpZ2luSW5mb0FkZHJlc3MgPSBfY29udGV4dDMuc2VudDsKICAgICAgICAgICAgICAgICAgICAgIGlmICghKG9yaWdpbkluZm9BZGRyZXNzID09PSAwKSkgewogICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDk7CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgcHZFcnJvciA9PT0gbnVsbCB8fCBwdkVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwdkVycm9yLmFkZEVycm9yKCdwdk1hbGxvY0Vycm9yJywgInB2R2V0T3JpZ2luSW5mbzogY2Fubm90IGFsbG9jYXRlIG1lbW9yeSBmb3Igb3JpZ2luIGluZm8iKTsKICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlckludDMyW29yaWdpbkluZm9BZGRyZXNzQWRkcmVzcyAvIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRdID0gMDsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KCJyZXR1cm4iKTsKICAgICAgICAgICAgICAgICAgICBjYXNlIDk6CiAgICAgICAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMltvcmlnaW5JbmZvQWRkcmVzc0FkZHJlc3MgLyBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXSA9IG9yaWdpbkluZm9BZGRyZXNzOwogICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhvc3RuYW1lLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlclVpbnQ4W29yaWdpbkluZm9BZGRyZXNzICsgaV0gPSBob3N0bmFtZS5jaGFyQ29kZUF0KGkpOwogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVyVWludDhbb3JpZ2luSW5mb0FkZHJlc3MgKyBob3N0bmFtZS5sZW5ndGhdID0gMDsKICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOgogICAgICAgICAgICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwgX2NhbGxlZTMpOwogICAgICAgICAgICAgIH0pKTsKICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcHZHZXRPcmlnaW5JbmZvKF94MTQpIHsKICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0oKTsKICAgICAgICAgICAgcHZGaWxlT3Blbldhc20gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgIHZhciBfcmVmNCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IubWFyayhmdW5jdGlvbiBfY2FsbGVlNChmaWxlQWRkcmVzcywgcGF0aEFkZHJlc3MsIG1vZGVBZGRyZXNzLCBzdGF0dXNBZGRyZXNzKSB7CiAgICAgICAgICAgICAgICB2YXIgcGF0aCwgbW9kZSwgZmlsZTsKICAgICAgICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvci53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHsKICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkgewogICAgICAgICAgICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBhcnJheUJ1ZmZlclRvU3RyaW5nQXRJbmRleChtZW1vcnlCdWZmZXJVaW50OCwgcGF0aEFkZHJlc3MpOwogICAgICAgICAgICAgICAgICAgICAgbW9kZSA9IGFycmF5QnVmZmVyVG9TdHJpbmdBdEluZGV4KG1lbW9yeUJ1ZmZlclVpbnQ4LCBtb2RlQWRkcmVzcyk7CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQucHJldiA9IDI7CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDU7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BlbihwYXRoLCBtb2RlKTsKICAgICAgICAgICAgICAgICAgICBjYXNlIDU6CiAgICAgICAgICAgICAgICAgICAgICBmaWxlID0gX2NvbnRleHQ0LnNlbnQ7CiAgICAgICAgICAgICAgICAgICAgICBQdkZpbGUuc2V0UHRyKGZpbGVBZGRyZXNzLCBmaWxlKTsKICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlckludDMyW3N0YXR1c0FkZHJlc3MgLyBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXSA9IDA7CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE0OwogICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDoKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5wcmV2ID0gMTA7CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQudDAgPSBfY29udGV4dDRbImNhdGNoIl0oMik7CiAgICAgICAgICAgICAgICAgICAgICBpZiAoX2NvbnRleHQ0LnQwLm5hbWUgIT09ICJGaWxlTm90RXhpc3RzIikgewogICAgICAgICAgICAgICAgICAgICAgICBwdkVycm9yID09PSBudWxsIHx8IHB2RXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHB2RXJyb3IuYWRkRXJyb3IoJ3B2RmlsZU9wZW5XYXNtJywgX2NvbnRleHQ0LnQwKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlckludDMyW3N0YXR1c0FkZHJlc3MgLyBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXSA9IC0xOwogICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6CiAgICAgICAgICAgICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuc3RvcCgpOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlNCwgbnVsbCwgW1syLCAxMF1dKTsKICAgICAgICAgICAgICB9KSk7CiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHB2RmlsZU9wZW5XYXNtKF94MTUsIF94MTYsIF94MTcsIF94MTgpIHsKICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0oKTsKICAgICAgICAgICAgcHZGaWxlQ2xvc2VXYXNtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgICAgICAgICB2YXIgX3JlZjUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUoZmlsZUFkZHJlc3MsIHN0YXR1c0FkZHJlc3MpIHsKICAgICAgICAgICAgICAgIHZhciBmaWxlOwogICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZTUkKF9jb250ZXh0NSkgewogICAgICAgICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDUucHJldiA9IF9jb250ZXh0NS5uZXh0KSB7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ1LnByZXYgPSAwOwogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAzOwogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFB2RmlsZS5nZXRQdHIoZmlsZUFkZHJlc3MpOwogICAgICAgICAgICAgICAgICAgIGNhc2UgMzoKICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPSBfY29udGV4dDUuc2VudDsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gNjsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLmNsb3NlKCk7CiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OgogICAgICAgICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVySW50MzJbc3RhdHVzQWRkcmVzcyAvIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRdID0gMDsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMTM7CiAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICBjYXNlIDk6CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDUucHJldiA9IDk7CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDUudDAgPSBfY29udGV4dDVbImNhdGNoIl0oMCk7CiAgICAgICAgICAgICAgICAgICAgICBwdkVycm9yID09PSBudWxsIHx8IHB2RXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHB2RXJyb3IuYWRkRXJyb3IoJ3B2RmlsZUNsb3NlV2FzbScsIF9jb250ZXh0NS50MCk7CiAgICAgICAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMltzdGF0dXNBZGRyZXNzIC8gSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVF0gPSAtMTsKICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOgogICAgICAgICAgICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwgX2NhbGxlZTUsIG51bGwsIFtbMCwgOV1dKTsKICAgICAgICAgICAgICB9KSk7CiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHB2RmlsZUNsb3NlV2FzbShfeDE5LCBfeDIwKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjUuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgICAgICB9OwogICAgICAgICAgICB9KCk7CiAgICAgICAgICAgIHB2RmlsZVJlYWRXYXNtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgICAgICAgICAgICB2YXIgX3JlZjYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTYoZmlsZUFkZHJlc3MsIGNvbnRlbnRBZGRyZXNzLCBzaXplLCBjb3VudCwgbnVtUmVhZEFkZHJlc3MpIHsKICAgICAgICAgICAgICAgIHZhciBmaWxlLCBjb250ZW50OwogICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0NikgewogICAgICAgICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ2LnByZXYgPSAwOwogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAzOwogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFB2RmlsZS5nZXRQdHIoZmlsZUFkZHJlc3MpOwogICAgICAgICAgICAgICAgICAgIGNhc2UgMzoKICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPSBfY29udGV4dDYuc2VudDsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNjsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLnJlYWQoc2l6ZSwgY291bnQpOwogICAgICAgICAgICAgICAgICAgIGNhc2UgNjoKICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBfY29udGV4dDYuc2VudDsKICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlclVpbnQ4LnNldChjb250ZW50LCBjb250ZW50QWRkcmVzcyk7CiAgICAgICAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMltudW1SZWFkQWRkcmVzcyAvIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRdID0gY29udGVudC5sZW5ndGggLyBzaXplOwogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAxNTsKICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDYucHJldiA9IDExOwogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ2LnQwID0gX2NvbnRleHQ2WyJjYXRjaCJdKDApOwogICAgICAgICAgICAgICAgICAgICAgcHZFcnJvciA9PT0gbnVsbCB8fCBwdkVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwdkVycm9yLmFkZEVycm9yKCdwdkZpbGVSZWFkV2FzbScsIF9jb250ZXh0Ni50MCk7CiAgICAgICAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMltudW1SZWFkQWRkcmVzcyAvIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRdID0gLTE7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNToKICAgICAgICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5zdG9wKCk7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0sIF9jYWxsZWU2LCBudWxsLCBbWzAsIDExXV0pOwogICAgICAgICAgICAgIH0pKTsKICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcHZGaWxlUmVhZFdhc20oX3gyMSwgX3gyMiwgX3gyMywgX3gyNCwgX3gyNSkgewogICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfSgpOwogICAgICAgICAgICBwdkZpbGVXcml0ZVdhc20gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgIHZhciBfcmVmNyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IubWFyayhmdW5jdGlvbiBfY2FsbGVlNyhmaWxlQWRkcmVzcywgY29udGVudEFkZHJlc3MsIHNpemUsIGNvdW50LCBudW1Xcml0ZUFkZHJlc3MpIHsKICAgICAgICAgICAgICAgIHZhciBmaWxlLCBjb250ZW50OwogICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yLndyYXAoZnVuY3Rpb24gX2NhbGxlZTckKF9jb250ZXh0NykgewogICAgICAgICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDcucHJldiA9IF9jb250ZXh0Ny5uZXh0KSB7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ3LnByZXYgPSAwOwogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ3Lm5leHQgPSAzOwogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFB2RmlsZS5nZXRQdHIoZmlsZUFkZHJlc3MpOwogICAgICAgICAgICAgICAgICAgIGNhc2UgMzoKICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPSBfY29udGV4dDcuc2VudDsKICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShzaXplICogY291bnQpOwogICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXQobWVtb3J5QnVmZmVyVWludDguc2xpY2UoY29udGVudEFkZHJlc3MsIGNvbnRlbnRBZGRyZXNzICsgc2l6ZSAqIGNvdW50KSwgMCk7CiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDg7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZS53cml0ZShjb250ZW50KTsKICAgICAgICAgICAgICAgICAgICBjYXNlIDg6CiAgICAgICAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMltudW1Xcml0ZUFkZHJlc3MgLyBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXSA9IGNvbnRlbnQubGVuZ3RoIC8gc2l6ZTsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gMTU7CiAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICBjYXNlIDExOgogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ3LnByZXYgPSAxMTsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ny50MCA9IF9jb250ZXh0N1siY2F0Y2giXSgwKTsKICAgICAgICAgICAgICAgICAgICAgIHB2RXJyb3IgPT09IG51bGwgfHwgcHZFcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHZFcnJvci5hZGRFcnJvcigncHZGaWxlV3JpdGVXYXNtJywgX2NvbnRleHQ3LnQwKTsKICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlckludDMyW251bVdyaXRlQWRkcmVzcyAvIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRdID0gMTsKICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OgogICAgICAgICAgICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LnN0b3AoKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwgX2NhbGxlZTcsIG51bGwsIFtbMCwgMTFdXSk7CiAgICAgICAgICAgICAgfSkpOwogICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBwdkZpbGVXcml0ZVdhc20oX3gyNiwgX3gyNywgX3gyOCwgX3gyOSwgX3gzMCkgewogICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfSgpOwogICAgICAgICAgICBwdkZpbGVTZWVrV2FzbSA9IGZ1bmN0aW9uIHB2RmlsZVNlZWtXYXNtKGZpbGVBZGRyZXNzLCBvZmZzZXQsIHdoZW5jZSwgc3RhdHVzQWRkcmVzcykgewogICAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICB2YXIgZmlsZSA9IFB2RmlsZS5nZXRQdHIoZmlsZUFkZHJlc3MpOwogICAgICAgICAgICAgICAgZmlsZS5zZWVrKG9mZnNldCwgd2hlbmNlKTsKICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlckludDMyW3N0YXR1c0FkZHJlc3MgLyBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXSA9IDA7CiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgICAgICAgICAgcHZFcnJvciA9PT0gbnVsbCB8fCBwdkVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwdkVycm9yLmFkZEVycm9yKCdwdkZpbGVTZWVrV2FzbScsIGUpOwogICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVySW50MzJbc3RhdHVzQWRkcmVzcyAvIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRdID0gLTE7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9OwogICAgICAgICAgICBwdkZpbGVUZWxsV2FzbSA9IGZ1bmN0aW9uIHB2RmlsZVRlbGxXYXNtKGZpbGVBZGRyZXNzLCBvZmZzZXRBZGRyZXNzKSB7CiAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIHZhciBmaWxlID0gUHZGaWxlLmdldFB0cihmaWxlQWRkcmVzcyk7CiAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMltvZmZzZXRBZGRyZXNzIC8gSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVF0gPSBmaWxlLnRlbGwoKTsKICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgICAgICBwdkVycm9yID09PSBudWxsIHx8IHB2RXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHB2RXJyb3IuYWRkRXJyb3IoJ3B2RmlsZVRlbGxXYXNtJywgZSk7CiAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMltvZmZzZXRBZGRyZXNzIC8gSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVF0gPSAtMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIHB2RmlsZVJlbW92ZVdhc20gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgIHZhciBfcmVmOCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3IubWFyayhmdW5jdGlvbiBfY2FsbGVlOChwYXRoQWRkcmVzcywgc3RhdHVzQWRkcmVzcykgewogICAgICAgICAgICAgICAgdmFyIHBhdGgsIGZpbGU7CiAgICAgICAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3Iud3JhcChmdW5jdGlvbiBfY2FsbGVlOCQoX2NvbnRleHQ4KSB7CiAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0OC5wcmV2ID0gX2NvbnRleHQ4Lm5leHQpIHsKICAgICAgICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gYXJyYXlCdWZmZXJUb1N0cmluZ0F0SW5kZXgobWVtb3J5QnVmZmVyVWludDgsIHBhdGhBZGRyZXNzKTsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5wcmV2ID0gMTsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNDsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuKHBhdGgsICJ3Iik7CiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OgogICAgICAgICAgICAgICAgICAgICAgZmlsZSA9IF9jb250ZXh0OC5zZW50OwogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA3OwogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUucmVtb3ZlKCk7CiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OgogICAgICAgICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVySW50MzJbc3RhdHVzQWRkcmVzcyAvIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRdID0gMDsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMTQ7CiAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOgogICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4LnByZXYgPSAxMDsKICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC50MCA9IF9jb250ZXh0OFsiY2F0Y2giXSgxKTsKICAgICAgICAgICAgICAgICAgICAgIHB2RXJyb3IgPT09IG51bGwgfHwgcHZFcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHZFcnJvci5hZGRFcnJvcigncHZGaWxlUmVtb3ZlV2FzbScsIF9jb250ZXh0OC50MCk7CiAgICAgICAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMltzdGF0dXNBZGRyZXNzIC8gSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVF0gPSAtMTsKICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OgogICAgICAgICAgICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LnN0b3AoKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwgX2NhbGxlZTgsIG51bGwsIFtbMSwgMTBdXSk7CiAgICAgICAgICAgICAgfSkpOwogICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBwdkZpbGVSZW1vdmVXYXNtKF94MzEsIF94MzIpIHsKICAgICAgICAgICAgICAgIHJldHVybiBfcmVmOC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0oKTsKICAgICAgICAgICAgaW1wb3J0T2JqZWN0ID0gewogICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UKICAgICAgICAgICAgICB3YXNpX3NuYXBzaG90X3ByZXZpZXcxOiB3YXNpU25hcHNob3RQcmV2aWV3MUVtdWxhdG9yLAogICAgICAgICAgICAgIGVudjogewogICAgICAgICAgICAgICAgbWVtb3J5OiBtZW1vcnksCiAgICAgICAgICAgICAgICBwdl9jb25zb2xlX2xvZ193YXNtOiBwdkNvbnNvbGVMb2dXYXNtLAogICAgICAgICAgICAgICAgcHZfYXNzZXJ0X3dhc206IHB2QXNzZXJ0V2FzbSwKICAgICAgICAgICAgICAgIHB2X3RpbWVfd2FzbTogcHZUaW1lV2FzbSwKICAgICAgICAgICAgICAgIHB2X2h0dHBzX3JlcXVlc3Rfd2FzbTogcHZIdHRwc1JlcXVlc3RXYXNtLAogICAgICAgICAgICAgICAgcHZfZ2V0X2Jyb3dzZXJfaW5mbzogcHZHZXRCcm93c2VySW5mbywKICAgICAgICAgICAgICAgIHB2X2dldF9vcmlnaW5faW5mbzogcHZHZXRPcmlnaW5JbmZvLAogICAgICAgICAgICAgICAgcHZfZmlsZV9vcGVuX3dhc206IHB2RmlsZU9wZW5XYXNtLAogICAgICAgICAgICAgICAgcHZfZmlsZV9jbG9zZV93YXNtOiBwdkZpbGVDbG9zZVdhc20sCiAgICAgICAgICAgICAgICBwdl9maWxlX3JlYWRfd2FzbTogcHZGaWxlUmVhZFdhc20sCiAgICAgICAgICAgICAgICBwdl9maWxlX3dyaXRlX3dhc206IHB2RmlsZVdyaXRlV2FzbSwKICAgICAgICAgICAgICAgIHB2X2ZpbGVfc2Vla193YXNtOiBwdkZpbGVTZWVrV2FzbSwKICAgICAgICAgICAgICAgIHB2X2ZpbGVfdGVsbF93YXNtOiBwdkZpbGVUZWxsV2FzbSwKICAgICAgICAgICAgICAgIHB2X2ZpbGVfcmVtb3ZlX3dhc206IHB2RmlsZVJlbW92ZVdhc20KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIGlmICghKHdhc20gaW5zdGFuY2VvZiBQcm9taXNlKSkgewogICAgICAgICAgICAgIF9jb250ZXh0OS5uZXh0ID0gMzQ7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKCFhKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQ5Lm5leHQgPSAyMzsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDIwOwogICAgICAgICAgICByZXR1cm4gYSh3YXNtLCBpbXBvcnRPYmplY3QpOwogICAgICAgICAgY2FzZSAyMDoKICAgICAgICAgICAgaW5zdGFuY2UgPSBfY29udGV4dDkuc2VudC5pbnN0YW5jZTsKICAgICAgICAgICAgX2NvbnRleHQ5Lm5leHQgPSAzMjsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDIzOgogICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDI1OwogICAgICAgICAgICByZXR1cm4gd2FzbTsKICAgICAgICAgIGNhc2UgMjU6CiAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQ5LnNlbnQ7CiAgICAgICAgICAgIF9jb250ZXh0OS5uZXh0ID0gMjg7CiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpOwogICAgICAgICAgY2FzZSAyODoKICAgICAgICAgICAgZGF0YSA9IF9jb250ZXh0OS5zZW50OwogICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDMxOwogICAgICAgICAgICByZXR1cm4gbihuZXcgVWludDhBcnJheShkYXRhKSwgaW1wb3J0T2JqZWN0KTsKICAgICAgICAgIGNhc2UgMzE6CiAgICAgICAgICAgIGluc3RhbmNlID0gX2NvbnRleHQ5LnNlbnQuaW5zdGFuY2U7CiAgICAgICAgICBjYXNlIDMyOgogICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDM4OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgMzQ6CiAgICAgICAgICAgIHdhc21Db2RlQXJyYXkgPSBiYXNlNjRUb1VpbnQ4QXJyYXkod2FzbSk7CiAgICAgICAgICAgIF9jb250ZXh0OS5uZXh0ID0gMzc7CiAgICAgICAgICAgIHJldHVybiBuKHdhc21Db2RlQXJyYXksIGltcG9ydE9iamVjdCk7CiAgICAgICAgICBjYXNlIDM3OgogICAgICAgICAgICBpbnN0YW5jZSA9IF9jb250ZXh0OS5zZW50Lmluc3RhbmNlOwogICAgICAgICAgY2FzZSAzODoKICAgICAgICAgICAgYWxpZ25lZF9hbGxvYyA9IGluc3RhbmNlLmV4cG9ydHMuYWxpZ25lZF9hbGxvYzsKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5hYnJ1cHQoInJldHVybiIsIGluc3RhbmNlLmV4cG9ydHMpOwogICAgICAgICAgY2FzZSA0MDoKICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuc3RvcCgpOwogICAgICAgIH0KICAgICAgfSwgX2NhbGxlZTkpOwogICAgfSkpOwogICAgcmV0dXJuIF9idWlsZFdhc20uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICB9CgogIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5JDIoYXJyLCBsZW4pIHsKICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOwogICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOwogICAgcmV0dXJuIGFycjI7CiAgfQoKICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7CiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkMihhcnIpOwogIH0KCiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7CiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gInVuZGVmaW5lZCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlclsiQEBpdGVyYXRvciJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOwogIH0KCiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDIobywgbWluTGVuKSB7CiAgICBpZiAoIW8pIHJldHVybjsKICAgIGlmICh0eXBlb2YgbyA9PT0gInN0cmluZyIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheSQyKG8sIG1pbkxlbik7CiAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7CiAgICBpZiAobiA9PT0gIk9iamVjdCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsKICAgIGlmIChuID09PSAiTWFwIiB8fCBuID09PSAiU2V0IikgcmV0dXJuIEFycmF5LmZyb20obyk7CiAgICBpZiAobiA9PT0gIkFyZ3VtZW50cyIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheSQyKG8sIG1pbkxlbik7CiAgfQoKICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7CiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC4iKTsKICB9CgogIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsKICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDIoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsKICB9CgogIC8qDQogICAgQ29weXJpZ2h0IDIwMjMgUGljb3ZvaWNlIEluYy4NCgogICAgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBsaWNlbnNlLiBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgbG9jYXRlZCBpbiB0aGUgIkxJQ0VOU0UiDQogICAgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBzb3VyY2UuDQoKICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24NCiAgICBhbiAiQVMgSVMiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUNCiAgICBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLg0KICAqLwogIHZhciBQdkVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHsKICAgIGZ1bmN0aW9uIFB2RXJyb3IoKSB7CiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdkVycm9yKTsKICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICJfbWF4TnVtRXJyb3JzIiwgMTApOwogICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgIl9lcnJvcnMiLCBbXSk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAiX2xhc3RFcnJvciIsIHZvaWQgMCk7CiAgICB9CiAgICBfY3JlYXRlQ2xhc3MoUHZFcnJvciwgW3sKICAgICAga2V5OiAiYWRkRXJyb3IiLAogICAgICB2YWx1ZToKICAgICAgLyoqDQogICAgICAgKiBTdG9yZSBhbiBlcnJvciB3aXRoIGEga2V5IGFuZCBtZXNzYWdlLg0KICAgICAgICovCiAgICAgIGZ1bmN0aW9uIGFkZEVycm9yKGtleSwgZXJyb3IpIHsKICAgICAgICB0aGlzLl9sYXN0RXJyb3IgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoZXJyb3IpOwogICAgICAgIGlmICh0aGlzLl9lcnJvcnMubGVuZ3RoID49IHRoaXMuX21heE51bUVycm9ycykgewogICAgICAgICAgdGhpcy5fZXJyb3JzLnNoaWZ0KCk7CiAgICAgICAgfQogICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7CiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaCh7CiAgICAgICAgICAgIGtleToga2V5LAogICAgICAgICAgICBtZXNzYWdlOiBlcnJvci50b1N0cmluZygpCiAgICAgICAgICB9KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goewogICAgICAgICAgICBrZXk6IGtleSwKICAgICAgICAgICAgbWVzc2FnZTogSlNPTi5zdHJpbmdpZnkoZXJyb3IpCiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgLyoqDQogICAgICAgKiBHZXQgYWxsIHJlY2VudCBlcnJvciBtZXNzYWdlcy4gQ2xlYW5zIHVwIGVycm9yIGxpc3QuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAiZ2V0RXJyb3JzIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVycm9ycygpIHsKICAgICAgICB2YXIgZXJyb3JzID0gX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMuX2Vycm9ycyk7CiAgICAgICAgdGhpcy5fZXJyb3JzID0gW107CiAgICAgICAgcmV0dXJuIGVycm9yczsKICAgICAgfQogICAgICAvKioNCiAgICAgICAqIEdldCBlcnJvcnMgZm9ybWF0dGVkIGludG8gYSBzdHJpbmcuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAiZ2V0RXJyb3JTdHJpbmciLAogICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RXJyb3JTdHJpbmcoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXJyb3JzKCkubWFwKGZ1bmN0aW9uIChfcmVmKSB7CiAgICAgICAgICB2YXIga2V5ID0gX3JlZi5rZXksCiAgICAgICAgICAgIG1lc3NhZ2UgPSBfcmVmLm1lc3NhZ2U7CiAgICAgICAgICByZXR1cm4gIiciLmNvbmNhdChrZXksICInIGZhaWxlZCB3aXRoOiAiKS5jb25jYXQobWVzc2FnZSwgIi4iKTsKICAgICAgICB9KS5qb2luKCdcbicpOwogICAgICB9CiAgICAgIC8qKg0KICAgICAgICogUmV0dXJucyB0aGUgbGFzdCBlcnJvciBtZXNzYWdlIGFkZGVkIHRvIHRoZSBvYmplY3QuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAiZ2V0TGFzdEVycm9yIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldExhc3RFcnJvcigpIHsKICAgICAgICByZXR1cm4gdGhpcy5fbGFzdEVycm9yOwogICAgICB9CiAgICAgIC8qKg0KICAgICAgICogU2V0cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgZXJyb3JzIGl0IGNhbiBzdG9yZS4NCiAgICAgICAqLwogICAgfSwgewogICAgICBrZXk6ICJzZXRNYXhFcnJvck51bSIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRNYXhFcnJvck51bShudW0pIHsKICAgICAgICB0aGlzLl9tYXhOdW1FcnJvcnMgPSBudW07CiAgICAgIH0KICAgIH1dKTsKICAgIHJldHVybiBQdkVycm9yOwogIH0oKTsKCiAgY29uc3Qgc2ltZD1hc3luYygpPT5XZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCw5NywxMTUsMTA5LDEsMCwwLDAsMSw1LDEsOTYsMCwxLDEyMywzLDIsMSwwLDEwLDEwLDEsOCwwLDY1LDAsMjUzLDE1LDI1Myw5OCwxMV0pKTsKCiAgLyoNCiAgICBDb3B5cmlnaHQgMjAyMi0yMDIzIFBpY292b2ljZSBJbmMuDQoKICAgIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgbGljZW5zZS4gQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGxvY2F0ZWQgaW4gdGhlICJMSUNFTlNFIg0KICAgIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgc291cmNlLg0KCiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uDQogICAgYW4gIkFTIElTIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlDQogICAgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4NCiAgKi8KICB2YXIgUHZTdGF0dXM7CiAgKGZ1bmN0aW9uIChQdlN0YXR1cykgewogICAgUHZTdGF0dXNbUHZTdGF0dXNbIlNVQ0NFU1MiXSA9IDEwMDAwXSA9ICJTVUNDRVNTIjsKICAgIFB2U3RhdHVzW1B2U3RhdHVzWyJPVVRfT0ZfTUVNT1JZIl0gPSAxMDAwMV0gPSAiT1VUX09GX01FTU9SWSI7CiAgICBQdlN0YXR1c1tQdlN0YXR1c1siSU9fRVJST1IiXSA9IDEwMDAyXSA9ICJJT19FUlJPUiI7CiAgICBQdlN0YXR1c1tQdlN0YXR1c1siSU5WQUxJRF9BUkdVTUVOVCJdID0gMTAwMDNdID0gIklOVkFMSURfQVJHVU1FTlQiOwogICAgUHZTdGF0dXNbUHZTdGF0dXNbIlNUT1BfSVRFUkFUSU9OIl0gPSAxMDAwNF0gPSAiU1RPUF9JVEVSQVRJT04iOwogICAgUHZTdGF0dXNbUHZTdGF0dXNbIktFWV9FUlJPUiJdID0gMTAwMDVdID0gIktFWV9FUlJPUiI7CiAgICBQdlN0YXR1c1tQdlN0YXR1c1siSU5WQUxJRF9TVEFURSJdID0gMTAwMDZdID0gIklOVkFMSURfU1RBVEUiOwogICAgUHZTdGF0dXNbUHZTdGF0dXNbIlJVTlRJTUVfRVJST1IiXSA9IDEwMDA3XSA9ICJSVU5USU1FX0VSUk9SIjsKICAgIFB2U3RhdHVzW1B2U3RhdHVzWyJBQ1RJVkFUSU9OX0VSUk9SIl0gPSAxMDAwOF0gPSAiQUNUSVZBVElPTl9FUlJPUiI7CiAgICBQdlN0YXR1c1tQdlN0YXR1c1siQUNUSVZBVElPTl9MSU1JVF9SRUFDSEVEIl0gPSAxMDAwOV0gPSAiQUNUSVZBVElPTl9MSU1JVF9SRUFDSEVEIjsKICAgIFB2U3RhdHVzW1B2U3RhdHVzWyJBQ1RJVkFUSU9OX1RIUk9UVExFRCJdID0gMTAwMTBdID0gIkFDVElWQVRJT05fVEhST1RUTEVEIjsKICAgIFB2U3RhdHVzW1B2U3RhdHVzWyJBQ1RJVkFUSU9OX1JFRlVTRUQiXSA9IDEwMDExXSA9ICJBQ1RJVkFUSU9OX1JFRlVTRUQiOwogIH0pKFB2U3RhdHVzIHx8IChQdlN0YXR1cyA9IHt9KSk7CgogIHZhciBBTEVYQV82NCA9ICJWK2ZiQTJ4ZGNXVGQ5L25Kc2YrbXphQlJTVzVsNDhFbWYwL0ljVVIvYzlyeWtvTWowN1liVU5kWE5LbWVjeVh6SXE3OTJKUGw0WDRYcUMvM1VKaWtyVlhrSnM1RGgxZGowTGhJcnZudjVEUnNsam5keERnUGJ4TDdLNnVFai9yQWtHd3phcCtVRjcxQ213NFY1M0JDWkY2Vmp6Q2VpditiWVNLN0Q1dWw2T0RrNTJMN0hqL2VTemhTNG1hY2hvQWZCWWdMWHBvZDdWMS82eEZCUGszTkd3bkc3WmJOOHBJRTE2dVpjL0hVaTNzdVQzY2NTZ0FRZEFYM092WHFSdDJnWEtxNi9aUjFwcWdyK1ZCd1NuNXpMVHFJR0VEK2puRXVuZ1AzRUt0T1ZiR2NnMTZpUW9TUEVpaWZ1dDVVSEQxVHcvZ1hrbzljcittU3d5TjZMV0luejdKb1ZGVFRNWkFjT0ZoSGN1QW9FUmdkcXlGWW55d2lxa0J4ckRlOHIxREpWSVVWc28vVkFYaW9nNlpKNEhlcmxZNHU3czJpQ0g5dWFKcjZGbUI1V1lsYldEWlp1SE5MNE10N2szd3pHUUNXNzg2dERFZ04xMWRrTFNVWGFVNnEyaDd0cFZhUi9pRTR5MlNkc0RYQUc0cTRLa0xHenhOS3hXdUlGUnlmdEJGcXNwdkpyMDV4TmxKZGdjUkJmaldpeFhnTGk2UHBUb2wzUmhMOVRQcUwrS1BEMER3MnJuSFJ3djVqRE9LQ1RpWnlCd05ZM0x2YzZEK0tGcnJEUlZDTTNxNkRPQWFzYUZFN3JvdHNnZm9pbksvaW9ZbGF0ZVFtYm1MVEJEMTZhOG5EcXI0aDBScTc1TlhDbnZSWmZxU1FQZ3l3akFtMW5PTGNHNEZSa1dCeFREWGdGdmhjWW5VYVB5K2dFVDFobUdBSEN6U01tcjZBamowWVhOeldhUW5nVkNabXYxM2htbFhBUHNleVR5d2djbXVEYkMrbDV6aVhTdU8vZDFkZGI5RmVTMWgwTFJTaTlmbWp3OUZiT1NpUXpsSWdYNHJmOGJiZkhld1pUdW5zMjZydzJLc0JYaDUxMkgwdkRxM3VWYm9DaWI1VkMzUmV5K3VxeWhMS2VFMEd0cWduM3pERFhKQmJpdkRUSFVHK2k2aUR6bWtHL093ZFQvVTdWNmNMclRwbmt3ZWdvV3BCSUxqdElIS3lXWlpMTUl6cmo2RGZyM09SSHIrZ3VRT2xyRFpVaHZYU2hHTGZmVjIwbEFmVVF2ZW1kMENKcjlTWmVMaGoxRUQ2NGJnSG5PbytXMTJydk1ic2JUc1BHMnpOd2hSZ3pJLzZMUW41dEF0TmtxY3EyZUEvSXU5T3pURTZwOUwwRjI3anlUME1pUHhjM0NzWmVKNUd2aTl6eGF5MytFdWIxOG1VZllYeHovRW90bndzZ1I2MURvZVdiK29OSnl0d3VpR05XdWdmTHVpNlQ5Uk5wclJYNVVyRGVlWU5RM2pvMFJ3L3NvU0hXTU1UcXZYNlFMeGhsT0dWZzVmaFo2TGJITk5jNmkwRkVKMFhQL1cxK2F1dzVWR3VoL3Z0V1pWQlZ2RHdrc1JqSThMNGlCU3JaL0lvb1VEeDhvNXRJNEpmUVRNK0NUbnd5VzB4dCtId2FUSDY2b3MxQVlxd2t1NjcveE54ZkFOMTFRcUNma0F2UHlvMmZOK3pBbzJ6VG1DTEk5ZmxHZlA3WllSa3BaT1ozNDkrYWZ5ZFBCa08veU9ObEE0SXFnZmdibW1iamhXWmluVnd4SDZscHdyVnBTdkhWWkFFN3BlamNSa2hVOEowVHduRkk4ajFTazlCSkVtbVVXTHJHSEc1end3YklRYjBUUnZSbXdoRHJqMG84cmVFa1dHS0tlck4vRWxqNXdSTGpYVEsrTFJQajNSSDlOTVp2SkwzZDN6OVhUaW13bmU1TnJjMVJSTG1YMFE1QVJsakpkbTFYU0thNExiVE1oSWxwUG1aNitMaytMYk1kbW0wdXdXT3VvdzZXNUN4NWFYWDJTWXlDWU8xd1pFTmVFQ0szY1NmT0l4TnI3d2ZiNHp3UDRYOWR5QmxwVlFqOEJya0g3R0FxTm1xdWd3Zld0cGZmaThJNng4eld4S00yRHZkMjh3UWdXZmU2M3pzVmU1ckF0ODY1aG9ZakkxNGxRRmJ3V2tWUmFkbytaMHF6NFRwVXFXQmM0dHd4dGZZVW9YU3luQUppL0laS0wyTFpzUWRubEU1Y1pmOHlmbmdqak11ZWY0dXlKaUg4Z3Z2TTF3OUFacG5McDVBMFFGaStwM1dKUTFlb0s5MEJiUGpPakhFc3pFb3o5Y3ptT09sdElBalp3dGN3VFE4Y0dOT253VGFsQzU4TDdiYlVJOFB3dHkzN0g0bFhBWUdXclVEdlZ3TWdOODR6Smt1K1l2UTZZYVp0ODMvVUFLMjRzcGx2UHNraXN0Q3NOdUFSR1RhV2tidXNVeFpVRTVCbVFteFhJckpjOTluMTcyeTlFQzk3TnJOMlRUbnhRNFl6NXJ3S2lVWlBHNWN6TWR1Z0c0dW55Smg4Zm52cVZnNFZKM29yV3VKNm9uV05MbVd3bk04N0Y1VUR0ZmZxci9PRmRnNmtmdVhadjJzTTc0Zm5ySU42a2V2RWRrYUo2OXVNMEc2ZnJjVkJFZE5RWTFRWmpJa25ZWk9wRzB3VXZ1MWliK2VwN2hudE9UNEhHalFEa3NtbFJUYlpEM2dEY01zL2w2Uy9ZQjY2YkFtS3FmcDk1UFZjbDZVSGQ1NzZKK2hTUXRlZ1V2cldLcGZBd1JBWXc5akJDUFYvQUtMbklxOEZOTERRWVBRelJnR2YwbTZQdklYU0Z6Yys2VkhIT0ZvZDVYbHpoSkdZYzhUSkVQdmd4K084QTRkRnJKRzF1ZXRwNGFaM3NFYkx0NW5tZUh6cU1LWUFMa21MaHRZRWRGZjhTZEthaU42NjVKMVdJV2FtT1VPSE9QZlBiRmpuTTRYS2I4VzdHRUovLzdXcnowVWFKQTM3THNRVHdUdDdQb1JDMlVIdEIwckg1TWVpTmZNZlV5eW5CSy9mZ1p4YVUzSWNuUm1heDdrdU12dlVqbEZ6eFp3ZXRKTmphVEdVbkx1aTR2M3lhNTl2cHFPZXBGZWNUQ1hFZmYzT0d3S0FLNW40d2pxWEkzY05GVXFIODlFWnd0ekZhLy9SN3FNV05FWG1GTzZBVGt0UFZyaUdHQStaUy9rdnhTcG8yb0VRU1ZTK0RhcjN6elpkUVpZZmNXVUN2WDdRVzhMWGhBWXhWaVpRbGhManB1RHhxaHNJNWlyK1ZZb094SUVDUUptaVVManBNTXBsb0wwZE5iOG1CODRWUVpqNHlnMmJ4aW1tNkpjTHc4SFVNbU5GV3g2L2xNOC91YWQvRTIrTzcrWTlmODVBNmJ1Wm54b2JPYkRWSXA0cGRCZmcxd205UVgzTUYwRkx5TVI4Y1RpNmdZR3g3TUp6YnBxcmRzQXFTRVBYVmszSmxMNk1iTFA5ZFo4RmhLcnlnTk5GT0pnbXQwSy82UGV4b2N1V0hSOERQM2M1TGIyMkZLcmhZRUdQSHpnc0xyM3J1UndER2pJcWExOXM4THE1OE5KcWJ2TEZBNkhoV2U1MVdhcnpQQkhnSW54N0lobUhENThyZ3VoRC9RaHZZOEVOMDNPWlR6cmFUOXhJUitGOEVDOXlDVWR2bWF1MSs2V0JCZnNJSWtnSDA3WjVKeDZlYlFXN3AvNkladGQxUzg1TCttZU5wUTBWc0hwdzU2QU1CTlZlSTUrOFRVbTMrOXoyZW5lOStpNjNlMXRSN3RwU2YrL2cwYm5mTXNXcDdrSkhiTS9aaHF0bk1MemxVY3Q5bldrWmlJUWNQcFVsQ2ttYnZTZ0tBaSt0N0YzRDRTOE9yUUxuRlRPaFlUU004TzIwOW5jbjVNM1QzVGd6bVVnRWRtUkNHOUxuVWg4ZGszeDU0T2dzNEc0U3IrT2EwdGhBbEpPZmYxZkNDc1RyOXViTWptdllKbm15Z3RXRWlKQlgvN3pGbG9DSmFQbUlPaXlRSTR6VXNQSnYrUnE0RTVzZGYyOTQzMVloUDNsSGJmMmk4Y2k2TjVMeVozSXVuRTJSdlBoWE02VGgwdEZkUEN1M1JMWHJIaEpDRlE1WVZDcTM0ZmRUeFRBN28rbHY1VjRIa3VtNzg0cDJKaC9JWE1XdW9jMzl5WFc2VU9CUXVtWlVnQXcvM2Z2NmRLOEwrcFhJZ2ZGSVd6Y0I1UVRQNTJJSnk5QUpXNmJXYmh1a0M1KzQrbmM0QzNXRHcwZzIveCt6U0IzLzZDRmtzTlI1UnhJMzByRE4zVnRRTmswbWR2Y08ydFhPQVBVenRuZVZMSS94Y0RHc2MyWDBueGNmSERDRHZuTmtEa2I5TnpPM01MUHhla0o5Vmk3TkZ6TmJGNWNxTlJEVUYwSk5PcG1FNDlqc1lJQ1RoR1VMa0VuZTJuci9sY01MNkpaQ2xWcUpVbmx6QmVZaFB4TUdvRk93MFZjVjFhSnZ4L2VSVmJHN2FHS2pUMzcza2c0c0Zya1BUUEV0WExLSkJJNkRlaHBqbjN6L0tka0d6VUg3LzAwRytBR1RabXBsT1NCa3pFclVFb05SMGZrOFM2b0t6ZWpUdkswbmhsU3dtMEN4UmNGM21UTUNSb0l0NWxENjFLWkxjVzV5Uk5na3F2Q2ptY2VxN0FKRmdXZkhNT2xTditTUXozQVQwOWRrZHVSdzNvVVpXSkYyQldkaVhQbE96Q05zek1MRlhtclhxelNqUXA1MGdxRGdDNFpWWEV5RWEyQVpKeWtCWEJxUlMvTXRVYy9lWWtubEhiWHdOcWdRbVZlTExDbTAvRkYrV29EckJCY1RDbVRtSDNYSS95U2JOWnBtR2xlTzAzM29XeXNzcjZjUHFLb3FiZ0xyam50MGhvSExGOFJZaEFod0tTby8wY0hGaWs0SWZqUEo0R2ljaTFHOGJSM3NHdTZ2VUxncEY3d1h2SVBEWW5sL1BwaUpWUytQYkdkMHAxMHR4QVlFL3FNY1RUNnVpUkJtRTlZUTYvdlhkNHZYYXZTQTV2Skc0R3VjUWxkNFdCNEtOUmNPb0dKOXNFL1JCVFUyU2J5bnRjVFpBZlBiWmVhYllPc2hRa0U5RHZaNHVUNW91VEJRcWVVTUg5MnhYSmtvNVNlWW5LdTl6UTJNZkhGOTJlWkkySXRUVzRwV2FqNlBpQjlPaHBqZjZ6RzR2bzlYaS9udWc4clBGNEoxQ3lXc1dxSXhYRWNmNWNqMThsbU9jTHFNczN3VkdGSE9ieVB1V2FzSVlEQ1FuV3lQWHBvckZ3ZkJoQ1lxOGdPQW96UVhYbzQ5OFNwTGRKSnJOOWcvOTVQcWh6REpybFhjbTNSeUhGejRWV2tKT3pIMWhDZTQwWSswdWxsMWxZRHFXTU9HWmhabU1jckdjeUhpWjkwUkYySzB3eEliMldvV0hoV2tPc21NYWdwNCtENUViRm5LbEhwNXRnb1NxYzZoUnE4UUIyeXA3M2JGczEzdUhTUU9rL0NXOU9YNWRVRnE4SmtxanA2cnYzT3lhNUVIMGRCK2tIS01YWFZsMzlUR0VYN1V4eGFQck01RjFwS0ErRHBLNUNDNVJxRUxRWG0zb3Q2b1I0MGJKclZLWDVmWlB3em9LZDZhblhvcG1VNkllRElEaFd6aHhldE5sWGpwYXE3ZVdFSXo5eHdDSGRVd2NkSkpHdmk3ZUhObmdNMzRsb3QzMXpueGZ2aVRSQkt0OEg4aE5RQ1o2dC9QbGhzajVxUzJiSmJpS3hRMEJTUTZlbWNDWHVtRXhiTXcwMDBjV2s5dm5rUmJJa3gwUGpZeXBDZDBXVHRLNUtPTXFZSk15a2t3V3VkOCs2ZzZLRE5ZbUV6UVczdFA1aDFDM0NjSDN6SndBaUFneVNjRTZrZHc4ZmE1eW1TOGFOS1greldLcVhseVd5ajZWTGM4RWk0bGVycXJKZ08vVjhrYzVqaFRlM25OYkwzVTkvWU55YS9uTmswWGpvRGR3dDFGdURObkdTN3FrNnpRdHVkb0IzeWhkenNzYUZDK3VvSzFaQURBU3NvMzBhWHRraVNZYzg4N2tiSy92T3RwaitnUm1rUkJLUTB5QmlyYmR0cGQ5YmEvNThHcDc5RzNyRmlVVnBoQUZ4ODV0TFNId2x5M0dPTW02cHRzK2pyRlRsc1gxT1FSNzhCemhOMXpFLytqbi9ucDV4MXNCSGtzMHFhRzlKNDdKY1JUZ2JqendrWkI3bWduSGU2NG9TZUVxcW9BUFZxMEx4bXBzKytFQU9IT2ZhU3Awam4wa3VSS3ZWRlZKUE9hWU1SSzhaQll3eTY1Mk05RStFWWhRVEN5eUZwZjh5b1RQU2ROaVR5WXpWRUxtVlZzR0d5SFJieHg0UExoWTdwT3ZoNUNWQ1IrOHd1Sml0NUFqYitOemlXTGJOTUU0R1c0UVJ2dVlTdDR2SDg5QTh6Y3NCUDJ2VW9SOHlzRi9GbHRlQ055SnJUTVhVUkwyekpNeXoyNHprODQ2VnJuMFhrcWoycVlHSlczaE1PTEZTTXdHNldtRHU5RXVlK2VFd2dpSStyRFc1b1JjZFZ3bjhDbHc5Qzd0Qkc4Mk1Mdzk1a1lYc2hzRGJvVXlkNFpqSmovUUJtbkxIdzhhb2t2ZWVKSnhjNTc4T3dEcGNxYTcyQ2M1eXozRnBRZGhSVWJWVThWUEx3MHJ5N1BzVUNidmNKTkxuR2VMTkl4OXRtby9Fb3JkdnV6Ym0rQnB5cE1BR0lxc3RETVhsZ25JZURkN2pWa0pzZHFRZVhRZ2IvQUNDMDNHVTk5MVhLSnRxd0NzUUlFM2Rhcmpqb0UzbS9wYjU2R0gwR0JhMGJOSnVsUGtvZm0yUmlDOElGMndSZ0dsLytidFFUK1BpUzhmdnp6c2ZhMG1DU0RGV3dsR1NWalJ6NDcvbVYxZW5hNEdFTTVvUnF0Y3RHb01mZkM3bkFxYmR2clZwV09GRWhUK1JhaEpmN0pZWGpYN01yNk9YVVpDMHZsRGJLd2V5SXQvLzBmeDk5Q2tOQmNvWFdqc2xQRFpMM2ljQWhpdVFwMUhacU1idWppVjVVVGVRV2ZuT1hKZEluakNFN2w2em9SZkdxdlVWZkdDUHdXRTQ4cmhUYnpDcG5GSnRvSjFWOXNvd0lSMEd5R0duREM5TDZOTDhDRll1WGJLU0doWUtMeVBXc2tkdjJKMzRDRTl1T2RMRWYzQTZPQU1rb0N1WVZuOEpua1F2NU5MaEl2MVJLdnovY2J4V3lKTmJ4cElOa1h5bUJuemREMktZaFRIaTZxbmFrY0U3bzZnVUU5aHlXN2JqN0orOVphMDNrbTdJckdWaksvaGFWNG1LQUJOdWFsRElockFmbThLdkZxS3V0SGxhNGhQQUs0VFM1amRqZVZZQ2VPMnE3c0hQQitxMFRQVG52VjVNTXJmSzBESk52cjVJMmMrelR6QUNNS0E2cEI1MDh2WDZ2WEhxaU1XS0h3SmhtUCt5bzRqbitqVE4zNFZIUVZqaGFXcGlxcHp5YUhJem9GVDYvRnRLckZicmdvTjRDbVZ1RHNlSFh2WjZlNDJZTGZQOWtGaFJURDROU0x2QlhQbmxEWDlnYU9NbHM3VE5DRnJORVZsSVRlYWw2eGZKK1JKNFRVQVVoTFRsV3hvbExFRlV6bFQvVExiNWVSTjA5bFlkTXNhNWtmYmt4K1lNU0NJNis3bTkvbGpCVkMwWlJRWkJVeWMvT01SUnJ2VHFGa1kwU05UZG9NRjc4NXhLSE5zb0tqTmFxaEQyODY3bnRUM1l1aExteXZldUpId0p5SnJUblY0NVR3VHlib2doMFN5bjRPV012ckdyM205aS9Qbzh3L1JSaHgwUWFIVmNpRmpVck53b2Q1SzdQVU0zNEtIRnZvYXJ0eEd3ZkFYUmJYSWJ2RmNZNGxSR3o2KzgwVlNBSWFONEVseHFzVkNoeGJJb3c5M0tmRFhucVloWTZabjAxbm9TRTMxRGxqTzdyWEpNeG5wZ3R5TG96V1VzUG8zUi9xT2dkTXRXVDdXdWVBQkFXb3hiNk45U1d1aStESEUrM3k3azBHeGROWWVIQjM3dFhCWllyVFkxQTZaUHJ4QWlRR0lRdDJLdjUzWllDNURRdmxzd1RnTjdYbThXcXhNZ3YxSWZ6RmtGelUwcW5xS3BBeGxUd3ErTnNraDFjN1ovd2JJYWFFckVkU2F3cVJsTmJ4T0VoNElPN3J5VlRxNXJ5ZzNIMXNKVXhpMVlCYWYvWnVMTXZBMm9EVEREWXp2cTFZV0JjV0JQb3JOQXlQdzlpbkdoU3NYZnFSbEp1SGRybEhKMHpiZzlTajc4NEhGQ1djZTlINW5tbDRtbzRjaThyNlMvRGV0ZmhRaEl4bC8xOEpCekFpelRRdktXN3MxajJ4cDVqRkVZWWwwTTAyR0IzTTNqZWtla0Q1dU8wbUk5M05mTWpuYjYwWjNVaWhWZFd1bERDblVVYm5pdmNXdmRxMlhqK1lRME5UeklZNTd3TkgrSlE1T1cxREFIRzRvcGpkUzZQRGFXNFZ4NTZhbHNiTWsvVEE5VWdyeDkwQ2NLSHF2NUhNQ3NOZVlaRjFLTkNvTXY2a3RGWVEwcG5ldlorcWtBUW5laTdEUDdvV0RxaVBtMS84K05yS2xqZzM1cS9uVUMvY091Ry9OS0tnZE1PR2JpamhWUmNDMUR3RGJKNU1sc1RJYS9EaVBEVHc4Y0Q5di9zQW1yQStSZmV5WjJORnJVVm1ZanNNNGkxYmJza2x0R3B6dmRaK3JySXA3V2VGbEdqVXFxVTdFSmQveUVHT0VhM3NMYktyRzIwc2xzOE1BaFg2OWZKeTd4VHBGYTRpUmVCVGNRb0J1M2FtbU9NNkM0RnQwM2FVSmRqRHUrQzJ6ZEFPdGtDalBNYzlBRmxpc2N1MDJjcTQ5T0tYdUxlek5SSmpNRk1TTVMrbkRuOFN5WXBKWURzNnkwVFN4Vy9DdVRCSXA0RTltRFYya1RkdTlKQW92NXFIOFhwNi9OSjdOT2I3S2o1WEVENy91MVVibGRYQXpRa0EwSXM1UzR0TS8wUVQzRmgvMm5GNG53WnFPMGoxZkM1YytSUWhNS2tydS9ZUjZ0Nm5HUWJmTTFpdWF5OU0rSVFjUm1LSHVpNGMzOGtmV3Y4ZnJva09GY0QwUDlkbnFJTFZrUkNndWRhaFVHY001Nk5pdnVPNC8vWDRLeFgyd05jemE3YzhxTVdPSUEzenoxWUc3aUxodlVZeHprNWhVbmdKQjQva0dselV4eDM5RUMwcXFXYUdpVjA0d0NyeXFXeTFjenlWeFhUTkgwaVgyRmFKcW9EdUN6T0VyNlNiSUdqaEZ4aDdTQlBKU1huSm1DMGpyQVFWcHN1NnM0dm5VbVpWdVYvbnh0ek1JQ2NYUTRLZFI0QkM5bWNPbXdITGtESnlZSHpGQ0VKSVpCWWxERWVuNnZacDVYNzhuVWNuWVFtNll5OU4wSitTYSt4K2Z0U0tMM0ozY2IxQXNjcVYvQllnZVEvWFd1ZVMvTTZxeWdZQm1zSUVVd1FPcDJSN2dsU21yaWxmNUxab21yWGE5aDc3dGlub0xyQ2xiTmpVNTJzYlBaVG1kL1VtUFZyQm0zQklPR2N6aERnOUxpVklrMTduQ1pQT01jU1ZOV1dWOWdMTDZtaXE5T0MyMGhVUWs3NVkwT1BVMGZIZW44em9sMElhZFBEeExudDRsdTJZakVGSHlzTXUrdFFkNk5WRXdkUnF1WnBheFBDM3AwRGJoNFpsYzRzc3JBWU5kUTlOUFREVnJKdHBpR3hLclRKVW9qWGRkdjlLWW9rSW5VaFJ3UjJDQThOZzVsTS9hQlEzR20zSG1PajRUTml4Z2lhUEd2UDhOT21FK2k1TkRWTkg1eDdjdFRqTUNSSlpoVDd3b0tQRXVManlDTVAxTUFNeVVVOFlRalhsTUFIRnEzMWVtd2dWaXVTcVVsbksxUUhiVmF3cTQxRFZDamFwZVJ4OWc1QWpuZW05ZlpCdGd0WEsrWG9FNUE0STVkeFVBTS9uTGNSZmtVS25uVFlEcldLbzdkYUlibFlaNHd6MzdWL3QxYmpJekVMU2EwQ1V2ODJrSG9RNGdqREJNWjA4TUpkODlpMzJJWXBsbWQrWkt6Y1dMM2JlSTBDZTNYemR2bnZVQnptdkZ6aXFldWVHenZnMWhxZkpTdnRsV2d4SWhudkpnemowM05Nb3NXU1BVWkVnMy9VMkJEdVlRV0tDZUlzaEsvM1dDQW9QTzM2RHVNdy9nK3FXUUsrdWpwcXU1ZTR5OUJtZUNLRjJhWHhtUHlrSlh4SDFxdHhCV0x2WDdDNmFieGJVcElJV29nTjFHcVN4NVBKcGtyVkpEdEZWMXFaaXZKamtESTcrVmY4QXpUSGliQUJqRk1MRGdnaFZGcGxnSFVaNk9id1M1K25rTnVzRU5xWklNbS9Gc1lPbG43V1lQYWpGTVdqRG1UUUcydUo5NTlRc1dUWUFCdjhSSE95NUpodmhaaWcyditoMlBEMm9mRXk5Mko2YmF5UHlJUEE0dG1tK2xaUDg5eEVWTm5qekZpVGJwQlI1dWlvYzdISDg5QStyWWorbVhleG5zYmlPK1FacWY4YzZjcElQZmx1Tm1mZjk5bVFld1Y4S1VBb3VXdmkrZWU1OGpZS3B5cldzSm5obzU5ZXN2UjlNcitWMHZ3ZXNKaG1xYUxqZkNLUEJyck1aWTBrL09xQm95ZXN3bGxuZE1nZ0wrZ0ZRelVrTjhJcmpsRWxXYnZMREZpZTJzWmFHZnpPNk5rV3FRL1EzMlRsd0JpTmZiL1g4cWpFV2syUDVRUlAzTkJjUXlWSmRQdmkyUEY2c2JINlhnbUVrTmpza1YwMmMwK2FoMDlCaFQ4ZGY1UzZSLzQ0bDBLc2NBdGJ0OU9zaVFmZDV5RFBqY1JwSGJraDEwUGo1UlZWOFJoSTAwSnQ1MzF6MDM3R04zUEhhTTlwLzBKdHF2ZGlFajAvb0JSaHZNZEptVWx4SE5nNy9ndm42K0pncG1jZGorR2VWNC9yV2VlY05wN0YrVDZPN25GWjZDNGhoR2trQTZIVVBicHdpVkIxTlQzcG9VZzNHTUs0UXhsZnpIS3VJa0xrb3lndWU0d1dabmxQUmx4a2hQaFFDYnIwQTNZSGVHNjdYelVpNUY1S3FaQXg4RktteExEUTNlYm1ySjQ1cHFhbXkxemxyUUxFaWlwTjhrNUtBc05xd0dMT05MSHBQalIrL0ZkaU4yM0VoOFRwblk5eloxcXA0Z3B4K2N2bDFxblQxTmJUZTlTZllDa294c0pmV1REME5OWHlET1ZwWVZWN1ZTRDhBRGk3NkJoUXlTMWhXQTVwY3JRRXBqZHdNeERQYlNaajFlWkY2R2dWRkxHY1BVSnBvcVFmOVdQblRkLzUzSm9BbkM2bTJMYkR0YlB2L0plQzRYY0hlZEN4R3NwdC9hOThtb2NocUZTMG5ac3F1SW1vVTVrVWFNYVp1WTZRclZlVTFRWHpkVytaNTllb3RXcjJNdS9UZ3hkYjN1MDdLVjFhTjRkQ2xyelArQ04yd00vT3hpaDZtUzdwbzdTWGtSTmRwVk1ReUszd040U3JNTUVKQkVDaEtjWlA4R3ZCMTJucDRRWktaN3UyWTNrS3R1WHkrMURsMEJVTlh1a1pJZDZTNnA1eFlrWmdRVEVBdnJOblA4a3c2VGR3NUhzTC9BR2Z5c1lzTkFFUGg4bjFyQm1EUDZRTEVxMnZTWUVIajBualliamt1Yk5EdTRXKy93emd0WjdDcjZiWmZmUEIvaElGZEtNd1hpL2hlNlpUcDJTbS94S1d0VWlpVzJPdXZDQ0JuaVhnNnc3MU5nbE1KVlJaRlc4M1hNYnlKODA4TVEwRG1UeHRvZmpOeUprRHlZaXM5S1E0aFZFRDRXc25ubmxTYjY5Ym1IMFBDV3FnaXhlZ0pGYkJIMUo5MWlHQXIyaXp3VTVFay9XWERhOStjdTZnUXE1TzlaUTVvYTAwSzVFUHNmVzI0WVdTdzV5aUlqS0xtVFlzb2lvUzRYR2lkTEkzSWVKRGl2S0lNNDVOanVYZnpVZldsc0I4cE5pQkxFN2Z2THNvQ1h6bGJmL0hOTS9sSktGNVpRRW90REpUd2RLdjV2ZXJCRzY1MTkxNW5xRVpDcEl0bG55ZjFVUG80am5CR3o0ZUVkZTEvdFRNVXB3UzBkUjlTUjF5ckYzbHBCeTQwcUU1MmNOV0NHWGtVVVc2RkpSczkvdndPK2txQ29tek94UkcyL292dURPT1A4ak5OU0ZUb2paWGdLUkdnSDZoL1VrUStzeGUxWGVmVFZReWJQV2MyaUhKMlFleEk5UG5maHZnUTdDclR1UjVFeDRBWE1URnVOWWE5NXFtV2RmS0dkczZDSWlEWlJ1VEF1SkQxTlJEREVMQkFycVM2aHF6WitCU3VPd2M2R1doZng2bG10TGhXY01uWTV1RVFKSzhFQ1oweGpIWTVjOXJnQ2RtQlI2UkJFdjRDWktVVkU3WUMxUEdNSkJsdXZoOWpJZ1hnUnBCMnhUMTU1ZTJCZ0dweEdGV1BjNCszU082MjZTcWl3OWxOK0ZuOFBhenA0OG5XSERIVUdBdFk2OXptbG1KOGo1aU0yM2w5bEhBc2paeHBXOTVDUFBZTG9NZkQySXZaREdjdmF4Mk5WVzAwaGVTV2FMeVp4SGxZU3pCMUNtVFNibHdmM20yYlVKRFcxZGJrNksxaU5Db0h1UDhvNWpPU3pxK1hYM2hsUHh4eHNYZkxoOCsyQndFUVVuejlObHVpWEhWMk4zTEhtS1M5enBGWFJaaHNLYkN6SGpUK2VSek83YVQvRHkxK1BWb1ptOTFsdll1ekg2Z2pjRXZ5aVNtV3F3dURibnJXcE9aT08yTjZRbEI4WktjaU5HR1FqYUJxdG13Y0FXRkEvWllhRDZWeENXOXFmb25oVUJ2VE9VU1hDZkV2N1k5RzB3bzZzb1VvTDgrZHhGbHZYQ0Yzbk9iZDlsOUsxM1NsM29XZ0w0NFNmUCtSMXd2aUtscDRxcjJEbHpaRll6RVllNEdCMmhtSldOV2t0RjRKZHNETjZBbHo2aUFuVVVBSzZ6VjFnZXZ0L21kVzF6bldjc3hWcE40bC9IK2ZLSFErS3RNMURlYVVCUWxDWHU3YUxaUVpyM2I3ZWV5ZzVjN2RxWEdldzVRVXpUK3lXeklHemdSWi9DcjlGcDdsNmxRYittc25OTXhnajlEb3ZtSFEyQWk5OW9mUjBueks3bUVydXN5Rmc3MkdEQ1ZUWlRjU2ovdXlhOXBsM3FlSk1PRnp5bmpSTEkxSmVrR1BLTjRTQWwyeHRqdmw1dUcxTW5WTVNEdmlEN0UrbFlrNVFOeDgwL2UzTGVoWmUyTGovYnlSUnZueEE4QU9BOHM3TUNJTDFyV0hCQ2dLU2tWYzVMZ1p1V1hxWDFTRGdGVDRjY0lLSW9lOXdYSkQ2SUJwbFRuYkRHdGVyTzQ1RGZ0WUlkckRack9aYUN5ek9iS0g3eHFWcDRqVnRDVjZxeVIvTCs1QTlSTHd5Y3YreUhhbDJudjJ1MU5TN1JMZjBHRFhQa0ZhMHV6YTU3cFR6bE5PWUlWMDkrZitRTVEzK25NWHp0QjNUYytQc1hPZWxPYjM0OTZmcFdaT1lDbnJ5SXkybm1iZkdRSXp2VEJKL3MwcnU2bmVlNEVEcGo4L2VvRjVXeEE2UDBsam1ETUsySFl0OGZaTFlsL1hFYXFIZ0l2eDdMUjBxajhYZWtJTGt2YmxhNWJyMDc2T2VFU1Z3L0tOYTlyYm1ibVBHc1EzZ2VrTThYRnNHNEZpU2ZWd3hPZnpRL2JFUkxEenpzbU55Yi9xT1pEbGovK094akJBb1hzOXFVOHhLUko1NlpVUnFabDNiTVltdkw2ZE4rTUhOU3ZvUld5U29FbWE2UTJmRmZVWjlmR0FLd2dQZitUZTEzNUtSY0QzcW9qeGF1ekxOY0pYTFdEVDhZMTZSNmxPM09UV0JTM3hUQnUxKzVneG9pbmV2bFJkVXhXbVVzUUhERmdRMmFpZ1planBQWWtyUGNNRUdraVhlaEZaR0FoR1RmUG1lVzJtaE56c2FDaW1CTW44UGNTNjI3Y1VqaW41QjIyMUp0bkluOC9HdzhBNVdDQzJpZHRxTkM4MlNDYmM0cXBrZkZvZFJ2Z3ZYV1NyUzJiVUNOdEJYa0taYWJzVUZLcDUxUEw0RDFnVk93SUNjaTlON3QyaCs4eHVCc05lWS9JZkU0c3MwSGtWRVJvRW5XR1kyT2dLYjNnWk1FYitMenFORGIwSFo5cW9lSmVOU0xUYitLQWhhQTJuYTFKVGcyVkNRMnFCbzN4a0NqbWQyaW5RYnhyWW1qTzQ1RUtxZm5PR05IemU0c0g2YVk4WnNJQnEwS3JuWkNnbWoyRXo3VEZJek8wQjgzTXJxM0ZaODc5R0RlUHc2WjY3b0Q0MWJXdmllTFowQ3Evd1lCSXlHSWFUWmZNQzNua092VGFYSVRGQ0JxdlZPZFJpZ3dER1M2RkxnZjlCNmhLNHdjN2RGbnNzY0o1Z2lQYjhhTGdDa1NCSGtEMmZyVHJNUTFmbnpFVUVGZVB1YTViODRHREJpS2ZONVM4NzR2OXBDanV6THMxQjMrNVhmNkVJdEhlaVBvUitHVTI0UGYwQllmT2RjUFByc2oxMjJxSWhBSEFwTXVUSXd4aThGMnVjanRLbGVhSzBWNE9lZjVTTG0xekdPRzVtQkJiNStrb0g5WWZmcHZLc0t4MDBVMi9EYk4ydmtJTWRsa29hV2Q4TzRxN21OM0N0N05RNmQ3dUJYUDcvSlBxWmV0TFh1bEE2UnBQNHNla25GMkpPUmJ4RitOenNuUVFXelhMNUZZZm8xbEx3OG02aDFSOVA4YUwxRVRTNU1QclBKVWVIdE15dWNrMStNNllkMWxFN1FIUXRxUXJTcVpOSzZSUW13NlNlWlVZOHVWSUEwbTBraC8zd1h4Um11QzczengrREtyU0ZoN2E5VDAwNm9BeFhZWktRK3RKMDZXbXBKOEthRWtyQjhicVQ1WFV2NG14T2p1SFdRcDl2L2FHdHBQMjJZZEx4UGJmd05pZkNtdVE5bFphakFCcXlqeWF0anRCVUVCSUc1ZG00Tzh6N1FiUUF0aG5JOTI4TGI1MXVWbXU5QmNTOXZiV0RqQmRDTUtuY2VqSVVRMWNuOWZSZjJiUGdpZUcrazhoK0M2QUN2bVNmRzMvWWRFM1I3UVlhZzlIUlQxL1BacHl0U1hKcDZMdmJCdXQvT3hEbFlDclhIMEpBV3dYc3EzZVZMaEhaMkV4MlZzc2JpVm1uZ1NZVXRndEVJZ1VPWWswZGwxVEhEOTFsYlF2N3JSSHdES3QvV29JT0xrVHl2MzVKeTIwazQ4d0syWXZ4RDIyN1dPWXAwdlB4MEhtTFNrdVlLZXBKdnNjMVdKTXZRK0NIUkVYOUo5YmhkTE5NRkFzK0tjTE9qVVU0TkdrQlVtdk1wVmlJeExTZWRvcGR2Q3Z6ZWZHbWhIZklXTnlOYjlCd05OZVAvNTJhT0dsMFA1K0xPZklVbEFjZjNsVFM0WjRScmVKNXBjVVBHMnZ0dE5CTUY5aWFHOFhHSlRXSGlpYVNpbGZpTXpETU54UHBzdVQxcDN0aEJiazRkTEhIR0VTRVcyd3B0VXczSTB3cnJ1cEVBckIxUFVpbHU3UkMvNnBMcVZ2d1pGYVNMdTdrRHdLQ252cUtMcWNaS2s4QjBQM2VmaVh2U3YwcmVoMU1QSkRZbEJGQkVrRlB0dnBKZG9sN0tvTDVyK0hQSUVLQlJQWDZ2Tk56VEd4cnRoWE9HNUxaUloxQ0gvcDlLK1NRRTJIWThqYjBqQUM3QkFSTXRnV3EzbCt1RU16WDduL3VaV1RnK1h1RmtpaCtmVmZPaEJVdms0SnBJWm5zVnpsWk95cC8rT2czb2Znd29NeEk1Z0xPcW5MQThlNWJoWVV2RUE0Q2I0ck9pTmo2RDZ5clBabUpmWjNqanozVGlNNWZGbUp4S1ozQ0xlai9aYldDYkJIY0N4aUpsL3pQY3BmSksvcU1HK213VXdVMzRlN2w2UmREYTBUdUI3MGlUWUtSR0M2dS81d2NGbjZoNUQ1VU5vRVJudDZBTVdDdnlZN2FlcnciOwoKICB2YXIgQU1FUklDQU5PXzY0ID0gImVEd0FpVTh6UVpqMzVGaGdIUzkwbGlRVnViNEdyOTZLK1ZVQWFjQlpOL0V5dzd4a2xzNGFDdG5tY1JoZjlKRjZUeDdiQ0F6S2ZtVUJna2YyQTY0U2l3dVVTTklMLy9NQVpsYVZLZWxSU2lIMGNuUlBtVjFsQi9jYS8zOFZ6d3hiL0V0RDBKc252ODRteG5BRGprcDJxZkg1Q0NkQm1ibnVWQkZBZEZDQ01MeGJPN0h4aWxNQ0xseTJwOTdaaXR5dHR5L1pRSW1zT2xwcWFpTHVGQXhiaEh4QjlCbWFHbGp4WmdaQ3ZrbUliYkdFanphMlBBc0hhZE5sRTR3OStESU90N083WWNhZGVNeWhwNVJscnUzQnc3Z1p6WmxBaWFmSmlGdFFiWXE0NlFBSzhZSU1rMnJRK1VtSDhhN1FDSVlvYkFWTWdscXNqY0YyMUd4akxGYnVhMUhCeElBUm80T0ZqcVY1aWJxcFJwemlBdFNSNVZXb1FZdEtxT1FXRlBDVWlJTys0KzhxTFhFMERYbTMwdFloblFRZ2FzK09KOHVyVkQ2eCt4Nml1Uk9KQTYxSFkxSHFhakU2ZVk1aFFjbW5RQW01am1tMzZNODJQN25lWElENXQ3Umdqd0dxMXk1MEdsK1lJTEVpV0ZUMFl3ZUs3Y3J4ZWxCRFZvR1pzUzVhV0JheHlYTzZXcDZCV1pNUzRkdkF6bVRVaGVXRDRwKzVGaEh3RFpIWXNvMElnWWdOT1Vva2dVMGgyd1FYV1k3MmJZbzJQaW9KNWNSRlFNaDhYdEZUdkxjYnVSVEhUclpIUjJHRWpLYWZPNnhCVStQUER6ZEo0K0FQOGJKNmFyazlNWU85V3VmUmJBTVN6RTlSaDV1WXNQMnFlNHlJSXZzYXBQSUUwM2VJSnNXNjB1VlFVVGV5dm9NM0FaV0NxSUdvVEZlWWo2L21maVcxWmU5bThlRzJqMmhZVmViSURyQVJGWTJ0R2hzd29LN2V5K3RldVcvMExnb0N6dmNPajU3cGQvbnlmWFZWaWZsaXFrWVFrUjhjTnNWSXRwRWc0VklSYmZkRytOWG9lWEFvaTV0UkZ1MDNVWW9ITGE4OXFnWkVxK3FlYmVEYXBaZ3d2UzAvUWp6UHphUnozUmlIMVJXZGlhK1pXV1Q0Rk1NUXdGRmorT3h1K2JPWDZSNFZtdmtzditJZVd4b09MMW1sV1pYVGxvVDZWcDAxYWxoczJuQms2RFRzaG91dlJ0U1ZuL0pjSnVxaURkTmhiRG1WbkdWYWNpQ1gxZ0tBU1huTUMyYklYSEZKd1lkLzdUVkVUYVNLbW43NmQ5TTMrYkJvSzZkbHlXSDcreFN5Mmg0Tnl2NWNXeVlCVCtmeE92c0lwNXlKY203NjV0L1pDQjBhVUhxMHhHZzlBcStXbTE5TXBLQ2plcUcya0E0b1hackMva09wSnBEMDU0WDRQdTFsTHAxZy9GSGhMa0RqQWFGRVVTZTRkMllWVHNmSUpXejdBeXRoa3E2Z0w0VFNZejJhL29NdFJOTGtBbTU3ZDJmNk8xMjBZVndja0FXMTVJeFc4ZTVZWjJmV1kwdWYvTzMydzhFd0YwWFRsVkZQc3h0M1JibktWNEhLUEltbEpGMnNJK2E1Q1ovdDg2VHhNMmdqZSt4TVJZTmVVeDRXczBvd1cxeFBEbkIyeEZlcVV1TW1oMFlOeXVoL2NWbjNIRDVKdU9LKzVxZ3JhK3hjOGF5SVh1SlZrYzR6YTliaENkMlMvNWtyWVdTTjF1SEh6MFpYZWIxYkpLRkkrenBSSFRMZ3lPY1pKalgyUTE4WFE3RlFvRDVxRU5WeW12cklpcUhyUnNxSzRvQWMwOGh1U2NIMUo4QzVHQ0hNSXFGUkI3REx6UU9SSmJHUjdya3ZWTkJvaCtmM3BUNExWV05PcEJYc3pWV2lJTDFUR09OamU1UU5HK0tCN29LM2VRUnpkbjB1akdtbFdrckJuL0VZYVlIV2Zyb3hRdW9WeXFvdWhCbGZReUtjL2tkRHYyQ3NYMnVBd3FhUjRlc0JXbVZWUXBhNmxNdjBIbGhhNFhRUFFNVHZtRUxySFczN0xKWGFab2dhOVBwaklUVEVjTGtRWWN3eFlZM1d5dmd3dW1OeFl5MXdnKzFPWTZCVVlneDI3bW1zY1RJbjUxUjU1YTNUdCtrWHBEVVF4Qmd0SHFCcTcwaVdZRmlPZTFuU2k3bEdwY1pKRHpIVzBDeTA5SHdGN2dLcnJqY1R0MGJSRUlZMnVvYTdCanB1N2oyY1JwcFpCK1F5cEFQZGM5bXVRWEVJbzRiVlpaWEVvWkdIbTFXeVM1UmJmYjdjRVhISDNCV0VtRjlIbWU3K0RQa2toNjc0bklqSmVzY0FkWlFHODhQZTVCU3cwZTR1QVVScW5pZmxGS3RCbWY0b203T2JRU0kveklZbFpoKzJSZWVWZlVjWFJpNjEwa3F2YjZXYVY2UVRBVzFIMEhPUFBzVkszeU1POGFrNWplbUF2L2ZrRVVGSW8rbTNieFA4TG9DY1hobjMzb3BLSHV4aWVLdm1PekNodjdGU1pYZGxhMkpuc0FvWTArQnBEd3l5bHhTOGFvTlJURk9jQlVyQWVveDlSdlNRa2ZSYjI0dkVyK1hJVkdGVE5ielVJMDJkeDFhYVJMaFZJYitkRzZCUkU4UDR6OFFqT3ZQejk1N1c1ZVlyR2RrWXVLZTBFeXZuUXBDaThHS3phV0ducWo3REhaVVJvb3JoVWpsdExSWUhUWFlMaWIvYWtpUzJDTGpJUDdybGI5NDFPdXp6ZDVFZHUvbVNPeFJoUmVPNm1TV1phVCttMnpHaHE3QjdHd2ZPVHdSNFg3d2hYUnBYREJHcnVqUk1jZ1ZISEdtaTErQ3NJc1Jybk9teFhwUTZPSkY5TFNJNDQ4TjJLT1ljMURzMWhGQUFYWTFBSFp4eTM3cVdGVFVQSzk2ZFdjNHJudG41dThWY3NyMWhkYnZEL3dIYjc1NWtrby9ldk8rMnRRVkdqbngvV05VQVR6MlZEbURuemV4RU80RDZIQ3k0cW5maUhBOHJIellGOFRwWk14K2Rlc2txeHNKL1NIZ0p2TGYzcXRLY1FoQ0xqem5BcjRPYno4M1VJZWJyQ3FKS3NtSmFJS2VwZWQ1U2RKa213dmswaW5DQmNtL2VnaVg2MzF2eDQ0ak55S0RKMUJMaFZVK2FJZTlDazBmaHE4Yi80Z2g5Zm1MbUUxcmJVREwzQlBJbThBck0zeUJZTk1xaURyclllcFA3WGh5TlNJQlRjTG9ucnVETE1EazZhaUJ3eEw1cGNwVW5kbm9Sd3pKbWpkcjZUNVJTVXVUblUwbVJpR29wUnlOVi9FaEJQSTdNb0h2YmdGWlQvekNIWnl4RkpXRkkvOHZsM3Z6N29TODJ5aEdxb1FseVQwSU5wZlVtdWo2WTNxMmhtcTduNDJBUVFEdnUvWVlsQVBUNzhEaDFyNjlsemVwc1FmMElWOUZ3aEwxYnAwSk81V3dnREpDd1MyOVBCbC95cWg3TE1JYlVkQllMTXVheHFMbEpXeU9lazd4S09HcmRNSm1KWFhhWjEzaXNJbTg2UFZ5OE5GaDNkQStVZzl3VjVPekptL2QwYU9RREFxYXZjYjRMT01lVWQvVThjUEwxVHdUNE9valdKT0JRR29QU1NvOHZIbVlIRWVvNGlldS9SRVh6bmtSaWEyTGQvUnVTcHNsZmpQL0kvQlBYVzVHVXJ4TDFJNUswNjR1RktkZ3pMT0tsMTN3TFF3c1VaWkhLMkU1SkJNZ29hY3FYd1RkemhYV1R2WTFTNExzd2g1T0JaMFZoT2NtWlNScnhOT1JZcEhuaVp3UUZBZm9HK2NuNDFVWjNEcGQ1Rk16dGlWWGNkOWdTcTFXNUM3UStpSEtOM09HSFRPYzR6RHd0cU1Ya0RmTlJiL29UVDlkTVV0TVZHMTBPdW81T3g1TEVjZFhtTENiUFEwWWVpSTRkY051ZEJkUGZvMGtXdjJsNDZoZjhLak1DNzZva1RjWkFXV0IyWnliNUVQc1lJM2YzYnF1cTkvY0tYM2hXWGxncHExR202K21iK2l3TWpZdnpIemZtT0s0MnhLakd0S1EvNEtmcUhSZzBENE5xNlFlR2NFL2ZtcDNQcVQ2aHArU0sxbDhCYnJkR2VJRU9DRUMvZERGa1hzYjZrNEVTMkw2bUJYbjc3VUlzZXl3K25UV3VFVnB4UmlKWXBvMzZ5SzlLYW04L2lBcVpuVlc2WHJrTTVHZGQxcUhVeWNCOHR2L3pJRzNJYlRLSllZbWcyRk4vck42Rk4zZmt1MDJxZUJ2d0JNRFVhaXMrWVRZU0tTaklRb3UrajM5N0RnemtScE1CRXJYdXhhR1VXQkJFMHIzTUhodVo3T0cwWGR1NGlSMC9xZnVCVWRoSXlLRW9LbCtjWGZzRjMwSURKWnVXTUhoYnNNNjVqS0RvejhLZHJMQzNhSXFLU253Sy9CbVJxN25TSWk2amVLOTdaNWNvWUcwUDBQOTlHVWdRbjk4cDB4dGZzWW04ZW5jcDVhYUVvTml4N1ZXbUJtYWRLU0xBRWZlaDRjTDVpeTFhRkVSSEgrVmN6Zll0TTlmS1JRdTBJVks4bS9pdE8xRDZyc2JpdGtaMldQTENMNEkrZWxDRVlLSDZVTkV5anpnemZyNW1qamxaQXVJR1Y3cWd1NUVlWWtNUllmSDF3UmdyQ3hHNDNwcHhUU2VRTW44SjZFRmxvL0JLd09UWWcrZDNzQ2VDbDJFamVKVFVrcy9Lb0tDams5U3pRdHhkZUhHaHpUQXBtdWlUZWJZeml2VGZhTlIxeDVVdXZvRGtHK285VyttV0xYcGJvUXNPcVZidUd0VnlPVlltZ1NVbU9QNXlHQmRRR1B1bUl4RnA1Vm1yNmJWMlJOekdjeGMyRTJLaGpLdXlFejRSZFd5RlhKV1BVVTlUTmtKYU9WV21hMVI2UmpvVHlQQWZiRnhjbFhsd3JweE5tdWtmZC84UEYzaXcyUUFsQnc4SktvOWdFbUtWSGRBaE9MKzcxV3RRaHNGZUFpNHYxQWdmZWczNUpkbnRTdElzbmZOcUtOUVhvRHdSOWJBM056VkYyQjJrVXVnNE42QnZkc3ZFdUgwWEpzbVlmMEsrSmdqRjd4UzBCdDN1dkpMRWNObXZubXNncXVCNDRqdEtQRUVzU3g0Qzk1VzhTcDRNMmdJOWFWQTZyNko0Z091RUZFTHFsTEh5Znk1SHpYNEVKcE9SMVg0b3pOdGhPWVJrdndFT2V6K25IZU5ydk15cWF5bm9OM1VKaURLZE1OVUd5MzdaSnRFaWNVTnA0d0szZ3JxL0NMNjdwblhJOEk2S3Y2enNqdmwxdkFIb0VWeTQvUC9nK0l4UHZiQjVZZFhSd25IcFBQcXMwSzV6dDlTVXRXMXE3anZKMWdBV0JlcGxFV1UxcUhtQnJhc0tESFpLeHNMa3JsNUlUREFHRjNoalA0ek9pak1KVTdTUHpBZ2lsQTQrSVEzSytzQ24xZWVMRkhsa3hBdTFVeEtOVE5XQ1c3b0JqNW1yajRLczIwYkVYSFNrNzk2THBNUU9yOERWdVlkdlpiczBYTVdoMnlMWExVSHRzOXhzbDFtbXM5VVdCMGEvL1dLU1RqMWd1d0FhQjFMd3ArcnN4cEJSNE01Qzhmb3l6NmExTytPVisyak5nRTB5Z0J0dno5V1NhclNFWG0za25taWZ1amdiN3g1WFE4NlpOMERnL1ZBSVZMMFF4ZmY1YjA2QW1VSHdReklBVldVVnJPNmpLR1IwSlR5UHpZQ2tYTUxHWTgwdkVYZnNXSTJiWGIyWVVtZzRrWmQ5TUlHanpPeUszdERBV2szVlpJc2dRWit1S3FSRUlqK1I4UytSc2o2ekdxWEl3VVpXNTRTZG5SUmJCNVJWZFoxaTF1NXlzSVNDK2lrL2hGTlRGWjJsalRud01aZmNSeVVQSVUvYlR6UStxSkdBWUZuMHE4RTVPTkIwamJtVEp2eC8wMTd1a3dqRjdseWlNbFdrR2QwQzQxNW9FdUZQK1I1VXFDbnRMVm00YVltbTVEMmZIcFU1a05MQ3JPNytzQ1RMbGRCNFNwNU02YmVja3A3QmpNelhjcGIxRkxPMFZXV0VPdWVWMnZpSzdjUmhnelZ3c1QyYVF2eWdUK040eURsRGFYR2FmWkRsUEs4eXI3WnlaM2MwK3hyOXRnL0draGVRQXZOMGZCcldpVDFJUDZaN2VEMHlKVzJ6Rm5ZZnhROVA4WDVXTnRZVS9na3NCeG14ME5lcnpEOEtEWktha1FpSW1vcHJCNUdlaC9nMlJtZkxzWG1YZDk3aENNVHVNOXpzZFFKM01PZE9tb2oxMmU1dFJrUXFjbkhZRU9NMHBiY3UxNU5qWGRkOXI0eDRCQjdxTjM5SkxuTEE0dE03MDJGaFdBZkJ0aVNaNFlGKzMrTGQxYUpSc3REa3kxb3pTbTdCNjVOaHpNTnlKRDg2eUpyMFBJUkNlMUxNZ2JHUWpsMmdXNHU4NE83bEJoMlEyV1FrUmtQNzFTNTF2ckFZbDJiKzNNSU5aSFBNY3NyK2NGbGx4MzdjSUgxd00xdnkxSjYrNFZ1NDlvampHdldybkp0UWFQaXlIV055VmEyaklNcFRjZFVncmlZWTA5RW9ZUnROMEY3SHIyM0w4S0ZTSTZnbEttb3J5SlBwK0NnN3ltUmplRDhJYjlTQUU2cCtVM0pIam5qNnhydy90S3RTVTVpd1FxSnhhaG1EMWxkUjVnQ0hBK09QR0pINktvckNsUUdaYVcxaVBORG1LNFZUZ2Q0SGVESTNNRDVRN1BmVGkreU13VVo5UWcvWkhsN0FEMHc5ZlpEcDRjQXZmU2VEcHNpVUFrb3lVN3BsQTlaV0xPUWtrME9hQXZiY1JkSXJCelZROEJsR2ZYd2lyMHZsaFlKQzdMWWgvdHIwcDF0Njhvd0tvZWdESm1nYXIzNTRPM01GL0lIUC9jM3BmbjgxS3lXUXBLOVNFZTZJVWRaaHA2clhCb1NlbVpXSEExblBvQkd1UStWbXdZQTNNVXNCUkN1UzZFdDY4bFpJTUxOQUtSWTdYRVRrSUFNZE1DUEpPRFhVdEFTdk5jbXduVE9Tdmk3akpFRGxCYVB5aG5QSklHeGVUN2FZK1dvdEdOakl0bE1aRVVVS0RtTnpmMm1ubUNTbGp4ZEI2aVlacURTQVF4TVlMelBZZE52OEVOM1lyZXNiRkpDZVVobTE3ajVJNnRjRHUwUFhsTm1YR0luSm9sQmtwdFJCbVI3T0ZSdGw3Yi9uVVgvKzRvL2tTNlNNR1Zsb3BVRVZQN2tnWGsxZ3hhWStFMTdrendVK080NU5xaDNyQXVwbDlMekt4S1g4VjNKcjdmaDlVemFZNnBqSXJQZ1FRUGdnbTExSG9MZXd3K3d6WlNNaVpCSjdzZVk3MHZ4bkZaVlkrTFNqWDBJajE2VVBIK3lxWkNqVU1saEV6bkNyTEU4bW1xM3h3WE9TdkNBUXN6S1l1NUxjT0pYYUFQYllaVzZRUGthVHlEdFZDUmdFdUo0OFAzWUZSZytVeWwwa2w4N3RlZExjaDBhSzROeW1SNkFJRng0S2d4eUNnZnh2Y2FBeWVqSmhlM0pFOGtrNVJIYW4yOW5IOE5VNU9ORjVISENwT1lMdmxxMFJ3SVBuRXNxa3RCaXRBditMTUR1RzhHcTBqcmE0T0lHcmhaTjNlM2dmTlJGYXh3Q0JOVXp2VHBKYm84NVo3NGI4RFcvYVYxY2tPaXdXWllhNE95eUo3WUZpM0VraEppUXZhV0tGSWlMN1lHQ3FCeWVWMkJTN1JIcXd6TndxUGxsQ040bzZFRDFPa053WEtyR3RPd3FQMGJoTlRuVFZTdnNOQXkxY2ZDeXY4WmFXTDIybUNnRm5iSkNmRnpjZGl1OWZrWFBGWUcyMGU4TGFoNG9BVDJQbkpoVHZZRW1LLzhGN242NnBUUjhRdEZncVNyeWNwb1AzNVMwQmx4T29NU0ozcE9rY2czZ3A4dkNMSjVRckpuRnpnWktQMnNhUXhDMWs0QU1mZG04WE9pK0MrTXZwOFJ4bnc4Zkt0d04zREtEcjNQK1pMRTFwa0pPSE1XYkhlSEtHMy9PT2lIQUFMMC9qeGlBSlVDMzUrcFVZSDI2U2Z4MzRoWmdadDU4MXlGWEhGdFQrTytPYVQ4cnpRTGhtU1J0MStLNm5PR2tHV3F3WFgrSjR0OGNwTWdyVzF5bUswcldJWVQvODArVTliZllzK3c5RER5cTBXSzlhN2RvNTBOR1luOGQ3VW9DZVh4UFdyQmhwbHorZVZRcVNhZTZNNjJSa3RINHhzR005eFltU3dDbXhZOGV4ZHBuM1EvTmJNaG9JRlB3MHprcGdWcXBFZC9pWEo1MVBVQkRGejNDYW8rcUpDTTNJNlhweEZia3pIYVR2eUVWS08wT1FzL2ZlLzliUzAramJKdmFXeks5SGtuRFp4T1VkRkxDczZ1L21vOHVyamZ1R0dzbk9Gcm9DNG00WjV5eG5IVTVueEp3Q1huVzNXQ2JNMHNXVE1kNzhYeUNqaXdsRWtIUFBNY0FEejgzbUNFdE9EUk1QSXhQZSt0TUhHUkFvMmlxVGl5dTVSNTVkU3VtL0hHdnlNeUF1cE9HVVlpOTdtanBsZ0YwV0wxbzJXdjBUUVdmSy9odExCMy9NOVVsQVNia1l0OUdnNE9wZzFtanl5NFIxczUxK25xQnFTdVg5QW9QVTB4eGpWTzhaYlRNNG0wNStPeEs3THdoTHZtSkpVU0g0UWh5cW5IRjNBWjdWK2xud2hBeDdiUmpyVUxLaGtzV2l4TzBjcnU2clFybk9vOEJhU0NuWWFVcWYzYVBBRzR5bEc3NGhyN1ZRMDh4THVKbWUyZUs5bWluMGJCbmd2djJlMG1NdlF3bTNVUXppOHVGVmVXa0hMNnhmTWQrKzZhaFNuOTAwdzJVSEtMc2tTd0lIbkVQa2pldXg2bnJrUjRZR2x4aVk5dDdJcmVOK1BwRWlGSTM0TFYzZlNKaDJBN0d5UjYwUGQxWXluYUIxVEg3SDMvdHVOb21TcnN3bm1XQ2dERitucXl0M0UxckIrYmUxUFgyNU40TzdQQU5TQWpxWkRBSnZ1OHlaSytUemNoVzlwaFgwZmxoRmFNUCtmeVhBZnpyUDdyYzBTRVRtc0I4STVRa2tVUFZJeklJcVBqdWdlTlRQVHFhNUNOSGR1U0crb1VhNEFRc3dXa0RTSkQvQVdPRmRtUk9xMFNKOWJHb3V3WllkWmFxVjE1d3haeGgrV2JXU08zM1BkUE9jVTdDT2ZpMWh1d3lYOERSWEsxeW9LdjNRd1c4WUx3eHNTbUtWUkpRSGYybml4UllpRVk4dms2QzduVVIxaTEyRjhFMDE0ZGo5TG93K1IxdkFLdlZXZlc5RHdMVFFwZDlBYjBVNUE2VmpZaTBSbUVxV2kxaTI2QUFLbVFWZjFYeHpRZFpsYkdjaTFFMGJYTS9NL1dXZzdMeXVyWUdHRFF2MmRMTzVnZHZhRXgwbFhRRmx5Y1lIMm9IQ2ZjMmc5dEFEQWJvZVhvZ1c1MFE0aEJkaGRhajhSN1F1WCtCS0J0MTZYQzdtdDNSWmhBU0RScHpHL0JmakoyckJleU1pVnFRaUgyeE9ZblNUaS9XSEdOQk4wSEZGV0pGVTg1Wm5vQlNFUDJ5ekE3dlhpbURBTmVBbDMwTlN5SjdUWDFWRWpuSTZ2RHFzeWJCUFJ6Wko4c0M4Y0FOSU1lYnlNWDN0cE5sRzk5Q2Q4REMzTU5rNjFRUTZyK1IvYnhxRmM5cFhaZnhUWEVKSGw0a2FFS1RhQVRDRDBlczU4Vk4wUzIzcHRhUDBwdldSTmcvWFd5ZXpvQVhMRC80cFh1SkxmVmliQTZoVWVISTB4NlJhblZEbzdmdklONEtiVWtaMXE4UVBxbmY4Nkk1OFdsdkc0ck9JK0V5bjVkT0lnK25UaGZBb1hhT0wycWtmTVVNUVZaNzJOcXVnRVA5Ym81VW5BVGRJb0lhTUF6d1ZPZHJIeGlhdVAyd2xBT2g3QTgxNnI3Z09zdVhhR3plRlhEUEg4TXYrVXN3dzMzMS9MZEhLUGZ0Vys5aE51RFFqZkZQREtRTnJDTW9nRXNlZXRHZCszKzdnRnoxdWlwUWhpcWo3REEvRmF1eWh3MEJzSW11dGxnUkV0S3MwdWluWEF5cmJ3ZlY0bDJ2dG04NG45YUxKaWdjZkdIcHBObnFSc3pnc0kxWEtkWnBMcG9wREcxMFBldWNaOGROSis3b1drN3EzRnRNVGI3UUh3MG90Q0lweENkTHc2SGV2eEZGU1IzYUtTamE4K0xvdUw5NUw4RGpreGtwdExIOHpTb1JWd1Y0akdqUXdnUlY2TWhmeHdzUDJJNW5WQ2xzZlNHc3c1M0sxbHc2YXk3OXFpcTRPSCtFR1NOb2VpdEtDcFZGb1l2YWZoVlREeXJuekdtT0phQXNQSW9ScExSa0VUSnhDYUg0RjVMQS8rdFVoRHlhVFRMenorMzIzNmhoaDgwenJ2M2pxUUdmQ0ZpdXpHeVE1YWh5Sjg4bWxMeTV3Tm5GdXZGcFNDUkhNMHgxYjlTUGV3RS9nSWtBNXNtdUxsWXBBd0MvNFVGUWVXYUFlM04yc3ZPWUZNRzRhYng1WmlBR1JLSDVMU2VDUjRSU2libVZKSDBuZG50OWFzMnVOWmp3SjF0ODh5Kyt3R2FZclBjMnliQnZPYXF0UG9tSUROODNDcy9PV04vU01jTStWOWZUTXBuVmM2YmVRZXdtTjMzSFQxeGRJRDF4bVhvdkdHa2RvaUZpNXJldEthVXgxaTg0K0VnWU1WTFhhK1d3ZHRpdStuUUk4S3BLN2EyRlViY3NOcTJuK2luNEN0RDMyR25Wbm5XbkZNWm5iWnk2QktqSUNFbEk5ZDFMUHY3R2p6eWx6eGtUMWZuZ09HakFac3dIZnZMaktRREo3RFJsWHRaWkpZa3VueWlvNmsramhFcUJJbHl3bGdyZVBKT1l2aUM0Mm5SMHZ2a2NycTFqZk9ha3lKVHVCVVdRcExQVEVsdWxVQi8wNFBLdnpTMVhoekpHZUxRajhUaTF5MEd6S284OTJhUkpoZFMwWmZtWmJEbC9zTVlZbjRJMUpvTG5kMnh5RzJoWjRCakJ6a3Z3Z1Fna0ZwcDdyWEFKZlA5TUFNYi90WWt6anNjdXYvR1Bjb2xpTHRBeWMzRmhOcnBrd1ByOEwveEV4MFNzUlIxRkxkQThCSmNRcUc4ZDRhb2pDd0N6a0xwSndzMjBaV0FxTHVLNkVQZFdQUWg4eVRQbmNhTDF2UzRxOUNMNzVlNXp5N2lNbzNuM2hxWEZNNWZFNTViV3htbDVlVDFaczVPWHFZNHVKUEVyRDBESGRoRWQzRUM1UUoxMW5lS3NuZFJ1eGZNUEQrR2RQT3JOUTNnVHYzSlp6cXRrcXEzNjMyZ0NtaGltbG5jaGpOdzc3RE1ZMDNvanJhVnB2dVFjQ2NhcWd5U21PSjNYTlFDMC9iOUJ5SVFlSWFUbFFlditPNTUxOWdoTWMwRE1oQkZPY25PeGo2aG44eFNCTlU2VFBMelo3b2xDWlJ0azlITlNSRlgrWDBCYU9VNjE4WFFJT0liT01KeWpEd1J5bmpCdDUrRDU2Y0t3ckVsLytzV2dFK3pqYUkrN1drS0ZHLzdmN2VOMU5paFZDTTJ6QUVybDEzYWx3dHdLbHErTCsxczV4eXNON2N5S0lpa1lVSHBMSmJLWHA4VjNmT1FsZFpOcjRaWi9PN3krYXNYb1lEbDMwQ1Rtc1ZZeXRnbFNkUGUxcnZ0WExsMXE4bmlEaXZtWTh3OW5EYWZma0NOZ1FIWGlDYkxuck15VjNjcUUvZk12L1JQNGlQbFZsWldFVlFUTmo1alk0SXRTZlpSNUEwVFlNTkw3bHNTUWZZVDRzaUQxTlgyRFNkQVhtZm1Cc1ZKNGNpeW9BRkVQcFdhRzBRZW15RDMwRWY2dEViWXdIVms1Rk1ydkZINWdOK2RPTFFzU1g3VkNnK0RPem4rZFl1REJWRjJiSDhPOVZJeng5N3l6S1d4T3JQeGJMWFloV1FWdWpHU2oyeWxVVG9BL2pSUTJUcXIxd0toUGlrY0pwVm9HMkI2VFdiZFRKMll0RTd4Y3BwaFNkM1BxcVFjL3lXd0NwVnNuUUovaG9NWGg3VUZXQXc0eXpMYlF3TkZyaUpKSHBRQ2dJcFdNK2t3R1dKVDJlSzl2aDRCSFVaNitaVTZSV0N2T2VQMm5qaDU4b2VIM01iSUduako3U0h6YXlTMm9iVjgxaEEzRDdseWpmbGYyMTZ4dXFWRzhpNjZVdnNvYzJRaVh2TnBqTzNJTVpWVFBQa3RETFdjZUJMMzlTMXVrMUR2NmJNWnI3WHFlOEtZbUVlR0MyUGFQV2lCUVdLTXBITFdNZHlseFhYTllGUXUvYXRvOXU4aTllMjhNNnVKWHVna3F4ek1UWUxGUGkycDRzVmxOYzRnTmRVeHEvcFF5YzhRaDRRaVR6NzZxa3MvN3E4YUExalc0Sk5aa3ZVQnR6NTVpZHZJOHZ5THZsTnNmckJudTRINFp4NUNONUxFc1FQOWdzYmc0NHFCWVFnRmlLUWFjUGdFRDlTNG1PN2o5K2FNVmp5TlU4M0wxekQwUG93U0kxYW9WdTB0cVdndjMwWDUzVW1NSWZrWTc1YyticVk2TWNBYWwzeE02U2ZaTVcrS25RUG9mSUs1STlYR3ZZdnlneW1zYzltZGlIVWprb2FqL1crMDlvZDRXY1p1VzBPek1sSUlUSy8yTVZNaEU3cDlGeWNnOW5oNEpTVlVDNnlwSGU4THZNN01aRkZQOEtGdTFaZzluRW13WkFwYXVlcVBNb2JDQUNqR0hLNDN5b2lvcC9LT1pOR0VwQWdkUEx4czhPU01CcDJONkNaQzN0aTY0STdkRmM4Tm1BSnJWdnZQKzZRY3BsVTR5YzBISm9oT2pIdkU1Rm5DclhnYlFWY3p2Wm1pOUw0b2lnMDNRbnlsQW5oV2lBOEhETm5aL1B4Ni9ZVk13aHg3QzBuQW95THNjdE5Ualh4WDZ1WlhGYUR0bUdvU3loUWcwbnlYUzk3ajVBanYyU25RVnQ4dXQzcEEzMTVqSGZ5OHcvMUw1em5ja0ZUK0RaTHZnU2lyRjAyNWZBMUthbUNtUlQvRFZ0R0U1WlBSaC9OQzRjWjI1SFlmcmxMQ3EzSXgwREdYRndMMHZoalpIY1ZsRjVQaXlOM0JqTkhuNUt3Q1dzQXd1T0RTem1nOG1yRW1GVC8zL015Y2xraVlDWDNhZUVJUDBVYVJ1eFYrMDAzL001cHBWQlZ4eFZPV2kvY1JOUDFlNVFSRWZjUnZkeWpReC93Vy94QW9pMSt3cm1EWlU4YkVFTVNMT2VucERnaDdueUEvdFc4M2FLRHJJZDFWWG9zT0RCQ04rLy9qMUNhTzhTcmxoWERsc3lHaGphMEJETmNjQ2JYRUc1SmdVUlpTcFNGT25RVDQzNUFCOTJ4R29SSVFHdjQ0Q3Jxa0FXNUwvWTN4K1FIODh6RmdodTlRbzcxQXljUk1odHpzcVNvZGl2bVFqL1hFMnRWNXc4VDlsMFpJbUtpNlZpK1F5dzBIckJoN2d1RU0zdTBKazhIMk1EZUdGdHFZdGtnNG8vdFVybEljTVZsQyt4MUc4NnNiNllPSmQwK0F6bHgyN3RpdXp1M3J2TDFJR1JWc2tHcFRkdVN4WjUxdjdGYmRSSEpGVDZRNHpoTi9HVmlOeEp0MWd4eEYwcXp6TXZ1MTNiNFpQQmJoMWNoQ2NjbHZqVmhjYUhmcFFwWGdnQWM3NEM2TURsTVZEK01GQUFzVTFCTGQ1MWRjNk9zUHdVd0VKdmJ0dTZIOGwvTmY0Y2RPOUdocFlKUmt0YWx1T2k5QmJpNU8ycFEwTlBLckhieG9nazdtc1E0a0RLei84eHJheVBkbzhiaWhBYXFtbkU5Zk4vQUx2eTFkTmNWVjdOdmN6cFJVaGJVeUdUclJVLytyT1AzcDA1RUNtaUFicTNHdWdZZi82QmRTMmplcW83REpvQXF2cHZQVXRHL0h5ZWQrZGd3T1gwQm1QVHZHMFA2bVpqU1lSQ2NMVkwvSVFHNlU1SXQrNmM3N09xakp3QzRhY1FFYjJRakpFMUhldC9oVERnZTl1SnBQaHNxMjBaTG4vakdhV1IvYmpYUFVzUWRhRUZDVURUYjY1dG1mQmVDR1Q3THdTb3JaM3JHd2cyYUhFRXFIdmIveVZwSVR4VzIyS2hlYmszM1kvbFhwN0IraVVWbDZsMDZJL0lLU0hjdUI2eml0eXI4NVhFZW84K1ZsNldwcDRrUEtlOE5pK3hjdXIwbytwOGhiVnJXVGRRMHAvMHFuKzA2UkpuNVhsZG1MYVAxMFkzVkZ1YUZQR1QrdktPQlJRTFhkdExVS2ozT0l3cWtMaHMwc2NtbmxjVDh4L2N5ZklVSmxLdE9TWU5UMUhoSHZ5eFQ0RnRNL0hJMkpqT2Q0RkpuY3lNWUtYaEFTdnVYT3ZDd1dKT0Y4VkwwOS9GZ2R2NGdyRW50Z3haREhwNTR0NGJnVFo3WmN0cU0rTE81ZEpIWGc2TzczdmppYW9wdTNlUFJJdEJ0SHBCSHN1aHh3bVlrQXNPWTFXZHdwQWtWeHc3cm9jMzJjdXpkR2hrWnRYM0szTjVybWhDZ3ZsQ1F5OE9HQUk1K3YzNmFMYzRyQ01GQTdNSXFQVVRiVGF5eUVnYWpiYWpndU55dSs0RDd2dE90N0FtN21GWWdMbjhIK3V2YlpkTTJsdmFFaldNZDdnYVZISm1xbGp6WmdCTXdhVnZGU2dOOWNBQytQZHQraEl1bU5SYVpFWko1QXJqOWlZSlZ0OW1nR1pZTEtIalRNL2xPQkVKbldrU0wxSnNhaEQrQUkzVXlqUi91MjYvMXlGdkpuYk1aQ2xsSWZVQTZvU0xNdS8yWGNWNFNLZFZITlRDL2dta0VRUlNsRGRpUHN0a25EaVRjaGJyYllFN29odXJkVUpjUzVON2JyQk9sS29tZHovaHArV3k2MzB5QmNsOGE2N1NGUTJ6Wk9wOGtXK3pNeFZCZmpQS09LeDVYeVJ2dk5XZGoxWlJTRDdsa05KeXFpUDY1RW91SmcydFJHcTVwb05hSWthSW1yZkNRSldKM1NlRjFxcjQ3WldWeld4anNqM2VPQ3BaVzhpMExnaGp6djFRSk1nU2xuSjQyVmg3b3VueEtYSk1rQ2lrL1V1cjJyNU9ObTg5bWNVaktIa1pweU4vbkNsTU53VVc1M2tRd2wxUm5vaFdFSW1IRGZ6cWNxdzdlb1U5TU1WamtPTUZld3VPbmNEZ1o0QlVUNExWUDRKT2hDM0VzMlYwN2hRb1AwczZkdWlMZEtjbGwrd0c2U1RvK1V4MDVFbEoyV05Ya0hYZi9uR0l5eHhHdGR5OVVPeG5zQTFxMlo1MFdBcnZpL1NzNnpLZUNaNFJmbElyVFFOR0h5bFBVaEVZQk9XbFJZeGVIRmFRT2hVMkphY0grL1pyTzRvdWhXSHdSeHBIT25BNE45M1VOajRNWTZVYkE4YlZZWHF5aU9PVEM3NnNDWkladmVwKzByUHhpWEVPTUxqa3lENytVZnh5MjFCOGtCMWpKOStvRE1GUWgxQThscllSSVJLK2VYbTJ6UkM0ZlV2WmpvOUc4WjdOQmExN0loQk9Hb0lqVzJBZDVDbkt5MG9KL3BCN1FYS2p2d1FNbXpTV1VBa3ZiakVvVTg2by9KcHcybXVJWkdSZHJPSTdBRkpwbi9YVnpPcjhZYXBncGxjdWd6WWpDaGJpNXdjWm8zQ2g2cVJrY0FlZkNYdkM4UXRBWGZuTmdSZURyTVlKdi9PYnhaNGJjOXV1SUpkKzhCclFBbDJMdjJFUGxPelBkaU8zYkdzeEhXWEdEemdKckgzWDJxbGppMkpJZlNmUDhrd25MSjBIVFVlWDlzNzI2dkIrMVc5ZUFaT0tWNEFiVUxPajdLa2xVMGVnNTkzNDZTNjZ1MGdmcGRBQWV1VW5Yanp6SmtMcmRBOC9seGtQQ3E1TWpaaVFkTSsyelhyUCtBbjBlVi9Qblp4QTJHQmxTRW9QVnVOQk1CSmprTEY1NXNWQlBtSTMyNWFuTGloaDVxei9ncW9TVmpDNnFuUGdZeDdhQnZqdW42NXV5MGFVbUM2THNsYTJLRUdyL094d3Y4VW1IVWEwRlFJRmx2REZySzNPR2lSSUhZSWhDaVJ2Umk0UERHT2xYSzl6c25XWmVIaUd0cmdwUEN3VGRvM3hRYUd6SHEyamlMd1ZkMzhHQXV1K1JSUHRKdjIrVDROQmZDSXN3djc3SFFIZXZ2RWR1QW55SGwyUmJqWFRqUURqM0M3cVUwL0pDTnlBcUQwMXczUEZQQnRSTWpXQm1FN0ZPdVN3UnIyWTBuejJ3RlIzYWhyODdPeHFrWnM2d1VmZWpLa0dtUnRQQkt6T3RUaUxKcVladTlzU0dQWm10a1o5M0JaeGZsTWxzVUJxbXlkYjJ5WUFLY0xNQ2I1VHd2dGtXdUZsT0lhODJtbTBmRmkyZVV2ZmtESitveVdlbU91RmNmbW9zZnpldWNpZ0c0R3piNDF4WDVnSGxqcEZwekNkTVVpRHdWN0ZxSmw0Q3VzcnU1K3pJbkdBamZyZGNNenhHM3BSSkxyQWRWYkRoMDNvcGVFcjNhYjI1NmpRaTBUZ3hIeFpac09HM0lSVEw3M3N0cUg4VnpsbDdNZzZJRzcrQW9UNWFDT1F2TkJtanFtZ0xpWC9rZzRDdnM4ZWFzL2o4eDdnZm5KT0Q2U3dFaEUvU1lCMzlCeS90K1lYN2N4QWFwYzZ6OTBtVDF2akxXMEdtdUlGc1VINkRWMk1WZE50dEhLSDVuSFhSUCt5V1QrR0tibmVkd05kWVoyZmNsS1RaOEhGQUV3RFBvTXIzM3FJc1BiblRsWEZEdDdUUWpjSHl4eXBMaktoVkhJZEdoajNubGZ1aVBQQUtYVTVYT2hPeUlPVzFHeEx2bjBtK1orR1NyOWR4VWlqWE1lSVhLRXlyeHlUSmJhOFBXd2Q5VE9mL1hQbW9HV2lVbk4yeE1WQjRoMXVlVnBvT29yUENZS1U4a1JBTVJWKzlRQTNuS2cwc0xlL2lVV0NRRGF3VTZnc0dVOXNZZ01lbjlaZGFNTTNFdFdmYkRpWGtEd21ldUMveEZEVHFmNWFabUI1eHduRkZpUGNGK3BtR3R0cVp0WGwrSWQwQUZ1ZDQveDQrK0Nia3JuMUp2cDBaZzlNTlg3RG5YK05UTUlNbHY5NTRtcFhyc2drR3p1WWhNMU05am1vb0F0WlB1YllWWHlBT2MxTEFlUmQ3NjFLZDVERlhxL3ltWC9KR0JtekRYOFdpKzY4dzg3RHZsaGd0Zm9EMkdEdm12Wm5jbEpiT2dhemZzci9JbnEwWDVBd05JUGpRRkUzSXB6ZWxhN1pPY0pXbFZLOVc0d21pNXIwdWZiK0I3SnNOL1FqdWxmeEtDRXROWUhLQkhtSzhJR1IzS3RLMnB5eUJnc0w0NitTV1lpLzNZWVhUSHB3UlN4TXBxS1grck9XeUxtWDlsSWwyMzBzS2hlWHZqUEl3YzJwSklPR3JZNGM4dXN5bUJpaDQ0ODgzbkR0RFdld3VRa3Jzdm4vS3lpa0Rlc2M0TER0dzgwb0RYU0JxODI3bW5PNE9BWlVMcXpHaEphQzRPZVYrcnNrWll5SlVDQXZEUXliZUxOaWV1cHJjS0YwWno5RjRvTDBJQ0Vld1o2WnVKcTZTUEFlWUJRNVJhQWxRdkpQUFVSY2lhbGl0eXJiQmJFOXBTTVZqNUpoeHY2dGcxS0REelVxblUySENteERpZEYrQjhyNTlTM0FMTDllcWgrUGNvdnJxdGdDQmhuNTBQM2ZuOVlOMjZxbXc3NExPRUU0S3VRVlRqVHpsV3NERHlYK2JIUnJUYXExZUU5WktXZnN6cWpSTldkOFUvRWMxcEIrVG95TWNKejZrRUNnNzd0bGN6Y2thOFJ0MFFxaGpKVHM3L0FDaEJnbGZpdDYzMnViN2E5LzZPK21CTEp3RUVLWlNra1NpUW1CRUhuQk5xdzJCc2d0amtrNGZkOWp6b1NyU2IwSnV0a0lrZzNWc2QwOXk1eWFzZGR2dEtObEtQK01TNWpuN0t1TUI0WkZqc3JucGpGRktlM25iVnpWdlhTYm9CeExCWEtTYXRpMTJ3Wm1GZU5Ld2pYcmc3eHUzMEJWdlRzNFNBT0hSbXk2UERLR0NGdHZJOER6QmVDQ0c0d0FZQWcyTUFNVWJoSndSdUNzNFJsRXdQQURNRHFFRHRickhXVzY1bXRQMGJCeXprWkNIclh2Skk5WVlla3dCL0lGTXM5RXJ3MCtpdzExalBjbEtPdGxaUHR3WFp2bHBBVjhUNmtSb2pSQkc0TjRPZjBBMXhWcFROOFBROGxTbnRkczFxRTZqTGpYejFWZHptQXBpMmsrd3hwSjFiWnljangwUzhBWXVrd0tMZUhab2MxRWN2SjdxRWN1dVZMMEZ0UE9FaWkxU1Y2dkFnNGwzNzNNQkNQWnY5R0V4dDdCWXN3R2p4QUlrTVZNanU1NUoyODRWWTJ1OWo5UzE0MlpmazBXQXh6Z1ZTVGVLNXNVVEhWeVlBbG14bmsvaHFRZWh6ZjVyQi9ZbVhqTmdMZk5KUFF2L25XczlkYWpSdk5pZ1VieEFvaGJadExUUFZRa21qWUo3Q3F1SU9XZ0RoOTdaNW1WSVg0QWcyQlA0NUF0TkY5UzNEeDB3QjdyaWNyM1hweVBSME1taTBRYm5zczdMZnNGcDlzVWhrdHpmTmNCT2VEbWMvYitMcDBtc2FheVFmZTdiQUttNm1kdnR2UEdUZEgreFYrTHQ4R1gvV1lGOG1UbU52a0l4WnBjbnNpMEZueEhyTWJhdDl1UTM4eDJBSXZTa1pFa09ldDNLS0ZKVlp1dEIvUXQya1lFR1lGVWVZOTdGK3d2cDRNVXcvNFdIY1c4QmNVVmUweGhHMGQvWHpEMjk5UmRLSy9OZkVHTGYwTTMyQnR6Z2Q2aXA0MHpXS1kzZHdsN0x2RUJHa1ovNDBXbnBiY2pseWMyalgrSmlVWTlYaERvM1gwc3RQZkJqK01pVnd4bmdHSSs3UmV3RTIxVkFpR1NycWtxSkVBSncvUEk1amYvTFFsc09qbjJGdzZGRW05aFJDM3RNM2VpYnI1b2E4V2FMNnJXRXdoaFpCM3NndjJJUmdLWlpyR2Fvb3Vic1NuWENXSW45Z1QxaWZoalNDc3ZzNzdrMjVZZzRvNTRQMHJ2TXBUVW03MzlVZzBGUGY2TmFuMVFwbkdlV3p1eDltbFRJZS9JOCtkaWZHbnlmOHdBeTNxR2FHVEw2TW1EU3dPUGZXWGQ1YytsTWZFNG45WlNyazFHbVBYd001MFZsMDVMQlFQeG1QaUhVazUyT0xpRlhHb3RBSnFFc2JrMjlMalV4OE9TL3UyNXNxM1VBSU5hL3VqNlFJNTZnU3I4T1dzdWtzREFMYzI3WXBNazlHT3dSYll1SE0rN2pwQ1dHSnNYT2hMNVpGa3NXdy8wVUMrREVIcXN0dWhiREdHcGdxVVF2Y0IyT0toRGswNUdPOE9GNEN2TnBjUkQzMW03R1gzWnU2VWgzdU43QWVpcW5VcjZ0cEpoUkpkb1pxS1NIUW53NGxobHNPOUYzYytSSGc4TTF4SHJFMFh2OXNSYVpraE5LLzZ1bG5zVXoxK1JYUTI0U2lZMUY1R0RYblZVRmNpWmxMZ1hDQXpCVXB5VFJXT1F2L3FkY1h0c1Fac3ZRREdyOGlXYTNsOHdEc3c3K2dPd1NaK2dDbFlNNmdGM3pvaUtTaE9qc1VOa1lKRXVoei9UVndQeWRjZ1BRdkRaWlJ4VE9ibEZURittMm1xa0FWWGVaa2FCZ3B2RnZtejdacHA1d0daUkNORklieVgwdFlkdzlGc09nb2ptRTVmRHp5Q2RNQWJFNDhBTUpjakhxNVlheE1kQ2JkQkg1S2tsVHdtcGVHYVY3NjYwSUpIZnVhQTBzdzRYMnZZMUNjSzN0TS9HbjYyNDBZRHI0OGlQQi9GeUxkRnZlNis3ZDI4ZXlKQlNBb20rNWEwNlhEZ0gxb3kyZ3F4OWtjMGR2NkJ4WlhwQjNkM1krcjI0bm02SW04eEx1Z1J5YzNpTm8xcVBxb0N2OFA3Z2h4ZUp4L1Y0ZGIrMmN0S1lYeUNFTi9ZWDE2MFJETXIxYkE1NmJrRlVCRjhKNWV0eFUySGxLYm5nTlA2N3BlU1ZLZFQxSURjelF0R01qakw4MzgxV1NDK25LdXRWR3hXSXVER2xDUmVhdmxyN0IxWGpxSFg1aS9wczNmeDlFWi9oWUQ2VytydytyMzQvWVJnSkJpcXc2NUdyTGJwTU0zWDROcUsrcWxXeFlBRTlzNDhvR1lYZ09tcXhydE9oZmhYTGZkMG1zclp6cXRwRGRsNS95d0RsRnNOK0pmWVNvMy9QNFhMVG5GNkZPcjhodkVVTUdLWTEyLzcxdnpweDFHSzJuUW41Y2ZMSXlTMlA0OW1uVktTVWptdC84OVJoK3JNb05QdmNjOWlFekt4WHc5UW11REZ6cVlad0h5QWV6djcxUXpkT1JxdlBiNVlWY3lkdVlKci81R0IrRTNuL2hLM0s2YzM2QmFUbEx1K0N6Q2hrUEptcTd5ck5EOStldTlIbDdrMHE4SkNDL2xZUWFSUHBTOTE1ODV6bzhlb1cwcDJURDB1R05WNDhuNUFHRXl0TU11Q2JaRFVIUjhiTitsV2JWeUpNdUdMUGRUMm53ZUhEYlA2Um1ISzJVdTJTck5CejZhVk16bmJJSHFkRXZvelN6Z0t1dVlSeG5yM1BLcWwxNng2bmovR05HV3FsR0M0WEFnN2dFQzNxVURqaytPVURHU1FwdG5QOWsrdjZzT1VicTBvc1NWYlJ4OExmcXZGVXhKMVNkWXZHckJyUjdjeGtGR1pJTGNwaXZmT1FCMnNNa3UxYjcySXZiNEtMNUxab01RT3B4VldKNVBybnRYWHZNR25oS3luS0ZxUXN6WHJFSXBwa0l3dkEvRnJwQ283U1VTVkFnaDc3dkh2RENIbU9NdGxtZVVScE9HazlXQ0xadDJWTkFabXMxMkk5WlJkWFcxWjh1OVU3eDl4YjZCZldpbFY2dlB4SENndGNZQ2xQWU5rbzJzbEJ1RTlZb2IzQThRTmtLM2dJSDhsaGFjY0xYbytUUlMveHdST3J3dzRzTW5CN1ZoVUJ2U1Z3U3lOQ1FsWXZ5enFzcVVoK2FYeVhuV255eVZERUNqekNLWllRZjIzaXRMWVNZRDQ3SVpGQ1gyb3RxamFuNEFYME95ZE1WN2tSdVNiZFRTOG1pM0RJVFFHRnk1VXg0ZGxoUDNvdm11VVNES1ZLQkRhelg4NTBxbVN5Mi9ONmhCd2N5UktCaUZBMUREQkt0VHN2dC9qU0o3MFRUY3NPMys2eHZHcUZDN3lmRlphVEplVWtoRWxZalB4aFFvUEo3d1hkZXhwL0xZeGNjMklObmpZRWFTRzdVYWQyeVM5OXFvS0tqcWx6Y1IxbnFzNElBM2o1TjJHaUdlQ2VjUVlaUDR1a2ZybklWU0FLVDNNdFUrb21PeFJFQXBwSlJUVjl6OTRtWlJIZkRkK1h6Z3UrSnZCSTZZaHJMdDFiU3diZDNqTVhGUnRIQnVYanduTWR6L2VkZ0dVYkJBNGozdjZvNFhLYlBtUDMxdlp6NjNBS1JwVm5CWDZWWCtyQXpiQWxsaVdsZnNQR2poREZvR1hINjRmRllGVXpLTDYxUlo2Q2xUeGZBV0JCUXJueVZqemhVVmdjdjFBQmt2MXl1bEhjMlM0TjUzd3RwSktMZjAyUmJsRTlLNEYwb1lySFQvaWx0ZXM3OFVhV2x0ZjNnejBZNitoVGZick9nQ2R5U2FRYVp0N3JrTWdvRHB3WlVUbnlIdmRBU2pROCtzdWdxTm13IjsKCiAgdmFyIEJMVUVCRVJSWV82NCA9ICJOdUxvU1BzN213alg1NXRNSWMrY1VObTJldmtKWXNBUWx3cHNoOGJmOXhVZ0p0NCtQd1FJMGxERVpOcnErb2V4VHBOYnVoYlJ4aXFoMGVlYks2RDlvVUwvTENIVTdRK3FnOWJQckp4bkVIYlk4all5SklvK29XeUhOVTJvb0wwR2ZacUZ5d3ZUeURFVlVzdi9WanlrU0YwVWFYTFp6U0JQMzZoV0RIc0F3OFpDRFJJNWg4NHJxS3FUVEczdnpESXg2bzg5TWVBZ1Evd3dLdFl3YWV5SVFUOEZ4VkJsaS8rWklYS2NleksvSVFOZkUycUIrTnE0TmcrT1dIK1VMMkpKaUxEQTBVTkw2d0I1dkw5Z0dTcDI0cnQ0Q050NW9sZVJtMzJTeGpiNTNYWFZtQVhVZzZ4M08wU1ZSclByYUFjeUVGZnBpZGY5T3dHNXRZeGlKMnRpMy9QbkZFakVUSDd5d20xTkRiZ1ZVTWlQdDdjLzFWV2l6NWlXTDJPV1A2Q3VWWjBJVytacjdiVGxJSnk3blR4VDNZbWpNeis3M1hoMlo1QjRXVTlqSmhkZlV5RkhwUUhVL2Zvb29JYzROQlFNcllGZ3lBbWhQNGU2Q2xkMVpLYkJKeVowTytleTVveHFFZW9pcGU0dXhpb1R1aDRyTUd3eHlzLzgwcGlLQTNYQmE4Y0JQQ2Q5RTUzN0hRUHlvRWFZZGV5QlVydmNUMElxcnhEQnFLa01YRjBNdHdnc0kzZVJFb0FrbDg3UlNsY1pFQ1JsdFI4TUFOcDFPZzRtNlpibnZHM2UrMkJVcGxkNFY1enNzZE9PWEJUbHZpbk1DaDU2YnlYY1pNODJTN2NFUmN0aVNkcGNJRWxDVXBwSXZSTVNxbkswUEpvdVZsZE16c0U2WVA3YVFTMGh4bGthNEwzYnVMUUxac3I5c2pycVFkZzF1MVByUnQwUXprdlhrYUE1SFl6SytoejJxNjdKMkFOdWVubURYTkh4QUhnR1h2R1dYZkJ4WlVMWTdlMnVTNVRvT0RuMzdhS0krTjZYL3VnTy8xc0FZLzJKeG5hQ2swdnIvT0RxcllUSkJJRysrQlN3QSttcWMvdE5EZkFPTHNpekpCVjNQTG1TVDk5dWR3N3VZZEVXL0hodTBkTlJRaVVXcngyRWNmZENVUk40MTZGL213SW9iQ21zcktjbVlkbWwvUFNRV09uVDBQM1dZUjd3Vll4QmxIaWdPcUlxdGM1RzNyZ3Z1Vm5xMjloVURoRm1ubWtFV3RKMjdnd0tRdzVsNS9Ndk9ORzhRTEVseG92RVpRRVBhZ2NyM1NxTU85Z1FQVDVPSjU4RGZnY0ZzYWFpWUFNK1lxWEZtQXpoc3ZEb3NENXdZS3FoUlZDTTJZRnRPdElSNFNYV0FIYWROaFB1UE0vZnVEWW9FVzV2dDFJYk1Wby9MVGZTdGJnR3VDeXRjeDVnbTJYelQ2T0VFUUR2d3ozR2dBd3h4aElJQitMZ05tUnZHdlVnTmIwVnhBNzNlZjhUakY0eVRvMlY4UzljS0hrdTQ3M3BjWVAxYnJ6UE13WE5uZGhjSnBlWDFYZ0V3QXM3YndYOFdNZ3RPS3lPbWJlTXBLZWY3U3oydU8ySFFFUXk1ZklOb3YxZm9TZlgwdDl1RWJNSUQxZzlBbzZkWFI4azlGWGVNVzdGS29nc0x6Q2xBQVhldmNteUl3Wkw1NHpvMDFYckNWK0pvdFB3WFJWTWVaUkV1VFF2ZDdGdnNLdkpTaU11VitRRytwM05pTWRRSGJDMEVEK1ZXV2RJVkxiQ3F2djUyTXp4M2R0ZkhWVE9kQ3JyY20yNnJuNFo2N3B2UnNBZ1Y4K2JRS2xzdEtUei9MQ2wvR2RCaW15eFhON2kyWk1XbUJsK0dDcEdHak9vSXBWVFpVUFY1dDRRS0JKMlY1M2xreVJEajFhM1R4Y2pTOFhFdXM1OGliNGkveHJQY3hTcDVIMmhORk82SVhudEYxbnQwc1VkalZIZm9kZnJGSXNKOVNXcGlvM08wSnNsUWo4bWxUQXF4NVkwT0JEdXN2cm9vQm9YRHFzT21NSzFLa3pYendiU09SallvV2t2Q3B4RlBLd3dwOStVMUdKaHZaZzF4QVVEQzFESW4yM2NhMVBsWFZjL2JvdWVNejEzaHBwNVFJSkI1cEF3L0NDZ2tBZU5Od01aaUhFTW9FcTc3OXJ5Z2I3YWNBSkEzZE9adzA4bmVXckV5K0MybVBKV3dsaHVHejNiS2Rqb3VsdkdCa2dJQUYwdVgwR0ZsTUFQbzh0Z1czVS8xalFoano0L1dLSWpvZHRiMnBJZjBQTmRYc29zWWN0MDQ1TjdaNUtiR0x2aWJKSDJsdmpYa0V1TTBnWURqUXFNZk1SMHdWUm9vRDJjRnJ0c25GcmNLcmhFc1dkWVlxTGo5YXl1ckdrV0p0dWpadTlUUnJJZXFRa2VTeWdSaFVzTGpDUk01cTE5S0pKWm5PTE5paEl2ckxPb0lhRkdON1hBWHNBMEtqbCt4aFA0TXhTZ1FWbkM2aWs4NHpPbjg3TG1qNEFFd0pXRmtMbTgyRC95MDhsM1pWcTQ3WkdtT09LTWZGNHNBTlZ6WlBBVitHNStSWDFGckpuTS9vdTNZcTAwaFdDSFpZcWNvNVMvUXNZejJ2R0FLRUN1bG1BcU9tNVNCVFlXaS9OMndVTjQxN2h2VFpha2NsN2FucWYzTWNRYWhkVzB1Wk5VQms0Z2k4R0NpV3RyVWp1UFVVQ2pMcGR6dy9kaVdDSGlZbklTMDFzVWFqQUd3djkxeUIvbjFOUU1pVzFNbnZ4amdmOXNic2M5VUwrcFJXS3lpTXlOaGl2aWY5Z21EZldiRk16dEZERG9yRkNJellIVW5pMWRjN05YazdiQ0c1RkI4czI5NDlPOTJDeFA1cXU4VDhweGw3d0djMEc1d2dhM3ljSmd6Qm9zQllOTVFINmJPZUR2czM2WHdpVjU4dG5ScVgwK3k2dzlUdXZYVTdRTWFqdHB3UkZpbTlURDJYVU4vaW1xSmZienZodlVqQ1VZeW5TTDRSMlpqbHpnbXVVQWJ0ZHVSYUJqcmZqUlhGcXl3YmZ1RnRnTmxvbWo2Z2RvL3dVdDRHQzdrUFI3OVFndjE5QVVVK1VKalVVdDBuRDc0TUVCTFplbEU3d3VRbWhwSE02Z1VVdEluSmc1WFFkK1hHSm9rdFVxeCtlMnVsUEt0UmNibjI2d3RScE01QTJTZDF2alNpYitYcUdaY20wSmlDVHNzQ2FLcWJsWHp2WFBQWXVJQzQrNnFwZFcvRFJQdlhpOTgrMTNHMkUvejVLcy90R3JpMmVDMTc5WDZGSkZ2OVdaQ01EWHNwbmdEVzBsL3ZHSC9pOTJ5OS9PSWRwa3VQRVNGMGY0Z2JpdkZzb2l1YmpZeGhaRy9nMjRJblFLUDk2L2hYayt4MTlQemgzUzlsL1A4dFh1WVdMYzl2TWZnalpBY21GOG5MeHIyd05yazloN2RBeERvellaTEcxajFmMmdJUWFvK2xVdnlTWU1ka1pUcjlNRDd1RW1NZExLUTRXdXBVT3lnTHpLK29Gc0RGNGtsTkt3L3ZqWm51ODN6MUpvcDdUYTkyNE5oYmdGMWFkY01wdzdJU0RYeWd6WHJJREhtc3Q2Z3lrWDltMEFrRCtDNE1jMWpYV2YyVElRN2hyV1hFekdFNHBZZmJOSnFVR3dpNkEzYzNIWWswWkNwZjFQUFEyeHhUWEEySkZlS25FTXNVazdiMXg4NGVQNjRoSGdPcHRweDZhOE4yQktZZzZtWXpkdWIrdEtmbVAraGpMQk1oTllnaTJuL0IvdnlFSC9Vd3MzQnMyS3YwbG9RTUpXVlpFVEdUV3JZaXlpWmZCWGo4U2FmZXFvV2N3R3dXSHJIbnNsTHhOTFJ5OGVoZmZ3cEUxWUJNbktJRG5hMWhLdXFSdGtBM2hNM0pGZHZMMFh4K2MvMnNJeXZ5a3NQSXROQysxYUcwbXNQMW9qbnkySkRYS1VFTU1TSURVKzRrM21jVUpleFhiV1FmMGtzdEcwaDh4S0hXN3RtTjRIOVNhb3RCQnhZQkM0M1JyRWhPNFkyb1lUQ1FIendmckV6UzF5N25VdEkyUzNWaFF6WDltVldDZnJZRCtOekJwS1pPeGtBd2tPVHZCNFB6TnVqMkhvVGRyLzRhanRESGJFTS9ISCtwWERzendoMFNUYXN0STMybkM1Um5hK2RzSzd4bUJUS1RVdjk5RTNlR1JlME1xQUdCODBYZjBkMytSMGQwdGlQRERxcWh4VWFTeFAzR1FRUXp6VEF6ZklLcVplMUVKb204RlNuUVphK3lUOUhQUUlicGU5b1NXd0N6ZkJYZWpROG1FdG00Y0VWV2VpLzdGaU44VGgrZm16OUd4cXZCTXVRNmkrMStOWjNUQy9sZFQwbHE0SGRURmtveldnZ1AveDJSNldCcHhZSGd6VGN4eDBIZjV4eUtPS3BsaFIrWkFEeXFIc1RoY1lqNTYxanFQYnp6bkc2RWd0ZUFKYjZ1bEk2SXh4ckdLakVSQVdCSWhCY0ZTY3JFbjlKVEwrS0w1cmZjRk5ETXMwR0w0aWVkUTdBdXlTZVZxcEZtV08ybmNXa0pkOFZwVjJySURwSzY4ai9LTWhKQjNUbEljOEpGUlRnY3hhVXlqNVVqT2pPQTRBNjdOM1N5SGJoTVdLRldWTW96QmRtUzcxbTN0dWdEQXpJT3N4NTB5L3p2bTRmVWt4QThoY24waktPQU9FTk9yS0czQlVsZCtDSWNGaEw2RXBOUzU1UUZBK3lPWlVEMWhmTnJadnFRdUh2U1V6Q0M0Rkw2QWV6WUp2aE42M1hTYVk0NW52Z1hlTXQweVA5WTJ5RGxWYjFrYURPVFdZOFJmV2NFZmJ2aVNMVzZIUGNWL1c0SUYycWo0OEdoUVZVSWVRN0puUmllUTlmRWkvV253eVBtVCtKMTUrQ1hmSlQ0a0x6aU5ud3hwVk8vRjdaQUEzZGoydHk2d20wWS9RcDJQSnVUWmVkWVd0WTEzWERQR2Y5bkcydWtBZTdSbWZWdGdLU1dSSUpJZm9WL3FEYWRuSUYrUnhCNUtQRlJ5RDZWcHBtRE4vcUg5L3RDWXBacFdibmZWSnh5QXpvcmlreHZUSDFVRmEva1lDWEFYbDhwY3Y4SEdFS29mMG8wSWU2N1p5akxzK2lVVEV6dDR3RzNIcjc3eXFaSEVhWVZ0cVNWQXdONkxxY1YrMGZYNU8wVWp5QjcrMyI7CgogIHZhciBCVU1CTEVCRUVfNjQgPSAiLzhmcS9vbEh4d3pEcWhQeVVnRzZ3aDF1SHRkK0RTRWxtMTR1b2dEN2QvK2I4cm5tV2xVYk43YkdxSjk4VGV4cFB2b3EwWm1ocmIyVng4YlA4bnJ3dkljQ01iNXZqVTBNa1RXWFRONWRVVjQrSW5kbDAzRzdVUVVXY0RkdXhycnBydEtyRWgxVWppdlVab3I3QjU2U05vb2l4S1QveEVnc21FZUhYSVVGRW8wMHVHVUFuOUpjL1ZCRkNQQlovcXBqbndpY2tuUkp4VlNBREp1REhUZnZuRSsrLzdhZkt0bEIvK3cxM1k2OGRzWnIybS94N3JZYXVrMWZWNkt6akR0Y0VyV3F4dEV1VGI3MDdOTm1qcVdpUWRrNmMvclhtN0cwbWRDU0dNVUFnNGh4cjFBTUwza3VaUi9XZjZucU8veHhCUXl5WUszdXZTaTdjR1VWbGt3djVCbFhSeDJWRUxaVXJuWGxmRUNxb2RzWGkrNnZ5RkZWWjRaMnZkRnQreUV5QnpjbnlES2ZLUTh6eHRxOSszdkdGTTlEZXlHeEp6ZnRmNEN5VFFCelpSSXlrdkFBZXdwcEhVQUNrYVRTM1ByNEtxaXlKRFlmeVRXRlNjSk5OZlBkdmZ3am9heFZ2akhKOWZYM0VqOHh1R0hZbjBPNzM0a2pUcng4dUF0MVNCamtFN2EzbkxLRG5aWkF6Q3ZpUGVSbTdhaU5WRWVzUk9WbXpnU01KWnpBSm9od2hhMHBTdHFiNDlJam96Z2RDbUNRbVJLd2x0U2xJdVZWaHZaV2NlN3ZRd2NUcjRXQmI3QkQ0LzdBT2xwMEZpeHpmTTJDcFFKU29tYjZIaHovY3gyS0ZvNzlhcjlkTS9rcmpNVWpXbjdXMVRwcXpPdmw3Y1lDaFpMd0FCRGR1NWxuRzI0Y1EzaCtpNEhGT29LWGp1RFlUZS9rSTZhMDFKc2dtYTJJWktnL0QzUWlzaXEyOE1ISVMxWXFJY3JwQ1FqdWgyd0ZuU0t2TG11cEhYNk11aUVVL2VJUitWc0pJUEJwWHNHVDJYVjJYOEU0T1JQc0pxY2dhcWtCZ0taRmptRFJGTzhCTlJwRWNnQ1JUcFo5ZHQ5d2hjbFlCWHc0UE45MEcwRWQxWnoybkk3dTB1TXNpdFovbVNJbmNSQXdRR3JRSWFmK25zaitQM0M0ZGpaeW9QdmgxNG52NHNBUEV0SDBlSVl5c05DRlUxVHNkQk8zblVyZWNGVERuWm9URjkyODh0WXBybmh4b09LU3ZQaVBzM0gyY3JMdkR4bmhkdnd1WVJ0VlFNbzdBd1Nic2dudnRiNlBPSW5jOVEySFJsSkJYTCtRZFZwTys4VWpNRDNuSjRoWGV2aXlCV3ZaQ2NRNG1JVlFQSDlNeUFpckZhWDFHZ2dPdloybWNyRUFKN1FVMWFhNjA0TXQ0eW1tdWtNTjBHdW80V3VOOUVBNjlTcjFFdnhYVWorTHZyZG9pbDJIYjJoK2NueERmRVZZTWRjSmZDMUh0UWlnbHUyTjRBd0NZQVhDTFNBQS9ma1NuVWFDL0RrajNacVJhWm15VlBtN25HYVBVQlZFcmdYNW41TDVRZGdWVzhFeUpRTzNEQXlVVk9PQVNDenVQRXZPWnFDVVpJckY3cGlwUnE1d1ZiUitSWnNFNjR1bndmZDFTeFc2ckZ5Ui84K29tZGRFdUlLOXRsNzN4SHErWWgzUGtXamVwaStqWGFydHRBQ1VRYjlRaUcyaWJQUHVuNGIxOHlERjFWYlFTREk5QU1zMmN0Rk5qUkRHemNNTFRqOXVLWjJ4UGtaK1JjYjRVWVZrNGhKUVRiQitxaUsvZ2lyaXRIWTRtWWp1U3ZMZFBEaWkxbUNFcFh1ekV5enZTVzI2RnRIeGJOQUpwSnRLeEs2eWFqZjRpRFNmK25MZFJiWU84dWswZTBJRnR4Zk56bFhiVHZndmJQWEFNUFFaY3hPQnhrR01xeXVTNEI3RE5CaGM2cUJtZG1IUi81QUl2NVV1ampZZW0zTk5FeGZOeFRHUDFmVmt6WE9tanQrM0E3WGNOUmg3UGhmSWU1amZLa1NTbkhTRjNOM2l0SlpITUk4Rmc3RzV0MkRyaEpmZ0h3ZDAwNStYVnI0aXVBVUloUEJrWTQxT21qYy90dkFRZFJpVVd3OTFmZ2cxTlZsMmovaDQyQkxWQzRNanFyVnM4RDV4L2JaWGN5dkp5Ni9jdVF6RU51Y3UwRHBBSXhBc09kZG1VS2NzQ28yajVyc2x1WHJ1czNsTmxpbE9IMjFOKy9zMWZLRytKWGlNQmZJWFdCNXRsYnlZQ2FCL3BrNkovTm15dnNiN1pNNmtUSWlsYkJuUW5uVkdTbVRlWUNxTzN3d0l1bzFEa0h5VkNOMUlkUzNnS2ZYVW1xcG9BRUQvQ2Z3VkhTekc3QiszR3VyeEhSSFVlKzNjMWh2T3A4NFBnd2pKeFVLc2tuaXB6cGtQNzJrbS9kNjFtV0QrajRvWHFsaTFnWkg1YjlOK3Bhais0byt6MFRzc1NoMWxMNjlRUDZTMDlxTHlyRkFFL0Y1SXhiUEUvWmh0MjVQQXNvUGdZZ1FNZkNCVWhHajRrUjd4M01renFnNGlMaGR6NmhFZjZHeWQreVR5R0hzcTR0STkzaVVSVVI1MEhhN1FoSE1xSGpLM3I0MXNwV0FXeU1YUlZkMmRNMHArVWxhbWozamc1d1ByaFJxRitPRFdFR1cyNUVScHVrMUhudTdpVzgzUTlXZ2RVampuYnhlRnZuMW9qTGlxV0g5WEpxZHlzcE5aZTJDSC9zVEtMd09pbEhsbnFDWEZOdHZUSUt6SGVGQmhFamdTOUxhVUpJcG9LVVF0cHB5QVBvSGc1VkZRQk50VnREaEVwWWlySVFXWUlFWjVFMFlSU2UvUlZmcDJIYXZwQitEWFIycnFnS295dWtqRjZLRXY3M1dhU0JJdFp2NGVlOW4zYUkzdXQxNlpWWDdzejYybkpnejEycmh2K2FaZllGRlM0eHhMWmlwdFYremdSbHd0Mk1yNWNKajJYVTByZFMxTUNBQVB4dEJFV0xUN2MzQXI3R1BocVd4L1FsN3cxM0VkMmZqbzF4R0dReGNHM2s1SkhDSDhkWnRGU0kvM1p5NWFEb2pPT2V2V1REUVdoRC9ZbHU4RTVocGxxQmRxdHppU1NSdExIc1I2OVZhZUp2MCtTZ1VVL1hzdXlEYThmR2E4QWcwbGVubFNGc2xiS1JhWUxoUEM1RUtuRXo5YkdaZTk4V2FQMWdNV2tpSTlQdWF1WlI1djFqSUNhRVJ3NG43c0JMTkx4cGdnMTFNUnRmWWlYdFVjcHY3M2JBcjRLaEZEK2FTUGkzd2pNS3lGWmFnazQ5eDdWbDlzM3l3UEFTSTdVMnBlZDZrZDliaCt1Z2Noc01sR1d4WE03U1NHOE5RQllSbXltdkxtRVBOYnNwbVFPS3crL1JRSFhUUWcwYUs5U3FXMVNYUDhUTkVvcDMzcC9VdVVwckNianFBbWdIU1c3OW9nZUxYNWRSZDFGMmZCRjB3L1dUVFMwQjVqSGVYUm5WUUpwTHRweFRjR2YvMmxoWk4rdkJPeDRvQzE5V285c1R5bEk5dGpyWkVVd3pXbTBMRXlKVjdkWG9vYXpRMTJLOGl0dFhWVWZaK0pkSEo2WTErd0VQMVNqZ1dWcW1NQUJ1RU9hNGVkVG9wU05LV0ZHaHFUSnRJNGFITmU5SjJ1ZHNlcm9pa0RhN05JbUhCMDdxWldOTngvak1HQjhmK2pzdC9UZGFWUXI0Vy9DcnQwR2xMcENkTGY0dGhUYk5SNjhHWUNRc0dLUlA5OERpNnR1cVkvbCthcHB5RmI3U3VQOVF2Ylc0eFp6SmZUeTZGS0cxditMMnBLR2xVVlVaT0lFZ0dCOWdSbzAyU051d2dqU1VsMFl2NWFXR3pzSUdmWlFXd3hXZlFKbGdQWm42czNuVnMyZzFYaFU0Wm5wdDA0aWVzbXZobHBIZG5PVFh2TStOVGY3LytYZmdoWEQ0RmNkNHpFYlNmSmp5YVFoRXBVa29iWm80NDVSazAwQ0hycUxtaC8wQ2VTb3A3bzRpRzNOUjVOcEcrYlRNbkpsQVNLZ1NRLzMxb2hYVzA0SStGY0IrMll1Uk1wZWFrbkhoaWFjaHRFdDhHaUZDYk5TNlJyQW9tdlh6aWFhdmlXeTJMSG4vYTlWUlFxSjZZWmZURzRYYjkxdFdJRmZZaG5ITEpsMHQ0ZHZYZTBTM2xlamVoMWVENlpSVFRzWWlkT2N2cXBCeEt4OHlGWW41NzFpTmZualMwOHRzL0xVOFFUaEpHbm5aNW00QXp0YWRMQVpUdmc1SVkwSlZ2R1c0dHVsSk96ZEh4Sm1ILzB4TWZKUDBQaVpFNlFzVEpLWGY5bVJ3SVN6bk9vYksvTTJBaTBKWWtSNDU0K0svN0NOSGQ3SzN3ajZJMSt4eE14Z2JQcC9nbHptOWVGaUFKMi92R0lHNGNiTXc0VlNoNUwrRjZ5T29wTkhldk1pMmJCM1ZkOHFsUzEyVnlQNGgxdWdaRWxhRVAwQnpaSXJuVjhhb054OUI4UHRtY2hIUWhKb0dGcVN3VEdTNVVDYzNob250YUVnYmF6aFNNdkRoMEFMcjh4YWVXY1BpcXNGTmZQQWs0N3pQM3Q1TnovWDJWQ0hRL1RiQXU2dklsVzdOZzh3NlBtZ3NMRC9RVVByTjVSaDJhL1Nnd0Q3anhrblYzT2wvbTJzR1NhaUNNWk5BbktVeFNSOVd4RUdtVUVXZWZXeFZqazAwTEtyQU5oNHE0OW8yWGZkWmttMGhTWVd4ZHZvaDVhckIzK0NVZ241Rnh0SVRWNzFlL2VSb1FSVkIrQkdleHhwUytmMHp6eXcyaWhWS2s5L0M3RXhhK3MrK0RRNnJONzcxOHBqUCtaTER5eWZBQzR3b21zNjFkb0YyVHE0YXV2UzYzRW9zcVluRHY4bU51bzhRTWpoRmlSMVZjdllJdnQ5Mk5aUFJDRTdHaGxTQ1JqSzZHUFpSckpkZGVUVXJCWUFmeGxuQzFUWUtTWTBKOXd0VlBLNHFjNVFQTVJRUUJJUDVZN21SUnZQaW9ZUmJ0QllXUFhlbFNIcDRVcWgrL0ZLUFBJMXM3b25OWTNqZmJiL0N5Q3c3Yi96OEZjVTNRc21Gb2I0WWVYM2NZR1IwRlBLZUxpWkNDZlNkODc1RkszMWpnSThLK3BDK3lQZ3pCYzJMaThranc1ZnMwblM2akE1Y25YNG1MU0c3bHNmQTFCSy8xT3h2U3JjMmxLb1cwY1I2ZWxNVUE0dU92ZFVUVXpJYzgxQllpNEQreTdYVVh6b0NzWHFtYlhyZ0t1ZEhtRUhVQ0FISmxBcW8reEdCTTRBZE5yeHNJTGdGZkJtUGx0N2hlbW1mZm45ckxSRjBtQTEyZ3g3U0VRRVFyNlByRnV4SWE0VlRlaDhFNm4vb2ZlZUg1TXlNc1ZWeFhoSFBwVEFSY1FOejRONnhFSXYvdEdMUzBnTmFCSzlLeW9ueTB4aWMxVnlwSXFERDE0c0dDK3l3VlBDZ3FBaWlmMGs3MXk0Yk1RRzliNlhrR3kxcW5uNlRkSmJEV1BiVHM2NjNmNzExME95QXJ0Y0FPb0JHckZTaXFpV1duMEwyU0YrRnF3T3RzNVFWT05tMDZnL3RuSkFNYUlidnNobVMxNktyN0RtZUlXLzZRR0loQjFqV1M4ODgxZUh6dERlMUdhaUZ4bzRJTVNjcTRvRDc4Z0hkcEsyeUtEamhPdFdCeXMzMUcxV2pBcFppb3pBeWUyU1BZKzFtODdWUUk3QjhRNFcxY2FQcVV5cnRqWUVDQncxbENTbnhCeUxXN2JQNlhmZm00UGYrc0oxSHpBOXlIM0xYMkhpSkd4UVlqYVkxYmMrVGNneXhybEk0Q2V4SXFyWm1MWTI0bjlCK09uSk1DRHYydEJIMExMRkpZQWhkbGE1c0ttMElORUwxbzFoclYxd2hxVzJPelNheHI0WmdKT1Z2TXRBZUx1UEQ0RmNmanl2QWpoNkNYY202Y2liNlJ1ODhidm5hTEZnZEx3bS85QmtQcUwyOEhLd1BLRkhFVTZKWUxPNEFwZlhucy9KcjJNWmJpVnppYkdIUzI5bkJDZExnZ2lqZU5IYnNGWTVYUkc2Ly9sRlVrano1aFEwRVBuTkZJeENtWlhxUmNiTENsdkRGcjlVRUFmMGx0V0pwaGFaeFI4V05pYVB0VTMxb2h4aEtNVVRMKzVLL3RQZUVLWkozUVY0K0ZWUks3WW5GTEg2N3dsNVRhdDNKa1lDZGtrNmxnbVhSeUVpTTRuYkgvN1I4MkVZZlJXV0xBdXJ3djJxenRLd0VrRHlMcnk0SnV5Uit5dEIwNytUSUt3RnZITnNvalFqSTNsWjlvY0ZNVC9ibWhwNTZnQ1FUSVkzRDhVQWphYVlyWXBqZmJUS0FFSWdKTjF2ZGVqTzE5VldDYTNJT2ZYcmkvdmd0QUZZTlNQN01oVlgvcTNBbk1PNWdZcHJjWVBJSnFyb0dTd0pTcUVkL2xsNStrcC9FZ1JlZkhkTzdSL2I4d0JCZzcrNkVHSEczSDBnN1gxMGk4a28yNnVtbDlkQTBkaFZ6cnl5VDU0empCNWh2ZTZPcmtVQzJpT3VVRWVrK0NGVkFndjZ0RHdYd0VsbHZuaFY0OTF6VG9UeVdvMjAwckZBTnBtcWdESXVXMStBbWN6MkdXUXRVbGtxRnRrQWJNekJqbXU1NElZNWxqdk0weEY5ejNoeDJ5N3lXTGNLTURTWjhNcmNBZU9BK0xsQ1RNV244Y2c2dll5SjJlZTQ3Vkh6M1NIeEJTSUJ2cDRFK00yanc0TDF4ZHJXUjlKUmE3TGU2Q1N6VUN0U2k5VUs1VjJ2RHFsUDlmMHRQODVFOWdia2pjaVd0ZmsxWFB3WU1tekorWGZKekpIaUdlQjFtREJoQjErY0RoMlNIQXZaMUtKaVFIamI1MTB1NGJFMHlwZEtMN0lLYXlVM3RFQ2wyb1hpT3dvRXhqNmhKaktQSERURWVaZW83RGtnSmxtZ1dIb1JPN01kcGVYcEMyWkF4WEhWVmFicGFWSVNFY1NwbHQyT0U5WjBOKzBEc0g1aGNiQ3Zkc2ZBRGRMVldENUQ3OWM4YzlUWm5WSjByK2JFci9kenM2U0VmVkYrWC9GUEc0NDVOczVCZldXYUtqaFB2SXlMWmcrb2NYTXJna0RoUkU4aWxnQlg2RlhNTnhTOW40OTJsZkhjdU9uSnd2a2ZwK2RCV0FjUVI3VjlxNGttN3hRaGtRQ3E2d2lsaElCYXhTbUhLR2g5MloxZXRZTDdadVI4Tm52ekMwcTBjWEZXQU9qVll0OFZFcW4zby83MUtKcytpK3l5QndxMkVCK1JCL3k3L3pHdDh6TkJENGY2U2pLZzF6Z3dqbGVtVEFmVmRyYVgrYXFvTTlBUXJUbVkwK2kxV203YVBEeUxpMVZhSm5aRk10cWt0MFBWWFFHNkIzR0Y1TEpjbUJyQnhRY0JROWFYKytqbElVaUl0dTlEWkl2Yml6QXI1cDNzTVBCcEhKTytyeHE3VlFWTUpsTTkySFlXN1psRTFmMVNhUndlSDdaV0trUWtraDB6SFliK0FmMW94SGMraXc5WlRKaDBzdXlUZ2ZuNTR0U2pBWWtVdEZrQ3B0SUZpeWY0S3RlaEJvbjgyTTdFTDE0QTFMT21aWnRheStGVmgyQXY4MUNyOTh4VDlZakd5ZjRZdEJlTlViSzh6Tkp4VjFscHdKUkpUSzdBZFVhTEttZFBmcUVaVmlrSGRSZmU2bkF3SUd2dlpYZS9LcEpTNXhwYkVkSTV1V0tOa2w4V1lOVDhJcGdDYXlKY1oyRkZSZDF2c1pmbVBCMWQvY2c1R0UwanR2L2FLMGxrSHVuYjN6YmdON2RqZlBCOVhTaFlZSG1xdEFrWldTNGQrRGNJSzdCWG5QS0Z6bGIrWnpiMDhpTTQzc1BVYWhJaVRVVytOSm5VSFlrWTdKakU1TWJXU0ZTOWU0VXo0QU12S2RqNTVSZVcxMjNlVEEzdnFvbEtqbkcyOUdCQ0dGdTdzM0JCcGFzY1R0bmZndU9MNHEwY2VBK0ptSmEwdFRncEtMSDluVVY5WWZjQTB5UGFPcmt3a2MyZnpSMk4zRHNsY0pwOUlWZVdCZTJJY3RVNTZtQWN1bU5SYUxpQjl1ejhqaEZ4UGlETmswSGZ4MEh1NHZ5ZjBrYklmSXVTWUpRcjI3UFpmSnZwUXVpL1cxLzdZNS9waEF1N1Jid1E2RUUrbHZTQjgxMFdCcGs1YXRZalNsRWF6UW1XbU1SSEE1Q2xSa0p5VWo2TXlGeG1CYTJ1bm9Nc05qSDVXZUtjTmpRVXYwQVRGV29QNDNMcXlxM2I4N0x6K1Iydm9raWpLWEsyRGw0amVSUmowaDdka3hkK29YV1ZZMnpCdVhoK0lCR0lUdm01SWFkbGtUREViL0lGOUQ2L05TQjVxR1BHOVZ6SlJiL1g2NkxnTERBTGtWZ3dLYmZGaU1ZTW9LOXd2YmJpT0ZNSFpHM1gzNExpS2hIZVBLY0QxcldDUFo2bVlwT3o1UGgzM1lNZXEvbVlKSS9jVDN0bS9MVDFRT2p5WE9UN0VxL0QyNHhtRlErYVppRVZtbXlqVEN1bDk0Q2NHMFBkSFVMU3M2Q081eVVCdkwrYmYvcEl1bEtZN29FSHhRM3VjMWRwZEJXRGVSRDhYRURDRG0vOVh0aWFpWkEwU1dKYlRwbElVdnFtaWUxRVFBN215dkFrS0pHUHcwR21oYkpoQWV4NmRqd3BSOTdpMXlTdmMybU9XZHVEak53SHRiaHdvM1VFWW1IS0lhYm5qQ0ZrcGY2S2NoTnRPNEZkbUtXalB4VG1iZzVYR04ySjVPU2NuT1ZTOGVCbzRxVUNOWWhYWWFzNVc1a0syNi9yTVhkMjZrZmxzbURyWHRabzhyOVJkcEFqRFZPdFUxaXRKM1dsanBNZUE1MDhwekhvcmdhdTBSQ0hnU1ZtcW1iOFVaWCtxZEc5dE9JZGszVHkyYnFXNXRZNjVIbkRkQkdQSHdKUGx5Rk5mTHZkZ2dBK3dkbDBldWV2bXFyNHQrdjBvN2Rsb2VSYnI3eTJkNkRTNzhYeWVpcE9zWmdJR0VVYkpwR2tCMGpsQkRJWFFNTGhjeERqUE44VmdQeXdVY0M0d0ZuNXBCaTFTeERiNnZmVjM5RHgwS0tBSjI3WXlhVjJLYmZIZGVESlN5L0dvbEdmTEVMT3VTL3dGblU4RDBWU2VVbDFmQjZ2ZEtkeHhDMEVUcGFOZEJEU2JoTzZRRzhvd2p4cHNBSU1KZkVRM3dlbHpMVWh4VVNveTdUYVprcVdyKzRtSTN2Y3JUTkpUcGl1dmVQNEdIWW5UWnVSYlBrbDZGN2d4VVZrL2c5NThkc3kyamhlQTcwTVdZdnlJdFpNSTFPY3FrbUFzS3JNK0tQZGNPTUlQaHA2b1hWR2wrWXViZjhMTTNaL1JjcXgvZDNFYU4rN1cwV1ZFZzZZa2NzZjR3QmtZQXR6ZmtybFRXS1BpdXJlSkNGQlltYy9XTGROTDJNL0Fqa1Fpb2lUUVVGa2EzaHhoL0V0L2ZyTWI2ZGQ1QnM3RDc5bGVJbmZpRDR6VWx5VFkwS1JDWnU5aGhVMHM4cU9RdkNJdVpEN0JReSs5dUZNaWxyRVNoNW5pS1djYy9ybFQ1MVNrbDRlK2loVXJ5QkNFMGRyajJzTkdpN3dJRHZTME8yUHI1UlBkZGdiNHA2bVZKd1dHSDNqRnJEWCtpTnJvVXZ0S3ltM1JpRFp2K1A3ZEdHS1lwL3NmbUp0MFJMY0pjRUgwTmpsMUxGRVhwMlptUHFhc2puZ1lFWE4zTFFzVWpGSGU3VWl3d2tHR1NScW9MVXNMN1Q2TmIzWUNxS3FCOHpjL0hoaHV1TUJlc1NKdTdwWmx6eHVSbFd3bUZvM296bWhZRytGTDhsMFNPaDRJRG05Y3YwTm1oSUdnWXc2V1d6UVlyYk1ncjNrVEo3WmRzakRWOFNnWDVkTzFJU3B1MW1SQWVBWmJsZm9kZ1lER0ZSaW0xbkcwWXZwRGZ3QnZtdkFKc3dmdG1XYmdrZXU2dG9wcUVZZDY5MGJRR255T0swVlR2ejVHeUlHVVd3WWxYWlBrN0JNS28rK2JxbE9Cd1VFaTdMUWUyOWpwKy85elNXaHoybkU2STV0OWtITVhvRHMxUmtJSkZQdlZaR3pQSXRubXRBZ2xUeTAxc1laejRySmZnZUdTUzZ3YU42SXV5MG83R3kxMHZiK0JUYnpBcTcwckxSLzdqNSsrSjh1ZFVaWGkyckd5aTZJaFJwQmhUdGNCUXJzTkVvZDlDN0lmZGpaN3JmLy9SOE9YRGtFVXl6cGk4RDJKMkFaa1ZiY0RWYVhvWXJLalV6MDZCM1Nza3VoOFJCTjdlczNwbjFVVk05aEpsNzFaamhXMzROelFUbDF1MVZjdnVUWjdCQmFlb0dFZndrREJLdEZQTzMwZXllcThoTi9jaVIzcHlqS1FDMTZIQ1RVTFpLTWFiV2gwaHZHWGNaOWpscms0QldReUdENFpkRDFjSFV4SW5HcG5NbkN1bHNNN29Da3dCN1ludUU4anExaFRKek5VdXJIbThHNDhLT1puQ2dld05pSWUwZWJaQkR4TlV0T1RVTmd1aGZqTy9hcU5oU0daTG9ab3JFK0hDY00vRHBsYVozV0M1YkhvdFZGdEZYN0RtZnBtMDMxR2ZxeXM5OEM0TFNCaVM2aGlJNUFaWWhrcmxBMUxQQWZ0T0d3cFBDSDU5MUtWaC9EVWEva1UrSkhhdWlDelVuaDVCQTFOdC95Z2gycEJmWnRCc1gyRlkvaEJnWk16aW9TT3dyWWdib21UaEpKTDFFdVlybFhHcFNIcXZLWDB0aHVCbStmTDNwR1RPRkRnTkExYkVQYk5rUm1na1h0NGhuelNyYTFFYURWS0w4dTlRekMrbmx3akp0N0VvRkExblYwR1cyeUtJaWp6ZndGQTE0T1k0alJCa2dJMzRYcytHaFY0TnpIbzhKS2h5RUlZMHJQb3E3VjI4ak83L1hwWTZrTkdINEI3aHZERWhQUUtlNWNKVk9SUkRxYnhaVWJBOXZNMlIrbTBHZS9DTElVRCtnWHVtMVJKZjhZTVV2THkvYnd5YlZpc2g3NldkMGlYRXBDa1dQdW5raVFVNERodFNHeHFsRS9kemJRQkhRcUhteUhLZVZMMmo3L2k4NmFNOThjUTdQQ1FqZU5JWHhoWlR3YkwxbUV5WHUvQXpkVG1wdVFUL1Q2Q3Z2Uld1ek9sOU1ITWFIU1puY01haW43eWZaZGZySi9pd0RwWkdtQU9GWjNyU3ltSXd6V21CRzZoeWtWV3BLTHBuQkIvR2NwRGZLTm1NV1ljQ2xEdkg0NGozNnRkQ1NyNWdUc0Y4VFVKOXdIZUxHQmEyMGFRNWppa3RTTmliSlVISy9GOVZpbnpGOXE4VFgvZWhzLzN6d01ib1hOakNvdXh0ZFpaWGxxVm1IMDliM25xdjFUaEFucFJOdm5UMDNiSnp3VWN5czl1Zlg3OXhnTDVNYWlhYzJJa1BtcENiQmkra3Q1amZ4bUFxMlZjRUVOMHQ2dnY4YVRqTG1GYnFKM3RCMHdyYy9aN0Z5YnlyVXU4UlgzNmdZVkNuN21INEpaSkRrS3ZyNlpTZERyQTh3N0MxWUFRSmZaU1F6U1lidHUrSUwrRmcvK2NzRFl3U0VzcWRCN25sQS9QSURMeTVwMENhUVdDbG16L3BVZzBuciI7CgogIHZhciBDT01QVVRFUl82NCA9ICIyck0vYkdQRnpHLzczeUlEaGhQMzJlb0lkUlMwOGh6d1RtN2EyUWNQSlV2ei90b3hCNzBTL0ErN1RDN3VWTmVpNjN6YXMwbis1SS9rT0hlemxsT1R0RUxROWVnY3JuVVIxU1BreUhONEpROFB0T2RHWGhoTlhpSEo1bW5FRzRLZHgzZWJra2JpVGVYV2dXSzc2V2NueUdrakYvRHk4YVlBRVNoYWhKRnhsNlZzWVNBOWRKcTJEaXFtckZtMVMwVlRNMUVBNUpZWitmaEwxVXZyTU5ya2tmd0orTFIwYkV0ZVRJOGluQUJuUm0rR2FjK2x6R0lEb3daVjMzSWs1VkN0d0dXWmFOK0RsQ3V3WTBqa2dONzFiYit2L3VKWWNER0J1UndXRUVUdlU0Y2ZyVlRmWHgrbWJ2TEVoWG9EV3BwTmhkTFByOHhFckFETXhrN09UL2ZsRGJSL0xxN1ZmOUFXdmlEM1VFbkI1SnUwVGxHb0tlaTcxWTZud0lGTUtmREJMTW5rS1ZHckIrOWE5bEJJUjlMblIzbThVZm5hazcwK3dsMW5aTmpoY1M3SnFQR0NLWE43eGJ3NHUrVjRRdTZPcit3Yk9YRTBkdkQ5Z2ZvNmJyZHpmbFNxeDhvSEU2MVU4T3QyY05ZV25lNXVHa0tSeUY4M043RkxvQTZWZEZvTEp1MUNaT0ZKUWZNcExnSEJnVElQdno2cmdZSStOdmpSWGxxSVFTRndhRjBVU1U3WTMveFkwOUdhdkN6WTJ6aDErLzNHSkRSMWtsdU52NENZcFpEQ1RidFdvcHlSLzJGZVd6Y1laQ0ZnVFZHNitlTFZNY3hBdnZLNDExYTB6QldoeDhpYUN5VWdIMW1sVUtJRktXWEZnSUpLaE1ITnRIZTgrS003Z1Njc1RFalZ5S2piSXROUGdzVkR3TXJhZkJpM1dCK3lmUi9tUzFzSWtZajZyR3NndnpJVXRUS0JhbFBaVktjM1U1cEl0dlU0ZEJPaTMvWXFCdFRmaklPT2hOVmo5eXVQM0ZEdU8vL0V2cHdHSzBFR0JuRVhNM0d6Z0ttVER6VUZqbVl2ejN2Zms1NW04bGNWcjdtWElyNTFRZ1ZmV2Q0bkt0b2hJWEdmN2hmdVFQMFNKOUNQcW5OYU5jL0tEcFV2NkljQkRKRFBLZTFTdDdFMlo3THVEZ0MrdUU5WnlhaEtYZjhhbFhtTGNiOUQvb0c4TE90QmZsRW5NdUxHcms3YXN1emVYZUtDS1JTb0dsM2FoSmdLME43NVpCaWxMYXNCaHhTU0Fudlp6WjU4YXVGWmFwNUp6cU5PV1Zzb0lOcG9FUE13Y25LWTNBQzcrM3lEKzBFMHBiZy9MNldha3lvSXJ1c2JyYjVZYjV0TWxVaFBuZWJ2WWNPU3FWdmM0clpwelBlOGZrU2ZmMU8yR1dVcHh4S21GeTFqV2hKcGtORHdqTDFUTjRSaGM0N1RkTGwvVFRmdTVEaWlFT2x3TURCWTVMcW5nRU9HcXFNcFZQRGxPcE4vMVloQmtoYnUxcUFMUFVYTW8wN3dxY2F0WFFpejBCYk1kbGRPZWx4and0cVpPRVRLZUVBYlhaWi9MSDZuQmtnRjdLcTIvQ0svZmdUMmFTMXR0SElLZkNOUTIvamhNRWdaUGFwWFNHWDZHYm1aU0hXeDlzYlloMEZXVWxCYWkrUUk4a0NjeXVPOStZTlVmNm1acHR2YjhPTThwMUpHQ1JLSVNwRUZxNXh4aTdtenR1bCtsRldNamdEb25HNkF1S0NtYzNPaS9oRXJ1MEl4cjZha1FqNHVvNEQrTUpXRzh0b1lJdks2SWFxaEJXQ1I0UXhsRjJBODRrUWg1WGZyL240SVR6Mk5kSTF5TWVuTVNWaTFRb2xOZC8zMkNTczhpT2tiS0FDV0lYR0lUMUlmVnJXTm5UUFZkaG5OOE4zSUVNYUNuMitXdDVtMFJFRVI1aWFtamNLM1g3blJJNlk1Um5Ua1Q5cmRjK3lBMlJTVjZxZndCZU1iL3o5UXpxWE9XNktydkZWcXYxeFhlR2M2YVlsOStodVcramZLL1FSWWwyc1VjN3RMTXI4QytxODJnR1ZZbklsbjRrejBtWkJhcmQwMXNIYjFtdFF1THlaY1JGMW9oMUN4S0ltNDM2V0ltRThFR1Y0VCthWGFIcVFFWnZuZTRwczR3YXhucW5Za21kK0Zkb1JUMnNCcTQ5QlRlQkpMT1JucW5vQlpESHRPZ2N4Ny8zdzhqSThVVlpXZ2w5SWkwZVg3cDBXYnM5UmJzZ0crYy9DUllQVGc1WXo3RHU3UGFDVmVGVkQrNGFIK2kwRkVYdE1pRmhPRTRhSU9VdEhDdWVKeDFzRFIyN1hsK2RMcFNXajRBZG9Fc2RWN29MTkNOT1ZVYlFSOWYxTGhVN2xVMkE4dndtUDVydjUyeHBJeXgxb2tPT1QzeFlyNCtBN0VMRk9NdnlkenduSmZZVkY0NG1WVGozRG1SRG9pZ2JlVm9KSWNPT0NldXA2OENXN1pIMnExWE16RUpxU3RYbWhzUllYNWh4bWNNckFmZU9aQys1bTZ5SkFSSnAyc21tQmsyb1lGbExacExzbGFheFVZT2YvRHdFUWJ4eXI0NXlnTEhjajNJaVRFcjFMR1B6em1lOTFhTHlvY2pRVC9RY3gvVzdsZHhGd3RLb2VLNlNHbGovSk5EWGhmMXgxRW9CN2FyelZTeVB4NGp1UldTbWtIT2xleTN1WWIrYTFrU3lkU3BYVDk3ZithaHdoNWYvTjJER2UybXVQOTg2ZXVvMFB2RUh4eHh2bEhWenVyaUQxeUJWK3FlSzkvZXJkcVNvYS9Jb1k0aDFRRW9FLzg4eE9Vbzc1RSt5NjZNQXROMGo3U1drWmMyVkNRd3d3WllCUjduVkc5YmtsTUhtQ1psY2tPU2IzNlhqaUNibE14TDRiYU5HdTFaWTJwOEw5d0xhN2VPZEtuUDYyZXMwblhHUEx0aTJKdVg4UEhQRHhIYTFvbE9QcWVDWjRvTU5nOHM3Z2ZFcm5QaHNFNWs1NUdXTDZ5NWM2WEVvZ2NPUTNKb1JMTzR0bTNPRUVKa3I5WVIwYmJIM2Jkd2wyOXY3RTAvTW4reUNLZVdUVEtlaWZOa3BNemZMQnlPcTV0dnlhYnl0Ly9IZU9LeG5KOHNjQ2NDUnN5S2Nwa3FZNVoxOURoRGgzQ2pXVUN4NHpRUkVVUHRpZVNzeVhSMmpGN3JhOGQ0KzdxNkJxVExLY3dNc1p0dFZYTkt2Nm5ldTJNemhVQVo2SmJpUjBPU2hzaXN0emtaL2xtK0V2STBpUkhudGtZOXArTEJ3MmE4cjdqYXhyS0dXbURlSUg3L0dDK1hEbVROMGlaemRabVY5T2dlNVFzLzNEbXd1Sm9KV1VXbGtZUFpxSVYwSk1oZHliQnRZcGN4YUg3Vkd5cXJTelJCL1ZCVlljQ3o0dzZlSXFlNm9CZGIyaytuMlBvSldlbTByZmZielVkU3QzYThGRlBjZ1ovVldnVUZhVVNBN254YnJVMWhiMEs0aDJ3dktJVWNEeXhTNlhQcjNiREpvZzFmSnpDTkhPT0JmODZqSStxRFdwaCtmMkY2R0RRbEpObEMyRi9FL3lBWEhPQUZFTUVKbjcwcWxBWm5mam1zNHF2Tml2SWFvZCtsQXRjNjAxNkFDL1FLWEZxcHg3MkxVaC8wNlM3cFNQRURjWnE5cHU1MVJaaUl6WG5OT1Fadkx2UExzZVVROG5yWmtBY1AyWHk4aUFibXl1eXlGR2dOeTFsbXNDVWx5aElXSHpoN3B6QXNRL01TRWlyRDc2dFcrK1BVSnpZamVxVjFLQXNETDFiTWt2YnE4VitsS01kZjEwdmJmMmRob09UKzBRNEdjYmYzb0ZrYUtaaW9FczMrb0dSam8veTZzNFVDUHQyUm1Rb1U0Z25NanJXenlVWG1TUDFiRUh5ZDYzV1dsc3dpYnNQTklqcVloU0dzWTdZNGovMjkxSlhDYmZVS1VNclNqSE5xZVlxcjExM05DTllQMVBJbmtwS1dYY3JpM29sVStZT2FlNlBpcFpONGh1ekhCUTM5L1hPV3k0Vk9HSmFYQWxSTU00OGNocDV6K1RYZTNucGtBOEdoclI0alN6UU1ucm9sT0I3STBXSEhIWjJqc1ViUWs0SUVPcnBqSjBMdW9hNm5NSkdSbXVyRnZpc1FTMjRLRU5jTTVhWVJ4OUNlYlo5Wld2dTZkQm51VHQ5SjNjZTc2MGVnOXY4V2RFcll0Qjl1Y1Byam1KREdzZ3h1VFhDd1M0VkQrL2Ywa1FSczFzZWpMU0VaQ1pHMDJORzM0UGVHcysrNU5CU0FGU1VtY2ttVE5yYzFVRlNvMjY1V25IQXMrK1gxZ2tFcFR0OENyUHp4RjhnaVprVzUyREZBMytZTWJLeVBIMGx1dGNRc0hlTW9kVjVvYS9rMlorY2JBY0w1aFFUejUyTmt1YUI0Zk5zZk5FK3RzVW03eGhYTFVZT2FGVXFYUGxqMStMbWVwVHhNNlBwUys5NFlKb09HQzBzcmlHdW10UGtIb2pwZjRBV1RKbjEvNy9nV0xIMVhOeFRvV3dGSDRhVEUzUmJXVC9LU002eGtlYjFjTjZTWDFkMHdCdEFVL3lyek9HNGpiUlN1bHptd3N6cklETjJibzFYWjdxTlpIRG1vbGZJRUI2TGVhbXpEbktpVTdCQ0JpMVE2OEdIUnlmVTFZSnI1K1pFclVXWmlKckV6alN1d1BoMW5NVEJNRDdCM0VVTVRINkl5WGh0M2k3S3hWRGNqQnVwQjRQSlNSbGMxY21DU3B3cGFKV0R1bzNYaDFqamk5SWRqNmRJZGY0Q3hjV2JpV3MwbXhDbXQvYkdVMXAxVitKam03SXZzZFdVSnJnOUlua3M1emZPK2NoNEx4UHg2SDNBeFhRcU8ya1Q3Nm90S0dVNGVtenh1cjgzdFk1NS9uZGF4RXlhM05OT0I0TUxoMjNTOWplZ0lxSEFvUVhPTmcrcklqV2RuZnppNGpuSG1raWJPMXR6R2RzUFViSGc4ODg4dGU2WE8yZjRMdElpbXREWHl6UFM1L3Zta1kyQmR4OHVaaWNiL1ZsRVRZZzFFZEowRzRKdXNncHlaRGRGS090RlZkUDVURXJRbWJvQzZ4bFJSeDd3QlY3cUhaMTFmdFRnQlMydk9UTHZYZWFMWnNyajhVb2tMZHM2STAwV1VNRzExd0tSYkpQd21mTHBQU2dXTDhuRi9ucmpxSGVRei95ZlJRNU5WdW5KNXJTY1B3T0w5WGp1ZFIrNW9XYzNzaDIvcTQwbkZ6ZzhWTmN0QzVJQzJjNjNrT0hBUUdaQmtIZ2VJQTAzMXFwbWUrd25yaDNtM09kUTB5RmlnMHhVazhhLzRSL29FUXQrcTJVeUhBTHMrc1lvVURpN0FhMGMvMjdmVzFHeDlyc1dIZ1lSaFlHWXk1NVpVSDZCekh4RUYwVVROUlluR3ZWNnVPa3ljcGtQQUgzcHRvaGRteUhvSmU1cFdrZnpQSkxQNTlDNXZuaGlmRG16Mm1qNkx0aFAyTFFJQ2Q4d2ZGMDZiTjEyekl4SEROcFVlUERZQ0t3L3JOcW9vbWlWWTdiUkJaV1hGZmE5enRERGxDMVJ2RGdlbWx6ZDM1ZlBlUVFIK2xOdkhuTENCM05WVForNHN6ekRUMmVOdm5FWUowWjdxM211aDA2S3V5VDFScjRHNTNacUxUM1VJb0x1cG5BR2txRWRXTmdnRGJRb1ZCejVwVk1tQnJiNEJpLzVDVGdONE1UdmpFV0wwZFQzczR3TUdGSVp3SGZrRGhOV29BUFBBckpjT2JYeTJYc2JlK2pBUFlFTzl5SVRRcEFKTzdqc0J0V1lGNUJvR2kyaGVOKzZMNmcxTDlGQkRQLzBNS0dqV2lmZHVSU1RKc3NrWm4xbGwrcUdlZkszVzBWcXZQK3pnaWFuVXVPVlhBQ2d6T0g5ei9OU2RoaGJBVTdZWkFaODJ0VkpwZnBKVnBsWVYzeE53TEdEb29pOVFPKzdkZGh5ZWx6M1I2K0t2Nng0QWZZZjJGMnMvbzQyWkliQlM0Y0ZVaWN1dFhvUUFMNS81N3VhSmRkczZvYW9PTHRHRGpjNWtnR1BXalpxcGgvaGtob3IvL2lhaGpzQXpONVhUWW9aT1gyWS84RkRSL0lmZXFySjFkTEpLRGZSQnpGUUxvbDIwa0cwbEJDY3l4MWt6elNsek0vR1YrYnFBd1RVbVFtWVBTaE56eVliNFRvanlaOUtFYjd5TXZKNFNkakE5VXNxc0tBV3hTM2lwM25YUDg2ZE0vT0pFbW1aaHIyaE10dlBmOG1NSjIrajI0OEovOEZsbWVUbTV0OU5UVmZzMjZiUU9ZY0Y5Y1BRUFdEck45TmV5bi9rem5oQUh4V25pQngzSUxyMXNLVGJVL3BpNU5kY0M3Z2JZeG9sTStVeFJyWEZMWGpGQnFJU2xEY2NjRVVnUkM5UStNbE1QdFdxMHNrNWdJdG5NNUEwUHZrSTlQYVZvdkFaRlBkNHFFeTlLNmhtamdzTW03QkYyOUV0RDh2UldNRnZWc2IrVFA4clV3cmJ3c3Y1d0hPWE5JZWxrenlyY0g5OGtQRTVxNlVhV2VMZklzSm9telJYeDNxKzhJQVZDNXBERTFIU3h0MEd5QWxvNE1URzRycHlCaUNrcEJzd3U4Y3dKaHlaZjBqWE01QnNoMEtyZFlKcXlnTzZrZkh0WWZBazZxNGlDZFhVYmdaWjFkbXlSZWlpQkVtK3hWMnVzeEMySjkxZk9SQUJiMlU4eTd0TlYrRWJ4dmpQOEptNmNweG1hcS9jNVg0TE91Rjk4ZmdFU2k2cXFsUURUS0hMakYyNjFTUHN6TENEaXFydEU0R0ZWTzQ0TVo2a2FycC90UGRVVlh1TnNPek9jS085UmNIQzJWQTNzbWpjRWdwNERpMTQ4N01ieDdKNUZVUFBVOE5EV1J1aWxXN0NEQjh4bFdGMmcxS0xJbENYSmVOUDJGZVgvbGg4LzN3S2dLZkVpaTNlUHBqdW5makVEM1p4VXpxcVNneTFEVW9vWmU5UFN2NzlxSm0zWmlKa1VFSk1tc2lrclBJWVgvUnFTQ29kSkhVcXdNL29NRURtUUQxVm9meFplMnR5SWlDcTByUVB4SFVCbW50ZHlvKzIySFUrQlVCRWJadmxuV3N1SGs0Y1VyRUhZbWtCaFJoSUJSaXQ1SDNvQ1UrSWNjV3M2M0lYK0FQSURWa01ISzA4ekp5d2FCWGZOeEVNZmFYV2d5Q08zNE1WZTU0am8rL1hnb2VCMkdrSFZDaFpQTksxbkowQWFITm9OQTJZczEzbjhwUURzUjdrNS9MTlBaYlpXM0VoNUdlNFV0T1ozTlVDNStMdHBpVjNNUmwzb0RxM1l6VEloSFcrd01lcTI3T3N1cUp1VzBHZjVXa3ZDOHRUWnFCdXZhYWQ0U1hiVmQ0a21MU3ZTdGFOVUd6blNFVU9pdVYyYlg4VnRVd1gvbmkzcUhIbk1FWXVPOHFpTDFFa0lRPT0iOwoKICB2YXIgR1JBUEVGUlVJVF82NCA9ICJUdUh5SElIUnNkNG1HTUhLSjlmQmQrNXhtaHZDQlRicEdySmVCVGlSVSt2OXhNRTRGbTRqeHl0dDJMTWFLMEI4bnNwL1MyWjBMa2pESUd1bzFVU1BoNGFGYkF2aURINUJzOXdsOFVlOS9MOUpybGgzYkhtYkdHU2kvUTRPZWcwQkV5QUkvK3IycEdyOU4yREVJbTlmaGdXM3RUNFpDT2NsVis5RXBBUFZraVFzNEhCazNnRWphOSsvY0NmY3YvOVpyWjR3dHRmZlJxa3hMNTkwZEVvMXYyUExXSGtWc3FxZmpuSW10L0JOc1JFejk2TnFVTFo5Q3M1d3FKdzlmNVpjL3Y3ZDhTS0h1eGRIVjlLdTk0LzlLYnA4WWFzUUZhdWM1aXBWNVdGNlJYSDJoemRCam1FUUJ3QmE5Vm1ST3NOUDdwUFI5cFptbmVJVFNjMk0vREFBUS9RZjBGdnZ4NENKdXVOM1lJNjFMc0wzbzVEV0k3cXB1STFBT0lScFlBblpJZ0dvd1dZZGpCTzN4RVZGZUZ0MjA4SUR4OUd1anBIdHJxeFZ0NXdMWm15TWhqdG12cnJ4UWRTN3Rqd1BieUlwTnVsVERyNlhFRTdNYUp5UVlidmFEWDdxTDlzR1JZQUxZbklGalRtS0c2bjE2bW9VTjJWUGJQWEVTRis0TWFSbEJBZjBYbklBRkJxelc2VUJkc25KejhEbWNWMXFLRmxhdmMwT05YQkNIUC90KzFFSGl1bE40SURtaVN2Snd3NzBqVml1c3ZBRitGVmtET0ErM2ZEK0Ewd0VLSFRrRGpmSkVlUEJJWjFmYkVDZEFDQzFhR1AyWkZSTFFwM0tUVkNWeGl0NTlueU1NU2h2QXdDWjFrb3dTWG5nbDhsUGpncThKME5zcEZ3WitMbUdJN21nTTNjNXRHRnlYbmk4ZERCcEsyTFBqdDJESjJDendkVGErc1AyT294ZzVCMzd2d1Y1MUhJNlkwMUpKWTV2bytURDlGMlpoUk9DS3psaVJGSHZRViszUXFUUTVxcVNhVTBIZEM3UEhhTDZ6bkdYNGtLUkxLdmY1RUpGU01SQUdFNUN1TFM4eFpZQjlyTlpkMGRLNW5LN3J6SzBRWjlvbThPRnFmYStOVCtHMjBldkVVYXExQkk2c3dtdHd2bFk3bUxIUHA5dWRIRTVDbW4rMkhNOU1JL2NMTFFkQzB1cXg1RFV2QjArbkhidlB1cit1MkpBSHVSVzUrbWFuN0V2MUMyV2x4RERqN21UQzhFdWlXdXl5QXFtVlVVN0M0SXgzYXAxamI1c052eVhVMVIxN2ZNVWo2VE1xcHpwRVlzR0w3RnhIbCsxOENQK2NOdGR2RnUveHVZTlBNakZrcDRsTzQ5azlFVVhPeWVVZ2NKN1hHK1p3dlVGamh2cEp4OGtVYWoyd3c5ZTNRSjJPYTJYejJ2bVB5ck5IN0xkcWNZanNub3ZyTUdMSDlsS0RUVjFveE01b3k2QWxEVzVBZzJCdlAwKy9TOTZ1SU1YK1NRUmRIYVJrbmJCMC9ZaC90YmNwME4wVnhqUUprT1RLd0JqUURZdXZ0QmxUekgzbTVWVE1yalgwTy9VZjF2N1BiVmJWdmtkL2xMVGwvSFh6a1creEZCN09qUnpjRHRhV245L2k1RjdpN01wU1ZoZDl4ZThucjZhdjZic1VzdE8wRTZ1dWJBeWw3N29VK3ArZHpXSjhYc2Jtdmp3aXhlMnBzdmxRZVB0YnBMZkQ3SThtSHo5S2JCRkJqK01CL0s2MTEveDhMWkJRNTYvVUZrNVd2NUJVOGFpRVY5ZE03MUpVRWtwc2VmNDREWmVUczdSL296dVcvSWZPYjJieWUwS2N1TTVWZzRxMC9aOTR5NFhWTjd5ODRvWE1HTXBFelJjWmxybEduaitRcHZQSk5reTZHOERkeWZKd3d4TjdGck1UU3plUG1hTCtlNnBzM0IrMHZCOWcwTzg1Z2VyMnVHUW5IZUNMSDVYbXlFS3ZRY1cxSE03aTYzNjFJbnRWZVp3WGpQYXo0aUozbE5USlhFbXdERE1YVW5XOThtUjZ1NlNYTUVuV3hFd0RzQ1BUQ2VKWlRXR3lqbHpTSSsyK1Q1a25zMFlFQzY1Sjl5dVBmdVdTeTlhZnN6bGcwNGo0NUx6cTU3eWQ4QWhJa3E0cHlyK0E2Njg2M1NYVkJTbkJSSUN0S0RSMWEzcDNGUWZUN3hWQ285Z3N3ZytsM1BmQWdnYXkwSWlmdHFXRmVSL2kzdkEwb1BnN203ZmNUQkFMcnpXdzN2MWh3aUFqM0dXRTJGMmszTFRmNUNnNUFCMGg4TGc4T1grMG1ydkhJNGhBTGk4VGxqL3pzdktOdFRFczQzc3VhZE1CVjlMRUVoL0tnYVE3V1lVY3IvSU1nVGZTMmZHQXJVTzdxRy9pczd3N3JxR2czWTFzdXVTZSt6UnZWOWIrakVnd3gyQWpXZno2b1FRalF5ZVBRZkdacTFnVFpvUXVNenhjemhVVzVHZVc5R2hSQ2tHU1FBWFFMUDlOSXFlRnExNGdQNUFLVjlKeUlJSXFNUkM4c3NZTU8ybEY5YklGTHh5bkQzNmlWRFJzT1V4bVdGNHRkVnh4dXZnMEtlaVROVTFkZmdRZTNScU95VFZycVMrbVdnYTIzZDBNTEJZaDR0dUJJMFp6Z252Qkd5cTdEM0RxbklId0k2VW93VkxiSklmaGhhQU01MTBYdmNFL0RvR3JKVVZFVldjckRZVFNFb2RnV2tTSk14VS8xOXVoSVYrQmZwMGZKcGVMdnYwUkhQVmg1L0RzOFYwVlkzZy9HdU1TQWYxblN4MCtvRyt5T01RcnVrbTQwNFVoNUhMUFAxaExBanpuTmxlSzkxa09pRUFDQThvV2NUSzZBV0pNU1E5R3VtSmlxTW1MTXVPR1AvWDZVeEhGVFVjQ0hrYkx5WVpiRWR3eVBSbzlTVDVNMnU4cDRUbEZsMXhZRUxFQzJnbFJTaDZ3cVZ0d2tqSDlnUGpPenRhTE1wTXphNThnSzZ0UWRLcDNRaU9RM3JjcDZmcTlhMzI5bS9NVTF4bTBTeGQwVjV4NTZ4MkNQNWpoWmJrMDRzY2ZsZ1E0UWpDb1A3TkV2Y1BEQmJlMmRQbGIyeVBXd2p3TVZ2MWNrdEUrYzZwU2xTVWhYNHBDZGNqeE1tdG5wM25FL3JuYzc2NlhaMkFQSWpob2FEMVFiL3dzN1FMZGoxeEJIUzhKK0tJNXlBT1Q1RHVIVVpTQ1RNbkdkb0RqVU1UN3Bpa2piVW9OcTE1eWp4S05OSDRxVEd6eTJNajJ1K0lCUmk5K0hweFI1TGFHT09pUFBXenU4VmxqUGlEZWw3cWlhRCtDdEQvMUxkWnBvR21SYTkycUc1ZDBKeU5NWjJQZE9yeCsrbnBQV1B6cGdhNHZmaXZZVDlMZkVBTXRwNysxemw0dUJQd1VQcDlBU2tMWGU3TUJrWUlJM21zZThkYXRTTzFWMkl2UThOVzc0S3MvYlkweEhZTDlLSFI4TW9FVHowejd5QzFvRTlaNEtDTytLdUNVdFlGdHgxdW9sdVZIb0psYmhLYWhic0pRMGNRMW42TnBrWFJjMERiZDBlcW9MZERpVE9SL2J0KzFFNHA1c2FZQWVJYnMyaEVDa0FOUmRmQ1VsaURLVnY0N0FHYm45NW5pa2EzOFVDSlBadEkvanptNzNoeTRVMnFVWnlJTEVGS2dKNzhiMHliNklKSTVOTzY2V1FpTVZadmFGOW1OQUgxU3pCWGIwZVJwRWRTYlByaWgzTnk5RzlEa0tVdTFmOHVkZUdCeDgyU0MwVGREdnh2dlBRNzhJMTlCdDlPeUxidy85SXFiaVVGNGNJM2ZGWDBEMTNjdjdDKzh1b2xsMFZxVFA4dldrQ3RZQnZEQzArTk9BWlZmYmtzK3hiblQyR2dVWUl1bktDaHdrRmRHeEFyZUtKZE1Pa2N2dGtaV2lHd0lueGVFaC8waEs3RTZ4Wldxck90VXMwUWd3dFBraGo3SEh3S0o2WE9tVEF6aS9tOTVZN3VsL1pWSjJUTDEwUGhBcDZrczJaVUNwQ0Y2MldGbkd0UWZDUE40SG9IUzRBOGx2T1lCa1N2SVZpLzVxWlpaRkc3cVFHRVJzT3FKbDI3cHlzcUlSSFVRbGNSVnVFNVJPTldNNWFib0s3KzZvbmhYeEtrekZUYU50L3ZDbCtxRGtqVHQyb0ZvQzBray9xNE8zOGJickZiM0pCTk5hN0dTenVoRERHNVY1YkJLUTlCNS9Xc3VEVjB6UFdaZ0c3SExXVms5aWcyUlc2MjJZN2JXZnpXK0o0R3FZczdPWWRtQlpVRFR2N3pkb0NvRmRodGVpZjJ5cjRMQjU0bHlSUGExV2xacE5kamMwd0tWeFFCeTY2OFoxMzE2NFRna05oUDhNbzNaYklBdTkxbXJ4V3ZjN1FRZC80SWxtdlhRZWhOdTFEdTVMaHF3RFowOG9rRG9YdUt2VExjUXBCQ1NnVHBIRVhsZUFteUZJU1lnanFaalk3NlBDSmVTRmZSQ3lDcTB0cFJzTWExRm1RR0tRdUFqNGIyZytCcGltczlidjBxYmVQLzBEYXhvYUJjQy82dVk3NGtHY2JxU1I5ekk2cnBLTEVUd3QvOVdhbnhVelVuWjFXKzRuZlpJSkJNOFlLOVdXNTN2ZEtmeEpjdkxNT1poT0JVWm00T1RkTUs2cWhtTjgwM3phc1NHL1g4QkN4UzAyTDZBT3dhd3pqTWl2a3dJUDNDdUlrM0FQdVFaTVRaMUlyN1RyVFJkU0V6RExZMFhyNzE4c3pZU1B2aHhqV3V6SFVxamt4RXNxRTJ0ekJydnRUL09sbWh1em5DMmNKK2l0aEJ4Q3NrV3NkVW5jRGJEVDlZSjRxTytOMmFFTWFZZlM5SStuc2phNSt5cmNmbG9PY291dWJmVzZURUs0ZXB5MCtWaVFyb0FkTUx5dW1rZGlhMUhOZytzSGZ5TEs5Qk5STEIvT0NuMWNNdktLUkNvTGRXdkxtZS85OEFFQi9EZjZwVXZmSm03aXk0Vk5HQjZJWjBxQmlPYksweEtaK04zVVZkeHJhbU5EdGVKclhaVHdqN1hackI0eW1FL1dXbnJCam5xU0UrcWUvV3dRZkQzUzExcjdqdkZudDZxRERnMXRJbTh6bUZ0WEhtWXJPTk1UOGdGNUFTaDVHM2FBN1VQTmNkcHFkTm1MTy8vR0t5MDM0emxSZDFmSXh3T1l5OWJSUXJ5WVl1SFBqNThCcHVkNWVJSTU4Mzg4WGZyY1FoTHpoSzZLTlU1ejN3Z29McHNteWdtRDJSbGhHRnQyb2xXOCtyNUExaXFPUmJoeHNleTBEUUtQYlF4VUQ4NmlhUDNQN3dmK1BrRExCK0ViM2lpWXI0UnptYU1Rdkk4Qmw3WkxzZ04vekZaLzZjZk5TdC9JZTR0dnRrUFFUZW9ZdTJsd1YvWUpTeCs3UUEzSnQvMG1yVWV5Rnd3d0dpVHVXQ1V0MXdWcFpoNkhncWp3N2oxMUk0d3JOYS92b0ZtZm9nZnJxSkdrZz0iOwoKICB2YXIgR1JBU1NIT1BQRVJfNjQgPSAicSsvQzlSQW9qRnR2RXpxSEJUdWxkSENQUWY0L1daTnQ0NktSbnUxSjNCMlhrTG5DOGRyUjZPU0hzZ3Q5KzFSRzhkdXlxRHBHOUlaZnJqMDNqRWtVd2hoYStiTHZzbjlkbUdlc1JCK0pUM1ZkOUJYeVVxUnJXdGtjUnVsMDM1ektzTE80ZnJJMHNyOXh0MVNkY2FVUHpkREEwMExFQU5ra2hTNXZOTU8vQmticDZjaS81T2doMnNzbGFIdDBTbk1sZVhSTXluQVVVbVEyeGcybW9jdXZKYUZPOG5mM3cyaUs5aWZNMmc5dUlpU1MwTUZORVN2MjNrZ1dFVGY5WmQ0R2QxYnorZFdrSXJPMnhVeENuY0NBRThYdWVQQjc4S2RLMUxUSnYzK2Uwd0dyWUN2eVFKTytsNEFYaStyU2lPZ2FSNjRiaFIxNTd5UXZJbXdaWm9wWHV1emQ3M0NlNzRVS2QzbUlsYmlyK2Z0RGtUQUNEYWRzQUI4dlpHVUM4WDF3L1kwV1hQVk9PdFdUa2tkTTNlb0haRHQ4d2ZBNzJ6OEZON2xoMUtZZUEvUXk2MG5HNXU0Z2lFNjNPTXVDY2ZiQ09LM2tobDZiVTNzbWs0bzdqa2xDUlB6WTZOT3FwdWRKYmxJdDNNZ0tPMDk2TVRMYWhLdm9tck83K3pja0pNU3BJc0lnQ3V6ckRJbVhrZytOT2F3STBETnYrWi9jenVmbEpWZ05JcVVOMm5TZzRKNGc1RmtmSndsd0lUWWdxYnJaMkZ1MTFjQ1RFY2IwN2xWbGxSL2dZVFdGcjQ1SFp0V0pCNDNqbFNQdzlXcFBnUXFLOFNJZFNmK04xTkFaUFhJWWV1SFZwU1BQNTNOS2k2QW1PRjJheG9peWFaY1cxaWI4UWtZeUJLZG1La1NCM01SdjdYdE1TNWNoR2U1dVpmZ1dpT0x2dXFraFJUdnRwaUdYZFpvcGgzbkhib2tuR2d4dDJ2Q0xYVGVBSWk5NEtqNmZjczMzV3F5SlBLREowY0tpWnZKZkZmRGpOMTlUeVdSZDZlYXdoa01IVmQwN1NsNHZrZkRLTjhabmJOanB2UkUzb1h2TXBGZUI1d0N2TDNpc3RhTUFQd3k4SDk3c2JQc1Jqb3Q0cHRmNVpoeDlQeDVzSjI4NWNoNzg3YjdEN1U0aGRNdmpOL1JkSzRIQ05ybnE1MGMxdFJPR0lFVndQcXd4Z0EzVkZYVjQwWWdzbng3eUlCRThTb3VQRjZLY1NpT0owUjFBSGlrQXR5WUFubHlnaDV5bmpIS0swN0R2WEhDamdLWGRwYkxLOWt2WXVDMU9VUGt1V1NjTkZacGFwZ3hTTXdtbXRkVTgxb1hOZ0RXU3crM056QnBSOEJXcEg5dGQ4a3VmRTBhZEgzVXNZck41U2tZTE1kNHpqNzdMSjRxbkk1THpEMWE4MWVIU1ZMWWZJVUlEWFBLMDhYMWNqZVJEdG9PdXgrSWFOWldMOVpHUktWQUY1VnIyay9rS2IyOVZpZ0FWcG9VOXVxcVZITWFiUzRFbVNhaWFnRjFtRHhXYjd0NEgvY04rNVMzdWp5eEhQUXNZN0oxdDdHK2R5SS9PaXJyN3lMVUJKODY0N3ZzYzFHZGx1b09nOWUwT2lvaUdGdVZxTjRBdWs4N2lFeHp0SmUxL1ZDOWlOK1QyUHVEREtaR0grZzBIU2piU0FBTVc2dzE3S2pXLzl0Q0J5Q05taTJGQ2xQeGtYd25ISm1yUXhBeHR0VDVhM1Z2REs0Z0NPSDBwVkdNbDk4ZE0zZHVoWU9udm1QNnBVRXkwQmZUT21pRlBPN3FQWWkyYXY3eXl1NE9mZlJKV0J1M1doNUovaFlNU1ladHhCT1Buc0d2bDcycjZGUGFHWGJwZ29xK1pzVXpoVnZSS080TzRYSHZHNTFrbkFheUx2SVNGU2tPRnhuYkJGN1ViTHl6cFEwZ1kzR1gzVlE5RWRYMDNQVVdvSGc4VUtacjgvZ3hRU0o0VVZwK2dYaENtQ3AwbTBDdk5yOG1uTVp3NkIydGFRNGF6QjI2eGpZQUE3aDVnWHY2SEQzOGlNajdCWnltQTNTc29aTitHMXlxUWt1alIzeGxZVkxDQW9ScXkyMnVTbUI4UUpsbWVQSXlDK1A5WWdqYTA2U1NTeVFQNnJkU1pKOHlsS3R4MSttRGxTMzZ2anh6V3ZlZGFHcnhBTlBVOHl0M1lRY1NHeW9xRWo2ZXRwZkQvdG9OaU5VNzF3MTlBa3hvNXNlZWZOUVBUUGJGUEtydTVZVmRrR1JsZG1ETHFXUmF0SEZPbU1xbWxmUmZBRU11WkhwTllIUUtzVUJ2a3VpaUNUd1dscVFVb2lwNWJoREtXLzlLczBubGx2b3c2QThzeUUrMlh0Z0VrUlB6MjlNM0FKV3hlTnNJWUtVZjAxeUE3dGo0VHZ6WTBndUpuWWpYRnRwdnYzcnpnV3BuK1JyUlhMdHFqQytobGZ0VFY0VW5wOU1nUUhUcVA4N0FWQmxJUnh1Ujd3TytWREFzVWgrcXJqZHVyOEFXY1BPNFIrMzI1T3pZOCtUMm02MUJiSFJtSmhwVmNjKzdLT1A4TTM3SVI2VGt1SC9YbkdaT2tPQ1NMTUR1eHk0WUlXUTF5YVY2Tmk1UkdBS0drS2dhbDAvRTNsVGE4YU1OK0VuVGpmaEh1WDVWYXBvR1M1ZjczemFRVEFVRTlERDJYMTNMTnZKL3ZvVUVvcjVnY29PTWR4ZENOeGhudjV1Q3p6Z1dJK1FLZVBWVzZra2tDdm5sOWc4ZlJhWktwWGNvQnJPNHd4dFhPMWs4QjRGVHNsbVNtM0ZYUGFxNlBBQWRDNlcreS9iN2RBZUlhTkFISkxCMlZ4YUVZVGZUd2oxMEx6Y1pMNFZscHVIekJnYTk5bDZCNjNCTzV1QTlXQjF6c2xTNHJ0a2dyekp6V3AzQ0lwL0poV0cwZ21RK1V5RXdBVUI3NUFZL29EOGpFdktRdzh0dWU0amF3SzZRc0lhT2szVWdCVVRlM3gvVklXZW4yeFJ6b2FZL0swU3g2TDcycGtLT1V4REpYTS9aeFhocnVLZnlRWjYwSUFldVVPTENXZWZ6VVdrMVBFSzZ4emZXb0dETVMwczR5RE1jZGtPdnVaOGRCbkJkTVNpVmNlVXpFaS9TTm0yTDJKa2d5TTlLZW1Zamt2bG5ZbFhyNGd1UXZObmdJVm1xVFcyYXRJVDBZZmZ6ek94cWpUR21lbTNMdUl2NnkzVWdudXZWMnJ6YXBzOXZXcE4zMndXazUvTjNTTUdwdEcvSmFGdjlQMk9tbGRudEtZZjE5U0FxT0ppd3ZoZ0Vaa3ZYK3NZK0ZPdE1MMEhWKytBaTl6UzZITGgrKzlXNndJWE1aWVJreC9JYXNyWWNNcElQb3lRVmROa3dmZ1FBaE00SDhBK20rUDMyV0k2RUZnNnB1UTF1M1VZYnpxVU0zTDUvS21mdCtHOVpEcmJ3V0pJZk5aWll0Z1hHNUFVQ1c3UW42UmxPSzN1UlBOajVtTUdLRUxsak9xZDVxVEQ0Vng0RTRIUFpoSGtxcnUzSEJiVWVCR3l4TU8wMk1zMWhMQ2Fld3JPUEUrTWpIMXdUdnhiSDRIRjl4bmRiY0FzMEdWZEpZSEdJL1U0TnpLTUtlbFI4VXRQaGRiNk5aT1hrWEpRRk5heEpYWFVhdytrRTcvU0J1eVdFUjNOL1RsSnZJRjNjRHh0bUovenBkZzNMdFovVldZZGFZZXBwdjVjY2VNSDI1eThXaWFHKzFRZnBhSFkrSHFHOWxkcENWS3QxRVdDZmdlU3dUT01ZMTBSVVRZRFlQMng0RWg3NGd0OXNKY2R4dWNGVHI0L1NPbWtqU2lzdWozeGIwaW9rNmRYU05sTHQ0K083U0FBcDdGSGM0bElmR092Y3E5QlUvWXRTajRwVzZXejlFbE1qZjZsZi8xK0dzSXJVQXZtREZYek5vbG0rR1BkMWRxdHh0RXQ4SlJ6OERyNXRGcmlkcGd0V2wvd3JPYUhWK3NYdTFMN3F6NTNmdkl3OE04bnRURUNVM21DdVBBWXZHZ3R1VkdoS3JhWWVTZU5TNnk1S1MwNGViRDArNm1RcHcvTks4NnpGa3BDT0grMGdyazVOdVdnWXh5Q3pRb05sbGNQT0pVTUNvME8zRnF5SktMR0hrUW5pREk1NS9CNUJrTlBNejZMcElrNGFya2thcUthVytqWkpEdm9xNXlqcU9sdDgxTmQwbi9tWjVDRWtIR0o3VGlDUnBEWmViYXcwdkQzT2FMMVYzRDlJYWFzYWtMZ0V4bStDS1U2TExiN2VRT2NaZHNZbldnYW5sbWRQb0tKMzJhaUc4NnYvTUVJWTlVTUdRaEYxc20wT21NWDRDWDhLTXRSZzJLYWVSanJZVTFja05uc3QybmRkaFFTVFcvVE5hYi8vRE9CRVZ4MlF6YXBmQnpGbVJXZUlDNDNvKzVoUUR2aGJsa0dhNUk1ZjUwbGVTL2xTY0FDeTBLZHdUT2tlRnpFREM5Y3dmK2tPc2tjUGNnVEVoSC9wZExUcXFSRW9sb0JOdVAxVEtJV3hRQkxUT3Flby9jbUdsNEpKNG9GcDZ1SExtRzBvZnovTkt2UEpXTXJMdDR4SU9qN1Z3elNDditXVHVQZWNielhwc2VVYUpYNEl4bTZHdmE2cGZWK0ZYSHcwUW5sNWkwZlBBb1ZkUUxOWWlUZlhKK0JoMFAwYkpUTkFSMGpWQlVpNHhnMFVHUnh5aUFsWE1iaUttLzI3SGJXd3FiU2VrT1AzYnppZFJoanlrN01mREVuZU0wT25MOEVQYVhoNkxObnNBcm13UnJTc0xPOEJVUVpXbHp3ZGpqVXZJdWxpRUh3WDdUSEVHWVNvYlYzK1pPMkVEM1A2c2lvUXNvdXI0R2tNMEpycVVNT09jQ0FtVktYWWFRMk5LemxtWTdtZVo0bXNlY3p6RlJUTnZTRVRoamIyRjN5UGpvazhHYkprUmd1K3BvS01JRldtL3RZeXdpZkE4Y3Q3MzRxWWdBNGN1bVZYVEt6dHNoZ1BmbG5KUDBSSHROWE94d2pBMlBjSDJYbjFITTIzMUk5bFFsMUpSN0dXK1JjTThuSnZycVRISUdhTWtGVEdJWkYvQXQ4UWh5cXJHbmdkOWhudGlqdDd0OGtLYjNwNEJUNmpuL2lxMjFJeTdNTXJOSThqaVF6LzdCelRTYU9Fc0VQc3pLU2RzWFNIQ3RtL2pHdWRucWw2ajRUQmNlLzlWeFdPdmdrZE9obUc4TlJmc0IxSnpxUDB5Q1hXK210RG95cG5vSy8vN0tubWVUK1BYOENQNzBNV1B3dWtacklRL2VuNWZrK1hLWHNEdmZBL1psZ0JxbjM0ZExIMUc5TmlXTFdDdktjelFJaS9ZaXhkWmRFT2VBZ3crUUM4d2xjblM1dThGbVdqMXBBZkxCYU45ekVuSk9Oc2h0Q3B0RkFzTUdPbUpva0M5a3VQeURJZEtIK0M5ek1DYnVIZ1hUbnJnUDNDaVNJL0doU0g1UmZFejJMMWZvc21tM0VkdVVMN1RWNW9xTXJNakFuSExGS0FPT2JyOHhHdkVpOEFaMUxyNUZVSkxsdDFmbFRldkR3PT0iOwoKICB2YXIgSEVZX0dPT0dMRV82NCA9ICJjNDhJaC9QZzVJS1lhQU45OWxDSHB4WUtEdjA5M1dBMyt3WURQQkZpVUwwazAvczY0K0JMdS9vK0RqNGlQVFVkZlQzM2x5eDJIZDZHdjU1cENKbjV5ZkFDbkd2RmQvWXBJV1QzS1pFNWpsVjI2TFVoSHRiR0wvUzJxa202U3F0NVlVcnBKRTJkRmZHR3ovSkY0dXJuV2ZUaXdEeFhqdmhvN0pvYUc1Y0hUdU9KUlZXWFIzKzMvdEFWVllSK1FiNm9kZHl1TXo0R2RwRzdrZDBOeWUvQ0RYNmMrYXM0Z1JraUFQdmpIWHN3TU1aa3QvUS9maUdvNFRxZk00Ym9DM1NpTkNTQlhRTmlyd0NDRThqRWh1dWQ3R2xJODBuaXkyMXB3Ti9lQUhsVndBRG1QcWtOanBqcXhSQkRCd3dtV0NENlh3NlplSFN2NlE0K3pUa2JWNnVUMzFXYWI3SWg5cCtaSnMvLzlEZEllREs1QjVjSDhucml2eFZ2QkpFYWdsZ3NrVHAzaTU4bGhKRXhZeGFoWUtwODU3dkdyai9NcHJWbWEvMFZmTkhtVzNCeXFzL1ExZUs3b0pHYktkNXRPOC8vTlU0OHdxOW5PN2EwRHluaEdkQVFTYmliMm96T29jSExKdm0vVU5wclhaUHg4YXo5SktXSWdWV3U0VkdUZ1JTSGFMSE5zVWQwZGo3azlHb2ZJaFY3S0JPdWNPYWZZNEtSQ0tRUXlHSVh6SkEzbDg5S2hIdHhVaGljUGZjdFYvUnZSZlN1THBmUzFkQy8wZTRpQkhOemZ5MWN4L3c0Z3o1RDhOUDZVWFllaG5vRytKY3JTV1c1ZC9LRGtWanRIT3NFRGhYTTEzN1NzUkJNdG5QY25IaklqRi9CNXRzVVZMMEtIRS8remY0dEJQTndUVUhQcTFSMEthS1p3WVlabXp3dW5Vc29ia0lOdGtJTWYxd0pob3NOLy84U1VqVW1hcVNMZGV3ejZZVDBXSFhZbUtrSkhIRjcyOG50M01ZWjkxTjQ2amxoTUNnVlVBcmwwdU53S0YzWk1ONlJDbkVKRUNud1lhMjcxV1N5a0J3c2JTK2xqUk9hUFROeXlIQURvc05XR0xSV2MrbzNiYmZOaldYMG5yZ25lZjVteGJvdVZKVnRGOXY0S04yaFBYS0o2WmJQeGtnbXNkVU45ZHZqYVBHYVJwZVRrSktYa1ZLZmsyK21oZGhobklwY0dCQjU4UzBMcEhUbkxFejJENFB3TDVNRDVKV2xsdkp2dEF6a2E0MVRkT2tCWGwxOEN2S3hZTURaRE5NNUxxbDBTMHhwb1VhYlo4bytRbEpoKzN2QU1FZnFuemVHMEJzNlQ4NkhhSlg4L2dIdmkwN0JhUHFldUg0M05FSVVQTk5ycjlzSkRRQ0ZKQStpZXpHSWFkeVFyYUI3eWF3OGhaajB2M1BLUERHV2ZrVG96MklWbU1zbGtRTGhFcWJMZVRCVy9uS0lkUW9mem9XWWtsZmdsWXlCeWc1TEM1Z0NBcEltd1NxR3owVjcyUDdsYlp5V243VGhuK2FSQi9zMjloMFNsdEQvZlRGY0pUUGZtazNITWo4cis3dThXeHlDaEYyV3h3MmxoSUtiNFRvSWdoWGdPMU1PeFJlaXAzRmw2WCtXcTIveFkyd21ma2J4U1E1Q1JValhMRk9PQXFmOCtialY1V055MlZHQ3ltQUM5RU9uanBLL3VzbE5JMjFPSXJGTVRJdVdFd0VTQWxCdXlOZnFhaExLVFlnTUg5ZEd3MXZ3Q2FUd2dtVkpscWtYTTFKaTgwQVJLY1lYUnF6RmZDNS9QOU5PeHdtYms3L2ovRFladlEyMFpOUjZabmVlM1BEanlVT3NSMzIyV01xMlJBVlRacUEwckVySDgxVGk2MThpTktqdUs0eDUraCtadmtIbExEcHFDVi9FYnRxOFppaGZWNzM5a3dlaU1GWHhZWmprQTYvN0dRRXdsOFh3WTAwTnBrSEx4ODF2alhHVGtYeG9TVTNGN2pWYkFYYW1EU3B5Sk92TjZwc09LS0xyTWh4S1NlbW5ZNkNldkREMkJCUkczY1JybjNsUWxhc2lxQTcwRlVUK250MDZtRFNFVGw4eElyN1NYOVJIa2dTM3I4MWwvdEpUZjhZMCtCQnIvZnYzQ1RNVGkwRUZSR2tXNWF6cmxhNnRaL2dWNVd2Vmhrd0Z2c0dxT2N6RHdFZnpNaVhSUUFJZHlKaFRXYWtSRnhibkIyZ1kvRlBXcFJuYld0ZklXbituK09rYy9uNTVvdm5pM1FEbVlxYTBPbk5jaVh6eDdNaCtQak1yTDRqdUhEMGM5ZlBYQzNOOEpuYjZpcXAzYVlidDI4STFac1NibkNsajhXV053QnJmNVM3elI0eGVGMkVKdFlmTTU0eXZScmt6N0paTHByNDN5THJzbWJiUUlRTTM2c2k3ZExwVHRXcVlFQ3NpcHpFbkhJcDVKNHdrb09zQnlPR2FjZUlRalRpbFREWmpsS3hBV0s4enp6UEM2K0dKbmhDVVllVVh4YnBWTWprSk5QUng3U3NwUFBQcUdsMnpBdDdtWjl2Y1dvRk1GcjEvaTdTc05SUURTV21DZUlDR3VOdGhiMHdmbUtRWU1NYndQaVRpMTVZbmhsWFg5MjM2enRxdVlpSUtCYldLQVNyTHBhVXRVVTFrVDZyOTV1WFBnMFdTYjIreWgxNkJEc1Q2eXRRN0E5bEVkSEhGdUQxcEIzR3A1OTdhb1hwOFM5ZE55Q2J1NHVvWVh5SHVXTkJvM1UyTFM3SzRpRXR1RHFwdW1GdFh6TENWMTJGM3VXVmRnQU1PVXJ1UUFKbGJScGM1K09KQkw5UjVYeERtTWpOKzFESFNMZUFITTZHRUVTMUY2WUpBTUNzMVVudUZDbGwwaHVybm0yUkNSSEJxL3VzS2YwQVlMVi9mNjNCU0hxK2h3dkJYVlZDZ1k3TGFXRDZrRG9BYnNabEhOcGdFSlRtNHZ6MXBmelVXZk96b2NOQnQxNG1vcjRQOVNrcDNTYTI1aWZadHFvNEJaaFdKK050TUNVM3dlbFRnNGo3VGV0aEYyYXRidlFlTVJaSmR2alQ2a2ozSTZNdUtLWjNOam1XZzBQT0kwUUVNdThVRld6dXNpWSs1SzhRbi9aV1JNUmQybHAxVWNQUVVMdTk0d2oybjJQMFdOUXBtME1EUUFOQ3BGNXo1NGQwZDF6NVJmelFSOTlQUXE4SFhaN01ZZlllOVFONmloVU4rSklMeG50Y3h2VW5yWW1YanlacWlBUE11YmJWa2N5TUdGdklDdkE4TDdjMWl0Ujk3ZE5iMFdPUXJTaXExeFdwOTlNbnN5NXdSNkg1ZkhQb0NydDg4ak5UWTIwU05GZWJ6ZnpkcWoxTmJQeGIyODlWRmhXY0dYRTdQdFNsRXdiZ0Rvc1pzZTdkbnh3dmtTZm5QVlpKbnRJS203S2lXbDI2Y012QTFVVlNycmtHWDBiam50Zzk4aU9rTEMvTzVkdTVjRjdyd0VicUNFdnhWZVQ0bGxsYXJSeHJPbHoyZmFtRm1VY0pncFJ5bVhSK1psSzBVWkpJNElHZktKcjBFWXBUWXZ4S3I1c2ttNnJVbzAwZzNVSk1nTnlsWW1Ra3g3WDZsci9HUms5NHFWY2hhL0tMUVlpOVhYUGplR3hoTHlRMk5aYlN1eXJwMTJCaUZPVFkyZnJkSjVFb0NwWnZqeVlsTFM0NENPMndybW8xMll3eUlKT2wxUHE1Nko5Q3hmeFh0QVh0OVErTHdIcDhWVUlwQzc4SHdLNUhNUHRLQ2lVRUFiZ0VzNHZueEJLbG12U2lqQ0xrUkhseDRZWnQ5RVh3aW5lOHpBUUw5dCtLSXkwRUZQZG1OWFlEMkg0VkNNMmlNL1pHdlhkMEVCMkQ3QXQ0QlB0Nk9OOFR2V2xXZ1M1YkJaSnNaZlo3djJjWmszdmpkRFhVVFpSNitGZlFsNVpaUyswK3FQRlU3MFdhOXhQbGdJUXRQUUlYWVZNd2pRWHJaUXA2VjZIK0RjRlRldVpaTEt3WVp6NEJEaXdVdmppZDB4eTlwNStGcEpUbkptQ2R6QiticGR1MzYzdk5Yb3JlRVowOC9xcCtmN1Y4MFNpR0pVSGwzOHN1UzVQRFI3RW85VnN2QkFsUHpoSjFsMnlSenFvSVAzZkVqcEhLRFZvdWxVYUpFT1plR3kyVnhmMitYWk5mbmJOU0NDY3ZIcFIyV2tNUzZTYmNraEFnL3E4djBXbFNiVk5PdnV1Ynpud3V6bjdFSGtEa0pObkRFY0dha1RKdTdtOTJ6RnlGbmVSYmFiVlprZUFlVDJrcDVvZGkyVmgzVkNuTHB6T0E0WkY2RkMxUGZ5OVBMS2I1OHVxSFNzcVZvaGZmZ2U5dWg4VjNFQ1dFVm9ieFVQQU80dGVEVW1seFlQYmd4UnA0cDNnSDZwWThvSVFLVVBpb1pDeDM3MjhwdWV1VXF5My9HN3RIdHZkUWI1RkV2TXE3eEFxcUg0U0lESmZFQmRDSFpjbGlNN1hpMURiemFOQVBXa1lEVDJOTHBsS1NBck8wcEdrajVqN0RtRVovWUtrUnhXeXpDZmtOT0hKK0NJMFQrRHQ3TlRvSCs2M1BxQ3JNZTZoNmVqSHpEOXU0SFN3aFQ0TFBuWWJXRE95dktPd1Q5akp3dzNIVWdoQ1pDdVZ1R08zYjZEcDhiSk9ZOHZxRVhRREprU1F0VUViajQwc3BvNUlyemhJWEsybDZZT1M4WlRBT2ZKTUdEazJKaXBrNElTRWdGVWVhT2FQbi8rczJ1YTVWUDdPdTdHQ2Rwa1FROGtlN1Ireit4MnR1bTVtdU42aWpLWnNYYVM1UGREVkVFOWN0NzVGKzdYM0R0OFMySXFhTUF2amhXMnU4dlZpYitDNDVQZE1iQjl1OFBaQ2pPdUNYRVAvUW1uT2VLUC9sZTQvQzFpVmZsdVZDSmNIZS85UTVwd2hDTUNOMVUxcEMvdGR1UGwyTGVhRXVZNmRrOTF1MVU2cXZPRW1tU3EzK1BVd3NzRXd3aEJWZmsvM3plaG95enFpZ0o2Ti9NUzBSa3lVUVVJV2t6ZStoNXBmc25PZlJZcTB6bTl6NDZQTzV3QVphOVh1ZHlXNEJrY1Jvei9YdUVlaGRWbUkxRGVFUkgxeUNoN2tzMUp2MHpRSGF2QStBcWR4OUthelZJeXZ0QmtZNHFpbXY0SElXVXMwOTJHd1ZFMzNpR2t4VUhzS2lpREJXZHZBbjZHRDlRVmFGMG1BS3pNVTYrUHlTM1JFa0ZQWEZXd2VJazRmMmRyVGZGaUpsNVU0T3E5U3pGSWM0N3BoRXVDVGNIbDlPQnJKTWdNSHBzN1M1a1pQY05HaDNmUGVUUkdnaXFNSzF4UUhSZzhBOHBzRUJIcFdyOU0zSHovankxMXQvQlVoNzlWQWdvUGhNY2JxSU1pd2xpVmFueldxdGFwalowMXp5SFhHTVk3endIaVhoUXFINzBxbCtnRm1sWjEwZlBNRmd2YTVRTjg0S1cwam9mVEZINXYvSlZHV2EzM1hIT2xEK0FYVUxtNWo2UCszMlZmeW1RNjhYQS9UUnQzN1l2bmpXZEhjVlVYamtjSUpJanNLYVBoT0RBUC93WU4wbVp4WFFyb0lwWVBuVzdHWVVoUVhpRG5wM1YxOUhtQkJmSnFxbWhOd0dUNjQ4MTU0bFg3S2xLSERaN1NLdlNuZTJrMGdDVk83bTRQenRrTlFqWjE3VDlTRnhIczc4OE56cGVrYy9UNks3TTluTm1oSG1XRERZSWdHbHdZRVFQYXowUFNBRWl1dnNTNGJmTEpsenZSdVkxbEg0Mk1QcmhIZ0p6Uk95OXhQK2h6RGRlWS9NRC9EcStuemJXaVp2MEhVL3BXOTIvTDhoNDBnNGFvTVQ1SDNXbFNQdE80OTg1U2lpeGVXQXNRV0JHUkc2cHVqb2svYkZ2enp1OGxxSmlzWW5XRm84MGY1Unl4ZzlsLzNReExzM2RxczNjRExnRDA4ek5ZbHp5Yk5vaUpzeW51Rlc2Z0lsdVpPU3NkRHhXRkQxTVo3YnNFRXp4ZHgvMmVlTURjNENnazRCeTVGU2YyVHZEb2xwRjBWV3Q3K0t3VDBEb01oVjNYUU91aW5ya2REcURUaVRwd09Ja1BpSllHM2xsRWNGakw3MTkyV2FxS05FSGxDWFNsQWFqWnk1SGNLYlIwREhiV3FTeVVjdFExNlRPYVc4eWRYZUZMSThrRldHcDgzeUE4dVJub25RUnNyL0VhdE5wajhXMXpBbGlWTk1JMEVWSW11Ym1kWUdBaVE5UlpYS0dKbzRZOHk0bGJjRGwwR1FXYStodzdjRjFNQXlIL2xuTndoc3hpVkZqT0N0RlBMZHNzYW5Oc0QrOGMvQ0c2RkdwVlcxeU5qRFY3dmZ6SktSYmlRWU9Qb25rNTFVQW82TVNnVENpeWFWZS9td2c0WFRNM04rSGwxMDQ3NXZNTGlzeVpiRWx3OVRRd2xoSkNkcVJKOXBNZmZVckNxR3Fid0p6V2dRRTR2ZS9uNWQvdXFmMks4Z1RpWnJUanY2M2VXV0t3V2IvaWVTcy8wZXIwczBPVzl1aVZpRnI3cXNLT2d4dlBwMmlNbHc2b3puc1hJdEFKREx1Mmg4eDNtVFFJaGNuUGthNTBrbUZCb3BsT3NBbU9CUmQ5Y3Y0S0owUTRHTVdvU1liKzdic2ZuU1NCU2t0aStVSkRXWENzUTlrUG11OSsxL0Qzek9YbzNMVnpJb1pobHBQcm5Id2tIOEdqTVhkampwTEVxQU4xWWN6OVlUdkh1VWtwaUFPS3IzRTZRaEZYZVpJa2MzYmRGL0MrRi9tWVNnZXdiK0x3UTg2dEQ0TjQ0UldDTHNGYVFYNUdqejAyb2JhT3EvdUJpaTUxekFodk9ib1BTbGdjeTZrQVBTZ3JGVGNMOWZLV2c3R2RwS0dTdFVRNHg4YUtkcWhLVzBEaU16TkI2b0paeDd1bU53TGtLRXhqS01qUGlsb0pGME11cTEzOW9FenRXQjlObHAzZzJQTGdmelNoMXpmNlQwNm9rQ3hCUUNrMG1MN1NuMkZUdVptL1lnSXlZQllCZjFvYWFOUFA4dEx6cUVuSWlOYm5MbWhCZTZUQy9MbEhhWmNRdkdBVEtHRjEzUmhsSW1BeXovMWtVT2tOTEFSd0dBPSI7CgogIHZhciBIRVlfU0lSSV82NCA9ICIwL3RzN0tRS3h5LzAzU0pMb005NzJNK1hURldjMitWWUZCM1d6K2c1L1NIbFgyb2VwUWpoVTNjajBUUTFMZHc0dXVzV0dlVis0NnJQWjlMQ3lvYXlHMnhPRGtCbDZXaEVjeVFtajFFU25tSmtVTmZGaE8vYlhRNDNFRmtYbEVSbVREZy9ZWTdiZGdMcCs0akNEOThzWnJNS2JjOVZhYVdQbWhkWkxtak5xWVYxeUNzMVI3Y09OWEdvWFcvS2hSTFAvSWJ4eUd6dDFuR3NCTDUyTlNlVCt3ZDJKS01wV2FzaTVyN2Z3eHFWK2lNMjdZaTNNUDZaeXB3QmswemZPbkRGb09pVTV0aUdNQjZsaWNOaUwzN2h2RXFaNDd4VjRoU2IrQkNDTENxbFZaR29wUStHVjdUblNtbXExMDdvM2Y5RElIZXNUMEE4WUhlbk4zOXhEeHMvcCtSNmg2eDgvNzFhdHkwSzZ6TXBSOXhucjg1T2U1aStsZ0hKTGhTbWJSZWl0OTIyQkduVW1MbXBUbm02NkNaU0N4Qk5XTUZTdHZsQVFyaUY1dE5tWTNhZGdnMjdMbTdtWEZKbUVvdXM1TmVkaFBOR3V1SzFUcjEveWF0bUxZNTFJSmh3aXQwWWl0cldTRkJjN2owQVhHTmxpY29xcUk5em11cjFZMWRqZWxLZ2tFVmx3eW5LeS9yNVlXQ0xvY1lqclJGcVBKMThhSHNsR1YxcFlMRm9LSTFRLy9tdWQrRVJqcWlqeTRVUmtvR042MW1aNXhLbFNrOVVWa1B4SjVVL1Q1SnpibFRpUmt0dThZcW91RkV5ZHZBTFd5Q0Izdnp4bVZ5RGVDK0xTN0FPdytEU3p4YjBZb3R4TDF5ZzFrc2dSODkzWTZWdFhINzQzTU1pUnA4S1RXK1FGMmxVOUxwRFJCczZ5YzVPUmF0QTBIVXRRMGVwRTlZL0xsWitGRExCNzdwZlh6cHNSaTc4Wkwvc2Zkdy81TStVdHNDY1ZjamdBQXo1cm1TMk5kWGd2QU1DZTlzdDNzdVU5dDBoVTFVVk90T1JLSnVRemJKNTI3QjQ1Zlg3Q21EbmVPLzdLWENCZkQ4OURwMlN1SjIyL2lJMTZMemlGdTBBbjVDb0dKT2VaM1M1cHZFbHl1dDYvVEQvYjJUQ3RZUmcyUXBjWXBoN3IvMFY0ZU5FNjVJNm51VWlDOHZjZzI2UTExOVpXU3lQRUw1MkY4V1ZVTHl6RTVKSWZwd1hpWEQ1VHljZFNUajBKaFRBWDBSOHBjZHNwdlVXU25aRldmRG5hNFltMzhEV092QVNsdmZwd1ozOXhCRTQ0UUs3NnczdG1VZEEyUzBtejZHckdjS2Z1TTF1cW52Q3QwYVNqNHdrMnpKS3h3N05VMWl1Um9VQ1lwbHEwZXl4djl2S1VoQ2hrVHlTb00ySWcxT1Q4SnhwcXIwNkdiQWhGbnF0MzROTkx2b2ZwQ1l4ODI1SVBLZ0JSaU9vZHdzUEdjbWcrVVVTZVVkWjNJdjRoSkN4TFpoZXJKNjZlS0YvUlhTZ1NSMzZTck1HSlRLYkdvTzdWN0lmK21LRENBM2ovLytSUlVnWmhpVEdSS3FCamVuQ0V5UkdNNUttS1p6Z2RDdllsM2dQSVdiZWJCTTNEOHAzT3oxajFFMHBaSndnUExqUzlMMzJtQzEzYTd2ODZNMEtSeFJFVlNYWXdYaGx3RFM3MUhYY21VZDk0MXlGM3BXUUpidGlidCsxWkhwV2s1a0lvNGE5bjU4bWJoL21OdjRNeVFrZjVTakNjTEZYQmI1MlFtM3MvOWVCUTI5aWk0NEl5dUs1THdiYnprN1I2Wm9MdmRBZnkvMklHd1JuY0hhSzA5alQvVHVVZm9mZHI3WUNYMXlvczI4SjRka0VrWG01WUx0ZWliVDlWMUhBUTZCRG5yVEFTUDVxbmFMM3ZBdm5id09neXNqd28zYkZ0R3N4QmZNbEc5SkpOUFN1YWZYT0xNT3ViSVJUbHRLdndBTnBQaUhTVjVlZUw5L3BDbEswZkEzL1J1WU1TeU5tVHNpVFlUdWNDbkRTWTFEZ2NDc3h4UnR2UVNqd0dZUE1HUG5naUcrcys5bGYzV2hpeGtFSjRyMVZ1VUNVU2tQMzhjWUVWcHdVa0VqK1JUOHNyRUR4RXA4Ti9yVmlNT1N0cXBjZUhPUVdmZVMrSXpHOHkvWEVEc1ViYjh4a0IySEMrYXBaem9TODhJOHI4Y3BXUXRTQW80THhneE1DeldsbTJMYVFiU2crTkxvVTNBOTg0b1lvQ0FmMmh3VW1kMkx6dTg5TlN4S0hjc1JmSFdWbDFOekQ3YjdhK2JGS0lYUDJGdXlBTTBPV3M5WHd5TXhpcUJyK1BqalBOS0JiNjNja25YT1BrSUkreXJ3OUxtK2QwaHBjVmRpN3hvV25NRzFRNStpU0QxY1ZGVXRwZW9UTSt0b3ExbjFhVUg4VUN3ZG10bHZrWU5CWEdhRFVibG0wenFyQ3A0VXRYbHJ5d2hUbVJ1THdCWGRwaVE2QzVEQjI2RWMwcEoxT1dJMnllZ2xHbnZlNnhJMEpnd2NVcU03aGprNnpTYjlGdHNyWXFJSmpsNllIUVFNdFdKYXdRLzNVWEpRL0trb2hQSlJIMEtMN1dZY0Z1c29ONUNqY2VIZ2lwTGR1UEo4WVpFQlU1NU4xM01PZTZiL3ZoTXlQUWFmai93Sm1uWVV0cmJ4bzBGbDNqNzNibTFaNHB6a3drNStFRU13Q0NYdUk3VXVFTWZDMEU1bW4vZkJ2WHRXVjByYXJocnpySU95cEFrYnM5L2FDOHB0aEFyUFc2VmJHaXNteVNPanAyUG04THhUVE1KeDA4ZUZlT3NrSU01K0lzdi83ckt0Y3Z3eFVYUDh5NjQ5WnhZVGRLd3gxS2dvZktMSzhDZndidTFzSEc4RFNCQ3Q3SVBaekFzclJwTGhxMjh0SkJHSHVLSjB6MXBWQ1dPN0RXaWJ0UE9WQmxlcmJUUUNvWkNMbmVZM3J2c2UrQjZYV1dNTUd0K3hrenB4L0JFWDFidUJMUndHTUtZZUdsSk4wdmdWUmFBSXFnWUswZG1TL2RSSGR3Uks0Z2lJZHJOOStsT3BoS1NHVy82WG9tQ0JDQmZwcmE4MUhxNnVZQXlJQm1RTUp6Wlc2dVZyN21XQS9GL25WamdISGhlSGVEdWQzdzc0MmdHdUlhdERFWFFlMXhCa3FIMUtQcTBrRnJxQVpEbmcwcEx3MkVab1dzZEdjeHRRQWVjZzIyZXpsb3FEM0R0ckIvTXJVM3pWY084ZUU1NXlzckM0QnVDQ01ZWEVKUzBMTitKQjNZK1Zrc2xMZXVVazlJZEdNem5mUHJPT0xnZEVXLzVIV1kyeFk5ekljSEVkdU56ODgyR2JYWHJjNEt0ek5mZ3QrK0JpclowNk9vS0FIUEpsMGJHWUdKcVhCYjkyU0tTajgvTUVSL1FnZUZoK0RKSUhnbk9Bd0NiMXRXSnJWMXA3MllmRDJuMEpiQi90V2IybDhjTGpSNnhmaXdWY3hUL2Y2T0d5T3BZOC9wSlBKczRPaVE4ZU1HVkVVVzJXaHQzZ0FoalAvYmxTWjZGNys1WXBWTW5oVGxRdjZtcG5hSVJGdjN4cXhIYWlBdlZBZFlaSUpma1FRUlpBdzBER1lBNU02ZGFNZFV0MHRraE5VTzBEMlVHNlRDT1dFbTZaMUNOUmp3alB5Yk5yV0M5a0QyQzIwd1ZrWGRTN1JybUZtTU9KT3NDdkVQYkV4SzV0S2UwSEQrWWp3b25hZjRreHlyVW5XNnF5bmd4VmxsMUhyWUlwZVhFbXBEaXEvTEV5dnJyOHkvdTZraUw2TVlrdjJWV3VyeVVsZE5FRVJObWVuRzRzTElOQk1oMjFFNUpDQUsvODAxVFNqQWs4RTJYU0t4c1hxRTZOTEVyKy9hbmNjNzR3aGg4WXVlWjY0SEZCOUdYWTlpbE03a05vamdpaFdlUkRmNzhqeDZ2QWwwV0g0OHF0aTBUTzdYRWV3YUpMc2czNjAyQ2RibjBmQVRzTDFyVk84aDh4a0NIcitYYkZEc041WXphYk44eTI3VXdrYXQzeHBxYmZIUmRQQXcrZU95dURUWHpmZDFiaGVldXBQSE5BT3V5V29rWWhCMS8xT0JqckM5YWJFZTRkT2J5WW5ITlI2bFo2empPUnJ0V2FTaWR5d1o1MzUzSmxRc3VJZ0Y4dWNyRmdMVDk4N2F3QytVOGVlSnhaNmN1STAxR0cybktFUWEzdGl1cFFqSGw5YzZnb1UyMVF3SmV2eE1ZTTRwOXFkMzhtcFVUNTdGV2c3cm91a1U5Tlo5WE0xN2srZHc4WGN3RHNlbUFTV09GaTFCdzYzZTJucFEvYktEZk0yL3VKdExkSEwrcFhKczdDRFNmS1V0b1VWdWh6VzA4bEhDUWY5bmhjWHZSRVZCL01XRm5uYjkvWFNkZXZ4RTV6RU1RTEcwSjVldXBaN0NkVSs0R0tyZXpzOTNKbVVLYVNQaTZDS2Y1ZzdkenkxMkxQMUNRY2NHMFZLdmNIRmszR0NsQnJCVnlCR3F0R1c1WGxsOUZpWm1ES3g4QXhBMEsvcVNHRlhmeURvRFdYcjZROTgxcDA5QTRGbjArTEdYUTJZREJUYk5EYW5Pams0NUF4eW8wZnBXTDh0SEtOWUtjOEJLVnVsSlRGczBBWnZ1N0VmMjd0elY0NllRVXlyTi9zZ1lKZjVxNFEwZ2FxRDROTHlOd3NVbDU4cEREWWFQN1NOQzVIL2o0MEtQT1h5R2orWUg5d2k1azE4QlMwdm5yWjJHQWFMOGlKUGRQMFcvS0xjT1dzSThHSUxzaWViMmtKWG8zUkk0K2Mrc1VGZFE3dHhIb3NzVjdQZFlxWnQ2UHVxOEh4N0VBWW0rSlEwMTZoNmhKdWY5NytEV3JIS2JaUEZ0WmVpM1kzUGlnNjNpQ1dDZkl6VGRtb1M2TTdYQ2c9PSI7CgogIHZhciBKQVJWSVNfNjQgPSAiM2QxRXhOcklkR1c0bVpGbGt5YXNvY0ZWcmVpdjhkMEFvUUFDTjA3clViNkcrb3g3UGZvMEV0VHA4eUVhWUNiT2UzdUV5N1pGNUc1bk9zMldhb094MHA1Nlp6NXRwZ0YvcVBkK2tHaU1NeU1jb3pkd0FlcHBQazhkVVd3b1NZQWtUclBoSDlvTjZ3eTJ0N0lDTnJKNFQrN1pKdTlzQnhVK1FBK09Bekc4ZFVJRHN6RGlhOC9mejJ4ckx2SWRmbHB6amt5MUNSSVBxUjlPZExRdklTQVMyM0d4cHk5MVV6Qm9HV3p3dE1FM0Y1WHY4YzB6UThFNDQvZmtsS0Y1cERhaDgzajcyU0VEdXFqTjgvSW5xMEM0K0p4bGRBTkM5Tkl4T3pCRE8zTFlRSTkvZlB6a0NzWmplRjRCYnQweGJKUG0yK1ozcmRKRXF0ZEhha1cySHNya1krOUdIYWVPM1dkVEErR3MwWE9Edm1RMTlySk5JNmxPQ1JCUU9xM3ZPM1FNMWhNTU1keDFnODBVdGJyTXJLOXR5NCtvTHBnNFNKR3lWRTNlSG9wb1QvNmJ4NkRDWEZpSGZsYnkwV3hXRlQ3NDRwS2pKVy9vcWIxbjY4T0NyanZFWndsNXlyaUFMTHUrS2d2VDJGYXdDTVJqVWlEYXcxS2M5ZHBVRU93UGV1MkJlczM2OEE0MXF3Q1IvZG5sMDhNenVJZlZjRkpFK0JPbm9jRGFXem9KemtzSjZYelhQYjFjOVZaYUVYdlc5ZFc5Zm5TOUhOYUxOYllncHd3TVFTUUZjc1ZJQ1gzang0V0p1c1pNSWdOQjRaKzBnT1hHaElHRXhJWFdUV0tIbnpQWXNkT1lFOEQxcU9QQ2RDRG5IS1B1dFp2Q0RQZUhZZHZEVHlqSGZCSWRESkdGZks3aW1nbHFlQmZSNHFJQjNXU1J2MUEzMm9YSmVpQkZydmxUQ0JuRGRxYWRXeHdOZEViQ2pxLzhrMkZkL0JxTmROejNsMUZlcEVQTWFKTjJrUG4zR2ZVSm4rMktiNXREcUFuU1psN1ErNlB5WDA1NXZUVnZMemZPL2ZuTU1kcGZDTHAzaVNSZHJZN0h4N0l4U1dqSHFYWkU1VWJtWElINVp5Yk1iYWtxdEpjQkFsWWMweHZuWnRBK0JaVEhDVFRYMElHaDlUQ2tlSkI0T1BJVCt3ZWdJZk1EbUN6OXBnWUllQkVERWJlV0NKaTVFQWNFRjVFaEE2TXpacW8vZVlXZGVBK3pITzNwSnFNMHN6VlFCOWRBRE9pc3dGczJGTm1ERWtqeFZwVWJWTTZndEdxS2xCQ2VUQnNIRktKNCtDWFJubzBLMjg3YUltbFkwUnRpNmE4QVJkMzVOTW1mSGNPaEdKUEN0L3BMelJZNzhHRDQ1RkwrOW5SQkJtTHlTVzFmVDNsenVjTzI2bHQ1MVRBNGlydHZGaTBPeWU2U0VGRkxoTnU5ejllNnFMRGg0WHlRV25UYTRjb2k5cVZIUHMvSjVNeWNNYnVvUlg4aGhGSkRxV2kxTjdJVGhjYkdoWGtJK1diK3JsZVk0L2E2ajFpR0R0eTd0VWsvRUV4UEpnZ1RIa1gyZjNFU29Yc01lb1JhT3d1UmFIcWJDbzRCOUNpQldublhtSjY0VGVHTTNDNzBDOEJDNzVpMWRyTEhzSmh0czJpQmkwU0NIYlhUaFBGdjc3dmtGcy84a1N5enFvZ3QySzF6L1BGbFM1QUlHNENsYnBmQmtieEFKa1JMblE2Q2VPNzBCVHFleCtET21DVmNZUkVDMDJrcTdDcjh5ZHkvUHB4OVJycDNRTitKdVVyWVV6ajlyNFk3KzlFemRTQWY2VU1IanZmYWxYRkJqWTY3ZjRBS1ZBWVhTQStLM2V0ZjA3ZE9raVlFNkJpSEFTQmpnRkhnMFFZZVllNkhEZHhFS3NiUHNoQ0FDUmlxNGMzNkl2aFlDa2tMTFM4Vk0ySVNYcldzOEtienlZeHlBVzgwKzZDa0NFZXdtNWNFNVVia1kxSWlaVmF1QUgrcTBaVlFkd2JVVlFXVk5JbEpFc2xsZFFaWHhid05ZajY0NkdmaGJ1TC9sTC82akxyalhHaVB0eUp5L0VzdFREdVBiQ05LWmQ0M1Fnb1BaV3U5cDdhRXZnOXBkRzNLZFBJSEFDWDRHTUE4MUNVU3NhSDM3WGRJaC9RR1NDMVNTMTJQMlZPcUpKSEdrY2JDNHBrNUtVSEUvSnlMS1pEYkNJUHJSYzVvVmVYSFVKQnNkdDR0Y2ZZZkhLSiszdjczRkg1Y2ZYeFk1S0hHV2NNdjVUdXg2dDlDd3Zia1Y3MkpIRUNtT3F2akRVODI1N1FnWDh6b0EwZGZCQ2pLa3hPS0JjeWxxTHIvNjR1WVBuNkJzYXZwQkFtcTEwaE81V2lQVUtYendRNk4xby94andGeDZ4NHJDTW8vUmNIaWVBTUp5WVJRK2llVnpjTndjOEh2YWhlb3FlbjBsY2VWeVJhQ29sSDVxZ3hXdjMwUWJQR3cxUGJubG96dVcvQm9GR1c2eWhIcmFmVDkzWGkvbDdublJOSm9GSHZCOWJOa21zRFRtK3JIc0QwQWVKZldNSytoazFOdHh5dUQzTHIvTUFtQVU2TjFPQ2pRV043eHFDSFBGaWNyUmp4d2xndjNyZm05S3ZqZFlLQlNldFdrak0yekZ1OFhoZFVZSHVBS2VxZVo5ZlhJUldtd01yd2NYT2NPa0lPbXJkMUhFWVUxUTgyZmtOd0lHbW1QMGVrZmFab2FrSEtNNkFBRURCd0xkUTg2YW1wMEFxUlN5RlI3Z1dkL3BDRUVlVjV2ZjI4cGNsa1lEb3Q4U3loN2lEcXh3andCQzNJVExVekxra0RTcGd4VytrUS9EcHQxMFRVRW9HYkJJVDhva2F4VGtza0RnNExvcHVBUE1zU0VVVExNWm90dnR5YUFYWGc5emd4OWhTMmk5Vy9EVUhZNlpXZUkwblhuM0FBc1FPbzhHSUtuZVVBL2h0K1prdm1SaUs0QlRVNUVVQXlCUjhSeVpzMkgzQ1pEOVJ4TGR1V2VtaXhXUVF6aXpPMEpCcmUyc1MxdEJSd1pTeEpFTkZzeG94cmJQVmt6MzFmRVZORGZkV2tTNEtMaThpbi9iZlovZUZwNWEvTGVRV0k4b1VsV3AyeVlGQXFjeVB3cGpadlN5R21hQXRaWHV5ckVpMks5UHlvbkZJeFZWTXl4QWZ2clNEbFkzU2pxc3MrMFg1c2VZcGZpMTk1ak9BOW5uZWxGVkIyRjVxT2d2cTN3b1ovc0hxV3RnVnNUdWE4VWJmU3JvaWNzeWtCblZQR1laRUhHbUFxYmdwenZVaXVQU1czbUFtaU5UWnBSdDdWRVFsdGhTQVduSkxPcVpNSUJwT3pwMEdMVUNRWU1saTdJNlFMYTYxLzd6TTM5TE1TbjJrTnM0SitiQ3BqbFNtbkNtbEZ1UUJodkNnTGxYVkRVbUMxVVIxdnl1MmFKQVBsNDFrUk4yOENnTmk0bTNsUmo1bGYyYm1wN3hkRmVnOTJYa01waTd6WTZSYmkzdmdkazFsRHhSOE9vbTQ5YXpFSWFFamNCUHYzaGlEOVhoblhrK1FudXUxU2tPUVVQVHc4V3VNUUxWNjNSeWFUSWVXVFd2TTYwUW5WQk9TRHlnZXpWbUNIMzFFR2VRWXVQMHdvb1BmRVlUNVJDdHN0VGkzbUg3Nm1BcklWYmtUOVhyRUNTOHl1V3VMOFpYY2VPcGtFdE1CNkk0M3hEU0xFUjNNLzZQVzlzUnJMZ3k2YkpHdlp2SU1kYTRYMFhDM2l0NFdpUDh1TUwyd1lsOGpkcGF3TkNFM3VoTjdGa0JWN1JWN1dvSlYyeWRTb3NkeDM4U3k1bWRFNkFneFA4aSttQlZZQ2NJWmx4cUh1QklrY0MxZXdyUUJDckZYRXdyeGVBTGxlUWhPUjR2WEtMcjF3Sjl5aG90QnlKcXVSU2plTlV1VUtOVTFsc0UvazF3aVp2RGl0aWNhVXA3SU11THlDdUE5L0Y5ZEdWSzlHSGwzMXh5VUgyTTBjTTk5WXJqZkt1aEUwUThSSkRHNFR3N1ZZK1htVjFJL1lTVVNJeUhqVzJPeWtxQzRqc3djbEZGMmt3djRrdG5QV2w2Ym1uSTlwUHRjUG12bFZEWU9FM0duY1JBYVNuSE1OZE5WdUNPUDAwQkNHMXd4bFE3VXpSeTBwaXVzelhvN1QwcFUwTHZQTHhZTUtYVGFNMmdqU2cxdyt5MmhLWVB1QmZxYzJDNzV2YVg1MnlialpucXlnbUZ4aGFqWThRQ3N3SW9TdjA0VzNuNG04V00reC95cXV4NG1LVCtTdEVUYnNDTWRCWXdQZWh1alRKYm5mMHJXZi9Id2tsbTFlSHo3MFkwMndrQm9qZGxvdEloUnJsUkxIbU42WTMzc3FZK1ZRU2ZpWDBEaE0wMHBRWmxxK0dmd0pjL3UyL1dKYXQ0SzhCbHdNNW42QktTMTBna1RiSU9QL0J4Tjg2Y3lCVUdtdWswUzlncEJSRWthV0JIWTlNNGd4WEpqQjVzSi9pNGFmUmVQeUNRd2hJc1lCbmNEVVpqc2NtWUg0QWx2UFZpMUZFSUtKemp5RGZtdFVwTVR3Q3FubGlUeVBNc3ZjVFRpbmlVcVRxTzFXUzJaeFBwLzI0bmxsUXpYdWxpMjJnOFM5QjgwNU1QNnRHUm5ZMlpRQkpjSFR3alZmaGlGSHM3UURzeGg3SDloUXpwOTZVUjNuczVxcTVsTmwzdWdqd2R4dzJwOGFIcGhWNTJUa1h6MDRvMzJCcDNOampXbXpnRTAyU2xrWGxORkVhb2JLNVN2UWo2TXQwN29DQ0JId0JoQ0hkeWs0VnlISzZobGpoY1hhYnVDQzFycW42VWt1RmJMS042T0lCMG1CbFZocjNUa1NQbUh6WnZDQks2cGY1MUZKTjRFR3BIQzRLd1UrNlN6ZWYzZlhpKzEvVE5hUWM5bSt6OCs3SXg0Q29JY3VlWmQ5NXRkdzhaMkZmNklFT0hYclJ2NDNOdnlzVFd6b3NkQ1BUU3BmQm9JcTRxUUZIdmVyVVdraDdxT2VVLzhPUlNxRUZ4ZDNKWVd3dm02S0ZPdC92K054dzJpUkJQNVZ5NzNtRUdsYSs1T2NRWnFRL0M2ajZrVVlhTjNNUWVjVTBNOUpCd1NQWVVETVFjRWk2NUNQWlQxMVFCMlRIRzFZMTVyS3FnSjBPcmlaUFI3SHorN0l6bDJodGFBa1ZBakhqZWI3TXY4YnVFTkV3LzdJVUVWaitoeW5KL0RmQkppK2tBYmpHRDNseHF6elVvaERDcTVhUGRNUWVHRFNzVThZTjJlM3R1ZmZJbmdYdk9heG56b2FMa3l2SkIxTkJ2b2ZqeDNTYnArRXhJdS96b2pXR3ZNTi9QRWVacFhzNmtlQjBUOFUrbkNTZlYvaDlpSzVuVnd5RHU0WEhJd0xvaU1DLzBQNDVkV3lNODVpRlNZbDV2dy9mcnZ1dHVwMkIxYzlNbWxtdjl3NGpWNzE0ZmF4dmh5U3hmaU1vUlZOenN0dE9nWkZ3eUhNVDN5dnVUY091Mm9QTlc1QlljaTZNUVI0ckZNa2lMM1NraDVnZlpENXV3YUdpeURTMnEwOW0rQ0NHSkFBQ3NpVlhkOVFqTllyR29jaVVKSjhxQktuYkNPQW5OMmlnUnJRUWV2Vm9QM1pHZzBNQS9PTW8rVGtJbGJwallZYjJRWkVQdHNHa0Rodlg5b01XdHdKWmJOMFFEdk55cXN2ZzcrRjhKUStteHc1RDFDcTEzRXZSc0ZFWEVoNHZpR2VBdlpDRmw2aW5scldoMEwvUFkydmU5L0xZS0tEZkJ5aXRjdVZ6TWxkWjhSQWNPSWZwRnR4ajQvbzJHUlhycDR3TmRWemVFeDhNZ0gwYXMwbVFwQnJsSS8ydXJtd0FyWE1JY3Jndk1QYkxxcVI2OStnbGsyWm1yQmI5amw5R01JSGVFY2F3Tmo0V3JPdnpzaUR0VW85MlF2TW9KbERKazBmREZUZHpUK2JtWHhjZXJqNUJuZ3ptUkp3Z2pNeldoeXVIdytyNm1STDY1c3NYaU5yUXlhNlFFTnQySkJBNktSdm9oSlNvSzJ5SG84ci9GN0lVZEk1WGROMGkzTUVIMXliTmVOT3Vwc3c4Y1g1bXJINEFXdy9DTmt5MFc1aEdSRlM2L2J1ZUt5MmRVNXVFdm8vc282SEtoSGJhamhlZmY5KzRwcTlOLzFtU1RyQ3FPS2g0VEd5a3hySUJmdWVKR1BYWm1obTBQdUsrNytIYmJHUUk3Um5YcmlGdWYvQ1dWYWpFbEJBU2dwc0wxOVdueW9NQWdMeGhBRUZvSlpCNE05c3dTVWtFSFNYWFhCQllxTE5Zb2hLZTlnWTl6c0dHM2s0RFM0NG9aRTFDRFE1M1ZoQ01OazhoYjZyMmpFRDdsOEZEWXNCNkNTUGpCSnArRTE1YUVwRHh5ZjFlcDUwVjJmND0iOwoKICB2YXIgT0tfR09PR0xFXzY0ID0gIjloWFU2ZnJTaVpXUkJFYUZlU0oxYXZCTGpxaGZOSWs0YVNhdjZSSE1ScDlJZEpOMDUzY3FWZU5zSkpNMlBrdWFkSmlkTEs0ZmUxNzFIekgwZ3BTVE04NUlrUUsvUU5kak1FczZXeVRsTW52QXNmQ1Znd01yN0Rvc2IxelJneEtHU0lSVkYyNGU1Z3U4OUJrVGVmM3pJVjJOQTE5K1BOcll4a0tLdjlkR3dKV1REdWdpREFQWnQzdTJzSXd6YzBic2FPS29nNUNGNXlrWVFnRWZyWlpmSWc5ZUQrcDRlV0ExdUJvb084OGdDQ2k2UzdDdjJHaDdtSHVYTE5tTUNmYUhnZldXbXBoVWlTQnlIVkFNOE5YdlM3ZGljVDNBeTU4VlRwZDQrSlE4U0NmbWIxWDYyVlFZVGhhQ2pnOE5qQ1VTNFJDbXNieWpUVFNTWU9QTkp6YmNRS3lYVWpVY0FPMmFSZDRPUXQ4TXZwc0VKQWNXbDlDRnZkZGRoZUVET1JaM0tERWIvMkpzbUtPbWQ0RHZveEo1Njk4V25qSElMZWNUdGQvSXhya0VtSGhjQlU4d2V4bnM5RXg4MkxqTDUwUy9STXdDUFJMSU8wQS9HdHJzK2YyZmVZR2xZZ25mNzUvTjVKcTRMOWxabjdGbk5Zd2ptS0dmMXVsTmxrbGpGYTJBamlTSGYwR1p4Uy9ZeFkvOG45cWNxRHJEbC82dElrT1JGQWRycW43MG1GN3Qyd014L0c1MTcwY21nQVYycW12YW8wRTBwRmQ2K3J4cTZMbEpUa096NDcydGMxMlE5RlRBVmJtLzNNcFJxampGMlA5OW1TdUQ5cXExS2ZOc1FIaUxRbUFpckxTUTE0Wk0wRHgxRzBublE4ajBDY3JUTlg3a1lVTVRTS3Yxc3FneUlHVFA4d24zNE94ZFRTOWFqZEhPemk2dm1SMndhY3dWTFJGTDRrYXlKa240cEFXL2RxaHJvbEl4RTFBS1NaQllDN3VsUGV0MUdZY3R2TEVRcmxiaUg2S241QXpId2IwWFdHT0tzdG8ycjNRS2ZwTU5ZUUUrOXpDeGNsY3JxUmFIcUFNWGpha2NxbloyZHRMazBxVFhNWEliNGxwd0lKSjhIaUhHRVY4UzUwMXlMQmpJU3kxOUJGUW54ZlpIcHYxSS85QlJXTFQrb0Y3QzFmU2JYTHR3V3RiM3piUUVKV0NRR1NIbXlvUnp1UkVsdnpCdHBHTGZabk9hZ0wveU5CTGJpOW9tQzlweGJpSzY5SldQaE1vK2dpc0RMQ3Y3bG9KdU5zTWx4U3hvdkZRVytCUmpWckVTRUcxZERnR21iY3NZOFFDTjZUUE9zOXAxKzVPSFZ0TzdyeGlrdTVRNXpLYkpzRDB0UzdhRTdjdElPaEl1bm9vNFJlZ3VTRzlTOFFVQTB2M1lMbXRSNFdWUlRQK1JpU1k3VGtRZDE5RkVaM2Q0R2EvQjIrSklIYjhUZTYvNnBHNWxXY3ZGQURLcDV0MnQvei9obW5vRUdwTjluN2w5dHE1OUp3VERlN2MvUG9KWkFiVGg0L2N3Zm0wcFFObkJidmhRZ24zNEZybTUzRlZQVVVwQ21xUmFmQlZUclpyVVN2cnkyZ3loMlBEQnNpallnUENXRXdHN3UwS05UVlFCbnY1ZWZWQXFINzFoQVY5aEZHQitGeTVScktGcmpDcno3VUl2SUVXUytKN01jV3VsdEN0UlBwUHVwT1c1K094dC9kdjE2cEkrVFNCcVBuc1BWbFY4Y0xVS0tTN3FVNHA5NDl1ZzJlRUV6dCtVU0czZXVkWUxmcHRpTCsxQm1sSGQ1L2gvMkNyT0FOSGw5ME0vNUNTbkVhNnpzTmNoOW4yRTdVL25NTW1VNWVlSTNaZkdzRytieW5uSlNVemg0aGRWdVZXZlV5N0phNnE2MHppZWtDdlFaWWZ6Zmh0YUNmOVlZQUNzUlAzOE1UdmxKUTNWME51TG40eGRZMDdCYkNEc3NNMENwS2k0WWFNN0Mya2UzdFkvZGRPM2NVbEdQT1haWjY0R0FmTUFtekwzSmVDYXV5TFMybzkwY1hleGxmdmdiZ3VHdkhxc2VCSGFwT1lHVjBwa205elNvT05XOFl4bDROKzdacXFadlhpTHFva09CK3hDaEZPZEM1Vm1ZUXJnTzVMNW5EdjI4bFV0ZnVILzhRb20rT3dYT2gvL1hJZGpWM2lGeTZhaUlBTFUvME9uOG5hUFVhdlZLTkc5QUxhZUZlc3M1aW1mM2NORVIvRXozY1hoZjVudi9TSXpxMU1KMFZSYkx3anFnRXZYR2UzMDA4eHRUQTNuRXJjcEFGeVdzdkFlem1ZQTlyT2tldjkrVTlqNDU2QlJ3MTg0VGY1Q0FtQWk1dFdGRjhpU0wvck5qVFYyTjVhL1RzdSs2UGZNay9zRzRyMEkwbFZwRzY2M29lcU5sYXEvem1qR2xHYll0U21oRmdUSUtZR2s3OHJ5NHB3cU5CbjFGSmJSZ0ZBSW9KdGxmY01QZUtyaXVtNHF2ZU4zQU5vUmxGMEVJOW9Sc3R2bFhyaTZMTlVoVWdJZjA2SGlMZGRLTmdOcTN0NU92dlpUcjhBaVFwaHl1elVSWE5BenIvZUsvRHFQM2FpeW5yMjd5TU8rU1Y3em9xQXJzY3hVUUgvNnQ2bE5WTkZ5RXhXOFhKYk1yT21wSElIVnRGOVAyeUlXd3pPN2xkc0tCS1gwaWpCYXdFaFBXcnNSdVdoYXpRS2djMFRGRjZUdWlIeCtsby81L3FMQWF2MVhxSGxoR0VJakViNTE4ZnNrYUk1d012YWhQdHpucHNtRmxXNThvUUN4dXYyNTYwVWF6eEwrU2wrZU5YU081N1pqWHloRHlZWlBrWHY0ekJBWnplSkkyMkZxWk0rdkZqREhRK2ExRHgxcElPcDB6RmFWQUc2b3dKMTdlTmRtaU9PdnovdEQ5aWlIRlF0SlJ1N01PbEswbGsvVW00bzNLYk1vVDdYK3FMejV1RlN2aGp1K1Q0K3RKQkIzYTVPY2J1UWNEbHhpalRkcHdwcjBhNk5obHVTUDdpcVdqNVRqZnpTQWtSMUJOSkRrV3RMdGx1Y2l0M3dlOTVpRXN2YnVleFVVNEJoSDRTYUpzK2dDTFlvT2NpWlFXR1NiQm1KZTlINEYzTUE0Zk1hVXFXNFdkYk5UYlVna0ZHR2cxUDNhVWI5UlNmMnlCTGFSWHh3SmNFZTBFejU3b3ppNmlSbUdRb0pwQkZmOHpPbzA1SDJhS05XUjYxYVQ0VWhwOUJJN2FGZnhOcXNhS0VZMVQzWFFGaGUra05ub2Q1RDRpWDcxSnYzOHdmdCtaREUzeGFJbjNyZGZVam5RSEExYUx2VVRHMFpiaUhJSmpONStSbjdkNUJ0Y3UrTTNVUm03eFNlanhCa2lEUmlRR3NYSHN6YXliZFE3c21TSUhpVEJaT0JRbUhwS3F0Q0FKWlF0OExqSUVldUJ5K2lWcFliNytyVzlOcXoyanp5dERldHYwSTNPb0hiaEdzSG1IQ1RNaklHbTNvSHRJSmdOZ2xKQlZXempITG9aaTF0OThHTEtzYXdZbFJ0WVlUalppRUtESmhUQnV1NTF0MGRPWkljZ0V3RFFLMXVIZDVQOWNwTXhoTSs1dmV5NlIxcWZPaHlRQTN6TGdLZGMrc21LdlgzeGdTVUU5cjgwRFJRdEs0YVNLS1RYZXRzQXdwRTIzNzJUQ3FNTXZQN0d0QnIxQ21kOFZMSmRyL0x6aWNPUFJ5ZEFDL09UejFlclpVYmoxT1NrWXcwbEpBTm1QbXQ1OUhwMzVWL01KMUE1UkphcFNpZXlHVDc0UmlqUkN0b3Jvb1M0b2Zwekk3VDBpT0NaMTM3NGVLVG1pWDE1WXo1UHhxRW1TQTBxVlJlK0tnZERBSnp0WkxMK0xkZGZuejFwRXV3YXFXVVRIcENQZC9ZbUFOaXpWOHBqSEdNcXVKSXY5UjgrakVKcmJmNUtCTHZ4ZURMVkE3cUIwbUhTRjFGbzFhQVRMTW95RDh1Vy9aQ0FMOXVPWHcyalpzZFpOZG1reGh5b0grY0hrUWEycTllMmI2Q3YrU0hKczhWa1dNc05FbTQ5SXFPdVB3dkhvL3R4OGZjc0hFT1FkY0h4Y2VFUkI1eWlSeVJuczRsZWJiUXpvMzFCN2cybU1nM1o1NDQ5Sm5iUXNxUEw2cEdYYU1sTG9henZLQWUvMCtycGFEZ2ZXbDYvbUhlaUFnZGQxaUFjd21JaXhuT2tjcWk5RkdMWFg5RGppYVpETDdBaGh1dkdvR2VSMnZZVUJadUUvVU13ZjlodlUvQS9EWUlUd0twWm1KZFhCekNReTZJY1VOdjk5NUFGb1QvcGE3dEJEaGwwY1Axd1R2L2JHTGRIUTRrcW5iKy8xVDRJUk1heWk4ZnlMT3M2cFp2ejBNSXFhb3d5R2txOXNXbVNSTTREOWNNYzVtZVBCditaUWJZdzIvTEhEMVY5SEFjZHRiTUREVEh4TCtqYzBrcnY5U2ltVWpsSWwyL3NZNFhUTFFFUFBWRDhqYlB5MEdnYUpnYzNyd0xlRkIrUjVaWUFZa0VxaG42RXR4cDZLUkJURXVMdXNsQWFwZG15Y3ROZ1U3cDQ3VFpGR3RMaFQxRnVDbURrTmtDcUNPeEtsTE5rZmlVWUZER2hWcHJlTnFiWThEbGFqck96djdyK1V1cmVSbkE4Y1ByM2F5RW1DNDhNWEpCeTZEUnZNMTVWTzBsT2VWMUJkeHBZQXZKYXNVbGk2MHpBNHRGNGo2Z3dVc3pScmIreGhjT09oMnlaWlZHVnFsTk93MmZsVkZJclpTMUdZUkdvSU1tWDI3a0VEQlp4c2dlRHVqOFE0TFhCL1Q5VllObUc0eGlFeGQrUUQzeDlFTFdtcUZHRUZZdFdsOWpGRy9pTWNwdThBR3B1VHczanNtRmlJRHVwaTIvRGc0QUxoL0FCSmlLN2IvbmJxcmJzdlNuRFJnYVh5bjd4bkQ0MXU3anN5alJmQ3AweU9wYVd2ZjhYcWdENnFEcWtKQnhIajFyd1VsNkxGZ2hOdG5XRXM2TFZLejh3c3l0TXpNdkdYZnNPTXdnelNvMFZxSEtwQU50WVBXMnJoYVZVNXlEV1NTVmIwQWRYeVVReTZ1eTZHU2JMUkxyanN5cmE4UlU2Y3RlT0NUMmZpaG5mZmFDdzJ0Rnk3NlZNaFJMa3Z5Ty9kUTFpK202R0kyV09heWJYT0dwT0ppaUhWSElpVjU2dkxDUmlKRlhOWjFyRFZUblhXQ2NGLzY2TC9xWllQckc3WkdNU29ESXBBTHh4dU1vMXhwOW82eUdSbE0zNTMxRHhaRFQ1VEV6RWdvZEdrOUV0MmEyUVdLM29xNXkvcnh1MkpYbnVqZ1RLVEcwOEV0cWJ4ekVEVnNteU4yY1JyMXRaTnlQbDZOOCt1WTBMR3BiUFdRTmtmSzU0Z1YvbFhqbVl6c1Z6ZVRBOVlueWMrMnNOU0VUTHN4Nk85N3ZsRit6ZTRWQ1VZSHBWRm5tQUlmc3RLTysvQjFwRDNqdFhIdjQ3ZHV4V0VEOFNMdWR6OGlWdU42eGprcTUrcjNZYWpJQXlTVDR6Wm9vVFFMbU82L2dQSFJrTFBTSGVmZDI4REcxbHFlUzRYQUx6UUVmU2ZEMnNDR295U1EyVWZvV2ZKNlB5YVkxUWRINGlMUitlODF2cFBCeWttRlAzeGllSDdCSktzWnY4clptSFppd0pEckdIN3hQOTcrTkx6dkxkdENZcUdXazNYeWhPYzZIbTJ2UDVBWTdScjdLWXJPMXN3S3pRYUFub2xVV2NsRGdabHdoRjFLWERUeUhBN1FMTUwyclcrcU9USUNJNEV3aUZyNzd1YlcvZXBLUjZyWCtDa1BFKzNCcUFPRDdkUTNhRHl4Vm5NRzZPaHh6Y21ReVI5NkY2UkcxU3RLUTZhV0V1bVlMRkNNRGNUZG8xcGJtTFhnOE1tK3hVQjZ4ME04cGxNKzBKZlNWZ2VPdW5EZU9OMjZxQjZQemhMY0JTYndVNEFRK0Fvb0dlbW53MGxGVWk4YkJ1Qk0wTTVjamFoUFh1SkM0RktTdHlHL3N3R2pEdTZDQVQ4UjlMNXdGMFhmQ01iK0l0V2I5ZmpVc2FJWHN6eTZWMWpOSTBZZUtkUE1Ea0h1ek5IUjZqOFB6a1grK2s3T2VDVlV3Qm41L2NCUGdhUTZFMXRobnlqZXFHYWV3Si9abGlhWHAzeDd0M3hpbWNaU2w0MlJxUEdqMWc0QzJlUUorSTNXKzZQOHZQQlZNcGtRNU5DRGdqZlFOZWJvTmxDeVhUNjNlcElhVWpIbFh5ZHdyRkFjQ3ZGTjQ4TVVXMVdib1Zxd1Zqc3ZPdHVuL1VXdDU2U0EzTVEyZjl6OEFJVmhZbzlYNWhKWHVSdGlOSVZGMTUrYWdTWDFlZDVjRG9hSUVGTzFiYlVPTGplQWJ1K1JYMS8wSmJ5TkhRYnJXcUJtWUNpbjlpa2xzWTJrTFRGUDVVWHJja04zcWVMSVlFclpnNXVNZWg0L0hBNUQ5RDBCaXhYcEJtdi8rcThCelJVTktmNE1wWWlCei9ucHlTRnBCS3RhZHFyWHJKUktQNEs0SnEybThiR1RqdWswaUlPbzl1U21WUDFPakVQNFFMbk94VG5NMmRuekQ0bWNzMUMvajJVWTNZc0IzVmxtbkJXM080ZUpyS1pCdnZIK25LbWJyNGV1azdlWGY5c05sSDl4MTNmcGJPb1R4YW5uenZFTU9XSkFpb1luZU0wQmJOYXpKR093OTRtd2xpZU5taTlHaEJBcG5Sb3JsYnZST3FDcVErbHVHVGZOV1pKTHFteU5nejlDTzhFK0VDVkVIQkxCWHk2TDRTb2FPS3YyYU9xWTRwUk4zY0ZLRis3TG5IU1FZcFZoRCtHbmhWL3dqY1VQZ21kYVBUVXdtbEEvTjNlMUlHQklscFYrMFhDV1hzZHFPQVUrSERyTFB1Nys4NEdXYzVSalY0WVlITTRVeEN0WG1ZYkpIemFWcWl4TUg2S3RiaWZ3SzJyV2NJdDFOR2xjTElPZ2VwN3BodktWQ1Y4NGdzcy9NNHhWL0NubVlXTjE5U3R5d1JYekpZZDBtcHBWMFhOYlp1SmFGWVNKYkZpbTBWZ1F5bWlZdmdoTmpWZndEdmppU295QVF1ajdjUDl2OHl6WkpvaTJsRFdRaDR3V2EySjI1eUEreDlEMGhmS0JuYW5iUU1YR3hpY1FDOVZjdDF5bmhiQW51YmJRaHltZ2Z2VUQzcTRoZUJRUFlIYlBQSUM5c3hCcjZ0eVN4dFJpQlpRRSs3ZSt5a1BxcFNITXRCeCtMZVNiWDZyaGlZS2tVZWVmU2FOSlVwbFk4YnRpNXJ2Sks2cnMyaUZiYi9WS1c2WWJKWkFRWDNwa1lrZTJEdE1TRkt2eWd6WnV0NEtKMXI2SjhLSXN3U2piamgwT2NTWDhpTnd6M2ZKUEZveFZSUVdUZ01aS3B6dHRhRHFJOUdxS01FUHlRSHpRY08rVGRCS1FidnJ0R1I0YzNnUHJXaFVOSkRxcFgzSzI2UmcrdzduaWErWHZ2SjVFdUJKakVPRXhldGZ3OWUiOwoKICB2YXIgUElDT1ZPSUNFXzY0ID0gInFKaFNaOERxYURyRElFaFpkSVR1NnNKMWlDMXhwRHliRXQ0bU1XQ1FSaisrTjBlY0VwdzBiRjdzRUxReUhDNXdabkNlUEkyREp0c3AxQUZXYXhoTGRyMGVsYW9JS2k3SjhSNzJkeUE0azFwSGVsTlpMeG5KQnVuTFNsYnR1S2UySDBZMEpBL1V3clNkVGgwWk5lR0sxbVNWTysrVTBaU3ZhcGprQjJPNGVWV0lnWFdqQWtzUGNjOEc1YTh1YWc1T3RJUk56TWRyd2pJRXdlRlp4dmI3WHc4aXJDbTkyWEtpeExqMGpMOXpWc3hQTGlUbjlkQ1NWaVRjQXZFQkIxLzZhOHNiY0JzSE5BeXRVd3FCR3JyZ3FZMmlJUFdBOWNaMW90NmhTZWVCUXZlNlQ0dGlHSXVxK0F0aEtScHRlS29zSUlNTEZNOTJwT0gyNitQelBDM2lReDJlWE1JTjA2TjB5djV1UXhoNkJGNEtNaWNkUGhQTkZVenNsOFpHMVFhbnRoN3lKQ2lwWkx2VTRVTlBWU3lmUjFObUxnRzBtWG0vRGhxOVJocnRmWnJwSm15ZnY1eStjSTZ4YmptcEl5dU0vQlNVdElGN0pMK1FqZHRyNlJXYWw1YnMxZmNrT1B4bGJ4Q2k4S1diMEl4cGEvTkhPd0Uram4zd3haYm9GNjVTaDBSU0dpdUQyTlU0MGtUSEZya2ZNUXBKMXJIRDdkczM2a0RBZ0xMTGozbktTdHRnNEVKWVFIYUxkVFJwakdpTFBnMEcrRlNpYUdCVUFOUmlHakk1R2JTUEtvWHk3VSt2UHE0K1VKOFk4c3F4TUNoOWRrb2V0UURFbXBobG5WQWRCcHBHL0grczBJcHJQR3FuRG1RUVRnNzQ4YXMrYXlvTWtzNVA2aHVhNk9YMTRRaTg1dzBwc1RwZ1Bxck5qVWdhMXpQYldRWmV1dXBUY1BWcC9NUTREV1FKSHoxQUxmanFYejJVSndKbm5oSG9va0hWczJvZ3JoZGNobUU2Mk8yb29nT1QzWnNyb3huOWJhNEo0Z05RMUlpT1M0dlJRUUpLa09lQlVrWGNCenlSWkxrWEt5U3JteGVSMkhPV3NCZHRlUWlqUlFwVHRLeEUxVnByampnaTRmTU8wRmsyWjhHOTRnanpjdURxa3lLYlNQNGF6WXdsUjI4RW9pa29BUlNvSG9XbGl6Z0FVU3MreEFGbHZ4NWd5UWx0WWlNQ1hyMHJjMnRTNUtOYUpmaWs3Zm92ck5mTW95eU1Kbk5XWDhodUhSeUFySEQwcWd5ZUM1TXM3Q3Z4blZrclFTTUZIR3IvcXBST25BS0F0S1llcnB5WFQyMkZza0NCQzlubXR4WDJmSHVrOXF2d3FhODJsRUxPQ3IzVnlvNWs4OEZ1NklvS3lHMXRMeXU1eW1TQW5nUFNhU3FRT01KdktIKzdxbk5WMER2SFl2ZHRma2Z4TnQwb0FQZVVBbWxyQ3NSRmpJTWNHWCtKeEF6VWtJTEpuZnFDRStWbGdrcUFIQjZqV2doR0R3L0tVSElFREtOU0oxYVFEdXdQVnVxQzZ2T1lYYmJ1MVQxNmhPZUZrZVdQMTJIRTJKVmMzZUNxdm9YZzFncDJtdVh2Z3l6V01yT0kycEhXSzNqTHYxVkU1MEIvOWpWbFVHY0hYRTAySXVQS2FVWGwvd2dTandNam5rTWJNcTMwWDFMUUdwdkRTN1NKYlVMalhyRGtQU2NOMGlvRmtzc0E0RHIxNjR5aTJ3ZlVpbWFyV0pmYUh1MExNSXh4N3grNzY3R0F4KzA5SnZhaU1MZkd1dmI0UlpDeGRySHE5Q2VjMi81QVlHSEdSQ0FXTzdqQWZSNGVWNVBNZ1NSa2M1ZEtad2xnZG00aU0xdmI2cmZzcW9pSjc5TWZFd3h3MGt0aUNUam9WQU5NbDlra2lVQ09BYkthTFFkUU1oek5BeC9yeTliSlppejdGc0Y4dUdlODFxUlUrS2pFc3Vnb2RlUTEyNTl4c1VneE5jQ0FjazZRY0tPSDdxQThhWmphcUtLdW1ZZUU2NlE4RUF2L1dEbjFDQkdXZC9OWXVPR3h4SG5ZYmxSZHJWdTBqaUd3SHdKdGlFU2FkVXQyUFJkQXVHVjdvMGlBZFdONW96OW5ONFNmbi83WWRNdldzUi9ib2hUcTgySk9BVFRIaU1xLzhab1lTVFMzczZrVWMvQ0hWK0VIT2dBZk5nK0xKN1dmUkJieXYyY3h2bEo1bjVDSWYyejk2WWtLUjNQdEJRTG54eTJqOXNNT3RxZ0JLaWp0WHhJVHZaNkI1OWlBOXg2ZDNvUVRkS1ZSVWhNV0U1YWtFNFJnN04yS0JqVlV6bXR2K1VhdmRXN1hQQyszaytDUjUxZVgwTjdrM1QvZ3NYTTJRdDVKTXRLOVdVY1ZVNUQ3S0s4L2dmT2FsQkl3eVQ2MDFzU0Z5YWFoSEdkTHJSRE9vUVlhNlhhOTBzY0gzUHZSR0VYOFk5Zk9Hdlc4TGEvd1ZrNkZBbmMxZWVTT3hycWV6MHlFR2xFT3ZMakc4Y1pqUDZCZkpZeU42TlJXaXdPLy9wUnBRN2M5UkdtQnZEZkhNMm1JWjQ0WWhXUkxwOE92UGxQeTJHb1ZiTU5pSmVaWTVrM3NDRS9aMmZ3UHBiZ1NUMU1Td2lBNUV1ckFwZlF1cVVLOHJrVzdJS3JCUnpaVHpENVVlQlZGRUVFY2pxR3U0akdEc3ZlYkNGb0tvVFBHa0xYOTQ2OGlxcjJTbEp5bklZc2U1aUI3MUh2VjM5L3NublZUNkZSNmVIUTZlaXVNdkJBVGxTdTJrK0dRNDF1OGthbXIrWVk1Ny83VllqbXUwbEJwamIzbk1zWnNqUEI3WXdaVVZhZ0RvUkgrcTQvUTMxS3cwcHMrYVo5YmJHNjh0UnF5L1QvS0Q2am5vTDFGb2JmTW52UmRONzNpbUJXdGF2cTk2OUkvbEM4anJoOXJwQ01wNDY0YWgxSkcwdmZpWGFjU3BVNmkxaitwblBGbjdBZkw5T015ZE12VmhpLyt1SVpvNGo3Z2JobUkwRlF6ZXd0YXhxMnBCT2VncTR3a2xCM216b0QzczhqczQ2enI1NmF5eGlhOGFqclVMeHF6NndHcVgwWDR3U2R2UFlPVmpoVncwMXphV1NFQkN6Zm5IMHFwSGl0U3RrSnc4U01pY1oydTZKRUJDOFI1THZ4MnBCMlZMQm9yekkvWklQdVdhUDBOV3k5Ym1YMXAwM2hsUUdVTW8zN3ZJNzdoRURvb09SWFBWQ2ZnS0I2d1ZwUnR2bEF6UXBZRTNUQm1DL2ZlMEd1VGVidndHM1ZKSjlFQnNOd242dDBzSDNXY2FvVnpIb2tmV0JyS012OXhrZCt2emNIZFMrYlJ1bE5tajAwK1d4aFNoQjY4MjVsSGh1M2U1aFkxOUtDTklscUx3SnRkeWVSRlFUUUpCUW9TcXBUSm14KzNPTm1KQXIzbkVjVloveC9jbHVkNXh0QWFsczhYOFAzU1RheSs5b1lFVGNzMnFmQmpBQmc2dlRNRHNvenZtNDNqR0ZmSE83NkxOaFlWY0Z5bm0xbGlUeHpHQ21hWjhWMFQrZGhlTDBobFVmOG53UTUyZi96OTV2TTV0V2g0UUkvUjZyZGg0VHNqcFRDNEVXYkttK2VWckZWRHVTZHBBSHlwbVAyK25LRk9oakRYM1NSaWxFWnh2VFlwSEd3dEh2eU1OalNhYTdrTHA3bDRydEZWY1J0VFNNMU5NNTF3Tk9kK1NXbHVQays0eHNlckRHL3NuZEdjRG4zWjhIVG1EUGFheHpXMTZMNEtDQk03dXpnNFM1MGZxQVIvNFFzazY2RDl5c1RIakhXZXJWUVpQa2wwZEcvanRLNVlBam9aQnV1NGNrbExwcnh5eUI4aTY4UWtsZ3JLS1NXQkJiVm9JV2YwVzhWQ0NYbEZYNVAyZDJ0QzZoZUZpREdDVTlzZ3NGbUMwQnltQ2owbkZGeHg4bmhTUmVQV3V3V0t3aDZUMFRUdVBjSTJUZmZqWGN3THgzdFdjR0swcGpWVkFOSzR3THU0aHBjMDU2UEZUVkFZa3FVb3FTdXo1SXp6YUlaaENMeUFCdFc4RnVSZUNiT3Q3clhNL2swVlk3Z2V4R3FCOXYyWHNobGVxeVlLOUl0bzhsam9ETGx5Z091TE10UXdaeUlreHFuRVVmb3MwbWc0NkFKYXBZRVpBdlJ2UEhwcldMY2o5Z1NsQnVtYUxMWjdWeGZqT2JOWncxNUJrYk9BRDVuSGlWRUlTRWw3YUR1cjRsY0RzelQ1cy8zTHNEMzgvUlE2R1RLVXk4ZzhzWVk3KzJxbDBsZlhqamlIR0cvbisvSEE5bkswMGJtaStBNjVkaGRLR1dEK3k0WlNXTXIySW1jWWtRUi80VytHTTdab0UrZkRjd1pENzBIOUhZR2hXSGduZXlMWVRDdFV6ZTZBbmxuRmlWY0RoQ3BYeDVvTDZiOXVUMllDbEcvSDBqWmltU1pSWWVNY1JKZzVnT3RwZUl3L3VKbDl4ZTFzL3FmOSsxUU41UEpTYlcrbWZOQjVGM2NiRTFaZVk1TXJyWU1JS2RNb0g4UjZpcjFSSnJmYlh5d084OTY3VnpoODEwK202VmcwRW4xS2VNeUtIMG4zdmxtbmExNWFmM3RnMzR0NVlsL1cvaTdVOXhNUzI1NzZjVDNRa05mRlZuR3J1NGhBYXQwc3J4eitkdGhiMHRHOXA5S3JQWUlaemJLZjNoZVRqdUtMaVVBUXJMWHVZZThMMTdnQUNvYVVaRUNUZnlCQ0ZhZTUrVE9DQ25jdFlIZUQ1ZjdncGwyamRlSnFyMWNCckFEUGxYOUk1YWxjSEFNRTBLK3ljZEFONzJyRE54TkM0dHZzSWtmZFU3SlFmdzl4UUF0MDRMY1BzcGQ4cmxyMTcyRUZ3QTZjTjRjSEdOMHFROUxWQVlKY1pZM3pYZEJXUXEyZ0Vrb093cG9sVXM4ODV4T3U1Z0hVOVZqOEM2VGdPSWpaQmdYYTdEV2YwYkN4NlRta1I3ZmpFK2lpVmQ4YjU5KzJrdVpXUHpKZURCc0dHMk9aR0x3MU1SZ1cxWTAwTzI3TmRrbWt4a2Q2V3lwcEN0MUVacXllV0dKazk5d2IzNUREamtUR0FFdHgxNnU4YUk1N3NRMGY0czZwbmtCbHlmNjFuMFROOHhheHJBeXJXM2l2Q1NaZUVHbFIvL3BxT3RwdEtNYy9QaWNzQW83UlhlUGRmTS9rK0I3T21zODRnWjhzd293dFBtMS9ON29temdydFZ1NTA2Wm9kUVlXMVUzemtZa2FTeUdVWEdNVFdsKzM0c283MVEwa3BqczVqREdyTnJJU3oxYTlPbDlpalJST0EySU03NktXcGhmcWMyVDZFeFpNUWdUNHNacFRPTHlhSStzcjJPQXlQUHd4MHBiNVNpU3h3N3h3V1oxcnZpK0tQVWVUUmtGaUN3RFh3anN0RlMzOUVQdzBoQndNdGorWUVYdTArNDNpdGJNSHluVmtrVy9CWVFQK1J0TUhOdWJNQnZmbGtaaVowSXoxcGw3cVJuZFJUQ2ZSaFBIcmRabGE1MG41V1I5TmFVWnhnYU90ZjdpNUszVWYvdHpxZDZXQ2EwS1dQSGVIeUN1TDlnR2RGd0xqYU9GaUFtT1JBc1hzajhaNjdramJ5MGhjT3RYSllsNWNYZEVZVng1bHhHREIrdWtBREpXdGJ3TEJEUWVHaG44dlN3bnBSWmtrdU04R0Z5ZXpvR2x5NUltZklZTFNqbXFkZ2lWMHBQOWt1ZzFGcG12alREUTBXTnVoWFV1MUZiTUwzcFR0S2JUYjM4WkJvR0N6dzVLWk1JMXlxcDl1U29lWS91bExjRVlSU2Y4UHhFeXN6WnBydXYyOWtrcmxCSDhobmFYTUpCaTBmeTBDUHBGbmZYL2h1UCs2czYwclFVK0RzMzlhcGNhZTlDVEVhT2h5eFBOZGZuQXgwRnZlZEx5SFQ1elE0RTJiWnRYb3RINXRveUR4SEJPRklONkZBZVp1aXQ1NVFJYy92aGllcmhJeGZjWSt4VjlvUHc3ZjhiZVpWKzBOM1psQTlDcVhkYm05Y0JzUlhOWEZ6M1pheDhYUStvMXNDOVpsR2p2Mm9kZFlFTG9VRDNVN1VVdkhPTTdtenJkczlJWUpJVmErQ0ZJeWdRaFdrTnU0bEg4WXpyalZKVHVtTGozMldEdi9PZCttazEyZ1ZsNzBlTU1NSCs5RVVvdm5TZWhrNW1XYUdGYnl3d3pxa084MlkzSWRuUDJvbUk1WWFHOHlCUXZld05YNkVqL1hhUndwK1IwdFZ2N0JlQXdxenZzS0Y5SWdjU3I4aFNCZVJmVHdwYUp4ajZoc3l6YWZpeFQyTWZuOWU1citFWUdVL2Z5dUsrV0ZYazJrNTYrQlBxalE0ci83OHlBb1pUT2ZXMjkxVHBFM1BEaWZTeHQxR2QweCtuVEZIKzZpc2ZBdDA4NFBXM2FLRzRFUVhUdUJPZ1JoS3dtZURzOUJsUWdhd3paVkVLcWdoZXhiNXE3eGxhMStYcHFjMCtucnhvd1k2ZFlkc2JIZmJpdVhpclNuWTJtbzVyVzZ4Mk1wZWpDQVM0R2tDeVJPa0w0ckQ1NGNCZTJ6U3kzUkllcmI0cERQdmNLc3VaUDdobEtpQWV6YzYxUVQ1dTIxZTdGWUtSaDNzaWgwZlJJTE5Gd0NBT3F0RE1yWmhnQVNFL0tUSm1uT1VFd25RU2ppblYzYWUwOFppSmJGcVBGUVRKekV1YmZMWEJqNmt1UzV2RWY5ZjVzbDdSYjNaSGFMTnFZN0pKR2Y1eFh0SzFSVlVIMGIxcXZZeTNFUXpBSG5COFpRbWdoM0x0OHZIN2ZKUVpkanU3dmxSVTZieThHMW4xTkxhL1d4Y1docVlKaWdvc0JBZStSR1dRYmdpUmNsL2pNS0ZVT1RJMHAxVGVkZVVpNnVjRDdPcDNRbGU4V2I3WWlId25PdlFpcGhDSitnYkpaUkpoNjJPRGNkcUZUYmRlQnNrSEN0b3l1YTAvWXRkK2dPWS80a2U5OE5YVm52U1lLSEJsS2t1UkhBR2dTRE5qb3RXd3ZTY0VyS2ZKUXY4dDllbHBhbVN6ZEdYQXJmR3EvZm8vMm5pUW5ncWIwTGhaTmVvVVU0ZFByUFhSZjFVK1RnTzZrdGRidW9OY29JZG5wTytYaFpZQmZoZlJjazFBRWJ2bkI4TGZRUGJUZzUzYWdzVXZjejdaMTVudDBqbXlvajFCckdPb21mNE1KcEtZalFvdkVKZWg2eVUwVFVLYWRWR1hsVzd6MXpSOEl2dFBVWUlMVnlmM1lNVjUrdGU3eDB0eDFhMXlOOE1sWVBobHJEYmpvTDVMYi9vb2gyTTBzaEpNMERnNGhQVjNueC9MSnNSaDc3UElDemNuMWYzMVZGdWN2N3FoTGYzZU9UT0R6c3VZK3p4TElEazdzUDNvaTJyT1cwQ0oxdEhrOVhHd0RMdWp0d3BQaTd1OFU2SFMvcDZFcjRmaDBjd3cyRW9KaWJ5dTRMMmg2ZURqT21QWUJCaTM3U3NzRXhkZ1RHYVFnU3NlazdLRmZYMFhQQno1eEZydDNDSk94ekRYODB1cnpBY3pkWmg1cHhPRWs2UkxSeFhwcVRxallBd3AwWFQvNDFJR1BuamoyZ2laaUhpOU41OGg5VUhMaGNuWEN5NmE5cFpic0NiVHBpVzhxN1poWXNCQ3Z5Z2xaZE4wRTR3NUVVSVhBUFVaaFI0SXltYjZKemhVcmdzc2p1OUFCdHYzNUdjbHQ5NmdrLy9qY3dTY1IvQm5DZnhqSEE2T2JjK0p1Yjd5RGtpak1rbiszNzlHUU82Y0dPeWxrcW1lWlVoNXRTNFZ6OEJZREF2YTU1NEVkR3B5a1dEcFYwb0Y2cnF1VXBQckZieTcyNUVCTTFmUnJXM0dkcllpcjJCR3FLYk5ZeDZGL01vTGx5U29xbzQ2N24zWHZLeHF6ZE5PWlJzcjFlbjFXQVdzY2t0c1JPQ1FvOWk0bFYwMlNYb1J3NzhtVHozekY5YnIrR3MvenREVFdkNWw0UnhLOWFqNTgySmhQK0cxR2xTcXVJRmNmaWJva0hBTXU3WktkY1dham12WjUrY2FhMldwZ0NnWlN2WkxWbUpDeVVKT0lGNHUzc1BEblMrZW9rdWdISDgyN3lGSHZGV1NpRGJncU0vNkNGT3o0K05La05SRFdwNjNWSWhSRy80NW9RQzdCY3pCQzZGeTlNNGZaY2IvTi9NaFpDYW5LQmRLRE9KaGJoVXBicWJ1dTZqK3k5ZjBOSk1rc1h4d041ZWNXS0dSY25neUpPd1pvYW5zZUk0QzBpWE9hUHhHS3ZmdUI1dW94Z0pYSnhWUnhlY3RqVmM5SExwbE9Fa2pjczFWbjF6bUJsbmtjVVdoNms5K2ZDamZ5K0xHVjdPVk9UU3MxOEF3Wm83cjRWakFBZEQ2WHpzRTZIK281dXBBVmNXUjE3b3VCTzhTY1o4VDE3RXFGcnRkQVcrd2o2TEY1cGxHNUxWL2dSR3R5RDBZRmRSNmlJV3ZuVGJoYjNCL2I4ZlJKZVVyeXJoOUFwV0tTMjFKbXdrUWpmSUw5NFVYNERkTk5UWFU2MC9ZN1lDMVlNU09NOURJU1E4dFFpd3ZESHRQcnpaVE00VDR6Rk96YmVkVEJvbVFDNXhObTY2Z2hNU0pRNnhTeUNqZ2lzcmNMVXU1a083cnVVMlUwUnh2ZDJNbGpXMk1KTVVwcnRwWWMvZTVtVmUvbFYxZ1VpVkYzdkJGcXdTOXF1NGExOTMzQUYwM0FPVGsvSHhHOE1pYklJU1FVeXIxeE1MaTBUK1NMNDYxUitNUWhRNnllRkFiY3J1ekZ5eFU1alNyZFhSMVBLcFFSWm1FSHBCcnVPYXprajFvUkIvcGFxZEtScXZFRkVPYnZuWWNOZG5DbU5mZEo4RFh0K2oxeGg1Y3lhcDVwUCtDSUZKdHNzbVh5ZjB0dlFUa01NVVVoMXNVWHdkSGIrWC8ydTk3UjAyWG5PVGdBRTV5alJtR2wwcC9wWDNWVnV4c2dxdTVrOG14dkVMUXNzVnQwRlhlMVk4YXhZdkFxSmpJQm1UWVI3eHNaaGJlMnlLb1VSVzFIaThIM3JqUTV6QTNyWDhaMy9UYmN6L25yT0Jtem1YK0x2T3RpMUFaTDBsYzZRREZHTE5JM2ZuTXJCMUZIajhLMHYvTnlsTXh0RjVMLzNVTTJhUC93eFhSYkZaNXVMbVprY2JGM29xT0twOGYwRDFPYm9wRGREcjVXTHowR25IenJtUmFZNEF0eEdQbXpuRko1djNMVXQrMElxM3VPTldyR2krTjlEamVxUWRZZmFNTmdicVVXVGFlOG5MQmxxSUdwa1YvdGpSMDZ0dVo3ZW5VUUNXcFkwYXQ1ZytITldtOEJxMjJWWHhtQW10eGhDbUVzdXBKWHdTbC8zMzJIb05BV0xuZ09nOHJyK1JtVVE2eXlPZGhqK09OQ0lOdWJOeXJubkdxc291dDNBUWJTcWlsTjhWZHlkSnhVNDlFS1dEZDhTVzdoNzgyQzJmZFRPeldwWG5oWSttSERscFdXcldJVjBzaFB2RjlEdDhzdWZUaXFrM0ZVUGovZGZsOEVwUFM4bWV6UDE5b2NoajYzUWZPWmhSampjaU9tWnVKQ09SVTkvWHVwMFhEY0FZSDA4U3hpVlZTRnRkVU4zSXRIdVVRQlFTdnhYZU50cktOSEY4Q3ErVUE2RHdsNWxoRE50cXFwcmEzb1dva2p1TGdFMTMwM0NON2IvSjZPbUxST3NieGZZMDhYNStKQVd6YXh1NjNQbGlqbzhsMVEzTGo1QWpwcXdTZXdMTUxjMjNPREEzZGRMcXdoZTMreEMzdEFmNVZJcGVWSStOWGRudnRTZ2xqM3I2M1BiNmZCam1sUHRXSEZyZHdnajBLWndBckFia0tXSDVYaWUxbmszWU9tTmF1c21uTVlsQkpPNFQxS3VRUXlMbmhsdVh1TGtpblV5VndCK0k2cHlKYlA0NEJoeEY0TE9ZaEdyRi9hUjZBS2Npc1llcUNMY2kwRy9CNFNDVE1LR1BQdnI3VWNldUYrWDJ5M0taOFZVeVlXMGQrS1JrSWlWMzRzeDY3ZVlGaGdTUi9jWXptWlJQOVBVREs4c2tybTE0Y3BOdi8yL3pKQStMUVVhUFU0ZWswTk5CQkJNQTFVQmU2TWFSV2Rvb1hDY0RtbW16Y05KTCt1WkM0RkFKZWJlcVRqOU1Nd2pRU0lSb0FCL2M2cTFpVFBzMUsrM2lzR1VTaFhiN1d2ZG9iWTR0TWU0UEdLL1A2d2ZQL0ZvcmVEbERHU1Vtbmt3bkZUcHl3WGx3OU5HVXcyQXdWNkg3empDTUE3aGNZbTY3UExPQlhwRUNDWWVxMnZ6NndJL2YvYTljNncyeWlrYk9MVHNJMVBTR0dRV21ObDNGN1dMc1lUOGF1VEdPa1Q1V1FkOFE5NUFxN092cFlicHFQM0tybExLY0gwVHZicDJ1U3ZGcmFtNzRVY3NHUXhObll0V2lpc0k1N1J6SVpMS0tsanp5MGIvMGdhNTJ4QzJjM1MrY3dac3VPaTQ2MW9FN21EM0JqQnVMTzRpd2FpOXNGVE5Jdmx4YUFjaFQ2V0Z1Q1FVNE1LSFJrc3pLK0V5c2c0QVBSQmpkeVFJQ1V3ZkxZbTRvSGlSM1Vlc21zMjNWbXhncGZBaEZINFVlYnRSR3J0QUhmRXdQYnQzNUhXd0ptYVhuVDY4aWV3M0c5djB6TFZPM0JXdGd6Y0MvTDRoSWFYQ3pHcSttOXFHRmZsbmRwcE9oa0tmNUx1alBHT2lHdUFsTG1xOTBXS3VsIjsKCiAgdmFyIFBPUkNVUElORV82NCA9ICI3N0xQd2Y0TXQ0WDRaL3lCVFFNeGh4S2l0b1E1c3hFbU5rcTNla2F5eFEvaW5HMndNUXVPM0VESTh4UXI1YjVycUlNUHpQN1JXbzllaGZLbGtYWDhiN2pWSVU1QkhrcmdPQUk0UUlIWGNTR0FVaXJXaXoyZDFRTlo1aFRaRDFEUS9nUGRlOTZqR0MvVGd1Ymk4OHoweFJ1SG5Ddkc4Tkg0WTU5M0xOMkRiTk05c1p5RDdpeVZjdjlOOTROWjJOd1pJaFJ3WjNRQjJwVFFRRXI1OE5IWWtSNmwyajE4ZWMxL3ltOHI1bHFWVnpzcFNKc04xbFppTW5hODBlUldSMFpNWjVKQVZLRFhZY3hOV2tXTVZLZEdqTjBQTGxCclNHc1BqZU5PVlE3dFpkMTg2R2NkTkpISThJSHJpZGxZQXpkSDRZSkIxWlM5dUNhSWFlQWhoMk9EdWRSSDZIWlJ3VC9FMlRhWEpwK0R4VlcxU1EyZ0FKZTE2QzMzNmhEcG9tcndtczdpaDBSb1dZUTEvYUJ3NThVTVJSa21tdS9xZWR3OUpPT1BVNG91RktKMVBFVlhTazVSZy8xclR6YWljbngxZmVSQTJ4YSt1QnNpbk1pRWd3Z1Y5a2w3dndjWWF1ZU5HNWZsd1EyVjJqSUJRdkd0WG4rM1FiZ0lzUjR4blRPcTFlci9vNXE2a0hiUzZXcnRhaDA0SUdkTDJSZXFCQklna3RXOFJNakxBNERTNlgxcHNnM0hEUWkwUEtPYXhMWGE4WmtaS2tjTHI0NlgxYVhRVmcxYTlodlplNEdWK21NR1gzRE5PZnFKYjR3MmJsTFBCRndKck9lSnc0cTBPQnAwSi9MV0tmd29SbFp3ZXpsT2VaWTVtWlMvTEtZYk5PYWlrRFZhMTZRUVVBVytWREYrUHVPaTJhMzYzVUI1Y2lSbEtPR3VDV2ZuQkxHNTZaY0hQS0g3L3lYRlFRTUxsQ1h2eExFNTJITHg1d0o2R29oTU1HMFdHYTluc3hzUTBuS3JoT283cWZwdUo2enhlbG5ITG0yc2Nwa09MVjF0YWdyWkplQXJxZllKTElsdDZJZHdyNGpva25vN3A4b2hsbm1sSkxRRW8vRVdRYXN3SkRMOVVnK1k4SjhLY2JLcTJZMEFqUjFQNGNEcU1SRXNIbmlNTzVzZ3VlRU9GUXFSR0FuUWhiU25aaTl5LzVvWGwwbFhsb0RaTk1xMzNWNS9BUFVaenFRWlBOdk9VVXJMakRnc1VieWVhTXBKSWVTMDRqdkhyOWNNQlQ4cFdJTnB5d1piN2dzTEdvQ01YRGJyelJzOWR3My9hNldXT3NQT0RyaEhzaGY2ZGZNdFFpZzhhQWliM0dVUkhCQW13TXZ3eitTRzhCcDVkbjBFNE45M1FtaS96UVVwNk96ckJpMGp6c1IwRWNydVZXR1dZekROT1U0bEVHd2s2cnZpeWhhZ3V3NDJxSC9PR1M3Um1YVUlaT1NrZ0pYaE5RTjB2SXY1d0ZtcGgzbDBmbEJOeDdoZUhzR1ZwMmZZR3BYN1VGdzBSOXhJRXBOYTV3VWMzNUlKaW1CcUpxNmFyNThiZ1poMGlhTTZraUhqbzc2NW5GeGF5N2VCSDZ6QUtadFFoRmpsSUZsUFNwcHNXWi9XMlJRbnNhNlNUMWJPSWRYOHNSVmtxeTJOSG9WeXBJUCtWem1nZVNtQTFHbWx6NG1lVUpKaXdSVXdKS2liNEpRT25QRGhOd0REcENMRGxyakl3RU5hUFBLM3ZlSVZjdzJBVHJva3ZHUWJsRTkvMTI4L0duc2NSbjM2YkpWM1ExYUNWYlF0aFgrWFNIcmJoMHhGc2FQUHpjbWQxQ0tXaFk0MTZydmVKK0xVTmUydUhndXlVN2M3dTNvQmtka1Ywa3B6YmpqUUhWT3hRdHFFR3MvZFJCdUxORnVCY3JnT1JnQU1LbE95R2NRdkJJVzMwN0FabHBING54ci8xekVmVjN0ejNVc1krRkhZTytVdUZKekNFdGMxYldEeDFoUkVpYzUzQTJIeWVBTTR0aHpPQVliRVdYdnZ2eVFESVBmT3JXNVo4aFFUa2tpdlQrOWVsUkpRSXlpdHlkajNlWUFaSnM4bFlOakhBdENXdkdRNUVBMnFWMTVJWjBJUTBQbWRhamQwTmFDbXZMQkpxOTdLZm9NNjFEcWlNOWZJWWZZdDdIaGZ0RUN0dDhDbkhZK2ptWWE2NGVQUEtFY1F3Z0FVMUhybzlIWjFobm1TQXMzVmdlOVVXa2ZoNGxHbEhGY1hqaDkvRFFBS0ZIQVBxK1dITGx5ZVQzc2hiSm9YMGRWK2I2VGJIWVI1Q29MQUhqTWtON3FxUnVaUDhiZnBrejlsY3YrcFIzOXlqWmgvdURsVFlYVStCamp0bU1YcCswVytOUFJRY2hsRi9pbERyRVRvOGFnUEx5WU50bW5kZU1HY2xLbXRRbElnZVBHK0VEcHVUazJIVW5tbkRUM0ZuZ0dvZFBEcG9FenJVMGJTU085RXJTdGt2bEkwMndLS0FteGJTNnhQMVY5VmJJd1hjV1M1ayt1ZDdBM2EzNk54U3ZuRzhoaXRiUmJETzdxQnFBNXMreThtcXE4cTBtdENCS25adWIyeFV2NXlxRHgrT0JQYWRDWWxWWC9scTdFam00bWFPOFF6UFc0WkRsalJld25MZ2I0NXlpdTJxNlorNFpZT3o5OEFzOEgvbXV0NlhBRXV2alVWc1B4c2JaSUtJWnFabVMxN0UySlBwQkI1VGs0VXhLblg3RlJmampvUTZ6ZXUvVXpkUjBmbXVEblV1TS8rOHFNbU0zaUJWMmRpRC9acm52dUxVY1JGdHV6NDRPNDZDQnkxWmwvWlVvMUhrVXVVc2trNWhJR1UzUTkvVFdzVFF5RXhuTFRhcm40Um9aTGl3SGxUMGZMOUtqSEo4YmE0VDYzNVhaL0ZYbHBqSWFuQUhGQmFhbXRrUGgyMHdZd3ZqbFRPTno2cXlLc3EvTE43T21sNHBRTE1yQ3hEckNhVzVCRWFqcnQ1SmVsSXpNSnVGY1MwMHVVMytYb2huR0ZPZjZCRzZXUkxIb1VCZ2dsV0Z4WWlVR25STHJMMllSSHJPZHp2d2FmTkZoT3pYME5hWWNXbUVGaFAvcXZPSnJ1ejYvaEFSaitWUTkzL3ZqSXVZQ0J1aitrTWE3UmJ5cTV3ZXF0Tmd5RUpwc3lpQnJhRkIxZmJET0VHckVOdzIvRkQyVGRRTHNhM3Z3SnJpYlVLd2ZRZENSbzdIZGQrOUo3UTIwSDM0aVZPL0ZpNVZEaEhScnNSb0JLSDJiWG5aTi9CYkxPLzRkeG5vK3E1NUJHVjF2MU5sT2lYczI5eS9YQlp6aXRPZnV6OXJ2bXZDOEtlSEdsQk9KeTZiVU93Qlk0VFJtWURUTWJSM3ExbUt6WGgvaC9sME1yQWc1cE9CTkxlQVdtNTdReUx4NVgvNlNtTU83bXE4Q00zVklMNHBnaHRZakFPRyt5Yi8rcWh5TnFkRFEwTWdDVVpWQ0w5d1UxbitKR1VHZlR3VTFQRFJqKysxSzRJRnV0eEQ3MFR2Z1o0YzNOQk12N3E3WXNnRURKdXFKM3kwbkhNV1BoK2NjS1JNZnZ3UG95SkxPek8raHhCU0QwaDFaMWZNdTdkeERmc0s3Ukc0SmJGYUdYNmNRbERQT3pjaElaRHR3ZmpoZEpQRzBpYW1rMUFEMENlM3QrVXY4a09LRnRSNlExRk45MzB4S3IxYjFqekZiU1IwbnVLd2d1VU5Bc0N4dWpFZzU5MDkyUEVTVWF2RUt4Y2RqMExUZng1TkdGYkJxYmRQSm5LZWZTZTdxenZhemlrKzlBcXljdXI0RzlNU0JlWGxOMkd6L2dXOW9JUnNaaHJ3N2tINzQvU1g1bHFVeWtDR3hJam00cHpqVWQvR0k5UTFwRjJ4bjdMNmpCKzdDWklOL1NaeUtIdTUwUVhJR3dIZlZmc055clFoYnNLU25pRmZtZXVHMWlDNUdxajdraklENFVMd1VjdVY3amYwV0llZlozb1poWTlrTHk5VHVmRHFoK3FxUWlrK3FZMlFlTzVDeTk4aGZYS0l6OG9wWE1KU05ydjRxVWxwNWhka0tVRTJ1SW5ybFErWUQ4alJ3OWVSNFhLUEtBNUVaQXUwNW9ISFVhdkp6NElGUm9YY1RmOVBhWUk2M1FlbzM0MlY5UXZCQXMrSlBIT1QzTXMzUjFadUFBQUVpaVBTMm1GQmgvMHVqTEkrdzhrSWFrQisvRHRjQU12c0VQeGFqNHpZcnN3V2xJeHZWZ3pqNFRiL0NqWDh2OXdkWU5kbk5kNmJGRDJvS0lMTVMwdmVuYlVNeFYvRWVTSTlpSUhYczdDNThmQXZsNTJ1cGdBdFJkVlpiTS81TDVPQVpXUmsreEorTE5RUGF2STR2QWV6QXFEUnNvZm9MMkduN213ZHhXZlo1NUV3Y1ByWHNrdnIvMUtReEp2K3NJK1lWZDZxSXE2elpNbmxvYkhjaG8rOUxOUlQ3RHZiN1E4ZUcxaHVhSkhWWkJqZUdpMEM5UTdMcjhNbkh0aElha21Fc2pWZXIzUnpSK2c5OU5saUxnWlpFS2Z3SGg5c0Z6cUlKTWR6REVZYkx6UnhGMUYzVWhYZkh5NUQvUk1ERTVycmJEM0JoWmdWQWxiNWxUdDhDY0hkdlM1VEI3RWZxRVpXcDhxcUJjRytPUlpzcEJyUllVTUZBMHMvR3Z3aHFwNWxkUDROcjdiU3ZiZHQ4aFkvaHNlMFVpaGVqcXJ0N282Z2JMc0dwMmkxYzBsWjI5dmd1MjhoS3pjQytWRlVHSmhvRVVzL2pod2hXc0lVMVUrbmhXcU1yS280TnNxaW5WamM3YzhaSTNOR09EZWhncDJnQ0F6MDBBbU1DdWxVYWhaSjFnNGdwZXBnajN4Q3I2YllDQTJHZTVwNVFQYjV4LzEyWm05RkFMajNtQzZTQXNWOHltc2dNNlZPbVVQQzRVVXRaZDVtN2dScy9yOVJrd1BqV1lUYU1RTk5Bbko4K3VKQmZJb1UzbFFCa3I1cUF5Sk9VUVVtSDZZRStHY3plNVE1SE5KT2FyTnVHYUZJbExJcjRWZVlvL2lLdm9vYlZGcHQrVlpJWDAxSWFnY0xFSXJnd2dEU0RMY25McEhucVo1RFFkRW02eWZtY3VjeFdFUFZKQVBmL2U5L2RXMDJHTHo0bnY5NFdrU2ZHbGNYdmticHhrT09FOUdCU0JMZGQ2dXJvQnc2N1dpZkZQWmdIcTVnSTMzZWlrZlNJM3J3dEprMFh2bkJyNWJPNVV4MGY4L2VXeEdxczc3YVA2ZFhGdHd0OVU5a3dTWHBOY21KRTRtYWZtZFpEMFJYL0U2WnR6eU11ZVcyU0pUSGRJYTB2RU1NMEZjSlZ5MDBCWWYxeGQxSU43ZmJHYURCK280dldLMUx1elpPT3dYYS9jSVRkbHBJTHlqVVpUYVlJSFp2ckd5amlZQ041V0lHUUJHcHlVNVhlcWU1V01RaDhpaUpBYnVVY2liZi9EL0taQm53N0F4MEh1cXhaQlg4TjkyM2luYWpTN2dML2lWOXU1YlRIcGh5Y0NLNEl3aHB4bmJBK2NLaUlvODZ5NGx5WVZJWURkL29qS3FhMTN1Z1J0WEJYaThvNFZtdVNRaW9QcmxUUTNLSmxIRnIrcXZvMkJ4UmZzRk9pOVRyb3B2eTdiU3E0Z0dCZWZld2JWVnU5NEhqcmhIT3MzQ3NjanZ1UEp2S3N3RHJ5QytrclQrd0FrOTMvaW5yQ2hUeHpLd1JZaTNIY1F4czlnWjJUbXZvSnpRUjFpUm4rUmRLVVAzaUpKM0l2cVU4My9sU1kxT2VzQ1pZcDlvY25MUzkvNXE3Sk10Zml0OGFaanB1T0tVcEJKODJRcTE2RVM4Zlk4Tk5Nb1F5SzFDUHpZejhHM0VCYmJXZWZqeU00cHhuUGlQNktyRHdVRytOY252YUZjdis5UG4wT2ZsT3pQYmloUWVCdzl4NytBbDBGRzBabCtIenBpVXJ0UXNmblJZZEJ1R1N1UVp4b0M3WlYwWTF2Q3hWTjdXajJMcCtzSHR4VzhNQXdwUkI2TVFMS1NqbkhCaXRKSUVSRnFhbkpRMTN5bUxVYTNWVEVsOGRnayswQlpDdGhYU2Q0aWpCcWlsbktGNlJaMC9zNjVpYldsK1k1VHRHbXgvMXYrU3hzUFhhT2toZnBJa1Q3ak5WaURVazhRbkYyRDRiYjExVkJyc0tCZEY2d2VRRXp5aFBxcXE0cHVZbzhXM3g5d2Vsa1Zia3QyVnNoOE9waHlRcFhGMFp0eWcwcURlV0x6L2pzbGNCUGlVTS8xaDVHTnFQMDhSdm1ndHluVTQ5a2JvdTRQZFhBNkxpcnM1a1JSTnVxaGxFdi82VjVxZmpIOUhPM0lFTVgyMTBUMWJuUXNVeUFIRmpmbXJ1UEgyRVFEalYxVTFmRzR4R2xWbjM3cEcvUFpiRTcxZUUzVWpyUk9sdElsWnhQdi9TWldTd3lpSTBtNmQ0ZGg3MURueHoxRGpqT1VkcUdzNDlsRkQvQlo0QVlCdTZVRGpvc1lMdExkUk9abSsyckFZa1VySUVmUGNrQVY2M0ZRYUhxVDBXMVgvRWRKczJVSFJHWjJReGxuYnZzVmE3UHdES01qcUJnMzNNeWtHUzVpVmJ3MlVvWkE4a2NBdzFwVnByV3NxVitEb1cxYXNWbVZXR0psamFaZ2hYWTJ5d0V3RlZKdXB3UTFDM1ZKWXBIb0dQckk2RlVtc2MvWFAvUVJmaWhWU0dDTnRTVnpPRHY3bjlscUJpSk84MTlkVHNoQXowQlJnUmFpQml0SU9WeUp3Tm9kYktCWDk1VmhTK1V6T1lKRXdmZng3SU1Uc1I0a2h5RUhSeUZyNUVWOUZHdzhOMWNNeFp0SEE3NXdMZHRUWnBDS25ua092K2x6cGtiVnVYTjNWTzMwWHBVcVF3b1RQWmVEMSsyZkd4UnhVSEhGWDNteTdiNmwwd3NqUEN1dHRrVlZCZUdXaTBXODgvRllkekVkWW9kMWVpYjZveWZxcmFhOTRFUlh5bzFZMUp2K2JqdDF1MkJMclhibCt3aDlZNThKMk5veXFsL1FMT2FhTXZKY2JmV2NuaG5NRnJjSWwvbXlmbXZLMy80Vlp6UkZ1SXJ1K1dQd3poYk1JRkdtMEZEcWF4ZTRCQk0vekRXRXp5UDZ0Y1Z5dnFmZEc3bHJPb3hIRy9EZjFCTkt0aVFOaFh6cnBzeFM5bzhoUDlRRWliSzRrZ1QydFdQZkI0WUJoY0JkakNyUS9SWktoNmltTTV4QnArdW5laHErN0cxdFlQSWRQOXdHaEdpeHZRbUV4MnF5WG5WTEdGdVJLczVjQmNtTmsrVlBSQVI0NVdEN1V5U1ByZmFiMll4d1dGY2Z3K3VZUnJhbmFPN0ZvdlZWZExvU3pyUHkxd3krQ2FDNy9JWjVHNXpucEpTMnVTZ1RSb0J3bHlmL2IrZDRkWk5zVVZnN2tKMU5qenI2UWJaR2hHUWVDaFpCMmw3enJXcVYrMFFhMzN2dklzNEhSa0dNRjRwLzNyMHFFOWlVcjRFRlc1REtXZHNOb0pZTUs4U2tPd29lcDFjcUlzK2ROaTR4b0JuL0NXY0FKTjJhT0I0Y3Fzd2M3ZjIxRlFsamcwVi9kazRnRCt0TFg2a0hVUXhJZGtXMVJNN2tmWWRsbnd4Y1pvRWMwelhNY1I3dlZqRWcyYVRTTXVoODVhaFlDKzlvVjUrczY4d21EZUUrVHpqRDdVZkZpMWxaa1BLdFhqOG14dkIwSklNektxcEdYUzE3SUxONWlhUHdGTlV1VHhZUS81SnZmaGU3a1NsUkx4NmczQk9FSW42NkNIWnpKTnp0cFY3ek8vVEV5eHdtSmJLdkJHT2lUajh5dVdnKzZRbkpUKy9OVzVhMkxRQzg1bTE0N2tjUTI5T3JKNUlmN0tMOExzeHRYbXNGcEJhU3RUS0hXZ2UrTllFcWdSSkt5bFJBbit1cTM4d0JreUhycU1iYmlBbVI2aVNoVytjQjZLTXJsSmtNd0lHTkFaZGtRTXJ1dlVoQXVCTGJwWmltNk1ubzZKVE44TmVMYlpYcDdZbVBlWndNTEhqNGZVSys1a2l6bGZoWjRGV2hYN3kwYWM3U21paXRBM2d1TXEwbmppdXdINFUzWWRKOEQwNC83UURwcTZ1ek5Ma3pWQjV0MHQwNzl6b1pTU21iVjZTMlQxbkdvM1ludFlEMnRLV0RSQ2xpRG5nSVRrR3hSTjFrV3BUMkVLVVRoS3dvZFN2eEVYeDI0M2hLb1pmN2hIZGlva29UMVZ0bk9ZVE8rWDBXZ0xjNWVqNzhDazBOUk5KUldBKzBxK1JZVCs2dCt1MWVVdkR3NXhYcFhUMkVVcEx3WnMzN3ZoNm4zV3NsMk1lUEdNaThSVy9BVG9USkYvR3g0VE5oZ0xmdkVodU1UUFZ5RFhVK0YwS2Q3MXY5MFE4Tll3RzJIWGRtZ0Q5WVlhWU5JNWZ1SjVvdzgrUEVhVmJLS0VMN012Y1ArYlZQTjc3a2hKUEUxK09xMnREVGJTQjc3N0xvUXh3ODl1YVV6ODgzWUNndThyRUJpUHRqb0JvQ1NLK0dCR3JEV0hBSTJrMytkMWpZM3FWby9wcFRXVjdqbVIvNVBkQldsT0JoSUN0Ym56RzJvRUxmd1JYSEM3NUJUSkZ4ZzJQRWlaQjE2eTRnTTlMV0VOam5CRG0wTGhpUERoTlEyZFpibC9wWjc3Ulh5d0lYeXBSNXdqTkQraXRVeTlTU3k2eElrcHBlRG5keHgvOXo5UlVEQy9iMGYrYVFRYTdnejkxZ0FVQ1FaZUlzdlg5VnZ4QjA2bmFXWTFIMjRrbTJULy9nc3FiYnY2WlRHSDAydnR0WUlmZFNNWk11b0Nzb2ZQc0M5Z2lqamRMc1p0SnhMc2ZMcktpTkpGUDYyemF0S0ladkhiTUtpTTdTU1V6NlEyQkQxZEtTaXNLMzFsVW8vYytlSis1OEx6YlhTYkU5K29jZ05XQ3VRYWlIUVU1VURXVy8vZWJtYVhSbFI3MmNrKzgvWjFCM0J3K3VMeHNoM1pKRHVKZXBzSTJsMElCM2Rnc0JBampjMXpvZmlqQjE1eVdLTlIxUjNtN2l2UFFFS2lIVnJ5dGxLVGRUN09OSmRsb2dwbmg3ZDR3YmE1eFI3bkNjbkhCVEVJRHZMbCtVeDIzTHBIdFdlWEFwcWxIcTVpaFQ2K3BUbXNuME5ubStkRS9UY2dFZW5JbEkrK25halZXYUhLWDY3akhWdEpoYTYyOG9zT0xDMGVBaHdsMm1VZXZKTGRoNXozZ3dHNzcvS1A1RDRMRmNabTZ0dzg2QUx6ekkyT2ppaGtqeXJxYllBRkFCZk9NenpIeEJwejhLMys2aGZJdFNaUnhJWXVJK1ZISTJYT2VUSDFUS3pGaUYrMDloTklBTVg3VWF1WUhzVm9LVG8xdksrai9wS1EvWEhwUnNCUy9QZ05nTnVSSFNhM0RpZUpmR3dGcHdjdTg3SUxHajFUU24rVkg0cSthSEdXMk5SdW5mS25ibTV0a21mUVpHb1N6R1p3L2owN0xFZTcxblJHdWNDRGwzZitlTWYyWDJoVTBMbkRGQjc0YWdCYzh3ZTIvTDVPNkwyRk1yRTBjZFBzNUpQeWhWaHU4aFhrOEN1WHVlcGltcWlMc2NpYVlkaElKM0VFSGxJakMzNXZNYmxLN2FHemljdW1NQ3J5NzFKRTdXUTBhdCtLeUE5MTBGNHFKZXB2U0J6bW1FaDRtd05YUWdpd1h2OE5zeXRBM29xVmVwbUkrTC83MDFHZ3pRMjczVitnajlFTHVFMmU4YWU4UU9GRW16M0IwWmhVVlE3d3FrWk5JSlN6YTZOSGEyd0tScGp3bkxGcSszWWxiNDRFK09kZzFyTmRJa2hTN0V2NlU3WU1CQU9ENnFUclZpRUhvQ2ZRZEJUYkJOdEp3cU1obUQ5UkpGVU9HSlRGYWoxQU50ZW5aZEJjMXFtMTNLQVgvcitRRE95QkIyY3VxS2twT3BOWGhhbWdDMkptWkRwWE9CMkpQYXNLTjUzTWZxREdHc3padmVzL282VURTYXp1dWlsZHE2cFZCMVloUmdOV2pIVW02azJsNUJIaEdOSVBNcFdXOWN5YXdZbnM4SVNvbE1WVlA2enpqNk9iV3JpRFgveWxCT1R0MGxJZWNlelNHVjdGZVZXRkVKL1VLQnRKUEF6RndQZFdnS3hWem4xVFk5cE5MZ3JpVWRmSTBCcW5mSnA5bDZZVHJmb20wR2dPaVJpKzRCSnVTWlF4QmtGZUxzd3lnSHNUR0dhMUFWLzZ1aU9yNzN5QytrVlB3aUdLTjVlMmtxd2lOS0FFTVdBRkNmSHh0WDZCY1gzY1hVSzJJQStpWFpsS3hLNmRnSE1wUE5oZnZvQUFYVzhxcWtBMWtDSWE2cElLMW5mcmJKK2lkQmg5NWpYZjB4NExmaWJ1Vm9QUjJnMlhBZkpJZHFMRUZ1T1F0M1lvKy9RT3Y1OG9ZQ3VKR1p1Q2tRYnduM0c0UkpHZmd0Y3NvdG96YU5ZY1ZlSHV1cXIvVVl3OTB3M0JqSFJLQ1FmVDh5aFpWL1laZzMxMnZQRG5Ed3dyaXFHQy9LTmJpQVY3RDRkRXVRNEFQWlpLcXZFd2NpVDBJMmw3TXVaYVVJV2U3bG0vNmJJUGdjb3hvdnZrbVdQT0NMWEtvUXFUb0RuS2xnRjhoMVlYcGlOZGNBQTRycXJlcEJ5eDZLanQ2Tll1ejJtUDJMR3VWMDRjdkVFUDNUb1o0WElYZGcybzNPL0RkdDBYWGZSUTJRaXFJTEFBWjhMM01TcUVkemVRZGRRa1FPTG4wOEV0aHE3clpwR2VSYUcrMWRGdEF5NmtVcWIvMHJ0SWhObnNYT0k0VkpycUJoajM4TWFjTmJRb0lVS2FlcWRjVjU0QUczNDAvNVpWeDlTd2pmbitzNzEydTdOZWxYcEsrSyt3dlFEemh1TnVFQVVpNjhnT2VuWmpHcnFkckw4WFJ2aUx3Sm41NUUxaGVGVGt0UlF2VzZETGJuMXozS2FVQWp1eDMyTTR5RGYxTkRRaGZsbnZQZU1seE5GUVI0WEpJbzZkZTdsWXk4L0ZCSVU1bUdZVWUzUjZ5WWhnV1BRVmtwVUFzK3oyaDh3UXhZUEthbXJVSktQblg1NlU2eGZVS0psWENIRzhDYlhUZURzUWhvUzlVYmdHUmZCdEMyeGhrcm5RaU9UWWNtK09iNy9UOWdBbFJiQSthUlV1YVVRVFZLU2l5d01tTGJMY1Y1SElINGNyTlBlSW50MEM5SWZNTTY3RjdxeTlJUlZXSi9MY2Q4ZTNleGcraXNKTXY0Q3kzYlJUZWFMRmxRNHZac1l6Rmxvcmp5c2lKbFRMem54RkRWdmpPcjFrY0RPTEljaTJ1L1Ztc2FwNlZmQjN4L0ExdmlZZ2lMbmVLdEt4RVlCVVdYbzRDOGt1ODQ1Mys2UjA3eFhrRW40dDIzSVhiRGczNzZRNWN3WmlOTExiMXNYaXVYd1JISWVoN1dTOTRrdU45by9EblRKVnErNkdXNlNONGtMSDhpMnFSc3Vub21XTlNSNXd1UlRUR2RVbWowY09QZUxIWmJQSytENU5acE9YZ0loS29iNVVyamYzYWNTMTh2TzVDV2pLTEVuRHZhaTlpdHNacW9OQWpxWlRQV0ZqRDBvN1hBR1dqa0kwdnhzRk13OEhtVmJGMXlRVlltWmxJcE9tc3BGYlNVamUyT2FhWTY4V0ZXSkRhekxlZ1ByZ3cwKzkzbmtIY1I1aEtpU1pMVkpOaWFqeTkxdUt3c1MwS2xlTGlBcU5aTkQveG4rMjNxSFJlUU96VU95V1hCeXVac21CcDdnYTliMHYrQmk1YVRtTTNHOTZKczNEU25VVTkrYkZPcloyVEo2VDBzQmdmYSt2dXVYVktCeTFPNUdQWGp5UW1tOVJYVklRMlhDTC9iSzk2dnB1OGpOeHdIMHd2OGJ5bnE0Q0taTDJOaDBJMDFJYThjcHlRU1FRVkw4WFk5S1pBRUtsSGpjdFhseUdvWDh3cnNoaVpKN2M1LzRwMVk3UEUvZDNzMnVYU1ZKdzgwRFFzcGhReEtzS2s3c3MybXdrSVdaVFR0SER2UEZvcXFseXFOMi8rN3RpM01lbEFjYlVZOGtncXgzN3NSU1FURU9IZDUyOG1rb052N3o4N3dvRWxEdld5MFR5L2xka3NJUHZKU256cDNYUWU2eEZKOCtjelpsdmNNNE1vc2EzWWtIZEhOLy9vL0dibGMveUZzQzZ2b1JMeVZaaXFyMk1NQUlzSHBJSFdjTFY4YlRuU0ZDbWdXR3dqMkZaS3Q3M0lEUWxjWHdqME84LzF3QXFMWkJKTnk2Z2wwVEQ4Z0RWTDQrT2pVNXFrUVd1N1FMV1hFc2xlQzVVZitxTXl3ZWJ0WlBRdFdaUXMxcDBad0Rjd3o4VDRhVUltek9ya1ZBbHdQenFlbDZ5eVpRVGN6Sm1LR0lmTDJ1cU1yeitjMlFyS0tzVXp0bmdoQmtTT2tHTEtJbXJ1NGl3ZTV1Z2p4YmpyN1NWTWxEQlE5MVhJVlJXNE9FVE83Q1ZYYTZod0xiN3R5RXJ3WHJaNlBKaFBEMjkveFplSEt3Uk9nN28yeWNBN3FWRWVRVm92RDNHK2s4dG44aWcyNDIyTnNQR21ZQnFrN1NIb1VabEJsSzRIYnNwUGZqN1lxc0ZpY0VmemZNdU0wWnBWRXRkUnBxMngyUU1zb1U5SllNaUVPNWJySUlaMEV1YUpDVEZnQVJ2bXZUbk9WZ2FLdExjWDlZQmlyNHByODRNQzJyd3FkM21yMVFrcFQyQk9WRnFJQ241Y2sza202Q0YrQ0NlWGZCUHRwaGJrYzlZYkJoUVZIQUtRNmx0dmgzWXdBYklobnFwUnIybXQ0S2d4M0hwRElYeG5xV3Z3ZEl2Rms2ZEx6RlB0UWhBNlI4dEpMQTlmTUxmaWV2YUxhMVB6ZEJ0dlYwS2pQUkwxc3pZZVlrcXp1NnFMRDY5KzN6RnJ3cWJFNFdIbG9zV2xWOU9aTlRZT2ZsbVlEVCtaOVBYb0dncHdLd2FxM21ZUURFSHMvRmxvWXZQaUdLNzh4SEZablFUNGhZMW16Wk4yTGZoY01tOGl5Wjl4YzNaWDVLb2EwRFh6QWpzMWNIN3EzU0wyNWlMaDI5U1oxNGIrMWRmS3gxdzV3VXNDN1daSFI4WVdYeDFsRFlyWS9xMWxWQjduU1hOMitFclFlQU5SeW5KenVnN2hWc1VpSzdXQkVWQ3R4QlJZQTF4Nmd3MGpEU0xvQUlWSGxkcUpORjNVV3hKRTcyeTZLc0RHRHoxY2JXSG8wLzZ5eEZXNHJHMTR3akI5U3FMTlV5K1JTS3V6dVRZdFNqTzRiaGRYSTRpRUhkWWI0UVRWWHVMVjYydXB6V1J6cERSTkpkZjM2NlhubUROazBsaCtWVlZxNWxGY3hTWjBXeTJ5aTJpS1ZrZUp1OGdxZnp3STRTcnJlaGd0dFZscGt0UUxFL29yYjZiSVQ1ZzAxNk9lbVByeStEKzExeHBnMXJJc0U4S2RucXVFUnYwUG44TVNNdnUwTURjNUg5bHJQRVJlaFBPYm9zTytxQXhrU2NvdVIxditFb3cyQjdiTEhSR3k0NjJqWWpHVG14WXA1OG9iU1ZrTnB4QkRCTUhaZFlMRnRKanU2bVdiWXVrbnZlTHJCNFVwUTVneHoxVDFvSEVMVXg0bGl6RjYzc0szcm50L1dQSUlsZFk0a0JXT1V3SU9McE5uT0J0a3JjRCsyZ3pKL1RhRWFrZXJMV3BBR3k4dU5icXNZWTQyS3R3NVlsUGVPUFVtOUhTa3pCTWZJQTZxUUVNaUxZSk56YUFTeTBRY3YwMEpNNHQ4a3J3bzh5WWhzbmV5YkxGdVh6ZldhbWdZQlFhZ0JlZGNtb3RDQXMzcW9DaFlNZkZtWGZSUmlLajBzVXJsd1N3QW5reSsxcWhhT2tvcElrODlpV2crKzhnR1RSelBjSmZYTVJxRHhkK0pkdmkzNlIrSmF6SE1KOUtOMU9LMlRBTmVLWENBemQ1NDVXaGgzS0dIVUhNMzZ3RjJ4RXJ1ZTcvRTFOeXVOdHI5YVF0SEhlMnp1MTlWWGlVRlhKeXdXeENhOG1Td0w4Sjl2aUppWVJmN0hqSUhPdUdXaGJoMEdEa1RGdlNiZmluNDBhRzI2ZTN3dGJ3dmdMTDN0alJ2RjZnOWszZzFGaXpRc1FDSlpLVDlGdmowNno4b082cWlyczg4SXVTcWI2eFVtdmMwNWI0ckdYcTlmMS8zMkorcjBXWVBBSkRkZERIekRPbzc3VFBHbDVkOEU2NlppRXhRd00vRVhZWFVPRlgzRTJXNGVzU1d4UFA0VURacFlmbElvZ1pRMWJLNk1wK2t3aUFsdWQrc2NTaXFwSWQyL2F0WVo3Umpiekl5ZEMreVpKdGdVc2IvYnJCV1d3RXFQZUpHWlAwTEFZb2J0azN5VWdlUFlpdkwydzM2U1R3ZXFDTXphQVV5SWJrWC9rUFFxbXBSaGMyQzdOL2w1UVhhZjRPbWJFL01YRHJkVlJZNytVclJndStsWnp4N2ZPbTVUaHJpdmNsWVFydXFFNGtkQXRHUzBlMjBnT3Fzbk05TVRCalU4b2hZVW01TWZNQWI1TlZBL2lPNFdyYXBHUE5sSittVURYdHRUaXA2N2loc25iOHovQml2NVBOUVQ5K1pSYWs0UjF1VHBmZmp0SzV5QVEzOW12Ukh3TE5YS1d0d0U3N2d1ZWFGendiZWNlZFZXbGZkY25IRkdjcEZXZ25IY0VNYmpOZzRtanZUNTdFZi9KbUwyd2dOeFoyWGpVN3ZWZFNKVStzYzZEOUE0SjVKdndkOUR1NmJadUlOZE4rZDVlS1o3TEx3VmdLVmtRTVJ5VllqUWpyZTY2Y3l5KzlLdTBDdFNuRnN4QXprYUQxV0VrcTNVNStkaTNwdUgzMVhVOTRaeVNPUndEbUUrelBXbXQ0aVVYYXNtQWVYSnVMOHlGNnpUVmMvVzA4K3pzWUVZSnBraGlyOS9uWFduWG12emh2Ulk5T0M1dHJGa09DY05pV2JFb2djRVBoUXNxQW5qV1laR0FpQ2R4SVZkbW5lamxKMk01TkxrZGdRZk1Md1k5M2l5cVRsNlQzanJQeFJwK3A3Y0xhbFZLWnU0Z0JvaldKMU5NaXRZaDROZmNPMXlhNDBTWHlLZXZ6bXpYS0pOazViTzI2dTQzaGsweXF0dUp3cENxSTlIOFNMYVNPdml4NXVEV01CeVBLQm00YmVUaWpUYS90VTE3eGZtRzUwRlNxZGRDTlVSNWZhd3hMWW9kOXVRU2llT3UzOUIvQzR2alZ4Y2taMFE4N1YwOENEQkF3NEZvWlk2ZlVkOE5JNlJtLzRzTjh6WFVlOGxHNHZDQW0velhxRWFyb1lOLzA4MjNqVW02aGdYUWowa1ZLdmEvazJtMExmdUhnMzlkS1QxOGhuNXJOK0RjZjl6MG1tZGd1Wm5EbVdiM1E5REswMEJzZ0tsOUdkcEJydTZQRVU0THNsVG8wUTRabElJTGpBcVNKMm85eHVyUjNpT3Y0dlVadVNab3B0NFpLVm1JRnV1SmZUckxjQmxwNWhRR3k1ZGJOckZNcXZucVVvTEVOZ2RXM3h2ZmVFUUZLOU1xc3hyUUdFVm02ejlZQWdQZlhQVTZpY2lsSHc1Ylk3TVJsR2pGNDRDcGc5SGNHdllGajBUQ0x4TlNMSStST0R4cGVHV1JsTmpVbzFWVndsT21PSm90VndXSzFhSGZjTE1GcW9SU2FvSDRER0ZVZEY2bmt2cGhiaU1Kc2xiQlpvSlVmc2J3cEkwREp2YjV2ckFlZWVmMGtscFlobEM2cTRSNUpXRVBHNXlreTdEVy91WXA5MXVQQUp3YzYxV1lhZnNNcTFjajV2Qk5EL3FUaWxNU0gxNUVzSjRkQWdKZzBBR0M3YmNCZjY3V1llQzNnWXBqcVp1eHZPUUJ3Y3BkZTdlOXJsZHZGQkkxNGlWUjVwaTY0ZWhpR0VJWnhJbHJiRkFTYUEwZFlocVNyQm5qS2F4M3RKN1diZUNpNXRURHh5ZzlJalo3R1ZVbmxyWkV0YW4yb0U5ai9zMUF1VzNWVFJ4NVZSNXNCL0M3alpnSTZ3aVRIOWFvbGhBK04rT0p5cjEyMm5hb0tjd0hJVXVuNTdTU2xONHhKV3o5WUhHUitoVXJESU5vb09YZlI5QTRla2ZkL3VYdFptYWhJT2hrY2Q4UXdLOU1semJaUktGY3AzZGFBK2JndzhCTnIvY0NNWUY2b0FkSWhTTHE3S3JRb3l3cGs4c1BtL3RZVEZzUWI4QVo1Uit0L2g1YVFWRzMzcmVYSEdpM2ZPRTByWUkrV3F4WG9aUkRURy83NTZlcnRYTEdiUWJHQ0l4VGpSbXVGK3lBMmJsTGFPbFVkUjBSQXVXa1FTOTRYTHFxd0pWem9vVlgvLzBtbExvZ2pjdUVHMmpBNlhxaGhOMVZ0YisvcUM5Q0lYM3pUV2dodUxuNWF3R3pPNGJLRUN1NU5DcWZvT2F1V2hQYjJRbERxVlZ5Ym54NXBSL0JSc09kWlZWSzRob1JBOGdYK25YRC9BS0dsNnBHY3NIK0RUanFGNVVyVm5wWERtK3czZkw0elo1T0EzbXYyS1F2RjlSZG9ZamhocWIyNDdBU0NTUkJpazBHc0Y1dXY4TTBmSnJ4Nzk0VUVEL2VBcWpRYTZwV0ZFRTE3KzVEQnNhQmU2a1UweXE1OTYwSUpCLytwb2Q5anRrbWRNRW1FeUk1ZnVQRWw3ay9ZdFZsUzUyVmZ6V0hQb1hQQU5sRm0yVEkvbGNsYmpRQjJvbHE0WkhvYitjU0IwcGpoODFFWFhTaXlYYlFFUllINFdXQWg0SUdaQ3UwOEZyNlM5a0xsK24xK2VrK1hNY0taZDlVZUI4dnR6SUVwS3NNUy9xVlZWcm1wNUVMNG5LZWJFVXBKeVNvZFQrcjRuMENJWjdnQStHZlBxdHFkSGlXWWdsbDNxLzdXc0pRMEVISnJFQTczUy9xYkRMT0pjdGk1Vkk0TVdjK0lFeSsxb0JpUllwQUJEY0tjNVFJV3YvZnBOV3laZnFyS2NHdC9SaUdya3FJTTJSKzRSenA4bXBMVVBZV2RvRVZqZHVCVmNsS1MvdEs4VGU1bTM4NjBkWWcrUFdIZUVSaEZhTlVid0Yvcm1PVjl1RU9YcS8rVXUzNHdncytzS29kanFLWnFMTmdqMDVXV3UrYjRVT21ENzFxYnAxTWE1RnM3QkhHbzBHU0toSVg3R3pDSWlQMEZWN0ROeGFTNE5xUk9ReUsxOEs1Z1dkdHNoNXhCVXRsb09ydDVZOER3MnpNMXJDSk5uQnpGV3ZQQVhKd1ZsOTh3Z1pWZm5YMFpnc29KNk1sVmxqTVRYUWZhN2FGbDFLQmJiT0dFVEViSzJ4ejdJcVJCeEc1bUJPOTREaXYrK1Y5TTFTUm9vbGl4YjF1OTdwTHNIUU5qRHREa0hCNE9QcnBCOWRUTHlrc0ZvNGFpVmljUllxUThheEpDZnQ5ZytocWN1TzZNdGdlUjJNVEZLNUFSS21VUnJFbDAvS0RNN2htTEFOZ09jUzk3RC95OFpTb055eUhsQ1dURjlrK1I2NUFyVlJ1VGtwOEVBbEtRTThsaGdlVjVCVVUwZ1dyczlaR2NjRE5WaXFXUUNtRlFZcHR3N3I4c1IxZ0wvTnlSN3FST2dteGRzeU5CVWdGQzduV245aXNucWMvVW83VkwxNzMrMWdUNUw5NXNiVHJUa0EyQlIvVVFhL1lqMmx1V1UvaFlwd2VNSVJsM2dIeSs4SkZZUGNzb2FVTGdyRVgrNm9QdXpjMmE4djA4WStzOU1pMVdqTlMycjdDVVhUNGRrYXRGdmRtMFNkUU96OWc3V0tOQnFaY1pzc3RPL2FRQUd4QUkrMTY4V3E0ZG5lUWJqSEhvcGEzVk9BRjNXdUhwSG1rS1FwaDBVRGdNS2VtcTFVamlRem1uSkt5d2Zsdng2dXo4bm04MURpMGYwSWJLUWtYbytjTWlJQitCelE3Q1AxWjNWVTY5S0pkUEhzMVdwRXdyeXVrQXN4aDhOQ0VNakdCWUw5SjNtZ2toYU9pcWFTZExUK0E0MHNuTHl6V2FsOWp5VFcvaWg1N1Nxb0xyZmhRcGlaRHBpc0g2RlRJb1RhamNjNm83bzZONXFTdUVwaEJIbjlmZFVWY2RsUjl4ZEJ6OWlPZ01KRzlZUWxOcmNhVUoxbFhhYnVOSGFhWjZVV0lLM0cxd05DQzFscmN0NFlGcUJ4K1RJNkZLMnZPMFowL2lyVnJ2T2hlNlZFTXFlaWJtNlM4dktEakJMMWhkNE11VlRLak03SFFtUUd1Nm9mK3FKWlJWdXFKNzVtTmxCL3R5SWxMVFljN0dPUldvZVZHOTdJb3pDR2ljZGpqejRhYS9tK2JMRHJFK3M3VmtYTmxrRHlaanNWbHBmQmVIejg5ZmlJVmlBTjB1bHJzZUUrR0drcVRTKzN6aUphSzV3ODVLby9YUUVrdThhdktleXQ5dkcrWUVBeXNXYTBsdkFKdVJWT0hzb2dDa2ZHRzkzeXNaRXhpeWhUeFNwcm1qUzZxREd3NVFiUnhaNWxrMHROaXlYRFBTYm93UGtmSWtYZFJPNXF0a3ZmYng1VDEwMUZJbnRwQmxTYUtaSXlvSlM1RnZSanlncFkwcVJFNzZBazBWdnpxMmppN1lFL09WcndndGUzMUdLQytEaWF3T1BkQmo4WjBjSnk1Zk5jbmwwSm14REhkSDVKZmlIOFVZMEtwdkNSZnpNclpDQkYvQjJiUk9td2wwVEpOeFNTdWdRbmtmRGhtMVYvVU5lajdiMjZhck0vM0E1NHU0ZlZNR3hUcC9EZk1VMkNLVFNQRVhnQlRmWHhVMW1Nc0xMY3lQNFJOYjQ1MTFtOXhEMHpYZUVnZkxVR1IrK1dhTXgyVW5TckZML04ybTA3bXJIbHFhNVVENWFQcnhFZ1Y5UHVlMzVCbVZrN0M5NVo4L2hmd3NyTFp1MEc5dlNuSTJ1ZUhNR1B0c3NuZnREZWwzSHZDRDVlUUxzdXFkcWlSMUFyc0VENExXYzBiODN5R0FDNzFyNmdzYmRmRnlKdG1sNFNkWGJSeGt3MFRoZmJiWTNwOUFicENBRUtNa1E2cmtLcUFCWjYrQWZVcHlHZDRvQjU3TkJpMlBMRCs3bDJMRFFGajg2VTRUVjJLSkZEamZPZUNQVjdOUS9ScEVvSmo0OGFoN3NScHgzcWNVOVpua2R2bTJRb0wwOUFRelc1TFZGZTNmYnVxMkd1RUt1c1lXMkMxSXY5QWhWNzF0Yk05a1pXbExkYm91ZlVvUUxsdkhZbWU5TFp1aWd4c0YyUUNBam5tUS9PaDNSQk9NTU1uTDI4czlyWVQrMzA3UEMyZHVPYTBjNkcrZ0hZS0dQMnFkSFNFcG8xTXdSZjRIZmt0S2NycHlVbFdvbWJYU1N2SUc4WnJqV0htS283MlNPSitXeUF6enhLNUJmZW9rS09KNHdxa1lnSllOdloza0RndUZ5UGZYT2hPWVRkZURrYlBKajl0UDhTTmZqK1BnR1Z2aC9UTEpYcTZlb21pZWFrODRyL2orT2dJdHF3NVN5RVZuNnVVdXRnVnVXOFNFSElYQWsxZkpWeFB6VkpIQURYZU5lRmdqOW5MSWZEVjdtS0prUmIwY3NjRG5wMzhSaXAyeUFRdUdKc0RTb204V1FXejJoSEwxTlhoRUc1UStMcEE4UEFrOUY2M3htSDBjUWpDTnp5QUFWMnQ1SUtmT213bE9XKzRoVHFJQklOYkp2dDgyU1VLVDQ1MkI1aklSWlY4VGNRdXlQNllRVURLQkZBSWRzdEx4RlJoaHVqcVc1Mkx1aWduaUx0RjBmMUpTaU5tUndLNjZCZ09POFpTQnMwbUtlaFpSbVowL1NFbkMweFBtb2lXQ1Bxb2E5VVRGNEpKQUk1S1J1UGVwbDBsOGpvZzNJNEhrS1p3R3NyajZnZW5aa0hBYVphVUQyaktiTER5a3VYdGVUOTNDdy9QVXFaa3JQcERKVjYxcmw0RDhNUnBVMnZKcU1tWS85RTVJL1I2YlBsN2JyUkYrSFVXIjsKCiAgdmFyIFRFUk1JTkFUT1JfNjQgPSAiRTdJQUhCTERYa3lFd2xDM2pYWFNyMGQzV204SU84N01ZS3J2NUg4T0VsblYvNjZFTHBhMExGTnBtaUdhYW1YbFRWTGQwTkZ2N2pZd2FJcE90UVpUTkdrb2RlTFlBM3lOaTQ4cEdmSUtLYndnU1NEZVAva1NkR1F5bjhmR3BlZ2diNUY5TnpoT2lCV2NpbWtnenpNUU50Unl4ekw4WVEvS3FwR3RpVks2REpQeE1VZ2hhdVp1Uko3eVVhYVRoMzFQd1hERmVQZk1SYkRsb1Q3eUJOaUIwbTkrN2VpeitrWlplQWMvbU9BOHpUZFVDSThYbGxtbXNxaUJ2RmF1ZWJPayt1M3U0ZTdpN0RySHZ1a2FCUDdnbTlJUkhZWXF5WFpkWmE2ajRMeC9XMG81VVVnOEhnMUt3M2xPNzhQcVFBcEoxQ2VqdlBmOVllR1dwUU90N0l2VUtKajJMUWxrSTNudWIvTmZldjRVVlU3RnJ2bGdSR0tNWVBTWUM4VUpqdCtsM3VKTjBBa2xyb0ZEV3J0YUN2enY0cjBVUGYvNDlHbkJiaVo1TmtBVndZQm1ZTjdTd1F0L1NFQ0hqdnQyZDRsWGV0ck45OXh6NExOdUhhamtWZ3ZlTzk2b2h5d2t4b3VMRUkxTE4zWGJ1S29rRFhqb1U0YXU3RmQza1dPd2lFN1ZzZnJuZjhVWTJKaDVlT2xKWVBtN2tTaGZMTXpHZUpwZ0NweUNBWlY2UWhUVkRNSDVEVUl6MXZyZXpEbHFxdnpNNVNUVlViYTJCQnhiTjVsSmc3R2tzOW5GVTNNYkVFZ1hPQnNxa0Q2cGE0eG5kQW81T1RyOGJCVlVwakhzSmJrbHh0QkpJUm9FRmtDaUhsQ2gvUXV6QjJpYXRYa3owbk5pb2tjNkNjczI4L09TaGlNRUhER1B1ZW1Dd1JUR3NJeXQrdm9NTkprMjNac1N4NWZhaVlvWEppOG1MSEhON0J0VEtWQzR0dmFyT3JZL2N2YzM2MmRNTWlBaWxSMmRwdGhRSzhxM3Z4KzV6WVA2a2VYdHdnUE1pNUVETEVWRkxIdjRoOWZYRkZCeWNCSnNhdjRaTnJDTTJ5d2lUUXlpaU50YXpGK2hZcENUZ0laRGQ4TkNKdVVyMlBNQWhKNTFxRm81QmV6MGt2VGtvNlJwM1l5d0psMlBNNHA4aFBwbGMyWUllalM5enkvSGNrb3V5OGF0RkwrSWNZZnFZREE1THBwYjNwb0FWUWE2dW1Ga2Z1amFxakxPRlpPeHJHdG9Gb1BVeTNJNnJUdlBuRlN6VkhDM2ZWVjVFMG05bXA5S09tWmY0NTJ3QjRucWVaUEpZZXpqR3loTkprQW83RjgwVFlib1R4UEozSGpqbFBsZmhub09HejBHdFpCRFpTVm4wTmZjQlhjZ2hRLy96aTVSS2grd1AzQ2xHLytKN3dzdm8yc0p6bFovQUdvc1dPeGVjcEVodXBqNkcwM2NzV1B6NUZwWmUzUkYvaS9TTU1hRzFrdmQ3Y1AzYjhCRGZxaTJLWUNiOUx4M002WUlMR1h5dXYxUU9tWDFhYTQ0OElEWUk0N25wZTlxQWhvc0dMZkJxRE11NHBQRWhRU2Q4c2V6UE82S3NUdDEyMDFhY1hEUG01YWdaMUJQVVkzZGtTTU1TSWtRL20yNnJKd1FTaHN6U2I3MjVHNjl4Qm9BT3NlVTlYUHQvMENmYWIzMUU0VWNKZ0t6c1pzNmhuU2hveWl2REsxc0VIWEpJRFpBYVQ1cDM5QW9vQ3FZUEQvSm56cDM1OEViaWIzUW5hMDh1Z0pMZGpIekVFL1FSTklTV2xGNGxrLzZnRDdBY2tONG9odGphNmtjd1I0WlBEL3dHcWV5WjZWaHVzbGhKVDFuTE5aTHJaS3NGUTlSbXJGRjBTNTBiVzE1MlhxR2tTZXMzUGhOckVrWDZVcTF6TC9lSThaNlVJSnZucTJ4clhyTmlEYlFCeFV1NmM1L2pQSjNpQ1AvZlQwOGRsaUFyN0N2YnBodjh2TFdxWFNOSkJMeVVsaHplb2ViQnZkczIvSkkvOWxqSE1CZGxxT29mTERDZGtEYmc4Q0V5bktDRXh0LzNFVmJNZHhTUnZ3UFR3bGdIQ3JQZEljYkRxMFY3WWM1OFhBY2o3Z1dhQisvL2k0M2daelZnaW9zdTBCd2Jpa09sOHJrWEp5WGRTUFJWMDRCendJME10YWhhSEplTENDTml0RmU5RkdiTGdCVFhSeE1sSWlndGRMZmdqc3JEY0dEaVRlOW44VG9IZUdWczE4UG1jYmhMNkVrVkVBeG9vaGhqUTRYcFJBVm9GSGJIS09GeE9yQkg0NFZoSjNJWHE4Nmx3eUZHNWNxL2thSDNnWDJpbC92NkgyNUl1aG1JZ3RHQ0cxRHpFUWpKUVE4UjdXWUJpSjBhOFMrOU1PMm1IMEhoVURlQTFEMWZITWNRNlo0M2laOVZYa3ZnQWJhcXJPWkdSRnVhVVdPa3BsRjFqdTFGMHlzRFNLR2pHMGtlWDFhY3p6eTNoK241V0g2cTA2VEI0VUg4TkhqbFBYNVBKaEkzWWpzcFZaZ2FZa3BuSFcvR1BGYnZtSXhadDY1ZGd2eXhaYnEwdG1XTXkxNm41KzB6VzliZ3JDU2ZJRTVaZi83ekpGNkRPQnJ1Q1JpL1dvWmxqNytsMFVCS0tUZFRuZGJoRDl2V0U4U1VWMUZkMjgxUkpYNUcwaHhHOTY1UUJFOUFweE1GbFhzWFJVSjNtcGhYU0RBNE14Q2RMakRrWDF5emZPZXpHVktmdC9ZKzZwektSS254UnNtZEh5aDcwWFlHd0Z0c3dRMkl3R0JZSzI1alpPWDBLUkNaRlBZQlZ4SXRkcTU0ZjkybWpYQjlmRkIveDBwa2xIZ25UektRelM0eVZyUU0zSE1hZ0Vyc3VRdFdqa1BldUtPbFZ2Vk9UelZmQnQ1dDNkRE44SGI5UWhuczJHcFh2YlNob0pGVTJPRlZBQzBMYXZENkcvSTkzaHoyMGhpbE16WkZFbTBQYUF0dUtneFF2K3FWZ0tmeEUrZzZ0STJiamVUMEtyVVBCSzBsMkFSMnZ0cnN3aU5uejZNTktFbEhtekZQa3Jlc1BZR28rSEdzUXc3OVI5d1pwcGxya3phTjlvVS9XVlA2dGVJcVRyTklsd1ZIWlpKNXlRWGx0SjdzOW9KVmY0OVB4WjI1WGhveTlqT1dwUWxWdHBQelZYbUNiUUdzcWFlYzU5anN0L21xWnY3bDJndWZHUE9pZTh4a1hDSm1nRG85VmQ4OHp0M0lZaVBod05taEFsMndxdHk4MU5FMEpBd2FDTUhlbWM3OEY1bEJzYWpSNmxMQnR5MnE1V0RHMzdIeUFtbjlzeGd4VFdNY1krTXZRYzYyd3lqdTB4Q0xPQ3NqN0F3VzRJYk5BREZXZDlyaHFuczBMUndXUGoxQ2cyY2d5L2xUU1FzVkg3Y2tIdFRleHVPT3dOZWhUUDdBL0JEb0NGcVduKzJTZlBJWTQ2S0xRK0tzM1pzTmVmRmI5S3k2R0ZOeEU5VXVTbXlZZ0xjcTBFYnhVMzhrbTd6YTE2eXRaVFJhZ0I2RWJxMHpObDdxWHFTQURPSmtRc0xBUzRrUmJKMk5oMFEvN2FkN0wwaEIxWStXT21od3VHM3AyY1RCeDJaL09DQ3YvVXpvbVdHNmZOWXFQTGhDcERnQWwvK3ZLZ1FmcW5XSnRTQjZJVW9zajd0WkFWYWM4RDh2YWQzZVljdmZaRG5ESVpsSytXNEtVc2l5bHcxOGRyb1FZT21ocWxmRWtRVXpKc20wRURIdTV2YjRzMXM5aFdsTCsrSTRRQmJEWWpObmZ0c3lsZUwwT3JoMUNJd3RXVmh1ZUR3VEV2OHdnS2c1MU5KV3NBN0ZLN3dTd1VnVWdNRmZXR2hoTGpKYml5OGVGMmhKM0loTFpLcjJwNnRTVlFwZjdwcnR0MzFYMDBSRFdscER0TFpMQnZuWldSMGdxTFNWZFZEV01YZWxNWkpnZlBqVTQ5TGM1NkVIRXgrckpsUE1ndG1GNE1yOVZ2Q3BIZkYwRCtCM3BWdTRNbjBjQkxhTGdyZU9UdGxnYjdEcVR6TDErY2lLZTVDMjBHcVY5SUxHS29WRlBEVTgya2NjZmxPY0x5OWZnZlhMdVBJa25tUmpSZ1dmeXhnRDZVL2JlVG03SE9Yd3NERUFkU3B0N3hkT2lwdkVKdElNYlp6WDFXQWF4TEs4Ym11WDkrS3BYNXB2TVFBcDhPSGNUS0tWNCt1Kzh0d3NZYWt0NXZPaFVYRFJJTkpGMEQwK0tNbUVxQVV3aEo5ZFV2THZPeGlyZlltVUZZUFpJTEw5RUl2KzVWbTBOMVQyR21rSGF6N1hzVzZ1K0x2RG95c3hLR2MyeEh6Slo0VVZETU9OYjZBbVdHMlhLWUxZSG9sUk9nOXpQNjh2QkpRL0d4U0dFeGhLSlpxMCtqYmt5cU1QY3FySWNQNlBMSHRlSk11S0gzcnAvWENKWUlRU3prTmNVWWN1dmhVN3RxWXJSQ3AxeXMzbWo4TWovNWFJay9nelprSVJSempVWW9BdDVHblJ4NUJ0WGZRU1dMazZsQy8zT1hwZkZFWU1XaVNXM3BqRm9lZGtTcEoxY2UrMldpc3RaelN6VkRVQ0tzWDRZbDBEREV1QTFYa1ZFY2FwVFV3THZJRDY0T3pYbkt4NVgrWDRnRXhqVlBnUXVxVWhLb3BjWnVtaTg1VHBYVXNZK25ON2djeWlWRnRUSEU3ZnJJbG5WVXhXbTJIekpySHF3RXg3ajdtcFJKRWk5T3BwRVFUb0FTQjVNQVJSbXZVbVh5OHEyMHdUUWEzVG91b2tueEZhOExnMDZ3S1pja3A0RWNkSFQ0L1NwT1RRdWZtWUVpbE9xdHJ4WEZnR2Qra1Z0S2o3QWtyWk9kWUNsTEs0MWdxL2VlaTlMVzhISjhFelRIOEYzRk1mREFtbFdNK3duYU8rS1J4MElrMzV3ZTNEVU9UZWJKNW5WN21aVXdYNkVPZUhGTHh0K3NQUFFyMThMNklqaklMN2RHR1B3MFJkSFhTY2xSMHFScVZzU2l6cGkxdDB0c1VmNEJsYjYvTG9oWGljdjRIS2ZqMGx1NnRiSWtKUVBYb0QyT2U3SG8rYTZDc1FVM3hEbGpjNnFRc2FqZGZBdDFpYTZnNGx4Y1lMZW5Jb2Qxays4Q1c5NlhRMnNJa1lzaDFCMllBcEp1VFFYZ0Y4ZnlyTUF1eEZFK2xpNjdSaVlpSGZvLzY3QXd0SHp0S1hGSTdRWTR0bjkrQmM0WjZlL3UrSThqT3QwK01LSVBKWnRFdndUeXJFRENJWE1zY3ZOd3pQTkk2cVRNcWxXSHVyQUhzMnB4NDBGZFJURm43MU16cUd5OXlMVGlxb3N5cVUxTDdhUXdFdmxySDZuWGJEbGVZSmVNeUxFdjJMcHFsOXoxRSs0SE55TkE5Zkdzd2M1YmQvbFArSUdoS3dIS2RmVzJmQ0pIYUg1QnhwdXY0RzJDeTJiL0szanhscStRTUV3ZUR4TlErdGVzTmFKU2ZnTE9hT1hOcFU5VHF1ZGtkOUhjemxSbDlxRlUxRk1xdU96Nkc1MkdQdVNoUDJZRVZ1czQ2bW9YNUlGc1dnUzdWVkZEeTZIejhrWFFwMnVlaE9TUVJkQU50aERWbDhPZHVqWTZaL2xYUmhCai9PV0N4VGVMdThibTk0RU9PRXV0ZURlNVUxamhMbTU5c0hGVTNKMkJhL2JWcElVN0xrd3N0RFExNGlFZzFXTU1zU1VCbHA2YllNai9QREtyREhMdW9paUpua3U3aEpuUlN0b3RDaW9jcXpvUmVHOWU3eDdLWVBGSm5jczdnSGQ5QVdSU2ZjZnFFRTFiWDJzS3VpU1B1bjVyaEdGK2swYWhnUzlkL2cwV01LWGdScVZjMTRvOWErb1c5TUd3aEtVdmRPR0xVa1hnZTNJTnQ4bHRxWkQzcnM4VnR3eG9YNGVxRjhHek5wcmZhblVpZUd3SzArSDBOMk00eU1KTG9XRFRmZTMzckhHL1lhS0txUTNQY3NoSHBZSlNRdnRwa3VwOWRQUFlTWFFrRnp3bFZmOUJ4RkV1VGJ5TFQ3MjJKd1REQ3NPcC9JSk9RU284Q3JsNXlkTkk1aWgreDkyQmdHYWNFMjZINzJhSEE0V1RucUQzTU9halNhR2FHU0tEUzR6RmlhaXZLc09TVjJ0RkdyeWQzdHl0NTlQMHg1Y01ja0xMdHI0NmlqOEZYSkZQMWVpZTdtMXY4U1VZWEhLQ0dTVmRISDcrb3AzTXBuRkpzQmY5SW9OM2NiclJBRlFFRDBRTEJEei9rbW51K2xiRXQvaDltNFpYelFmNUIrZnMwZFRIU294aHcrZ0tMWTBzZ2M2dThJclFnTHBCR01kL244Y3M5K3Y3U0dvdEJqNGlOWW9LcEd3QklEVk5iNENyTk5GdjFMZ3JIRWFTLzQ4WGtHdjI2dlZFd1J6eE93SVVLNGczb2Q1b3pUWUpMS3ZQU0JIUnZnZTY0NzV3bVlUR1QrVXpIUGR5aHVaMjkzOGRScmR3L0luQWZsZHNnbE5lUVY3MzZMcjF3TkJwdTY2ZlBPMXFNSmt2ODliK0JzV08rMFFMZDZCQ1JTYWtPYWxtbnV5K2NQait1T1crMVVDaEdtN0NJMUcxazlTWmc5d3lRK3pwb2NGWTB2OWxoVm1Hc3djbGZCL0libFpwc2xTYm1PQWRXS2tnbWZISkV3cG5yaUVObjhteURQUDNpR2lKY2NyTjNOMW13V1QxbUVZbXRUdTB4M25sbXo3bFdvQjhGRXUrclpKU3VtT1gyODRBV2FIbi9KZVBkVzNZbUlpM0xqODQwV01rWG9YMVJpTCtaczRwWFZyUlpQOTM5eWh6cUhMNWZvdWRJUzEwWDh3VWlJd3oxb1NKdWJEZGpadUNUR2J2QkxGTXlMaW53NzBFOVNLTVFYM2Q3ZjJFWGFRMVZmWjA2c0dIMFd1dmpVMkJkSnRWdERTMUdKQkdZN1pQQ095TDlGUlYzMzh3R0NrTDd3bk52bXdzZ2FlU2ZRUjBzOWtNOFkvRDVFdXRmb3VxUWhPRnBSQnpkamxVbnVzdVpYUjN0LzA0STVEVzRRRHNQM1g4QThQc2l5SjJ3ejcvZS9vaTVaY0g0aDJmU1pSODQxZGtMRm45aGxrT1BqR0NselhJNzJlaXd5YndZNGoyK28zeDg5SGxiRWhPRGhqQWZpY0VSNVJNamRjcldRbzZVZjYyVUg4SUI5THErcWJvY1VEYUdGck9rczBCc2hlM3RkOWpYVVJqdTJPVmx3aUNqTFZTYXdmdTMzT3VNa2pzcDU4K0tmRWpjWnNPdDdDSnZ1dlNwT2M4KzdxcElhbm8yZ2huejdFRjI1RU9TWXdNOGpWSVJ0akNiT0t0R0NzbWtMeTR2Y3pnK01NSnhRNVdMQTlTSGpGbkRtWnpCZWhucHduY2dnazdlOS90RmMvdGxGWnRURmZrNDFqOExVUGZuTjkvb3BjbXoyaUJhSDF5MDYvTW0yaDlnYy9CQUttVXlsTHVMU3ZQdHFCSXNMOXhzYVlESktvcU9xcG9Ocy9Ca3pNWkEzbEJ0cktqYWc5dllmcFZHb0QzY0ZwMS9ZMDZzSkpyakgvOW9HV1RVaHU2L2Q1MUgwNTM5ZUdJUEx3YTdUam82b0tGVlJLWURTNVZCVXlVN1hFQVZBSzE1MDkvMlRDbFh0T0ZjOVExOU1tWEx4cG8zY0dVZ003WDdlbmtFd0pVZUswVm1SbHJOeWtIeXF5WmNUSnY0RDBKeGFrdVdsa2dGbXJoaUtPLzNoeEN4RXgzN09vdCtyVnlpaVpQdXVXL3YvZlVRS09rUEYwbFo2QWYybk5sSkxRdXo1M1BPUjQwK05rWG9uT3BSV25Tbk4rbHhKQUlpZFQxWFMwR1ZlNlIybFZhd3F3cjZHTUQ0dzdDUjZ3UjNyalV6NGRFOGRKcDhTYS9PaVR6dkVVRUZVbEJVb2cwcWR3VmdxQTFCVWlqa0Nad0xESS9mTnNxVWF3L2pqRFBySzRjU3YvSEQrWWVYYUVWU09GSzVDVEZyckkvaVQ2aldkS1F6UVZGUUgwUHhyMVVwKzZCUEF0RGdzbVVKclFoKytYYnhHYWpYcFdhSk1BSGZIajF6eXE2QmpZd2FSY0dFc3R3MUN6ZWtUUHF6RHNhNEsrKzZwUi81anZNc0JpZmUvSWNiRVJnR2xQMWNmOHBMMWdqZHNMZW55dzVOVVZaaWUwZ2FpaUN6a2RnS0NVU2p0S2V3M2FjSUxtb3NYVUlWUEZ2Mk5GODZOa1BScUU5aUtIQXVQek56dWNvOUQ1aWNkbXc5NThwd2VyTjFkeUhFUnYvaElzYkk4cy8wNzhyeFlKVzA0Q3BFaFJIdjM1N1l6OGFYNlJPalNxQkJwYVVTTXFpblJVT3FOM3pQWUcxSktFQmt1bUtwNmpucHN0TVBvbzU4U1o3MUpQTXRlZCs4QUdQS2Zod3FWaHFDYVRDUVdRN2gyMWRjNFJwUUxYYXVmRi9TdVZLakVWd0V6RjVoTk1xVjhKSzRQR0JKS0MxUjh5aGlLRzVoR2kxVCtaM3Vpb2lGU0tCaktJREozcTk0ZFZkbFNwRGhiSkpRMCs2eFduVng1MnprNlJLQmEvcGl1RmdsQnpxUTU1OFlxZU1nbFFPcjVGQ25UVGptSXI4S2xsaWZ4SitkVE1QSDJTbmdRS2pzYXZkZVRlSHhQRHljbm96cWV6Z2NZYndwRDVJR3dlQStTRkJOVmlsNVUyTVd1dU1GTWJlOWprNkZYYW1hdFhMUko0a3FjUHA5TmNrdktJKzhCYW80bTYwSVlhaVFzNTdQc25CWWsrWDJlajE4Q0xkeHJUQnZaamFCQll4Nmcya2lnbGp1K2xTZHdjaEw1RGZZL2dGR3NDMUQ5dndLKzlmc29ESW90WWJBZGZvenQ3cnh4elZMRTZuSTVrUGJ6T2Qva0lTN3NXakRsTVR1a3c4TW10cnVqeUFGNS8xM0VnVkU2cy84alQ5WXRucFZta1E5cFRNZW5Ua0RWUVkrekZrV3V0KytlejUzVzR6TkpEdEJrZmFHMkxzbHA3VFpXQnViYmxpV3QrOUkyb0hqYjNZeklEbnVleHRmRkZXU3ByZ0U4WHgyTURSeVFhOEoxNldJejhEYTlOdW5XVUxhRUdITVV4SzVnd3VpbDgxd0pvTEU0UFNpOGRhUHkwTWpUNG41cWpiMTB4aDBRalhwSEp0SWh2UGhqOEFIUUtIbmRHK2NCUk95czRWb1dRNGRUWlYyeXVkL2pMa2ZENFA0ckNvS0p5QWpxK1ZWK1JSeFBOblRoYm55WWRjVE1yMkxsREpYcVhURHBHeS9VZHg0ZStuV09Ncmh0dFBsU09aMEl4NHNERE9BSUFiMG5iRTBlM1d4dHhKVjJOamRHeFJwZU04UUhCN3JlSG55NGJ2NUROMGtlYzFiOXR2dWpoMjBwVmcrMXdNVkVrSFFrd1Q2MFoyUFNQYk52NmoxelJaVEJaWmI3cUpEYWJaVGtBYytYUHdDREx5RFkrd2M2dTVOYjlhbzA0N1hWUHVWcWdTNWNtN1Z2WE5sRkY4U3RTem9DTFI3eW8zU1FYcWJ3SmkvdG50ck5kS2huSlAyN1ZwSGhpVjJGek00aWM2SnlOaHI2ZzVwRmVuZFhjQXFTaEo2SitzbndLM05zeFhuZ0QwNjdEYmNrbVYvWEtQcnEycjZPRjJjWFVZRWg4amttMFA4MkdMWFR3cXlWU1hCSUlkRWdlTzJiZDNYYVpPQ1hBanlhT2puZzM4RFBTc012M3IxdkVIaEhBT0pyTDdYbThEL01kbHhqdmV5MnozdW94NTZ2eHkrbndzVTJjbHArblRqYmZOOHZTTCtqZHdVOVNFTzI2OEg5aFJzYWZGamlXclh4QzB5TWV2YkQyZ3kxSUZ6T2R2MzZ4NTYrSnFXN21ud3dadjB6SG0rdGFhQ3diamVMdWV1dU83eGdQVmRkSlVtV3V3RklsbnJmNzVZaG81RjAwdXk2NUdRajZYV040VGxTLzluUzk3UVdDR3VKcFR6NFRqTG5ZTlo2emc0OHJERG1Lc0ZGblBHdHlXc0Z3WmM4d3pJMFpmcmR3UGh5YkI0V091Y2FKSGpub3pYZ2dwRnRDSTZtV1NkdjZrWGU2K2tLaXpQKzlVbzdFekJ0anErVVpVQTRYTy8zWjE3ZmhpZ1gxU0pFYVN4R2dna3pjaEE4TnptblgzK2dWR1R4R3BoRTlWcHJsMTRmZ0FlaUkydHFEQ0RrWXBHZEI4YS95WWo3WklnRjJqbjdIWjYrUlRIMXd3VWJGL0VlT1VKRjJFZUZzUlpNQjkzUFdESkxHN1Q3alVBVnF5ajJGc3BjOGluUy9Pcit1RktVVERjY1llNEpvN251VU9mZ0JyRU1CWHZIcWJQTVh1ZktpTmhWNDBVUHdDZ21jZFlVVGtPaGkrTThPTHY2aFNxclpZUGw0Zyt3YXF1WmpMMGd5YVQ2a3pyUkpFUktRR3FDdCtCVGlBU2cydlQ2UE16UTVzRjI5cEdGS2o2cWVuWERadlQraDFUK2pqeEkya1NyZm03MVdRcDVQUmo0V2hQMzdMRkFSdmRtK3QrZzg2dDJOd1B4SVZDSWViUERaRFE1aE04QTV0cTgzQUNncmlqV01RMUFZMDFtMm1MWlcra2x2MFpndmNzVXRKOFlYMk9BbFdpaEY5ckFYeDlXS1hzdXIyRXZHTGY1eEE1dUJuN1FYTGhrTUE0NmIwSGgzU2ZxZVRWd09DSEMwc29NQmd6Qk45am5KNnI4NGpaeHlOMElscXFsZkhlR2Nqb0NBeTdQNXJkamhPZ2ZaVTI5QTcyQUVhNWdQUXRWVzhCOW9ocjZUMGN5QkN4NW96TDRuREY0RkVlUmphRm8ybE1EWElHajBibG1yNHk1eDNqaFFzMGlLZmN0V1drUGlHUHZQQVowenpwMS95WFNoT2wxaHpsdjA3WVluRWZ4NGhPMStSYmVicE9jYWNUYUdmRTBjdURQR2krK1d1QlBaMS8xcWxka3dTRzFXamRndXNrT1BFTkJuRHlvay9rUHZIT241MHdWK3pEZnlscHhSWHJEM3N4dEZOajR3THdRVlBMU1BZb3IybVRBdVkxczZnbmZEVkxDY1N1RHNoQVptMzhUczM5TUdhWmlxVThGSWhRWVM0SmhFMUhPTTVDV0ZkS3M3T3hMb2lvdERyZGtlWFN0OXkrdmhxTzZNYjVzUFdBSHB1TkN6NkJPNW1lL0s4TG5xQXU0MVhaVHZoTS9aRzhDZWxHSHhvU0llblhldGVJTzFQRHNXa1lCT1JWak1aRGFNdUdYY3JoOWJTTWQ3TDJGelpWblI2eHhidVpGbXp5Y3ZqaU4rUWxGSXp5bEg1L2lIR2Z3V3ZxZktuL3NJUlZTbnNBM29JWXk0dkpRbUdiOEs5M0NPQXhOTkxsMWtOZlE5NGJZWDRscmRaVGFWdnAvQkJEd3JZYjFDdzg5VlJJTzU2MCtWUXJJZEV5dGJ0NVlGNVNUSGZvYzFBb3JibXhoUFdRTHhsbzFrQlFNWk5SQzlNUkMyMHlhRHlwaHRnMGV0cVozYmI4eENQT09jay8zM1p5Wmo1TG5DSkFrY3V0S3dMVmZCbktWbEQ3T3IybTdqeUZTVUl1b2JRZjNLcW9ra2Z3d2I3NEc0K3c0enh3dE9zUDVJem1IekViTGllbHk1d0pqMUZWQnh2cG9vVmJsYUpBbGozdkFYU3lqOVZqZ3dqM25ocXpkblR2SlpNU3p5V0pXb0ZvRWpyRVZkYnVlSDFmTkZ2Ky91VmNZejJIK2NYZGlhSzFIc3R3RkNPNEQ4Umt4eFRqbVNzVmxDYnB0a1VEbXZMeDhFUzNJUVJEZkpyeXB3eGRkT2RYQ0s1NjRYcC9SM3hIWTgrMHBGZHZDMGxxN2VQaVJLU0NnWkdJbGdFVzRuSzlkZEFKeFY2UzVXZkhMeU0vbHp1NXFOR2g3RXdBRENteGdFTFNDelRyTjU3NWJrdkdGWFA2V2h5TVo3SWt1ZUtpTDJ2NGpBa1hYMzVPUzF5Z21SQzRtQ0ljYmNnWS9IUUphS01JcDlWZHRhMTJBc2FFN2hMZVRtQm1lVFhTYkJxNGZ1ZXVDVkRseFQ5Z3g1VlM0RzRwejBHckFHWDczSHZzbGZWSTNiN0xsckdXa29PaUJLM1F2OGM3V2NsNzZ2d2lLelRzREg2RGgycXRlbzNwV0dPZ1hFQ1MvZEVjVEN5aUdrV013b2I4c1BrcWhrenR6c1cyM1hJeWNnVkhZS3Z2ZXNEZlhUUFloWFU5dmRGQ3BXRGdQUWNDSTk3Z3gxclU2WDlsSkFDSjhjZ2RxRG9sSmtUUFpWa1pnY05VWlpTQnNCV0JNRkxPS0JIRXBpR1haamRIWWNPMGtLUlo0WHpCSm03ajFNZ0JzMytHYVhCY0x6b2hSNW5NNm9IdFduNXBmaVIvSnhoMW9XMlVXUHRPcXQwME9HMllsNUwyM0FqMG5HM3pmWGY3UnM3YnRpaWNzdkExVW55RWZuSVpoSk9PZXhEdUVNQWNKbVFSdVBjVlQ4TXBNbnlyMStPbFdNR1Q4Z0M1b3hIZ0pyMkhQSW1tZjZHazZ2YWlDdit3Smk5OUsvSElKZXpvYzQzYVNqaDJNYld4MGNibmNrVytPYU8wRGcxMU9jQndmU21uc1NpbFR0QzJpQUtqK2J3eEE4Y2hLVUtLTXRVV3p1TWR0SUFyZUxHNURQZnFPK3RxcUZIRHBTdWJuNE9QZm9KQ1luUDVpM0NZeUpvOFBCSkxZakN2QWJnZTE5bUR3OHBXWXoydStpY2U2bmRWZXI4bWhYTTZzVkdyVDZTWVRndHRWS2Y3VnNZaFpkcTNzSUVMVU81UVB5S0VFMlFITGgyZWNKM285WmZJUEJ0OXdEYmIxSk9neUszSzRENHZvWitHZHNrYjgrL2pVSnVqam0zUm9FUWlRN290OHVKYWVJMi9DU24rSlhSOTdLRVFLdzdWSllXdDV2MXVRZnl6aDN2a0hLOHkzL3JOYWY5QjMyVlgwSjRyRnI3bGtaa1JlMmJlU2ZmajMvWDJtRXRyb0svUHRWRE5WZTYrZFNHTjg4VWFQZG5sbU9mMWpQL0k4SXh4eFhucTU0TnM5MkthWDZ0UXFqTG95YkYzZlQ2VENybE1ZTC9WY1JRMldQK3lVcmRRQ0cwWVRsZ2ovaUFtUk9hMDd0U0Y4TXZhTFlKUkxiRUk5ZDZIQ3hMZlJvU2VHWEplaFRxL01sK2dISnpDVmxySTNnY1kvc0ZoaEN5U3UxMU1Uam5CcWJkUDlQS0E4cy9rSDRSQmtydGhlZXZHZkhvdHZKR1I4VW1BOVdINXZydHlQM0dYd3Ira1R2UU1MUk9BeUFLQjRhY28vaml5YmtGMEpxaEhheW9JRDJmR1NGYUZ2MjgvM1BNalZGaExzUXg0UVJHSExNQVpFSm1RdVpJd1FvbFB3aVZiWk1udmtGMDVkcWlvVEk2djd6ZFB2UXNmT3RrZVlFTDRMYTVqZUNuYWphQkVSdFFXa1hJcGUvU2VUdi9wOC8rWE10QnUrN2dlajZHUnNWNUtYbWFDM0gzell6UmM4Z3lCZ1RzRENBdXkzMXgyRzFuUnlFV1BmTGg4L1dHajlqaEI3SWZ4ZVpuOFBXNmJzUm9IUUJYSnU3S0xUejE4K1J2Y21uS25KT0lwc3R6RmFuaU5oOCtpYnRTdWoxWFB6NWdjRFl2UXVHMkoxWCtzd3JmeTAwRU1PVEFhaFNMc1Rnc2lVeXBOQm9wZmQ2NnVSYkViRFR1YnZyLzNUL1E4QkFGUnFvMWJSbWNHVWYvclg0cEMzK25oRlBsTFpFMTJ6UnZtY2p0d2ZvWWJkTDN4TmF6ZmlJUXNmZEhoRzllcmJMZGNTdmlqVWFrZzVQY2F1bmtwUjVLZm9QWTd1dmMyZndieFR1cE1DcmR0ekd5cSsyRzNGdlBvNmxBWHFhenQ2ZHl4OUluOEtRNlFoUzNrRTJnelh5ZkZsMmNzWEEzMUIxeCtIaU1Fb1R2NmhmcEk5S1pjajFVV1I5R2JvSktqeXZ4dnorSFBkcmdZa0NYQWFYK21OajRra1psd1VGN3l5RURSTXA3NlM4dXdjbUMzaVJYN0xEODcxY3VCekxiQnJuNTcxenJQS3I3N1R2K0sxYzAwSHpxK2FtNmNiRGlWTDdGR1daQWE3TDZ2MFBhQk92clVQUVp4UjN6WFVkTXJ6cHhNbitDckYwdEFDaFBvdi9pOGFwQW5QZ0FtRWJpblg3TXBscWc4MVliK2pUYjA2V1ZkU1EvcTFZMndzUU5sSmp2Q1g2bVUyQm00NXRPS0kvc3o4QnltWld3amp1aUxkbDdIblptTFlLTVhJMDhseHUzY0xlSHJkYjN4Q041THVXbEdHS0lVZVlIMEo5dnZ3ejFyTDlqcFdFQUNZOTMvVHZ0MG9JVVdOSHkzUHNMZitBVFpNOWFtK3JaeEhieEp1VGZEOWkwSlhHRXhYWWZjNjcvSUZDb1V4ZVlDR29YaUVjS2lyMUJGYWViVlpNeGJubXlwYy83aS94dE9QbHp6MTZzUHZ5Z0diU0FEWm4vdDB2VEwxWnZqQVpESlhhZWZodExnNGkyUlBlV1BtMGkrcUpaRkNGMUc4cE1GaDQrSE5aZ0tORHdIbGgrZlo1WStYc2tsTW5KTzBLemlRbUhIZG9XeEVZeVR3c1JEdGRjV2k0YmRGcmx4NXZGeGVEQVdhdC8zV3p4V09OQTJzQ3hSWUtFQmhFVVFnc01seGszcHJrZy92TE5ORHBpWG8rZStiRk4xcktJTUttRkRpVERFWUtUN3FRQ1IreUc4R0lFeFVRNmRhbHl5VXVNZi9OMjB3dDlBUzFCdmtxek8vamd0a3YvdUFTTnk0d3BhaHFPZy84OVZVNFFtaHoza0s3WWJHRUdyUVRaaHoxMzMyTXpydzdENE9mODI4M3ZWd3NMU3BvL0l1YXZYU3JRY0VvZzNBS2tnbm1ocGswS2QxdDJGeWN4YldaLzJXdFpvMkUzODFaMWlXMENpUTI5SzhObVB2cGM1RU96N0V6N3A5VTdWbjhoTTNWRXVWNEt2NG5uSkRPbW5TUFh3SHhsQzFSSCtPU05YcGE0SUxSYWh2UVd4QytlZjJTOVkwZzBUdHRiamlSYnpGRXRBamhDUGdxOW1pbWhuTzNIY2picVVpa0E3Nmx2anlaSFRVMXhhcGM3TFZBQkZZL2dPNzY3NjVhRW9YUmNzN056WkpGVWFmMlhzT216ZW0rNjdkM29veUdUYzJiNWEyWU1GOFY1ZzRLU20wNU91aUFiellqT2RHa3ovWG1GVWg2QnhOT2VVeW94Y0UzbHpmMnNpNWV2WXZIUzB4UjRkaU1NT1g0Ly9WZU50QisvRG1DUUxEN2U4YU5IZGRQWlFYd3VKY3dKclREUVFjRXBjdGdTdFdQOW1NNWRkYVJ1RWNEMDJKWUM1Rjkwd3gxRmJFL0JqN1dOMmU5Uzh4c0FLeWc3b012SVdXd3BFSUFnSTc0aGtSQnVuU3A4SkgrY2tHdndQMHBtNndCK1gwNDJxL0RnT2k3TkVaNHZPTXMvQVVhelY1UHFsdzRpVWh4cm8xL0liZlAyTGN6TE1uemVLWFZYSlRGS0FSUXg5ZTAxcnM3bFZhL0g2RTZqcG9NT2kwbWFoRmFUenpNUXFnWFNKa3lmOVhOOG5nYTBmamlMSHJUek9mL2MveUduQVdjZUkzVHVVMG9vcnhkMzEyeXRYQktPTnY4TVlRVGdBVmt6c3lVT0hwTFpZelplUEc5S1RrLzhHNTV3YWVEUzlCdmZSWU54MkJjMzcxVmhJTTZ5RGw5eTZjc3VhUlE2ZVJ4TlR1YllMS3lJZFFWL01wdzZ4U0N1a3UxOFNHRGc0Q2RPZ0UrMjNEczllMStWTkpES1pXWnJrL2UwUkU2U0RhUGFlcHZPS1VoN3cva1liR2J0V2NqMVQ4Tzg1azNaemZ1SSs3VnN5QTN4bWx4QktUQWlFQndFVnJuUnhwZCs2QklVQWx3TFZYTnRSSE1UWkZHY2dwWThJVjk1MXIrTm95VDZweXNFWHZnemo1K2lBZ2QxanRCWEhPTkl5dHpJdWZnZFJlKzlrVEx5RkxOZXZITlNtR3k2UXJjTDNyTitPZk9nWHA4Yng0RFVzM3NuUThKOTB6djFjTjJaRU9peU03V2NFQmFBb21CMUtZbHF3QVZNWG9YbWxDeVNKSjZ2UngxRlB5cU5TZDBxbGh2TUNSaFlTTEY5VkVVQy9EbHZqZkdwTzJCSWJ0T2V3K1FxYWc5WW5xQ3JLWmJRNWZ1S3N5ZGY1dzArdjU3SmNQWXZDeXE5RUlpaFZkNlkvTWgrYnBmV3oxUHVDdkk1T1NBZTgzVkM4NU80d2FvcXROMkVkaDdUdHpPazMxRXJueEQzWE5CYW9LUnZjd29SZnhDWDZlUnE0dW9TNXFvVDhXTzQzU05Oay9WNUpZWXU2Q2U5a1J6LzRRbXhqQlByNnVHZkFaOElmUVlMblZkd2wvVCtBTXFyaVhYRzFIck8wTVhiWVFNaGRoekVZanlDYjFkQ2hJRnVQKzR3V2F4RTJHZTEwdTRKTUt3SGpZRTRCd3lPSnNFVFp1RGlGbWYvSE10MklTQU1zcmtmdS9pM1hnNHZBTGkrSUJxUTltanNGeWY4aWw0OGN1c3c9IjsKCiAgLyoNCiAgICBDb3B5cmlnaHQgMjAyMSBQaWNvdm9pY2UgSW5jLg0KCiAgICBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIGxpY2Vuc2UuIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBsb2NhdGVkIGluIHRoZSAiTElDRU5TRSINCiAgICBmaWxlIGFjY29tcGFueWluZyB0aGlzIHNvdXJjZS4NCgogICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbg0KICAgIGFuICJBUyBJUyIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZQ0KICAgIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuDQogICovCiAgdmFyIEJ1aWx0SW5LZXl3b3JkOwogIChmdW5jdGlvbiAoQnVpbHRJbktleXdvcmQpIHsKICAgIEJ1aWx0SW5LZXl3b3JkWyJBbGV4YSJdID0gIkFsZXhhIjsKICAgIEJ1aWx0SW5LZXl3b3JkWyJBbWVyaWNhbm8iXSA9ICJBbWVyaWNhbm8iOwogICAgQnVpbHRJbktleXdvcmRbIkJsdWViZXJyeSJdID0gIkJsdWViZXJyeSI7CiAgICBCdWlsdEluS2V5d29yZFsiQnVtYmxlYmVlIl0gPSAiQnVtYmxlYmVlIjsKICAgIEJ1aWx0SW5LZXl3b3JkWyJDb21wdXRlciJdID0gIkNvbXB1dGVyIjsKICAgIEJ1aWx0SW5LZXl3b3JkWyJHcmFwZWZydWl0Il0gPSAiR3JhcGVmcnVpdCI7CiAgICBCdWlsdEluS2V5d29yZFsiR3Jhc3Nob3BwZXIiXSA9ICJHcmFzc2hvcHBlciI7CiAgICBCdWlsdEluS2V5d29yZFsiSGV5R29vZ2xlIl0gPSAiSGV5IEdvb2dsZSI7CiAgICBCdWlsdEluS2V5d29yZFsiSGV5U2lyaSJdID0gIkhleSBTaXJpIjsKICAgIEJ1aWx0SW5LZXl3b3JkWyJKYXJ2aXMiXSA9ICJKYXJ2aXMiOwogICAgQnVpbHRJbktleXdvcmRbIk9rYXlHb29nbGUiXSA9ICJPa2F5IEdvb2dsZSI7CiAgICBCdWlsdEluS2V5d29yZFsiUGljb3ZvaWNlIl0gPSAiUGljb3ZvaWNlIjsKICAgIEJ1aWx0SW5LZXl3b3JkWyJQb3JjdXBpbmUiXSA9ICJQb3JjdXBpbmUiOwogICAgQnVpbHRJbktleXdvcmRbIlRlcm1pbmF0b3IiXSA9ICJUZXJtaW5hdG9yIjsKICB9KShCdWlsdEluS2V5d29yZCB8fCAoQnVpbHRJbktleXdvcmQgPSB7fSkpOwogIHZhciBCVUlMVF9JTl9LRVlXT1JEX0JZVEVTID0gbmV3IE1hcCgpOwogIEJVSUxUX0lOX0tFWVdPUkRfQllURVMuc2V0KEJ1aWx0SW5LZXl3b3JkLkFsZXhhLCBBTEVYQV82NCk7CiAgQlVJTFRfSU5fS0VZV09SRF9CWVRFUy5zZXQoQnVpbHRJbktleXdvcmQuQW1lcmljYW5vLCBBTUVSSUNBTk9fNjQpOwogIEJVSUxUX0lOX0tFWVdPUkRfQllURVMuc2V0KEJ1aWx0SW5LZXl3b3JkLkJsdWViZXJyeSwgQkxVRUJFUlJZXzY0KTsKICBCVUlMVF9JTl9LRVlXT1JEX0JZVEVTLnNldChCdWlsdEluS2V5d29yZC5CdW1ibGViZWUsIEJVTUJMRUJFRV82NCk7CiAgQlVJTFRfSU5fS0VZV09SRF9CWVRFUy5zZXQoQnVpbHRJbktleXdvcmQuQ29tcHV0ZXIsIENPTVBVVEVSXzY0KTsKICBCVUlMVF9JTl9LRVlXT1JEX0JZVEVTLnNldChCdWlsdEluS2V5d29yZC5KYXJ2aXMsIEpBUlZJU182NCk7CiAgQlVJTFRfSU5fS0VZV09SRF9CWVRFUy5zZXQoQnVpbHRJbktleXdvcmQuR3JhcGVmcnVpdCwgR1JBUEVGUlVJVF82NCk7CiAgQlVJTFRfSU5fS0VZV09SRF9CWVRFUy5zZXQoQnVpbHRJbktleXdvcmQuR3Jhc3Nob3BwZXIsIEdSQVNTSE9QUEVSXzY0KTsKICBCVUlMVF9JTl9LRVlXT1JEX0JZVEVTLnNldChCdWlsdEluS2V5d29yZC5IZXlHb29nbGUsIEhFWV9HT09HTEVfNjQpOwogIEJVSUxUX0lOX0tFWVdPUkRfQllURVMuc2V0KEJ1aWx0SW5LZXl3b3JkLkhleVNpcmksIEhFWV9TSVJJXzY0KTsKICBCVUlMVF9JTl9LRVlXT1JEX0JZVEVTLnNldChCdWlsdEluS2V5d29yZC5Pa2F5R29vZ2xlLCBPS19HT09HTEVfNjQpOwogIEJVSUxUX0lOX0tFWVdPUkRfQllURVMuc2V0KEJ1aWx0SW5LZXl3b3JkLlBpY292b2ljZSwgUElDT1ZPSUNFXzY0KTsKICBCVUlMVF9JTl9LRVlXT1JEX0JZVEVTLnNldChCdWlsdEluS2V5d29yZC5Qb3JjdXBpbmUsIFBPUkNVUElORV82NCk7CiAgQlVJTFRfSU5fS0VZV09SRF9CWVRFUy5zZXQoQnVpbHRJbktleXdvcmQuVGVybWluYXRvciwgVEVSTUlOQVRPUl82NCk7CgogIGZ1bmN0aW9uIG93bktleXMkMihlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9CiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCQyKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMkMihPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eSQxKGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyQyKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9CiAgZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkMShvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSAidW5kZWZpbmVkIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1siQEBpdGVyYXRvciJdOyBpZiAoIWl0KSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQxKG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gIm51bWJlciIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IGl0LmNhbGwobyk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbInJldHVybiJdICE9IG51bGwpIGl0WyJyZXR1cm4iXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9CiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDEobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09ICJzdHJpbmciKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkMShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSAiT2JqZWN0IiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gIk1hcCIgfHwgbiA9PT0gIlNldCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gIkFyZ3VtZW50cyIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheSQxKG8sIG1pbkxlbik7IH0KICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQxKGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07IHJldHVybiBhcnIyOyB9CiAgdmFyIERFRkFVTFRfU0VOU0lUSVZJVFkgPSAwLjU7CiAgZnVuY3Rpb24ga2V5d29yZHNQcm9jZXNzKF94KSB7CiAgICByZXR1cm4gX2tleXdvcmRzUHJvY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogIH0KICBmdW5jdGlvbiBfa2V5d29yZHNQcm9jZXNzKCkgewogICAgX2tleXdvcmRzUHJvY2VzcyA9IF9hc3luY1RvR2VuZXJhdG9yJDEoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShrZXl3b3JkcykgewogICAgICB2YXIga2V5d29yZFNlbnNpdGl2aXRpZXMsIGtleXdvcmRMYWJlbHMsIGtleXdvcmRQYXRocywgX2l0ZXJhdG9yLCBfc3RlcCwgX2tleXdvcmRBcmdOb3JtYWxpemVkLCBrZXl3b3JkLCBrZXl3b3JkQXJnTm9ybWFsaXplZCwgY3VzdG9tV3JpdGVQYXRoLCB2YWxpZEVudW1zLCBidWlsdEluTmFtZSwga2V5d29yZEVudW0sIF9pLCBfa2V5d29yZFNlbnNpdGl2aXRpZXMsIHNlbnNpdGl2aXR5LCBzZW5zaXRpdml0aWVzOwogICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7CiAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHsKICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgaWYgKCEoa2V5d29yZHMgPT09IHVuZGVmaW5lZCB8fCBrZXl3b3JkcyA9PT0gbnVsbCkpIHsKICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBrZXl3b3JkcyBhcmd1bWVudCBpcyB1bmRlZmluZWQgLyBlbXB0eScpOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXl3b3JkcykpIHsKICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICBrZXl3b3JkcyA9IFtrZXl3b3Jkc107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSA2OgogICAgICAgICAgICBpZiAoIShrZXl3b3Jkcy5sZW5ndGggPT09IDApKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUga2V5d29yZHMgYXJndW1lbnQgYXJyYXkgaXMgZW1wdHknKTsKICAgICAgICAgIGNhc2UgODoKICAgICAgICAgICAga2V5d29yZFNlbnNpdGl2aXRpZXMgPSBbXTsKICAgICAgICAgICAga2V5d29yZExhYmVscyA9IFtdOwogICAgICAgICAgICBrZXl3b3JkUGF0aHMgPSBbXTsKICAgICAgICAgICAgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkMShrZXl3b3Jkcyk7CiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMjsKICAgICAgICAgICAgX2l0ZXJhdG9yLnMoKTsKICAgICAgICAgIGNhc2UgMTQ6CiAgICAgICAgICAgIGlmICgoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDUwOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGtleXdvcmQgPSBfc3RlcC52YWx1ZTsKICAgICAgICAgICAgLy8gbm9ybWFsaXplIGtleXdvcmRzIHRvIFBvcmN1cGluZUtleXdvcmQKICAgICAgICAgICAga2V5d29yZEFyZ05vcm1hbGl6ZWQgPSB2b2lkIDA7CiAgICAgICAgICAgIGlmICghKHR5cGVvZiBrZXl3b3JkID09PSAnc3RyaW5nJykpIHsKICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjE7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgICAga2V5d29yZEFyZ05vcm1hbGl6ZWQgPSB7CiAgICAgICAgICAgICAgYnVpbHRpbjoga2V5d29yZCwKICAgICAgICAgICAgICBzZW5zaXRpdml0eTogREVGQVVMVF9TRU5TSVRJVklUWQogICAgICAgICAgICB9OwogICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjY7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyMToKICAgICAgICAgICAgaWYgKCEoX3R5cGVvZiQyKGtleXdvcmQpICE9PSAnb2JqZWN0JykpIHsKICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjU7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleXdvcmQgYXJndW1lbnQgdHlwZTogJyArIGtleXdvcmQgKyAnIDogJyArIF90eXBlb2YkMihrZXl3b3JkKSk7CiAgICAgICAgICBjYXNlIDI1OgogICAgICAgICAgICBrZXl3b3JkQXJnTm9ybWFsaXplZCA9IGtleXdvcmQ7CiAgICAgICAgICBjYXNlIDI2OgogICAgICAgICAgICBpZiAoISgnbGFiZWwnIGluIGtleXdvcmRBcmdOb3JtYWxpemVkKSkgewogICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzNDsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICBjdXN0b21Xcml0ZVBhdGggPSBrZXl3b3JkQXJnTm9ybWFsaXplZC5jdXN0b21Xcml0ZVBhdGggPyBrZXl3b3JkQXJnTm9ybWFsaXplZC5jdXN0b21Xcml0ZVBhdGggOiBrZXl3b3JkQXJnTm9ybWFsaXplZC5sYWJlbDsKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDMwOwogICAgICAgICAgICByZXR1cm4gbG9hZE1vZGVsKF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIGtleXdvcmRBcmdOb3JtYWxpemVkKSwge30sIHsKICAgICAgICAgICAgICBjdXN0b21Xcml0ZVBhdGg6IGN1c3RvbVdyaXRlUGF0aAogICAgICAgICAgICB9KSk7CiAgICAgICAgICBjYXNlIDMwOgogICAgICAgICAgICBrZXl3b3JkTGFiZWxzLnB1c2goa2V5d29yZEFyZ05vcm1hbGl6ZWQubGFiZWwpOwogICAgICAgICAgICBrZXl3b3JkUGF0aHMucHVzaChjdXN0b21Xcml0ZVBhdGgpOwogICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDc7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAzNDoKICAgICAgICAgICAgaWYgKCEoJ2J1aWx0aW4nIGluIGtleXdvcmRBcmdOb3JtYWxpemVkKSkgewogICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0NjsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICB2YWxpZEVudW1zID0gT2JqZWN0LnZhbHVlcyhCdWlsdEluS2V5d29yZCk7CiAgICAgICAgICAgIGJ1aWx0SW5OYW1lID0ga2V5d29yZEFyZ05vcm1hbGl6ZWQuYnVpbHRpbjsgLy8gQHRzLWlnbm9yZQogICAgICAgICAgICBrZXl3b3JkRW51bSA9IEJ1aWx0SW5LZXl3b3JkW2J1aWx0SW5OYW1lLnJlcGxhY2UoJyAnLCAnJyldOwogICAgICAgICAgICBpZiAodmFsaWRFbnVtcy5pbmNsdWRlcyhrZXl3b3JkRW51bSkpIHsKICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJLZXl3b3JkICIuY29uY2F0KGJ1aWx0SW5OYW1lLCAiIGRvZXMgbm90IG1hcCB0byBsaXN0IG9mIGJ1aWx0LWluIGtleXdvcmRzICgiKS5jb25jYXQodmFsaWRFbnVtcywgIikiKSk7CiAgICAgICAgICBjYXNlIDQwOgogICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDI7CiAgICAgICAgICAgIHJldHVybiBsb2FkTW9kZWwoewogICAgICAgICAgICAgIGJhc2U2NDogQlVJTFRfSU5fS0VZV09SRF9CWVRFUy5nZXQoa2V5d29yZEVudW0pLAogICAgICAgICAgICAgIGN1c3RvbVdyaXRlUGF0aDoga2V5d29yZEFyZ05vcm1hbGl6ZWQuYnVpbHRpbiwKICAgICAgICAgICAgICBmb3JjZVdyaXRlOiB0cnVlCiAgICAgICAgICAgIH0pOwogICAgICAgICAgY2FzZSA0MjoKICAgICAgICAgICAga2V5d29yZExhYmVscy5wdXNoKGtleXdvcmRBcmdOb3JtYWxpemVkLmJ1aWx0aW4pOwogICAgICAgICAgICBrZXl3b3JkUGF0aHMucHVzaChrZXl3b3JkQXJnTm9ybWFsaXplZC5idWlsdGluKTsKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ3OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgNDY6CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBrZXl3b3JkIGFyZ3VtZW50OiAnICsgSlNPTi5zdHJpbmdpZnkoa2V5d29yZCkpOwogICAgICAgICAgY2FzZSA0NzoKICAgICAgICAgICAga2V5d29yZFNlbnNpdGl2aXRpZXMucHVzaCgoX2tleXdvcmRBcmdOb3JtYWxpemVkID0ga2V5d29yZEFyZ05vcm1hbGl6ZWQuc2Vuc2l0aXZpdHkpICE9PSBudWxsICYmIF9rZXl3b3JkQXJnTm9ybWFsaXplZCAhPT0gdm9pZCAwID8gX2tleXdvcmRBcmdOb3JtYWxpemVkIDogREVGQVVMVF9TRU5TSVRJVklUWSk7CiAgICAgICAgICBjYXNlIDQ4OgogICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTQ7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSA1MDoKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU1OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgNTI6CiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA1MjsKICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFsiY2F0Y2giXSgxMik7CiAgICAgICAgICAgIF9pdGVyYXRvci5lKF9jb250ZXh0LnQwKTsKICAgICAgICAgIGNhc2UgNTU6CiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA1NTsKICAgICAgICAgICAgX2l0ZXJhdG9yLmYoKTsKICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCg1NSk7CiAgICAgICAgICBjYXNlIDU4OgogICAgICAgICAgICBfaSA9IDAsIF9rZXl3b3JkU2Vuc2l0aXZpdGllcyA9IGtleXdvcmRTZW5zaXRpdml0aWVzOwogICAgICAgICAgY2FzZSA1OToKICAgICAgICAgICAgaWYgKCEoX2kgPCBfa2V5d29yZFNlbnNpdGl2aXRpZXMubGVuZ3RoKSkgewogICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2ODsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICBzZW5zaXRpdml0eSA9IF9rZXl3b3JkU2Vuc2l0aXZpdGllc1tfaV07CiAgICAgICAgICAgIGlmICghKHR5cGVvZiBzZW5zaXRpdml0eSAhPT0gJ251bWJlcicpKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDYzOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2Vuc2l0aXZpdHkgaXMgbm90IGEgbnVtYmVyIChpbiByYW5nZSBbMCwxXSk6ICcgKyBzZW5zaXRpdml0eSk7CiAgICAgICAgICBjYXNlIDYzOgogICAgICAgICAgICBpZiAoIShzZW5zaXRpdml0eSA8IDAgfHwgc2Vuc2l0aXZpdHkgPiAxKSkgewogICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2NTsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbnNpdGl2aXR5IGlzIG91dHNpZGUgb2YgcmFuZ2UgWzAsIDFdOiAnICsgc2Vuc2l0aXZpdHkpOwogICAgICAgICAgY2FzZSA2NToKICAgICAgICAgICAgX2krKzsKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU5OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgNjg6CiAgICAgICAgICAgIGlmICghKGtleXdvcmRTZW5zaXRpdml0aWVzLmxlbmd0aCAhPT0ga2V5d29yZExhYmVscy5sZW5ndGgpKSB7CiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDcwOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigia2V5d29yZFNlbnNpdGl2aXRpZXMgKCIuY29uY2F0KGtleXdvcmRTZW5zaXRpdml0aWVzLmxlbmd0aCwgIikgYW5kIGtleXdvcmRMYWJlbHMgKCIpLmNvbmNhdChrZXl3b3JkTGFiZWxzLmxlbmd0aCwgIikgbGVuZ3RoIGRpZmZlcnMiKSk7CiAgICAgICAgICBjYXNlIDcwOgogICAgICAgICAgICBzZW5zaXRpdml0aWVzID0gbmV3IEZsb2F0MzJBcnJheShrZXl3b3JkU2Vuc2l0aXZpdGllcyk7CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoInJldHVybiIsIFtrZXl3b3JkUGF0aHMsIGtleXdvcmRMYWJlbHMsIHNlbnNpdGl2aXRpZXNdKTsKICAgICAgICAgIGNhc2UgNzI6CiAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpOwogICAgICAgIH0KICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1sxMiwgNTIsIDU1LCA1OF1dKTsKICAgIH0pKTsKICAgIHJldHVybiBfa2V5d29yZHNQcm9jZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgfQoKICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsKICAgIGlmIChzZWxmID09PSB2b2lkIDApIHsKICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWQiKTsKICAgIH0KICAgIHJldHVybiBzZWxmOwogIH0KCiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsKICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgewogICAgICBvLl9fcHJvdG9fXyA9IHA7CiAgICAgIHJldHVybiBvOwogICAgfTsKICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7CiAgfQoKICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsKICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gImZ1bmN0aW9uIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7CiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uIik7CiAgICB9CiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsKICAgICAgY29uc3RydWN0b3I6IHsKICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsCiAgICAgICAgd3JpdGFibGU6IHRydWUsCiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlCiAgICAgIH0KICAgIH0pOwogICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCAicHJvdG90eXBlIiwgewogICAgICB3cml0YWJsZTogZmFsc2UKICAgIH0pOwogICAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7CiAgfQoKICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7CiAgICBpZiAoY2FsbCAmJiAoX3R5cGVvZiQyKGNhbGwpID09PSAib2JqZWN0IiB8fCB0eXBlb2YgY2FsbCA9PT0gImZ1bmN0aW9uIikpIHsKICAgICAgcmV0dXJuIGNhbGw7CiAgICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgewogICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZCIpOwogICAgfQogICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7CiAgfQoKICBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgewogICAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7CiAgICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7CiAgICB9OwogICAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsKICB9CgogIGZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7CiAgICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZigiW25hdGl2ZSBjb2RlXSIpICE9PSAtMTsKICB9CgogIGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpIHsKICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gInVuZGVmaW5lZCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7CiAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOwogICAgaWYgKHR5cGVvZiBQcm94eSA9PT0gImZ1bmN0aW9uIikgcmV0dXJuIHRydWU7CiAgICB0cnkgewogICAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7CiAgICAgIHJldHVybiB0cnVlOwogICAgfSBjYXRjaCAoZSkgewogICAgICByZXR1cm4gZmFsc2U7CiAgICB9CiAgfQoKICBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsKICAgIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDEoKSkgewogICAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3QuYmluZCgpOwogICAgfSBlbHNlIHsKICAgICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgewogICAgICAgIHZhciBhID0gW251bGxdOwogICAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTsKICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7CiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7CiAgICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7CiAgICAgICAgcmV0dXJuIGluc3RhbmNlOwogICAgICB9OwogICAgfQogICAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICB9CgogIGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsKICAgIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSAiZnVuY3Rpb24iID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOwogICAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsKICAgICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzczsKICAgICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gImZ1bmN0aW9uIikgewogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uIik7CiAgICAgIH0KICAgICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09ICJ1bmRlZmluZWQiKSB7CiAgICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7CiAgICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gV3JhcHBlcigpIHsKICAgICAgICByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOwogICAgICB9CiAgICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsKICAgICAgICBjb25zdHJ1Y3RvcjogewogICAgICAgICAgdmFsdWU6IFdyYXBwZXIsCiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSwKICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLAogICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlCiAgICAgICAgfQogICAgICB9KTsKICAgICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7CiAgICB9OwogICAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpOwogIH0KCiAgZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH0KICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICJ1bmRlZmluZWQiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSAiZnVuY3Rpb24iKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfQogIHZhciBQb3JjdXBpbmVFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7CiAgICBfaW5oZXJpdHMoUG9yY3VwaW5lRXJyb3IsIF9FcnJvcik7CiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFBvcmN1cGluZUVycm9yKTsKICAgIGZ1bmN0aW9uIFBvcmN1cGluZUVycm9yKHN0YXR1cywgbWVzc2FnZSkgewogICAgICB2YXIgX3RoaXM7CiAgICAgIHZhciBtZXNzYWdlU3RhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdOwogICAgICB2YXIgcHZFcnJvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDsKICAgICAgX2NsYXNzQ2FsbENoZWNrJDEodGhpcywgUG9yY3VwaW5lRXJyb3IpOwogICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFBvcmN1cGluZUVycm9yLmVycm9yVG9TdHJpbmcobWVzc2FnZSwgbWVzc2FnZVN0YWNrLCBwdkVycm9yKSk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAiX3N0YXR1cyIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAiX3Nob3J0TWVzc2FnZSIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAiX21lc3NhZ2VTdGFjayIsIHZvaWQgMCk7CiAgICAgIF90aGlzLl9zdGF0dXMgPSBzdGF0dXM7CiAgICAgIF90aGlzLm5hbWUgPSAnUG9yY3VwaW5lRXJyb3InOwogICAgICBfdGhpcy5fc2hvcnRNZXNzYWdlID0gbWVzc2FnZTsKICAgICAgX3RoaXMuX21lc3NhZ2VTdGFjayA9IG1lc3NhZ2VTdGFjazsKICAgICAgcmV0dXJuIF90aGlzOwogICAgfQogICAgX2NyZWF0ZUNsYXNzJDEoUG9yY3VwaW5lRXJyb3IsIFt7CiAgICAgIGtleTogInN0YXR1cyIsCiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7CiAgICAgIH0KICAgIH0sIHsKICAgICAga2V5OiAic2hvcnRNZXNzYWdlIiwKICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3J0TWVzc2FnZTsKICAgICAgfQogICAgfSwgewogICAgICBrZXk6ICJtZXNzYWdlU3RhY2siLAogICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZVN0YWNrOwogICAgICB9CiAgICB9XSwgW3sKICAgICAga2V5OiAiZXJyb3JUb1N0cmluZyIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvclRvU3RyaW5nKGluaXRpYWwsIG1lc3NhZ2VTdGFjaykgewogICAgICAgIHZhciBwdkVycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsOwogICAgICAgIHZhciBtc2cgPSBpbml0aWFsOwogICAgICAgIGlmIChwdkVycm9yKSB7CiAgICAgICAgICB2YXIgcHZFcnJvck1lc3NhZ2UgPSBwdkVycm9yLmdldEVycm9yU3RyaW5nKCk7CiAgICAgICAgICBpZiAocHZFcnJvck1lc3NhZ2UubGVuZ3RoID4gMCkgewogICAgICAgICAgICBtc2cgKz0gIlxuRGV0YWlsczogIi5jb25jYXQocHZFcnJvck1lc3NhZ2UpOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpZiAobWVzc2FnZVN0YWNrLmxlbmd0aCA+IDApIHsKICAgICAgICAgIG1zZyArPSAiOiAiLmNvbmNhdChtZXNzYWdlU3RhY2sucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHZhbHVlLCBpbmRleCkgewogICAgICAgICAgICByZXR1cm4gYWNjICsgJ1xuICBbJyArIGluZGV4ICsgJ10gJyArIHZhbHVlOwogICAgICAgICAgfSwgJycpKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG1zZzsKICAgICAgfQogICAgfV0pOwogICAgcmV0dXJuIFBvcmN1cGluZUVycm9yOwogIH0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7CiAgdmFyIFBvcmN1cGluZU91dE9mTWVtb3J5RXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Qb3JjdXBpbmVFcnJvcikgewogICAgX2luaGVyaXRzKFBvcmN1cGluZU91dE9mTWVtb3J5RXJyb3IsIF9Qb3JjdXBpbmVFcnJvcik7CiAgICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihQb3JjdXBpbmVPdXRPZk1lbW9yeUVycm9yKTsKICAgIGZ1bmN0aW9uIFBvcmN1cGluZU91dE9mTWVtb3J5RXJyb3IobWVzc2FnZSwgbWVzc2FnZVN0YWNrKSB7CiAgICAgIHZhciBfdGhpczI7CiAgICAgIHZhciBwdkVycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsOwogICAgICBfY2xhc3NDYWxsQ2hlY2skMSh0aGlzLCBQb3JjdXBpbmVPdXRPZk1lbW9yeUVycm9yKTsKICAgICAgX3RoaXMyID0gX3N1cGVyMi5jYWxsKHRoaXMsIFB2U3RhdHVzLk9VVF9PRl9NRU1PUlksIG1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIF90aGlzMi5uYW1lID0gJ1BvcmN1cGluZU91dE9mTWVtb3J5RXJyb3InOwogICAgICByZXR1cm4gX3RoaXMyOwogICAgfQogICAgcmV0dXJuIF9jcmVhdGVDbGFzcyQxKFBvcmN1cGluZU91dE9mTWVtb3J5RXJyb3IpOwogIH0oUG9yY3VwaW5lRXJyb3IpOwogIHZhciBQb3JjdXBpbmVJT0Vycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUG9yY3VwaW5lRXJyb3IyKSB7CiAgICBfaW5oZXJpdHMoUG9yY3VwaW5lSU9FcnJvciwgX1BvcmN1cGluZUVycm9yMik7CiAgICB2YXIgX3N1cGVyMyA9IF9jcmVhdGVTdXBlcihQb3JjdXBpbmVJT0Vycm9yKTsKICAgIGZ1bmN0aW9uIFBvcmN1cGluZUlPRXJyb3IobWVzc2FnZSkgewogICAgICB2YXIgX3RoaXMzOwogICAgICB2YXIgbWVzc2FnZVN0YWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTsKICAgICAgdmFyIHB2RXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7CiAgICAgIF9jbGFzc0NhbGxDaGVjayQxKHRoaXMsIFBvcmN1cGluZUlPRXJyb3IpOwogICAgICBfdGhpczMgPSBfc3VwZXIzLmNhbGwodGhpcywgUHZTdGF0dXMuSU9fRVJST1IsIG1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIF90aGlzMy5uYW1lID0gJ1BvcmN1cGluZUlPRXJyb3InOwogICAgICByZXR1cm4gX3RoaXMzOwogICAgfQogICAgcmV0dXJuIF9jcmVhdGVDbGFzcyQxKFBvcmN1cGluZUlPRXJyb3IpOwogIH0oUG9yY3VwaW5lRXJyb3IpOwogIHZhciBQb3JjdXBpbmVJbnZhbGlkQXJndW1lbnRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BvcmN1cGluZUVycm9yMykgewogICAgX2luaGVyaXRzKFBvcmN1cGluZUludmFsaWRBcmd1bWVudEVycm9yLCBfUG9yY3VwaW5lRXJyb3IzKTsKICAgIHZhciBfc3VwZXI0ID0gX2NyZWF0ZVN1cGVyKFBvcmN1cGluZUludmFsaWRBcmd1bWVudEVycm9yKTsKICAgIGZ1bmN0aW9uIFBvcmN1cGluZUludmFsaWRBcmd1bWVudEVycm9yKG1lc3NhZ2UpIHsKICAgICAgdmFyIF90aGlzNDsKICAgICAgdmFyIG1lc3NhZ2VTdGFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107CiAgICAgIHZhciBwdkVycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsOwogICAgICBfY2xhc3NDYWxsQ2hlY2skMSh0aGlzLCBQb3JjdXBpbmVJbnZhbGlkQXJndW1lbnRFcnJvcik7CiAgICAgIF90aGlzNCA9IF9zdXBlcjQuY2FsbCh0aGlzLCBQdlN0YXR1cy5JTlZBTElEX0FSR1VNRU5ULCBtZXNzYWdlLCBtZXNzYWdlU3RhY2ssIHB2RXJyb3IpOwogICAgICBfdGhpczQubmFtZSA9ICdQb3JjdXBpbmVJbnZhbGlkQXJndW1lbnRFcnJvcic7CiAgICAgIHJldHVybiBfdGhpczQ7CiAgICB9CiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzJDEoUG9yY3VwaW5lSW52YWxpZEFyZ3VtZW50RXJyb3IpOwogIH0oUG9yY3VwaW5lRXJyb3IpOwogIHZhciBQb3JjdXBpbmVTdG9wSXRlcmF0aW9uRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Qb3JjdXBpbmVFcnJvcjQpIHsKICAgIF9pbmhlcml0cyhQb3JjdXBpbmVTdG9wSXRlcmF0aW9uRXJyb3IsIF9Qb3JjdXBpbmVFcnJvcjQpOwogICAgdmFyIF9zdXBlcjUgPSBfY3JlYXRlU3VwZXIoUG9yY3VwaW5lU3RvcEl0ZXJhdGlvbkVycm9yKTsKICAgIGZ1bmN0aW9uIFBvcmN1cGluZVN0b3BJdGVyYXRpb25FcnJvcihtZXNzYWdlKSB7CiAgICAgIHZhciBfdGhpczU7CiAgICAgIHZhciBtZXNzYWdlU3RhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdOwogICAgICB2YXIgcHZFcnJvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDsKICAgICAgX2NsYXNzQ2FsbENoZWNrJDEodGhpcywgUG9yY3VwaW5lU3RvcEl0ZXJhdGlvbkVycm9yKTsKICAgICAgX3RoaXM1ID0gX3N1cGVyNS5jYWxsKHRoaXMsIFB2U3RhdHVzLlNUT1BfSVRFUkFUSU9OLCBtZXNzYWdlLCBtZXNzYWdlU3RhY2ssIHB2RXJyb3IpOwogICAgICBfdGhpczUubmFtZSA9ICdQb3JjdXBpbmVTdG9wSXRlcmF0aW9uRXJyb3InOwogICAgICByZXR1cm4gX3RoaXM1OwogICAgfQogICAgcmV0dXJuIF9jcmVhdGVDbGFzcyQxKFBvcmN1cGluZVN0b3BJdGVyYXRpb25FcnJvcik7CiAgfShQb3JjdXBpbmVFcnJvcik7CiAgdmFyIFBvcmN1cGluZUtleUVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUG9yY3VwaW5lRXJyb3I1KSB7CiAgICBfaW5oZXJpdHMoUG9yY3VwaW5lS2V5RXJyb3IsIF9Qb3JjdXBpbmVFcnJvcjUpOwogICAgdmFyIF9zdXBlcjYgPSBfY3JlYXRlU3VwZXIoUG9yY3VwaW5lS2V5RXJyb3IpOwogICAgZnVuY3Rpb24gUG9yY3VwaW5lS2V5RXJyb3IobWVzc2FnZSkgewogICAgICB2YXIgX3RoaXM2OwogICAgICB2YXIgbWVzc2FnZVN0YWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTsKICAgICAgdmFyIHB2RXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7CiAgICAgIF9jbGFzc0NhbGxDaGVjayQxKHRoaXMsIFBvcmN1cGluZUtleUVycm9yKTsKICAgICAgX3RoaXM2ID0gX3N1cGVyNi5jYWxsKHRoaXMsIFB2U3RhdHVzLktFWV9FUlJPUiwgbWVzc2FnZSwgbWVzc2FnZVN0YWNrLCBwdkVycm9yKTsKICAgICAgX3RoaXM2Lm5hbWUgPSAnUG9yY3VwaW5lS2V5RXJyb3InOwogICAgICByZXR1cm4gX3RoaXM2OwogICAgfQogICAgcmV0dXJuIF9jcmVhdGVDbGFzcyQxKFBvcmN1cGluZUtleUVycm9yKTsKICB9KFBvcmN1cGluZUVycm9yKTsKICB2YXIgUG9yY3VwaW5lSW52YWxpZFN0YXRlRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Qb3JjdXBpbmVFcnJvcjYpIHsKICAgIF9pbmhlcml0cyhQb3JjdXBpbmVJbnZhbGlkU3RhdGVFcnJvciwgX1BvcmN1cGluZUVycm9yNik7CiAgICB2YXIgX3N1cGVyNyA9IF9jcmVhdGVTdXBlcihQb3JjdXBpbmVJbnZhbGlkU3RhdGVFcnJvcik7CiAgICBmdW5jdGlvbiBQb3JjdXBpbmVJbnZhbGlkU3RhdGVFcnJvcihtZXNzYWdlKSB7CiAgICAgIHZhciBfdGhpczc7CiAgICAgIHZhciBtZXNzYWdlU3RhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdOwogICAgICB2YXIgcHZFcnJvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDsKICAgICAgX2NsYXNzQ2FsbENoZWNrJDEodGhpcywgUG9yY3VwaW5lSW52YWxpZFN0YXRlRXJyb3IpOwogICAgICBfdGhpczcgPSBfc3VwZXI3LmNhbGwodGhpcywgUHZTdGF0dXMuSU5WQUxJRF9TVEFURSwgbWVzc2FnZSwgbWVzc2FnZVN0YWNrLCBwdkVycm9yKTsKICAgICAgX3RoaXM3Lm5hbWUgPSAnUG9yY3VwaW5lSW52YWxpZFN0YXRlRXJyb3InOwogICAgICByZXR1cm4gX3RoaXM3OwogICAgfQogICAgcmV0dXJuIF9jcmVhdGVDbGFzcyQxKFBvcmN1cGluZUludmFsaWRTdGF0ZUVycm9yKTsKICB9KFBvcmN1cGluZUVycm9yKTsKICB2YXIgUG9yY3VwaW5lUnVudGltZUVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUG9yY3VwaW5lRXJyb3I3KSB7CiAgICBfaW5oZXJpdHMoUG9yY3VwaW5lUnVudGltZUVycm9yLCBfUG9yY3VwaW5lRXJyb3I3KTsKICAgIHZhciBfc3VwZXI4ID0gX2NyZWF0ZVN1cGVyKFBvcmN1cGluZVJ1bnRpbWVFcnJvcik7CiAgICBmdW5jdGlvbiBQb3JjdXBpbmVSdW50aW1lRXJyb3IobWVzc2FnZSkgewogICAgICB2YXIgX3RoaXM4OwogICAgICB2YXIgbWVzc2FnZVN0YWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTsKICAgICAgdmFyIHB2RXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7CiAgICAgIF9jbGFzc0NhbGxDaGVjayQxKHRoaXMsIFBvcmN1cGluZVJ1bnRpbWVFcnJvcik7CiAgICAgIF90aGlzOCA9IF9zdXBlcjguY2FsbCh0aGlzLCBQdlN0YXR1cy5SVU5USU1FX0VSUk9SLCBtZXNzYWdlLCBtZXNzYWdlU3RhY2ssIHB2RXJyb3IpOwogICAgICBfdGhpczgubmFtZSA9ICdQb3JjdXBpbmVSdW50aW1lRXJyb3InOwogICAgICByZXR1cm4gX3RoaXM4OwogICAgfQogICAgcmV0dXJuIF9jcmVhdGVDbGFzcyQxKFBvcmN1cGluZVJ1bnRpbWVFcnJvcik7CiAgfShQb3JjdXBpbmVFcnJvcik7CiAgdmFyIFBvcmN1cGluZUFjdGl2YXRpb25FcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BvcmN1cGluZUVycm9yOCkgewogICAgX2luaGVyaXRzKFBvcmN1cGluZUFjdGl2YXRpb25FcnJvciwgX1BvcmN1cGluZUVycm9yOCk7CiAgICB2YXIgX3N1cGVyOSA9IF9jcmVhdGVTdXBlcihQb3JjdXBpbmVBY3RpdmF0aW9uRXJyb3IpOwogICAgZnVuY3Rpb24gUG9yY3VwaW5lQWN0aXZhdGlvbkVycm9yKG1lc3NhZ2UpIHsKICAgICAgdmFyIF90aGlzOTsKICAgICAgdmFyIG1lc3NhZ2VTdGFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107CiAgICAgIHZhciBwdkVycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsOwogICAgICBfY2xhc3NDYWxsQ2hlY2skMSh0aGlzLCBQb3JjdXBpbmVBY3RpdmF0aW9uRXJyb3IpOwogICAgICBfdGhpczkgPSBfc3VwZXI5LmNhbGwodGhpcywgUHZTdGF0dXMuQUNUSVZBVElPTl9FUlJPUiwgbWVzc2FnZSwgbWVzc2FnZVN0YWNrLCBwdkVycm9yKTsKICAgICAgX3RoaXM5Lm5hbWUgPSAnUG9yY3VwaW5lQWN0aXZhdGlvbkVycm9yJzsKICAgICAgcmV0dXJuIF90aGlzOTsKICAgIH0KICAgIHJldHVybiBfY3JlYXRlQ2xhc3MkMShQb3JjdXBpbmVBY3RpdmF0aW9uRXJyb3IpOwogIH0oUG9yY3VwaW5lRXJyb3IpOwogIHZhciBQb3JjdXBpbmVBY3RpdmF0aW9uTGltaXRSZWFjaGVkRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Qb3JjdXBpbmVFcnJvcjkpIHsKICAgIF9pbmhlcml0cyhQb3JjdXBpbmVBY3RpdmF0aW9uTGltaXRSZWFjaGVkRXJyb3IsIF9Qb3JjdXBpbmVFcnJvcjkpOwogICAgdmFyIF9zdXBlcjEwID0gX2NyZWF0ZVN1cGVyKFBvcmN1cGluZUFjdGl2YXRpb25MaW1pdFJlYWNoZWRFcnJvcik7CiAgICBmdW5jdGlvbiBQb3JjdXBpbmVBY3RpdmF0aW9uTGltaXRSZWFjaGVkRXJyb3IobWVzc2FnZSkgewogICAgICB2YXIgX3RoaXMxMDsKICAgICAgdmFyIG1lc3NhZ2VTdGFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107CiAgICAgIHZhciBwdkVycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsOwogICAgICBfY2xhc3NDYWxsQ2hlY2skMSh0aGlzLCBQb3JjdXBpbmVBY3RpdmF0aW9uTGltaXRSZWFjaGVkRXJyb3IpOwogICAgICBfdGhpczEwID0gX3N1cGVyMTAuY2FsbCh0aGlzLCBQdlN0YXR1cy5BQ1RJVkFUSU9OX0xJTUlUX1JFQUNIRUQsIG1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIF90aGlzMTAubmFtZSA9ICdQb3JjdXBpbmVBY3RpdmF0aW9uTGltaXRSZWFjaGVkRXJyb3InOwogICAgICByZXR1cm4gX3RoaXMxMDsKICAgIH0KICAgIHJldHVybiBfY3JlYXRlQ2xhc3MkMShQb3JjdXBpbmVBY3RpdmF0aW9uTGltaXRSZWFjaGVkRXJyb3IpOwogIH0oUG9yY3VwaW5lRXJyb3IpOwogIHZhciBQb3JjdXBpbmVBY3RpdmF0aW9uVGhyb3R0bGVkRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Qb3JjdXBpbmVFcnJvcjEwKSB7CiAgICBfaW5oZXJpdHMoUG9yY3VwaW5lQWN0aXZhdGlvblRocm90dGxlZEVycm9yLCBfUG9yY3VwaW5lRXJyb3IxMCk7CiAgICB2YXIgX3N1cGVyMTEgPSBfY3JlYXRlU3VwZXIoUG9yY3VwaW5lQWN0aXZhdGlvblRocm90dGxlZEVycm9yKTsKICAgIGZ1bmN0aW9uIFBvcmN1cGluZUFjdGl2YXRpb25UaHJvdHRsZWRFcnJvcihtZXNzYWdlKSB7CiAgICAgIHZhciBfdGhpczExOwogICAgICB2YXIgbWVzc2FnZVN0YWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTsKICAgICAgdmFyIHB2RXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7CiAgICAgIF9jbGFzc0NhbGxDaGVjayQxKHRoaXMsIFBvcmN1cGluZUFjdGl2YXRpb25UaHJvdHRsZWRFcnJvcik7CiAgICAgIF90aGlzMTEgPSBfc3VwZXIxMS5jYWxsKHRoaXMsIFB2U3RhdHVzLkFDVElWQVRJT05fVEhST1RUTEVELCBtZXNzYWdlLCBtZXNzYWdlU3RhY2ssIHB2RXJyb3IpOwogICAgICBfdGhpczExLm5hbWUgPSAnUG9yY3VwaW5lQWN0aXZhdGlvblRocm90dGxlZEVycm9yJzsKICAgICAgcmV0dXJuIF90aGlzMTE7CiAgICB9CiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzJDEoUG9yY3VwaW5lQWN0aXZhdGlvblRocm90dGxlZEVycm9yKTsKICB9KFBvcmN1cGluZUVycm9yKTsKICB2YXIgUG9yY3VwaW5lQWN0aXZhdGlvblJlZnVzZWRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BvcmN1cGluZUVycm9yMTEpIHsKICAgIF9pbmhlcml0cyhQb3JjdXBpbmVBY3RpdmF0aW9uUmVmdXNlZEVycm9yLCBfUG9yY3VwaW5lRXJyb3IxMSk7CiAgICB2YXIgX3N1cGVyMTIgPSBfY3JlYXRlU3VwZXIoUG9yY3VwaW5lQWN0aXZhdGlvblJlZnVzZWRFcnJvcik7CiAgICBmdW5jdGlvbiBQb3JjdXBpbmVBY3RpdmF0aW9uUmVmdXNlZEVycm9yKG1lc3NhZ2UpIHsKICAgICAgdmFyIF90aGlzMTI7CiAgICAgIHZhciBtZXNzYWdlU3RhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdOwogICAgICB2YXIgcHZFcnJvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDsKICAgICAgX2NsYXNzQ2FsbENoZWNrJDEodGhpcywgUG9yY3VwaW5lQWN0aXZhdGlvblJlZnVzZWRFcnJvcik7CiAgICAgIF90aGlzMTIgPSBfc3VwZXIxMi5jYWxsKHRoaXMsIFB2U3RhdHVzLkFDVElWQVRJT05fUkVGVVNFRCwgbWVzc2FnZSwgbWVzc2FnZVN0YWNrLCBwdkVycm9yKTsKICAgICAgX3RoaXMxMi5uYW1lID0gJ1BvcmN1cGluZUFjdGl2YXRpb25SZWZ1c2VkRXJyb3InOwogICAgICByZXR1cm4gX3RoaXMxMjsKICAgIH0KICAgIHJldHVybiBfY3JlYXRlQ2xhc3MkMShQb3JjdXBpbmVBY3RpdmF0aW9uUmVmdXNlZEVycm9yKTsKICB9KFBvcmN1cGluZUVycm9yKTsKICBmdW5jdGlvbiBwdlN0YXR1c1RvRXhjZXB0aW9uKHB2U3RhdHVzLCBlcnJvck1lc3NhZ2UpIHsKICAgIHZhciBtZXNzYWdlU3RhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdOwogICAgdmFyIHB2RXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG51bGw7CiAgICBzd2l0Y2ggKHB2U3RhdHVzKSB7CiAgICAgIGNhc2UgUHZTdGF0dXMuT1VUX09GX01FTU9SWToKICAgICAgICByZXR1cm4gbmV3IFBvcmN1cGluZU91dE9mTWVtb3J5RXJyb3IoZXJyb3JNZXNzYWdlLCBtZXNzYWdlU3RhY2ssIHB2RXJyb3IpOwogICAgICBjYXNlIFB2U3RhdHVzLklPX0VSUk9SOgogICAgICAgIHJldHVybiBuZXcgUG9yY3VwaW5lSU9FcnJvcihlcnJvck1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIGNhc2UgUHZTdGF0dXMuSU5WQUxJRF9BUkdVTUVOVDoKICAgICAgICByZXR1cm4gbmV3IFBvcmN1cGluZUludmFsaWRBcmd1bWVudEVycm9yKGVycm9yTWVzc2FnZSwgbWVzc2FnZVN0YWNrLCBwdkVycm9yKTsKICAgICAgY2FzZSBQdlN0YXR1cy5TVE9QX0lURVJBVElPTjoKICAgICAgICByZXR1cm4gbmV3IFBvcmN1cGluZVN0b3BJdGVyYXRpb25FcnJvcihlcnJvck1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIGNhc2UgUHZTdGF0dXMuS0VZX0VSUk9SOgogICAgICAgIHJldHVybiBuZXcgUG9yY3VwaW5lS2V5RXJyb3IoZXJyb3JNZXNzYWdlLCBtZXNzYWdlU3RhY2ssIHB2RXJyb3IpOwogICAgICBjYXNlIFB2U3RhdHVzLklOVkFMSURfU1RBVEU6CiAgICAgICAgcmV0dXJuIG5ldyBQb3JjdXBpbmVJbnZhbGlkU3RhdGVFcnJvcihlcnJvck1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIGNhc2UgUHZTdGF0dXMuUlVOVElNRV9FUlJPUjoKICAgICAgICByZXR1cm4gbmV3IFBvcmN1cGluZVJ1bnRpbWVFcnJvcihlcnJvck1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIGNhc2UgUHZTdGF0dXMuQUNUSVZBVElPTl9FUlJPUjoKICAgICAgICByZXR1cm4gbmV3IFBvcmN1cGluZUFjdGl2YXRpb25FcnJvcihlcnJvck1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIGNhc2UgUHZTdGF0dXMuQUNUSVZBVElPTl9MSU1JVF9SRUFDSEVEOgogICAgICAgIHJldHVybiBuZXcgUG9yY3VwaW5lQWN0aXZhdGlvbkxpbWl0UmVhY2hlZEVycm9yKGVycm9yTWVzc2FnZSwgbWVzc2FnZVN0YWNrLCBwdkVycm9yKTsKICAgICAgY2FzZSBQdlN0YXR1cy5BQ1RJVkFUSU9OX1RIUk9UVExFRDoKICAgICAgICByZXR1cm4gbmV3IFBvcmN1cGluZUFjdGl2YXRpb25UaHJvdHRsZWRFcnJvcihlcnJvck1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIGNhc2UgUHZTdGF0dXMuQUNUSVZBVElPTl9SRUZVU0VEOgogICAgICAgIHJldHVybiBuZXcgUG9yY3VwaW5lQWN0aXZhdGlvblJlZnVzZWRFcnJvcihlcnJvck1lc3NhZ2UsIG1lc3NhZ2VTdGFjaywgcHZFcnJvcik7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUKICAgICAgICBjb25zb2xlLndhcm4oIlVubWFwcGVkIGVycm9yIGNvZGU6ICIuY29uY2F0KHB2U3RhdHVzKSk7CiAgICAgICAgcmV0dXJuIG5ldyBQb3JjdXBpbmVFcnJvcihwdlN0YXR1cywgZXJyb3JNZXNzYWdlKTsKICAgIH0KICB9CgogIGZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09ICJ1bmRlZmluZWQiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvWyJAQGl0ZXJhdG9yIl07IGlmICghaXQpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gIm51bWJlciIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IGl0LmNhbGwobyk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbInJldHVybiJdICE9IG51bGwpIGl0WyJyZXR1cm4iXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9CiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSAic3RyaW5nIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09ICJPYmplY3QiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSAiTWFwIiB8fCBuID09PSAiU2V0IikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSAiQXJndW1lbnRzIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH0KICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOyByZXR1cm4gYXJyMjsgfQogIGZ1bmN0aW9uIG93bktleXMkMShlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9CiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMkMShPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eSQxKGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyQxKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9CiAgdmFyIFBvcmN1cGluZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7CiAgICBmdW5jdGlvbiBQb3JjdXBpbmUoaGFuZGxlV2FzbSwga2V5d29yZExhYmVscywga2V5d29yZERldGVjdGlvbkNhbGxiYWNrLCBwcm9jZXNzRXJyb3JDYWxsYmFjaykgewogICAgICBfY2xhc3NDYWxsQ2hlY2skMSh0aGlzLCBQb3JjdXBpbmUpOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX3B2UG9yY3VwaW5lRGVsZXRlIiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5JDEodGhpcywgIl9wdlBvcmN1cGluZVByb2Nlc3MiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX3B2R2V0RXJyb3JTdGFjayIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfcHZGcmVlRXJyb3JTdGFjayIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfd2FzbU1lbW9yeSIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfcHZGcmVlIiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5JDEodGhpcywgIl9wcm9jZXNzTXV0ZXgiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX29iamVjdEFkZHJlc3MiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX2lucHV0QnVmZmVyQWRkcmVzcyIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfa2V5d29yZEluZGV4QWRkcmVzcyIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfa2V5d29yZExhYmVscyIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfbWVzc2FnZVN0YWNrQWRkcmVzc0FkZHJlc3NBZGRyZXNzIiwgdm9pZCAwKTsKICAgICAgX2RlZmluZVByb3BlcnR5JDEodGhpcywgIl9tZXNzYWdlU3RhY2tEZXB0aEFkZHJlc3MiLCB2b2lkIDApOwogICAgICBfZGVmaW5lUHJvcGVydHkkMSh0aGlzLCAiX2tleXdvcmREZXRlY3Rpb25DYWxsYmFjayIsIHZvaWQgMCk7CiAgICAgIF9kZWZpbmVQcm9wZXJ0eSQxKHRoaXMsICJfcHJvY2Vzc0Vycm9yQ2FsbGJhY2siLCB2b2lkIDApOwogICAgICBQb3JjdXBpbmUuX2ZyYW1lTGVuZ3RoID0gaGFuZGxlV2FzbS5mcmFtZUxlbmd0aDsKICAgICAgUG9yY3VwaW5lLl9zYW1wbGVSYXRlID0gaGFuZGxlV2FzbS5zYW1wbGVSYXRlOwogICAgICBQb3JjdXBpbmUuX3ZlcnNpb24gPSBoYW5kbGVXYXNtLnZlcnNpb247CiAgICAgIHRoaXMuX3B2UG9yY3VwaW5lRGVsZXRlID0gaGFuZGxlV2FzbS5wdlBvcmN1cGluZURlbGV0ZTsKICAgICAgdGhpcy5fcHZQb3JjdXBpbmVQcm9jZXNzID0gaGFuZGxlV2FzbS5wdlBvcmN1cGluZVByb2Nlc3M7CiAgICAgIHRoaXMuX3B2R2V0RXJyb3JTdGFjayA9IGhhbmRsZVdhc20ucHZHZXRFcnJvclN0YWNrOwogICAgICB0aGlzLl9wdkZyZWVFcnJvclN0YWNrID0gaGFuZGxlV2FzbS5wdkZyZWVFcnJvclN0YWNrOwogICAgICB0aGlzLl93YXNtTWVtb3J5ID0gaGFuZGxlV2FzbS5tZW1vcnk7CiAgICAgIHRoaXMuX3B2RnJlZSA9IGhhbmRsZVdhc20ucHZGcmVlOwogICAgICB0aGlzLl9vYmplY3RBZGRyZXNzID0gaGFuZGxlV2FzbS5vYmplY3RBZGRyZXNzOwogICAgICB0aGlzLl9pbnB1dEJ1ZmZlckFkZHJlc3MgPSBoYW5kbGVXYXNtLmlucHV0QnVmZmVyQWRkcmVzczsKICAgICAgdGhpcy5fa2V5d29yZEluZGV4QWRkcmVzcyA9IGhhbmRsZVdhc20ua2V5d29yZEluZGV4QWRkcmVzczsKICAgICAgdGhpcy5fbWVzc2FnZVN0YWNrQWRkcmVzc0FkZHJlc3NBZGRyZXNzID0gaGFuZGxlV2FzbS5tZXNzYWdlU3RhY2tBZGRyZXNzQWRkcmVzc0FkZHJlc3M7CiAgICAgIHRoaXMuX21lc3NhZ2VTdGFja0RlcHRoQWRkcmVzcyA9IGhhbmRsZVdhc20ubWVzc2FnZVN0YWNrRGVwdGhBZGRyZXNzOwogICAgICB0aGlzLl9rZXl3b3JkTGFiZWxzID0gbmV3IE1hcCgpOwogICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXdvcmRMYWJlbHMubGVuZ3RoOyBpKyspIHsKICAgICAgICB0aGlzLl9rZXl3b3JkTGFiZWxzLnNldChpLCBrZXl3b3JkTGFiZWxzW2ldKTsKICAgICAgfQogICAgICB0aGlzLl9wcm9jZXNzTXV0ZXggPSBuZXcgTXV0ZXgoKTsKICAgICAgdGhpcy5fa2V5d29yZERldGVjdGlvbkNhbGxiYWNrID0ga2V5d29yZERldGVjdGlvbkNhbGxiYWNrOwogICAgICB0aGlzLl9wcm9jZXNzRXJyb3JDYWxsYmFjayA9IHByb2Nlc3NFcnJvckNhbGxiYWNrOwogICAgfQogICAgLyoqDQogICAgICogR2V0IFBvcmN1cGluZSBlbmdpbmUgdmVyc2lvbi4NCiAgICAgKi8KICAgIF9jcmVhdGVDbGFzcyQxKFBvcmN1cGluZSwgW3sKICAgICAga2V5OiAidmVyc2lvbiIsCiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgIHJldHVybiBQb3JjdXBpbmUuX3ZlcnNpb247CiAgICAgIH0KICAgICAgLyoqDQogICAgICAgKiBHZXQgZnJhbWUgbGVuZ3RoLg0KICAgICAgICovCiAgICB9LCB7CiAgICAgIGtleTogImZyYW1lTGVuZ3RoIiwKICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7CiAgICAgICAgcmV0dXJuIFBvcmN1cGluZS5fZnJhbWVMZW5ndGg7CiAgICAgIH0KICAgICAgLyoqDQogICAgICAgKiBHZXQgc2FtcGxlIHJhdGUuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAic2FtcGxlUmF0ZSIsCiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgIHJldHVybiBQb3JjdXBpbmUuX3NhbXBsZVJhdGU7CiAgICAgIH0KICAgICAgLyoqDQogICAgICAgKiBHZXQga2V5d29yZCBsYWJlbHMuDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAia2V5d29yZExhYmVscyIsCiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkgewogICAgICAgIHJldHVybiB0aGlzLl9rZXl3b3JkTGFiZWxzOwogICAgICB9CiAgICAgIC8qKg0KICAgICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgUG9yY3VwaW5lIHdha2Ugd29yZCBlbmdpbmUgdXNpbmcgZWl0aGVyDQogICAgICAgKiBhICcucHYnIGZpbGUgaW4gcHVibGljIGRpcmVjdG9yeSBvciBhIGJhc2U2NCdkIHN0cmluZy4NCiAgICAgICAqDQogICAgICAgKiBAcGFyYW0gYWNjZXNzS2V5IEFjY2Vzc0tleSBnZW5lcmF0ZWQgYnkgUGljb3ZvaWNlIENvbnNvbGUuDQogICAgICAgKiBAcGFyYW0ga2V5d29yZHMgLSBCdWlsdC1pbiBvciBvYmplY3QgY29udGFpbmluZyBhIGJhc2U2NA0KICAgICAgICogcmVwcmVzZW50YXRpb24gb2Ygb3IgcGF0aCB0byBwdWJsaWMgYmluYXJ5IG9mIGEgUG9yY3VwaW5lIGtleXdvcmQgbW9kZWwgYW5kIHRoZWlyIHNlbnNpdGl2aXRpZXMuDQogICAgICAgKiBDYW4gYmUgcHJvdmlkZWQgYXMgYW4gYXJyYXkgb3IgYSBzaW5nbGUga2V5d29yZC4NCiAgICAgICAqIEBwYXJhbSBrZXl3b3JkRGV0ZWN0aW9uQ2FsbGJhY2sgVXNlci1kZWZpbmVkIGNhbGxiYWNrIHRvIHJ1biBhZnRlciBhIGtleXdvcmQgaXMgZGV0ZWN0ZWQuDQogICAgICAgKiBAcGFyYW0gbW9kZWwgb2JqZWN0IGNvbnRhaW5pbmcgYSBiYXNlNjQgc3RyaW5nDQogICAgICAgKiByZXByZXNlbnRhdGlvbiBvZiBvciBwYXRoIHRvIHB1YmxpYyBiaW5hcnkgb2YgYSBQb3JjdXBpbmUgcGFyYW1ldGVyIG1vZGVsIHVzZWQgdG8gaW5pdGlhbGl6ZSBQb3JjdXBpbmUuDQogICAgICAgKiBAcGFyYW0gbW9kZWwuYmFzZTY0IFRoZSBtb2RlbCBpbiBiYXNlNjQgc3RyaW5nIHRvIGluaXRpYWxpemUgTGVvcGFyZC4NCiAgICAgICAqIEBwYXJhbSBtb2RlbC5wdWJsaWNQYXRoIFRoZSBtb2RlbCBwYXRoIHJlbGF0aXZlIHRvIHRoZSBwdWJsaWMgZGlyZWN0b3J5Lg0KICAgICAgICogQHBhcmFtIG1vZGVsLmN1c3RvbVdyaXRlUGF0aCBDdXN0b20gcGF0aCB0byBzYXZlIHRoZSBtb2RlbCBpbiBzdG9yYWdlLg0KICAgICAgICogU2V0IHRvIGEgZGlmZmVyZW50IG5hbWUgdG8gdXNlIG11bHRpcGxlIG1vZGVscyBhY3Jvc3MgYFBvcmN1cGluZWAgaW5zdGFuY2VzLg0KICAgICAgICogQHBhcmFtIG1vZGVsLmZvcmNlV3JpdGUgRmxhZyB0byBvdmVyd3JpdGUgdGhlIG1vZGVsIGluIHN0b3JhZ2UgZXZlbiBpZiBpdCBleGlzdHMuDQogICAgICAgKiBAcGFyYW0gbW9kZWwudmVyc2lvbiBMZW9wYXJkIG1vZGVsIHZlcnNpb24uIFNldCB0byBhIGhpZ2hlciBudW1iZXIgdG8gdXBkYXRlIHRoZSBtb2RlbCBmaWxlLg0KICAgICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgY29uZmlndXJhdGlvbiBhcmd1bWVudHMsIHNlZSBQb3JjdXBpbmVPcHRpb25zIGZvciBkZXRhaWxzLg0KICAgICAgICoNCiAgICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIHRoZSBQb3JjdXBpbmUgZW5naW5lLg0KICAgICAgICovCiAgICB9LCB7CiAgICAgIGtleTogInByb2Nlc3MiLAogICAgICB2YWx1ZToKICAgICAgLyoqDQogICAgICAgKiBQcm9jZXNzZXMgYSBmcmFtZSBvZiBhdWRpby4gVGhlIHJlcXVpcmVkIHNhbXBsZSByYXRlIGNhbiBiZSByZXRyaWV2ZWQgZnJvbSAnLnNhbXBsZVJhdGUnIGFuZCB0aGUgbGVuZ3RoDQogICAgICAgKiBvZiBmcmFtZSAobnVtYmVyIG9mIGF1ZGlvIHNhbXBsZXMgcGVyIGZyYW1lKSBjYW4gYmUgcmV0cmlldmVkIGZyb20gJy5mcmFtZUxlbmd0aCcgVGhlIGF1ZGlvIG5lZWRzIHRvIGJlDQogICAgICAgKiAxNi1iaXQgbGluZWFybHktZW5jb2RlZC4gRnVydGhlcm1vcmUsIHRoZSBlbmdpbmUgb3BlcmF0ZXMgb24gc2luZ2xlLWNoYW5uZWwgYXVkaW8uDQogICAgICAgKg0KICAgICAgICogQHBhcmFtIHBjbSBBIGZyYW1lIG9mIGF1ZGlvIHdpdGggcHJvcGVydGllcyBkZXNjcmliZWQgYWJvdmUuDQogICAgICAgKi8KICAgICAgZnVuY3Rpb24gKCkgewogICAgICAgIHZhciBfcHJvY2VzcyA9IF9hc3luY1RvR2VuZXJhdG9yJDEoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIocGNtKSB7CiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzOwogICAgICAgICAgdmFyIGVycm9yOwogICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7CiAgICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHsKICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICBpZiAoIShwY20gaW5zdGFuY2VvZiBJbnQxNkFycmF5KSkgewogICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBQb3JjdXBpbmVJbnZhbGlkQXJndW1lbnRFcnJvcigiVGhlIGFyZ3VtZW50ICdwY20nIG11c3QgYmUgcHJvdmlkZWQgYXMgYW4gSW50MTZBcnJheSIpOwogICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcHJvY2Vzc0Vycm9yQ2FsbGJhY2spIHsKICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzRXJyb3JDYWxsYmFjayhlcnJvcik7CiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUKICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc011dGV4LnJ1bkV4Y2x1c2l2ZSggLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yJDEoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHsKICAgICAgICAgICAgICAgICAgdmFyIG1lbW9yeUJ1ZmZlciwgc3RhdHVzLCBtZW1vcnlCdWZmZXJVaW50OCwgbWVtb3J5QnVmZmVyVmlldywgbWVzc2FnZVN0YWNrLCBfZXJyb3IsIGtleXdvcmRJbmRleCwgX3RoaXMkX2tleXdvcmRMYWJlbHMkOwogICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7CiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHsKICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX3RoaXMuX3dhc21NZW1vcnkgPT09IHVuZGVmaW5lZCkpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjsKICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUG9yY3VwaW5lSW52YWxpZFN0YXRlRXJyb3IoJ0F0dGVtcHRlZCB0byBjYWxsIFBvcmN1cGluZSBwcm9jZXNzIGFmdGVyIHJlbGVhc2UuJyk7CiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6CiAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlciA9IG5ldyBJbnQxNkFycmF5KF90aGlzLl93YXNtTWVtb3J5LmJ1ZmZlcik7CiAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlci5zZXQocGNtLCBfdGhpcy5faW5wdXRCdWZmZXJBZGRyZXNzIC8gSW50MTZBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2OwogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX3B2UG9yY3VwaW5lUHJvY2VzcyhfdGhpcy5fb2JqZWN0QWRkcmVzcywgX3RoaXMuX2lucHV0QnVmZmVyQWRkcmVzcywgX3RoaXMuX2tleXdvcmRJbmRleEFkZHJlc3MpOwogICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OgogICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBfY29udGV4dC5zZW50OwogICAgICAgICAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJVaW50OCA9IG5ldyBVaW50OEFycmF5KF90aGlzLl93YXNtTWVtb3J5LmJ1ZmZlcik7CiAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoX3RoaXMuX3dhc21NZW1vcnkuYnVmZmVyKTsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoc3RhdHVzICE9PSBQdlN0YXR1cy5TVUNDRVNTKSkgewogICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNTsKICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7CiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQb3JjdXBpbmUuZ2V0TWVzc2FnZVN0YWNrKF90aGlzLl9wdkdldEVycm9yU3RhY2ssIF90aGlzLl9wdkZyZWVFcnJvclN0YWNrLCBfdGhpcy5fbWVzc2FnZVN0YWNrQWRkcmVzc0FkZHJlc3NBZGRyZXNzLCBfdGhpcy5fbWVzc2FnZVN0YWNrRGVwdGhBZGRyZXNzLCBtZW1vcnlCdWZmZXJWaWV3LCBtZW1vcnlCdWZmZXJVaW50OCk7CiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOgogICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlU3RhY2sgPSBfY29udGV4dC5zZW50OwogICAgICAgICAgICAgICAgICAgICAgICBfZXJyb3IgPSBwdlN0YXR1c1RvRXhjZXB0aW9uKHN0YXR1cywgIlByb2Nlc3NpbmcgZmFpbGVkIiwgbWVzc2FnZVN0YWNrKTsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9wcm9jZXNzRXJyb3JDYWxsYmFjaykgewogICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9wcm9jZXNzRXJyb3JDYWxsYmFjayhfZXJyb3IpOwogICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlCiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihfZXJyb3IpOwogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OgogICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkSW5kZXggPSBtZW1vcnlCdWZmZXJWaWV3LmdldEludDMyKF90aGlzLl9rZXl3b3JkSW5kZXhBZGRyZXNzLCB0cnVlKTsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXdvcmRJbmRleCAhPT0gLTEpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fa2V5d29yZERldGVjdGlvbkNhbGxiYWNrKHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoX3RoaXMkX2tleXdvcmRMYWJlbHMkID0gX3RoaXMuX2tleXdvcmRMYWJlbHMuZ2V0KGtleXdvcmRJbmRleCkpICE9PSBudWxsICYmIF90aGlzJF9rZXl3b3JkTGFiZWxzJCAhPT0gdm9pZCAwID8gX3RoaXMkX2tleXdvcmRMYWJlbHMkIDogJycsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDoga2V5d29yZEluZGV4CiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6CiAgICAgICAgICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZSk7CiAgICAgICAgICAgICAgICB9KSkpWyJjYXRjaCJdKGZ1bmN0aW9uIChlcnJvcikgewogICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX3Byb2Nlc3NFcnJvckNhbGxiYWNrKSB7CiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3Byb2Nlc3NFcnJvckNhbGxiYWNrKGVycm9yKTsKICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZQogICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICBjYXNlIDI6CiAgICAgICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpOwogICAgICAgICAgICB9CiAgICAgICAgICB9LCBfY2FsbGVlMiwgdGhpcyk7CiAgICAgICAgfSkpOwogICAgICAgIGZ1bmN0aW9uIHByb2Nlc3MoX3gpIHsKICAgICAgICAgIHJldHVybiBfcHJvY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgIH0KICAgICAgICByZXR1cm4gcHJvY2VzczsKICAgICAgfSgpCiAgICAgIC8qKg0KICAgICAgICogUmVsZWFzZXMgcmVzb3VyY2VzIGFjcXVpcmVkIGJ5IFdlYkFzc2VtYmx5IG1vZHVsZS4NCiAgICAgICAqLwogICAgfSwgewogICAgICBrZXk6ICJyZWxlYXNlIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICB2YXIgX3JlbGVhc2UgPSBfYXN5bmNUb0dlbmVyYXRvciQxKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKCkgewogICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7CiAgICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHsKICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI7CiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHZQb3JjdXBpbmVEZWxldGUodGhpcy5fb2JqZWN0QWRkcmVzcyk7CiAgICAgICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA0OwogICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B2RnJlZSh0aGlzLl9tZXNzYWdlU3RhY2tBZGRyZXNzQWRkcmVzc0FkZHJlc3MpOwogICAgICAgICAgICAgIGNhc2UgNDoKICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gNjsKICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdkZyZWUodGhpcy5fbWVzc2FnZVN0YWNrRGVwdGhBZGRyZXNzKTsKICAgICAgICAgICAgICBjYXNlIDY6CiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDg7CiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHZGcmVlKHRoaXMuX2lucHV0QnVmZmVyQWRkcmVzcyk7CiAgICAgICAgICAgICAgY2FzZSA4OgogICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAxMDsKICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdkZyZWUodGhpcy5fa2V5d29yZEluZGV4QWRkcmVzcyk7CiAgICAgICAgICAgICAgY2FzZSAxMDoKICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl93YXNtTWVtb3J5OwogICAgICAgICAgICAgICAgdGhpcy5fd2FzbU1lbW9yeSA9IHVuZGVmaW5lZDsKICAgICAgICAgICAgICBjYXNlIDEyOgogICAgICAgICAgICAgIGNhc2UgImVuZCI6CiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSwgX2NhbGxlZTMsIHRoaXMpOwogICAgICAgIH0pKTsKICAgICAgICBmdW5jdGlvbiByZWxlYXNlKCkgewogICAgICAgICAgcmV0dXJuIF9yZWxlYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfQogICAgICAgIHJldHVybiByZWxlYXNlOwogICAgICB9KCkKICAgIH0sIHsKICAgICAga2V5OiAib25tZXNzYWdlIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICB2YXIgX29ubWVzc2FnZSA9IF9hc3luY1RvR2VuZXJhdG9yJDEoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQoZSkgewogICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNCQoX2NvbnRleHQ0KSB7CiAgICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0NC5wcmV2ID0gX2NvbnRleHQ0Lm5leHQpIHsKICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICBfY29udGV4dDQudDAgPSBlLmRhdGEuY29tbWFuZDsKICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gX2NvbnRleHQ0LnQwID09PSAncHJvY2VzcycgPyAzIDogNjsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGNhc2UgMzoKICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gNTsKICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3MoZS5kYXRhLmlucHV0RnJhbWUpOwogICAgICAgICAgICAgIGNhc2UgNToKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KCJicmVhayIsIDcpOwogICAgICAgICAgICAgIGNhc2UgNjoKICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlCiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oIlVucmVjb2duaXplZCBjb21tYW5kOiAiLmNvbmNhdChlLmRhdGEuY29tbWFuZCkpOwogICAgICAgICAgICAgIGNhc2UgNzoKICAgICAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5zdG9wKCk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0sIF9jYWxsZWU0LCB0aGlzKTsKICAgICAgICB9KSk7CiAgICAgICAgZnVuY3Rpb24gb25tZXNzYWdlKF94MikgewogICAgICAgICAgcmV0dXJuIF9vbm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG9ubWVzc2FnZTsKICAgICAgfSgpCiAgICB9XSwgW3sKICAgICAga2V5OiAiY3JlYXRlIiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICB2YXIgX2NyZWF0ZSA9IF9hc3luY1RvR2VuZXJhdG9yJDEoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUoYWNjZXNzS2V5LCBrZXl3b3Jkcywga2V5d29yZERldGVjdGlvbkNhbGxiYWNrLCBtb2RlbCkgewogICAgICAgICAgdmFyIG9wdGlvbnMsCiAgICAgICAgICAgIF95aWVsZCRrZXl3b3Jkc1Byb2NlcywKICAgICAgICAgICAgX3lpZWxkJGtleXdvcmRzUHJvY2VzMiwKICAgICAgICAgICAga2V5d29yZFBhdGhzLAogICAgICAgICAgICBrZXl3b3JkTGFiZWxzLAogICAgICAgICAgICBzZW5zaXRpdml0aWVzLAogICAgICAgICAgICBjdXN0b21Xcml0ZVBhdGgsCiAgICAgICAgICAgIG1vZGVsUGF0aCwKICAgICAgICAgICAgX2FyZ3M1ID0gYXJndW1lbnRzOwogICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNSQoX2NvbnRleHQ1KSB7CiAgICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0NS5wcmV2ID0gX2NvbnRleHQ1Lm5leHQpIHsKICAgICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgICBvcHRpb25zID0gX2FyZ3M1Lmxlbmd0aCA+IDQgJiYgX2FyZ3M1WzRdICE9PSB1bmRlZmluZWQgPyBfYXJnczVbNF0gOiB7fTsKICAgICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMzsKICAgICAgICAgICAgICAgIHJldHVybiBrZXl3b3Jkc1Byb2Nlc3Moa2V5d29yZHMpOwogICAgICAgICAgICAgIGNhc2UgMzoKICAgICAgICAgICAgICAgIF95aWVsZCRrZXl3b3Jkc1Byb2NlcyA9IF9jb250ZXh0NS5zZW50OwogICAgICAgICAgICAgICAgX3lpZWxkJGtleXdvcmRzUHJvY2VzMiA9IF9zbGljZWRUb0FycmF5KF95aWVsZCRrZXl3b3Jkc1Byb2NlcywgMyk7CiAgICAgICAgICAgICAgICBrZXl3b3JkUGF0aHMgPSBfeWllbGQka2V5d29yZHNQcm9jZXMyWzBdOwogICAgICAgICAgICAgICAga2V5d29yZExhYmVscyA9IF95aWVsZCRrZXl3b3Jkc1Byb2NlczJbMV07CiAgICAgICAgICAgICAgICBzZW5zaXRpdml0aWVzID0gX3lpZWxkJGtleXdvcmRzUHJvY2VzMlsyXTsKICAgICAgICAgICAgICAgIGN1c3RvbVdyaXRlUGF0aCA9IG1vZGVsLmN1c3RvbVdyaXRlUGF0aCA/IG1vZGVsLmN1c3RvbVdyaXRlUGF0aCA6ICdwb3JjdXBpbmVfbW9kZWwnOwogICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAxMTsKICAgICAgICAgICAgICAgIHJldHVybiBsb2FkTW9kZWwoX29iamVjdFNwcmVhZCQxKF9vYmplY3RTcHJlYWQkMSh7fSwgbW9kZWwpLCB7fSwgewogICAgICAgICAgICAgICAgICBjdXN0b21Xcml0ZVBhdGg6IGN1c3RvbVdyaXRlUGF0aAogICAgICAgICAgICAgICAgfSkpOwogICAgICAgICAgICAgIGNhc2UgMTE6CiAgICAgICAgICAgICAgICBtb2RlbFBhdGggPSBfY29udGV4dDUuc2VudDsKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KCJyZXR1cm4iLCB0aGlzLl9pbml0KGFjY2Vzc0tleSwga2V5d29yZFBhdGhzLCBrZXl3b3JkTGFiZWxzLCBrZXl3b3JkRGV0ZWN0aW9uQ2FsbGJhY2ssIHNlbnNpdGl2aXRpZXMsIG1vZGVsUGF0aCwgb3B0aW9ucykpOwogICAgICAgICAgICAgIGNhc2UgMTM6CiAgICAgICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuc3RvcCgpOwogICAgICAgICAgICB9CiAgICAgICAgICB9LCBfY2FsbGVlNSwgdGhpcyk7CiAgICAgICAgfSkpOwogICAgICAgIGZ1bmN0aW9uIGNyZWF0ZShfeDMsIF94NCwgX3g1LCBfeDYpIHsKICAgICAgICAgIHJldHVybiBfY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfQogICAgICAgIHJldHVybiBjcmVhdGU7CiAgICAgIH0oKQogICAgICAvKioNCiAgICAgICAqIFNldCBiYXNlNjQgd2FzbSBmaWxlLg0KICAgICAgICogQHBhcmFtIHdhc20gQmFzZTY0J2Qgd2FzbSBmaWxlIHRvIHVzZSB0byBpbml0aWFsaXplIHdhc20uDQogICAgICAgKi8KICAgIH0sIHsKICAgICAga2V5OiAic2V0V2FzbSIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRXYXNtKHdhc20pIHsKICAgICAgICBpZiAodGhpcy5fd2FzbSA9PT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICB0aGlzLl93YXNtID0gd2FzbTsKICAgICAgICB9CiAgICAgIH0KICAgICAgLyoqDQogICAgICAgKiBTZXQgYmFzZTY0IHdhc20gZmlsZSB3aXRoIFNJTUQgZmVhdHVyZS4NCiAgICAgICAqIEBwYXJhbSB3YXNtU2ltZCBCYXNlNjQnZCB3YXNtIGZpbGUgdG8gdXNlIHRvIGluaXRpYWxpemUgd2FzbS4NCiAgICAgICAqLwogICAgfSwgewogICAgICBrZXk6ICJzZXRXYXNtU2ltZCIsCiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRXYXNtU2ltZCh3YXNtU2ltZCkgewogICAgICAgIGlmICh0aGlzLl93YXNtU2ltZCA9PT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICB0aGlzLl93YXNtU2ltZCA9IHdhc21TaW1kOwogICAgICAgIH0KICAgICAgfQogICAgfSwgewogICAgICBrZXk6ICJzZXRTZGsiLAogICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2RrKHNkaykgewogICAgICAgIFBvcmN1cGluZS5fc2RrID0gc2RrOwogICAgICB9CiAgICB9LCB7CiAgICAgIGtleTogIl9pbml0IiwKICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICB2YXIgX2luaXQyID0gX2FzeW5jVG9HZW5lcmF0b3IkMSggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNyhhY2Nlc3NLZXksIGtleXdvcmRQYXRocywga2V5d29yZExhYmVscywga2V5d29yZERldGVjdGlvbkNhbGxiYWNrLCBzZW5zaXRpdml0aWVzLCBtb2RlbFBhdGgpIHsKICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzOwogICAgICAgICAgdmFyIG9wdGlvbnMsCiAgICAgICAgICAgIHByb2Nlc3NFcnJvckNhbGxiYWNrLAogICAgICAgICAgICBfYXJnczcgPSBhcmd1bWVudHM7CiAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU3JChfY29udGV4dDcpIHsKICAgICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQ3LnByZXYgPSBfY29udGV4dDcubmV4dCkgewogICAgICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBfYXJnczcubGVuZ3RoID4gNiAmJiBfYXJnczdbNl0gIT09IHVuZGVmaW5lZCA/IF9hcmdzN1s2XSA6IHt9OwogICAgICAgICAgICAgICAgaWYgKGlzQWNjZXNzS2V5VmFsaWQoYWNjZXNzS2V5KSkgewogICAgICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDM7CiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBvcmN1cGluZUludmFsaWRBcmd1bWVudEVycm9yKCdJbnZhbGlkIEFjY2Vzc0tleScpOwogICAgICAgICAgICAgIGNhc2UgMzoKICAgICAgICAgICAgICAgIGlmICghKGtleXdvcmRQYXRocy5sZW5ndGggIT09IGtleXdvcmRMYWJlbHMubGVuZ3RoIHx8IGtleXdvcmRQYXRocy5sZW5ndGggIT09IHNlbnNpdGl2aXRpZXMubGVuZ3RoKSkgewogICAgICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDU7CiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBvcmN1cGluZUludmFsaWRBcmd1bWVudEVycm9yKCJOdW1iZXIgb2Yga2V5d29yZCBwYXRocyBnaXZlbiAoIi5jb25jYXQoa2V5d29yZFBhdGhzLmxlbmd0aCwgIikgZG9lcyBub3QgbWF0Y2ggbnVtYmVyIG9mIFxuICAgICAgICAgIGtleXdvcmQgbGFiZWxzICgiKS5jb25jYXQoa2V5d29yZExhYmVscy5sZW5ndGgsICIpIG9yIHNlbnNpdGl2aXRpZXMgKCIpLmNvbmNhdChzZW5zaXRpdml0aWVzLmxlbmd0aCwgIikiKSk7CiAgICAgICAgICAgICAgY2FzZSA1OgogICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yQ2FsbGJhY2sgPSBvcHRpb25zLnByb2Nlc3NFcnJvckNhbGxiYWNrOwogICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoInJldHVybiIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsKICAgICAgICAgICAgICAgICAgUG9yY3VwaW5lLl9wb3JjdXBpbmVNdXRleC5ydW5FeGNsdXNpdmUoIC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvciQxKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KCkgewogICAgICAgICAgICAgICAgICAgIHZhciBpc1NpbWQsIHdhc21PdXRwdXQ7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNiQoX2NvbnRleHQ2KSB7CiAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDI7CiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpbWQoKTsKICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2ltZCA9IF9jb250ZXh0Ni5zZW50OwogICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNTsKICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUG9yY3VwaW5lLmluaXRXYXNtKGFjY2Vzc0tleS50cmltKCksIGlzU2ltZCA/IF90aGlzMi5fd2FzbVNpbWQgOiBfdGhpczIuX3dhc20sIG1vZGVsUGF0aCwga2V5d29yZFBhdGhzLCBzZW5zaXRpdml0aWVzKTsKICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OgogICAgICAgICAgICAgICAgICAgICAgICAgIHdhc21PdXRwdXQgPSBfY29udGV4dDYuc2VudDsKICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdCgicmV0dXJuIiwgbmV3IFBvcmN1cGluZSh3YXNtT3V0cHV0LCBrZXl3b3JkTGFiZWxzLCBrZXl3b3JkRGV0ZWN0aW9uQ2FsbGJhY2ssIHByb2Nlc3NFcnJvckNhbGxiYWNrKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzoKICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LnN0b3AoKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9LCBfY2FsbGVlNik7CiAgICAgICAgICAgICAgICAgIH0pKSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7CiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpOwogICAgICAgICAgICAgICAgICB9KVsiY2F0Y2giXShmdW5jdGlvbiAoZXJyb3IpIHsKICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpOwogICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pKTsKICAgICAgICAgICAgICBjYXNlIDc6CiAgICAgICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuc3RvcCgpOwogICAgICAgICAgICB9CiAgICAgICAgICB9LCBfY2FsbGVlNyk7CiAgICAgICAgfSkpOwogICAgICAgIGZ1bmN0aW9uIF9pbml0KF94NywgX3g4LCBfeDksIF94MTAsIF94MTEsIF94MTIpIHsKICAgICAgICAgIHJldHVybiBfaW5pdDIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIF9pbml0OwogICAgICB9KCkKICAgIH0sIHsKICAgICAga2V5OiAiaW5pdFdhc20iLAogICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgIHZhciBfaW5pdFdhc20gPSBfYXN5bmNUb0dlbmVyYXRvciQxKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU4KGFjY2Vzc0tleSwgd2FzbUJhc2U2NCwgbW9kZWxQYXRoLCBrZXl3b3JkUGF0aHMsIHNlbnNpdGl2aXRpZXMpIHsKICAgICAgICAgIHZhciBtZW1vcnksIG1lbW9yeUJ1ZmZlclVpbnQ4LCBtZW1vcnlCdWZmZXJJbnQzMiwgbWVtb3J5QnVmZmVyRmxvYXQzMiwgcHZFcnJvciwgZXhwb3J0cywgYWxpZ25lZF9hbGxvYywgcHZfZnJlZSwgcHZfcG9yY3VwaW5lX3ZlcnNpb24sIHB2X3BvcmN1cGluZV9mcmFtZV9sZW5ndGgsIHB2X3BvcmN1cGluZV9wcm9jZXNzLCBwdl9wb3JjdXBpbmVfZGVsZXRlLCBwdl9wb3JjdXBpbmVfaW5pdCwgcHZfc2FtcGxlX3JhdGUsIHB2X3NldF9zZGssIHB2X2dldF9lcnJvcl9zdGFjaywgcHZfZnJlZV9lcnJvcl9zdGFjaywgb2JqZWN0QWRkcmVzc0FkZHJlc3MsIGFjY2Vzc0tleUFkZHJlc3MsIGksIG1vZGVsUGF0aEVuY29kZWQsIG1vZGVsUGF0aEFkZHJlc3MsIGtleXdvcmRQYXRoc0FkZHJlc3NBZGRyZXNzLCBrZXl3b3JkUGF0aHNBZGRyZXNzTGlzdCwgX2l0ZXJhdG9yLCBfc3RlcCwga2V5d29yZFBhdGgsIGtleXdvcmRQYXRoRW5jb2RlZCwga2V5d29yZFBhdGhBZGRyZXNzLCBzZW5zaXRpdml0eUFkZHJlc3MsIGtleXdvcmRJbmRleEFkZHJlc3MsIHNka0VuY29kZWQsIHNka0FkZHJlc3MsIG1lc3NhZ2VTdGFja0RlcHRoQWRkcmVzcywgbWVzc2FnZVN0YWNrQWRkcmVzc0FkZHJlc3NBZGRyZXNzLCBzdGF0dXMsIG1lbW9yeUJ1ZmZlclZpZXcsIG1lc3NhZ2VTdGFjaywgb2JqZWN0QWRkcmVzcywgc2FtcGxlUmF0ZSwgZnJhbWVMZW5ndGgsIHZlcnNpb25BZGRyZXNzLCB2ZXJzaW9uLCBpbnB1dEJ1ZmZlckFkZHJlc3M7CiAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU4JChfY29udGV4dDgpIHsKICAgICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQ4LnByZXYgPSBfY29udGV4dDgubmV4dCkgewogICAgICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgICAgIC8vIEEgV2ViQXNzZW1ibHkgcGFnZSBoYXMgYSBjb25zdGFudCBzaXplIG9mIDY0S2lCLiAtPiAxTWlCIH49IDE2IHBhZ2VzCiAgICAgICAgICAgICAgICAvLyBtaW5pbXVtIG1lbW9yeSByZXF1aXJlbWVudHMgZm9yIGluaXQ6IDE3IHBhZ2VzCiAgICAgICAgICAgICAgICBtZW1vcnkgPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsKICAgICAgICAgICAgICAgICAgaW5pdGlhbDogMjU2CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlclVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkobWVtb3J5LmJ1ZmZlcik7CiAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJJbnQzMiA9IG5ldyBJbnQzMkFycmF5KG1lbW9yeS5idWZmZXIpOwogICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVyRmxvYXQzMiA9IG5ldyBGbG9hdDMyQXJyYXkobWVtb3J5LmJ1ZmZlcik7CiAgICAgICAgICAgICAgICBwdkVycm9yID0gbmV3IFB2RXJyb3IoKTsKICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNzsKICAgICAgICAgICAgICAgIHJldHVybiBidWlsZFdhc20obWVtb3J5LCB3YXNtQmFzZTY0LCBwdkVycm9yKTsKICAgICAgICAgICAgICBjYXNlIDc6CiAgICAgICAgICAgICAgICBleHBvcnRzID0gX2NvbnRleHQ4LnNlbnQ7CiAgICAgICAgICAgICAgICBhbGlnbmVkX2FsbG9jID0gZXhwb3J0cy5hbGlnbmVkX2FsbG9jOwogICAgICAgICAgICAgICAgcHZfZnJlZSA9IGV4cG9ydHMucHZfZnJlZTsKICAgICAgICAgICAgICAgIHB2X3BvcmN1cGluZV92ZXJzaW9uID0gZXhwb3J0cy5wdl9wb3JjdXBpbmVfdmVyc2lvbjsKICAgICAgICAgICAgICAgIHB2X3BvcmN1cGluZV9mcmFtZV9sZW5ndGggPSBleHBvcnRzLnB2X3BvcmN1cGluZV9mcmFtZV9sZW5ndGg7CiAgICAgICAgICAgICAgICBwdl9wb3JjdXBpbmVfcHJvY2VzcyA9IGV4cG9ydHMucHZfcG9yY3VwaW5lX3Byb2Nlc3M7CiAgICAgICAgICAgICAgICBwdl9wb3JjdXBpbmVfZGVsZXRlID0gZXhwb3J0cy5wdl9wb3JjdXBpbmVfZGVsZXRlOwogICAgICAgICAgICAgICAgcHZfcG9yY3VwaW5lX2luaXQgPSBleHBvcnRzLnB2X3BvcmN1cGluZV9pbml0OwogICAgICAgICAgICAgICAgcHZfc2FtcGxlX3JhdGUgPSBleHBvcnRzLnB2X3NhbXBsZV9yYXRlOwogICAgICAgICAgICAgICAgcHZfc2V0X3NkayA9IGV4cG9ydHMucHZfc2V0X3NkazsKICAgICAgICAgICAgICAgIHB2X2dldF9lcnJvcl9zdGFjayA9IGV4cG9ydHMucHZfZ2V0X2Vycm9yX3N0YWNrOwogICAgICAgICAgICAgICAgcHZfZnJlZV9lcnJvcl9zdGFjayA9IGV4cG9ydHMucHZfZnJlZV9lcnJvcl9zdGFjazsgLy8gYWNxdWlyZSBhbmQgaW5pdCBtZW1vcnkgZm9yIGNfb2JqZWN0CiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDIxOwogICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduZWRfYWxsb2MoSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgY2FzZSAyMToKICAgICAgICAgICAgICAgIG9iamVjdEFkZHJlc3NBZGRyZXNzID0gX2NvbnRleHQ4LnNlbnQ7CiAgICAgICAgICAgICAgICBpZiAoIShvYmplY3RBZGRyZXNzQWRkcmVzcyA9PT0gMCkpIHsKICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAyNDsKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUG9yY3VwaW5lT3V0T2ZNZW1vcnlFcnJvcignbWFsbG9jIGZhaWxlZDogQ2Fubm90IGFsbG9jYXRlIG1lbW9yeScpOwogICAgICAgICAgICAgIGNhc2UgMjQ6CiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDI2OwogICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduZWRfYWxsb2MoVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgKGFjY2Vzc0tleS5sZW5ndGggKyAxKSAqIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpOwogICAgICAgICAgICAgIGNhc2UgMjY6CiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlBZGRyZXNzID0gX2NvbnRleHQ4LnNlbnQ7CiAgICAgICAgICAgICAgICBpZiAoIShhY2Nlc3NLZXlBZGRyZXNzID09PSAwKSkgewogICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDI5OwogICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHRocm93IG5ldyBQb3JjdXBpbmVPdXRPZk1lbW9yeUVycm9yKCdtYWxsb2MgZmFpbGVkOiBDYW5ub3QgYWxsb2NhdGUgbWVtb3J5Jyk7CiAgICAgICAgICAgICAgY2FzZSAyOToKICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhY2Nlc3NLZXkubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVyVWludDhbYWNjZXNzS2V5QWRkcmVzcyArIGldID0gYWNjZXNzS2V5LmNoYXJDb2RlQXQoaSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJVaW50OFthY2Nlc3NLZXlBZGRyZXNzICsgYWNjZXNzS2V5Lmxlbmd0aF0gPSAwOwogICAgICAgICAgICAgICAgbW9kZWxQYXRoRW5jb2RlZCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShtb2RlbFBhdGgpOyAvLyBhY3F1aXJlIGFuZCBpbml0IG1lbW9yeSBmb3IgY19tb2RlbF9wYXRoCiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDM0OwogICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduZWRfYWxsb2MoVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgKG1vZGVsUGF0aEVuY29kZWQubGVuZ3RoICsgMSkgKiBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTsKICAgICAgICAgICAgICBjYXNlIDM0OgogICAgICAgICAgICAgICAgbW9kZWxQYXRoQWRkcmVzcyA9IF9jb250ZXh0OC5zZW50OwogICAgICAgICAgICAgICAgaWYgKCEobW9kZWxQYXRoQWRkcmVzcyA9PT0gMCkpIHsKICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAzNzsKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUG9yY3VwaW5lT3V0T2ZNZW1vcnlFcnJvcignbWFsbG9jIGZhaWxlZDogQ2Fubm90IGFsbG9jYXRlIG1lbW9yeScpOwogICAgICAgICAgICAgIGNhc2UgMzc6CiAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJVaW50OC5zZXQobW9kZWxQYXRoRW5jb2RlZCwgbW9kZWxQYXRoQWRkcmVzcyk7CiAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJVaW50OFttb2RlbFBhdGhBZGRyZXNzICsgbW9kZWxQYXRoRW5jb2RlZC5sZW5ndGhdID0gMDsKICAgICAgICAgICAgICAgIC8vIGFjcXVpcmUgYW5kIGluaXQgbWVtb3J5IGZvciBjX2tleXdvcmRfcGF0aHMKICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNDE7CiAgICAgICAgICAgICAgICByZXR1cm4gYWxpZ25lZF9hbGxvYyhJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCBrZXl3b3JkUGF0aHMubGVuZ3RoICogSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgY2FzZSA0MToKICAgICAgICAgICAgICAgIGtleXdvcmRQYXRoc0FkZHJlc3NBZGRyZXNzID0gX2NvbnRleHQ4LnNlbnQ7CiAgICAgICAgICAgICAgICBpZiAoIShrZXl3b3JkUGF0aHNBZGRyZXNzQWRkcmVzcyA9PT0gMCkpIHsKICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA0NDsKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUG9yY3VwaW5lT3V0T2ZNZW1vcnlFcnJvcignbWFsbG9jIGZhaWxlZDogQ2Fubm90IGFsbG9jYXRlIG1lbW9yeScpOwogICAgICAgICAgICAgIGNhc2UgNDQ6CiAgICAgICAgICAgICAgICBrZXl3b3JkUGF0aHNBZGRyZXNzTGlzdCA9IFtdOwogICAgICAgICAgICAgICAgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoa2V5d29yZFBhdGhzKTsKICAgICAgICAgICAgICAgIF9jb250ZXh0OC5wcmV2ID0gNDY7CiAgICAgICAgICAgICAgICBfaXRlcmF0b3IucygpOwogICAgICAgICAgICAgIGNhc2UgNDg6CiAgICAgICAgICAgICAgICBpZiAoKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZSkgewogICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDYxOwogICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGtleXdvcmRQYXRoID0gX3N0ZXAudmFsdWU7CiAgICAgICAgICAgICAgICBrZXl3b3JkUGF0aEVuY29kZWQgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoa2V5d29yZFBhdGgpOwogICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1MzsKICAgICAgICAgICAgICAgIHJldHVybiBhbGlnbmVkX2FsbG9jKFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIChrZXl3b3JkUGF0aEVuY29kZWQubGVuZ3RoICsgMSkgKiBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTsKICAgICAgICAgICAgICBjYXNlIDUzOgogICAgICAgICAgICAgICAga2V5d29yZFBhdGhBZGRyZXNzID0gX2NvbnRleHQ4LnNlbnQ7CiAgICAgICAgICAgICAgICBpZiAoIShrZXl3b3JkUGF0aEFkZHJlc3MgPT09IDApKSB7CiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNTY7CiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBvcmN1cGluZU91dE9mTWVtb3J5RXJyb3IoJ21hbGxvYyBmYWlsZWQ6IENhbm5vdCBhbGxvY2F0ZSBtZW1vcnknKTsKICAgICAgICAgICAgICBjYXNlIDU2OgogICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVyVWludDguc2V0KGtleXdvcmRQYXRoRW5jb2RlZCwga2V5d29yZFBhdGhBZGRyZXNzKTsKICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlclVpbnQ4W2tleXdvcmRQYXRoQWRkcmVzcyArIGtleXdvcmRQYXRoRW5jb2RlZC5sZW5ndGhdID0gMDsKICAgICAgICAgICAgICAgIGtleXdvcmRQYXRoc0FkZHJlc3NMaXN0LnB1c2goa2V5d29yZFBhdGhBZGRyZXNzKTsKICAgICAgICAgICAgICBjYXNlIDU5OgogICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA0ODsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGNhc2UgNjE6CiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDY2OwogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgY2FzZSA2MzoKICAgICAgICAgICAgICAgIF9jb250ZXh0OC5wcmV2ID0gNjM7CiAgICAgICAgICAgICAgICBfY29udGV4dDgudDAgPSBfY29udGV4dDhbImNhdGNoIl0oNDYpOwogICAgICAgICAgICAgICAgX2l0ZXJhdG9yLmUoX2NvbnRleHQ4LnQwKTsKICAgICAgICAgICAgICBjYXNlIDY2OgogICAgICAgICAgICAgICAgX2NvbnRleHQ4LnByZXYgPSA2NjsKICAgICAgICAgICAgICAgIF9pdGVyYXRvci5mKCk7CiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmZpbmlzaCg2Nik7CiAgICAgICAgICAgICAgY2FzZSA2OToKICAgICAgICAgICAgICAgIG1lbW9yeUJ1ZmZlckludDMyLnNldChuZXcgSW50MzJBcnJheShrZXl3b3JkUGF0aHNBZGRyZXNzTGlzdCksIGtleXdvcmRQYXRoc0FkZHJlc3NBZGRyZXNzIC8gSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDcyOwogICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduZWRfYWxsb2MoRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCBrZXl3b3JkUGF0aHMubGVuZ3RoICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTsKICAgICAgICAgICAgICBjYXNlIDcyOgogICAgICAgICAgICAgICAgc2Vuc2l0aXZpdHlBZGRyZXNzID0gX2NvbnRleHQ4LnNlbnQ7CiAgICAgICAgICAgICAgICBpZiAoIShzZW5zaXRpdml0eUFkZHJlc3MgPT09IDApKSB7CiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNzU7CiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBvcmN1cGluZU91dE9mTWVtb3J5RXJyb3IoJ21hbGxvYyBmYWlsZWQ6IENhbm5vdCBhbGxvY2F0ZSBtZW1vcnknKTsKICAgICAgICAgICAgICBjYXNlIDc1OgogICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVyRmxvYXQzMi5zZXQoc2Vuc2l0aXZpdGllcywgc2Vuc2l0aXZpdHlBZGRyZXNzIC8gRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTsKICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNzg7CiAgICAgICAgICAgICAgICByZXR1cm4gYWxpZ25lZF9hbGxvYyhJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTsKICAgICAgICAgICAgICBjYXNlIDc4OgogICAgICAgICAgICAgICAga2V5d29yZEluZGV4QWRkcmVzcyA9IF9jb250ZXh0OC5zZW50OwogICAgICAgICAgICAgICAgaWYgKCEoa2V5d29yZEluZGV4QWRkcmVzcyA9PT0gMCkpIHsKICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA4MTsKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUG9yY3VwaW5lT3V0T2ZNZW1vcnlFcnJvcignbWFsbG9jIGZhaWxlZDogQ2Fubm90IGFsbG9jYXRlIG1lbW9yeScpOwogICAgICAgICAgICAgIGNhc2UgODE6CiAgICAgICAgICAgICAgICBzZGtFbmNvZGVkID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHRoaXMuX3Nkayk7CiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDg0OwogICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduZWRfYWxsb2MoVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgKHNka0VuY29kZWQubGVuZ3RoICsgMSkgKiBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTsKICAgICAgICAgICAgICBjYXNlIDg0OgogICAgICAgICAgICAgICAgc2RrQWRkcmVzcyA9IF9jb250ZXh0OC5zZW50OwogICAgICAgICAgICAgICAgaWYgKHNka0FkZHJlc3MpIHsKICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA4NzsKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUG9yY3VwaW5lT3V0T2ZNZW1vcnlFcnJvcignbWFsbG9jIGZhaWxlZDogQ2Fubm90IGFsbG9jYXRlIG1lbW9yeScpOwogICAgICAgICAgICAgIGNhc2UgODc6CiAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJVaW50OC5zZXQoc2RrRW5jb2RlZCwgc2RrQWRkcmVzcyk7CiAgICAgICAgICAgICAgICBtZW1vcnlCdWZmZXJVaW50OFtzZGtBZGRyZXNzICsgc2RrRW5jb2RlZC5sZW5ndGhdID0gMDsKICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gOTE7CiAgICAgICAgICAgICAgICByZXR1cm4gcHZfc2V0X3NkayhzZGtBZGRyZXNzKTsKICAgICAgICAgICAgICBjYXNlIDkxOgogICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA5MzsKICAgICAgICAgICAgICAgIHJldHVybiBhbGlnbmVkX2FsbG9jKEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQpOwogICAgICAgICAgICAgIGNhc2UgOTM6CiAgICAgICAgICAgICAgICBtZXNzYWdlU3RhY2tEZXB0aEFkZHJlc3MgPSBfY29udGV4dDguc2VudDsKICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlU3RhY2tEZXB0aEFkZHJlc3MpIHsKICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA5NjsKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUG9yY3VwaW5lT3V0T2ZNZW1vcnlFcnJvcignbWFsbG9jIGZhaWxlZDogQ2Fubm90IGFsbG9jYXRlIG1lbW9yeScpOwogICAgICAgICAgICAgIGNhc2UgOTY6CiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDk4OwogICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduZWRfYWxsb2MoSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgSW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICAgICAgICAgICAgY2FzZSA5ODoKICAgICAgICAgICAgICAgIG1lc3NhZ2VTdGFja0FkZHJlc3NBZGRyZXNzQWRkcmVzcyA9IF9jb250ZXh0OC5zZW50OwogICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VTdGFja0FkZHJlc3NBZGRyZXNzQWRkcmVzcykgewogICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDEwMTsKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUG9yY3VwaW5lT3V0T2ZNZW1vcnlFcnJvcignbWFsbG9jIGZhaWxlZDogQ2Fubm90IGFsbG9jYXRlIG1lbW9yeScpOwogICAgICAgICAgICAgIGNhc2UgMTAxOgogICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxMDM7CiAgICAgICAgICAgICAgICByZXR1cm4gcHZfcG9yY3VwaW5lX2luaXQoYWNjZXNzS2V5QWRkcmVzcywgbW9kZWxQYXRoQWRkcmVzcywga2V5d29yZFBhdGhzLmxlbmd0aCwga2V5d29yZFBhdGhzQWRkcmVzc0FkZHJlc3MsIHNlbnNpdGl2aXR5QWRkcmVzcywgb2JqZWN0QWRkcmVzc0FkZHJlc3MpOwogICAgICAgICAgICAgIGNhc2UgMTAzOgogICAgICAgICAgICAgICAgc3RhdHVzID0gX2NvbnRleHQ4LnNlbnQ7CiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDEwNjsKICAgICAgICAgICAgICAgIHJldHVybiBwdl9mcmVlKGFjY2Vzc0tleUFkZHJlc3MpOwogICAgICAgICAgICAgIGNhc2UgMTA2OgogICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxMDg7CiAgICAgICAgICAgICAgICByZXR1cm4gcHZfZnJlZShtb2RlbFBhdGhBZGRyZXNzKTsKICAgICAgICAgICAgICBjYXNlIDEwODoKICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMTEwOwogICAgICAgICAgICAgICAgcmV0dXJuIHB2X2ZyZWUoa2V5d29yZFBhdGhzQWRkcmVzc0FkZHJlc3MpOwogICAgICAgICAgICAgIGNhc2UgMTEwOgogICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxMTI7CiAgICAgICAgICAgICAgICByZXR1cm4gcHZfZnJlZShzZW5zaXRpdml0eUFkZHJlc3MpOwogICAgICAgICAgICAgIGNhc2UgMTEyOgogICAgICAgICAgICAgICAgbWVtb3J5QnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhtZW1vcnkuYnVmZmVyKTsKICAgICAgICAgICAgICAgIGlmICghKHN0YXR1cyAhPT0gUHZTdGF0dXMuU1VDQ0VTUykpIHsKICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxMTg7CiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxMTY7CiAgICAgICAgICAgICAgICByZXR1cm4gUG9yY3VwaW5lLmdldE1lc3NhZ2VTdGFjayhwdl9nZXRfZXJyb3Jfc3RhY2ssIHB2X2ZyZWVfZXJyb3Jfc3RhY2ssIG1lc3NhZ2VTdGFja0FkZHJlc3NBZGRyZXNzQWRkcmVzcywgbWVzc2FnZVN0YWNrRGVwdGhBZGRyZXNzLCBtZW1vcnlCdWZmZXJWaWV3LCBtZW1vcnlCdWZmZXJVaW50OCk7CiAgICAgICAgICAgICAgY2FzZSAxMTY6CiAgICAgICAgICAgICAgICBtZXNzYWdlU3RhY2sgPSBfY29udGV4dDguc2VudDsKICAgICAgICAgICAgICAgIHRocm93IHB2U3RhdHVzVG9FeGNlcHRpb24oc3RhdHVzLCAiSW5pdGlhbGl6YXRpb24gZmFpbGVkIiwgbWVzc2FnZVN0YWNrLCBwdkVycm9yKTsKICAgICAgICAgICAgICBjYXNlIDExODoKICAgICAgICAgICAgICAgIG9iamVjdEFkZHJlc3MgPSBtZW1vcnlCdWZmZXJWaWV3LmdldEludDMyKG9iamVjdEFkZHJlc3NBZGRyZXNzLCB0cnVlKTsKICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMTIxOwogICAgICAgICAgICAgICAgcmV0dXJuIHB2X2ZyZWUob2JqZWN0QWRkcmVzc0FkZHJlc3MpOwogICAgICAgICAgICAgIGNhc2UgMTIxOgogICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxMjM7CiAgICAgICAgICAgICAgICByZXR1cm4gcHZfc2FtcGxlX3JhdGUoKTsKICAgICAgICAgICAgICBjYXNlIDEyMzoKICAgICAgICAgICAgICAgIHNhbXBsZVJhdGUgPSBfY29udGV4dDguc2VudDsKICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMTI2OwogICAgICAgICAgICAgICAgcmV0dXJuIHB2X3BvcmN1cGluZV9mcmFtZV9sZW5ndGgoKTsKICAgICAgICAgICAgICBjYXNlIDEyNjoKICAgICAgICAgICAgICAgIGZyYW1lTGVuZ3RoID0gX2NvbnRleHQ4LnNlbnQ7CiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDEyOTsKICAgICAgICAgICAgICAgIHJldHVybiBwdl9wb3JjdXBpbmVfdmVyc2lvbigpOwogICAgICAgICAgICAgIGNhc2UgMTI5OgogICAgICAgICAgICAgICAgdmVyc2lvbkFkZHJlc3MgPSBfY29udGV4dDguc2VudDsKICAgICAgICAgICAgICAgIHZlcnNpb24gPSBhcnJheUJ1ZmZlclRvU3RyaW5nQXRJbmRleChtZW1vcnlCdWZmZXJVaW50OCwgdmVyc2lvbkFkZHJlc3MpOwogICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxMzM7CiAgICAgICAgICAgICAgICByZXR1cm4gYWxpZ25lZF9hbGxvYyhJbnQxNkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCBmcmFtZUxlbmd0aCAqIEludDE2QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpOwogICAgICAgICAgICAgIGNhc2UgMTMzOgogICAgICAgICAgICAgICAgaW5wdXRCdWZmZXJBZGRyZXNzID0gX2NvbnRleHQ4LnNlbnQ7CiAgICAgICAgICAgICAgICBpZiAoIShpbnB1dEJ1ZmZlckFkZHJlc3MgPT09IDApKSB7CiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMTM2OwogICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHRocm93IG5ldyBQb3JjdXBpbmVPdXRPZk1lbW9yeUVycm9yKCdtYWxsb2MgZmFpbGVkOiBDYW5ub3QgYWxsb2NhdGUgbWVtb3J5Jyk7CiAgICAgICAgICAgICAgY2FzZSAxMzY6CiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmFicnVwdCgicmV0dXJuIiwgewogICAgICAgICAgICAgICAgICBhbGlnbmVkX2FsbG9jOiBhbGlnbmVkX2FsbG9jLAogICAgICAgICAgICAgICAgICBtZW1vcnk6IG1lbW9yeSwKICAgICAgICAgICAgICAgICAgcHZGcmVlOiBwdl9mcmVlLAogICAgICAgICAgICAgICAgICBmcmFtZUxlbmd0aDogZnJhbWVMZW5ndGgsCiAgICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IHNhbXBsZVJhdGUsCiAgICAgICAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sCiAgICAgICAgICAgICAgICAgIGlucHV0QnVmZmVyQWRkcmVzczogaW5wdXRCdWZmZXJBZGRyZXNzLAogICAgICAgICAgICAgICAgICBrZXl3b3JkSW5kZXhBZGRyZXNzOiBrZXl3b3JkSW5kZXhBZGRyZXNzLAogICAgICAgICAgICAgICAgICBvYmplY3RBZGRyZXNzOiBvYmplY3RBZGRyZXNzLAogICAgICAgICAgICAgICAgICBtZXNzYWdlU3RhY2tBZGRyZXNzQWRkcmVzc0FkZHJlc3M6IG1lc3NhZ2VTdGFja0FkZHJlc3NBZGRyZXNzQWRkcmVzcywKICAgICAgICAgICAgICAgICAgbWVzc2FnZVN0YWNrRGVwdGhBZGRyZXNzOiBtZXNzYWdlU3RhY2tEZXB0aEFkZHJlc3MsCiAgICAgICAgICAgICAgICAgIHB2UG9yY3VwaW5lRGVsZXRlOiBwdl9wb3JjdXBpbmVfZGVsZXRlLAogICAgICAgICAgICAgICAgICBwdlBvcmN1cGluZVByb2Nlc3M6IHB2X3BvcmN1cGluZV9wcm9jZXNzLAogICAgICAgICAgICAgICAgICBwdkdldEVycm9yU3RhY2s6IHB2X2dldF9lcnJvcl9zdGFjaywKICAgICAgICAgICAgICAgICAgcHZGcmVlRXJyb3JTdGFjazogcHZfZnJlZV9lcnJvcl9zdGFjawogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgY2FzZSAxMzc6CiAgICAgICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDguc3RvcCgpOwogICAgICAgICAgICB9CiAgICAgICAgICB9LCBfY2FsbGVlOCwgdGhpcywgW1s0NiwgNjMsIDY2LCA2OV1dKTsKICAgICAgICB9KSk7CiAgICAgICAgZnVuY3Rpb24gaW5pdFdhc20oX3gxMywgX3gxNCwgX3gxNSwgX3gxNiwgX3gxNykgewogICAgICAgICAgcmV0dXJuIF9pbml0V2FzbS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgIH0KICAgICAgICByZXR1cm4gaW5pdFdhc207CiAgICAgIH0oKQogICAgfSwgewogICAgICBrZXk6ICJnZXRNZXNzYWdlU3RhY2siLAogICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgIHZhciBfZ2V0TWVzc2FnZVN0YWNrID0gX2FzeW5jVG9HZW5lcmF0b3IkMSggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlOShwdl9nZXRfZXJyb3Jfc3RhY2ssIHB2X2ZyZWVfZXJyb3Jfc3RhY2ssIG1lc3NhZ2VTdGFja0FkZHJlc3NBZGRyZXNzQWRkcmVzcywgbWVzc2FnZVN0YWNrRGVwdGhBZGRyZXNzLCBtZW1vcnlCdWZmZXJWaWV3LCBtZW1vcnlCdWZmZXJVaW50OCkgewogICAgICAgICAgdmFyIHN0YXR1cywgbWVzc2FnZVN0YWNrQWRkcmVzc0FkZHJlc3MsIG1lc3NhZ2VTdGFja0RlcHRoLCBtZXNzYWdlU3RhY2ssIGksIG1lc3NhZ2VTdGFja0FkZHJlc3MsIG1lc3NhZ2U7CiAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU5JChfY29udGV4dDkpIHsKICAgICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQ5LnByZXYgPSBfY29udGV4dDkubmV4dCkgewogICAgICAgICAgICAgIGNhc2UgMDoKICAgICAgICAgICAgICAgIF9jb250ZXh0OS5uZXh0ID0gMjsKICAgICAgICAgICAgICAgIHJldHVybiBwdl9nZXRfZXJyb3Jfc3RhY2sobWVzc2FnZVN0YWNrQWRkcmVzc0FkZHJlc3NBZGRyZXNzLCBtZXNzYWdlU3RhY2tEZXB0aEFkZHJlc3MpOwogICAgICAgICAgICAgIGNhc2UgMjoKICAgICAgICAgICAgICAgIHN0YXR1cyA9IF9jb250ZXh0OS5zZW50OwogICAgICAgICAgICAgICAgaWYgKCEoc3RhdHVzICE9PSBQdlN0YXR1cy5TVUNDRVNTKSkgewogICAgICAgICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDU7CiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGhyb3cgcHZTdGF0dXNUb0V4Y2VwdGlvbihzdGF0dXMsICJVbmFibGUgdG8gZ2V0IFBvcmN1cGluZSBlcnJvciBzdGF0ZSIpOwogICAgICAgICAgICAgIGNhc2UgNToKICAgICAgICAgICAgICAgIG1lc3NhZ2VTdGFja0FkZHJlc3NBZGRyZXNzID0gbWVtb3J5QnVmZmVyVmlldy5nZXRJbnQzMihtZXNzYWdlU3RhY2tBZGRyZXNzQWRkcmVzc0FkZHJlc3MsIHRydWUpOwogICAgICAgICAgICAgICAgbWVzc2FnZVN0YWNrRGVwdGggPSBtZW1vcnlCdWZmZXJWaWV3LmdldEludDMyKG1lc3NhZ2VTdGFja0RlcHRoQWRkcmVzcywgdHJ1ZSk7CiAgICAgICAgICAgICAgICBtZXNzYWdlU3RhY2sgPSBbXTsKICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtZXNzYWdlU3RhY2tEZXB0aDsgaSsrKSB7CiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VTdGFja0FkZHJlc3MgPSBtZW1vcnlCdWZmZXJWaWV3LmdldEludDMyKG1lc3NhZ2VTdGFja0FkZHJlc3NBZGRyZXNzICsgaSAqIEludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIHRydWUpOwogICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYXJyYXlCdWZmZXJUb1N0cmluZ0F0SW5kZXgobWVtb3J5QnVmZmVyVWludDgsIG1lc3NhZ2VTdGFja0FkZHJlc3MpOwogICAgICAgICAgICAgICAgICBtZXNzYWdlU3RhY2sucHVzaChtZXNzYWdlKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIF9jb250ZXh0OS5uZXh0ID0gMTE7CiAgICAgICAgICAgICAgICByZXR1cm4gcHZfZnJlZV9lcnJvcl9zdGFjayhtZXNzYWdlU3RhY2tBZGRyZXNzQWRkcmVzcyk7CiAgICAgICAgICAgICAgY2FzZSAxMToKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuYWJydXB0KCJyZXR1cm4iLCBtZXNzYWdlU3RhY2spOwogICAgICAgICAgICAgIGNhc2UgMTI6CiAgICAgICAgICAgICAgY2FzZSAiZW5kIjoKICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuc3RvcCgpOwogICAgICAgICAgICB9CiAgICAgICAgICB9LCBfY2FsbGVlOSk7CiAgICAgICAgfSkpOwogICAgICAgIGZ1bmN0aW9uIGdldE1lc3NhZ2VTdGFjayhfeDE4LCBfeDE5LCBfeDIwLCBfeDIxLCBfeDIyLCBfeDIzKSB7CiAgICAgICAgICByZXR1cm4gX2dldE1lc3NhZ2VTdGFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgIH0KICAgICAgICByZXR1cm4gZ2V0TWVzc2FnZVN0YWNrOwogICAgICB9KCkKICAgIH1dKTsKICAgIHJldHVybiBQb3JjdXBpbmU7CiAgfSgpOwogIF9kZWZpbmVQcm9wZXJ0eSQxKFBvcmN1cGluZSwgIl9mcmFtZUxlbmd0aCIsIHZvaWQgMCk7CiAgX2RlZmluZVByb3BlcnR5JDEoUG9yY3VwaW5lLCAiX3NhbXBsZVJhdGUiLCB2b2lkIDApOwogIF9kZWZpbmVQcm9wZXJ0eSQxKFBvcmN1cGluZSwgIl92ZXJzaW9uIiwgdm9pZCAwKTsKICBfZGVmaW5lUHJvcGVydHkkMShQb3JjdXBpbmUsICJfd2FzbSIsIHZvaWQgMCk7CiAgX2RlZmluZVByb3BlcnR5JDEoUG9yY3VwaW5lLCAiX3dhc21TaW1kIiwgdm9pZCAwKTsKICBfZGVmaW5lUHJvcGVydHkkMShQb3JjdXBpbmUsICJfc2RrIiwgIndlYiIpOwogIF9kZWZpbmVQcm9wZXJ0eSQxKFBvcmN1cGluZSwgIl9wb3JjdXBpbmVNdXRleCIsIG5ldyBNdXRleCgpKTsKCiAgZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9CiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZChlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgX2RlZmluZVByb3BlcnR5JDEoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9CiAgdmFyIHBvcmN1cGluZSA9IG51bGw7CiAgdmFyIGtleXdvcmREZXRlY3Rpb25DYWxsYmFjayA9IGZ1bmN0aW9uIGtleXdvcmREZXRlY3Rpb25DYWxsYmFjayhwb3JjdXBpbmVEZXRlY3Rpb24pIHsKICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICBjb21tYW5kOiAnb2snLAogICAgICBwb3JjdXBpbmVEZXRlY3Rpb246IHBvcmN1cGluZURldGVjdGlvbgogICAgfSk7CiAgfTsKICB2YXIgcHJvY2Vzc0Vycm9yQ2FsbGJhY2sgPSBmdW5jdGlvbiBwcm9jZXNzRXJyb3JDYWxsYmFjayhlcnJvcikgewogICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgIGNvbW1hbmQ6ICdlcnJvcicsCiAgICAgIHN0YXR1czogZXJyb3Iuc3RhdHVzLAogICAgICBzaG9ydE1lc3NhZ2U6IGVycm9yLnNob3J0TWVzc2FnZSwKICAgICAgbWVzc2FnZVN0YWNrOiBlcnJvci5tZXNzYWdlU3RhY2sKICAgIH0pOwogIH07CiAgLyoqDQogICAqIFBvcmN1cGluZSB3b3JrZXIgaGFuZGxlci4NCiAgICovCiAgc2VsZi5vbm1lc3NhZ2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciQxKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZXZlbnQpIHsKICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkgewogICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7CiAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgIF9jb250ZXh0LnQwID0gZXZlbnQuZGF0YS5jb21tYW5kOwogICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gX2NvbnRleHQudDAgPT09ICdpbml0JyA/IDMgOiBfY29udGV4dC50MCA9PT0gJ3Byb2Nlc3MnID8gMjAgOiBfY29udGV4dC50MCA9PT0gJ3JlbGVhc2UnID8gMjYgOiAzMzsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDM6CiAgICAgICAgICAgIGlmICghKHBvcmN1cGluZSAhPT0gbnVsbCkpIHsKICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICBjb21tYW5kOiAnZXJyb3InLAogICAgICAgICAgICAgIHN0YXR1czogUHZTdGF0dXMuSU5WQUxJRF9TVEFURSwKICAgICAgICAgICAgICBzaG9ydE1lc3NhZ2U6ICdQb3JjdXBpbmUgYWxyZWFkeSBpbml0aWFsaXplZCcKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoInJldHVybiIpOwogICAgICAgICAgY2FzZSA2OgogICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gNjsKICAgICAgICAgICAgUG9yY3VwaW5lLnNldFdhc20oZXZlbnQuZGF0YS53YXNtKTsKICAgICAgICAgICAgUG9yY3VwaW5lLnNldFdhc21TaW1kKGV2ZW50LmRhdGEud2FzbVNpbWQpOwogICAgICAgICAgICBQb3JjdXBpbmUuc2V0U2RrKGV2ZW50LmRhdGEuc2RrKTsKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEyOwogICAgICAgICAgICByZXR1cm4gUG9yY3VwaW5lLl9pbml0KGV2ZW50LmRhdGEuYWNjZXNzS2V5LCBldmVudC5kYXRhLmtleXdvcmRQYXRocywgZXZlbnQuZGF0YS5rZXl3b3JkTGFiZWxzLCBrZXl3b3JkRGV0ZWN0aW9uQ2FsbGJhY2ssIGV2ZW50LmRhdGEuc2Vuc2l0aXZpdGllcywgZXZlbnQuZGF0YS5tb2RlbFBhdGgsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZXZlbnQuZGF0YS5vcHRpb25zKSwge30sIHsKICAgICAgICAgICAgICBwcm9jZXNzRXJyb3JDYWxsYmFjazogcHJvY2Vzc0Vycm9yQ2FsbGJhY2sKICAgICAgICAgICAgfSkpOwogICAgICAgICAgY2FzZSAxMjoKICAgICAgICAgICAgcG9yY3VwaW5lID0gX2NvbnRleHQuc2VudDsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgY29tbWFuZDogJ29rJywKICAgICAgICAgICAgICB2ZXJzaW9uOiBwb3JjdXBpbmUudmVyc2lvbiwKICAgICAgICAgICAgICBmcmFtZUxlbmd0aDogcG9yY3VwaW5lLmZyYW1lTGVuZ3RoLAogICAgICAgICAgICAgIHNhbXBsZVJhdGU6IHBvcmN1cGluZS5zYW1wbGVSYXRlCiAgICAgICAgICAgIH0pOwogICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTk7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAxNjoKICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE2OwogICAgICAgICAgICBfY29udGV4dC50MSA9IF9jb250ZXh0WyJjYXRjaCJdKDYpOwogICAgICAgICAgICBpZiAoX2NvbnRleHQudDEgaW5zdGFuY2VvZiBQb3JjdXBpbmVFcnJvcikgewogICAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgICAgY29tbWFuZDogJ2Vycm9yJywKICAgICAgICAgICAgICAgIHN0YXR1czogX2NvbnRleHQudDEuc3RhdHVzLAogICAgICAgICAgICAgICAgc2hvcnRNZXNzYWdlOiBfY29udGV4dC50MS5zaG9ydE1lc3NhZ2UsCiAgICAgICAgICAgICAgICBtZXNzYWdlU3RhY2s6IF9jb250ZXh0LnQxLm1lc3NhZ2VTdGFjawogICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgICAgY29tbWFuZDogJ2Vycm9yJywKICAgICAgICAgICAgICAgIHN0YXR1czogUHZTdGF0dXMuUlVOVElNRV9FUlJPUiwKICAgICAgICAgICAgICAgIHNob3J0TWVzc2FnZTogX2NvbnRleHQudDEubWVzc2FnZQogICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9CiAgICAgICAgICBjYXNlIDE5OgogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCJicmVhayIsIDM0KTsKICAgICAgICAgIGNhc2UgMjA6CiAgICAgICAgICAgIGlmICghKHBvcmN1cGluZSA9PT0gbnVsbCkpIHsKICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjM7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgY29tbWFuZDogJ2Vycm9yJywKICAgICAgICAgICAgICBzdGF0dXM6IFB2U3RhdHVzLklOVkFMSURfU1RBVEUsCiAgICAgICAgICAgICAgc2hvcnRNZXNzYWdlOiAnUG9yY3VwaW5lIG5vdCBpbml0aWFsaXplZCcKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoInJldHVybiIpOwogICAgICAgICAgY2FzZSAyMzoKICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI1OwogICAgICAgICAgICByZXR1cm4gcG9yY3VwaW5lLnByb2Nlc3MoZXZlbnQuZGF0YS5pbnB1dEZyYW1lKTsKICAgICAgICAgIGNhc2UgMjU6CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoImJyZWFrIiwgMzQpOwogICAgICAgICAgY2FzZSAyNjoKICAgICAgICAgICAgaWYgKCEocG9yY3VwaW5lICE9PSBudWxsKSkgewogICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzMTsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjk7CiAgICAgICAgICAgIHJldHVybiBwb3JjdXBpbmUucmVsZWFzZSgpOwogICAgICAgICAgY2FzZSAyOToKICAgICAgICAgICAgcG9yY3VwaW5lID0gbnVsbDsKICAgICAgICAgICAgY2xvc2UoKTsKICAgICAgICAgIGNhc2UgMzE6CiAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgIGNvbW1hbmQ6ICdvaycKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoImJyZWFrIiwgMzQpOwogICAgICAgICAgY2FzZSAzMzoKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgY29tbWFuZDogJ2ZhaWxlZCcsCiAgICAgICAgICAgICAgc3RhdHVzOiBQdlN0YXR1cy5SVU5USU1FX0VSUk9SLAogICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUKICAgICAgICAgICAgICBzaG9ydE1lc3NhZ2U6ICJVbnJlY29nbml6ZWQgY29tbWFuZDogIi5jb25jYXQoZXZlbnQuZGF0YS5jb21tYW5kKQogICAgICAgICAgICB9KTsKICAgICAgICAgIGNhc2UgMzQ6CiAgICAgICAgICBjYXNlICJlbmQiOgogICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpOwogICAgICAgIH0KICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1s2LCAxNl1dKTsKICAgIH0pKTsKICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHsKICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgIH07CiAgfSgpOwoKfSkoKTsKCg==', null, false);
  /* eslint-enable */

  var _excluded = ["processErrorCallback"];
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var PorcupineWorker = /*#__PURE__*/function () {
    function PorcupineWorker(worker, version, frameLength, sampleRate) {
      _classCallCheck$1(this, PorcupineWorker);
      _defineProperty$1(this, "_worker", void 0);
      _defineProperty$1(this, "_version", void 0);
      _defineProperty$1(this, "_frameLength", void 0);
      _defineProperty$1(this, "_sampleRate", void 0);
      this._worker = worker;
      this._version = version;
      this._frameLength = frameLength;
      this._sampleRate = sampleRate;
    }
    /**
     * Get Porcupine engine version.
     */
    _createClass$1(PorcupineWorker, [{
      key: "version",
      get: function get() {
        return this._version;
      }
      /**
       * Get Porcupine frame length.
       */
    }, {
      key: "frameLength",
      get: function get() {
        return this._frameLength;
      }
      /**
       * Get sample rate.
       */
    }, {
      key: "sampleRate",
      get: function get() {
        return this._sampleRate;
      }
      /**
       * Get Porcupine worker instance.
       */
    }, {
      key: "worker",
      get: function get() {
        return this._worker;
      }
      /**
       * Creates an instance of the Porcupine wake word engine using either
       * a '.pv' file in public directory or a base64'd string.
       * The model size is large, hence it will try to use the existing one
       * if it exists, otherwise saves the model in storage.
       *
       * @param accessKey AccessKey generated by Picovoice Console.
       * @param keywords - Built-in or Base64
       * representations of keywords and their sensitivities.
       * Can be provided as an array or a single keyword.
       * @param keywordDetectionCallback - User-defined callback invoked upon detection of the wake phrase.
       * The only input argument is the index of detected keyword (phrase).
       * @param model object containing a base64 string
       * representation of or path to public binary of a Porcupine parameter model used to initialize Porcupine.
       * @param model.base64 The model in base64 string to initialize Leopard.
       * @param model.publicPath The model path relative to the public directory.
       * @param model.customWritePath Custom path to save the model in storage.
       * Set to a different name to use multiple models across `Porcupine` instances.
       * @param model.forceWrite Flag to overwrite the model in storage even if it exists.
       * @param model.version Leopard model version. Set to a higher number to update the model file.
       * @param options Optional configuration arguments.
       * @param options.processErrorCallback User-defined callback invoked if any error happens
       * while processing the audio stream. Its only input argument is the error message.
       *
       * @returns An instance of PorcupineWorker.
       */
    }, {
      key: "process",
      value:
      /**
       * Processes a frame of audio in a worker.
       * The transcript result will be supplied with the callback provided when initializing the worker either
       * by 'fromBase64' or 'fromPublicDirectory'.
       * Can also send a message directly using 'this.worker.postMessage({command: "process", pcm: [...]})'.
       *
       * @param pcm A frame of audio sample.
       */
      function process(pcm) {
        this._worker.postMessage({
          command: 'process',
          inputFrame: pcm
        });
      }
      /**
       * Releases resources acquired by WebAssembly module.
       */
    }, {
      key: "release",
      value: function release() {
        var _this = this;
        var returnPromise = new Promise(function (resolve, reject) {
          _this._worker.onmessage = function (event) {
            switch (event.data.command) {
              case 'ok':
                resolve();
                break;
              case 'failed':
              case 'error':
                var error = pvStatusToException(event.data.status, event.data.shortMessage, event.data.messageStack);
                reject(error);
                break;
              default:
                // @ts-ignore
                reject(pvStatusToException(PvStatus.RUNTIME_ERROR, "Unrecognized command: ".concat(event.data.command)));
            }
          };
        });
        this._worker.postMessage({
          command: 'release'
        });
        return returnPromise;
      }
      /**
       * Terminates the active worker. Stops all requests being handled by worker.
       */
    }, {
      key: "terminate",
      value: function terminate() {
        this._worker.terminate();
      }
    }], [{
      key: "create",
      value: function () {
        var _create = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(accessKey, keywords, keywordDetectionCallback, model) {
          var _this2 = this;
          var options,
            _yield$keywordsProces,
            _yield$keywordsProces2,
            keywordPaths,
            keywordLabels,
            sensitivities,
            customWritePath,
            modelPath,
            processErrorCallback,
            workerOptions,
            worker,
            returnPromise,
            _args = arguments;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};
                _context.next = 3;
                return keywordsProcess(keywords);
              case 3:
                _yield$keywordsProces = _context.sent;
                _yield$keywordsProces2 = _slicedToArray(_yield$keywordsProces, 3);
                keywordPaths = _yield$keywordsProces2[0];
                keywordLabels = _yield$keywordsProces2[1];
                sensitivities = _yield$keywordsProces2[2];
                customWritePath = model.customWritePath ? model.customWritePath : 'porcupine_model';
                _context.next = 11;
                return loadModel(_objectSpread(_objectSpread({}, model), {}, {
                  customWritePath: customWritePath
                }));
              case 11:
                modelPath = _context.sent;
                processErrorCallback = options.processErrorCallback, workerOptions = _objectWithoutProperties(options, _excluded);
                worker = new WorkerFactory();
                returnPromise = new Promise(function (resolve, reject) {
                  // @ts-ignore - block from GC
                  _this2.worker = worker;
                  worker.onmessage = function (event) {
                    switch (event.data.command) {
                      case 'ok':
                        worker.onmessage = function (ev) {
                          switch (ev.data.command) {
                            case 'ok':
                              keywordDetectionCallback(ev.data.porcupineDetection);
                              break;
                            case 'failed':
                            case 'error':
                              var _error = pvStatusToException(ev.data.status, ev.data.shortMessage, ev.data.messageStack);
                              if (processErrorCallback) {
                                processErrorCallback(_error);
                              } else {
                                // eslint-disable-next-line no-console
                                console.error(_error);
                              }
                              break;
                            default:
                              // @ts-ignore
                              processErrorCallback(pvStatusToException(PvStatus.RUNTIME_ERROR, "Unrecognized command: ".concat(event.data.command)));
                          }
                        };
                        resolve(new PorcupineWorker(worker, event.data.version, event.data.frameLength, event.data.sampleRate));
                        break;
                      case 'failed':
                      case 'error':
                        var error = pvStatusToException(event.data.status, event.data.shortMessage, event.data.messageStack);
                        reject(error);
                        break;
                      default:
                        // @ts-ignore
                        reject(pvStatusToException(PvStatus.RUNTIME_ERROR, "Unrecognized command: ".concat(event.data.command)));
                    }
                  };
                });
                worker.postMessage({
                  command: 'init',
                  accessKey: accessKey,
                  modelPath: modelPath,
                  keywordPaths: keywordPaths,
                  keywordLabels: keywordLabels,
                  sensitivities: sensitivities,
                  wasm: this._wasm,
                  wasmSimd: this._wasmSimd,
                  sdk: this._sdk,
                  options: workerOptions
                });
                return _context.abrupt("return", returnPromise);
              case 17:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function create(_x, _x2, _x3, _x4) {
          return _create.apply(this, arguments);
        }
        return create;
      }()
      /**
       * Set base64 wasm file.
       * @param wasm Base64'd wasm file to use to initialize wasm.
       */
    }, {
      key: "setWasm",
      value: function setWasm(wasm) {
        if (this._wasm === undefined) {
          this._wasm = wasm;
        }
      }
      /**
       * Set base64 wasm file with SIMD feature.
       * @param wasmSimd Base64'd wasm file to use to initialize wasm.
       */
    }, {
      key: "setWasmSimd",
      value: function setWasmSimd(wasmSimd) {
        if (this._wasmSimd === undefined) {
          this._wasmSimd = wasmSimd;
        }
      }
    }, {
      key: "setSdk",
      value: function setSdk(sdk) {
        PorcupineWorker._sdk = sdk;
      }
    }]);
    return PorcupineWorker;
  }();
  _defineProperty$1(PorcupineWorker, "_wasm", void 0);
  _defineProperty$1(PorcupineWorker, "_wasmSimd", void 0);
  _defineProperty$1(PorcupineWorker, "_sdk", "web");

  var porcupineWasm = "AGFzbQEAAAABowEYYAF/AGADf39/AX9gAX8Bf2ACf38Bf2AEf39/fwF/YAABf2ACf38AYAN/fn8BfmAAAGADf39/AGAEf39/fwBgBX9/f39/AX9gBX9/f39/AGACfH8BfGAIf39/f39/f38Bf2AAAXxgCX9/f39/f39/fwBgBH9+f38Bf2ACf34AYAN/f38BfGACf38BfmACfHwBfGADf398AX9gBn9/f39/fwF/AoIDDwNlbnYTcHZfY29uc29sZV9sb2dfd2FzbQAAA2Vudgxwdl90aW1lX3dhc20ADwNlbnYScHZfZ2V0X29yaWdpbl9pbmZvAAADZW52E3B2X2dldF9icm93c2VyX2luZm8AAANlbnYVcHZfaHR0cHNfcmVxdWVzdF93YXNtABAWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQhmZF9jbG9zZQACFndhc2lfc25hcHNob3RfcHJldmlldzEHZmRfc2VlawARFndhc2lfc25hcHNob3RfcHJldmlldzEIZmRfd3JpdGUABANlbnYRcHZfZmlsZV9vcGVuX3dhc20ACgNlbnYScHZfZmlsZV9jbG9zZV93YXNtAAYDZW52EXB2X2ZpbGVfcmVhZF93YXNtAAwDZW52EXB2X2ZpbGVfc2Vla193YXNtAAoDZW52EXB2X2ZpbGVfdGVsbF93YXNtAAYDZW52EnB2X2ZpbGVfd3JpdGVfd2FzbQAMA2VudgZtZW1vcnkCAAIDbm0CAgAAAwMGAgIHAQECAgEEAQsJCQgEARICExQBAwEBAwYCAQEDAwAFFQ0NCAEAAAUJAA4BAAMAAwAECwEEBAEKCQAGAAsBFgIAAwMEAwMAAwMDAwIEAQIBAAIFFwEFAAIICAIFBQADAAMACAAFBAUBcAELCwYSA38BQeCUBQt/AUEAC38BQQALB7EDFxNwdl9wb3JjdXBpbmVfZGVsZXRlAGYTcHZfc3RhdHVzX3RvX3N0cmluZwBnFHB2X3BvcmN1cGluZV92ZXJzaW9uAGgRcHZfcG9yY3VwaW5lX2luaXQAaRRwdl9wb3JjdXBpbmVfcHJvY2VzcwBqGXB2X3BvcmN1cGluZV9mcmFtZV9sZW5ndGgAawRmcmVlAGwGbWFsbG9jAG0NcHZfbG9nX2VuYWJsZQBuDnB2X2xvZ19kaXNhYmxlAG8PcHZfc2V0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BGs2AgAjAigCACgCACEBCwJAQQEjASMBBH9BAAUgACkDYCAAKAIEIgQgACgCKCICa6x8IQogACkDWCILUAsbRSAKIAtZcUUEQCABQQAjARtFBEACfyAAIQEjAUECRgRAIwIjAigCAEEUazYCACMCKAIAIgMoAgAhASADKAIEIQYgAygCDCEHIAMoAhAhCCADKAIIIQULAn8jAUECRgRAIwIjAigCAEEEazYCACMCKAIAKAIAIQkLIwFFBEAjAEEQayIHJABBfyEGCyAJQQAjARtFBEAgARAWIQNBACMBQQFGDQEaIAMhBQsCQCMBRQRAIAUNASABKAIcIQggB0EPaiEFCyAJQQFGQQEjARsEQCABIAVBASAIEQEAIQNBASMBQQFGDQIaIAMhAQsjAUUEQCABQQFHDQEgBy0ADyEGCwsjAUUEQCAHQRBqJAAgBgwCCwALIQMjAigCACADNgIAIwIjAigCAEEEajYCACMCKAIAIgMgATYCACADIAY2AgQgAyAFNgIIIAMgBzYCDCADIAg2AhAjAiMCKAIAQRRqNgIAQQALIQFBACMBQQFGDQMaIAEhAgsjAQR/IAIFIAJBAE4NAiAAKAIEIQQgACgCKAshAgsjAUUEQCAAQn83A1ggACAENgJUIAAgCiACIARrrHw3A2BBfw8LCyMBRQRAIApCAXwhCiAAKAIEIQQgACgCCCEBAkAgACkDWCILUA0AIAsgCn0iCyABIARrrFkNACALpyAEaiEBCyAAIAE2AlQgACAKIAAoAigiASAEa6x8NwNgIAEgBE8EQCAEQQFrIAI6AAALIAIPCwALIQEjAigCACABNgIAIwIjAigCAEEEajYCACMCKAIAIgEgADYCACABIAQ2AgQgASACNgIIIAEgCjcCDCMCIwIoAgBBFGo2AgBBAAvjPAMefwR8B34jAUECRgRAIwIjAigCAEHsAGs2AgAjAigCACIDKAIAIQAgAygCCCECIAMoAgwhBCADKAIQIQUgAygCFCEHIAMoAhghCCADKwIcISEgAygCJCEJIAMoAighCyADKQIsISUgAygCNCEMIAMoAjghDiADKAI8IRAgAygCQCERIAMpAkQhKCADKAJMIRIgAygCUCETIAMoAlQhFiADKAJYIRQgAykCXCEqIAMoAmQhHyADKAJoIR0gAygCBCEBCwJ/IwFBAkYEQCMC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hiICUA0AIAC9IgVCNIinQf8PcSIGQf8PRw0BCyAAIAGiIgEgAaMPCyAFQgGGIgMgAlgEQCAARAAAAAAAAAAAoiAAIAIgA1EbDwsgBEI0iKdB/w9xIQcCfiAGRQRAQQAhBiAFQgyGIgJCAFkEQANAIAZBAWshBiACQgGGIgJCAFkNAAsLIAVBASAGa62GDAELIAVC/////////weDQoCAgICAgIAIhAshAgJ+IAdFBEBBACEHIARCDIYiA0IAWQRAA0AgB0EBayEHIANCAYYiA0IAWQ0ACwsgBEEBIAdrrYYMAQsgBEL/////////B4NCgICAgICAgAiECyEEIAYgB0oEQANAAkAgAiAEfSIDQgBTDQAgAyICQgBSDQAgAEQAAAAAAAAAAKIPCyACQgGGIQIgBkEBayIGIAdKDQALIAchBgsCQCACIAR9IgNCAFMNACADIgJCAFINACAARAAAAAAAAAAAog8LAkAgAkL/////////B1YEQCACIQMMAQsDQCAGQQFrIQYgAkKAgICAgICABFQhByACQgGGIgMhAiAHDQALCyAFQoCAgICAgICAgH+DIQIgBkEASgR+IANCgICAgICAgAh9IAatQjSGhAUgA0EBIAZrrYgLIAKEvwuFAQIBfwF+IAC9IgNCNIinQf8PcSICQf8PRwR8IAJFBEAgAEQAAAAAAAAAAGEEQCABQQA2AgAgAA8LIABEAAAAAAAA8EOiIAEQNyEAIAEgASgCAEFAajYCACAADwsgASACQf4HazYCACADQv////////+HgH+DQoCAgICAgIDwP4S/BSAACwuoAQACQCABQYAITgRAIABEAAAAAAAA4H+iIQAgAUH/D0kEQCABQf8HayEBDAILIABEAAAAAAAA4H+iIQAgAUH9FyABQf0XSRtB/g9rIQEMAQsgAUGBeEoNACAARAAAAAAAAGADoiEAIAFBuHBLBEAgAUHJB2ohAQwBCyAARAAAAAAAAGADoiEAIAFB8GggAUHwaEsbQZIPaiEBCyAAIAFB/wdqrUI0hr+iC/0HAgZ/An4CfyMBQQJGBH8jAiMCKAIAQQRrNgIAIwIoAgAoAgAFQQALQQAjARtFBEAjAUECRgRAIwIjAigCAEEYazYCACMCKAIAIgIoAgAhACACKAIEIQEgAigCECEDIAIoAhQhBSACKQIIIQYLAkACfyMB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AgAgA0EEaiABQQRqKAIANgIAIANBCGogAUEIaigCADYCACADQQxqIAFBDGooAgA2AgAgA0EQaiABQRBqKAIANgIAIANBFGogAUEUaigCADYCACADQRhqIAFBGGooAgA2AgAgA0EcaiABQRxqKAIANgIAIANBIGohAyABQSBqIQEgBEEgayIEQQNLDQALCyAERQ0AIARBAWshBSAEQQdxIgIEQANAIAMgAS0AADoAACAEQQFrIQQgA0EBaiEDIAFBAWohASACQQFrIgINAAsLIAVBB0kNAANAIAMgAS0AADoAACADQQFqIAFBAWotAAA6AAAgA0ECaiABQQJqLQAAOgAAIANBA2ogAUEDai0AADoAACADQQRqIAFBBGotAAA6AAAgA0EFaiABQQVqLQAAOgAAIANBBmogAUEGai0AADoAACADQQdqIAFBB2otAAA6AAAgA0EIaiEDIAFBCGohASAEQQhrIgQNAAsLIAALiwIBBH8gAARAIAAoAiQiAQRAIAEQEQsgACgCIBA8IAAoAgQiAUEASgRAIAFBAWohBCABQQJ0QQRrIQEDQAJAIAAoAhAiAkUNAAJAIAEgAmooAgAiA0UNACADKAIAIgNFDQAgAxARIAAoAhAhAgsgASACaigCACICRQ0AIAIQEQsCQCAAKAIMIgJFDQAgASACaigCACICRQ0AIAIQEQsgAUEEayEBIARBAWsiBEEBSw0ACwsgACgCHCIBBEAgARARCyAAKAIYIgEEQCABEBELIAAoAhQiAQRAIAEQEQsgACgCECIBBEAgARARCyAAKAIMIgEEQCABEBELIAAoAggiAQRAIAEQEQsgABARCwvRAwEHfyAABEAgACgCOCIBBEAgARARCwJAIAAoAigiA0UNACAAKAIUIgFBAEoEQCABQQJ0QQRrIQQDfyADIARqKAIAIgMEQCADEBELIAFBAkgEfyAAKAIoBSABQQFrIQEgBEEEayEEIAAoAighAwwBCwshAwsgA0UNACADEBELAkAgACgCJCICRQ0AIAAoAhQiBUEASgRAA0ACQCAFQQFrIgdBAnQiBiACaigCACIBRQ0AAkAgBiAAKAIYaigCACIEQQBMDQAgBEECdEEEayEDA0AgASADaigCACIBBEAgASgCGCICBEAgAhARCyABKAIUIgIEQCACEBELIAEoAhAiAgRAIAIQEQsg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CwtCgICAgICAgIDAACAzfyIzQv////8HUyEDIDNC/////wcgAxsiM0KAgICAeFUhAyAzQoCAgIB4IAMbITMCQCANRQRAQQAhBQwBCyAKQQFxIQkgCkF+cSEGQQAhBSAXIQMDQCAzIAM0AgB+QoCAgIAEfEIfhyI0Qv////8HUyEEIAMgNEL/////ByAEGz4CACAzIANBBGoiBDQCAH5CgICAgAR8Qh+HIjRC/////wdTIQggBCA0Qv////8HIAgbPgIAIANBCGohAyAGIAVBAmoiBUcNAAsgCUUNAQsgMyAXIAVBAnRqIgM0AgB+QoCAgIAEfEIfhyIzQv////8HUyEEIAMgM0L/////ByAEGz4CAAsgBxARIAwQESAOQSxqIA5BLmooAQAiBTYBACAOKAIUISEgDkEwaiAXKAIAIicEf0F/QQAgJ61CIIYiM0L/////A1UiBBshAyAzIASthyIzQv//////////H1cEQANAIANBAWohAyAzQgGGIjNCgICAgICAgIAgUw0ACwsgM0KAgICAgICABHxCNIinQQF0QcDCAGouAQAgA0GAgNAJbEEQdWsiA0H//wFIIQQgA0H//wEgBBsiA0GAgH5KIQQgA0GAgH4gBBsFQYCAAgsiAzsBAAJAICFBAEwNACAOKAIkISkgDigCKCEYIA4oAjghECAOKAIcISogDigCGCErIANBEHRBEHUhCCAFQRB0QRB1IAVBEHZBEHRBEHVqIgNB//8BSCEEIANB//8BIAQbIgNBgIB+SiEEIAggA0GAgH4gBBtqIgNB//8BSCEEIANB//8BIAQbIgNBgIB+SiEEIANBgIB+IAQbQRB0QRB1QYB9SCEsA0AgIEEBdCItIBBqIi5BgIACOwEAQYCAAiEjICsgIEECdCIoaiIvKAIAQQBKBEAgKCApaigCACEwQQAhJANAIDAgJEECdGooAgAiFCgCGCERIBQoAhQhDCAUKAIQIRogFCgCCCElIBQoAgQiA0EBayIWIQ0gA0ECTgRAA0ACfwJAIBcgJSANQQJ0IgVqKAIAIgRBAnRqKAIAIgNFDQBBf0EAIAOtQiCGIjNC/////wNVIgYbIQMgMyAGrYciM0L//////////x9XBEADQCADQQFqIQMgM0IBhiIzQoCAgICAgICAIFMNAAsLIDNCgICAgICAgAR8QjSIp0EBdEHA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dGVtIGNhbGwAUmVzb3VyY2UgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUASW52YWxpZCBzZWVrAENyb3NzLWRldmljZSBsaW5rAFJlYWQtb25seSBmaWxlIHN5c3RlbQBEaXJlY3Rvcnkgbm90IGVtcHR5AENvbm5lY3Rpb24gcmVzZXQgYnkgcGVlcgBPcGVyYXRpb24gdGltZWQgb3V0AENvbm5lY3Rpb24gcmVmdXNlZABIb3N0IGlzIHVucmVhY2hhYmxlAEFkZHJlc3MgaW4gdXNlAEJyb2tlbiBwaXBlAEkvTyBlcnJvcgBObyBzdWNoIGRldmljZSBvciBhZGRyZXNzAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAE5vdCBhIHNvY2tldABEZXN0aW5hdGlvbiBhZGRyZXNzIHJlcXVpcmVkAE1lc3NhZ2UgdG9vIGxhcmdlAFByb3RvY29sIHdyb25nIHR5cGUgZm9yIHNvY2tldABQcm90b2NvbCBub3QgYXZhaWxhYmxlAFByb3RvY29sIG5vdCBzdXBwb3J0ZWQATm90IHN1cHBvcnRlZABBZGRyZXNzIGZhbWlseSBub3Qgc3VwcG9ydGVkIGJ5IHByb3RvY29sAEFkZHJlc3Mgbm90IGF2YWlsYWJsZQBOZXR3b3JrIGlzIGRvd24ATmV0d29yayB1bnJlYWNoYWJsZQBDb25uZWN0aW9uIHJlc2V0IGJ5IG5ldHdvcmsAQ29ubmVjdGlvbiBhYm9ydGVkAE5vIGJ1ZmZlciBzcGFjZSBhdmFpbGFibGUAU29ja2V0IGlzIGNvbm5lY3RlZABTb2NrZXQgbm90IGNvbm5lY3RlZABPcGVyYXRpb24gYWxyZWFkeSBpbiBwcm9ncmVzcwBPcGVyYXRpb24gaW4gcHJvZ3Jlc3MAU3RhbGUgZmlsZSBoYW5kbGUAUXVvdGEgZXhjZWVkZWQATXVsdGlob3AgYXR0ZW1wdGVkAENhcGFiaWxpdGllcyBpbnN1ZmZpY2llbnQAAAB1Ak4A1gHiBLkEGAGOBe0CFgTyAJcDAQM4Ba8BggFPAy8EHgDUBaIAEgMeA8IB3gMIAKwFAAFkAvEBZQU0AowCzwItA0wE4wWfAvgEHAUIBbECSwUVAngAUgI8A/ED5ADDA30EzACqA3kFJAJuAW0DIgSrBEQA+wGuAIMDYADlAQcElAReBCsAWAE5AZIAwgWbAUMCRgH2Be+7vwB+AGV4cGlyeQBhY2Nlc3Nfa2V5AGtleXdvcmRfaW5kZXgAdSUwNHgALSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweAAucHYAd2FzbS1kZXYAbG9jYWxob3N0AGxhc3RfcmVuZXdhbF9hdHRlbXB0AGttcDEucGljb3ZvaWNlLm5ldABvYmplY3QAa2V5d29yZF9wYXRocwBzZW5zaXRpdml0aWVzAG51bV9rZXl3b3JkcwAlcy8lcwAlcy8lcy0lcwBGYWlsZWQgdG8gZ2V0IGluZm8gb24gZGV2aWNlICVzAGRldmljZV9pZF9lcnJvcgB0aW1lc3RhbXAAcmFtcABjbGllbnRfaW5mbwBkZXZpY2VfaW5mbwBkdXJhdGlvbgBnYXRla2VlcGVyX3ZlcnNpb24AbW9kZWxfdmVyc2lvbgBsaWJfdmVyc2lvbgBuYW4Ad2FzbQBwbGF0Zm9ybQBwY20AbnVsbAByZW5ld2FsAHdhc20tbG9jYWwAc2RrAG1vZGVsX3BhdGgAYXJjaAAlbGcAJTEuMTdnACUxLjE1ZwBpbmYAMDEyMzQ1Njc4OWFiY2RlZgB0cnVlAGZhbHNlAHBvcmN1cGluZQBlbmdpbmUAbGFuZ3VhZ2UAbWVzc2FnZQBlcnJvcl9jb2RlAGFjY2Vzc19pZABkZXZpY2VfaWQAL2V0Yy9tYWNoaW5lLWlkAG1lbW9yeSBhbGxvY2F0aW9uIGZhaWxlZABwYXlsb2FkAHdiAHJiAE9VVF9PRl9NRU1PUlkAUFVUAElOVkFMSURfQVJHVU1FTlQAU1VDQ0VTUwBLRVlfRVJST1IASU9fRVJST1IAQUNUSVZBVElPTl9FUlJPUgBSVU5USU1FX0VSUk9SAFNUT1BfSVRFUkFUSU9OAE5BTgBJTkYASU5WQUxJRF9TVEFURQBBQ1RJVkFUSU9OX1JFRlVTRUQAQUNUSVZBVElPTl9USFJPVFRMRUQAQUNUSVZBVElPTl9MSU1JVF9SRUFDSEVEAD8/ADEyNy4wLjAuMQAxLjIuMAAzLjAuMAAwLjAuMC4wAC9yZWdpc3RyeS8ARmFpbGVkIHRvIGFsbG9jYXRlLCBvdXQgb2YgbWVtb3J5LgAlcyBmaWxlIGhhcyBpbmNvcnJlY3QgZm9ybWF0IG9yIGJlbG9uZ3MgdG8gYSBkaWZmZXJlbnQgcGxhdGZvcm0uAEludGVybmFsIGxhbmd1YWdlcyBgJXNgIGFuZCBgJXNgIGRvIG5vdCBtYXRjaC4AVVVJRCBmaWxlICclcycgZGlkIG5vdCBjb250YWluIGEgVVVJRCBvZiB0aGUgZXhwZWN0ZWQgc2l6ZS4AQXR0ZW1wdCB0byByZW5ldyBhIGxpY2Vuc2UgbmVhcmluZyBleHBpcnkgd2FzIHVuc3VjY2Vzc2Z1bCAtIHdpbGwgY29udGludWUgdG8gdXNlIGN1cnJlbnQgbGljZW5zZS4AQWNjZXNzS2V5IGlzIGludmFsaWQuAExpY2Vuc2UgaXMgZXhwaXJlZC4ARmFpbGVkIHRvIHBhcnNlIEFjY2Vzc0tleSBgJXNgLgAlcyBmaWxlIGJlbG9uZ3MgdG8gYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiB0aGUgbGlicmFyeS4gRmlsZSBpcyBgJXNgIHdoaWxlIGxpYnJhcnkgaXMgYCVzYC4AQWxsICVzIGxhbmd1YWdlcyBzaG91bGQgbWF0Y2guIEluZGV4IGAjJWRgIGJlbG9uZ3MgdG8gYCVzYCB3aGlsZSBpbmRleCBgIyVkYCBiZWxvbmdzIHRvIGAlc2AuACVzIGFuZCBtb2RlbCBmaWxlICgucHYpIHNob3VsZCBiZWxvbmcgdG8gdGhlIHNhbWUgbGFuZ3VhZ2UuIEZpbGUgYmVsb25ncyB0byBgJXNgIHdoaWxlIG1vZGVsIGZpbGUgKC5wdikgYmVsb25ncyB0byBgJXNgLgBMb2FkaW5nIHBhcmFtZXRlcnMgZmFpbGVkIHdpdGggYCVzYC4ATG9hZGluZyBrZXl3b3JkIGZpbGUgYXQgYCVzYCBmYWlsZWQgd2l0aCBgJXNgLgBBcmd1bWVudCBgJXNgIGF0IGluZGV4IGAlZGAgdmFsdWUgYCVkYCBpcyBvdXQgb2YgcmFuZ2UgWyUuMmYsICUuMmZdLgBBcmd1bWVudCBgJXNgIHZhbHVlIGAlZGAgaXMgb3V0IG9mIHJhbmdlIFslZCwgJWRdLgBBcmd1bWVudCBgJXNgIGlzIE5VTEwuAEFyZ3VtZW50IGAlc2AgYXQgaW5kZXggYCVkYCBpcyBOVUxMLgAxOTIuMTY4LgAxMC4xNjAuAC0ATW9kZWwgKC5wdikAS2V5d29yZCBmaWxlICgucHBuKQAobnVsbCkAUGljb3ZvaWNlIEVycm9yIChjb2RlIGAlMDhYYCkAQ291bGQgbm90IG9wZW4gZmlsZSAnJXMnAENvdWxkIG5vdCBzYXZlIGZpbGUgJyVzJwAiIgAgW1dBUk5dIExpY2Vuc2Ugd2lsbCBleHBpcmUgaW4gJWQgZGF5cwoAW0VSUk9SXSAlcwoAc3lzdGVtIG5hbWU6ICVzCnVzZXIgYWdlbnQ6ICVzCgBbRVJST1JdIFRoZSBsZW5ndGggb2YgdGhlIGdpdmVuIHBhdGggaXMgdG9vIGxvbmc6ICVkLCB0aGUgbWF4aW11bSBhbGxvd2VkIGxlbmd0aCBpcyAlZAoAU3VwcG9ydCBmb3IgZm9ybWF0dGluZyBsb25nIGRvdWJsZSB2YWx1ZXMgaXMgY3VycmVudGx5IGRpc2FibGVkLgpUbyBlbmFibGUgaXQsIGFkZCAtbGMtcHJpbnRzY2FuLWxvbmctZG91YmxlIHRvIHRoZSBsaW5rIGNvbW1hbmQuCgBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24NCkNvbnRlbnQtTGVuZ3RoOiAlZA0KABkACgAZGRkAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAGQARChkZGQMKBwABGwkLGAAACQYLAAALAAYZAAAAGRkZAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAABkACg0ZGRkADQAAAgAJDgAAAAkADgAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAATAAAAABMAAAAACQwAAAAAAAwAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAADwAAAAQPAAAAAAkQAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAAAAABEAAAAAEQAAAAAJEgAAAAAAEgAAEgAAGgAAABoaGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAGhoaAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFwAAAAAXAAAAAAkUAAAAAAAUAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAAAAAAAAAAAAABUAAAAAFQAAAAAJFgAAAAAAFgAAFgAAMDEyMzQ1Njc4OUFCQ0RFRv////////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIj////////CgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAECBAcDBgUAAAAAAAAACgAAAGQAAADoAwAAECcAAKCGAQBAQg8AgJaYAADh9QWeEQAAfxMAAH8TAAB/EwAAfxMA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vzy/aL+nCWq/DEtrv16DbL+Tsm2/nthuv3P1b78JCXG/UhNyv0gUc7/dC3S/Cvp0v8bedb8Iuna/xot3v/lTeL+ZEnm/ncd5vwJzer+/FHu/zax7vyc7fL/Jv3y/rDp9v8urfb8jE36/sHB+v23Efr9YDn+/bk5/v6uEf78QsX+/mNN/v0Psf78R+3+/l/2Y/Zn9mv2b/Zz9nf2e/Z79n/2g/aH9ov2j/aP9pP2l/ab9p/2o/an9qf2q/av9rP2t/a79rv2v/bD9sf2y/bL9s/20/bX9tv23/bf9uP25/br9u/27/bz9vf2+/b/9v/3A/cH9wv3D/cP9xP3F/cb9xv3H/cj9yf3K/cr9y/3M/c39zf3O/c/90P3Q/dH90v3T/dT91P3V/db91/3X/dj92f3a/dr92/3c/d393f3e/d/94P3g/eH94v3i/eP95P3l/eX95v3n/ej96P3p/er96v3r/ez97f3t/e797/3v/fD98f3y/fL98/30/fT99f32/ff99/34/fn9+f36/fv9+/38/f39/f3+/f/9AP4A/gH+Av4C/gP+BP4E/gX+Bv4G/gf+CP4I/gn+Cv4K/gv+DP4M/g3+Dv4O/g/+EP4Q/hH+Ev4S/hP+FP4U/hX+Fv4W/hf+GP4Y/hn+Gv4a/hv+HP4c/h3+Hf4e/h/+H/4g/iH+If4i/iP+I/4k/iT+Jf4m/ib+J/4o/ij+Kf4q/ir+K/4r/iz+Lf4t/i7+Lv4v/jD+MP4x/jL+Mv4z/jP+NP41/jX+Nv42/jf+OP44/jn+Of46/jv+O/48/jz+Pf4+/j7+P/4//kD+Qf5B/kL+Qv5D/kT+RP5F/kX+Rv5H/kf+SP5I/kn+Sf5K/kv+S/5M/kz+Tf5O/k7+T/5P/lD+UP5R/lL+Uv5T/lP+VP5U/lX+Vv5W/lf+V/5Y/lj+Wf5Z/lr+W/5b/lz+XP5d/l3+Xv5f/l/+YP5g/mH+Yf5i/mL+Y/5j/mT+Zf5l/mb+Zv5n/mf+aP5o/mn+af5q/mv+a/5s/mz+bf5t/m7+bv5v/m/+cP5w/nH+cv5y/nP+c/50/nT+df51/nb+dv53/nf+eP54/nn+ef56/nr+e/58/nz+ff59/n7+fv5//n/+gP6A/oH+gf6C/oL+g/6D/oT+hP6F/oX+hv6G/of+h/6I/oj+if6J/or+iv6L/ov+jP6M/o3+jf6O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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";


  Porcupine.setWasm(porcupineWasm);
  Porcupine.setWasmSimd(porcupineWasmSimd);
  PorcupineWorker.setWasm(porcupineWasm);
  PorcupineWorker.setWasmSimd(porcupineWasmSimd);

  exports.Porcupine = Porcupine;
  exports.PorcupineErrors = porcupine_errors;
  exports.PorcupineWorker = PorcupineWorker;
  exports.keywordsProcess = keywordsProcess;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});