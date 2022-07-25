import {
  LiveReload,
  Outlet
} from "/build/_shared/chunk-OUAQSTOF.js";
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
var import_react = __toESM(require_react());

// app/old-app/assets/react.svg
var react_default = "/build/_assets/react-HMCELI6U.svg";

// app/old-app/App1.jsx
function App1() {
  const [count, setCount] = (0, import_react.useState)(0);
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
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
//# sourceMappingURL=/build/root-DMRBNZ3P.js.map
