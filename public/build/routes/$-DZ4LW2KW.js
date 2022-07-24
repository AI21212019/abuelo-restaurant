import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  _extends,
  init_extends,
  init_react,
  init_react_router_dom,
  require_react,
  useNavigate,
  useParams
} from "/build/_shared/chunk-PJWDE3Q7.js";

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    init_react();
    var __extends2;
    var __assign3;
    var __rest3;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest3 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray2 = function(to, from2, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from2.length, ar; i < l; i++) {
            if (ar || !(i in from2)) {
              if (!ar)
                ar = Array.prototype.slice.call(from2, 0, i);
              ar[i] = from2[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from2));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign3);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// node_modules/sweetalert/dist/sweetalert.min.js
var require_sweetalert_min = __commonJS({
  "node_modules/sweetalert/dist/sweetalert.min.js"(exports, module) {
    init_react();
    !function(t, e) {
      typeof exports == "object" && typeof module == "object" ? module.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof exports == "object" ? exports.swal = e() : t.swal = e();
    }(exports, function() {
      return function(t) {
        function e(o) {
          if (n[o])
            return n[o].exports;
          var r = n[o] = { i: o, l: false, exports: {} };
          return t[o].call(r.exports, r, r.exports, e), r.l = true, r.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t2, n2, o) {
          e.o(t2, n2) || Object.defineProperty(t2, n2, { configurable: false, enumerable: true, get: o });
        }, e.n = function(t2) {
          var n2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return e.d(n2, "a", n2), n2;
        }, e.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, e.p = "", e(e.s = 8);
      }([function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = "swal-button";
        e.CLASS_NAMES = { MODAL: "swal-modal", OVERLAY: "swal-overlay", SHOW_MODAL: "swal-overlay--show-modal", MODAL_TITLE: "swal-title", MODAL_TEXT: "swal-text", ICON: "swal-icon", ICON_CUSTOM: "swal-icon--custom", CONTENT: "swal-content", FOOTER: "swal-footer", BUTTON_CONTAINER: "swal-button-container", BUTTON: o, CONFIRM_BUTTON: o + "--confirm", CANCEL_BUTTON: o + "--cancel", DANGER_BUTTON: o + "--danger", BUTTON_LOADING: o + "--loading", BUTTON_LOADER: o + "__loader" }, e.default = e.CLASS_NAMES;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.getNode = function(t2) {
          var e2 = "." + t2;
          return document.querySelector(e2);
        }, e.stringToNode = function(t2) {
          var e2 = document.createElement("div");
          return e2.innerHTML = t2.trim(), e2.firstChild;
        }, e.insertAfter = function(t2, e2) {
          var n2 = e2.nextSibling;
          e2.parentNode.insertBefore(t2, n2);
        }, e.removeNode = function(t2) {
          t2.parentElement.removeChild(t2);
        }, e.throwErr = function(t2) {
          throw t2 = t2.replace(/ +(?= )/g, ""), "SweetAlert: " + (t2 = t2.trim());
        }, e.isPlainObject = function(t2) {
          if (Object.prototype.toString.call(t2) !== "[object Object]")
            return false;
          var e2 = Object.getPrototypeOf(t2);
          return e2 === null || e2 === Object.prototype;
        }, e.ordinalSuffixOf = function(t2) {
          var e2 = t2 % 10, n2 = t2 % 100;
          return e2 === 1 && n2 !== 11 ? t2 + "st" : e2 === 2 && n2 !== 12 ? t2 + "nd" : e2 === 3 && n2 !== 13 ? t2 + "rd" : t2 + "th";
        };
      }, function(t, e, n) {
        "use strict";
        function o(t2) {
          for (var n2 in t2)
            e.hasOwnProperty(n2) || (e[n2] = t2[n2]);
        }
        Object.defineProperty(e, "__esModule", { value: true }), o(n(25));
        var r = n(26);
        e.overlayMarkup = r.default, o(n(27)), o(n(28)), o(n(29));
        var i = n(0), a = i.default.MODAL_TITLE, s = i.default.MODAL_TEXT, c = i.default.ICON, l = i.default.FOOTER;
        e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n';
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(1);
        e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";
        var r = { visible: true, text: null, value: null, className: "", closeModal: true }, i = Object.assign({}, r, { visible: false, text: "Cancel", value: null }), a = Object.assign({}, r, { text: "OK", value: true });
        e.defaultButtonList = { cancel: i, confirm: a };
        var s = function(t2) {
          switch (t2) {
            case e.CONFIRM_KEY:
              return a;
            case e.CANCEL_KEY:
              return i;
            default:
              var n2 = t2.charAt(0).toUpperCase() + t2.slice(1);
              return Object.assign({}, r, { text: n2, value: t2 });
          }
        }, c = function(t2, e2) {
          var n2 = s(t2);
          return e2 === true ? Object.assign({}, n2, { visible: true }) : typeof e2 == "string" ? Object.assign({}, n2, { visible: true, text: e2 }) : o.isPlainObject(e2) ? Object.assign({ visible: true }, n2, e2) : Object.assign({}, n2, { visible: false });
        }, l = function(t2) {
          for (var e2 = {}, n2 = 0, o2 = Object.keys(t2); n2 < o2.length; n2++) {
            var r2 = o2[n2], a2 = t2[r2], s2 = c(r2, a2);
            e2[r2] = s2;
          }
          return e2.cancel || (e2.cancel = i), e2;
        }, u = function(t2) {
          var n2 = {};
          switch (t2.length) {
            case 1:
              n2[e.CANCEL_KEY] = Object.assign({}, i, { visible: false });
              break;
            case 2:
              n2[e.CANCEL_KEY] = c(e.CANCEL_KEY, t2[0]), n2[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t2[1]);
              break;
            default:
              o.throwErr("Invalid number of 'buttons' in array (" + t2.length + ").\n      If you want more than 2 buttons, you need to use an object!");
          }
          return n2;
        };
        e.getButtonListOpts = function(t2) {
          var n2 = e.defaultButtonList;
          return typeof t2 == "string" ? n2[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t2) : Array.isArray(t2) ? n2 = u(t2) : o.isPlainObject(t2) ? n2 = l(t2) : t2 === true ? n2 = u([true, true]) : t2 === false ? n2 = u([false, false]) : t2 === void 0 && (n2 = e.defaultButtonList), n2;
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(1), r = n(2), i = n(0), a = i.default.MODAL, s = i.default.OVERLAY, c = n(30), l = n(31), u = n(32), f = n(33);
        e.injectElIntoModal = function(t2) {
          var e2 = o.getNode(a), n2 = o.stringToNode(t2);
          return e2.appendChild(n2), n2;
        };
        var d = function(t2) {
          t2.className = a, t2.textContent = "";
        }, p = function(t2, e2) {
          d(t2);
          var n2 = e2.className;
          n2 && t2.classList.add(n2);
        };
        e.initModalContent = function(t2) {
          var e2 = o.getNode(a);
          p(e2, t2), c.default(t2.icon), l.initTitle(t2.title), l.initText(t2.text), f.default(t2.content), u.default(t2.buttons, t2.dangerMode);
        };
        var m = function() {
          var t2 = o.getNode(s), e2 = o.stringToNode(r.modalMarkup);
          t2.appendChild(e2);
        };
        e.default = m;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(3), r = { isOpen: false, promise: null, actions: {}, timer: null }, i = Object.assign({}, r);
        e.resetState = function() {
          i = Object.assign({}, r);
        }, e.setActionValue = function(t2) {
          if (typeof t2 == "string")
            return a(o.CONFIRM_KEY, t2);
          for (var e2 in t2)
            a(e2, t2[e2]);
        };
        var a = function(t2, e2) {
          i.actions[t2] || (i.actions[t2] = {}), Object.assign(i.actions[t2], { value: e2 });
        };
        e.setActionOptionsFor = function(t2, e2) {
          var n2 = (e2 === void 0 ? {} : e2).closeModal, o2 = n2 === void 0 || n2;
          Object.assign(i.actions[t2], { closeModal: o2 });
        }, e.default = i;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(1), r = n(3), i = n(0), a = i.default.OVERLAY, s = i.default.SHOW_MODAL, c = i.default.BUTTON, l = i.default.BUTTON_LOADING, u = n(5);
        e.openModal = function() {
          o.getNode(a).classList.add(s), u.default.isOpen = true;
        };
        var f = function() {
          o.getNode(a).classList.remove(s), u.default.isOpen = false;
        };
        e.onAction = function(t2) {
          t2 === void 0 && (t2 = r.CANCEL_KEY);
          var e2 = u.default.actions[t2], n2 = e2.value;
          if (e2.closeModal === false) {
            var i2 = c + "--" + t2;
            o.getNode(i2).classList.add(l);
          } else
            f();
          u.default.promise.resolve(n2);
        }, e.getState = function() {
          var t2 = Object.assign({}, u.default);
          return delete t2.promise, delete t2.timer, t2;
        }, e.stopLoading = function() {
          for (var t2 = document.querySelectorAll("." + c), e2 = 0; e2 < t2.length; e2++) {
            t2[e2].classList.remove(l);
          }
        };
      }, function(t, e) {
        var n;
        n = function() {
          return this;
        }();
        try {
          n = n || Function("return this")() || (0, eval)("this");
        } catch (t2) {
          typeof window == "object" && (n = window);
        }
        t.exports = n;
      }, function(t, e, n) {
        (function(e2) {
          t.exports = e2.sweetAlert = n(9);
        }).call(e, n(7));
      }, function(t, e, n) {
        (function(e2) {
          t.exports = e2.swal = n(10);
        }).call(e, n(7));
      }, function(t, e, n) {
        typeof window != "undefined" && n(11), n(16);
        var o = n(23).default;
        t.exports = o;
      }, function(t, e, n) {
        var o = n(12);
        typeof o == "string" && (o = [[t.i, o, ""]]);
        var r = { insertAt: "top" };
        r.transform = void 0;
        n(14)(o, r);
        o.locals && (t.exports = o.locals);
      }, function(t, e, n) {
        e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""]);
      }, function(t, e) {
        function n(t2, e2) {
          var n2 = t2[1] || "", r = t2[3];
          if (!r)
            return n2;
          if (e2 && typeof btoa == "function") {
            var i = o(r);
            return [n2].concat(r.sources.map(function(t3) {
              return "/*# sourceURL=" + r.sourceRoot + t3 + " */";
            })).concat([i]).join("\n");
          }
          return [n2].join("\n");
        }
        function o(t2) {
          return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t2)))) + " */";
        }
        t.exports = function(t2) {
          var e2 = [];
          return e2.toString = function() {
            return this.map(function(e3) {
              var o2 = n(e3, t2);
              return e3[2] ? "@media " + e3[2] + "{" + o2 + "}" : o2;
            }).join("");
          }, e2.i = function(t3, n2) {
            typeof t3 == "string" && (t3 = [[null, t3, ""]]);
            for (var o2 = {}, r = 0; r < this.length; r++) {
              var i = this[r][0];
              typeof i == "number" && (o2[i] = true);
            }
            for (r = 0; r < t3.length; r++) {
              var a = t3[r];
              typeof a[0] == "number" && o2[a[0]] || (n2 && !a[2] ? a[2] = n2 : n2 && (a[2] = "(" + a[2] + ") and (" + n2 + ")"), e2.push(a));
            }
          }, e2;
        };
      }, function(t, e, n) {
        function o(t2, e2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var o2 = t2[n2], r2 = m[o2.id];
            if (r2) {
              r2.refs++;
              for (var i2 = 0; i2 < r2.parts.length; i2++)
                r2.parts[i2](o2.parts[i2]);
              for (; i2 < o2.parts.length; i2++)
                r2.parts.push(u(o2.parts[i2], e2));
            } else {
              for (var a2 = [], i2 = 0; i2 < o2.parts.length; i2++)
                a2.push(u(o2.parts[i2], e2));
              m[o2.id] = { id: o2.id, refs: 1, parts: a2 };
            }
          }
        }
        function r(t2, e2) {
          for (var n2 = [], o2 = {}, r2 = 0; r2 < t2.length; r2++) {
            var i2 = t2[r2], a2 = e2.base ? i2[0] + e2.base : i2[0], s2 = i2[1], c2 = i2[2], l2 = i2[3], u2 = { css: s2, media: c2, sourceMap: l2 };
            o2[a2] ? o2[a2].parts.push(u2) : n2.push(o2[a2] = { id: a2, parts: [u2] });
          }
          return n2;
        }
        function i(t2, e2) {
          var n2 = v(t2.insertInto);
          if (!n2)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var o2 = w[w.length - 1];
          if (t2.insertAt === "top")
            o2 ? o2.nextSibling ? n2.insertBefore(e2, o2.nextSibling) : n2.appendChild(e2) : n2.insertBefore(e2, n2.firstChild), w.push(e2);
          else {
            if (t2.insertAt !== "bottom")
              throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n2.appendChild(e2);
          }
        }
        function a(t2) {
          if (t2.parentNode === null)
            return false;
          t2.parentNode.removeChild(t2);
          var e2 = w.indexOf(t2);
          e2 >= 0 && w.splice(e2, 1);
        }
        function s(t2) {
          var e2 = document.createElement("style");
          return t2.attrs.type = "text/css", l(e2, t2.attrs), i(t2, e2), e2;
        }
        function c(t2) {
          var e2 = document.createElement("link");
          return t2.attrs.type = "text/css", t2.attrs.rel = "stylesheet", l(e2, t2.attrs), i(t2, e2), e2;
        }
        function l(t2, e2) {
          Object.keys(e2).forEach(function(n2) {
            t2.setAttribute(n2, e2[n2]);
          });
        }
        function u(t2, e2) {
          var n2, o2, r2, i2;
          if (e2.transform && t2.css) {
            if (!(i2 = e2.transform(t2.css)))
              return function() {
              };
            t2.css = i2;
          }
          if (e2.singleton) {
            var l2 = h++;
            n2 = g || (g = s(e2)), o2 = f.bind(null, n2, l2, false), r2 = f.bind(null, n2, l2, true);
          } else
            t2.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (n2 = c(e2), o2 = p.bind(null, n2, e2), r2 = function() {
              a(n2), n2.href && URL.revokeObjectURL(n2.href);
            }) : (n2 = s(e2), o2 = d.bind(null, n2), r2 = function() {
              a(n2);
            });
          return o2(t2), function(e3) {
            if (e3) {
              if (e3.css === t2.css && e3.media === t2.media && e3.sourceMap === t2.sourceMap)
                return;
              o2(t2 = e3);
            } else
              r2();
          };
        }
        function f(t2, e2, n2, o2) {
          var r2 = n2 ? "" : o2.css;
          if (t2.styleSheet)
            t2.styleSheet.cssText = x(e2, r2);
          else {
            var i2 = document.createTextNode(r2), a2 = t2.childNodes;
            a2[e2] && t2.removeChild(a2[e2]), a2.length ? t2.insertBefore(i2, a2[e2]) : t2.appendChild(i2);
          }
        }
        function d(t2, e2) {
          var n2 = e2.css, o2 = e2.media;
          if (o2 && t2.setAttribute("media", o2), t2.styleSheet)
            t2.styleSheet.cssText = n2;
          else {
            for (; t2.firstChild; )
              t2.removeChild(t2.firstChild);
            t2.appendChild(document.createTextNode(n2));
          }
        }
        function p(t2, e2, n2) {
          var o2 = n2.css, r2 = n2.sourceMap, i2 = e2.convertToAbsoluteUrls === void 0 && r2;
          (e2.convertToAbsoluteUrls || i2) && (o2 = y(o2)), r2 && (o2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r2)))) + " */");
          var a2 = new Blob([o2], { type: "text/css" }), s2 = t2.href;
          t2.href = URL.createObjectURL(a2), s2 && URL.revokeObjectURL(s2);
        }
        var m = {}, b = function(t2) {
          var e2;
          return function() {
            return e2 === void 0 && (e2 = t2.apply(this, arguments)), e2;
          };
        }(function() {
          return window && document && document.all && !window.atob;
        }), v = function(t2) {
          var e2 = {};
          return function(n2) {
            return e2[n2] === void 0 && (e2[n2] = t2.call(this, n2)), e2[n2];
          };
        }(function(t2) {
          return document.querySelector(t2);
        }), g = null, h = 0, w = [], y = n(15);
        t.exports = function(t2, e2) {
          if (typeof DEBUG != "undefined" && DEBUG && typeof document != "object")
            throw new Error("The style-loader cannot be used in a non-browser environment");
          e2 = e2 || {}, e2.attrs = typeof e2.attrs == "object" ? e2.attrs : {}, e2.singleton || (e2.singleton = b()), e2.insertInto || (e2.insertInto = "head"), e2.insertAt || (e2.insertAt = "bottom");
          var n2 = r(t2, e2);
          return o(n2, e2), function(t3) {
            for (var i2 = [], a2 = 0; a2 < n2.length; a2++) {
              var s2 = n2[a2], c2 = m[s2.id];
              c2.refs--, i2.push(c2);
            }
            if (t3) {
              o(r(t3, e2), e2);
            }
            for (var a2 = 0; a2 < i2.length; a2++) {
              var c2 = i2[a2];
              if (c2.refs === 0) {
                for (var l2 = 0; l2 < c2.parts.length; l2++)
                  c2.parts[l2]();
                delete m[c2.id];
              }
            }
          };
        };
        var x = function() {
          var t2 = [];
          return function(e2, n2) {
            return t2[e2] = n2, t2.filter(Boolean).join("\n");
          };
        }();
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = typeof window != "undefined" && window.location;
          if (!e2)
            throw new Error("fixUrls requires window.location");
          if (!t2 || typeof t2 != "string")
            return t2;
          var n = e2.protocol + "//" + e2.host, o = n + e2.pathname.replace(/\/[^\/]*$/, "/");
          return t2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t3, e3) {
            var r = e3.trim().replace(/^"(.*)"$/, function(t4, e4) {
              return e4;
            }).replace(/^'(.*)'$/, function(t4, e4) {
              return e4;
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))
              return t3;
            var i;
            return i = r.indexOf("//") === 0 ? r : r.indexOf("/") === 0 ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")";
          });
        };
      }, function(t, e, n) {
        var o = n(17);
        typeof window == "undefined" || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function(t2, e2) {
          "use strict";
          return typeof e2 != "number" && (e2 = 0), !(e2 + t2.length > this.length) && this.indexOf(t2, e2) !== -1;
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function(t2, e2) {
          if (this == null)
            throw new TypeError('"this" is null or not defined');
          var n2 = Object(this), o2 = n2.length >>> 0;
          if (o2 === 0)
            return false;
          for (var r = 0 | e2, i = Math.max(r >= 0 ? r : o2 - Math.abs(r), 0); i < o2; ) {
            if (function(t3, e3) {
              return t3 === e3 || typeof t3 == "number" && typeof e3 == "number" && isNaN(t3) && isNaN(e3);
            }(n2[i], t2))
              return true;
            i++;
          }
          return false;
        } }), typeof window != "undefined" && function(t2) {
          t2.forEach(function(t3) {
            t3.hasOwnProperty("remove") || Object.defineProperty(t3, "remove", { configurable: true, enumerable: true, writable: true, value: function() {
              this.parentNode.removeChild(this);
            } });
          });
        }([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
      }, function(t, e, n) {
        (function(e2) {
          !function(n2) {
            function o() {
            }
            function r(t2, e3) {
              return function() {
                t2.apply(e3, arguments);
              };
            }
            function i(t2) {
              if (typeof this != "object")
                throw new TypeError("Promises must be constructed via new");
              if (typeof t2 != "function")
                throw new TypeError("not a function");
              this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], f(t2, this);
            }
            function a(t2, e3) {
              for (; t2._state === 3; )
                t2 = t2._value;
              if (t2._state === 0)
                return void t2._deferreds.push(e3);
              t2._handled = true, i._immediateFn(function() {
                var n3 = t2._state === 1 ? e3.onFulfilled : e3.onRejected;
                if (n3 === null)
                  return void (t2._state === 1 ? s : c)(e3.promise, t2._value);
                var o2;
                try {
                  o2 = n3(t2._value);
                } catch (t3) {
                  return void c(e3.promise, t3);
                }
                s(e3.promise, o2);
              });
            }
            function s(t2, e3) {
              try {
                if (e3 === t2)
                  throw new TypeError("A promise cannot be resolved with itself.");
                if (e3 && (typeof e3 == "object" || typeof e3 == "function")) {
                  var n3 = e3.then;
                  if (e3 instanceof i)
                    return t2._state = 3, t2._value = e3, void l(t2);
                  if (typeof n3 == "function")
                    return void f(r(n3, e3), t2);
                }
                t2._state = 1, t2._value = e3, l(t2);
              } catch (e4) {
                c(t2, e4);
              }
            }
            function c(t2, e3) {
              t2._state = 2, t2._value = e3, l(t2);
            }
            function l(t2) {
              t2._state === 2 && t2._deferreds.length === 0 && i._immediateFn(function() {
                t2._handled || i._unhandledRejectionFn(t2._value);
              });
              for (var e3 = 0, n3 = t2._deferreds.length; e3 < n3; e3++)
                a(t2, t2._deferreds[e3]);
              t2._deferreds = null;
            }
            function u(t2, e3, n3) {
              this.onFulfilled = typeof t2 == "function" ? t2 : null, this.onRejected = typeof e3 == "function" ? e3 : null, this.promise = n3;
            }
            function f(t2, e3) {
              var n3 = false;
              try {
                t2(function(t3) {
                  n3 || (n3 = true, s(e3, t3));
                }, function(t3) {
                  n3 || (n3 = true, c(e3, t3));
                });
              } catch (t3) {
                if (n3)
                  return;
                n3 = true, c(e3, t3);
              }
            }
            var d = setTimeout;
            i.prototype.catch = function(t2) {
              return this.then(null, t2);
            }, i.prototype.then = function(t2, e3) {
              var n3 = new this.constructor(o);
              return a(this, new u(t2, e3, n3)), n3;
            }, i.all = function(t2) {
              var e3 = Array.prototype.slice.call(t2);
              return new i(function(t3, n3) {
                function o2(i3, a2) {
                  try {
                    if (a2 && (typeof a2 == "object" || typeof a2 == "function")) {
                      var s2 = a2.then;
                      if (typeof s2 == "function")
                        return void s2.call(a2, function(t4) {
                          o2(i3, t4);
                        }, n3);
                    }
                    e3[i3] = a2, --r2 == 0 && t3(e3);
                  } catch (t4) {
                    n3(t4);
                  }
                }
                if (e3.length === 0)
                  return t3([]);
                for (var r2 = e3.length, i2 = 0; i2 < e3.length; i2++)
                  o2(i2, e3[i2]);
              });
            }, i.resolve = function(t2) {
              return t2 && typeof t2 == "object" && t2.constructor === i ? t2 : new i(function(e3) {
                e3(t2);
              });
            }, i.reject = function(t2) {
              return new i(function(e3, n3) {
                n3(t2);
              });
            }, i.race = function(t2) {
              return new i(function(e3, n3) {
                for (var o2 = 0, r2 = t2.length; o2 < r2; o2++)
                  t2[o2].then(e3, n3);
              });
            }, i._immediateFn = typeof e2 == "function" && function(t2) {
              e2(t2);
            } || function(t2) {
              d(t2, 0);
            }, i._unhandledRejectionFn = function(t2) {
              typeof console != "undefined" && console && console.warn("Possible Unhandled Promise Rejection:", t2);
            }, i._setImmediateFn = function(t2) {
              i._immediateFn = t2;
            }, i._setUnhandledRejectionFn = function(t2) {
              i._unhandledRejectionFn = t2;
            }, t !== void 0 && t.exports ? t.exports = i : n2.Promise || (n2.Promise = i);
          }(this);
        }).call(e, n(18).setImmediate);
      }, function(t, e, n) {
        function o(t2, e2) {
          this._id = t2, this._clearFn = e2;
        }
        var r = Function.prototype.apply;
        e.setTimeout = function() {
          return new o(r.call(setTimeout, window, arguments), clearTimeout);
        }, e.setInterval = function() {
          return new o(r.call(setInterval, window, arguments), clearInterval);
        }, e.clearTimeout = e.clearInterval = function(t2) {
          t2 && t2.close();
        }, o.prototype.unref = o.prototype.ref = function() {
        }, o.prototype.close = function() {
          this._clearFn.call(window, this._id);
        }, e.enroll = function(t2, e2) {
          clearTimeout(t2._idleTimeoutId), t2._idleTimeout = e2;
        }, e.unenroll = function(t2) {
          clearTimeout(t2._idleTimeoutId), t2._idleTimeout = -1;
        }, e._unrefActive = e.active = function(t2) {
          clearTimeout(t2._idleTimeoutId);
          var e2 = t2._idleTimeout;
          e2 >= 0 && (t2._idleTimeoutId = setTimeout(function() {
            t2._onTimeout && t2._onTimeout();
          }, e2));
        }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
      }, function(t, e, n) {
        (function(t2, e2) {
          !function(t3, n2) {
            "use strict";
            function o(t4) {
              typeof t4 != "function" && (t4 = new Function("" + t4));
              for (var e3 = new Array(arguments.length - 1), n3 = 0; n3 < e3.length; n3++)
                e3[n3] = arguments[n3 + 1];
              var o2 = { callback: t4, args: e3 };
              return l[c] = o2, s(c), c++;
            }
            function r(t4) {
              delete l[t4];
            }
            function i(t4) {
              var e3 = t4.callback, o2 = t4.args;
              switch (o2.length) {
                case 0:
                  e3();
                  break;
                case 1:
                  e3(o2[0]);
                  break;
                case 2:
                  e3(o2[0], o2[1]);
                  break;
                case 3:
                  e3(o2[0], o2[1], o2[2]);
                  break;
                default:
                  e3.apply(n2, o2);
              }
            }
            function a(t4) {
              if (u)
                setTimeout(a, 0, t4);
              else {
                var e3 = l[t4];
                if (e3) {
                  u = true;
                  try {
                    i(e3);
                  } finally {
                    r(t4), u = false;
                  }
                }
              }
            }
            if (!t3.setImmediate) {
              var s, c = 1, l = {}, u = false, f = t3.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t3);
              d = d && d.setTimeout ? d : t3, {}.toString.call(t3.process) === "[object process]" ? function() {
                s = function(t4) {
                  e2.nextTick(function() {
                    a(t4);
                  });
                };
              }() : function() {
                if (t3.postMessage && !t3.importScripts) {
                  var e3 = true, n3 = t3.onmessage;
                  return t3.onmessage = function() {
                    e3 = false;
                  }, t3.postMessage("", "*"), t3.onmessage = n3, e3;
                }
              }() ? function() {
                var e3 = "setImmediate$" + Math.random() + "$", n3 = function(n4) {
                  n4.source === t3 && typeof n4.data == "string" && n4.data.indexOf(e3) === 0 && a(+n4.data.slice(e3.length));
                };
                t3.addEventListener ? t3.addEventListener("message", n3, false) : t3.attachEvent("onmessage", n3), s = function(n4) {
                  t3.postMessage(e3 + n4, "*");
                };
              }() : t3.MessageChannel ? function() {
                var t4 = new MessageChannel();
                t4.port1.onmessage = function(t5) {
                  a(t5.data);
                }, s = function(e3) {
                  t4.port2.postMessage(e3);
                };
              }() : f && "onreadystatechange" in f.createElement("script") ? function() {
                var t4 = f.documentElement;
                s = function(e3) {
                  var n3 = f.createElement("script");
                  n3.onreadystatechange = function() {
                    a(e3), n3.onreadystatechange = null, t4.removeChild(n3), n3 = null;
                  }, t4.appendChild(n3);
                };
              }() : function() {
                s = function(t4) {
                  setTimeout(a, 0, t4);
                };
              }(), d.setImmediate = o, d.clearImmediate = r;
            }
          }(typeof self == "undefined" ? t2 === void 0 ? this : t2 : self);
        }).call(e, n(7), n(20));
      }, function(t, e) {
        function n() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function r(t2) {
          if (u === setTimeout)
            return setTimeout(t2, 0);
          if ((u === n || !u) && setTimeout)
            return u = setTimeout, setTimeout(t2, 0);
          try {
            return u(t2, 0);
          } catch (e2) {
            try {
              return u.call(null, t2, 0);
            } catch (e3) {
              return u.call(this, t2, 0);
            }
          }
        }
        function i(t2) {
          if (f === clearTimeout)
            return clearTimeout(t2);
          if ((f === o || !f) && clearTimeout)
            return f = clearTimeout, clearTimeout(t2);
          try {
            return f(t2);
          } catch (e2) {
            try {
              return f.call(null, t2);
            } catch (e3) {
              return f.call(this, t2);
            }
          }
        }
        function a() {
          b && p && (b = false, p.length ? m = p.concat(m) : v = -1, m.length && s());
        }
        function s() {
          if (!b) {
            var t2 = r(a);
            b = true;
            for (var e2 = m.length; e2; ) {
              for (p = m, m = []; ++v < e2; )
                p && p[v].run();
              v = -1, e2 = m.length;
            }
            p = null, b = false, i(t2);
          }
        }
        function c(t2, e2) {
          this.fun = t2, this.array = e2;
        }
        function l() {
        }
        var u, f, d = t.exports = {};
        !function() {
          try {
            u = typeof setTimeout == "function" ? setTimeout : n;
          } catch (t2) {
            u = n;
          }
          try {
            f = typeof clearTimeout == "function" ? clearTimeout : o;
          } catch (t2) {
            f = o;
          }
        }();
        var p, m = [], b = false, v = -1;
        d.nextTick = function(t2) {
          var e2 = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n2 = 1; n2 < arguments.length; n2++)
              e2[n2 - 1] = arguments[n2];
          m.push(new c(t2, e2)), m.length !== 1 || b || r(s);
        }, c.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, d.title = "browser", d.browser = true, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(t2) {
          return [];
        }, d.binding = function(t2) {
          throw new Error("process.binding is not supported");
        }, d.cwd = function() {
          return "/";
        }, d.chdir = function(t2) {
          throw new Error("process.chdir is not supported");
        }, d.umask = function() {
          return 0;
        };
      }, function(t, e, n) {
        "use strict";
        n(22).polyfill();
      }, function(t, e, n) {
        "use strict";
        function o(t2, e2) {
          if (t2 === void 0 || t2 === null)
            throw new TypeError("Cannot convert first argument to object");
          for (var n2 = Object(t2), o2 = 1; o2 < arguments.length; o2++) {
            var r2 = arguments[o2];
            if (r2 !== void 0 && r2 !== null)
              for (var i = Object.keys(Object(r2)), a = 0, s = i.length; a < s; a++) {
                var c = i[a], l = Object.getOwnPropertyDescriptor(r2, c);
                l !== void 0 && l.enumerable && (n2[c] = r2[c]);
              }
          }
          return n2;
        }
        function r() {
          Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: o });
        }
        t.exports = { assign: o, polyfill: r };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(24), r = n(6), i = n(5), a = n(36), s = function() {
          for (var t2 = [], e2 = 0; e2 < arguments.length; e2++)
            t2[e2] = arguments[e2];
          if (typeof window != "undefined") {
            var n2 = a.getOpts.apply(void 0, t2);
            return new Promise(function(t3, e3) {
              i.default.promise = { resolve: t3, reject: e3 }, o.default(n2), setTimeout(function() {
                r.openModal();
              });
            });
          }
        };
        s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e.default = s;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(1), r = n(0), i = r.default.MODAL, a = n(4), s = n(34), c = n(35), l = n(1);
        e.init = function(t2) {
          o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s.default(), a.default()), a.initModalContent(t2), c.default(t2);
        }, e.default = e.init;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(0), r = o.default.MODAL;
        e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e.default = e.modalMarkup;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(0), r = o.default.OVERLAY, i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
        e.default = i;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(0), r = o.default.ICON;
        e.errorIconMarkup = function() {
          var t2 = r + "--error", e2 = t2 + "__line";
          return '\n    <div class="' + t2 + '__x-mark">\n      <span class="' + e2 + " " + e2 + '--left"></span>\n      <span class="' + e2 + " " + e2 + '--right"></span>\n    </div>\n  ';
        }, e.warningIconMarkup = function() {
          var t2 = r + "--warning";
          return '\n    <span class="' + t2 + '__body">\n      <span class="' + t2 + '__dot"></span>\n    </span>\n  ';
        }, e.successIconMarkup = function() {
          var t2 = r + "--success";
          return '\n    <span class="' + t2 + "__line " + t2 + '__line--long"></span>\n    <span class="' + t2 + "__line " + t2 + '__line--tip"></span>\n\n    <div class="' + t2 + '__ring"></div>\n    <div class="' + t2 + '__hide-corners"></div>\n  ';
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(0), r = o.default.CONTENT;
        e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n';
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(0), r = o.default.BUTTON_CONTAINER, i = o.default.BUTTON, a = o.default.BUTTON_LOADER;
        e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(4), r = n(2), i = n(0), a = i.default.ICON, s = i.default.ICON_CUSTOM, c = ["error", "warning", "success", "info"], l = { error: r.errorIconMarkup(), warning: r.warningIconMarkup(), success: r.successIconMarkup() }, u = function(t2, e2) {
          var n2 = a + "--" + t2;
          e2.classList.add(n2);
          var o2 = l[t2];
          o2 && (e2.innerHTML = o2);
        }, f = function(t2, e2) {
          e2.classList.add(s);
          var n2 = document.createElement("img");
          n2.src = t2, e2.appendChild(n2);
        }, d = function(t2) {
          if (t2) {
            var e2 = o.injectElIntoModal(r.iconMarkup);
            c.includes(t2) ? u(t2, e2) : f(t2, e2);
          }
        };
        e.default = d;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(2), r = n(4), i = function(t2) {
          navigator.userAgent.includes("AppleWebKit") && (t2.style.display = "none", t2.offsetHeight, t2.style.display = "");
        };
        e.initTitle = function(t2) {
          if (t2) {
            var e2 = r.injectElIntoModal(o.titleMarkup);
            e2.textContent = t2, i(e2);
          }
        }, e.initText = function(t2) {
          if (t2) {
            var e2 = document.createDocumentFragment();
            t2.split("\n").forEach(function(t3, n3, o2) {
              e2.appendChild(document.createTextNode(t3)), n3 < o2.length - 1 && e2.appendChild(document.createElement("br"));
            });
            var n2 = r.injectElIntoModal(o.textMarkup);
            n2.appendChild(e2), i(n2);
          }
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(1), r = n(4), i = n(0), a = i.default.BUTTON, s = i.default.DANGER_BUTTON, c = n(3), l = n(2), u = n(6), f = n(5), d = function(t2, e2, n2) {
          var r2 = e2.text, i2 = e2.value, d2 = e2.className, p2 = e2.closeModal, m = o.stringToNode(l.buttonMarkup), b = m.querySelector("." + a), v = a + "--" + t2;
          if (b.classList.add(v), d2) {
            (Array.isArray(d2) ? d2 : d2.split(" ")).filter(function(t3) {
              return t3.length > 0;
            }).forEach(function(t3) {
              b.classList.add(t3);
            });
          }
          n2 && t2 === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r2;
          var g = {};
          return g[t2] = i2, f.setActionValue(g), f.setActionOptionsFor(t2, { closeModal: p2 }), b.addEventListener("click", function() {
            return u.onAction(t2);
          }), m;
        }, p = function(t2, e2) {
          var n2 = r.injectElIntoModal(l.footerMarkup);
          for (var o2 in t2) {
            var i2 = t2[o2], a2 = d(o2, i2, e2);
            i2.visible && n2.appendChild(a2);
          }
          n2.children.length === 0 && n2.remove();
        };
        e.default = p;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(3), r = n(4), i = n(2), a = n(5), s = n(6), c = n(0), l = c.default.CONTENT, u = function(t2) {
          t2.addEventListener("input", function(t3) {
            var e2 = t3.target, n2 = e2.value;
            a.setActionValue(n2);
          }), t2.addEventListener("keyup", function(t3) {
            if (t3.key === "Enter")
              return s.onAction(o.CONFIRM_KEY);
          }), setTimeout(function() {
            t2.focus(), a.setActionValue("");
          }, 0);
        }, f = function(t2, e2, n2) {
          var o2 = document.createElement(e2), r2 = l + "__" + e2;
          o2.classList.add(r2);
          for (var i2 in n2) {
            var a2 = n2[i2];
            o2[i2] = a2;
          }
          e2 === "input" && u(o2), t2.appendChild(o2);
        }, d = function(t2) {
          if (t2) {
            var e2 = r.injectElIntoModal(i.contentMarkup), n2 = t2.element, o2 = t2.attributes;
            typeof n2 == "string" ? f(e2, n2, o2) : e2.appendChild(n2);
          }
        };
        e.default = d;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(1), r = n(2), i = function() {
          var t2 = o.stringToNode(r.overlayMarkup);
          document.body.appendChild(t2);
        };
        e.default = i;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(5), r = n(6), i = n(1), a = n(3), s = n(0), c = s.default.MODAL, l = s.default.BUTTON, u = s.default.OVERLAY, f = function(t2) {
          t2.preventDefault(), v();
        }, d = function(t2) {
          t2.preventDefault(), g();
        }, p = function(t2) {
          if (o.default.isOpen)
            switch (t2.key) {
              case "Escape":
                return r.onAction(a.CANCEL_KEY);
            }
        }, m = function(t2) {
          if (o.default.isOpen)
            switch (t2.key) {
              case "Tab":
                return f(t2);
            }
        }, b = function(t2) {
          if (o.default.isOpen)
            return t2.key === "Tab" && t2.shiftKey ? d(t2) : void 0;
        }, v = function() {
          var t2 = i.getNode(l);
          t2 && (t2.tabIndex = 0, t2.focus());
        }, g = function() {
          var t2 = i.getNode(c), e2 = t2.querySelectorAll("." + l), n2 = e2.length - 1, o2 = e2[n2];
          o2 && o2.focus();
        }, h = function(t2) {
          t2[t2.length - 1].addEventListener("keydown", m);
        }, w = function(t2) {
          t2[0].addEventListener("keydown", b);
        }, y = function() {
          var t2 = i.getNode(c), e2 = t2.querySelectorAll("." + l);
          e2.length && (h(e2), w(e2));
        }, x = function(t2) {
          if (i.getNode(u) === t2.target)
            return r.onAction(a.CANCEL_KEY);
        }, _ = function(t2) {
          var e2 = i.getNode(u);
          e2.removeEventListener("click", x), t2 && e2.addEventListener("click", x);
        }, k = function(t2) {
          o.default.timer && clearTimeout(o.default.timer), t2 && (o.default.timer = window.setTimeout(function() {
            return r.onAction(a.CANCEL_KEY);
          }, t2));
        }, O = function(t2) {
          t2.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t2.dangerMode ? v() : g(), y(), _(t2.closeOnClickOutside), k(t2.timer);
        };
        e.default = O;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(1), r = n(3), i = n(37), a = n(38), s = { title: null, text: null, icon: null, buttons: r.defaultButtonList, content: null, className: null, closeOnClickOutside: true, closeOnEsc: true, dangerMode: false, timer: null }, c = Object.assign({}, s);
        e.setDefaults = function(t2) {
          c = Object.assign({}, s, t2);
        };
        var l = function(t2) {
          var e2 = t2 && t2.button, n2 = t2 && t2.buttons;
          return e2 !== void 0 && n2 !== void 0 && o.throwErr("Cannot set both 'button' and 'buttons' options!"), e2 !== void 0 ? { confirm: e2 } : n2;
        }, u = function(t2) {
          return o.ordinalSuffixOf(t2 + 1);
        }, f = function(t2, e2) {
          o.throwErr(u(e2) + " argument ('" + t2 + "') is invalid");
        }, d = function(t2, e2) {
          var n2 = t2 + 1, r2 = e2[n2];
          o.isPlainObject(r2) || r2 === void 0 || o.throwErr("Expected " + u(n2) + " argument ('" + r2 + "') to be a plain object");
        }, p = function(t2, e2) {
          var n2 = t2 + 1, r2 = e2[n2];
          r2 !== void 0 && o.throwErr("Unexpected " + u(n2) + " argument (" + r2 + ")");
        }, m = function(t2, e2, n2, r2) {
          var i2 = typeof e2, a2 = i2 === "string", s2 = e2 instanceof Element;
          if (a2) {
            if (n2 === 0)
              return { text: e2 };
            if (n2 === 1)
              return { text: e2, title: r2[0] };
            if (n2 === 2)
              return d(n2, r2), { icon: e2 };
            f(e2, n2);
          } else {
            if (s2 && n2 === 0)
              return d(n2, r2), { content: e2 };
            if (o.isPlainObject(e2))
              return p(n2, r2), e2;
            f(e2, n2);
          }
        };
        e.getOpts = function() {
          for (var t2 = [], e2 = 0; e2 < arguments.length; e2++)
            t2[e2] = arguments[e2];
          var n2 = {};
          t2.forEach(function(e3, o3) {
            var r2 = m(0, e3, o3, t2);
            Object.assign(n2, r2);
          });
          var o2 = l(n2);
          n2.buttons = r.getButtonListOpts(o2), delete n2.button, n2.content = i.getContentOpts(n2.content);
          var u2 = Object.assign({}, s, c, n2);
          return Object.keys(u2).forEach(function(t3) {
            a.DEPRECATED_OPTS[t3] && a.logDeprecation(t3);
          }), u2;
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = n(1), r = { element: "input", attributes: { placeholder: "" } };
        e.getContentOpts = function(t2) {
          var e2 = {};
          return o.isPlainObject(t2) ? Object.assign(e2, t2) : t2 instanceof Element ? { element: t2 } : t2 === "input" ? r : null;
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.logDeprecation = function(t2) {
          var n2 = e.DEPRECATED_OPTS[t2], o = n2.onlyRename, r = n2.replacement, i = n2.subOption, a = n2.link, s = o ? "renamed" : "deprecated", c = 'SweetAlert warning: "' + t2 + '" option has been ' + s + ".";
          if (r) {
            c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.';
          }
          var l = "https://sweetalert.js.org";
          c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c);
        }, e.DEPRECATED_OPTS = { type: { replacement: "icon", link: "/docs/#icon" }, imageUrl: { replacement: "icon", link: "/docs/#icon" }, customClass: { replacement: "className", onlyRename: true, link: "/docs/#classname" }, imageSize: {}, showCancelButton: { replacement: "buttons", link: "/docs/#buttons" }, showConfirmButton: { replacement: "button", link: "/docs/#button" }, confirmButtonText: { replacement: "button", link: "/docs/#button" }, confirmButtonColor: {}, cancelButtonText: { replacement: "buttons", link: "/docs/#buttons" }, closeOnConfirm: { replacement: "button", subOption: "closeModal", link: "/docs/#button" }, closeOnCancel: { replacement: "buttons", subOption: "closeModal", link: "/docs/#buttons" }, showLoaderOnConfirm: { replacement: "buttons" }, animation: {}, inputType: { replacement: "content", link: "/docs/#content" }, inputValue: { replacement: "content", link: "/docs/#content" }, inputPlaceholder: { replacement: "content", link: "/docs/#content" }, html: { replacement: "content", link: "/docs/#content" }, allowEscapeKey: { replacement: "closeOnEsc", onlyRename: true, link: "/docs/#closeonesc" }, allowClickOutside: { replacement: "closeOnClickOutside", onlyRename: true, link: "/docs/#closeonclickoutside" } };
      }]);
    });
  }
});

