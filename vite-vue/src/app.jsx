/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-25 19:13:23
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-10-26 15:07:57
 * @FilePath: /vite/vite-vue/src/app.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from "vue";
import "@styles/app1.css";
//下面两种样式模块导入都可以
// import example from "@styles/example.module.css";
import { titleSize } from "@styles/example.module.css";
//sass,less,stylus
import "@styles/sass.scss";
import "@styles/less.less";
import "@styles/stylus.styl";

//图片引入
const imageUrl = new URL("./assets/vite.jpeg", import.meta.url).href;

const test = defineComponent({
  render() {
    return (
      <div class="title" class={titleSize}>
        hello jsx
        <span>hhhhhhahahahahahah</span>
        <img src={imageUrl}></img>
      </div>
    );
  },
});
export { test };
