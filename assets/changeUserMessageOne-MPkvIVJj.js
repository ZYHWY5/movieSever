import { g as r } from "./getUser-B1-BeUSe.js";
import { r as s, g as l } from "./index-BqLe09mV.js";
let c = async () => {
  let t = s();
  t.value = await r();
  let e = s();
  for (let a of t.value) if (a.id == localStorage.getItem("id")) return e.value = a, e.value;
}, i = (t) => {
  let e = s();
  e.value = localStorage.getItem("id"), l.patch(`https://365b02ce-b845-4125-b13d-c4a087c1497a.mock.pstmn.io/user/${e.value}`, t).then((a) => {
    window.location.reload(), alert("\u6570\u636E\u4FEE\u6539\u6210\u529F");
  }).catch((a) => {
    console.log(a.message), alert("\u4FEE\u6539\u65F6\u51FA\u73B0\u9519\u8BEF,\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  });
};
export {
  i as c,
  c as g
};