// app/old-app/assets/logo2.png
var require_logo2 = __commonJS({
  "app/old-app/assets/logo2.png"(exports, module) {
    module.exports = "/build/_assets/logo2-G4LYX4VA.png";
  }
});

// app/old-app/assets/error.png
var require_error = __commonJS({
  "app/old-app/assets/error.png"(exports, module) {
    module.exports = "/build/_assets/error-4O7QQ75Q.png";
  }
});

// node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet;
var init_emotion_sheet_browser_esm = __esm({
  "node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js"() {
    init_react();
    StyleSheet = /* @__PURE__ */ function() {
      function StyleSheet2(options) {
        var _this = this;
        this._insertTag = function(tag) {
          var before;
          if (_this.tags.length === 0) {
            if (_this.insertionPoint) {
              before = _this.insertionPoint.nextSibling;
            } else if (_this.prepend) {
              before = _this.container.firstChild;
            } else {
              before = _this.before;
            }
          } else {
            before = _this.tags[_this.tags.length - 1].nextSibling;
          }
          _this.container.insertBefore(tag, before);
          _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce;
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.insertionPoint = options.insertionPoint;
        this.before = null;
      }
      var _proto = StyleSheet2.prototype;
      _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
      };
      _proto.insert = function insert(rule) {
        if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
          this._insertTag(createStyleElement(this));
        }
        var tag = this.tags[this.tags.length - 1];
        if (true) {
          var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
          if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
            console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
          }
          this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
        }
        if (this.isSpeedy) {
          var sheet = sheetForTag(tag);
          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e) {
            if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
              console.error('There was a problem inserting the following rule: "' + rule + '"', e);
            }
          }
        } else {
          tag.appendChild(document.createTextNode(rule));
        }
        this.ctr++;
      };
      _proto.flush = function flush() {
        this.tags.forEach(function(tag) {
          return tag.parentNode && tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
        if (true) {
          this._alreadyInsertedOrderInsensitiveRule = false;
        }
      };
      return StyleSheet2;
    }();
  }
});

// node_modules/stylis/src/Enum.js
var MS, MOZ, WEBKIT, COMMENT, RULESET, DECLARATION, IMPORT, KEYFRAMES;
var init_Enum = __esm({
  "node_modules/stylis/src/Enum.js"() {
    init_react();
    MS = "-ms-";
    MOZ = "-moz-";
    WEBKIT = "-webkit-";
    COMMENT = "comm";
    RULESET = "rule";
    DECLARATION = "decl";
    IMPORT = "@import";
    KEYFRAMES = "@keyframes";
  }
});

// node_modules/stylis/src/Utility.js
function hash(value, length2) {
  return (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var abs, from, assign;
var init_Utility = __esm({
  "node_modules/stylis/src/Utility.js"() {
    init_react();
    abs = Math.abs;
    from = String.fromCharCode;
    assign = Object.assign;
  }
});

// node_modules/stylis/src/Tokenizer.js
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
var line, column, length, position, character, characters;
var init_Tokenizer = __esm({
  "node_modules/stylis/src/Tokenizer.js"() {
    init_react();
    init_Utility();
    line = 1;
    column = 1;
    length = 0;
    position = 0;
    character = 0;
    characters = "";
  }
});

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
var init_Parser = __esm({
  "node_modules/stylis/src/Parser.js"() {
    init_react();
    init_Enum();
    init_Utility();
    init_Tokenizer();
  }
});

// node_modules/stylis/src/Prefixer.js
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var init_Prefixer = __esm({
  "node_modules/stylis/src/Prefixer.js"() {
    init_react();
    init_Enum();
    init_Utility();
  }
});

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
var init_Serializer = __esm({
  "node_modules/stylis/src/Serializer.js"() {
    init_react();
    init_Enum();
    init_Utility();
  }
});

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
                case "::placeholder":
                  return serialize([
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
                  ], callback);
              }
              return "";
            });
      }
  }
}
var init_Middleware = __esm({
  "node_modules/stylis/src/Middleware.js"() {
    init_react();
    init_Enum();
    init_Utility();
    init_Tokenizer();
    init_Serializer();
    init_Prefixer();
  }
});

// node_modules/stylis/index.js
var init_stylis = __esm({
  "node_modules/stylis/index.js"() {
    init_react();
    init_Enum();
    init_Utility();
    init_Parser();
    init_Prefixer();
    init_Tokenizer();
    init_Serializer();
    init_Middleware();
  }
});

// node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js
var weakMemoize, weak_memoize_browser_esm_default;
var init_weak_memoize_browser_esm = __esm({
  "node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js"() {
    init_react();
    weakMemoize = function weakMemoize2(func) {
      var cache = /* @__PURE__ */ new WeakMap();
      return function(arg) {
        if (cache.has(arg)) {
          return cache.get(arg);
        }
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
      };
    };
    weak_memoize_browser_esm_default = weakMemoize;
  }
});

// node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var emotion_memoize_browser_esm_default;
var init_emotion_memoize_browser_esm = __esm({
  "node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js"() {
    init_react();
    emotion_memoize_browser_esm_default = memoize;
  }
});

// node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var last, identifierWithPointTracking, toRules, getRules, fixedElements, compat, removeLabel, ignoreFlag, isIgnoringComment, createUnsafeSelectorsAlarm, isImportRule, isPrependedWithRegularRules, nullifyElement, incorrectImportAlarm, defaultStylisPlugins, createCache, emotion_cache_browser_esm_default;
var init_emotion_cache_browser_esm = __esm({
  "node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"() {
    init_react();
    init_emotion_sheet_browser_esm();
    init_stylis();
    init_weak_memoize_browser_esm();
    init_emotion_memoize_browser_esm();
    last = function last2(arr) {
      return arr.length ? arr[arr.length - 1] : null;
    };
    identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
      var previous = 0;
      var character2 = 0;
      while (true) {
        previous = character2;
        character2 = peek();
        if (previous === 38 && character2 === 12) {
          points[index] = 1;
        }
        if (token(character2)) {
          break;
        }
        next();
      }
      return slice(begin, position);
    };
    toRules = function toRules2(parsed, points) {
      var index = -1;
      var character2 = 44;
      do {
        switch (token(character2)) {
          case 0:
            if (character2 === 38 && peek() === 12) {
              points[index] = 1;
            }
            parsed[index] += identifierWithPointTracking(position - 1, points, index);
            break;
          case 2:
            parsed[index] += delimit(character2);
            break;
          case 4:
            if (character2 === 44) {
              parsed[++index] = peek() === 58 ? "&\f" : "";
              points[index] = parsed[index].length;
              break;
            }
          default:
            parsed[index] += from(character2);
        }
      } while (character2 = next());
      return parsed;
    };
    getRules = function getRules2(value, points) {
      return dealloc(toRules(alloc(value), points));
    };
    fixedElements = /* @__PURE__ */ new WeakMap();
    compat = function compat2(element) {
      if (element.type !== "rule" || !element.parent || element.length < 1) {
        return;
      }
      var value = element.value, parent = element.parent;
      var isImplicitRule = element.column === parent.column && element.line === parent.line;
      while (parent.type !== "rule") {
        parent = parent.parent;
        if (!parent)
          return;
      }
      if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
        return;
      }
      if (isImplicitRule) {
        return;
      }
      fixedElements.set(element, true);
      var points = [];
      var rules = getRules(value, points);
      var parentRules = parent.props;
      for (var i = 0, k = 0; i < rules.length; i++) {
        for (var j = 0; j < parentRules.length; j++, k++) {
          element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
        }
      }
    };
    removeLabel = function removeLabel2(element) {
      if (element.type === "decl") {
        var value = element.value;
        if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
          element["return"] = "";
          element.value = "";
        }
      }
    };
    ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
    isIgnoringComment = function isIgnoringComment2(element) {
      return !!element && element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
    };
    createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
      return function(element, index, children) {
        if (element.type !== "rule")
          return;
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
        if (unsafePseudoClasses && cache.compat !== true) {
          var prevElement = index > 0 ? children[index - 1] : null;
          if (prevElement && isIgnoringComment(last(prevElement.children))) {
            return;
          }
          unsafePseudoClasses.forEach(function(unsafePseudoClass) {
            console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
          });
        }
      };
    };
    isImportRule = function isImportRule2(element) {
      return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
    };
    isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
      for (var i = index - 1; i >= 0; i--) {
        if (!isImportRule(children[i])) {
          return true;
        }
      }
      return false;
    };
    nullifyElement = function nullifyElement2(element) {
      element.type = "";
      element.value = "";
      element["return"] = "";
      element.children = "";
      element.props = "";
    };
    incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
      if (!isImportRule(element)) {
        return;
      }
      if (element.parent) {
        console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
        nullifyElement(element);
      } else if (isPrependedWithRegularRules(index, children)) {
        console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
        nullifyElement(element);
      }
    };
    defaultStylisPlugins = [prefixer];
    createCache = function createCache2(options) {
      var key = options.key;
      if (!key) {
        throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
      }
      if (key === "css") {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(ssrStyles, function(node2) {
          var dataEmotionAttribute = node2.getAttribute("data-emotion");
          if (dataEmotionAttribute.indexOf(" ") === -1) {
            return;
          }
          document.head.appendChild(node2);
          node2.setAttribute("data-s", "");
        });
      }
      var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
      if (true) {
        if (/[^a-z-]/.test(key)) {
          throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
        }
      }
      var inserted = {};
      var container;
      var nodesToHydrate = [];
      {
        container = options.container || document.head;
        Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
          var attrib = node2.getAttribute("data-emotion").split(" ");
          for (var i = 1; i < attrib.length; i++) {
            inserted[attrib[i]] = true;
          }
          nodesToHydrate.push(node2);
        });
      }
      var _insert;
      var omnipresentPlugins = [compat, removeLabel];
      if (true) {
        omnipresentPlugins.push(createUnsafeSelectorsAlarm({
          get compat() {
            return cache.compat;
          }
        }), incorrectImportAlarm);
      }
      {
        var currentSheet;
        var finalizingPlugins = [stringify, true ? function(element) {
          if (!element.root) {
            if (element["return"]) {
              currentSheet.insert(element["return"]);
            } else if (element.value && element.type !== COMMENT) {
              currentSheet.insert(element.value + "{}");
            }
          }
        } : rulesheet(function(rule) {
          currentSheet.insert(rule);
        })];
        var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
        var stylis = function stylis2(styles) {
          return serialize(compile(styles), serializer);
        };
        _insert = function insert(selector, serialized, sheet, shouldCache) {
          currentSheet = sheet;
          if (serialized.map !== void 0) {
            currentSheet = {
              insert: function insert2(rule) {
                sheet.insert(rule + serialized.map);
              }
            };
          }
          stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
          if (shouldCache) {
            cache.inserted[serialized.name] = true;
          }
        };
      }
      var cache = {
        key,
        sheet: new StyleSheet({
          key,
          container,
          nonce: options.nonce,
          speedy: options.speedy,
          prepend: options.prepend,
          insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted,
        registered: {},
        insert: _insert
      };
      cache.sheet.hydrate(nodesToHydrate);
      return cache;
    };
    emotion_cache_browser_esm_default = createCache;
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment3 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment3;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    init_react();
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics2;
  }
});

