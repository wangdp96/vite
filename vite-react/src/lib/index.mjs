var d = Object.defineProperty;
var p = (r, o, e) =>
  o in r
    ? d(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (r[o] = e);
var f = (r, o, e) => (p(r, typeof o != "symbol" ? o + "" : o, e), e);
import {
  property as h,
  customElement as m,
  QuarkElement as n,
  Fragment as g,
} from "quarkc";
function u(r, o, e, l) {
  var a = arguments.length,
    t =
      a < 3 ? o : l === null ? (l = Object.getOwnPropertyDescriptor(o, e)) : l,
    i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    t = Reflect.decorate(r, o, e, l);
  else
    for (var s = r.length - 1; s >= 0; s--)
      (i = r[s]) && (t = (a < 3 ? i(t) : a > 3 ? i(o, e, t) : i(o, e)) || t);
  return a > 3 && t && Object.defineProperty(o, e, t), t;
}
const b = `:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424}:host{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}.logo{height:6em;padding:1.5em;will-change:filter}.logo:hover{filter:drop-shadow(0 0 2em #646cffaa);transition:all .5s}.card{padding:2em}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.read-the-docs{color:#888}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}
`;
let c = class extends n {
  constructor() {
    super(...arguments);
    f(this, "count", 0);
    f(this, "add", () => {
      this.count += 1;
    });
  }
  componentDidMount() {
    console.log("dom loaded!");
  }
  render() {
    return n.h(
      g,
      null,
      n.h(
        "div",
        null,
        n.h(
          "a",
          {
            href: "https://quark.hellobike.com",
            target: "_blank",
          },
          n.h("img", {
            src: "https://quark-design.hellobike.com/assets/quark-logo.f9a6a307.png",
            class: "logo",
            alt: "quark logo",
          })
        )
      ),
      n.h("h1", null, "Quark - 为跨技术栈而生"),
      this.atitle,
      n.h(
        "div",
        {
          className: "card",
        },
        n.h(
          "button",
          {
            onClick: this.add,
          },
          "count is: ",
          this.count
        )
      )
    );
  }
};
u(
  [
    h({
      type: Number,
    }),
  ],
  c.prototype,
  "count",
  void 0
);
c = u(
  [
    m({
      tag: "my-component",
      style: b,
    }),
  ],
  c
);
const x = c;
export { x as MyComponent };
