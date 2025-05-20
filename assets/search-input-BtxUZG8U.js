import { g as u, r as i, a as p, c, b as n, w as d, v, d as r, s as m, i as _, o as f } from "./index-CMRomo5f.js";
import "./nav-DfmYaVEt.js";
import { _ as h } from "./_plugin-vue_export-helper-DlAUqK2U.js";
let g = () => new Promise((t) => {
  u.get("/api/movie").then((e) => {
    t(e.data);
  });
}, (t) => {
  t(alert("\u7F51\u7EDC\u94FE\u63A5\u4E0D\u7A33\u5B9A,\u8BF7\u66F4\u6362\u7F51\u7EDC\u540E\u91CD\u8BD5"));
}), o = i(), y = async (t) => {
  o.value = await g(), o.value = o.value.filter((e) => e.name.includes(t)), console.log(o.value), p.push({ path: "/searched", query: { data: JSON.stringify(o.value) } });
};
const b = { class: "bg-search" }, x = { class: "boder" }, w = { __name: "search-input", setup(t) {
  let e = i(""), l = () => {
    if (e.value == "") {
      alert("\u8BF7\u5148\u8F93\u5165\u4F60\u60F3\u641C\u7D22\u7684\u7535\u5F71\u3001\u5173\u952E\u8BCD");
      return;
    }
    y(e.value);
  };
  return (k, a) => (f(), c("div", b, [n("div", x, [d(n("input", { onKeyup: a[0] || (a[0] = m((...s) => r(l) && r(l)(...s), ["enter"])), "onUpdate:modelValue": a[1] || (a[1] = (s) => _(e) ? e.value = s : e = s), type: "text", placeholder: "\u641C\u7D22\u7535\u5F71\u3001\u5173\u952E\u8BCD" }, null, 544), [[v, r(e), void 0, { lazy: true }]])]), n("button", { onClick: a[2] || (a[2] = (...s) => r(l) && r(l)(...s)), class: "btn" }, "\u641C\u7D22")]));
} }, M = h(w, [["__scopeId", "data-v-3337a2b2"]]);
export {
  g,
  M as s
};
