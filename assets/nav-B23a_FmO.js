import { c as _, o as r, b as t, g as L, a as N, f as k, r as f, h as w, d as a, F as x, k as C, t as b, j as g, n as E, m as F, T as M, x as O, y as R } from "./index-BqLe09mV.js";
import { u as V } from "./user-Cczjq76S.js";
import { _ as $ } from "./_plugin-vue_export-helper-DlAUqK2U.js";
function j(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(s, n) {
    var o = e.get(s);
    o ? o.push(n) : e.set(s, [n]);
  }, off: function(s, n) {
    var o = e.get(s);
    o && (n ? o.splice(o.indexOf(n) >>> 0, 1) : e.set(s, []));
  }, emit: function(s, n) {
    var o = e.get(s);
    o && o.slice().map(function(l) {
      l(n);
    }), (o = e.get("*")) && o.slice().map(function(l) {
      l(s, n);
    });
  } };
}
const ls = j(), H = { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", class: "icon", viewBox: "0 0 1024 1024" };
function I(e, s) {
  return r(), _("svg", H, s[0] || (s[0] = [t("path", { fill: "#905afb", d: "M834.7 920.1h-643c-23.7 0-43-19.2-43-43 0-23.7 19.2-43 43-43h643c23.7 0 43 19.2 43 43 0 23.7-19.3 43-43 43m0-729.2h-643c-23.7 0-43-19.2-43-43 0-23.7 19.2-43 43-43h643c23.7 0 43 19.2 43 43s-19.3 43-43 43m0 354.6h-643c-23.7 0-43-19.2-43-43 0-23.7 19.2-43 43-43h643c23.7 0 43 19.2 43 43 0 23.7-19.3 43-43 43" }, null, -1)]));
}
const S = { render: I };
let y = () => new Promise((e) => {
  L.get("https://365b02ce-b845-4125-b13d-c4a087c1497a.mock.pstmn.io/fun").then((s) => {
    e(s.data);
  });
}, (e) => {
  e(alert("\u7F51\u7EDC\u94FE\u63A5\u4E0D\u7A33\u5B9A,\u8BF7\u66F4\u6362\u7F51\u7EDC\u540E\u91CD\u8BD5"));
}), B = (e) => {
  N.push(e.path);
};
const T = { class: "sidebar" }, q = { class: "content" }, z = { class: "logo" }, A = { class: "fun" }, D = ["onClick"], P = ["src"], U = { __name: "sidebar", async setup(e) {
  let s, n, o = k();
  V();
  let l = f([]);
  l.value = ([s, n] = w(() => y()), s = await s, n(), s);
  let h = () => {
    o.push("/home");
  };
  return (u, d) => (r(), _("div", T, [t("div", q, [t("div", z, [t("span", { onClick: d[0] || (d[0] = (...i) => a(h) && a(h)(...i)) }, "ERO\u7535\u5F71\u7F51")]), t("div", A, [t("ul", null, [(r(true), _(x, null, C(a(l), (i) => (r(), _("li", { onClick: (p) => a(B)(i), key: i }, [t("img", { width: "36px", height: "36px", src: i.src, alt: "" }, null, 8, P), t("p", null, b(i.name), 1)], 8, D))), 128))])])])]));
} }, G = $(U, [["__scopeId", "data-v-301770f2"]]), J = { class: "nav_bg" }, K = { class: "nav" }, Q = { class: "logo" }, W = { class: "more_little" }, X = { class: "more_big" }, Y = ["onClick"], Z = ["src"], ss = { class: "sidebar" }, ts = { __name: "nav", async setup(e) {
  let s, n, o = k(), l = f();
  l.value = ([s, n] = w(() => y()), s = await s, n(), s);
  let h = () => {
    o.push("/home");
  }, u = f(false), d = () => {
    u.value = !u.value;
  }, i = window.matchMedia("(min-width: 769px)"), p = (v) => {
    v.matches && (u.value = false);
  };
  return p(i), i.addEventListener("change", p), (v, m) => (r(), _("div", J, [t("div", K, [t("div", Q, [t("span", { onClick: m[0] || (m[0] = (...c) => a(h) && a(h)(...c)) }, "ERO\u7535\u5F71\u7F51")]), t("div", W, [g(a(S), { onClick: a(d), class: "more_img" }, null, 8, ["onClick"])]), t("div", X, [t("ul", null, [(r(true), _(x, null, C(a(l), (c) => (r(), _("li", { onClick: (es) => a(B)(c), key: c }, [t("img", { src: c.src, alt: "" }, null, 8, Z), t("p", null, b(c.name), 1)], 8, Y))), 128))])])]), t("div", ss, [t("div", { onClick: m[1] || (m[1] = (...c) => a(d) && a(d)(...c)), class: E({ mask: 1, mask_hidden: a(u) == false }) }, null, 2), g(M, null, { default: F(() => [a(u) ? (r(), O(G, { key: 0 })) : R("", true)]), _: 1 })])]));
} }, is = $(ts, [["__scopeId", "data-v-555282f5"]]);
export {
  is as N,
  ls as e,
  G as s
};