// node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js
var import_hoist_non_react_statics, hoistNonReactStatics, emotion_react_isolated_hnrs_browser_esm_default;
var init_emotion_react_isolated_hnrs_browser_esm = __esm({
  "node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js"() {
    init_react();
    import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
    hoistNonReactStatics = function(targetComponent, sourceComponent) {
      return (0, import_hoist_non_react_statics.default)(targetComponent, sourceComponent);
    };
    emotion_react_isolated_hnrs_browser_esm_default = hoistNonReactStatics;
  }
});

// node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var isBrowser, registerStyles, insertStyles;
var init_emotion_utils_browser_esm = __esm({
  "node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"() {
    init_react();
    isBrowser = true;
    registerStyles = function registerStyles2(cache, serialized, isStringTag) {
      var className = cache.key + "-" + serialized.name;
      if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
        cache.registered[className] = serialized.styles;
      }
    };
    insertStyles = function insertStyles2(cache, serialized, isStringTag) {
      registerStyles(cache, serialized, isStringTag);
      var className = cache.key + "-" + serialized.name;
      if (cache.inserted[serialized.name] === void 0) {
        var current = serialized;
        do {
          var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
          current = current.next;
        } while (current !== void 0);
      }
    };
  }
});

// node_modules/@emotion/hash/dist/hash.browser.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= k >>> 24;
    h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var hash_browser_esm_default;
var init_hash_browser_esm = __esm({
  "node_modules/@emotion/hash/dist/hash.browser.esm.js"() {
    init_react();
    hash_browser_esm_default = murmur2;
  }
});

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys, unitless_browser_esm_default;
var init_unitless_browser_esm = __esm({
  "node_modules/@emotion/unitless/dist/unitless.browser.esm.js"() {
    init_react();
    unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };
    unitless_browser_esm_default = unitlessKeys;
  }
});

// node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
      throw new Error(noComponentSelectorMessage);
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = interpolation.styles + ";";
        if (interpolation.map !== void 0) {
          styles += interpolation.map;
        }
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else if (true) {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && true) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (_key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var ILLEGAL_ESCAPE_SEQUENCE_ERROR, UNDEFINED_AS_OBJECT_KEY_ERROR, hyphenateRegex, animationRegex, isCustomProperty, isProcessableValue, processStyleName, processStyleValue, contentValuePattern, contentValues, oldProcessStyleValue, msPattern, hyphenPattern, hyphenatedCache, noComponentSelectorMessage, labelPattern, sourceMapPattern, cursor, serializeStyles;
var init_emotion_serialize_browser_esm = __esm({
  "node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"() {
    init_react();
    init_hash_browser_esm();
    init_unitless_browser_esm();
    init_emotion_memoize_browser_esm();
    ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
    UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
    hyphenateRegex = /[A-Z]|^ms/g;
    animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
    isCustomProperty = function isCustomProperty2(property) {
      return property.charCodeAt(1) === 45;
    };
    isProcessableValue = function isProcessableValue2(value) {
      return value != null && typeof value !== "boolean";
    };
    processStyleName = /* @__PURE__ */ emotion_memoize_browser_esm_default(function(styleName) {
      return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
    });
    processStyleValue = function processStyleValue2(key, value) {
      switch (key) {
        case "animation":
        case "animationName": {
          if (typeof value === "string") {
            return value.replace(animationRegex, function(match2, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
      }
      if (unitless_browser_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
        return value + "px";
      }
      return value;
    };
    if (true) {
      contentValuePattern = /(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
      contentValues = ["normal", "none", "initial", "inherit", "unset"];
      oldProcessStyleValue = processStyleValue;
      msPattern = /^-ms-/;
      hyphenPattern = /-(.)/g;
      hyphenatedCache = {};
      processStyleValue = function processStyleValue3(key, value) {
        if (key === "content") {
          if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
            throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
          }
        }
        var processed = oldProcessStyleValue(key, value);
        if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
          hyphenatedCache[key] = true;
          console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
            return _char.toUpperCase();
          }) + "?");
        }
        return processed;
      };
    }
    noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
    labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
    if (true) {
      sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
    }
    serializeStyles = function serializeStyles2(args, registered, mergedProps) {
      if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
        return args[0];
      }
      var stringMode = true;
      var styles = "";
      cursor = void 0;
      var strings = args[0];
      if (strings == null || strings.raw === void 0) {
        stringMode = false;
        styles += handleInterpolation(mergedProps, registered, strings);
      } else {
        if (strings[0] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles += strings[0];
      }
      for (var i = 1; i < args.length; i++) {
        styles += handleInterpolation(mergedProps, registered, args[i]);
        if (stringMode) {
          if (strings[i] === void 0) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
          }
          styles += strings[i];
        }
      }
      var sourceMap;
      if (true) {
        styles = styles.replace(sourceMapPattern, function(match3) {
          sourceMap = match3;
          return "";
        });
      }
      labelPattern.lastIndex = 0;
      var identifierName = "";
      var match2;
      while ((match2 = labelPattern.exec(styles)) !== null) {
        identifierName += "-" + match2[1];
      }
      var name4 = hash_browser_esm_default(styles) + identifierName;
      if (true) {
        return {
          name: name4,
          styles,
          map: sourceMap,
          next: cursor,
          toString: function toString() {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          }
        };
      }
      return {
        name: name4,
        styles,
        next: cursor
      };
    };
  }
});

// node_modules/@emotion/react/dist/emotion-element-cbed451f.browser.esm.js
function withTheme(Component2) {
  var componentName = Component2.displayName || Component2.name || "Component";
  var render = function render2(props, ref) {
    var theme = (0, import_react35.useContext)(ThemeContext);
    return /* @__PURE__ */ (0, import_react35.createElement)(Component2, _extends({
      theme,
      ref
    }, props));
  };
  var WithTheme = /* @__PURE__ */ (0, import_react35.forwardRef)(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return emotion_react_isolated_hnrs_browser_esm_default(WithTheme, Component2);
}
function useInsertionEffectMaybe(create) {
  useInsertionEffect2(create);
}
var React33, import_react35, hasOwnProperty, EmotionCacheContext, CacheProvider, __unsafe_useEmotionCache, withEmotionCache, ThemeContext, useTheme, getTheme, createCacheWithTheme, ThemeProvider, getLastPart, getFunctionNameFromStackTraceLine, internalReactFunctionNames, sanitizeIdentifier, getLabelFromStackTrace, useInsertionEffect2, typePropName, labelPropName, createEmotionProps, Insertion, Emotion;
var init_emotion_element_cbed451f_browser_esm = __esm({
  "node_modules/@emotion/react/dist/emotion-element-cbed451f.browser.esm.js"() {
    init_react();
    React33 = __toESM(require_react());
    import_react35 = __toESM(require_react());
    init_emotion_cache_browser_esm();
    init_extends();
    init_weak_memoize_browser_esm();
    init_emotion_react_isolated_hnrs_browser_esm();
    init_emotion_utils_browser_esm();
    init_emotion_serialize_browser_esm();
    hasOwnProperty = {}.hasOwnProperty;
    EmotionCacheContext = /* @__PURE__ */ (0, import_react35.createContext)(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ emotion_cache_browser_esm_default({
      key: "css"
    }) : null);
    if (true) {
      EmotionCacheContext.displayName = "EmotionCacheContext";
    }
    CacheProvider = EmotionCacheContext.Provider;
    __unsafe_useEmotionCache = function useEmotionCache() {
      return (0, import_react35.useContext)(EmotionCacheContext);
    };
    withEmotionCache = function withEmotionCache2(func) {
      return /* @__PURE__ */ (0, import_react35.forwardRef)(function(props, ref) {
        var cache = (0, import_react35.useContext)(EmotionCacheContext);
        return func(props, cache, ref);
      });
    };
    ThemeContext = /* @__PURE__ */ (0, import_react35.createContext)({});
    if (true) {
      ThemeContext.displayName = "EmotionThemeContext";
    }
    useTheme = function useTheme2() {
      return (0, import_react35.useContext)(ThemeContext);
    };
    getTheme = function getTheme2(outerTheme, theme) {
      if (typeof theme === "function") {
        var mergedTheme = theme(outerTheme);
        if (mergedTheme == null || typeof mergedTheme !== "object" || Array.isArray(mergedTheme)) {
          throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
        }
        return mergedTheme;
      }
      if (theme == null || typeof theme !== "object" || Array.isArray(theme)) {
        throw new Error("[ThemeProvider] Please make your theme prop a plain object");
      }
      return _extends({}, outerTheme, theme);
    };
    createCacheWithTheme = /* @__PURE__ */ weak_memoize_browser_esm_default(function(outerTheme) {
      return weak_memoize_browser_esm_default(function(theme) {
        return getTheme(outerTheme, theme);
      });
    });
    ThemeProvider = function ThemeProvider2(props) {
      var theme = (0, import_react35.useContext)(ThemeContext);
      if (props.theme !== theme) {
        theme = createCacheWithTheme(theme)(props.theme);
      }
      return /* @__PURE__ */ (0, import_react35.createElement)(ThemeContext.Provider, {
        value: theme
      }, props.children);
    };
    getLastPart = function getLastPart2(functionName) {
      var parts = functionName.split(".");
      return parts[parts.length - 1];
    };
    getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine2(line2) {
      var match2 = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line2);
      if (match2)
        return getLastPart(match2[1]);
      match2 = /^([A-Za-z0-9$.]+)@/.exec(line2);
      if (match2)
        return getLastPart(match2[1]);
      return void 0;
    };
    internalReactFunctionNames = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]);
    sanitizeIdentifier = function sanitizeIdentifier2(identifier2) {
      return identifier2.replace(/\$/g, "-");
    };
    getLabelFromStackTrace = function getLabelFromStackTrace2(stackTrace) {
      if (!stackTrace)
        return void 0;
      var lines = stackTrace.split("\n");
      for (var i = 0; i < lines.length; i++) {
        var functionName = getFunctionNameFromStackTraceLine(lines[i]);
        if (!functionName)
          continue;
        if (internalReactFunctionNames.has(functionName))
          break;
        if (/^[A-Z]/.test(functionName))
          return sanitizeIdentifier(functionName);
      }
      return void 0;
    };
    useInsertionEffect2 = React33["useInsertionEffect"] ? React33["useInsertionEffect"] : function useInsertionEffect3(create) {
      create();
    };
    typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
    labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
    createEmotionProps = function createEmotionProps2(type, props) {
      if (typeof props.css === "string" && props.css.indexOf(":") !== -1) {
        throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
      }
      var newProps = {};
      for (var key in props) {
        if (hasOwnProperty.call(props, key)) {
          newProps[key] = props[key];
        }
      }
      newProps[typePropName] = type;
      if (!!props.css && (typeof props.css !== "object" || typeof props.css.name !== "string" || props.css.name.indexOf("-") === -1)) {
        var label = getLabelFromStackTrace(new Error().stack);
        if (label)
          newProps[labelPropName] = label;
      }
      return newProps;
    };
    Insertion = function Insertion2(_ref) {
      var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
      registerStyles(cache, serialized, isStringTag);
      var rules = useInsertionEffectMaybe(function() {
        return insertStyles(cache, serialized, isStringTag);
      });
      return null;
    };
    Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
      var cssProp = props.css;
      if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
        cssProp = cache.registered[cssProp];
      }
      var WrappedComponent = props[typePropName];
      var registeredStyles = [cssProp];
      var className = "";
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(registeredStyles, void 0, (0, import_react35.useContext)(ThemeContext));
      if (serialized.name.indexOf("-") === -1) {
        var labelFromStack = props[labelPropName];
        if (labelFromStack) {
          serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
        }
      }
      className += cache.key + "-" + serialized.name;
      var newProps = {};
      for (var key in props) {
        if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
          newProps[key] = props[key];
        }
      }
      newProps.ref = ref;
      newProps.className = className;
      return /* @__PURE__ */ (0, import_react35.createElement)(import_react35.Fragment, null, /* @__PURE__ */ (0, import_react35.createElement)(Insertion, {
        cache,
        serialized,
        isStringTag: typeof WrappedComponent === "string"
      }), /* @__PURE__ */ (0, import_react35.createElement)(WrappedComponent, newProps));
    });
    if (true) {
      Emotion.displayName = "EmotionCssPropInternal";
    }
  }
});

// node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm_exports = {};
__export(emotion_react_browser_esm_exports, {
  CacheProvider: () => CacheProvider,
  ClassNames: () => ClassNames,
  Global: () => Global,
  ThemeContext: () => ThemeContext,
  ThemeProvider: () => ThemeProvider,
  __unsafe_useEmotionCache: () => __unsafe_useEmotionCache,
  createElement: () => jsx,
  css: () => css,
  jsx: () => jsx,
  keyframes: () => keyframes,
  useTheme: () => useTheme,
  withEmotionCache: () => withEmotionCache,
  withTheme: () => withTheme
});
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
function merge(registered, css2, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css2(registeredStyles);
}
var React34, import_react36, import_hoist_non_react_statics2, pkg, jsx, useInsertionEffect5, warnedAboutCssPropForGlobal, Global, keyframes, classnames, Insertion3, ClassNames, isBrowser2, isJest, globalContext, globalKey;
var init_emotion_react_browser_esm = __esm({
  "node_modules/@emotion/react/dist/emotion-react.browser.esm.js"() {
    init_react();
    React34 = __toESM(require_react());
    import_react36 = __toESM(require_react());
    init_emotion_cache_browser_esm();
    init_emotion_element_cbed451f_browser_esm();
    init_emotion_element_cbed451f_browser_esm();
    init_extends();
    init_weak_memoize_browser_esm();
    import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());
    init_emotion_utils_browser_esm();
    init_emotion_serialize_browser_esm();
    pkg = {
      name: "@emotion/react",
      version: "11.9.3",
      main: "dist/emotion-react.cjs.js",
      module: "dist/emotion-react.esm.js",
      browser: {
        "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
        "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
      },
      types: "types/index.d.ts",
      files: [
        "src",
        "dist",
        "jsx-runtime",
        "jsx-dev-runtime",
        "_isolated-hnrs",
        "types/*.d.ts",
        "macro.js",
        "macro.d.ts",
        "macro.js.flow"
      ],
      sideEffects: false,
      author: "Emotion Contributors",
      license: "MIT",
      scripts: {
        "test:typescript": "dtslint types"
      },
      dependencies: {
        "@babel/runtime": "^7.13.10",
        "@emotion/babel-plugin": "^11.7.1",
        "@emotion/cache": "^11.9.3",
        "@emotion/serialize": "^1.0.4",
        "@emotion/utils": "^1.1.0",
        "@emotion/weak-memoize": "^0.2.5",
        "hoist-non-react-statics": "^3.3.1"
      },
      peerDependencies: {
        "@babel/core": "^7.0.0",
        react: ">=16.8.0"
      },
      peerDependenciesMeta: {
        "@babel/core": {
          optional: true
        },
        "@types/react": {
          optional: true
        }
      },
      devDependencies: {
        "@babel/core": "^7.13.10",
        "@definitelytyped/dtslint": "0.0.112",
        "@emotion/css": "11.9.0",
        "@emotion/css-prettifier": "1.0.1",
        "@emotion/server": "11.4.0",
        "@emotion/styled": "11.9.3",
        "html-tag-names": "^1.1.2",
        react: "16.14.0",
        "svg-tag-names": "^1.1.1",
        typescript: "^4.5.5"
      },
      repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
      publishConfig: {
        access: "public"
      },
      "umd:main": "dist/emotion-react.umd.min.js",
      preconstruct: {
        entrypoints: [
          "./index.js",
          "./jsx-runtime.js",
          "./jsx-dev-runtime.js",
          "./_isolated-hnrs.js"
        ],
        umdName: "emotionReact"
      }
    };
    jsx = function jsx2(type, props) {
      var args = arguments;
      if (props == null || !hasOwnProperty.call(props, "css")) {
        return import_react36.createElement.apply(void 0, args);
      }
      var argsLength = args.length;
      var createElementArgArray = new Array(argsLength);
      createElementArgArray[0] = Emotion;
      createElementArgArray[1] = createEmotionProps(type, props);
      for (var i = 2; i < argsLength; i++) {
        createElementArgArray[i] = args[i];
      }
      return import_react36.createElement.apply(null, createElementArgArray);
    };
    useInsertionEffect5 = React34["useInsertionEffect"] ? React34["useInsertionEffect"] : import_react36.useLayoutEffect;
    warnedAboutCssPropForGlobal = false;
    Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
      if (!warnedAboutCssPropForGlobal && (props.className || props.css)) {
        console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
        warnedAboutCssPropForGlobal = true;
      }
      var styles = props.styles;
      var serialized = serializeStyles([styles], void 0, (0, import_react36.useContext)(ThemeContext));
      var sheetRef = (0, import_react36.useRef)();
      useInsertionEffect5(function() {
        var key = cache.key + "-global";
        var sheet = new cache.sheet.constructor({
          key,
          nonce: cache.sheet.nonce,
          container: cache.sheet.container,
          speedy: cache.sheet.isSpeedy
        });
        var rehydrating = false;
        var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
        if (cache.sheet.tags.length) {
          sheet.before = cache.sheet.tags[0];
        }
        if (node2 !== null) {
          rehydrating = true;
          node2.setAttribute("data-emotion", key);
          sheet.hydrate([node2]);
        }
        sheetRef.current = [sheet, rehydrating];
        return function() {
          sheet.flush();
        };
      }, [cache]);
      useInsertionEffect5(function() {
        var sheetRefCurrent = sheetRef.current;
        var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
        if (rehydrating) {
          sheetRefCurrent[1] = false;
          return;
        }
        if (serialized.next !== void 0) {
          insertStyles(cache, serialized.next, true);
        }
        if (sheet.tags.length) {
          var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
          sheet.before = element;
          sheet.flush();
        }
        cache.insert("", serialized, sheet, false);
      }, [cache, serialized.name]);
      return null;
    });
    if (true) {
      Global.displayName = "EmotionGlobal";
    }
    keyframes = function keyframes2() {
      var insertable = css.apply(void 0, arguments);
      var name4 = "animation-" + insertable.name;
      return {
        name: name4,
        styles: "@keyframes " + name4 + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
      };
    };
    classnames = function classnames2(args) {
      var len = args.length;
      var i = 0;
      var cls = "";
      for (; i < len; i++) {
        var arg = args[i];
        if (arg == null)
          continue;
        var toAdd = void 0;
        switch (typeof arg) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(arg)) {
              toAdd = classnames2(arg);
            } else {
              if (arg.styles !== void 0 && arg.name !== void 0) {
                console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
              }
              toAdd = "";
              for (var k in arg) {
                if (arg[k] && k) {
                  toAdd && (toAdd += " ");
                  toAdd += k;
                }
              }
            }
            break;
          }
          default: {
            toAdd = arg;
          }
        }
        if (toAdd) {
          cls && (cls += " ");
          cls += toAdd;
        }
      }
      return cls;
    };
    Insertion3 = function Insertion4(_ref) {
      var cache = _ref.cache, serializedArr = _ref.serializedArr;
      var rules = useInsertionEffectMaybe(function() {
        for (var i = 0; i < serializedArr.length; i++) {
          var res = insertStyles(cache, serializedArr[i], false);
        }
      });
      return null;
    };
    ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
      var hasRendered = false;
      var serializedArr = [];
      var css2 = function css3() {
        if (hasRendered && true) {
          throw new Error("css can only be used during render");
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var serialized = serializeStyles(args, cache.registered);
        serializedArr.push(serialized);
        registerStyles(cache, serialized, false);
        return cache.key + "-" + serialized.name;
      };
      var cx = function cx2() {
        if (hasRendered && true) {
          throw new Error("cx can only be used during render");
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return merge(cache.registered, css2, classnames(args));
      };
      var content = {
        css: css2,
        cx,
        theme: (0, import_react36.useContext)(ThemeContext)
      };
      var ele = props.children(content);
      hasRendered = true;
      return /* @__PURE__ */ (0, import_react36.createElement)(import_react36.Fragment, null, /* @__PURE__ */ (0, import_react36.createElement)(Insertion3, {
        cache,
        serializedArr
      }), ele);
    });
    if (true) {
      ClassNames.displayName = "EmotionClassNames";
    }
    if (true) {
      isBrowser2 = true;
      isJest = typeof jest !== "undefined";
      if (isBrowser2 && !isJest) {
        globalContext = typeof globalThis !== "undefined" ? globalThis : isBrowser2 ? window : globalThis;
        globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
        if (globalContext[globalKey]) {
          console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
        }
        globalContext[globalKey] = true;
      }
    }
  }
});

// node_modules/react-spinners/helpers/proptypes.js
var require_proptypes = __commonJS({
  "node_modules/react-spinners/helpers/proptypes.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.heightWidthRadiusDefaults = exports.heightWidthDefaults = exports.sizeMarginDefaults = exports.sizeDefaults = void 0;
    var commonValues = {
      loading: true,
      color: "#000000",
      css: "",
      speedMultiplier: 1
    };
    function sizeDefaults(sizeValue) {
      return Object.assign({}, commonValues, { size: sizeValue });
    }
    exports.sizeDefaults = sizeDefaults;
    function sizeMarginDefaults(sizeValue) {
      return Object.assign({}, sizeDefaults(sizeValue), {
        margin: 2
      });
    }
    exports.sizeMarginDefaults = sizeMarginDefaults;
    function heightWidthDefaults(height, width) {
      return Object.assign({}, commonValues, {
        height,
        width
      });
    }
    exports.heightWidthDefaults = heightWidthDefaults;
    function heightWidthRadiusDefaults(height, width, radius) {
      if (radius === void 0) {
        radius = 2;
      }
      return Object.assign({}, heightWidthDefaults(height, width), {
        radius,
        margin: 2
      });
    }
    exports.heightWidthRadiusDefaults = heightWidthRadiusDefaults;
  }
});

// node_modules/react-spinners/helpers/colors.js
var require_colors = __commonJS({
  "node_modules/react-spinners/helpers/colors.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateRgba = void 0;
    var BasicColors;
    (function(BasicColors2) {
      BasicColors2["maroon"] = "#800000";
      BasicColors2["red"] = "#FF0000";
      BasicColors2["orange"] = "#FFA500";
      BasicColors2["yellow"] = "#FFFF00";
      BasicColors2["olive"] = "#808000";
      BasicColors2["green"] = "#008000";
      BasicColors2["purple"] = "#800080";
      BasicColors2["fuchsia"] = "#FF00FF";
      BasicColors2["lime"] = "#00FF00";
      BasicColors2["teal"] = "#008080";
      BasicColors2["aqua"] = "#00FFFF";
      BasicColors2["blue"] = "#0000FF";
      BasicColors2["navy"] = "#000080";
      BasicColors2["black"] = "#000000";
      BasicColors2["gray"] = "#808080";
      BasicColors2["silver"] = "#C0C0C0";
      BasicColors2["white"] = "#FFFFFF";
    })(BasicColors || (BasicColors = {}));
    var calculateRgba = function(color, opacity) {
      if (Object.keys(BasicColors).includes(color)) {
        color = BasicColors[color];
      }
      if (color[0] === "#") {
        color = color.slice(1);
      }
      if (color.length === 3) {
        var res_1 = "";
        color.split("").forEach(function(c) {
          res_1 += c;
          res_1 += c;
        });
        color = res_1;
      }
      var rgbValues = (color.match(/.{2}/g) || []).map(function(hex) {
        return parseInt(hex, 16);
      }).join(", ");
      return "rgba(" + rgbValues + ", " + opacity + ")";
    };
    exports.calculateRgba = calculateRgba;
  }
});

// node_modules/react-spinners/helpers/unitConverter.js
var require_unitConverter = __commonJS({
  "node_modules/react-spinners/helpers/unitConverter.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cssValue = exports.parseLengthAndUnit = void 0;
    var cssUnit = {
      cm: true,
      mm: true,
      in: true,
      px: true,
      pt: true,
      pc: true,
      em: true,
      ex: true,
      ch: true,
      rem: true,
      vw: true,
      vh: true,
      vmin: true,
      vmax: true,
      "%": true
    };
    function parseLengthAndUnit(size) {
      if (typeof size === "number") {
        return {
          value: size,
          unit: "px"
        };
      }
      var value;
      var valueString = (size.match(/^[0-9.]*/) || "").toString();
      if (valueString.includes(".")) {
        value = parseFloat(valueString);
      } else {
        value = parseInt(valueString, 10);
      }
      var unit = (size.match(/[^0-9]*$/) || "").toString();
      if (cssUnit[unit]) {
        return {
          value,
          unit
        };
      }
      console.warn("React Spinners: " + size + " is not a valid css value. Defaulting to " + value + "px.");
      return {
        value,
        unit: "px"
      };
    }
    exports.parseLengthAndUnit = parseLengthAndUnit;
    function cssValue(value) {
      var lengthWithunit = parseLengthAndUnit(value);
      return "" + lengthWithunit.value + lengthWithunit.unit;
    }
    exports.cssValue = cssValue;
  }
});

// node_modules/react-spinners/helpers/index.js
var require_helpers = __commonJS({
  "node_modules/react-spinners/helpers/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding2(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(require_proptypes(), exports);
    __exportStar2(require_colors(), exports);
    __exportStar2(require_unitConverter(), exports);
  }
});

