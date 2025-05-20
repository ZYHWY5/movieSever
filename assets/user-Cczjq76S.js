import { q as s, r as u } from "./index-BqLe09mV.js";
const n = s("user", () => {
  let e = u({ account: "", password: "", id: "" });
  return { user: e, login: (a, r, o) => {
    e.value.account = a, e.value.password = r, e.value.id = o;
  }, cancel: () => {
    e.value.account = "", e.value.password = "", e.value.id = "";
  } };
});
export {
  n as u
};
