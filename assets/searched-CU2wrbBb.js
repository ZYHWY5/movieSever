import { r as a, u as w, l as f, c as u, j as o, b as s, m as g, T, F as k, k as x, d as e, n as C, o as m, w as E, p as b, t as N } from "./index-CMRomo5f.js";
import { s as y } from "./search-input-BtxUZG8U.js";
import { u as I, d as L, p as S, t as B } from "./toDetails-dFs8ovw3.js";
import { e as v, N as D, s as F } from "./nav-DfmYaVEt.js";
import { t as O } from "./toTop-Cxrbq7lE.js";
import { _ as V } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./user-Bw2caNtK.js";
const j = { class: "bg" }, q = { class: "nav" }, z = { class: "searchInput" }, J = { class: "suggest" }, R = { class: "suggest_ul" }, Y = ["onClick"], $ = { class: "element_img" }, A = ["src"], G = { class: "name" }, H = { class: "points" }, K = { __name: "searched", setup(M) {
  let _ = w();
  I();
  let i = a();
  i.value = JSON.parse(_.query.data), console.log(i.value), f(_, (t, d) => {
    window.location.reload();
  });
  let p = a([]);
  p.value = L(i.value);
  let c = a();
  c.value = 0, v.on("index", (t) => {
    c.value = t;
  });
  let r = a();
  r.value = false, v.on("isshow", (t) => {
    r.value = t;
  });
  let h = () => {
    document.documentElement.scrollTop = 0, window.pageYOffset = 0, document.body.scrollTop = 0, l.value = 0;
  }, l = a();
  return window.addEventListener("mousewheel", () => {
    l.value = document.documentElement.scrollTop;
  }), window.addEventListener("touchmove", () => {
    l.value = document.documentElement.scrollTop;
  }), (t, d) => (m(), u("div", j, [o(T, null, { default: g(() => [E(o(F, { class: "sidebar" }, null, 512), [[b, e(r)]])]), _: 1 }), s("div", q, [o(D)]), s("div", z, [o(y)]), s("div", J, [d[0] || (d[0] = s("p", null, "\u641C\u7D22\u7ED3\u679C", -1)), s("div", null, [s("ul", R, [(m(true), u(k, null, x(e(p)[e(c)], (n) => (m(), u("li", { onClick: (P) => e(B)(n), class: "element", key: n }, [s("div", $, [s("img", { src: n.src, alt: "" }, null, 8, A)]), s("div", G, [s("p", null, N(n.name), 1)])], 8, Y))), 128))])])]), s("div", H, [o(S)]), s("div", { class: C({ toTop: 1, isshow: e(l) >= 100 }) }, [o(e(O), { onClick: e(h), class: "toTop_svg" }, null, 8, ["onClick"])], 2)]));
} }, os = V(K, [["__scopeId", "data-v-0a553c53"]]);
export {
  os as default
};