// node_modules/react-spinners/GridLoader.js
var require_GridLoader = __commonJS({
  "node_modules/react-spinners/GridLoader.js"(exports) {
    "use strict";
    init_react();
    var __makeTemplateObject2 = exports && exports.__makeTemplateObject || function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __extends2 = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React45 = __importStar2(require_react());
    var react_1 = (init_emotion_react_browser_esm(), __toCommonJS(emotion_react_browser_esm_exports));
    var helpers_1 = require_helpers();
    var grid = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject2(["\n  0% {transform: scale(1)}\n  50% {transform: scale(0.5); opacity: 0.7}\n  100% {transform: scale(1);opacity: 1}\n"], ["\n  0% {transform: scale(1)}\n  50% {transform: scale(0.5); opacity: 0.7}\n  100% {transform: scale(1);opacity: 1}\n"])));
    var random = function(top) {
      return Math.random() * top;
    };
    var Loader = function(_super) {
      __extends2(Loader2, _super);
      function Loader2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function(rand) {
          var _a = _this.props, color = _a.color, size = _a.size, margin = _a.margin, speedMultiplier = _a.speedMultiplier;
          return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject2(["\n      display: inline-block;\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ';\n      border-radius: 100%;\n      animation-fill-mode: "both";\n      animation: ', " ", "s ", "s infinite ease;\n    "], ["\n      display: inline-block;\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ';\n      border-radius: 100%;\n      animation-fill-mode: "both";\n      animation: ', " ", "s ", "s infinite ease;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(margin), grid, (rand / 100 + 0.6) / speedMultiplier, rand / 100 - 0.2);
        };
        _this.wrapper = function() {
          var _a = _this.props, size = _a.size, margin = _a.margin;
          var sizeWithUnit = helpers_1.parseLengthAndUnit(size);
          var marginWithUnit = helpers_1.parseLengthAndUnit(margin);
          var width = "" + (parseFloat(sizeWithUnit.value.toString()) * 3 + parseFloat(marginWithUnit.value.toString()) * 6) + sizeWithUnit.unit;
          return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject2(["\n      width: ", ";\n      font-size: 0;\n    "], ["\n      width: ", ";\n      font-size: 0;\n    "])), width);
        };
        return _this;
      }
      Loader2.prototype.render = function() {
        var _a = this.props, loading = _a.loading, css2 = _a.css;
        return loading ? react_1.jsx("span", { css: [this.wrapper(), css2] }, react_1.jsx("span", { css: this.style(random(100)) }), react_1.jsx("span", { css: this.style(random(100)) }), react_1.jsx("span", { css: this.style(random(100)) }), react_1.jsx("span", { css: this.style(random(100)) }), react_1.jsx("span", { css: this.style(random(100)) }), react_1.jsx("span", { css: this.style(random(100)) }), react_1.jsx("span", { css: this.style(random(100)) }), react_1.jsx("span", { css: this.style(random(100)) }), react_1.jsx("span", { css: this.style(random(100)) })) : null;
      };
      Loader2.defaultProps = helpers_1.sizeMarginDefaults(15);
      return Loader2;
    }(React45.PureComponent);
    exports.default = Loader;
    var templateObject_1;
    var templateObject_2;
    var templateObject_3;
  }
});

// app/old-app/assets/ordersuccess.png
var require_ordersuccess = __commonJS({
  "app/old-app/assets/ordersuccess.png"(exports, module) {
    module.exports = "/build/_assets/ordersuccess-FT3FDDZQ.png";
  }
});

// browser-route-module:/Users/hq/Desktop/techno/abuelo-restaurant/app/routes/$.jsx?browser
init_react();

// app/routes/$.jsx
init_react();

// app/old-app/App.jsx
init_react();
var import_react47 = __toESM(require_react());
init_react_router_dom();

// app/old-app/config/firebase.jsx
init_react();

// node_modules/firebase/app/dist/index.esm.js
init_react();

// node_modules/@firebase/app/dist/esm/index.esm2017.js
init_react();

// node_modules/@firebase/component/dist/esm/index.esm2017.js
init_react();

// node_modules/@firebase/util/dist/index.esm2017.js
init_react();
var stringToByteArray$1 = function(str) {
  const out = [];
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
      c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
};
var byteArrayToString = function(bytes) {
  const out = [];
  let pos = 0, c = 0;
  while (pos < bytes.length) {
    const c1 = bytes[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      const c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      const c4 = bytes[pos++];
      const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
      out[c++] = String.fromCharCode(55296 + (u >> 10));
      out[c++] = String.fromCharCode(56320 + (u & 1023));
    } else {
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }
  return out.join("");
};
var base64 = {
  byteToCharMap_: null,
  charToByteMap_: null,
  byteToCharMapWebSafe_: null,
  charToByteMapWebSafe_: null,
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  HAS_NATIVE_SUPPORT: typeof atob === "function",
  encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    this.init_();
    const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    const output = [];
    for (let i = 0; i < input.length; i += 3) {
      const byte1 = input[i];
      const haveByte2 = i + 1 < input.length;
      const byte2 = haveByte2 ? input[i + 1] : 0;
      const haveByte3 = i + 2 < input.length;
      const byte3 = haveByte3 ? input[i + 2] : 0;
      const outByte1 = byte1 >> 2;
      const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
      let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
      let outByte4 = byte3 & 63;
      if (!haveByte3) {
        outByte4 = 64;
        if (!haveByte2) {
          outByte3 = 64;
        }
      }
      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }
    return output.join("");
  },
  encodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }
    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },
  decodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }
    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },
  decodeStringToByteArray(input, webSafe) {
    this.init_();
    const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    const output = [];
    for (let i = 0; i < input.length; ) {
      const byte1 = charToByteMap[input.charAt(i++)];
      const haveByte2 = i < input.length;
      const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      const haveByte3 = i < input.length;
      const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      const haveByte4 = i < input.length;
      const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }
      const outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);
      if (byte3 !== 64) {
        const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
        output.push(outByte2);
        if (byte4 !== 64) {
          const outByte3 = byte3 << 6 & 192 | byte4;
          output.push(outByte3);
        }
      }
    }
    return output;
  },
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {};
      for (let i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
var base64Encode = function(str) {
  const utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
var base64urlEncodeWithoutPadding = function(str) {
  return base64Encode(str).replace(/\./g, "");
};
var base64Decode = function(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
var Deferred = class {
  constructor() {
    this.reject = () => {
    };
    this.resolve = () => {
    };
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  wrapCallback(callback) {
    return (error, value) => {
      if (error) {
        this.reject(error);
      } else {
        this.resolve(value);
      }
      if (typeof callback === "function") {
        this.promise.catch(() => {
        });
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  }
};
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isMobileCordova() {
  return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
function isBrowserExtension() {
  const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isReactNative() {
  return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
function isIE() {
  const ua = getUA();
  return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
}
function isIndexedDBAvailable() {
  return typeof indexedDB === "object";
}
function validateIndexedDBOpenable() {
  return new Promise((resolve, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
      const request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = () => {
        request.result.close();
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve(true);
      };
      request.onupgradeneeded = () => {
        preExist = false;
      };
      request.onerror = () => {
        var _a;
        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
      };
    } catch (error) {
      reject(error);
    }
  });
}
var ERROR_NAME = "FirebaseError";
var FirebaseError = class extends Error {
  constructor(code, message, customData) {
    super(message);
    this.code = code;
    this.customData = customData;
    this.name = ERROR_NAME;
    Object.setPrototypeOf(this, FirebaseError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }
};
var ErrorFactory = class {
  constructor(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  create(code, ...data) {
    const customData = data[0] || {};
    const fullCode = `${this.service}/${code}`;
    const template = this.errors[code];
    const message = template ? replaceTemplate(template, customData) : "Error";
    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
    const error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  }
};
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key) => {
    const value = data[key];
    return value != null ? String(value) : `<${key}?>`;
  });
}
var PATTERN = /\{\$([^}]+)}/g;
function isEmpty(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }
    const aProp = a[k];
    const bProp = b[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
function querystring(querystringParams) {
  const params = [];
  for (const [key, value] of Object.entries(querystringParams)) {
    if (Array.isArray(value)) {
      value.forEach((arrayVal) => {
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    }
  }
  return params.length ? "&" + params.join("&") : "";
}
function querystringDecode(querystring2) {
  const obj = {};
  const tokens = querystring2.replace(/^\?/, "").split("&");
  tokens.forEach((token2) => {
    if (token2) {
      const [key, value] = token2.split("=");
      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
function extractQuerystring(url) {
  const queryStart = url.indexOf("?");
  if (!queryStart) {
    return "";
  }
  const fragmentStart = url.indexOf("#", queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
}
function createSubscribe(executor, onNoObservers) {
  const proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
var ObserverProxy = class {
  constructor(executor, onNoObservers) {
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    this.task.then(() => {
      executor(this);
    }).catch((e) => {
      this.error(e);
    });
  }
  next(value) {
    this.forEachObserver((observer) => {
      observer.next(value);
    });
  }
  error(error) {
    this.forEachObserver((observer) => {
      observer.error(error);
    });
    this.close(error);
  }
  complete() {
    this.forEachObserver((observer) => {
      observer.complete();
    });
    this.close();
  }
  subscribe(nextOrObserver, error, complete) {
    let observer;
    if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
      throw new Error("Missing Observer.");
    }
    if (implementsAnyMethods(nextOrObserver, [
      "next",
      "error",
      "complete"
    ])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error,
        complete
      };
    }
    if (observer.next === void 0) {
      observer.next = noop;
    }
    if (observer.error === void 0) {
      observer.error = noop;
    }
    if (observer.complete === void 0) {
      observer.complete = noop;
    }
    const unsub = this.unsubscribeOne.bind(this, this.observers.length);
    if (this.finalized) {
      this.task.then(() => {
        try {
          if (this.finalError) {
            observer.error(this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {
        }
        return;
      });
    }
    this.observers.push(observer);
    return unsub;
  }
  unsubscribeOne(i) {
    if (this.observers === void 0 || this.observers[i] === void 0) {
      return;
    }
    delete this.observers[i];
    this.observerCount -= 1;
    if (this.observerCount === 0 && this.onNoObservers !== void 0) {
      this.onNoObservers(this);
    }
  }
  forEachObserver(fn) {
    if (this.finalized) {
      return;
    }
    for (let i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  }
  sendOne(i, fn) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[i] !== void 0) {
        try {
          fn(this.observers[i]);
        } catch (e) {
          if (typeof console !== "undefined" && console.error) {
            console.error(e);
          }
        }
      }
    });
  }
  close(err) {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (err !== void 0) {
      this.finalError = err;
    }
    this.task.then(() => {
      this.observers = void 0;
      this.onNoObservers = void 0;
    });
  }
};
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (const method of methods) {
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop() {
}
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}

// node_modules/@firebase/component/dist/esm/index.esm2017.js
var Component = class {
  constructor(name4, instanceFactory, type) {
    this.name = name4;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  setInstantiationMode(mode) {
    this.instantiationMode = mode;
    return this;
  }
  setMultipleInstances(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  }
  setServiceProps(props) {
    this.serviceProps = props;
    return this;
  }
  setInstanceCreatedCallback(callback) {
    this.onInstanceCreated = callback;
    return this;
  }
};
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var Provider = class {
  constructor(name4, container) {
    this.name = name4;
    this.container = container;
    this.component = null;
    this.instances = /* @__PURE__ */ new Map();
    this.instancesDeferred = /* @__PURE__ */ new Map();
    this.instancesOptions = /* @__PURE__ */ new Map();
    this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  get(identifier2) {
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier2);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      const deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {
        }
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  }
  getImmediate(options) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error(`Service ${this.name} is not available`);
      }
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(component) {
    if (component.name !== this.name) {
      throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
    }
    if (this.component) {
      throw Error(`Component for ${this.name} has already been provided`);
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
      } catch (e) {
      }
    }
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      try {
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
        instanceDeferred.resolve(instance);
      } catch (e) {
      }
    }
  }
  clearInstance(identifier2 = DEFAULT_ENTRY_NAME) {
    this.instancesDeferred.delete(identifier2);
    this.instancesOptions.delete(identifier2);
    this.instances.delete(identifier2);
  }
  async delete() {
    const services = Array.from(this.instances.values());
    await Promise.all([
      ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
      ...services.filter((service) => "_delete" in service).map((service) => service._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(identifier2 = DEFAULT_ENTRY_NAME) {
    return this.instances.has(identifier2);
  }
  getOptions(identifier2 = DEFAULT_ENTRY_NAME) {
    return this.instancesOptions.get(identifier2) || {};
  }
  initialize(opts = {}) {
    const { options = {} } = opts;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
    }
    if (!this.isComponentSet()) {
      throw Error(`Component ${this.name} has not been registered yet`);
    }
    const instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options
    });
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      if (normalizedIdentifier === normalizedDeferredIdentifier) {
        instanceDeferred.resolve(instance);
      }
    }
    return instance;
  }
  onInit(callback, identifier2) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier2);
    const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    const existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return () => {
      existingCallbacks.delete(callback);
    };
  }
  invokeOnInitCallbacks(instance, identifier2) {
    const callbacks = this.onInitCallbacks.get(identifier2);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      try {
        callback(instance, identifier2);
      } catch (_a) {
      }
    }
  }
  getOrInitializeService({ instanceIdentifier, options = {} }) {
    let instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_a) {
        }
      }
    }
    return instance || null;
  }
  normalizeInstanceIdentifier(identifier2 = DEFAULT_ENTRY_NAME) {
    if (this.component) {
      return this.component.multipleInstances ? identifier2 : DEFAULT_ENTRY_NAME;
    } else {
      return identifier2;
    }
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
};
function normalizeIdentifierForFactory(identifier2) {
  return identifier2 === DEFAULT_ENTRY_NAME ? void 0 : identifier2;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
var ComponentContainer = class {
  constructor(name4) {
    this.name = name4;
    this.providers = /* @__PURE__ */ new Map();
  }
  addComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
    }
    provider.setComponent(component);
  }
  addOrOverwriteComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  }
  getProvider(name4) {
    if (this.providers.has(name4)) {
      return this.providers.get(name4);
    }
    const provider = new Provider(name4, this);
    this.providers.set(name4, provider);
    return provider;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
};

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
init_react();
var instances = [];
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
var defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = new Date().toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
var Logger = class {
  constructor(name4) {
    this.name = name4;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
};

// node_modules/idb/build/index.js
init_react();

// node_modules/idb/build/wrap-idb-value.js
init_react();
var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
var cursorRequestMap = /* @__PURE__ */ new WeakMap();
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);

// node_modules/idb/build/index.js
function openDB(name4, version4, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name4, version4);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
    });
  }
  if (blocked)
    request.addEventListener("blocked", () => blocked());
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking)
      db.addEventListener("versionchange", () => blocking());
  }).catch(() => {
  });
  return openPromise;
}
var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));

