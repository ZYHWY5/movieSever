import { s as f, g } from "./search-input-CipX0jKC.js";
import { u as w, d as k, p as T, t as x } from "./toDetails-Ba0UK0Zl.js";
import { e as C, N as E } from "./nav-B23a_FmO.js";
import { r as n, h as b, c as i, b as s, j as a, F as y, k as I, d as e, n as L, o as c, t as N } from "./index-BqLe09mV.js";
import { _ as B } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { t as S } from "./toTop-DbVuLM2K.js";
import "./user-Cczjq76S.js";
const D = { class: "bg" }, F = { class: "nav" }, V = { class: "searchInput" }, j = { class: "suggest" }, z = { class: "suggest_ul" }, A = ["onClick"], M = { class: "element_img" }, O = ["src"], Y = { class: "name" }, $ = { class: "points" }, q = { __name: "home", async setup(G) {
  let t, r, v = w(), d = n();
  d.value = ([t, r] = b(() => g()), t = await t, r(), t);
  let m = n([]);
  m.value = k(d.value);
  let u = n();
  u.value = false, C.on("isshow", (_) => {
    u.value = _;
  });
  let h = () => {
    document.documentElement.scrollTop = 0, window.pageYOffset = 0, document.body.scrollTop = 0, o.value = 0;
  }, o = n();
  return window.addEventListener("mousewheel", () => {
    o.value = document.documentElement.scrollTop;
  }), window.addEventListener("touchmove", () => {
    o.value = document.documentElement.scrollTop;
  }), (_, p) => (c(), i("div", D, [s("div", F, [a(E)]), s("div", V, [a(f)]), s("div", j, [p[0] || (p[0] = s("p", null, "\u4E3A\u60A8\u63A8\u8350", -1)), s("div", null, [s("ul", z, [(c(true), i(y, null, I(e(m)[e(v).index], (l) => (c(), i("li", { onClick: (H) => e(x)(l), class: "element", key: l }, [s("div", M, [s("img", { src: l.src, alt: "" }, null, 8, O)]), s("div", Y, [s("p", null, N(l.name), 1)])], 8, A))), 128))])])]), s("div", $, [a(T)]), s("div", { class: L({ toTop: 1, isshow: e(o) >= 100 }) }, [a(e(S), { onClick: e(h), class: "toTop_svg" }, null, 8, ["onClick"])], 2)]));
} }, X = B(q, [["__scopeId", "data-v-00b0853b"]]);
export {
  X as default
};
