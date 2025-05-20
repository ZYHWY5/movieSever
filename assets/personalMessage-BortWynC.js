import { a as _, r as u, h as d, c as v, b as e, d as t, t as f, n as r, w as b, v as h, i as x, o as w } from "./index-Dj2ikAx0.js";
import { c as M, g as y } from "./changeUserMessageOne-BoM3zUVl.js";
import { u as I } from "./user-CHLE34-A.js";
import { _ as N } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./getUser-BTaudgIb.js";
let U = I(), p = () => {
  localStorage.removeItem("id"), U.cancel(), _.push("/");
};
const k = { class: "bg" }, C = { class: "userImg" }, E = { class: "userImg_img" }, S = ["src"], B = { class: "userImg userName" }, D = { class: "userName_content" }, O = { class: "userImg changeUser" }, V = { __name: "personalMessage", async setup(q) {
  let l, m, i = u();
  i.value = ([l, m] = d(() => y()), l = await l, m(), l);
  let o = u(false), c = () => {
    o.value = !o.value;
  }, a = u(), g = () => {
    if (a.value == null || a.value == "") {
      alert("\u65B0\u6635\u79F0\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    M({ name: a.value });
  };
  return (z, s) => (w(), v("div", k, [e("div", C, [s[4] || (s[4] = e("p", null, "\u7528\u6237\u5934\u50CF", -1)), e("div", E, [e("img", { src: t(i).src = "https://img-bsy.txrpic.com/Element/00/88/63/12/549f4792_E886312_4b2c4691XZ.png?imageMogr2/quality/90/thumbnail/320x%3E", alt: "" }, null, 8, S)])]), e("div", B, [s[5] || (s[5] = e("p", null, "\u7528\u6237\u6635\u79F0", -1)), e("div", D, [e("span", null, f(t(i).name), 1), e("button", { class: r({ userName_content_button: t(o) }), onClick: s[0] || (s[0] = (...n) => t(c) && t(c)(...n)) }, "\u4FEE\u6539\u6635\u79F0", 2)]), e("div", { class: r({ change: 1, change_active: t(o) }) }, [b(e("input", { "onUpdate:modelValue": s[1] || (s[1] = (n) => x(a) ? a.value = n : a = n), class: r({ change_input: 1, iuput_active: t(o) }), type: "text", placeholder: "\u8BF7\u8F93\u5165\u65B0\u7684\u6635\u79F0" }, null, 2), [[h, t(a)]]), e("button", { onClick: s[2] || (s[2] = (n) => t(g)()), class: r({ change_button: 1, button_active: t(o) }) }, "\u786E\u5B9A", 2)], 2)]), e("div", O, [s[6] || (s[6] = e("p", null, "\u5207\u6362\u7528\u6237", -1)), e("button", { onClick: s[3] || (s[3] = (...n) => t(p) && t(p)(...n)), class: "changeUser_button" }, "\u9000\u51FA\u767B\u5F55")])]));
} }, j = N(V, [["__scopeId", "data-v-9226992b"]]);
export {
  j as default
};