// node_modules/@firebase/app/dist/esm/index.esm2017.js
var PlatformLoggerServiceImpl = class {
  constructor(container) {
    this.container = container;
  }
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers.map((provider) => {
      if (isVersionServiceProvider(provider)) {
        const service = provider.getImmediate();
        return `${service.library}/${service.version}`;
      } else {
        return null;
      }
    }).filter((logString) => logString).join(" ");
  }
};
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
var name$o = "@firebase/app";
var version$1 = "0.7.29";
var logger = new Logger("@firebase/app");
var name$n = "@firebase/app-compat";
var name$m = "@firebase/analytics-compat";
var name$l = "@firebase/analytics";
var name$k = "@firebase/app-check-compat";
var name$j = "@firebase/app-check";
var name$i = "@firebase/auth";
var name$h = "@firebase/auth-compat";
var name$g = "@firebase/database";
var name$f = "@firebase/database-compat";
var name$e = "@firebase/functions";
var name$d = "@firebase/functions-compat";
var name$c = "@firebase/installations";
var name$b = "@firebase/installations-compat";
var name$a = "@firebase/messaging";
var name$9 = "@firebase/messaging-compat";
var name$8 = "@firebase/performance";
var name$7 = "@firebase/performance-compat";
var name$6 = "@firebase/remote-config";
var name$5 = "@firebase/remote-config-compat";
var name$4 = "@firebase/storage";
var name$3 = "@firebase/storage-compat";
var name$2 = "@firebase/firestore";
var name$1 = "@firebase/firestore-compat";
var name = "firebase";
var version = "9.9.1";
var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
var PLATFORM_LOG_STRING = {
  [name$o]: "fire-core",
  [name$n]: "fire-core-compat",
  [name$l]: "fire-analytics",
  [name$m]: "fire-analytics-compat",
  [name$j]: "fire-app-check",
  [name$k]: "fire-app-check-compat",
  [name$i]: "fire-auth",
  [name$h]: "fire-auth-compat",
  [name$g]: "fire-rtdb",
  [name$f]: "fire-rtdb-compat",
  [name$e]: "fire-fn",
  [name$d]: "fire-fn-compat",
  [name$c]: "fire-iid",
  [name$b]: "fire-iid-compat",
  [name$a]: "fire-fcm",
  [name$9]: "fire-fcm-compat",
  [name$8]: "fire-perf",
  [name$7]: "fire-perf-compat",
  [name$6]: "fire-rc",
  [name$5]: "fire-rc-compat",
  [name$4]: "fire-gcs",
  [name$3]: "fire-gcs-compat",
  [name$2]: "fire-fst",
  [name$1]: "fire-fst-compat",
  "fire-js": "fire-js",
  [name]: "fire-js-all"
};
var _apps = /* @__PURE__ */ new Map();
var _components = /* @__PURE__ */ new Map();
function _addComponent(app, component) {
  try {
    app.container.addComponent(component);
  } catch (e) {
    logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
  }
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component);
  for (const app of _apps.values()) {
    _addComponent(app, component);
  }
  return true;
}
function _getProvider(app, name4) {
  const heartbeatController = app.container.getProvider("heartbeat").getImmediate({ optional: true });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app.container.getProvider(name4);
}
var ERRORS = {
  ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  ["bad-app-name"]: "Illegal App name: '{$appName}",
  ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
  ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
  ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
  ["storage-open"]: "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
  ["storage-get"]: "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
  ["storage-set"]: "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
  ["storage-delete"]: "Error thrown when deleting from storage. Original error: {$originalErrorMessage}."
};
var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
var FirebaseAppImpl = class {
  constructor(options, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new Component("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
    }
  }
};
var SDK_VERSION = version;
function initializeApp(options, rawConfig = {}) {
  if (typeof rawConfig !== "object") {
    const name5 = rawConfig;
    rawConfig = { name: name5 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
  const name4 = config.name;
  if (typeof name4 !== "string" || !name4) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name4)
    });
  }
  const existingApp = _apps.get(name4);
  if (existingApp) {
    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name4 });
    }
  }
  const container = new ComponentContainer(name4);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name4, newApp);
  return newApp;
}
function getApp(name4 = DEFAULT_ENTRY_NAME2) {
  const app = _apps.get(name4);
  if (!app) {
    throw ERROR_FACTORY.create("no-app", { appName: name4 });
  }
  return app;
}
function registerVersion(libraryKeyOrName, version4, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version4.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version4}":`
    ];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
    }
    logger.warn(warning.join(" "));
    return;
  }
  _registerComponent(new Component(`${library}-version`, () => ({ library, version: version4 }), "VERSION"));
}
var DB_NAME = "firebase-heartbeat-database";
var DB_VERSION = 1;
var STORE_NAME = "firebase-heartbeat-store";
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade: (db, oldVersion) => {
        switch (oldVersion) {
          case 0:
            db.createObjectStore(STORE_NAME);
        }
      }
    }).catch((e) => {
      throw ERROR_FACTORY.create("storage-open", {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
  var _a;
  try {
    const db = await getDbPromise();
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app));
  } catch (e) {
    throw ERROR_FACTORY.create("storage-get", {
      originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
    });
  }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
  var _a;
  try {
    const db = await getDbPromise();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app));
    return tx.done;
  } catch (e) {
    throw ERROR_FACTORY.create("storage-set", {
      originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
    });
  }
}
function computeKey(app) {
  return `${app.name}!${app.options.appId}`;
}
var MAX_HEADER_BYTES = 1024;
var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
var HeartbeatServiceImpl = class {
  constructor(container) {
    this.container = container;
    this._heartbeatsCache = null;
    const app = this.container.getProvider("app").getImmediate();
    this._storage = new HeartbeatStorageImpl(app);
    this._heartbeatsCachePromise = this._storage.read().then((result) => {
      this._heartbeatsCache = result;
      return result;
    });
  }
  async triggerHeartbeat() {
    const platformLogger = this.container.getProvider("platform-logger").getImmediate();
    const agent = platformLogger.getPlatformInfoString();
    const date = getUTCDateString();
    if (this._heartbeatsCache === null) {
      this._heartbeatsCache = await this._heartbeatsCachePromise;
    }
    if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
      return;
    } else {
      this._heartbeatsCache.heartbeats.push({ date, agent });
    }
    this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
      const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
      const now = Date.now();
      return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
    });
    return this._storage.overwrite(this._heartbeatsCache);
  }
  async getHeartbeatsHeader() {
    if (this._heartbeatsCache === null) {
      await this._heartbeatsCachePromise;
    }
    if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
      return "";
    }
    const date = getUTCDateString();
    const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
    const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
    this._heartbeatsCache.lastSentHeartbeatDate = date;
    if (unsentEntries.length > 0) {
      this._heartbeatsCache.heartbeats = unsentEntries;
      await this._storage.overwrite(this._heartbeatsCache);
    } else {
      this._heartbeatsCache.heartbeats = [];
      void this._storage.overwrite(this._heartbeatsCache);
    }
    return headerString;
  }
};
function getUTCDateString() {
  const today = new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date]
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries
  };
}
var HeartbeatStorageImpl = class {
  constructor(app) {
    this.app = app;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    if (!isIndexedDBAvailable()) {
      return false;
    } else {
      return validateIndexedDBOpenable().then(() => true).catch(() => false);
    }
  }
  async read() {
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return { heartbeats: [] };
    } else {
      const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
      return idbHeartbeatObject || { heartbeats: [] };
    }
  }
  async overwrite(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: heartbeatsObject.heartbeats
      });
    }
  }
  async add(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: [
          ...existingHeartbeatsObject.heartbeats,
          ...heartbeatsObject.heartbeats
        ]
      });
    }
  }
};
function countBytes(heartbeatsCache) {
  return base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
}
function registerCoreComponents(variant) {
  _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
  _registerComponent(new Component("heartbeat", (container) => new HeartbeatServiceImpl(container), "PRIVATE"));
  registerVersion(name$o, version$1, variant);
  registerVersion(name$o, version$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");

// node_modules/firebase/app/dist/index.esm.js
var name2 = "firebase";
var version2 = "9.9.1";
registerVersion(name2, version2, "app");

// app/old-app/config/firebase.jsx
var firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID
};
var initializeAuthentication = initializeApp(firebaseConfig);

// app/old-app/Admin/Admin.jsx
init_react();
var import_react18 = __toESM(require_react());
init_react_router_dom();

// app/old-app/contexts/AuthProvider.jsx
init_react();
var import_react2 = __toESM(require_react());

// app/old-app/hooks/useFirebase.jsx
init_react();

// node_modules/firebase/auth/dist/index.esm.js
init_react();

// node_modules/@firebase/auth/dist/esm2017/index.js
init_react();

// node_modules/@firebase/auth/dist/esm2017/index-90ebcfae.js
init_react();

// node_modules/tslib/modules/index.js
init_react();
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// node_modules/@firebase/auth/dist/esm2017/index-90ebcfae.js
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
var prodErrorMap = _prodErrorMap;
var _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
var logClient = new Logger("@firebase/auth");
function _logError(msg, ...args) {
  if (logClient.logLevel <= LogLevel.ERROR) {
    logClient.error(`Auth (${SDK_VERSION}): ${msg}`, ...args);
  }
}
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
  const factory = new ErrorFactory("auth", "Firebase", errorMap);
  return factory.create(code, {
    appName: auth.name
  });
}
function _assertInstanceOf(auth, object, instance) {
  const constructorInstance = instance;
  if (!(object instanceof constructorInstance)) {
    if (constructorInstance.name !== object.constructor.name) {
      _fail(auth, "argument-error");
    }
    throw _errorWithCustomMessage(auth, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
  }
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
var instanceCache = /* @__PURE__ */ new Map();
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
function initializeAuth(app, deps) {
  const provider = _getProvider(app, "auth");
  if (provider.isInitialized()) {
    const auth2 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if (deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth2;
    } else {
      _fail(auth2, "already-initialized");
    }
  }
  const auth = provider.initialize({ options: deps });
  return auth;
}
function _initializeAuthInstance(auth, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  }
  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || isBrowserExtension() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
}
var Delay = class {
  constructor(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay;
    debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
    this.isMobile = isMobileCordova() || isReactNative();
  }
  get() {
    if (!_isOnline()) {
      return Math.min(5e3, this.shortDelay);
    }
    return this.isMobile ? this.longDelay : this.shortDelay;
  }
};
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const { url } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
var FetchProvider = class {
  static initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;
    if (headersImpl) {
      this.headersImpl = headersImpl;
    }
    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  }
  static fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }
    if (typeof self !== "undefined" && "fetch" in self) {
      return self.fetch;
    }
    debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }
    if (typeof self !== "undefined" && "Headers" in self) {
      return self.Headers;
    }
    debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }
    if (typeof self !== "undefined" && "Response" in self) {
      return self.Response;
    }
    debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
};
var SERVER_ERROR_MAP = {
  ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
  ["MISSING_CUSTOM_TOKEN"]: "internal-error",
  ["INVALID_IDENTIFIER"]: "invalid-email",
  ["MISSING_CONTINUE_URI"]: "internal-error",
  ["INVALID_PASSWORD"]: "wrong-password",
  ["MISSING_PASSWORD"]: "internal-error",
  ["EMAIL_EXISTS"]: "email-already-in-use",
  ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
  ["INVALID_IDP_RESPONSE"]: "invalid-credential",
  ["INVALID_PENDING_TOKEN"]: "invalid-credential",
  ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
  ["MISSING_REQ_TYPE"]: "internal-error",
  ["EMAIL_NOT_FOUND"]: "user-not-found",
  ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
  ["EXPIRED_OOB_CODE"]: "expired-action-code",
  ["INVALID_OOB_CODE"]: "invalid-action-code",
  ["MISSING_OOB_CODE"]: "internal-error",
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
  ["INVALID_ID_TOKEN"]: "invalid-user-token",
  ["TOKEN_EXPIRED"]: "user-token-expired",
  ["USER_NOT_FOUND"]: "user-token-expired",
  ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
  ["INVALID_CODE"]: "invalid-verification-code",
  ["INVALID_SESSION_INFO"]: "invalid-verification-id",
  ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
  ["MISSING_SESSION_INFO"]: "missing-verification-id",
  ["SESSION_EXPIRED"]: "code-expired",
  ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
  ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
  ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
  ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
  ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
  ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
  ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
  ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
  ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
  ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error"
};
var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), { tenantId: auth.tenantId });
  }
  return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query = querystring(Object.assign({ key: auth.config.apiKey }, params)).slice(1);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"] = auth.languageCode;
    }
    return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
      method,
      headers,
      referrerPolicy: "no-referrer"
    }, body));
  });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
  auth._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth);
    const response = await Promise.race([
      fetchFn(),
      networkTimeout.promise
    ]);
    networkTimeout.clearNetworkTimeout();
    const json = await response.json();
    if ("needConfirmation" in json) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential", json);
    }
    if (response.ok && !("errorMessage" in json)) {
      return json;
    } else {
      const errorMessage = response.ok ? json.errorMessage : json.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth, "credential-already-in-use", json);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth, "email-already-in-use", json);
      } else if (serverErrorCode === "USER_DISABLED") {
        throw _makeTaggedError(auth, "user-disabled", json);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
      } else {
        _fail(auth, authError);
      }
    }
  } catch (e) {
    if (e instanceof FirebaseError) {
      throw e;
    }
    _fail(auth, "network-request-failed");
  }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
  const base = `${host}${path}?${query}`;
  if (!auth.config.emulator) {
    return `${auth.config.apiScheme}://${base}`;
  }
  return _emulatorUrl(auth.config, base);
}
var NetworkTimeout = class {
  constructor(auth) {
    this.auth = auth;
    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(this.auth, "network-request-failed"));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
};
function _makeTaggedError(auth, code, response) {
  const errorParams = {
    appName: auth.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error = _createError(auth, code, errorParams);
  error.customData._tokenResponse = response;
  return error;
}
async function deleteAccount(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
}
async function getAccountInfo(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
}
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e) {
  }
  return void 0;
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = getModularInstance(user);
  const token2 = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token2);
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token: token2,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token2) {
  var _a;
  const [algorithm, payload, signature] = token2.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = base64Decode(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e) {
    _logError("Caught error parsing JWT payload as JSON", (_a = e) === null || _a === void 0 ? void 0 : _a.toString());
    return null;
  }
}
function _tokenExpiresIn(token2) {
  const parsedToken = _parseToken(token2);
  _assert(parsedToken, "internal-error");
  _assert(typeof parsedToken.exp !== "undefined", "internal-error");
  _assert(typeof parsedToken.iat !== "undefined", "internal-error");
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e) {
    if (e instanceof FirebaseError && isUserInvalidated(e)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e;
  }
}
function isUserInvalidated({ code }) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
var ProactiveRefresh = class {
  constructor(user) {
    this.user = user;
    this.isRunning = false;
    this.timerId = null;
    this.errorBackoff = 3e4;
  }
  _start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.schedule();
  }
  _stop() {
    if (!this.isRunning) {
      return;
    }
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  }
  getInterval(wasError) {
    var _a;
    if (wasError) {
      const interval = this.errorBackoff;
      this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
      return interval;
    } else {
      this.errorBackoff = 3e4;
      const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
      const interval = expTime - Date.now() - 3e5;
      return Math.max(0, interval);
    }
  }
  schedule(wasError = false) {
    if (!this.isRunning) {
      return;
    }
    const interval = this.getInterval(wasError);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, interval);
  }
  async iteration() {
    var _a;
    try {
      await this.user.getIdToken(true);
    } catch (e) {
      if (((_a = e) === null || _a === void 0 ? void 0 : _a.code) === `auth/${"network-request-failed"}`) {
        this.schedule(true);
      }
      return;
    }
    this.schedule();
  }
};
var UserMetadata = class {
  constructor(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;
    this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  }
  _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;
    this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
};
async function _reloadWithoutSaving(user) {
  var _a;
  const auth = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth, { idToken }));
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error");
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = getModularInstance(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter((o) => !newData.some((n) => n.providerId === o.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map((_a) => {
    var { providerId } = _a, provider = __rest(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
async function requestStsToken(auth, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth, {}, async () => {
    const body = querystring({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const { tokenApiHost, apiKey } = auth.config;
    const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers,
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
var StsTokenManager = class {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error");
    _assert(typeof response.idToken !== "undefined", "internal-error");
    _assert(typeof response.refreshToken !== "undefined", "internal-error");
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  async getToken(auth, forceRefresh = false) {
    _assert(!this.accessToken || this.refreshToken, auth, "user-token-expired");
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    if (this.refreshToken) {
      await this.refresh(auth, this.refreshToken);
      return this.accessToken;
    }
    return null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(auth, oldToken) {
    const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth, oldToken);
    this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
  }
  updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1e3;
  }
  static fromJSON(appName, object) {
    const { refreshToken, accessToken, expirationTime } = object;
    const manager = new StsTokenManager();
    if (refreshToken) {
      _assert(typeof refreshToken === "string", "internal-error", {
        appName
      });
      manager.refreshToken = refreshToken;
    }
    if (accessToken) {
      _assert(typeof accessToken === "string", "internal-error", {
        appName
      });
      manager.accessToken = accessToken;
    }
    if (expirationTime) {
      _assert(typeof expirationTime === "number", "internal-error", {
        appName
      });
      manager.expirationTime = expirationTime;
    }
    return manager;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  }
  _clone() {
    return Object.assign(new StsTokenManager(), this.toJSON());
  }
  _performRefresh() {
    return debugFail("not implemented");
  }
};
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
}
var UserImpl = class {
  constructor(_a) {
    var { uid, auth, stsTokenManager } = _a, opt = __rest(_a, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase";
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.providerData = opt.providerData ? [...opt.providerData] : [];
    this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
  }
  async getIdToken(forceRefresh) {
    const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
    _assert(accessToken, this.auth, "internal-error");
    if (this.accessToken !== accessToken) {
      this.accessToken = accessToken;
      await this.auth._persistUserIfCurrent(this);
      this.auth._notifyListenersIfCurrent(this);
    }
    return accessToken;
  }
  getIdTokenResult(forceRefresh) {
    return getIdTokenResult(this, forceRefresh);
  }
  reload() {
    return reload(this);
  }
  _assign(user) {
    if (this === user) {
      return;
    }
    _assert(this.uid === user.uid, this.auth, "internal-error");
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map((userInfo) => Object.assign({}, userInfo));
    this.metadata._copy(user.metadata);
    this.stsTokenManager._assign(user.stsTokenManager);
  }
  _clone(auth) {
    return new UserImpl(Object.assign(Object.assign({}, this), { auth, stsTokenManager: this.stsTokenManager._clone() }));
  }
  _onReload(callback) {
    _assert(!this.reloadListener, this.auth, "internal-error");
    this.reloadListener = callback;
    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);
      this.reloadUserInfo = null;
    }
  }
  _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      this.reloadUserInfo = userInfo;
    }
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(response, reload2 = false) {
    let tokensRefreshed = false;
    if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
      this.stsTokenManager.updateFromServerResponse(response);
      tokensRefreshed = true;
    }
    if (reload2) {
      await _reloadWithoutSaving(this);
    }
    await this.auth._persistUserIfCurrent(this);
    if (tokensRefreshed) {
      this.auth._notifyListenersIfCurrent(this);
    }
  }
  async delete() {
    const idToken = await this.getIdToken();
    await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
    this.stsTokenManager.clearRefreshToken();
    return this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((userInfo) => Object.assign({}, userInfo)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(auth, object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
    const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
    const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
    const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
    const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
    const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
    const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
    const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
    const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
    _assert(uid && plainObjectTokenManager, auth, "internal-error");
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(typeof uid === "string", auth, "internal-error");
    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);
    _assert(typeof emailVerified === "boolean", auth, "internal-error");
    _assert(typeof isAnonymous === "boolean", auth, "internal-error");
    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    const user = new UserImpl({
      uid,
      auth,
      email,
      emailVerified,
      displayName,
      isAnonymous,
      photoURL,
      phoneNumber,
      tenantId,
      stsTokenManager,
      createdAt,
      lastLoginAt
    });
    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map((userInfo) => Object.assign({}, userInfo));
    }
    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }
    return user;
  }
  static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new UserImpl({
      uid: idTokenResponse.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
};
var InMemoryPersistence = class {
  constructor() {
    this.type = "NONE";
    this.storage = {};
  }
  async _isAvailable() {
    return true;
  }
  async _set(key, value) {
    this.storage[key] = value;
  }
  async _get(key) {
    const value = this.storage[key];
    return value === void 0 ? null : value;
  }
  async _remove(key) {
    delete this.storage[key];
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
InMemoryPersistence.type = "NONE";
var inMemoryPersistence = InMemoryPersistence;
function _persistenceKeyName(key, apiKey, appName) {
  return `${"firebase"}:${key}:${apiKey}:${appName}`;
}
var PersistenceUserManager = class {
  constructor(persistence, auth, userKey) {
    this.persistence = persistence;
    this.auth = auth;
    this.userKey = userKey;
    const { config, name: name4 } = this.auth;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name4);
    this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name4);
    this.boundEventHandler = auth._onStorageEvent.bind(auth);
    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  }
  async getCurrentUser() {
    const blob = await this.persistence._get(this.fullUserKey);
    return blob ? UserImpl._fromJSON(this.auth, blob) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(newPersistence) {
    if (this.persistence === newPersistence) {
      return;
    }
    const currentUser = await this.getCurrentUser();
    await this.removeCurrentUser();
    this.persistence = newPersistence;
    if (currentUser) {
      return this.setCurrentUser(currentUser);
    }
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(auth, persistenceHierarchy, userKey = "authUser") {
    if (!persistenceHierarchy.length) {
      return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
    }
    const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
      if (await persistence._isAvailable()) {
        return persistence;
      }
      return void 0;
    }))).filter((persistence) => persistence);
    let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
    const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
    let userToMigrate = null;
    for (const persistence of persistenceHierarchy) {
      try {
        const blob = await persistence._get(key);
        if (blob) {
          const user = UserImpl._fromJSON(auth, blob);
          if (persistence !== selectedPersistence) {
            userToMigrate = user;
          }
          selectedPersistence = persistence;
          break;
        }
      } catch (_a) {
      }
    }
    const migrationHierarchy = availablePersistences.filter((p) => p._shouldAllowMigration);
    if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
      return new PersistenceUserManager(selectedPersistence, auth, userKey);
    }
    selectedPersistence = migrationHierarchy[0];
    if (userToMigrate) {
      await selectedPersistence._set(key, userToMigrate.toJSON());
    }
    await Promise.all(persistenceHierarchy.map(async (persistence) => {
      if (persistence !== selectedPersistence) {
        try {
          await persistence._remove(key);
        } catch (_a) {
        }
      }
    }));
    return new PersistenceUserManager(selectedPersistence, auth, userKey);
  }
};
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = getUA()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = getUA()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = getUA()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = getUA()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = getUA()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = getUA()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = getUA()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = getUA()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOSStandalone(ua = getUA()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return isIE() && document.documentMode === 10;
}
function _isMobileBrowser(ua = getUA()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _isIframe() {
  try {
    return !!(window && window !== window.top);
  } catch (e) {
    return false;
  }
}
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName(getUA());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName(getUA())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${SDK_VERSION}/${reportedFrameworks}`;
}
var AuthMiddlewareQueue = class {
  constructor(auth) {
    this.auth = auth;
    this.queue = [];
  }
  pushCallback(callback, onAbort) {
    const wrappedCallback = (user) => new Promise((resolve, reject) => {
      try {
        const result = callback(user);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
    wrappedCallback.onAbort = onAbort;
    this.queue.push(wrappedCallback);
    const index = this.queue.length - 1;
    return () => {
      this.queue[index] = () => Promise.resolve();
    };
  }
  async runMiddleware(nextUser) {
    var _a;
    if (this.auth.currentUser === nextUser) {
      return;
    }
    const onAbortStack = [];
    try {
      for (const beforeStateCallback of this.queue) {
        await beforeStateCallback(nextUser);
        if (beforeStateCallback.onAbort) {
          onAbortStack.push(beforeStateCallback.onAbort);
        }
      }
    } catch (e) {
      onAbortStack.reverse();
      for (const onAbort of onAbortStack) {
        try {
          onAbort();
        } catch (_) {
        }
      }
      throw this.auth._errorFactory.create("login-blocked", { originalMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message });
    }
  }
};
var AuthImpl = class {
  constructor(app, heartbeatServiceProvider, config) {
    this.app = app;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.beforeStateQueue = new AuthMiddlewareQueue(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false;
    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this.lastNotifiedUid = void 0;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = { appVerificationDisabledForTesting: false };
    this.frameworks = [];
    this.name = app.name;
    this.clientVersion = config.sdkClientVersion;
  }
  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    }
    this._initializationPromise = this.queue(async () => {
      var _a, _b;
      if (this._deleted) {
        return;
      }
      this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
      if (this._deleted) {
        return;
      }
      if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
        try {
          await this._popupRedirectResolver._initialize(this);
        } catch (e) {
        }
      }
      await this.initializeCurrentUser(popupRedirectResolver);
      this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
      if (this._deleted) {
        return;
      }
      this._isInitialized = true;
    });
    return this._initializationPromise;
  }
  async _onStorageEvent() {
    if (this._deleted) {
      return;
    }
    const user = await this.assertedPersistence.getCurrentUser();
    if (!this.currentUser && !user) {
      return;
    }
    if (this.currentUser && user && this.currentUser.uid === user.uid) {
      this._currentUser._assign(user);
      await this.currentUser.getIdToken();
      return;
    }
    await this._updateCurrentUser(user, true);
  }
  async initializeCurrentUser(popupRedirectResolver) {
    var _a;
    const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
    let futureCurrentUser = previouslyStoredUser;
    let needsTocheckMiddleware = false;
    if (popupRedirectResolver && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
      const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
      const result = await this.tryRedirectSignIn(popupRedirectResolver);
      if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
        futureCurrentUser = result.user;
        needsTocheckMiddleware = true;
      }
    }
    if (!futureCurrentUser) {
      return this.directlySetCurrentUser(null);
    }
    if (!futureCurrentUser._redirectEventId) {
      if (needsTocheckMiddleware) {
        try {
          await this.beforeStateQueue.runMiddleware(futureCurrentUser);
        } catch (e) {
          futureCurrentUser = previouslyStoredUser;
          this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
        }
      }
      if (futureCurrentUser) {
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    _assert(this._popupRedirectResolver, this, "argument-error");
    await this.getOrInitRedirectPersistenceManager();
    if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
      return this.directlySetCurrentUser(futureCurrentUser);
    }
    return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
  }
  async tryRedirectSignIn(redirectResolver) {
    let result = null;
    try {
      result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
    } catch (e) {
      await this._setRedirectUser(null);
    }
    return result;
  }
  async reloadAndSetCurrentUserOrClear(user) {
    var _a;
    try {
      await _reloadWithoutSaving(user);
    } catch (e) {
      if (((_a = e) === null || _a === void 0 ? void 0 : _a.code) !== `auth/${"network-request-failed"}`) {
        return this.directlySetCurrentUser(null);
      }
    }
    return this.directlySetCurrentUser(user);
  }
  useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  }
  async _delete() {
    this._deleted = true;
  }
  async updateCurrentUser(userExtern) {
    const user = userExtern ? getModularInstance(userExtern) : null;
    if (user) {
      _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch");
    }
    if (!skipBeforeStateCallbacks) {
      await this.beforeStateQueue.runMiddleware(user);
    }
    return this.queue(async () => {
      await this.directlySetCurrentUser(user);
      this.notifyAuthListeners();
    });
  }
  async signOut() {
    await this.beforeStateQueue.runMiddleware(null);
    if (this.redirectPersistenceManager || this._popupRedirectResolver) {
      await this._setRedirectUser(null);
    }
    return this._updateCurrentUser(null, true);
  }
  setPersistence(persistence) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(_getInstance(persistence));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(errorMap) {
    this._errorFactory = new ErrorFactory("auth", "Firebase", errorMap());
  }
  onAuthStateChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
  }
  beforeAuthStateChanged(callback, onAbort) {
    return this.beforeStateQueue.pushCallback(callback, onAbort);
  }
  onIdTokenChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
  }
  toJSON() {
    var _a;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  }
  async _setRedirectUser(user, popupRedirectResolver) {
    const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
    return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
  }
  async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
    if (!this.redirectPersistenceManager) {
      const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
      _assert(resolver, this, "argument-error");
      this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
      this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(id) {
    var _a, _b;
    if (this._isInitialized) {
      await this.queue(async () => {
      });
    }
    if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
      return this._currentUser;
    }
    if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
      return this.redirectUser;
    }
    return null;
  }
  async _persistUserIfCurrent(user) {
    if (user === this.currentUser) {
      return this.queue(async () => this.directlySetCurrentUser(user));
    }
  }
  _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;
    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;
    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var _a, _b;
    if (!this._isInitialized) {
      return;
    }
    this.idTokenSubscription.next(this.currentUser);
    const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  }
  registerStateListener(subscription, nextOrObserver, error, completed) {
    if (this._deleted) {
      return () => {
      };
    }
    const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    _assert(promise, this, "internal-error");
    promise.then(() => cb(this.currentUser));
    if (typeof nextOrObserver === "function") {
      return subscription.addObserver(nextOrObserver, error, completed);
    } else {
      return subscription.addObserver(nextOrObserver);
    }
  }
  async directlySetCurrentUser(user) {
    if (this.currentUser && this.currentUser !== user) {
      this._currentUser._stopProactiveRefresh();
      if (user && this.isProactiveRefreshEnabled) {
        user._startProactiveRefresh();
      }
    }
    this.currentUser = user;
    if (user) {
      await this.assertedPersistence.setCurrentUser(user);
    } else {
      await this.assertedPersistence.removeCurrentUser();
    }
  }
  queue(action) {
    this.operations = this.operations.then(action, action);
    return this.operations;
  }
  get assertedPersistence() {
    _assert(this.persistenceManager, this, "internal-error");
    return this.persistenceManager;
  }
  _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }
    this.frameworks.push(framework);
    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var _a;
    const headers = {
      ["X-Client-Version"]: this.clientVersion
    };
    if (this.app.options.appId) {
      headers["X-Firebase-gmpid"] = this.app.options.appId;
    }
    const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
    if (heartbeatsHeader) {
      headers["X-Firebase-Client"] = heartbeatsHeader;
    }
    return headers;
  }
};
function _castAuth(auth) {
  return getModularInstance(auth);
}
var Subscription = class {
  constructor(auth) {
    this.auth = auth;
    this.observer = null;
    this.addObserver = createSubscribe((observer) => this.observer = observer);
  }
  get next() {
    _assert(this.observer, this.auth, "internal-error");
    return this.observer.next.bind(this.observer);
  }
};
var AuthCredential = class {
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  toJSON() {
    return debugFail("not implemented");
  }
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
  _getReauthenticationResolver(_auth) {
    return debugFail("not implemented");
  }
};
async function updateEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function signInWithPassword(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLink$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
var EmailAuthCredential = class extends AuthCredential {
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  static _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(email, password, "password");
  }
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password") {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink") {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }
    return null;
  }
  async _getIdTokenResponse(auth) {
    switch (this.signInMethod) {
      case "password":
        return signInWithPassword(auth, {
          returnSecureToken: true,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return signInWithEmailLink$1(auth, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  async _linkToIdToken(auth, idToken) {
    switch (this.signInMethod) {
      case "password":
        return updateEmailPassword(auth, {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return signInWithEmailLinkForLinking(auth, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  }
};
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
var IDP_REQUEST_URI$1 = "http://localhost";
var OAuthCredential = class extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  static _fromParams(params) {
    const cred = new OAuthCredential(params.providerId, params.signInMethod);
    if (params.idToken || params.accessToken) {
      if (params.idToken) {
        cred.idToken = params.idToken;
      }
      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      }
      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }
      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail("argument-error");
    }
    return cred;
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const { providerId, signInMethod } = obj, rest = __rest(obj, ["providerId", "signInMethod"]);
    if (!providerId || !signInMethod) {
      return null;
    }
    const cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  buildRequest() {
    const request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };
    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      const postBody = {};
      if (this.idToken) {
        postBody["id_token"] = this.idToken;
      }
      if (this.accessToken) {
        postBody["access_token"] = this.accessToken;
      }
      if (this.secret) {
        postBody["oauth_token_secret"] = this.secret;
      }
      postBody["providerId"] = this.providerId;
      if (this.nonce && !this.pendingToken) {
        postBody["nonce"] = this.nonce;
      }
      request.postBody = querystring(postBody);
    }
    return request;
  }
};
async function sendPhoneVerificationCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
  const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
  if (response.temporaryProof) {
    throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
  }
  return response;
}
var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
  ["USER_NOT_FOUND"]: "user-not-found"
};
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), { operation: "REAUTH" });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
var PhoneAuthCredential = class extends AuthCredential {
  constructor(params) {
    super("phone", "phone");
    this.params = params;
  }
  static _fromVerification(verificationId, verificationCode) {
    return new PhoneAuthCredential({ verificationId, verificationCode });
  }
  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new PhoneAuthCredential({ phoneNumber, temporaryProof });
  }
  _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({ idToken }, this._makeVerificationRequest()));
  }
  _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
  _makeVerificationRequest() {
    const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
    if (temporaryProof && phoneNumber) {
      return { temporaryProof, phoneNumber };
    }
    return {
      sessionInfo: verificationId,
      code: verificationCode
    };
  }
  toJSON() {
    const obj = {
      providerId: this.providerId
    };
    if (this.params.phoneNumber) {
      obj.phoneNumber = this.params.phoneNumber;
    }
    if (this.params.temporaryProof) {
      obj.temporaryProof = this.params.temporaryProof;
    }
    if (this.params.verificationCode) {
      obj.verificationCode = this.params.verificationCode;
    }
    if (this.params.verificationId) {
      obj.verificationId = this.params.verificationId;
    }
    return obj;
  }
  static fromJSON(json) {
    if (typeof json === "string") {
      json = JSON.parse(json);
    }
    const { verificationId, verificationCode, phoneNumber, temporaryProof } = json;
    if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
      return null;
    }
    return new PhoneAuthCredential({
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    });
  }
};
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = querystringDecode(extractQuerystring(url))["link"];
  const doubleDeepLink = link ? querystringDecode(extractQuerystring(link))["deep_link_id"] : null;
  const iOSDeepLink = querystringDecode(extractQuerystring(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? querystringDecode(extractQuerystring(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
var ActionCodeURL = class {
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;
    const searchParams = querystringDecode(extractQuerystring(actionLink));
    const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
    _assert(apiKey && code && operation, "argument-error");
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
  }
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
};
var EmailAuthProvider = class {
  constructor() {
    this.providerId = EmailAuthProvider.PROVIDER_ID;
  }
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, "argument-error");
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
};
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var FederatedAuthProvider = class {
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
};
var BaseOAuthProvider = class extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  getScopes() {
    return [...this.scopes];
  }
};
var FacebookAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("facebook.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: FacebookAuthProvider.PROVIDER_ID,
      signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
var GoogleAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("google.com");
    this.addScope("profile");
  }
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse) {
      return null;
    }
    const { oauthIdToken, oauthAccessToken } = tokenResponse;
    if (!oauthIdToken && !oauthAccessToken) {
      return null;
    }
    try {
      return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
var GithubAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("github.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: GithubAuthProvider.PROVIDER_ID,
      signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
var TwitterAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("twitter.com");
  }
  static credential(token2, secret) {
    return OAuthCredential._fromParams({
      providerId: TwitterAuthProvider.PROVIDER_ID,
      signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token2,
      oauthTokenSecret: secret
    });
  }
  static credentialFromResult(userCredential) {
    return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse) {
      return null;
    }
    const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
    if (!oauthAccessToken || !oauthTokenSecret) {
      return null;
    }
    try {
      return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
    } catch (_a) {
      return null;
    }
  }
};
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
TwitterAuthProvider.PROVIDER_ID = "twitter.com";
async function signUp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth, request));
}
var UserCredentialImpl = class {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(response, true);
    const providerId = providerIdForResponse(response);
    return new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: response,
      operationType
    });
  }
};
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
var MultiFactorError = class extends FirebaseError {
  constructor(auth, error, operationType, user) {
    var _a;
    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user;
    Object.setPrototypeOf(this, MultiFactorError.prototype);
    this.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }
  static _fromErrorAndOperation(auth, error, operationType, user) {
    return new MultiFactorError(auth, error, operationType, user);
  }
};
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider.catch((error) => {
    if (error.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
    }
    throw error;
  });
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
async function _reauthenticate(user, credential, bypassAuthState = false) {
  var _a;
  const { auth } = user;
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
    _assert(response.idToken, auth, "internal-error");
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error");
    const { sub: localId } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch");
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if (((_a = e) === null || _a === void 0 ? void 0 : _a.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch");
    }
    throw e;
  }
}
async function _signInWithCredential(auth, credential, bypassAuthState = false) {
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
  if (!bypassAuthState) {
    await auth._updateCurrentUser(userCredential.user);
  }
  return userCredential;
}
async function signInWithCredential(auth, credential) {
  return _signInWithCredential(_castAuth(auth), credential);
}
async function createUserWithEmailAndPassword(auth, email, password) {
  const authInternal = _castAuth(auth);
  const response = await signUp(authInternal, {
    returnSecureToken: true,
    email,
    password
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
function signInWithEmailAndPassword(auth, email, password) {
  return signInWithCredential(getModularInstance(auth), EmailAuthProvider.credential(email, password));
}
async function updateProfile$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function updateProfile(user, { displayName, photoURL: photoUrl }) {
  if (displayName === void 0 && photoUrl === void 0) {
    return;
  }
  const userInternal = getModularInstance(user);
  const idToken = await userInternal.getIdToken();
  const profileRequest = {
    idToken,
    displayName,
    photoUrl,
    returnSecureToken: true
  };
  const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
  userInternal.displayName = response.displayName || null;
  userInternal.photoURL = response.photoUrl || null;
  const passwordProvider = userInternal.providerData.find(({ providerId }) => providerId === "password");
  if (passwordProvider) {
    passwordProvider.displayName = userInternal.displayName;
    passwordProvider.photoURL = userInternal.photoURL;
  }
  await userInternal._updateTokensIfNecessary(response);
}
function onAuthStateChanged(auth, nextOrObserver, error, completed) {
  return getModularInstance(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
function signOut(auth) {
  return getModularInstance(auth).signOut();
}
function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
var STORAGE_AVAILABLE_KEY = "__sak";
var BrowserPersistenceClass = class {
  constructor(storageRetriever, type) {
    this.storageRetriever = storageRetriever;
    this.type = type;
  }
  _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }
      this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  }
  _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }
  _get(key) {
    const json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  }
  _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
};
function _iframeCannotSyncWebStorage() {
  const ua = getUA();
  return _isSafari(ua) || _isIOS(ua);
}
var _POLLING_INTERVAL_MS$1 = 1e3;
var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
var BrowserLocalPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.localStorage, "LOCAL");
    this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
    this.fallbackToPolling = _isMobileBrowser();
    this._shouldAllowMigration = true;
  }
  forAllChangedKeys(cb) {
    for (const key of Object.keys(this.listeners)) {
      const newValue = this.storage.getItem(key);
      const oldValue = this.localCache[key];
      if (newValue !== oldValue) {
        cb(key, oldValue, newValue);
      }
    }
  }
  onStorageEvent(event, poll = false) {
    if (!event.key) {
      this.forAllChangedKeys((key2, _oldValue, newValue) => {
        this.notifyListeners(key2, newValue);
      });
      return;
    }
    const key = event.key;
    if (poll) {
      this.detachListener();
    } else {
      this.stopPolling();
    }
    if (this.safariLocalStorageNotSynced) {
      const storedValue2 = this.storage.getItem(key);
      if (event.newValue !== storedValue2) {
        if (event.newValue !== null) {
          this.storage.setItem(key, event.newValue);
        } else {
          this.storage.removeItem(key);
        }
      } else if (this.localCache[key] === event.newValue && !poll) {
        return;
      }
    }
    const triggerListeners = () => {
      const storedValue2 = this.storage.getItem(key);
      if (!poll && this.localCache[key] === storedValue2) {
        return;
      }
      this.notifyListeners(key, storedValue2);
    };
    const storedValue = this.storage.getItem(key);
    if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
      setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
    } else {
      triggerListeners();
    }
  }
  notifyListeners(key, value) {
    this.localCache[key] = value;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(value ? JSON.parse(value) : value);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((key, oldValue, newValue) => {
        this.onStorageEvent(new StorageEvent("storage", {
          key,
          oldValue,
          newValue
        }), true);
      });
    }, _POLLING_INTERVAL_MS$1);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      if (this.fallbackToPolling) {
        this.startPolling();
      } else {
        this.attachListener();
      }
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */ new Set();
      this.localCache[key] = this.storage.getItem(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.detachListener();
      this.stopPolling();
    }
  }
  async _set(key, value) {
    await super._set(key, value);
    this.localCache[key] = JSON.stringify(value);
  }
  async _get(key) {
    const value = await super._get(key);
    this.localCache[key] = JSON.stringify(value);
    return value;
  }
  async _remove(key) {
    await super._remove(key);
    delete this.localCache[key];
  }
};
BrowserLocalPersistence.type = "LOCAL";
var browserLocalPersistence = BrowserLocalPersistence;
var BrowserSessionPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
BrowserSessionPersistence.type = "SESSION";
var browserSessionPersistence = BrowserSessionPersistence;
function _allSettled(promises) {
  return Promise.all(promises.map(async (promise) => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
var Receiver = class {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  async handleEvent(event) {
    const messageEvent = event;
    const { eventId, eventType, data } = messageEvent.data;
    const handlers = this.handlersMap[eventType];
    if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
      return;
    }
    messageEvent.ports[0].postMessage({
      status: "ack",
      eventId,
      eventType
    });
    const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
    const response = await _allSettled(promises);
    messageEvent.ports[0].postMessage({
      status: "done",
      eventId,
      eventType,
      response
    });
  }
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = /* @__PURE__ */ new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
  _unsubscribe(eventType, eventHandler) {
    if (this.handlersMap[eventType] && eventHandler) {
      this.handlersMap[eventType].delete(eventHandler);
    }
    if (!eventHandler || this.handlersMap[eventType].size === 0) {
      delete this.handlersMap[eventType];
    }
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.removeEventListener("message", this.boundEventHandler);
    }
  }
};
Receiver.receivers = [];
function _generateEventId(prefix2 = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix2 + random;
}
var Sender = class {
  constructor(target) {
    this.target = target;
    this.handlers = /* @__PURE__ */ new Set();
  }
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error("connection_unavailable");
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error("unsupported_event"));
      }, timeout);
      handler = {
        messageChannel,
        onMessage(event) {
          const messageEvent = event;
          if (messageEvent.data.eventId !== eventId) {
            return;
          }
          switch (messageEvent.data.status) {
            case "ack":
              clearTimeout(ackTimer);
              completionTimer = setTimeout(() => {
                reject(new Error("timeout"));
              }, 3e3);
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error("invalid_response"));
              break;
          }
        }
      };
      this.handlers.add(handler);
      messageChannel.port1.addEventListener("message", handler.onMessage);
      this.target.postMessage({
        eventType,
        eventId,
        data
      }, [messageChannel.port2]);
    }).finally(() => {
      if (handler) {
        this.removeMessageHandler(handler);
      }
    });
  }
};
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
var DB_NAME2 = "firebaseLocalStorageDb";
var DB_VERSION2 = 1;
var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
var DB_DATA_KEYPATH = "fbase_key";
var DBPromise = class {
  constructor(request) {
    this.request = request;
  }
  toPromise() {
    return new Promise((resolve, reject) => {
      this.request.addEventListener("success", () => {
        resolve(this.request.result);
      });
      this.request.addEventListener("error", () => {
        reject(this.request.error);
      });
    });
  }
};
function getObjectStore(db, isReadWrite) {
  return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME2);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME2, DB_VERSION2);
  return new Promise((resolve, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db = request.result;
      try {
        db.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener("success", async () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db.close();
        await _deleteDatabase();
        resolve(await _openDatabase());
      } else {
        resolve(db);
      }
    });
  });
}
async function _putObject(db, key, value) {
  const request = getObjectStore(db, true).put({
    [DB_DATA_KEYPATH]: key,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db, key) {
  const request = getObjectStore(db, false).get(key);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db, key) {
  const request = getObjectStore(db, true).delete(key);
  return new DBPromise(request).toPromise();
}
var _POLLING_INTERVAL_MS = 800;
var _TRANSACTION_RETRY_COUNT = 3;
var IndexedDBLocalPersistence = class {
  constructor() {
    this.type = "LOCAL";
    this._shouldAllowMigration = true;
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.pendingWrites = 0;
    this.receiver = null;
    this.sender = null;
    this.serviceWorkerReceiverAvailable = false;
    this.activeServiceWorker = null;
    this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    if (this.db) {
      return this.db;
    }
    this.db = await _openDatabase();
    return this.db;
  }
  async _withRetries(op) {
    let numAttempts = 0;
    while (true) {
      try {
        const db = await this._openDb();
        return await op(db);
      } catch (e) {
        if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
          throw e;
        }
        if (this.db) {
          this.db.close();
          this.db = void 0;
        }
      }
    }
  }
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return ["keyChanged"];
    });
  }
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send("ping", {}, 800);
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send("keyChanged", { key }, this.serviceWorkerReceiverAvailable ? 800 : 50);
    } catch (_a) {
    }
  }
  async _isAvailable() {
    try {
      if (!indexedDB) {
        return false;
      }
      const db = await _openDatabase();
      await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
      await _deleteObject(db, STORAGE_AVAILABLE_KEY);
      return true;
    } catch (_a) {
    }
    return false;
  }
  async _withPendingWrite(write) {
    this.pendingWrites++;
    try {
      await write();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(key, value) {
    return this._withPendingWrite(async () => {
      await this._withRetries((db) => _putObject(db, key, value));
      this.localCache[key] = value;
      return this.notifyServiceWorker(key);
    });
  }
  async _get(key) {
    const obj = await this._withRetries((db) => getObject(db, key));
    this.localCache[key] = obj;
    return obj;
  }
  async _remove(key) {
    return this._withPendingWrite(async () => {
      await this._withRetries((db) => _deleteObject(db, key));
      delete this.localCache[key];
      return this.notifyServiceWorker(key);
    });
  }
  async _poll() {
    const result = await this._withRetries((db) => {
      const getAllRequest = getObjectStore(db, false).getAll();
      return new DBPromise(getAllRequest).toPromise();
    });
    if (!result) {
      return [];
    }
    if (this.pendingWrites !== 0) {
      return [];
    }
    const keys = [];
    const keysInResult = /* @__PURE__ */ new Set();
    for (const { fbase_key: key, value } of result) {
      keysInResult.add(key);
      if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
        this.notifyListeners(key, value);
        keys.push(key);
      }
    }
    for (const localKey of Object.keys(this.localCache)) {
      if (this.localCache[localKey] && !keysInResult.has(localKey)) {
        this.notifyListeners(localKey, null);
        keys.push(localKey);
      }
    }
    return keys;
  }
  notifyListeners(key, newValue) {
    this.localCache[key] = newValue;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(newValue);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      this.startPolling();
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */ new Set();
      void this._get(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.stopPolling();
    }
  }
};
IndexedDBLocalPersistence.type = "LOCAL";
var indexedDBLocalPersistence = IndexedDBLocalPersistence;
function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.setAttribute("src", url);
    el.onload = resolve;
    el.onerror = (e) => {
      const error = _createError("internal-error");
      error.customData = e;
      reject(error);
    };
    el.type = "text/javascript";
    el.charset = "UTF-8";
    getScriptParentElement().appendChild(el);
  });
}
function _generateCallbackName(prefix2) {
  return `__${prefix2}${Math.floor(Math.random() * 1e6)}`;
}
var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
async function _verifyPhoneNumber(auth, options, verifier) {
  var _a;
  const recaptchaToken = await verifier.verify();
  try {
    _assert(typeof recaptchaToken === "string", auth, "argument-error");
    _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error");
    let phoneInfoOptions;
    if (typeof options === "string") {
      phoneInfoOptions = {
        phoneNumber: options
      };
    } else {
      phoneInfoOptions = options;
    }
    if ("session" in phoneInfoOptions) {
      const session = phoneInfoOptions.session;
      if ("phoneNumber" in phoneInfoOptions) {
        _assert(session.type === "enroll", auth, "internal-error");
        const response = await startEnrollPhoneMfa(auth, {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            recaptchaToken
          }
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error");
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info");
        const response = await startSignInPhoneMfa(auth, {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            recaptchaToken
          }
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const { sessionInfo } = await sendPhoneVerificationCode(auth, {
        phoneNumber: phoneInfoOptions.phoneNumber,
        recaptchaToken
      });
      return sessionInfo;
    }
  } finally {
    verifier._reset();
  }
}
var PhoneAuthProvider = class {
  constructor(auth) {
    this.providerId = PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth);
  }
  verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, getModularInstance(applicationVerifier));
  }
  static credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  static credentialFromResult(userCredential) {
    const credential = userCredential;
    return PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  static credentialFromError(error) {
    return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse) {
      return null;
    }
    const { phoneNumber, temporaryProof } = tokenResponse;
    if (phoneNumber && temporaryProof) {
      return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
    }
    return null;
  }
};
PhoneAuthProvider.PROVIDER_ID = "phone";
PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(auth._popupRedirectResolver, auth, "argument-error");
  return auth._popupRedirectResolver;
}
var IdpCredential = class extends AuthCredential {
  constructor(params) {
    super("custom", "custom");
    this.params = params;
  }
  _getIdTokenResponse(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _linkToIdToken(auth, idToken) {
    return signInWithIdp(auth, this._buildIdpRequest(idToken));
  }
  _getReauthenticationResolver(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _buildIdpRequest(idToken) {
    const request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };
    if (idToken) {
      request.idToken = idToken;
    }
    return request;
  }
};
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const { auth, user } = params;
  _assert(user, auth, "internal-error");
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const { auth, user } = params;
  _assert(user, auth, "internal-error");
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
var AbstractPopupRedirectOperation = class {
  constructor(auth, filter, resolver, user, bypassAuthState = false) {
    this.auth = auth;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter) ? filter : [filter];
  }
  execute() {
    return new Promise(async (resolve, reject) => {
      this.pendingPromise = { resolve, reject };
      try {
        this.eventManager = await this.resolver._initialize(this.auth);
        await this.onExecution();
        this.eventManager.registerConsumer(this);
      } catch (e) {
        this.reject(e);
      }
    });
  }
  async onAuthEvent(event) {
    const { urlResponse, sessionId, postBody, tenantId, error, type } = event;
    if (error) {
      this.reject(error);
      return;
    }
    const params = {
      auth: this.auth,
      requestUri: urlResponse,
      sessionId,
      tenantId: tenantId || void 0,
      postBody: postBody || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(type)(params));
    } catch (e) {
      this.reject(e);
    }
  }
  onError(error) {
    this.reject(error);
  }
  getIdpTask(type) {
    switch (type) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return _signIn;
      case "linkViaPopup":
      case "linkViaRedirect":
        return _link;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return _reauth;
      default:
        _fail(this.auth, "internal-error");
    }
  }
  resolve(cred) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  }
  reject(error) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.reject(error);
    this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }
    this.pendingPromise = null;
    this.cleanUp();
  }
};
var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
async function signInWithPopup(auth, provider, resolver) {
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
  return action.executeNotNull();
}
var PopupOperation = class extends AbstractPopupRedirectOperation {
  constructor(auth, filter, provider, resolver, user) {
    super(auth, filter, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (PopupOperation.currentPopupAction) {
      PopupOperation.currentPopupAction.cancel();
    }
    PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(result, this.auth, "internal-error");
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], eventId);
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch((e) => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
      if (!isSupported) {
        this.reject(_createError(this.auth, "web-storage-unsupported"));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    if (this.authWindow) {
      this.authWindow.close();
    }
    if (this.pollId) {
      window.clearTimeout(this.pollId);
    }
    this.authWindow = null;
    this.pollId = null;
    PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(() => {
          this.pollId = null;
          this.reject(_createError(this.auth, "popup-closed-by-user"));
        }, 2e3);
        return;
      }
      this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
    };
    poll();
  }
};
PopupOperation.currentPopupAction = null;
var PENDING_REDIRECT_KEY = "pendingRedirect";
var redirectOutcomeMap = /* @__PURE__ */ new Map();
var RedirectAction = class extends AbstractPopupRedirectOperation {
  constructor(auth, resolver, bypassAuthState = false) {
    super(auth, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
    ], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
  async execute() {
    let readyOutcome = redirectOutcomeMap.get(this.auth._key());
    if (!readyOutcome) {
      try {
        const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
        const result = hasPendingRedirect ? await super.execute() : null;
        readyOutcome = () => Promise.resolve(result);
      } catch (e) {
        readyOutcome = () => Promise.reject(e);
      }
      redirectOutcomeMap.set(this.auth._key(), readyOutcome);
    }
    if (!this.bypassAuthState) {
      redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
    }
    return readyOutcome();
  }
  async onAuthEvent(event) {
    if (event.type === "signInViaRedirect") {
      return super.onAuthEvent(event);
    } else if (event.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (event.eventId) {
      const user = await this.auth._redirectUserForId(event.eventId);
      if (user) {
        this.user = user;
        return super.onAuthEvent(event);
      } else {
        this.resolve(null);
      }
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
};
async function _getAndClearPendingRedirectStatus(resolver, auth) {
  const key = pendingRedirectKey(auth);
  const persistence = resolverPersistence(resolver);
  if (!await persistence._isAvailable()) {
    return false;
  }
  const hasPendingRedirect = await persistence._get(key) === "true";
  await persistence._remove(key);
  return hasPendingRedirect;
}
function _overrideRedirectResult(auth, result) {
  redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
  const authInternal = _castAuth(auth);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
var AuthEventManager = class {
  constructor(auth) {
    this.auth = auth;
    this.cachedEventUids = /* @__PURE__ */ new Set();
    this.consumers = /* @__PURE__ */ new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);
    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  }
  unregisterConsumer(authEventConsumer) {
    this.consumers.delete(authEventConsumer);
  }
  onEvent(event) {
    if (this.hasEventBeenHandled(event)) {
      return false;
    }
    let handled = false;
    this.consumers.forEach((consumer) => {
      if (this.isEventForConsumer(event, consumer)) {
        handled = true;
        this.sendToConsumer(event, consumer);
        this.saveEventToCache(event);
      }
    });
    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      return handled;
    }
    this.hasHandledPotentialRedirect = true;
    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }
    return handled;
  }
  sendToConsumer(event, consumer) {
    var _a;
    if (event.error && !isNullRedirectEvent(event)) {
      const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  }
  isEventForConsumer(event, consumer) {
    const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  }
  hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }
    return this.cachedEventUids.has(eventUid(event));
  }
  saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  }
};
function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter((v) => v).join("-");
}
function isNullRedirectEvent({ type, error }) {
  return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
async function _getProjectConfig(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v1/projects", request);
}
var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var HTTP_REGEX = /^https?/;
async function _validateOrigin(auth) {
  if (auth.config.emulator) {
    return;
  }
  const { authorizedDomains } = await _getProjectConfig(auth);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {
    }
  }
  _fail(auth, "unauthorized-domain");
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const { protocol, hostname } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re.test(hostname);
}
var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(auth, "network-request-failed"));
        }
      };
      return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch((e) => reject(e));
    }
  }).catch((error) => {
    cachedGApiLoader = null;
    throw error;
  });
}
var cachedGApiLoader = null;
function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
var PING_TIMEOUT = new Delay(5e3, 15e3);
var IFRAME_PATH = "__/auth/iframe";
var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
var IFRAME_ATTRIBUTES = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
};
var EID_FROM_APIHOST = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
]);
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required");
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${querystring(params).slice(1)}`;
}
async function _openIframe(auth) {
  const context = await _loadGapi(auth);
  const gapi2 = _window().gapi;
  _assert(gapi2, auth, "internal-error");
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, (iframe) => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed");
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
var BASE_POPUP_OPTIONS = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
};
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 600;
var TARGET_BLANK = "_blank";
var FIREFOX_EMPTY_URL = "http://localhost";
var AuthPopup = class {
  constructor(window2) {
    this.window = window2;
    this.associatedEvent = null;
  }
  close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {
      }
    }
  }
};
function _open(auth, url, name4, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = getUA().toLowerCase();
  if (name4) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name4;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(newWin, auth, "popup-blocked");
  try {
    newWin.focus();
  } catch (e) {
  }
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
var WIDGET_PATH = "__/auth/handler";
var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth.config.authDomain, auth, "auth-domain-config-required");
  _assert(auth.config.apiKey, auth, "invalid-api-key");
  const params = {
    apiKey: auth.config.apiKey,
    appName: auth.name,
    authType,
    redirectUrl,
    v: SDK_VERSION,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth.languageCode);
    params.providerId = provider.providerId || "";
    if (!isEmpty(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key, value] of Object.entries(additionalParams || {})) {
      params[key] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter((scope) => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth.tenantId) {
    params.tid = auth.tenantId;
  }
  const paramsDict = params;
  for (const key of Object.keys(paramsDict)) {
    if (paramsDict[key] === void 0) {
      delete paramsDict[key];
    }
  }
  return `${getHandlerBase(auth)}?${querystring(paramsDict).slice(1)}`;
}
function getHandlerBase({ config }) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
var BrowserPopupRedirectResolver = class {
  constructor() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  }
  async _openPopup(auth, provider, authType, eventId) {
    var _a;
    debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
    const url = _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    return _open(auth, url, _generateEventId());
  }
  async _openRedirect(auth, provider, authType, eventId) {
    await this._originValidation(auth);
    _setWindowLocation(_getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId));
    return new Promise(() => {
    });
  }
  _initialize(auth) {
    const key = auth._key();
    if (this.eventManagers[key]) {
      const { manager, promise: promise2 } = this.eventManagers[key];
      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(promise2, "If manager is not set, promise should be");
        return promise2;
      }
    }
    const promise = this.initAndGetManager(auth);
    this.eventManagers[key] = { promise };
    promise.catch(() => {
      delete this.eventManagers[key];
    });
    return promise;
  }
  async initAndGetManager(auth) {
    const iframe = await _openIframe(auth);
    const manager = new AuthEventManager(auth);
    iframe.register("authEvent", (iframeEvent) => {
      _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event");
      const handled = manager.onEvent(iframeEvent.authEvent);
      return { status: handled ? "ACK" : "ERROR" };
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    this.eventManagers[auth._key()] = { manager };
    this.iframes[auth._key()] = iframe;
    return manager;
  }
  _isIframeWebStorageSupported(auth, cb) {
    const iframe = this.iframes[auth._key()];
    iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, (result) => {
      var _a;
      const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
      if (isSupported !== void 0) {
        cb(!!isSupported);
      }
      _fail(auth, "internal-error");
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(auth) {
    const key = auth._key();
    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }
    return this.originValidationPromises[key];
  }
  get _shouldInitProactively() {
    return _isMobileBrowser() || _isSafari() || _isIOS();
  }
};
var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
var MultiFactorAssertionImpl = class {
  constructor(factorId) {
    this.factorId = factorId;
  }
  _process(auth, session, displayName) {
    switch (session.type) {
      case "enroll":
        return this._finalizeEnroll(auth, session.credential, displayName);
      case "signin":
        return this._finalizeSignIn(auth, session.credential);
      default:
        return debugFail("unexpected MultiFactorSessionType");
    }
  }
};
var PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(credential) {
    super("phone");
    this.credential = credential;
  }
  static _fromCredential(credential) {
    return new PhoneMultiFactorAssertionImpl(credential);
  }
  _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
};
var PhoneMultiFactorGenerator = class {
  constructor() {
  }
  static assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  }
};
PhoneMultiFactorGenerator.FACTOR_ID = "phone";
var name3 = "@firebase/auth";
var version3 = "0.20.5";
var AuthInterop = class {
  constructor(auth) {
    this.auth = auth;
    this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var _a;
    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  }
  async getToken(forceRefresh) {
    this.assertAuthConfigured();
    await this.auth._initializationPromise;
    if (!this.auth.currentUser) {
      return null;
    }
    const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
    return { accessToken };
  }
  addAuthTokenListener(listener) {
    this.assertAuthConfigured();
    if (this.internalListeners.has(listener)) {
      return;
    }
    const unsubscribe = this.auth.onIdTokenChanged((user) => {
      var _a;
      listener(((_a = user) === null || _a === void 0 ? void 0 : _a.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  }
  removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    const unsubscribe = this.internalListeners.get(listener);
    if (!unsubscribe) {
      return;
    }
    this.internalListeners.delete(listener);
    unsubscribe();
    this.updateProactiveRefresh();
  }
  assertAuthConfigured() {
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
  }
  updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  }
};
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  _registerComponent(new Component("auth", (container, { options: deps }) => {
    const app = container.getProvider("app").getImmediate();
    const heartbeatServiceProvider = container.getProvider("heartbeat");
    const { apiKey, authDomain } = app.options;
    return ((app2, heartbeatServiceProvider2) => {
      _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app2.name });
      _assert(!(authDomain === null || authDomain === void 0 ? void 0 : authDomain.includes(":")), "argument-error", {
        appName: app2.name
      });
      const config = {
        apiKey,
        authDomain,
        clientPlatform,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: _getClientVersion(clientPlatform)
      };
      const authInstance = new AuthImpl(app2, heartbeatServiceProvider2, config);
      _initializeAuthInstance(authInstance, deps);
      return authInstance;
    })(app, heartbeatServiceProvider);
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal");
    authInternalProvider.initialize();
  }));
  _registerComponent(new Component("auth-internal", (container) => {
    const auth = _castAuth(container.getProvider("auth").getImmediate());
    return ((auth2) => new AuthInterop(auth2))(auth);
  }, "PRIVATE").setInstantiationMode("EXPLICIT"));
  registerVersion(name3, version3, getVersionForPlatform(clientPlatform));
  registerVersion(name3, version3, "esm2017");
}
function getAuth(app = getApp()) {
  const provider = _getProvider(app, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  return initializeAuth(app, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [
      indexedDBLocalPersistence,
      browserLocalPersistence,
      browserSessionPersistence
    ]
  });
}
registerAuth("Browser");

