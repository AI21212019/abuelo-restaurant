import {
  LiveReload,
  NavLink,
  Outlet,
  init_react_router_dom,
  useNavigate
} from "/build/_shared/chunk-HM4T7S27.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-M4XHNU2Q.js";

// browser-route-module:/Users/hq/Desktop/techno/abuelo-restaurant/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3LQQNUPT.css";

// app/old-app/App1.jsx
init_react();
var import_react5 = __toESM(require_react());

// app/old-app/assets/react.svg
var react_default = "/build/_assets/react-HMCELI6U.svg";

// app/old-app/components/Navbar/Navbar.jsx
init_react();
var import_react4 = __toESM(require_react());

// node_modules/react-icons/bs/index.esm.js
init_react();

// node_modules/react-icons/lib/esm/index.js
init_react();

// node_modules/react-icons/lib/esm/iconsManifest.js
init_react();

// node_modules/react-icons/lib/esm/iconBase.js
init_react();
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
init_react();
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
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
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/bs/index.esm.js
function BsCart2(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" } }] })(props);
}

// node_modules/react-icons/fi/index.esm.js
init_react();
function FiLogOut(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" } }, { "tag": "polyline", "attr": { "points": "16 17 21 12 16 7" } }, { "tag": "line", "attr": { "x1": "21", "y1": "12", "x2": "9", "y2": "12" } }] })(props);
}

// app/old-app/components/Navbar/Navbar.jsx
init_react_router_dom();

// app/old-app/assets/logo2.png
var logo2_default = "/build/_assets/logo2-G4LYX4VA.png";

// app/old-app/contexts/OrderProvider.jsx
init_react();
var import_react3 = __toESM(require_react());
var OrderContext = (0, import_react3.createContext)();
var useOrder = () => {
  return (0, import_react3.useContext)(OrderContext);
};

// app/old-app/components/Navbar/Navbar.jsx
var Navbar = () => {
  const [changeHeader, setChangeHeader] = (0, import_react4.useState)(false);
  const navigate = useNavigate();
  const [user, setUser] = (0, import_react4.useState)(null);
  const order = useOrder();
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };
  window.addEventListener("scroll", onChangeHeader);
  return /* @__PURE__ */ import_react4.default.createElement("header", {
    className: changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"
  }, /* @__PURE__ */ import_react4.default.createElement("nav", {
    className: "flex items-center max-w-screen-xl mx-auto px-6 py-3"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-grow"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "w-36 cursor-pointer",
    src: logo2_default,
    alt: "logo",
    onClick: () => navigate("/")
  })), user ? /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex items-center justify-end space-x-4"
  }, /* @__PURE__ */ import_react4.default.createElement(NavLink, {
    end: true,
    to: "/admin",
    className: "text-gray-600"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "relative flex cursor-pointer",
    onClick: () => navigate("/orders")
  }, /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2"
  }, order.length), /* @__PURE__ */ import_react4.default.createElement(BsCart2, {
    className: "cursor-pointer w-6 h-6 text-gray-700"
  })), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "text-gray-700 poppins hidden md:block lg:block"
  }, user.displayName), /* @__PURE__ */ import_react4.default.createElement(FiLogOut, {
    className: "cursor-pointer w-6 h-6 text-gray-700",
    onClick: signOutUser
  }))) : /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex items-center justify-end space-x-6"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    className: "bg-primary px-6 py-3 text-white poppins rounded-full ring-green-500 focus:outline-none focus:ring-4  transition duration-700 hover:scale-105 ",
    onClick: () => navigate("/signin")
  }, "Sign In"), /* @__PURE__ */ import_react4.default.createElement("button", {
    className: " bg-primary px-6 py-3 text-white poppins rounded-full ring-green-500 focus:outline-none focus:ring-4  transition duration-700 hover:scale-105",
    onClick: () => navigate("/signup")
  }, "Sign Up")))));
};
var Navbar_default = Navbar;

// app/old-app/App1.jsx
function App1() {
  const [count, setCount] = (0, import_react5.useState)(0);
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://reactjs.org",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("img", {
    src: react_default,
    className: "logo react",
    alt: "React logo"
  }))), /* @__PURE__ */ React.createElement("h1", null, "Vite + React"), /* @__PURE__ */ React.createElement("div", {
    className: "card"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setCount((count2) => count2 + 1)
  }, "count is ", count), /* @__PURE__ */ React.createElement("p", null, "Edit ", /* @__PURE__ */ React.createElement("code", null, "src/App.jsx"), " and save to test HMR")), /* @__PURE__ */ React.createElement("p", {
    className: "read-the-docs"
  }, "Click on the Vite and React logos to learn more"));
}

// app/root.jsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1"
});
function Root() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "description",
    content: "My beautiful React app"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    href: "/logo192.png"
  }), /* @__PURE__ */ React.createElement("title", null, "Chalupas")), /* @__PURE__ */ React.createElement("body", null, "Hello world", /* @__PURE__ */ React.createElement(App1, null), /* @__PURE__ */ React.createElement("div", {
    id: "root"
  }, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  Root as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-KO4XL42G.js.map
