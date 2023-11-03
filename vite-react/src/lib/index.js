/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-11-02 15:42:44
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-02 17:49:00
 * @FilePath: /vite/vite-vue2/lib/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";
var d = Object.defineProperty;
var m = (t, o, e) =>
  o in t
    ? d(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (t[o] = e);
var s = (t, o, e) => (m(t, typeof o != "symbol" ? o + "" : o, e), e);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const r = require("quarkc");
function f(t, o, e, l) {
  var a = arguments.length,
    n =
      a < 3 ? o : l === null ? (l = Object.getOwnPropertyDescriptor(o, e)) : l,
    c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, o, e, l);
  else
    for (var u = t.length - 1; u >= 0; u--)
      (c = t[u]) && (n = (a < 3 ? c(n) : a > 3 ? c(o, e, n) : c(o, e)) || n);
  return a > 3 && n && Object.defineProperty(o, e, n), n;
}
const p = `:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424}:host{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}.logo{height:6em;padding:1.5em;will-change:filter}.logo:hover{filter:drop-shadow(0 0 2em #646cffaa);transition:all .5s}.card{padding:2em}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.read-the-docs{color:#888}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}
`;
let i = class extends r.QuarkElement {
  constructor() {
    super(...arguments);
    s(this, "count", 0);
    s(this, "add", () => {
      this.count += 1;
    });
  }
  componentDidMount() {
    console.log("dom loaded!");
  }
  render() {
    return r.QuarkElement.h(
      r.Fragment,
      null,
      r.QuarkElement.h(
        "div",
        null,
        r.QuarkElement.h(
          "a",
          { href: "https://quark.hellobike.com", target: "_blank" },
          r.QuarkElement.h("img", {
            src: "https://quark-design.hellobike.com/assets/quark-logo.f9a6a307.png",
            class: "logo",
            alt: "quark logo",
          })
        )
      ),
      r.QuarkElement.h("h1", null, "Quark - 为跨技术栈而生"),
      this.atitle,
      r.QuarkElement.h(
        "div",
        { className: "card" },
        r.QuarkElement.h(
          "button",
          { onClick: this.add },
          "count is: ",
          this.count
        )
      )
    );
  }
};
f([r.property({ type: Number })], i.prototype, "count", void 0);
i = f([r.customElement({ tag: "my-component", style: p })], i);
const h = i;
exports.MyComponent = h;
