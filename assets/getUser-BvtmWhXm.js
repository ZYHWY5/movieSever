import { g as t } from "./index-CMRomo5f.js";
let s = () => new Promise((e) => {
  t.get("/api/user").then((r) => {
    e(r.data);
  });
}, (e) => {
  e(alert("\u7F51\u7EDC\u94FE\u63A5\u4E0D\u7A33\u5B9A,\u8BF7\u66F4\u6362\u7F51\u7EDC\u540E\u91CD\u8BD5"));
});
export {
  s as g
};