// app/old-app/hooks/useFirebase.jsx
var import_react = __toESM(require_react());
var import_sweetalert = __toESM(require_sweetalert_min());
init_react_router_dom();
var useFirebase = () => {
  const [user, setUser] = (0, import_react.useState)({});
  const auth = getAuth();
  const navigate = useNavigate();
  (0, import_react.useEffect)(() => {
    onAuthStateChanged(auth, (user2) => {
      if (user2) {
        setUser(user2);
      }
    });
  }, [auth]);
  const signUpUser = (email, password, name4) => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      setUser(res.user);
      updateProfile(auth.currentUser, {
        displayName: name4
      }).then(() => {
        (0, import_sweetalert.default)("Good job!", "Account has been created!", "success");
        navigate("/");
      });
    }).catch((err) => (0, import_sweetalert.default)("Something went wrong!", `${err.message}`, "error"));
  };
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      setUser(res.user);
      (0, import_sweetalert.default)("Sign in Successful!", "Welcome back !", "info");
      navigate("/");
    }).catch((err) => (0, import_sweetalert.default)("Something went wrong!", `${err.message}`, "error"));
  };
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((res) => {
      setUser(res.user);
      (0, import_sweetalert.default)("Good job!", "Account has been created!", "success");
      navigate("/");
    }).catch((err) => console.log(err.message));
  };
  const signOutUser2 = () => {
    signOut(auth).then(() => {
      setUser({});
      (0, import_sweetalert.default)("Logout Successful!", "You are logged out!", "success");
      navigate("/signin");
    }).catch((err) => {
      (0, import_sweetalert.default)("Something went wrong!", `${err.message}`, "error");
    });
  };
  return {
    user,
    signUpUser,
    signInUser,
    signOutUser: signOutUser2,
    signInWithGoogle
  };
};
var useFirebase_default = useFirebase;

// app/old-app/contexts/AuthProvider.jsx
var AuthContext = (0, import_react2.createContext)();
var AuthProvider2 = ({ children }) => {
  const authData = useFirebase_default();
  return /* @__PURE__ */ import_react2.default.createElement(AuthContext.Provider, {
    value: authData
  }, children);
};
var AuthProvider_default = AuthProvider2;

// app/old-app/routes/PrivateRoute.jsx
init_react();
var import_react4 = __toESM(require_react());

// app/old-app/hooks/useAuth.jsx
init_react();
var import_react3 = __toESM(require_react());
var useAuth = () => {
  return (0, import_react3.useContext)(AuthContext);
};
var useAuth_default = useAuth;

// app/old-app/Admin/AddProductScreen.jsx
init_react();
var import_react10 = __toESM(require_react());

// app/old-app/Admin/AddProductForm.jsx
init_react();
var import_react8 = __toESM(require_react());
init_react_router_dom();
var import_sweetalert2 = __toESM(require_sweetalert_min());

// app/old-app/components/Form/Button.jsx
init_react();
var import_react5 = __toESM(require_react());
var Button = ({ text }) => {
  return /* @__PURE__ */ import_react5.default.createElement("button", {
    className: "w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins "
  }, text);
};
var Button_default = Button;

// app/old-app/components/Form/Label.jsx
init_react();
var import_react6 = __toESM(require_react());
var Label = ({ text, ...rest }) => {
  return /* @__PURE__ */ import_react6.default.createElement("label", {
    ...rest,
    htmlFor: "title",
    className: "text-gray-500 poppins"
  }, text, "*");
};
var Label_default = Label;

// app/old-app/components/Form/TextField.jsx
init_react();
var import_react7 = __toESM(require_react());
var TextField = ({ ...rest }) => {
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("input", {
    ...rest,
    className: "w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
  }));
};
var TextField_default = TextField;

