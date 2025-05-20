import { r as a, c, o as v, b as u, q as f, j as p, d as o, F as g, k as w, n as x, t as k, a as m } from "./index-BqLe09mV.js";
import { _ as C } from "./_plugin-vue_export-helper-DlAUqK2U.js";
let h = a(), J = (e) => {
  let l = a();
  l.value = e.length;
  let s = a();
  s.value = 16;
  let n = a();
  n.value = Math.ceil(l.value / s.value), h.value = n.value;
  let t = a(), r = a();
  t.value = 0, r.value = t.value + s.value;
  let d = () => {
    t.value = t.value + s.value, r.value = r.value + s.value;
  }, i = a([]);
  for (let _ = 0; _ < n.value; _++) i.value.push(e.slice(t.value, r.value)), d();
  return i.value;
}, S = () => h.value;
const B = { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", class: "icon", viewBox: "0 0 1024 1024" };
function $(e, l) {
  return v(), c("svg", B, l[0] || (l[0] = [u("path", { fill: "#707070", d: "M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64m158.4 674.4L625.6 784l-272-272 272-272 45.6 45.6L444 512z" }, null, -1)]));
}
const b = { render: $ }, y = { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", class: "icon", viewBox: "0 0 1024 1024" };
function M(e, l) {
  return v(), c("svg", y, l[0] || (l[0] = [u("path", { fill: "#707070", d: "M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64M398.4 784l-45.6-45.6L580 512 353.6 285.6l45.6-45.6 272 272z" }, null, -1)]));
}
const z = { render: M };
let L = f("index", () => {
  let e = a();
  e.value = 0;
  let l = a();
  return l.value = 2, { index: e, increase: () => {
    if (e.value >= l.value - 1) {
      e.value = l.value - 1;
      return;
    }
    e.value++;
  }, decrease: () => {
    if (e.value <= 0) {
      e.value = 0;
      return;
    }
    e.value--;
  }, assign: (r) => {
    e.value = r;
  } };
});
const N = { class: "points" }, q = { class: "left" }, D = { class: "control" }, F = ["onClick"], I = { class: "right" }, V = { __name: "points", setup(e) {
  let l = L(), s = a();
  s.value = S();
  let n = a([]);
  for (let t = 0; t < s.value; t++) n.value.push(t + 1);
  return (t, r) => (v(), c("div", N, [u("div", q, [p(o(b), { onClick: o(l).decrease, class: "back" }, null, 8, ["onClick"])]), u("div", D, [u("ul", null, [(v(true), c(g, null, w(o(n), (d, i) => (v(), c("li", { onClick: (_) => o(l).assign(i), class: x({ control_li: 1, chose: i == o(l).index }), key: d }, [u("div", null, k(d), 1)], 10, F))), 128))])]), u("div", I, [p(o(z), { onClick: o(l).increase, class: "forward" }, null, 8, ["onClick"])])]));
} }, O = C(V, [["__scopeId", "data-v-67b4f4cd"]]);
let A = (e) => {
  m.push({ path: "/details", query: { data: JSON.stringify(e) } });
};
export {
  J as d,
  O as p,
  A as t,
  L as u
};
