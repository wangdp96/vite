/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-11-02 11:22:44
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-02 16:18:38
 * @FilePath: /vite/project/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { QuarkElement, Fragment, property, customElement } from "quarkc";
import style from "./main.css?inline";

declare global {
  interface HTMLElementTagNameMap {
    "my-component": MyComponent;
  }
}

@customElement({ tag: "my-component", style })
class MyComponent extends QuarkElement {
  @property({ type: Number }) // 外部属性
  count = 0;
  add = () => {
    // 内部事件
    this.count += 1;
  };

  componentDidMount() {
    // 生命周期
    console.log("dom loaded!");
    // ...
  }

  render() {
    return (
      <Fragment>
        <div>
          <a href="https://quark.hellobike.com" target="_blank">
            <img
              src="https://quark-design.hellobike.com/assets/quark-logo.f9a6a307.png"
              class="logo"
              alt="quark logo"
            />
          </a>
        </div>

        <h1>Quark - 为跨技术栈而生</h1>
        <div className="card">
          <button onClick={this.add}>count is: {this.count}</button>
        </div>
      </Fragment>
    );
  }
}

export default MyComponent;