// app/old-app/Admin/AddProductForm.jsx
var AddProductForm = () => {
  const [title, setTitle] = (0, import_react8.useState)("");
  const [description, setDescription] = (0, import_react8.useState)("");
  const [price, setPrice] = (0, import_react8.useState)("");
  const [image, setImage] = (0, import_react8.useState)("");
  const [foodType, setFoodType] = (0, import_react8.useState)("Breakfast");
  const navigate = useNavigate();
  const handleFoodType = (e) => {
    setFoodType(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { title, description, price, image, foodType };
    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newFood)
    }).then((res) => res.json()).then((data) => {
      if (data.acknowledged) {
        (0, import_sweetalert2.default)("Food Added!", "Food is added to the store!", "success");
        navigate("/admin/manage-products");
      } else {
        (0, import_sweetalert2.default)("Unsuccessful !", "Food is not added to the store!", "error");
      }
    });
  };
  return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("form", {
    className: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "flex flex-col space-y-4"
  }, /* @__PURE__ */ import_react8.default.createElement(Label_default, {
    htmlFor: "title",
    text: "Food Title"
  }), /* @__PURE__ */ import_react8.default.createElement(TextField_default, {
    id: "title",
    type: "text",
    value: title,
    onChange: (e) => setTitle(e.target.value),
    required: true
  }), /* @__PURE__ */ import_react8.default.createElement(Label_default, {
    htmlFor: "description",
    text: "Food Description"
  }), /* @__PURE__ */ import_react8.default.createElement("textarea", {
    id: "description",
    cols: "30",
    rows: "9",
    className: "border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none",
    required: true,
    value: description,
    onChange: (e) => setDescription(e.target.value)
  })), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "flex flex-col space-y-4"
  }, /* @__PURE__ */ import_react8.default.createElement(Label_default, {
    htmlFor: "price",
    text: "Food Price"
  }), /* @__PURE__ */ import_react8.default.createElement(TextField_default, {
    id: "price",
    type: "number",
    value: price,
    onChange: (e) => setPrice(e.target.value),
    required: true
  }), /* @__PURE__ */ import_react8.default.createElement(Label_default, {
    htmlFor: "image",
    text: "Food Image URL"
  }), /* @__PURE__ */ import_react8.default.createElement(TextField_default, {
    id: "image",
    type: "text",
    value: image,
    onChange: (e) => setImage(e.target.value),
    required: true
  }), /* @__PURE__ */ import_react8.default.createElement(Label_default, {
    htmlFor: "type",
    text: "Select the type of food"
  }), /* @__PURE__ */ import_react8.default.createElement("select", {
    id: "type",
    className: "border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4",
    value: foodType,
    onChange: handleFoodType
  }, /* @__PURE__ */ import_react8.default.createElement("option", {
    value: "Breakfast"
  }, "Breakfast"), /* @__PURE__ */ import_react8.default.createElement("option", {
    value: "Lunch"
  }, "Lunch"), /* @__PURE__ */ import_react8.default.createElement("option", {
    value: "Dinner"
  }, "Dinner")), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ import_react8.default.createElement(Button_default, {
    text: "Add",
    type: "submit"
  })))));
};
var AddProductForm_default = AddProductForm;

// app/old-app/Admin/Heading.jsx
init_react();
var import_react9 = __toESM(require_react());
var Heading = ({ text }) => {
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-col space-y-2"
  }, /* @__PURE__ */ import_react9.default.createElement("h1", {
    className: "text-2xl poppins text-gray-700"
  }, text), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "w-24 h-1 bg-primary rounded-lg"
  }));
};
var Heading_default = Heading;

// app/old-app/Admin/AddProductScreen.jsx
var AddProductScreen = () => {
  return /* @__PURE__ */ import_react10.default.createElement("section", null, /* @__PURE__ */ import_react10.default.createElement(Heading_default, {
    text: "Add Product"
  }), /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement(AddProductForm_default, null)));
};
var AddProductScreen_default = AddProductScreen;

// app/old-app/Admin/EditProductScreen.jsx
init_react();
var import_react12 = __toESM(require_react());

// app/old-app/Admin/EditProductForm.jsx
init_react();
var import_react11 = __toESM(require_react());
init_react_router_dom();
var import_sweetalert3 = __toESM(require_sweetalert_min());
var EditProductForm = () => {
  const [foods, setFoods] = (0, import_react11.useState)({});
  const id = useParams();
  const navigate = useNavigate();
  (0, import_react11.useEffect)(() => {
    fetch(`http://localhost:5000/foods/${id}`).then((res) => res.json()).then((data) => setFoods(data));
  }, [id]);
  const handleUpdate = (e) => {
    const { value, name: name4 } = e.target;
    setFoods((prev2) => {
      return {
        ...prev2,
        [name4]: value
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = foods.title;
    const description = foods.description;
    const price = foods.price;
    const image = foods.image;
    const foodType = foods.foodType;
    const updateFood = { title, description, price, image, foodType };
    fetch(`http://localhost:5000/foods/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateFood)
    }).then((res) => res.json()).then((data) => {
      if (data.modifiedCount > 0) {
        (0, import_sweetalert3.default)("Updated", "Update Successfully!", "success");
      }
      navigate("/admin/manage-products");
    });
  };
  return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("form", {
    className: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "flex flex-col space-y-4"
  }, /* @__PURE__ */ import_react11.default.createElement(Label_default, {
    htmlFor: "title",
    text: "Food Title"
  }), /* @__PURE__ */ import_react11.default.createElement(TextField_default, {
    id: "title",
    type: "text",
    name: "title",
    value: foods.title || " ",
    onChange: handleUpdate,
    required: true
  }), /* @__PURE__ */ import_react11.default.createElement(Label_default, {
    htmlFor: "description",
    text: "Food Description"
  }), /* @__PURE__ */ import_react11.default.createElement("textarea", {
    id: "description",
    cols: "30",
    rows: "9",
    className: "border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none",
    required: true,
    name: "description",
    value: foods.description || " ",
    onChange: handleUpdate
  })), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "flex flex-col space-y-4"
  }, /* @__PURE__ */ import_react11.default.createElement(Label_default, {
    htmlFor: "price",
    text: "Food Price"
  }), /* @__PURE__ */ import_react11.default.createElement(TextField_default, {
    id: "price",
    type: "number",
    name: "price",
    value: foods.price || " ",
    onChange: handleUpdate,
    required: true
  }), /* @__PURE__ */ import_react11.default.createElement(Label_default, {
    htmlFor: "image",
    text: "Food Image URL"
  }), /* @__PURE__ */ import_react11.default.createElement(TextField_default, {
    id: "image",
    type: "text",
    name: "image",
    value: foods.image || " ",
    onChange: handleUpdate,
    required: true
  }), /* @__PURE__ */ import_react11.default.createElement(Label_default, {
    htmlFor: "type",
    text: "Select the type of food"
  }), /* @__PURE__ */ import_react11.default.createElement("select", {
    id: "type",
    className: "border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4",
    value: foods.foodType || " ",
    name: "foodType",
    onChange: handleUpdate
  }, /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "Breakfast"
  }, "Breakfast"), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "Lunch"
  }, "Lunch"), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "Dinner"
  }, "Dinner")), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ import_react11.default.createElement(Button_default, {
    text: "Update",
    type: "submit"
  })))));
};
var EditProductForm_default = EditProductForm;

// app/old-app/Admin/EditProductScreen.jsx
var EditProductScreen = () => {
  return /* @__PURE__ */ import_react12.default.createElement("section", null, /* @__PURE__ */ import_react12.default.createElement(Heading_default, {
    text: "Edit Food"
  }), /* @__PURE__ */ import_react12.default.createElement(EditProductForm_default, null));
};
var EditProductScreen_default = EditProductScreen;

// app/old-app/Admin/ManageProductScreen.jsx
init_react();
var import_react16 = __toESM(require_react());

// node_modules/react-icons/ai/index.esm.js
init_react();

// node_modules/react-icons/lib/esm/index.js
init_react();

// node_modules/react-icons/lib/esm/iconsManifest.js
init_react();

// node_modules/react-icons/lib/esm/iconBase.js
init_react();
var import_react14 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
init_react();
var import_react13 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react13.default.createContext && import_react13.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node2, i) {
    return import_react14.default.createElement(node2.tag, __assign2({
      key: i
    }, node2.attr), Tree2Element(node2.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react14.default.createElement(IconBase, __assign2({
      attr: __assign2({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest2(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react14.default.createElement("svg", __assign2({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign2(__assign2({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react14.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react14.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/ai/index.esm.js
function AiOutlineDelete(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] })(props);
}
function AiOutlineMinus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(props);
}
function AiOutlinePlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "t": "1551322312294", "style": "", "viewBox": "0 0 1024 1024", "version": "1.1" }, "child": [{ "tag": "defs", "attr": {}, "child": [] }, { "tag": "path", "attr": { "d": "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" } }, { "tag": "path", "attr": { "d": "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" } }] })(props);
}

// node_modules/react-icons/fi/index.esm.js
init_react();
function FiEdit(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" } }, { "tag": "path", "attr": { "d": "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" } }] })(props);
}
function FiLogOut(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" } }, { "tag": "polyline", "attr": { "points": "16 17 21 12 16 7" } }, { "tag": "line", "attr": { "x1": "21", "y1": "12", "x2": "9", "y2": "12" } }] })(props);
}

// app/old-app/Admin/ManageProductScreen.jsx
init_react_router_dom();
var import_sweetalert4 = __toESM(require_sweetalert_min());

// app/old-app/hooks/useFetch.jsx
init_react();
var import_react15 = __toESM(require_react());
var useFetch = () => {
  const [foods, setFoods] = (0, import_react15.useState)([]);
  (0, import_react15.useEffect)(() => {
    fetch("./foods.json").then((response) => response.json()).then((foods2) => setFoods(foods2));
  }, []);
  return [foods, setFoods];
};
var useFetch_default = useFetch;

// app/old-app/Admin/ManageProductScreen.jsx
var ManageProductScreen = () => {
  const [foods, setFoods] = useFetch_default();
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/foods/${id}`, {
      method: "DELETE"
    }).then((res) => res.json()).then((data) => {
      if (data.deleteCount > 0) {
        (0, import_sweetalert4.default)("Successful!", "Deleted successfully!", "success");
        const restFoods = foods.filter((item) => item._id !== id);
        setFoods(restFoods);
      }
    });
  };
  return /* @__PURE__ */ import_react16.default.createElement("div", null, /* @__PURE__ */ import_react16.default.createElement(Heading_default, {
    text: "Manage Products"
  }), /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "flex flex-col my-8"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "overflow-x-auto sm:-mx-6 lg:-mx-8"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "py-2 inline-block min-w-full sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "overflow-hidden sm:rounded-lg shadow-md"
  }, /* @__PURE__ */ import_react16.default.createElement("table", {
    className: "min-w-full"
  }, /* @__PURE__ */ import_react16.default.createElement("thead", {
    className: "bg-primary poppins"
  }, /* @__PURE__ */ import_react16.default.createElement("tr", null, /* @__PURE__ */ import_react16.default.createElement("th", {
    scope: "col",
    className: "text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
  }, "Image"), /* @__PURE__ */ import_react16.default.createElement("th", {
    scope: "col",
    className: "text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
  }, "Name"), /* @__PURE__ */ import_react16.default.createElement("th", {
    scope: "col",
    className: "text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
  }, "Price"), /* @__PURE__ */ import_react16.default.createElement("th", {
    scope: "col",
    className: "text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
  }, "Type"), /* @__PURE__ */ import_react16.default.createElement("th", {
    scope: "col",
    className: "relative px-6 py-3"
  }, /* @__PURE__ */ import_react16.default.createElement("span", {
    className: "text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
  }, "Action")))), /* @__PURE__ */ import_react16.default.createElement("tbody", null, foods.map((item) => /* @__PURE__ */ import_react16.default.createElement("tr", {
    className: "bg-white border-b poppins",
    key: item._id
  }, /* @__PURE__ */ import_react16.default.createElement("td", {
    className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
  }, /* @__PURE__ */ import_react16.default.createElement("img", {
    className: "w-16",
    src: item.image,
    alt: item.title
  })), /* @__PURE__ */ import_react16.default.createElement("td", {
    className: "text-sm text-gray-500 px-6 py-4 whitespace-nowrap"
  }, item.title), /* @__PURE__ */ import_react16.default.createElement("td", {
    className: "text-sm text-gray-500 px-6 py-4 whitespace-nowrap"
  }, "$ ", item.price), /* @__PURE__ */ import_react16.default.createElement("td", {
    className: "text-sm text-gray-500 px-6 py-4 whitespace-nowrap"
  }, item.foodType), /* @__PURE__ */ import_react16.default.createElement("td", {
    className: "px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "flex items-center justify-center space-x-3"
  }, /* @__PURE__ */ import_react16.default.createElement(Link, {
    to: "edit"
  }), /* @__PURE__ */ import_react16.default.createElement(FiEdit, {
    className: "cursor-pointer text-2xl text-green-600"
  }), /* @__PURE__ */ import_react16.default.createElement(AiOutlineDelete, {
    className: "cursor-pointer text-2xl text-red-600",
    onClick: () => handleDelete(item._id)
  }))))))))))));
};
var ManageProductScreen_default = ManageProductScreen;

// app/old-app/Admin/SideNav.jsx
init_react();
var import_react17 = __toESM(require_react());

// node_modules/react-icons/md/index.esm.js
init_react();
function MdVerified(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" } }] })(props);
}
function MdOutlineKeyboardBackspace(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" } }] })(props);
}
function MdOutlineArrowForwardIos(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" } }] })(props);
}

// app/old-app/Admin/SideNav.jsx
init_react_router_dom();
var SideNav = () => {
  const { user } = useAuth_default();
  const [sidenav, setSidenav] = (0, import_react17.useState)(true);
  const handlenav = () => {
    setSidenav(!sidenav);
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1098) {
      setSidenav(false);
    } else {
      setSidenav(true);
    }
  });
  const menu = [
    { id: 1, text: "Dashboard", to: "/admin" },
    { id: 2, text: "Manage Products", to: "/admin/manage-products" },
    { id: 3, text: "Add Product", to: "/admin/add" }
  ];
  return /* @__PURE__ */ import_react17.default.createElement("div", null, sidenav && /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement("nav", {
    className: "flex fixed flex-col w-64 bg-primary h-screen px-4"
  }, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "flex flex-col items-center flex-wrap mt-8 pt-12"
  }, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "pt-2"
  }, /* @__PURE__ */ import_react17.default.createElement("span", {
    className: "font-semibold text-lg text-white"
  }, user?.displayName))), /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "mt-10 mb-4"
  }, /* @__PURE__ */ import_react17.default.createElement("ul", {
    className: "ml-4"
  }, menu.map((item) => /* @__PURE__ */ import_react17.default.createElement("li", {
    className: "flex items-center",
    key: item.id
  }, /* @__PURE__ */ import_react17.default.createElement(NavLink, {
    exact: true,
    to: item.to,
    className: "p-3",
    activeClassName: "border-l-2 border-white w-full p-3"
  }, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "flex items-center space-x-3"
  }, /* @__PURE__ */ import_react17.default.createElement("span", {
    className: "ml-2 text-white poppins"
  }, item.text))))))))), /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "lg:hidden block fixed bottom-10 left-10 bg-white p-2 rounded-full cursor-pointer shadow-xl border border-primary",
    onClick: handlenav
  }, /* @__PURE__ */ import_react17.default.createElement(MdOutlineArrowForwardIos, {
    className: "text-2xl text-primary"
  })));
};
var SideNav_default = SideNav;

// app/old-app/Admin/Admin.jsx
var Admin = () => {
  return /* @__PURE__ */ import_react18.default.createElement(BrowserRouter, null, /* @__PURE__ */ import_react18.default.createElement(AuthProvider_default, null, /* @__PURE__ */ import_react18.default.createElement("main", {
    className: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-10"
  }, /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ import_react18.default.createElement(SideNav_default, null)), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "col-span-4 my-24 px-6"
  }, /* @__PURE__ */ import_react18.default.createElement(Routes, null, /* @__PURE__ */ import_react18.default.createElement(Route, {
    path: "/admin/manage-products",
    element: /* @__PURE__ */ import_react18.default.createElement(ManageProductScreen_default, null)
  }), /* @__PURE__ */ import_react18.default.createElement(Route, {
    path: "/admin/add",
    element: /* @__PURE__ */ import_react18.default.createElement(AddProductScreen_default, null)
  }), /* @__PURE__ */ import_react18.default.createElement(Route, {
    path: "/admin/edit/:id",
    element: /* @__PURE__ */ import_react18.default.createElement(EditProductScreen_default, null)
  }))))));
};
var Admin_default = Admin;

// app/old-app/components/Navbar/Navbar.jsx
init_react();
var import_react20 = __toESM(require_react());

// node_modules/react-icons/bs/index.esm.js
init_react();
function BsCart2(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" } }] })(props);
}

// app/old-app/components/Navbar/Navbar.jsx
init_react_router_dom();
var import_logo2 = __toESM(require_logo2());

// app/old-app/contexts/OrderProvider.jsx
init_react();
var import_react19 = __toESM(require_react());
var OrderContext = (0, import_react19.createContext)();
var useOrder = () => {
  return (0, import_react19.useContext)(OrderContext);
};
var OrderProvider = ({ children }) => {
  const [order, setOrder] = (0, import_react19.useState)([]);
  const handleOrder = (food) => {
    setOrder((prevValue) => {
      return [
        ...prevValue,
        food
      ];
    });
  };
  const removeOrder = (id) => {
    setOrder((prev2) => {
      return prev2.filter((item) => {
        return item.id !== id;
      });
    });
  };
  const value = {
    setOrder,
    order,
    handleOrder,
    removeOrder
  };
  return /* @__PURE__ */ import_react19.default.createElement(OrderContext.Provider, {
    value
  }, children);
};
var OrderProvider_default = OrderProvider;

// app/old-app/components/Navbar/Navbar.jsx
var Navbar = () => {
  const [changeHeader, setChangeHeader] = (0, import_react20.useState)(false);
  const navigate = useNavigate();
  const [user, setUser] = (0, import_react20.useState)(null);
  const order = useOrder();
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };
  window.addEventListener("scroll", onChangeHeader);
  return /* @__PURE__ */ import_react20.default.createElement("header", {
    className: changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"
  }, /* @__PURE__ */ import_react20.default.createElement("nav", {
    className: "flex items-center max-w-screen-xl mx-auto px-6 py-3"
  }, /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "flex flex-grow"
  }, /* @__PURE__ */ import_react20.default.createElement("img", {
    className: "w-36 cursor-pointer",
    src: import_logo2.default,
    alt: "logo",
    onClick: () => navigate("/")
  })), user ? /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "flex items-center justify-end space-x-4"
  }, /* @__PURE__ */ import_react20.default.createElement(NavLink, {
    end: true,
    to: "/admin",
    className: "text-gray-600"
  }), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "relative flex cursor-pointer",
    onClick: () => navigate("/orders")
  }, /* @__PURE__ */ import_react20.default.createElement("span", {
    className: "bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2"
  }, order.length), /* @__PURE__ */ import_react20.default.createElement(BsCart2, {
    className: "cursor-pointer w-6 h-6 text-gray-700"
  })), /* @__PURE__ */ import_react20.default.createElement("p", {
    className: "text-gray-700 poppins hidden md:block lg:block"
  }, user.displayName), /* @__PURE__ */ import_react20.default.createElement(FiLogOut, {
    className: "cursor-pointer w-6 h-6 text-gray-700",
    onClick: signOutUser
  }))) : /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "flex items-center justify-end space-x-6"
  }, /* @__PURE__ */ import_react20.default.createElement("button", {
    className: "bg-primary px-6 py-3 text-white poppins rounded-full ring-green-500 focus:outline-none focus:ring-4  transition duration-700 hover:scale-105 ",
    onClick: () => navigate("/signin")
  }, "Sign In"), /* @__PURE__ */ import_react20.default.createElement("button", {
    className: " bg-primary px-6 py-3 text-white poppins rounded-full ring-green-500 focus:outline-none focus:ring-4  transition duration-700 hover:scale-105",
    onClick: () => navigate("/signup")
  }, "Sign Up")))));
};
var Navbar_default = Navbar;

// app/old-app/contexts/DeliveryProvider.jsx
init_react();
var import_react21 = __toESM(require_react());
var DeliveryContext = (0, import_react21.createContext)();
var useDelivery = () => {
  return (0, import_react21.useContext)(DeliveryContext);
};
var DeliveryProvider = ({ children }) => {
  const [input, setInput] = (0, import_react21.useState)({});
  const [disabled, setDisabled] = (0, import_react21.useState)(true);
  const value = {
    input,
    disabled,
    setInput,
    setDisabled
  };
  return /* @__PURE__ */ import_react21.default.createElement(DeliveryContext.Provider, {
    value
  }, children);
};
var DeliveryProvider_default = DeliveryProvider;

// app/old-app/routes/PublicRoute.jsx
init_react();
var import_react22 = __toESM(require_react());

// app/old-app/screens/ErrorScreen.jsx
init_react();
var import_react23 = __toESM(require_react());
init_react_router_dom();
var import_error = __toESM(require_error());
var ErrorScreen = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ import_react23.default.createElement("main", {
    className: " h-screen banner"
  }, /* @__PURE__ */ import_react23.default.createElement("div", {
    className: "max-w-screen-xl py-20 mx-auto px-6"
  }, /* @__PURE__ */ import_react23.default.createElement("div", {
    className: "flex flex-col items-center justify-center h-3/4 pt-24"
  }, /* @__PURE__ */ import_react23.default.createElement("img", {
    className: "w-96 object-contain",
    src: import_error.default,
    alt: "error"
  }), /* @__PURE__ */ import_react23.default.createElement("button", {
    className: "bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24  transition duration-300 hover:scale-105",
    onClick: () => navigate("/")
  }, "Go back to home"))));
};
var ErrorScreen_default = ErrorScreen;

// app/old-app/screens/FoodDetailScreen.jsx
init_react();
var import_react25 = __toESM(require_react());
init_react_router_dom();
var import_sweetalert5 = __toESM(require_sweetalert_min());

// app/old-app/routes/Back.jsx
init_react();
var import_react24 = __toESM(require_react());
init_react_router_dom();
var Back = () => {
  return /* @__PURE__ */ import_react24.default.createElement("div", {
    className: "relative top-8"
  }, /* @__PURE__ */ import_react24.default.createElement(Link, {
    to: "/",
    className: "hover:underline poppins text-gray-700 select-none flex items-center space-x-2"
  }, /* @__PURE__ */ import_react24.default.createElement(MdOutlineKeyboardBackspace, null), " ", /* @__PURE__ */ import_react24.default.createElement("span", null, "Back")));
};
var Back_default = Back;

// app/old-app/screens/FoodDetailScreen.jsx
var FoodDetailScreen = () => {
  const [quantity, setQuantity] = (0, import_react25.useState)(1);
  const [disabled, setDisabled] = (0, import_react25.useState)(false);
  const title = useParams();
  const [foods] = useFetch_default();
  const { handleOrder } = useOrder();
  const navigate = useNavigate();
  return /* @__PURE__ */ import_react25.default.createElement("main", {
    className: "max-w-screen-xl mx-auto px-6 my-16"
  }, /* @__PURE__ */ import_react25.default.createElement(Back_default, null), foods?.filter((item) => item.title === title)?.map((food) => /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "flex flex-col justify-center items-center h-screen"
  }, /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10",
    key: food.id
  }, /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "order-2 md:order-1 lg:order-1 flex flex-col justify-center"
  }, /* @__PURE__ */ import_react25.default.createElement("h1", {
    className: "text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none"
  }, food.title), /* @__PURE__ */ import_react25.default.createElement("p", {
    className: "text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none"
  }, food.description), /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8"
  }, /* @__PURE__ */ import_react25.default.createElement("h1", {
    className: "text-3xl font-bold text-black poppins select-none"
  }, "$", (food.price * quantity).toFixed(2)), /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full"
  }, /* @__PURE__ */ import_react25.default.createElement(AiOutlineMinus, {
    onClick: () => {
      quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
    },
    className: "text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105  transition duration-500 cursor-pointer p-1"
  }), /* @__PURE__ */ import_react25.default.createElement("span", {
    className: "text-lg text-gray-700 poppins select-none"
  }, quantity), /* @__PURE__ */ import_react25.default.createElement(AiOutlinePlus, {
    onClick: () => {
      setQuantity(quantity + 1);
    },
    className: "text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105  transition duration-500 cursor-pointer p-1"
  }))), /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "mt-8 flex items-center justify-center md:justify-start lg:justify-start"
  }, /* @__PURE__ */ import_react25.default.createElement("button", {
    disabled,
    className: disabled ? "opacity-30 flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4  transition duration-700 hover:scale-105" : "flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4  transition duration-700 hover:scale-105",
    onClick: () => {
      food["quantity"] = quantity;
      food.price = food.price * quantity;
      handleOrder(food);
      setDisabled(true);
      (0, import_sweetalert5.default)("Wow!!!", "Your order has added to the cart", "success");
      navigate("/orders");
    }
  }, /* @__PURE__ */ import_react25.default.createElement(BsCart2, {
    className: "text-xl"
  }), /* @__PURE__ */ import_react25.default.createElement("span", null, disabled ? "Added" : "Add to Cart")))), /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "order-1 md:order-2 lg:order-2"
  }, /* @__PURE__ */ import_react25.default.createElement("img", {
    src: food.image,
    className: "w-3/4 md:w-3/4 lg:w-full mx-auto",
    alt: "food"
  }))))));
};
var FoodDetailScreen_default = FoodDetailScreen;

// app/old-app/screens/HomeScreen.jsx
init_react();
var import_react34 = __toESM(require_react());

// app/old-app/components/About/AboutUs.jsx
init_react();
var import_react27 = __toESM(require_react());

// app/old-app/components/About/AboutItem.jsx
init_react();
var import_react26 = __toESM(require_react());
var AboutItem = ({ id, image, icon, title, description }) => {
  return /* @__PURE__ */ import_react26.default.createElement("div", {
    className: "bg-white  transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl"
  }, /* @__PURE__ */ import_react26.default.createElement("div", {
    className: " aspect-w-16 aspect-h-9 lg:aspect-none overflow-hidden rounded-2xl grow"
  }, /* @__PURE__ */ import_react26.default.createElement("img", {
    className: " transition duration-700 hover:scale-125",
    src: image,
    alt: title
  })), /* @__PURE__ */ import_react26.default.createElement("div", {
    className: " mt-6 space-x-3 "
  }, /* @__PURE__ */ import_react26.default.createElement("div", {
    className: "flex flex-col space-y-3"
  }, /* @__PURE__ */ import_react26.default.createElement("h1", {
    className: "text-xl text-gray-800 poppins"
  }, title), /* @__PURE__ */ import_react26.default.createElement("p", {
    className: "text-sm text-gray-500 poppins"
  }, description))));
};
var AboutItem_default = AboutItem;

