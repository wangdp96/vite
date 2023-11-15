/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-25 11:06:23
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-15 14:25:45
 * @FilePath: /vite/vite-react/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-25 11:06:23
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-15 14:11:31
 * @FilePath: /vite/vite-react/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import "wdp-component";
import React from "react";
import "quark-ui-rate";
// console.log(QuarkUiRate);
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        1234
        <quark-ui-rate></quark-ui-rate>
        <my-component count={9}></my-component>
      </div>
    );
  }
}
export default Index;
