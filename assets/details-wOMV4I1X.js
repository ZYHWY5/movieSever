import { N as w } from "./nav-B23a_FmO.js";
import { r as m, u as x, c as t, b as e, j as r, d as s, F as p, k as v, t as a, n as T, o as l } from "./index-BqLe09mV.js";
import { v as h } from "./verticalLine-EW04jH7l.js";
import { t as g } from "./toTop-DbVuLM2K.js";
import { _ as y } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./user-Cczjq76S.js";
let E = (o) => {
  for (let c of Object.keys(o.details)) o.details[c] = o.details[c].split("|");
  return o;
};
const b = { class: "bg" }, N = { class: "nav" }, L = { class: "content" }, B = { class: "content_flex" }, C = { class: "content_flex_left" }, O = { class: "content_flex_left_img" }, S = ["src"], j = { class: "content_flex_left_about" }, F = { class: "content_flex_right" }, I = { class: "name" }, V = { class: "details" }, q = { class: "details_ul" }, z = { class: "element" }, D = { class: "title" }, J = { class: "inner" }, R = { __name: "details", setup(o) {
  let c = x(), _ = m();
  _.value = JSON.parse(c.query.data);
  let i = m();
  i.value = E(_.value);
  let k = () => {
    document.documentElement.scrollTop = 0, window.pageYOffset = 0, document.body.scrollTop = 0, d.value = 0;
  };
  document.documentElement.scrollTop = 0;
  let d = m();
  return window.addEventListener("mousewheel", () => {
    d.value = document.documentElement.scrollTop;
  }), window.addEventListener("touchmove", () => {
    d.value = document.documentElement.scrollTop;
  }), (Y, A) => (l(), t("div", b, [e("div", N, [r(w)]), e("div", L, [e("div", B, [e("div", C, [e("div", O, [e("img", { src: s(i).src, alt: "" }, null, 8, S)]), e("div", j, [e("ul", null, [(l(true), t(p, null, v(s(i).about, (n, u) => (l(), t("li", { class: "type", key: n }, [e("span", null, a(u), 1), e("p", null, a(n), 1)]))), 128))])])]), e("div", F, [e("div", I, [r(s(h), { class: "line" }), e("p", null, a(s(_).name), 1)]), e("div", V, [e("ul", q, [(l(true), t(p, null, v(s(i).details, (n, u) => (l(), t("li", { class: "details_ul_li", key: n }, [e("div", z, [e("div", D, [r(s(h), { class: "line" }), e("p", null, a(u), 1)]), e("ul", J, [(l(true), t(p, null, v(n, (f) => (l(), t("li", { class: "inner_li", key: f }, [e("span", null, a(f), 1)]))), 128))])])]))), 128))])])])])]), e("div", { class: T({ toTop: 1, isshow: s(d) >= 100 }) }, [r(s(g), { onClick: s(k), class: "toTop_svg" }, null, 8, ["onClick"])], 2)]));
} }, U = y(R, [["__scopeId", "data-v-52f83c68"]]);
export {
  U as default
};
