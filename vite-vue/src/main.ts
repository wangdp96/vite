/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-24 16:06:33
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-09 11:36:46
 * @FilePath: /vite/vite-vue/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import "./count.js";
import { foo } from "./foo.js";
import { test } from "./app.jsx";

foo();
console.log("main module1");

/* 
 foo方法的热更新守卫
*/
if (import.meta.hot) {
  import.meta.hot.accept("./foo.js", (newFoo: any) => {
    if (newFoo.amount.sum > 5) {
      //刷新页面
      import.meta.hot.invalidate();
      console.log("刷新页面");
    } else {
      newFoo.foo();
    }
  });
  //执行热替换
  // import.meta.hot.accept();
  // 执行模块的刷新   不执行替换
  import.meta.hot.decline();
}

createApp(test).mount("#app");
