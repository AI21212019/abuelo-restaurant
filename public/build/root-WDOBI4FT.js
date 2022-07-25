import {
  LiveReload,
  Outlet,
  ScrollRestoration
} from "/build/_shared/chunk-DCUHVGFH.js";
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
  }), /* @__PURE__ */ React.createElement("title", null, "Chalupas")), /* @__PURE__ */ React.createElement("body", null, "Hello world!", /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  Root as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-WDOBI4FT.js.map
