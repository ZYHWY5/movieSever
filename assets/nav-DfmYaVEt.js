import { c as _, o as c, b as t, g as L, a as N, f as k, r as f, h as w, d as a, F as x, k as C, t as $, j as g, n as E, m as F, T as M, x as O, y as R } from "./index-CMRomo5f.js";
import { u as V } from "./user-Bw2caNtK.js";
import { _ as b } from "./_plugin-vue_export-helper-DlAUqK2U.js";
function j(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(s, o) {
    var n = e.get(s);
    n ? n.push(o) : e.set(s, [o]);
  }, off: function(s, o) {
    var n = e.get(s);
    n && (o ? n.splice(n.indexOf(o) >>> 0, 1) : e.set(s, []));
  }, emit: function(s, o) {
    var n = e.get(s);
    n && n.slice().map(function(l) {
      l(o);
    }), (n = e.get("*")) && n.slice().map(function(l) {
      l(s, o);
    });
  } };
}
const ls = j(), H = { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", class: "icon", viewBox: "0 0 1024 1024" };
function I(e, s) {
  return c(), _("svg", H, s[0] || (s[0] = [t("path", { fill: "#905afb", d: "M834.7 920.1h-643c-23.7 0-43-19.2-43-43 0-23.7 19.2-43 43-43h643c23.7 0 43 19.2 43 43 0 23.7-19.3 43-43 43m0-729.2h-643c-23.7 0-43-19.2-43-43 0-23.7 19.2-43 43-43h643c23.7 0 43 19.2 43 43s-19.3 43-43 43m0 354.6h-643c-23.7 0-43-19.2-43-43 0-23.7 19.2-43 43-43h643c23.7 0 43 19.2 43 43 0 23.7-19.3 43-43 43" }, null, -1)]));
}
const S = { render: I };
let y = () => new Promise((e) => {
  L.get("/api/fun").then((s) => {
    e(s.data);
  });
}, (e) => {
  e(alert("\u7F51\u7EDC\u94FE\u63A5\u4E0D\u7A33\u5B9A,\u8BF7\u66F4\u6362\u7F51\u7EDC\u540E\u91CD\u8BD5"));
}), B = (e) => {
  N.push(e.path);
};
const T = { class: "sidebar" }, q = { class: "content" }, z = { class: "logo" }, A = { class: "fun" }, D = ["onClick"], P = ["src"], U = { __name: "sidebar", async setup(e) {
  let s, o, n = k();
  V();
  let l = f([]);
  l.value = ([s, o] = w(() => y()), s = await s, o(), s);
  let h = () => {
    n.push("/home");
  };
  return (u, d) => (c(), _("div", T, [t("div", q, [t("div", z, [t("span", { onClick: d[0] || (d[0] = (...i) => a(h) && a(h)(...i)) }, "ERO\u7535\u5F71\u7F51")]), t("div", A, [t("ul", null, [(c(true), _(x, null, C(a(l), (i) => (c(), _("li", { onClick: (p) => a(B)(i), key: i }, [t("img", { width: "36px", height: "36px", src: i.src, alt: "" }, null, 8, P), t("p", null, $(i.name), 1)], 8, D))), 128))])])])]));
} }, G = b(U, [["__scopeId", "data-v-301770f2"]]), J = { class: "nav_bg" }, K = { class: "nav" }, Q = { class: "logo" }, W = { class: "more_little" }, X = { class: "more_big" }, Y = ["onClick"], Z = ["src"], ss = { class: "sidebar" }, ts = { __name: "nav", async setup(e) {
  let s, o, n = k(), l = f();
  l.value = ([s, o] = w(() => y()), s = await s, o(), s);
  let h = () => {
    n.push("/home");
  }, u = f(false), d = () => {
    u.value = !u.value;
  }, i = window.matchMedia("(min-width: 769px)"), p = (v) => {
    v.matches && (u.value = false);
  };
  return p(i), i.addEventListener("change", p), (v, m) => (c(), _("div", J, [t("div", K, [t("div", Q, [t("span", { onClick: m[0] || (m[0] = (...r) => a(h) && a(h)(...r)) }, "ERO\u7535\u5F71\u7F51")]), t("div", W, [g(a(S), { onClick: a(d), class: "more_img" }, null, 8, ["onClick"])]), t("div", X, [t("ul", null, [(c(true), _(x, null, C(a(l), (r) => (c(), _("li", { onClick: (es) => a(B)(r), key: r }, [t("img", { src: r.src, alt: "" }, null, 8, Z), t("p", null, $(r.name), 1)], 8, Y))), 128))])])]), t("div", ss, [t("div", { onClick: m[1] || (m[1] = (...r) => a(d) && a(d)(...r)), class: E({ mask: 1, mask_hidden: a(u) == false }) }, null, 2), g(M, null, { default: F(() => [a(u) ? (c(), O(G, { key: 0 })) : R("", true)]), _: 1 })])]));
} }, is = b(ts, [["__scopeId", "data-v-555282f5"]]);
export {
  is as N,
  ls as e,
  G as s
};
