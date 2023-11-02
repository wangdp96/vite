import { QuarkElement, property, customElement } from "quarkc";

@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  @property({
    type: Number,
  })
  count = 0;

  add = () => {
    this.count += 1;
  };

  render() {
    return <button onClick={this.add}>count is: {this.count}</button>;
  }
}
