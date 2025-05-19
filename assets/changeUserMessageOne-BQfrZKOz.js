import { g as s } from "./getUser-BvtmWhXm.js";
import { r, g as l } from "./index-CMRomo5f.js";
let g = async () => {
  let a = r();
  a.value = await s();
  let e = r();
  for (let t of a.value) if (t.id == localStorage.getItem("id")) return e.value = t, e.value;
}, u = (a) => {
  let e = r();
  e.value = localStorage.getItem("id"), l.patch(`/api/user/${e.value}`, a).then((t) => {
    window.location.reload(), alert("\u6570\u636E\u4FEE\u6539\u6210\u529F");
  }).catch((t) => {
    alert("\u4FEE\u6539\u65F6\u51FA\u73B0\u9519\u8BEF,\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  });
};
export {
  u as c,
  g
};
