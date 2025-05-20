import { g as u, r as i, a as c, c as p, b as n, w as d, v, d as o, s as m, i as _, o as f } from "./index-BqLe09mV.js";
import "./nav-B23a_FmO.js";
import { _ as b } from "./_plugin-vue_export-helper-DlAUqK2U.js";
let h = () => new Promise((t) => {
  u.get("https://365b02ce-b845-4125-b13d-c4a087c1497a.mock.pstmn.io/movie").then((e) => {
    t(e.data);
  });
}, (t) => {
  t(alert("\u7F51\u7EDC\u94FE\u63A5\u4E0D\u7A33\u5B9A,\u8BF7\u66F4\u6362\u7F51\u7EDC\u540E\u91CD\u8BD5"));
}), r = i(), g = async (t) => {
  r.value = await h(), r.value = r.value.filter((e) => e.name.includes(t)), console.log(r.value), c.push({ path: "/searched", query: { data: JSON.stringify(r.value) } });
};
const y = { class: "bg-search" }, x = { class: "boder" }, w = { __name: "search-input", setup(t) {
  let e = i(""), l = () => {
    if (e.value == "") {
      alert("\u8BF7\u5148\u8F93\u5165\u4F60\u60F3\u641C\u7D22\u7684\u7535\u5F71\u3001\u5173\u952E\u8BCD");
      return;
    }
    g(e.value);
  };
  return (k, s) => (f(), p("div", y, [n("div", x, [d(n("input", { onKeyup: s[0] || (s[0] = m((...a) => o(l) && o(l)(...a), ["enter"])), "onUpdate:modelValue": s[1] || (s[1] = (a) => _(e) ? e.value = a : e = a), type: "text", placeholder: "\u641C\u7D22\u7535\u5F71\u3001\u5173\u952E\u8BCD" }, null, 544), [[v, o(e), void 0, { lazy: true }]])]), n("button", { onClick: s[2] || (s[2] = (...a) => o(l) && o(l)(...a)), class: "btn" }, "\u641C\u7D22")]));
} }, M = b(w, [["__scopeId", "data-v-3337a2b2"]]);
export {
  h as g,
  M as s
};