// app/old-app/components/About/AboutUs.jsx
var AboutUs = () => {
  const [aboutData, setAboutData] = (0, import_react27.useState)([]);
  (0, import_react27.useEffect)(() => {
    fetch("/aboutus.json").then((res) => res.json()).then((data) => setAboutData(data));
  }, []);
  return /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "w-screen mx-auto my-12 px-6"
  }, /* @__PURE__ */ import_react27.default.createElement("h1", {
    className: "text-4xl poppins pb-4"
  }, "Why you choose us"), /* @__PURE__ */ import_react27.default.createElement("p", {
    className: "text-gray-500 text-sm poppins w-2/4"
  }, "We satisfied your appetite."), /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8"
  }, aboutData.map((item) => /* @__PURE__ */ import_react27.default.createElement(AboutItem_default, {
    key: item.id,
    ...item
  }))));
};
var AboutUs_default = AboutUs;

// app/old-app/components/Foods Showcase/Foods.jsx
init_react();
var import_react30 = __toESM(require_react());

// app/old-app/components/Foods Showcase/FoodItem.jsx
init_react();
var import_react28 = __toESM(require_react());
init_react_router_dom();
var FoodItem = ({ image, title, description, price, type }) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate(`/foods/${title}`);
  };
  return /* @__PURE__ */ import_react28.default.createElement("div", {
    className: "bg-white border border-gray-100 transition  duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
  }, /* @__PURE__ */ import_react28.default.createElement("span", {
    className: "bg-green-100 border border-green-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 "
  }, type), /* @__PURE__ */ import_react28.default.createElement("img", {
    className: "w-64 mx-auto  transition duration-300 hover:scale-105",
    src: image,
    alt: ""
  }), /* @__PURE__ */ import_react28.default.createElement("div", {
    className: "flex flex-col items-center my-3 space-y-2"
  }, /* @__PURE__ */ import_react28.default.createElement("h1", {
    className: "text-gray-900 poppins text-lg"
  }, title), /* @__PURE__ */ import_react28.default.createElement("p", {
    className: "text-gray-500 poppins text-sm text-center"
  }, description.slice(0, 50)), /* @__PURE__ */ import_react28.default.createElement("h2", {
    className: "text-gray-900 poppins text-2xl font-bold"
  }, "$", price), /* @__PURE__ */ import_react28.default.createElement("button", {
    className: "bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24  transition duration-300 hover:scale-105",
    onClick: handleRoute
  }, "Order Now")));
};
var FoodItem_default = FoodItem;

// app/old-app/components/Foods Showcase/Skeleton.jsx
init_react();
var import_react29 = __toESM(require_react());
var Skeleton = () => {
  return /* @__PURE__ */ import_react29.default.createElement("div", {
    className: "animate-pulse bg-white border border-gray-100 transition  duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
  }, /* @__PURE__ */ import_react29.default.createElement("span", {
    className: "bg-gray-100 border border-gray-500 rounded-full px-4 py-1 inline-block mb-4 "
  }), /* @__PURE__ */ import_react29.default.createElement("div", {
    className: "w-64 h-48 bg-gray-200 mx-auto  transition duration-300 hover:scale-105"
  }, " "), /* @__PURE__ */ import_react29.default.createElement("div", {
    className: "flex flex-col items-center my-3 space-y-2"
  }, /* @__PURE__ */ import_react29.default.createElement("div", {
    className: "w-36 bg-gray-300 py-3"
  }), /* @__PURE__ */ import_react29.default.createElement("p", {
    className: "w-72 bg-gray-200 py-1"
  }), /* @__PURE__ */ import_react29.default.createElement("div", {
    className: "w-24 bg-gray-200 py-2"
  }), /* @__PURE__ */ import_react29.default.createElement("button", {
    className: "bg-gray-400 text-white px-8 py-3 focus:outline-none poppins rounded-full mt-24  transition duration-300 hover:scale-105"
  })));
};
var Skeleton_default = Skeleton;

// app/old-app/components/Foods Showcase/Foods.jsx
var Foods = () => {
  const [menuTab, setMenuTab] = (0, import_react30.useState)("Breakfast");
  const [loading, setLoading] = (0, import_react30.useState)(false);
  const [foods] = useFetch_default();
  (0, import_react30.useEffect)(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1e3);
  }, []);
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };
  return /* @__PURE__ */ import_react30.default.createElement("section", {
    className: "my-12 max-w-screen-xl mx-auto px-6"
  }, /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "flex items-center justify-center space-x-6 cursor-pointer"
  }, /* @__PURE__ */ import_react30.default.createElement("p", {
    className: menuTab === "Breakfast" ? "active_menu_tab poppins bg-primary border border-green-500 rounded-full" : "menu_tab poppins",
    onClick: () => handleMenuTabs("Breakfast")
  }, "Breakfast"), /* @__PURE__ */ import_react30.default.createElement("p", {
    className: menuTab === "Lunch" ? "active_menu_tab poppins bg-primary border border-green-500 rounded-full" : "menu_tab poppins",
    onClick: () => handleMenuTabs("Lunch")
  }, "Lunch"), /* @__PURE__ */ import_react30.default.createElement("p", {
    className: menuTab === "Dinner" ? "active_menu_tab poppins bg-primary border border-green-500 rounded-full" : "menu_tab poppins",
    onClick: () => handleMenuTabs("Dinner")
  }, "Dinner")), /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
  }, foods.filter((item) => menuTab === item.type).map((item) => loading ? /* @__PURE__ */ import_react30.default.createElement(Skeleton_default, {
    key: item.id
  }) : /* @__PURE__ */ import_react30.default.createElement(FoodItem_default, {
    key: item.id,
    ...item
  }))));
};
var Foods_default = Foods;

// app/old-app/components/Footer/Footer.jsx
init_react();
var import_react32 = __toESM(require_react());

// app/old-app/components/Footer/BottomFooter.jsx
init_react();
var import_react31 = __toESM(require_react());
var BottomFooter = () => {
  const [date] = (0, import_react31.useState)(new Date());
  return /* @__PURE__ */ import_react31.default.createElement("div", {
    className: "flex justify-center items-center pt-8"
  }, /* @__PURE__ */ import_react31.default.createElement("div", {
    className: "flex  items-center space-x-6"
  }, /* @__PURE__ */ import_react31.default.createElement("span", {
    className: "poppins text-white cursor-pointer"
  }, "@", date.getFullYear(), " Hector Quijada")));
};
var BottomFooter_default = BottomFooter;

// app/old-app/components/Footer/Footer.jsx
var Footer = () => {
  return /* @__PURE__ */ import_react32.default.createElement("footer", {
    className: "bg-gray-800 px-6 py-12"
  }, /* @__PURE__ */ import_react32.default.createElement("div", {
    className: " max-w-screen-xl mx-auto px-6"
  }, /* @__PURE__ */ import_react32.default.createElement(BottomFooter_default, null)));
};
var Footer_default = Footer;

// app/old-app/components/Header/Banner.jsx
init_react();
var import_react33 = __toESM(require_react());
function Banner() {
  return /* @__PURE__ */ import_react33.default.createElement("section", {
    className: "header-banner h-96 w-full bg-yellow-50"
  }, /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "flex flex-col items-center justify-center h-full"
  }, /* @__PURE__ */ import_react33.default.createElement("h1", {
    className: "text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700"
  }, "The best food waiting for your belly!"), /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-green-500 focus:ring-4 w-96 flex items-center"
  }, /* @__PURE__ */ import_react33.default.createElement("input", {
    type: "text",
    className: " rounded-full px-4 focus:outline-none w-full bg-transparent",
    placeholder: "Search here..."
  }), /* @__PURE__ */ import_react33.default.createElement("button", {
    className: "text-sm bg-primary py-3 px-6 rounded-full text-white poppins ring-green-500 focus:ring-4 transition duration-300 hover:scale-105 "
  }, "Search"))));
}

// app/old-app/screens/HomeScreen.jsx
var HomeScreen = () => {
  return /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement(Banner, null), /* @__PURE__ */ import_react34.default.createElement(Foods_default, null), /* @__PURE__ */ import_react34.default.createElement(AboutUs_default, null), /* @__PURE__ */ import_react34.default.createElement(Footer_default, null));
};
var HomeScreen_default = HomeScreen;

// app/old-app/screens/OrderSuccessfulScreen.jsx
init_react();
init_emotion_react_browser_esm();
var import_react38 = __toESM(require_react());
init_react_router_dom();
var import_GridLoader = __toESM(require_GridLoader());
var import_ordersuccess = __toESM(require_ordersuccess());
var override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
var OrderSuccessfulScreen = () => {
  const [loading, setLoading] = (0, import_react38.useState)(true);
  const navigate = useNavigate();
  (0, import_react38.useEffect)(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3e3);
  }, []);
  return /* @__PURE__ */ import_react38.default.createElement("main", {
    className: " h-screen banner"
  }, /* @__PURE__ */ import_react38.default.createElement("div", {
    className: "max-w-screen-xl py-20 mx-auto px-6"
  }, loading ? /* @__PURE__ */ import_react38.default.createElement("div", {
    className: "flex flex-col items-center justify-center h-3/4 pt-24"
  }, /* @__PURE__ */ import_react38.default.createElement(import_GridLoader.default, {
    color: "#ce193c",
    loading,
    css: override,
    size: 25
  })) : /* @__PURE__ */ import_react38.default.createElement(import_react38.default.Fragment, null, /* @__PURE__ */ import_react38.default.createElement("div", {
    className: "flex flex-col items-center justify-center h-3/4 pt-24"
  }, /* @__PURE__ */ import_react38.default.createElement("h1", {
    className: "text-3xl text-center text-primary font-semibold poppins flex space-x-6 items-center "
  }, /* @__PURE__ */ import_react38.default.createElement(MdVerified, {
    className: "text-primary green-500 text-3xl"
  }), " Order Successful!!!"), /* @__PURE__ */ import_react38.default.createElement("img", {
    className: "w-96 object-contain",
    src: import_ordersuccess.default,
    alt: "orderSuccessful"
  }), /* @__PURE__ */ import_react38.default.createElement("button", {
    className: "bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24  transition duration-300 hover:scale-105",
    onClick: () => navigate.push("/")
  }, "Go back to home")))));
};
var OrderSuccessfulScreen_default = OrderSuccessfulScreen;

// app/old-app/screens/PlaceOrderScreen.jsx
init_react();
var import_react42 = __toESM(require_react());
init_react_router_dom();
var import_sweetalert7 = __toESM(require_sweetalert_min());

// app/old-app/components/PlaceOrder/DeliveryForm.jsx
init_react();
var import_react39 = __toESM(require_react());
var import_sweetalert6 = __toESM(require_sweetalert_min());
var DeliveryForm = () => {
  const { user } = useAuth_default();
  const [change, setChange] = (0, import_react39.useState)({
    country: "",
    roadNo: "",
    flatno: "",
    name: `${user.displayName}`
  });
  const { setInput, setDisabled } = useDelivery();
  const handleChange = (e) => {
    const { value, name: name4 } = e.target;
    setChange((prevValue) => {
      return {
        ...prevValue,
        [name4]: value
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      country: change.country,
      roadNo: change.roadNo,
      flatno: change.flatno,
      name: change.name
    });
    (0, import_sweetalert6.default)("Information Updated!", "Your shipping details updated successfully!", "success");
    setDisabled(false);
  };
  return /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "flex flex-col mt-20"
  }, /* @__PURE__ */ import_react39.default.createElement("h1", {
    className: "text-2xl poppins pb-4 border-b border-gray-500 text-gray-700"
  }, "Edit Delivery Details"), /* @__PURE__ */ import_react39.default.createElement("form", {
    className: "my-4",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "flex flex-col space-y-3"
  }, /* @__PURE__ */ import_react39.default.createElement(TextField_default, {
    type: "text",
    placeholder: "Country and District",
    name: "country",
    value: change.country,
    onChange: handleChange,
    required: true
  }), /* @__PURE__ */ import_react39.default.createElement(TextField_default, {
    type: "text",
    placeholder: "Road Name and Road No",
    name: "roadNo",
    value: change.roadNo,
    onChange: handleChange,
    required: true
  }), /* @__PURE__ */ import_react39.default.createElement(TextField_default, {
    type: "text",
    placeholder: "Flat, suite or floor",
    name: "flatno",
    value: change.flatno,
    onChange: handleChange,
    required: true
  }), /* @__PURE__ */ import_react39.default.createElement(TextField_default, {
    type: "text",
    placeholder: "Delivery to",
    name: "name",
    value: change.name,
    onChange: handleChange,
    required: true
  }), /* @__PURE__ */ import_react39.default.createElement("button", {
    className: "w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500"
  }, "Save & Continue"))));
};
var DeliveryForm_default = DeliveryForm;

// app/old-app/components/PlaceOrder/OrderCard.jsx
init_react();
var import_react40 = __toESM(require_react());
var OrderCard = (props) => {
  const { removeOrder } = useOrder();
  return /* @__PURE__ */ import_react40.default.createElement("div", {
    className: " rounded-lg p-4 flex space-x-3"
  }, /* @__PURE__ */ import_react40.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react40.default.createElement("img", {
    className: "w-24 object-contain",
    src: props.image,
    alt: ""
  })), /* @__PURE__ */ import_react40.default.createElement("div", {
    className: "flex flex-col space-y-3 flex-grow"
  }, /* @__PURE__ */ import_react40.default.createElement("h5", {
    className: "text-base poppins text-gray-700"
  }, props.title), /* @__PURE__ */ import_react40.default.createElement("h1", {
    className: "font-semibold text-lg text-primary poppins"
  }, "$", props.price.toFixed(2)), /* @__PURE__ */ import_react40.default.createElement("p", {
    className: "text-sm poppins text-gray-400"
  }, props.type)), /* @__PURE__ */ import_react40.default.createElement("div", {
    className: "flex items-center px-4 py-2 space-x-3"
  }, /* @__PURE__ */ import_react40.default.createElement("span", {
    className: "text-lg text-gray-700 poppins select-none"
  }, props.quantity, " items")), /* @__PURE__ */ import_react40.default.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /* @__PURE__ */ import_react40.default.createElement(AiOutlineDelete, {
    className: "w-6 h-6 text-gray-600  transition hover:scale-105 duration-500 cursor-pointer",
    onClick: () => removeOrder(props.id)
  })));
};
var OrderCard_default = OrderCard;

// app/old-app/components/PlaceOrder/OrderPrice.jsx
init_react();
var import_react41 = __toESM(require_react());
var OrderPrice = () => {
  const { order } = useOrder();
  let allPrice = 0;
  for (var i = 0; i < order.length; i++) {
    allPrice += order[i].price * order[i].quantity;
  }
  console.log(allPrice);
  const subTotal = parseFloat(allPrice.toFixed(2));
  const tax = parseFloat((allPrice % 5).toFixed(2));
  const deliveryFee = parseFloat((allPrice % 20).toFixed(2));
  const total = parseFloat((subTotal + tax + deliveryFee).toFixed(2));
  return /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "flex flex-col space-y-3 my-4"
  }, /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react41.default.createElement("span", {
    className: "flex-grow poppins text-gray-700"
  }, "Subtotal"), /* @__PURE__ */ import_react41.default.createElement("span", {
    className: "poppins font-semibold text-black"
  }, "$", subTotal)), /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react41.default.createElement("span", {
    className: "flex-grow poppins text-gray-700"
  }, "Tax"), /* @__PURE__ */ import_react41.default.createElement("span", {
    className: "poppins font-semibold text-black"
  }, "$", tax)), /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react41.default.createElement("span", {
    className: "flex-grow poppins text-gray-700"
  }, "Delivery Fee"), /* @__PURE__ */ import_react41.default.createElement("span", {
    className: "poppins font-semibold text-black"
  }, "$", deliveryFee)), /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react41.default.createElement("span", {
    className: "flex-grow poppins text-gray-700 text-xl"
  }, "Total"), /* @__PURE__ */ import_react41.default.createElement("span", {
    className: "poppins font-semibold text-black text-xl"
  }, "$", total)));
};
var OrderPrice_default = OrderPrice;

// app/old-app/screens/PlaceOrderScreen.jsx
var PlaceOrderScreen = () => {
  const { order, setOrder } = useOrder();
  const { input, disabled } = useDelivery();
  const navigate = useNavigate();
  console.log(order);
  return /* @__PURE__ */ import_react42.default.createElement("main", {
    className: " h-screen banner"
  }, /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "max-w-screen-xl py-20 mx-auto px-6"
  }, /* @__PURE__ */ import_react42.default.createElement(Back_default, null), order.length > 0 ? /* @__PURE__ */ import_react42.default.createElement(import_react42.default.Fragment, null, /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
  }, /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ import_react42.default.createElement(DeliveryForm_default, null)), /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "glass p-6 box-border rounded-lg"
  }, /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "flex flex-col space-y-4 mb-3"
  }, /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "poppins text-gray-700"
  }, "Deliver Place :", " ", /* @__PURE__ */ import_react42.default.createElement("span", {
    className: "font-semibold text-black"
  }, input.country ? `${input.country}` : "-----")), /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "poppins text-gray-700"
  }, "Arriving in 20-30 min"), /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "poppins text-gray-700"
  }, "Road", " ", /* @__PURE__ */ import_react42.default.createElement("span", {
    className: "font-semibold text-black"
  }, input.roadNo ? `${input.roadNo}` : "-----"), " "), /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "poppins text-gray-700"
  }, "Floor :", " ", /* @__PURE__ */ import_react42.default.createElement("span", {
    className: "font-semibold text-black"
  }, input.flatno ? `${input.flatno}` : "-----"), " "), /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "poppins text-gray-700"
  }, "Deliver to :", " ", /* @__PURE__ */ import_react42.default.createElement("span", {
    className: "font-semibold text-black"
  }, input.name ? `${input.name}` : "-----"), " ")), /* @__PURE__ */ import_react42.default.createElement("div", {
    className: " flex flex-col space-y-3 h-64 overflow-y-scroll orderContainer "
  }, order.map((item) => /* @__PURE__ */ import_react42.default.createElement(OrderCard_default, {
    key: item.id,
    ...item
  }))), /* @__PURE__ */ import_react42.default.createElement(OrderPrice_default, {
    ...order
  }), /* @__PURE__ */ import_react42.default.createElement("div", null, disabled ? /* @__PURE__ */ import_react42.default.createElement("button", {
    disabled: "disabled",
    className: "w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500 opacity-40"
  }, "Place Order") : /* @__PURE__ */ import_react42.default.createElement("button", {
    className: "w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500",
    onClick: () => {
      (0, import_sweetalert7.default)("Congratulations!!!", `You have order ${order.length} times successfully`, "success");
      navigate.push("/order-successful");
      setOrder([]);
    }
  }, "Place Order")))))) : /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "pt-24"
  }, /* @__PURE__ */ import_react42.default.createElement("h1", {
    className: "text-center text-5xl text-primary poppins"
  }, "No Order has added!!"))));
};
var PlaceOrderScreen_default = PlaceOrderScreen;

// app/old-app/screens/SignInScreen.jsx
init_react();
var import_react45 = __toESM(require_react());
init_react_router_dom();

// app/old-app/components/Form/Brand.jsx
init_react();
var import_react43 = __toESM(require_react());
var import_logo22 = __toESM(require_logo2());
var Brand = () => {
  return /* @__PURE__ */ import_react43.default.createElement("div", null, /* @__PURE__ */ import_react43.default.createElement("img", {
    className: "w-52",
    src: import_logo22.default,
    alt: "logo"
  }));
};
var Brand_default = Brand;

// app/old-app/components/Form/GoogleSignIn.jsx
init_react();
var import_react44 = __toESM(require_react());

// node_modules/react-icons/fc/index.esm.js
init_react();
function FcGoogle(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "x": "0px", "y": "0px", "viewBox": "0 0 48 48", "enableBackground": "new 0 0 48 48" }, "child": [{ "tag": "path", "attr": { "fill": "#FFC107", "d": "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r\n	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r\n	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" } }, { "tag": "path", "attr": { "fill": "#FF3D00", "d": "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r\n	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" } }, { "tag": "path", "attr": { "fill": "#4CAF50", "d": "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r\n	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" } }, { "tag": "path", "attr": { "fill": "#1976D2", "d": "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r\n	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" } }] })(props);
}

// app/old-app/components/Form/GoogleSignIn.jsx
var GoogleSignIn = ({ text }) => {
  const { signInWithGoogle } = useAuth_default();
  return /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, /* @__PURE__ */ import_react44.default.createElement("div", {
    className: "border-t border-gray-200 mt-6"
  }, /* @__PURE__ */ import_react44.default.createElement("p", {
    className: "text-center text-gray-400 py-4"
  }, "OR "), /* @__PURE__ */ import_react44.default.createElement("div", {
    className: "flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100",
    onClick: signInWithGoogle
  }, /* @__PURE__ */ import_react44.default.createElement(FcGoogle, {
    className: "w-6 h-6"
  }), /* @__PURE__ */ import_react44.default.createElement("span", {
    className: "poppins"
  }, text))));
};
var GoogleSignIn_default = GoogleSignIn;

// app/old-app/screens/SignInScreen.jsx
var SignInScreen = () => {
  const [userInput, setUserInput] = (0, import_react45.useState)({
    email: "",
    password: ""
  });
  const { signInUser } = useAuth_default();
  const handleChange = (e) => {
    const { value, name: name4 } = e.target;
    setUserInput((prev2) => {
      return {
        ...prev2,
        [name4]: value
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInUser(userInput.email, userInput.password);
  };
  const Inputs = [
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      value: `${userInput.email}`,
      name: "email"
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      value: `${userInput.password}`,
      name: "password"
    }
  ];
  return /* @__PURE__ */ import_react45.default.createElement("main", {
    className: "h-screen w-full banner"
  }, /* @__PURE__ */ import_react45.default.createElement("div", {
    className: "flex flex-col justify-center items-center h-screen"
  }, /* @__PURE__ */ import_react45.default.createElement(Brand_default, null), /* @__PURE__ */ import_react45.default.createElement("form", {
    className: "bg-white w-96 mt-6 p-4 rounded-lg shadow-lg",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ import_react45.default.createElement("div", {
    className: "flex flex-col space-y-6"
  }, Inputs.map((input) => /* @__PURE__ */ import_react45.default.createElement(TextField_default, {
    key: input.id,
    type: input.type,
    placeholder: input.placeholder,
    value: input.value,
    name: input.name,
    onChange: handleChange
  }))), /* @__PURE__ */ import_react45.default.createElement(Button_default, {
    text: "Sign In"
  }), /* @__PURE__ */ import_react45.default.createElement(Link, {
    to: "/signup"
  }, /* @__PURE__ */ import_react45.default.createElement("p", {
    className: "text-base text-primary text-center my-6 hover:underline"
  }, "Need an account ?")), /* @__PURE__ */ import_react45.default.createElement(GoogleSignIn_default, {
    text: "Sign In With Google"
  }))));
};
var SignInScreen_default = SignInScreen;

// app/old-app/screens/SignUpScreen.jsx
init_react();
var import_react46 = __toESM(require_react());
init_react_router_dom();
var SignUpScreen = () => {
  const [userInput, setUserInput] = (0, import_react46.useState)({
    name: "",
    email: "",
    password: ""
  });
  const { signUpUser } = useAuth_default();
  const handleChange = (e) => {
    const { value, name: name4 } = e.target;
    setUserInput((prev2) => {
      return {
        ...prev2,
        [name4]: value
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUser(userInput.email, userInput.password, userInput.name);
  };
  const Inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "Name",
      value: `${userInput.name}`,
      name: "name"
    },
    {
      id: 2,
      type: "email",
      placeholder: "Email",
      value: `${userInput.email}`,
      name: "email"
    },
    {
      id: 4,
      type: "password",
      placeholder: "Password",
      value: `${userInput.password}`,
      name: "password"
    }
  ];
  return /* @__PURE__ */ import_react46.default.createElement("main", {
    className: "h-screen w-full banner"
  }, /* @__PURE__ */ import_react46.default.createElement("div", {
    className: "flex flex-col justify-center items-center h-screen"
  }, /* @__PURE__ */ import_react46.default.createElement(Brand_default, null), /* @__PURE__ */ import_react46.default.createElement("form", {
    className: "bg-white w-96 mt-6 p-4 rounded-lg shadow-lg",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ import_react46.default.createElement("div", {
    className: "flex flex-col space-y-6"
  }, Inputs.map((input) => /* @__PURE__ */ import_react46.default.createElement(TextField_default, {
    key: input.id,
    type: input.type,
    placeholder: input.placeholder,
    value: input.value,
    name: input.name,
    onChange: handleChange
  }))), /* @__PURE__ */ import_react46.default.createElement(Button_default, {
    text: "Sign Up"
  }), /* @__PURE__ */ import_react46.default.createElement(Link, {
    to: "signin"
  }), /* @__PURE__ */ import_react46.default.createElement("p", {
    className: "text-base text-primary text-center my-6 hover:underline"
  }, "Already have an account ?"), /* @__PURE__ */ import_react46.default.createElement(GoogleSignIn_default, {
    text: "Sign Up With Google"
  }))));
};
var SignUpScreen_default = SignUpScreen;

// app/old-app/App.jsx
var App = () => {
  return /* @__PURE__ */ import_react47.default.createElement(AuthProvider, null, /* @__PURE__ */ import_react47.default.createElement(OrderProvider_default, null, /* @__PURE__ */ import_react47.default.createElement(DeliveryProvider_default, null, /* @__PURE__ */ import_react47.default.createElement(Navbar_default, null), /* @__PURE__ */ import_react47.default.createElement(Routes, null, /* @__PURE__ */ import_react47.default.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ import_react47.default.createElement(HomeScreen_default, null)
  }), /* @__PURE__ */ import_react47.default.createElement(Route, {
    path: "/signin",
    element: /* @__PURE__ */ import_react47.default.createElement(SignInScreen_default, null)
  }), /* @__PURE__ */ import_react47.default.createElement(Route, {
    path: "/signup",
    element: /* @__PURE__ */ import_react47.default.createElement(SignUpScreen_default, null)
  }), /* @__PURE__ */ import_react47.default.createElement(Route, {
    path: "/foods/:title",
    element: /* @__PURE__ */ import_react47.default.createElement(FoodDetailScreen_default, null)
  }), /* @__PURE__ */ import_react47.default.createElement(Route, {
    path: "/orders",
    element: /* @__PURE__ */ import_react47.default.createElement(PlaceOrderScreen_default, null)
  }), /* @__PURE__ */ import_react47.default.createElement(Route, {
    path: "/order-successful",
    element: /* @__PURE__ */ import_react47.default.createElement(OrderSuccessfulScreen_default, null)
  }), /* @__PURE__ */ import_react47.default.createElement(Route, {
    path: "/admin",
    element: /* @__PURE__ */ import_react47.default.createElement(Admin_default, null)
  }), /* @__PURE__ */ import_react47.default.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ import_react47.default.createElement(ErrorScreen_default, null)
  })))));
};
var App_default = App;
export {
  App_default as default
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/routes/$-DZ4LW2KW.js.map
