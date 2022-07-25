import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-EDSZQKFU.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-M4XHNU2Q.js";

// browser-route-module:/Users/hq/Desktop/techno/abuelo-restaurant/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3LQQNUPT.css";

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
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Chalupas"), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, "Hello world!", /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  Root as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-UOUCOVTX.js.map
