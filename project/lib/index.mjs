import { property as f, customElement as d, QuarkElement as e, Fragment as p } from "quarkc";
function u(n, r, t, l) {
  var a = arguments.length, o = a < 3 ? r : l === null ? l = Object.getOwnPropertyDescriptor(r, t) : l, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, r, t, l);
  else
    for (var s = n.length - 1; s >= 0; s--)
      (c = n[s]) && (o = (a < 3 ? c(o) : a > 3 ? c(r, t, o) : c(r, t)) || o);
  return a > 3 && o && Object.defineProperty(r, t, o), o;
}
const h = `:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424}:host{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}.logo{height:6em;padding:1.5em;will-change:filter}.logo:hover{filter:drop-shadow(0 0 2em #646cffaa);transition:all .5s}.card{padding:2em}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.read-the-docs{color:#888}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}
`;
let i = class extends e {
  constructor() {
    super(...arguments), this.count = 0, this.add = () => {
      this.count += 1;
    };
  }
  componentDidMount() {
    console.log("dom loaded!");
  }
  render() {
    return e.h(
      p,
      null,
      e.h(
        "div",
        null,
        e.h(
          "a",
          { href: "https://quark.hellobike.com", target: "_blank" },
          e.h("img", { src: "https://quark-design.hellobike.com/assets/quark-logo.f9a6a307.png", class: "logo", alt: "quark logo" })
        )
      ),
      e.h("h1", null, "Quark - 为跨技术栈而生"),
      e.h(
        "div",
        { className: "card" },
        e.h(
          "button",
          { onClick: this.add },
          "count is: ",
          this.count
        )
      )
    );
  }
};
u([
  f({ type: Number })
], i.prototype, "count", void 0);
i = u([
  d({ tag: "my-component", style: h })
], i);
const b = i;
export {
  b as MyComponent
};
