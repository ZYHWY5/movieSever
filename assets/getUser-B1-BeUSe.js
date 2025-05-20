import { g as r } from "./index-BqLe09mV.js";
let s = () => new Promise((e) => {
  r.get("https://365b02ce-b845-4125-b13d-c4a087c1497a.mock.pstmn.io/user").then((t) => {
    e(t.data);
  });
}, (e) => {
  e(alert("\u7F51\u7EDC\u94FE\u63A5\u4E0D\u7A33\u5B9A,\u8BF7\u66F4\u6362\u7F51\u7EDC\u540E\u91CD\u8BD5"));
});
export {
  s as g
};
