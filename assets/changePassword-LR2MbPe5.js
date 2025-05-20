import { r as n, h as c, c as _, b as o, w as i, v as u, d as r, i as p, o as f } from "./index-BqLe09mV.js";
import { c as P, g } from "./changeUserMessageOne-MPkvIVJj.js";
import { _ as h } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./getUser-B1-BeUSe.js";
const b = { class: "bg" }, x = { class: "oldPassword" }, y = { class: "oldPassword newPassword" }, U = { class: "oldPassword newPasswordConfirm" }, C = { class: "confirm_button" }, M = { __name: "changePassword", async setup(V) {
  let d, w, m = n();
  m.value = ([d, w] = c(() => g()), d = await d, w(), d);
  let t = n(), s = n(), l = n(), v = () => {
    if (t.value == null || t.value == "" || s.value == null || s.value == "" || l.value == null || l.value == "") {
      alert("\u6709\u8F93\u5165\u6846\u4E3A\u7A7A");
      return;
    }
    if (t.value != m.value.password) {
      alert("\u65E7\u5BC6\u7801\u9519\u8BEF");
      return;
    }
    if (s.value != l.value) {
      alert("\u4E24\u6B21\u8F93\u5165\u7684\u65B0\u5BC6\u7801\u4E0D\u540C");
      return;
    }
    P({ password: s.value });
  };
  return (k, a) => (f(), _("div", b, [o("div", x, [i(o("input", { "onUpdate:modelValue": a[0] || (a[0] = (e) => p(t) ? t.value = e : t = e), type: "password", name: "", id: "", placeholder: "\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801" }, null, 512), [[u, r(t)]])]), o("div", y, [i(o("input", { "onUpdate:modelValue": a[1] || (a[1] = (e) => p(s) ? s.value = e : s = e), type: "password", name: "", id: "", placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801" }, null, 512), [[u, r(s)]])]), o("div", U, [i(o("input", { "onUpdate:modelValue": a[2] || (a[2] = (e) => p(l) ? l.value = e : l = e), type: "password", name: "", id: "", placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801" }, null, 512), [[u, r(l)]])]), o("div", C, [o("button", { onClick: a[3] || (a[3] = (...e) => r(v) && r(v)(...e)) }, "\u786E\u8BA4\u4FEE\u6539")])]));
} }, I = h(M, [["__scopeId", "data-v-9ed41b30"]]);
export {
  I as default
};
