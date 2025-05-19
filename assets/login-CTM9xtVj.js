import { r as i, a as g, u as w, c as x, b as e, w as f, v as m, d as u, i as _, e as b, f as y, o as h } from "./index-CMRomo5f.js";
import { g as k } from "./getUser-BvtmWhXm.js";
import { u as R } from "./user-Bw2caNtK.js";
import { _ as U } from "./_plugin-vue_export-helper-DlAUqK2U.js";
let V = R(), c = i(), B = async (p, n) => {
  c.value = await k();
  for (let o of c.value) {
    let r = 0;
    if (o.account == p) if (o.password == n) V.login(o.account, o.password, o.id), localStorage.setItem("id", o.id), alert("\u767B\u5F55\u6210\u529F"), g.push("/home");
    else {
      alert("\u5BC6\u7801\u9519\u8BEF");
      return;
    }
    else r++;
    if (r == c.value.length) {
      r = 0, alert("\u8D26\u53F7\u4E0D\u5B58\u5728");
      return;
    }
  }
};
const I = { class: "bg" }, S = { class: "form" }, z = { class: "account" }, C = { class: "account-box" }, N = { class: "account password" }, T = { class: "account-box" }, j = { class: "buttom" }, q = { class: "jump" }, D = { __name: "login", setup(p) {
  let n = y(), o = w(), r = () => {
    n.push("/register");
  }, l = i(""), a = i(""), v = () => {
    if (l.value == "" || a.value == "") {
      alert("\u8D26\u53F7\u6216\u5BC6\u7801\u4E3A\u7A7A");
      return;
    }
    B(l.value, a.value);
  }, d = i();
  return d.value = o.query, l.value = d.value.account, a.value = d.value.password, (E, t) => (h(), x("div", I, [e("div", S, [t[5] || (t[5] = e("div", { class: "login-words" }, [e("p", null, "\u767B\u5F55")], -1)), e("div", z, [e("div", C, [f(e("input", { "onUpdate:modelValue": t[0] || (t[0] = (s) => _(l) ? l.value = s : l = s), type: "text", placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7" }, null, 512), [[m, u(l), void 0, { lazy: true }]])])]), e("div", N, [e("div", T, [f(e("input", { "onUpdate:modelValue": t[1] || (t[1] = (s) => _(a) ? a.value = s : a = s), type: "password", placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801" }, null, 512), [[m, u(a), void 0, { lazy: true }]])])]), e("div", j, [e("button", { onClick: t[2] || (t[2] = (...s) => u(v) && u(v)(...s)) }, "\u767B\u5F55")]), e("div", q, [e("p", null, [t[4] || (t[4] = b(" \u6CA1\u6709\u8D26\u53F7?")), e("span", { onClick: t[3] || (t[3] = (...s) => u(r) && u(r)(...s)), class: "register" }, "\u524D\u5F80\u6CE8\u518C")])])])]));
} }, H = U(D, [["__scopeId", "data-v-af553d3f"]]);
export {
  H as default
};
