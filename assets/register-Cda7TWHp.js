import { r as d, g as _, a as f, c as b, b as s, w as p, v as c, d as l, i as v, e as g, f as x, o as w, __tla as __tla_0 } from "./index-Dj2ikAx0.js";
import { g as k } from "./getUser-BTaudgIb.js";
import { _ as y } from "./_plugin-vue_export-helper-DlAUqK2U.js";
let M;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let m = d();
  m.value = await k();
  let h = (r, i) => {
    let u = {
      account: r,
      password: i
    };
    for (let o of m.value) if (o.account == r) {
      alert("\u8D26\u53F7\u5DF2\u5B58\u5728");
      return;
    }
    _.post("https://365b02ce-b845-4125-b13d-c4a087c1497a.mock.pstmn.io/user", {
      account: r,
      password: i
    }), alert("\u6CE8\u518C\u6210\u529F"), f.push({
      path: "/",
      query: u
    });
  };
  let V, B, U, z, C, I, N, R, T;
  V = {
    class: "bg"
  };
  B = {
    class: "form"
  };
  U = {
    class: "account"
  };
  z = {
    class: "account-box"
  };
  C = {
    class: "account password"
  };
  I = {
    class: "account-box"
  };
  N = {
    class: "buttom"
  };
  R = {
    class: "jump"
  };
  T = {
    __name: "register",
    setup(r) {
      let i = x(), u = () => {
        i.push("/");
      }, o = d(""), a = d(""), n = () => {
        if (o.value == "" || a.value == "") {
          alert("\u8D26\u53F7\u6216\u5BC6\u7801\u4E3A\u7A7A");
          return;
        }
        h(o.value, a.value);
      };
      return (j, t) => (w(), b("div", V, [
        s("div", B, [
          t[5] || (t[5] = s("div", {
            class: "login-words"
          }, [
            s("p", null, "\u6CE8\u518C")
          ], -1)),
          s("div", U, [
            s("div", z, [
              p(s("input", {
                "onUpdate:modelValue": t[0] || (t[0] = (e) => v(o) ? o.value = e : o = e),
                type: "text",
                placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7"
              }, null, 512), [
                [
                  c,
                  l(o),
                  void 0,
                  {
                    lazy: true
                  }
                ]
              ])
            ])
          ]),
          s("div", C, [
            s("div", I, [
              p(s("input", {
                "onUpdate:modelValue": t[1] || (t[1] = (e) => v(a) ? a.value = e : a = e),
                type: "password",
                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
              }, null, 512), [
                [
                  c,
                  l(a),
                  void 0,
                  {
                    lazy: true
                  }
                ]
              ])
            ])
          ]),
          s("div", N, [
            s("button", {
              onClick: t[2] || (t[2] = (...e) => l(n) && l(n)(...e))
            }, "\u6CE8\u518C")
          ]),
          s("div", R, [
            s("p", null, [
              t[4] || (t[4] = g("\u5DF2\u6709\u8D26\u53F7?")),
              s("span", {
                onClick: t[3] || (t[3] = (...e) => l(u) && l(u)(...e)),
                class: "register"
              }, "\u524D\u5F80\u767B\u5F55")
            ])
          ])
        ])
      ]));
    }
  };
  M = y(T, [
    [
      "__scopeId",
      "data-v-46dc0cb0"
    ]
  ]);
});
export {
  __tla,
  M as default
};
