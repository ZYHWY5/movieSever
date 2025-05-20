import { s as f, g } from "./search-input-BtxUZG8U.js";
import { u as w, d as k, p as T, t as x } from "./toDetails-dFs8ovw3.js";
import { e as C, N as E } from "./nav-DfmYaVEt.js";
import { r as a, h as b, c, b as s, j as n, F as y, k as I, d as e, n as L, o as r, t as N } from "./index-CMRomo5f.js";
import { _ as B } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { t as S } from "./toTop-Cxrbq7lE.js";
import "./user-Bw2caNtK.js";
const D = { class: "bg" }, F = { class: "nav" }, V = { class: "searchInput" }, j = { class: "suggest" }, z = { class: "suggest_ul" }, A = ["onClick"], M = { class: "element_img" }, O = ["src"], Y = { class: "name" }, $ = { class: "points" }, q = { __name: "home", async setup(G) {
  let o, d, v = w(), i = a();
  i.value = ([o, d] = b(() => g()), o = await o, d(), o), console.log(i.value);
  let u = a([]);
  u.value = k(i.value);
  let m = a();
  m.value = false, C.on("isshow", (_) => {
    m.value = _;
  });
  let h = () => {
    document.documentElement.scrollTop = 0, window.pageYOffset = 0, document.body.scrollTop = 0, t.value = 0;
  }, t = a();
  return window.addEventListener("mousewheel", () => {
    t.value = document.documentElement.scrollTop;
  }), window.addEventListener("touchmove", () => {
    t.value = document.documentElement.scrollTop;
  }), (_, p) => (r(), c("div", D, [s("div", F, [n(E)]), s("div", V, [n(f)]), s("div", j, [p[0] || (p[0] = s("p", null, "\u4E3A\u60A8\u63A8\u8350", -1)), s("div", null, [s("ul", z, [(r(true), c(y, null, I(e(u)[e(v).index], (l) => (r(), c("li", { onClick: (H) => e(x)(l), class: "element", key: l }, [s("div", M, [s("img", { src: l.src, alt: "" }, null, 8, O)]), s("div", Y, [s("p", null, N(l.name), 1)])], 8, A))), 128))])])]), s("div", $, [n(T)]), s("div", { class: L({ toTop: 1, isshow: e(t) >= 100 }) }, [n(e(S), { onClick: e(h), class: "toTop_svg" }, null, 8, ["onClick"])], 2)]));
} }, X = B(q, [["__scopeId", "data-v-ab6bf6d7"]]);
export {
  X as default
};
