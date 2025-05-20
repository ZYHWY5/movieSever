import { N as u } from "./nav-CNws_E3F.js";
import { v as m } from "./verticalLine-Bc9JoB9V.js";
import { f as v, r as _, c as n, b as s, j as c, F as h, k as f, d as t, t as d, R as g, o as l, n as k } from "./index-Dj2ikAx0.js";
import { _ as N } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./user-CHLE34-A.js";
const x = { class: "bg" }, B = { class: "nav" }, C = { class: "content" }, L = { class: "content_left" }, R = ["onClick"], V = { class: "content_right" }, b = { class: "title" }, j = { class: "title_content" }, w = { class: "compoment" }, y = { class: "compoment_content" }, F = { __name: "personal", setup(z) {
  let r = v();
  r.push("/message");
  let i = _();
  i.value = [{ name: "\u4E2A\u4EBA\u4FE1\u606F", path: "/message" }, { name: "\u4FEE\u6539\u5BC6\u7801", path: "/password" }];
  let e = _();
  e.value = "\u4E2A\u4EBA\u4FE1\u606F";
  let p = (o) => {
    r.push(o.path), e.value = o.name;
  };
  return (o, D) => (l(), n("div", x, [s("div", B, [c(u)]), s("div", C, [s("div", L, [s("ul", null, [(l(true), n(h, null, f(t(i), (a) => (l(), n("li", { class: k({ active: t(e) == a.name }), onClick: (E) => t(p)(a), key: a }, [s("p", null, d(a.name), 1)], 10, R))), 128))])]), s("div", V, [s("div", b, [s("div", j, [c(t(m), { class: "title_svg" }), s("p", null, d(t(e)), 1)])]), s("div", w, [s("div", y, [c(t(g))])])])])]));
} }, G = N(F, [["__scopeId", "data-v-926dc8cc"]]);
export {
  G as default
};
