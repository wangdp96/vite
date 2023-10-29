/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-25 17:09:49
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-10-27 10:03:12
 * @FilePath: /vite/vite-vue2/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './app.vue'
import './app.css'
// export default new Vue({
//   el: "#app",
//   render: (h) => {
//     h(App);
//   },
// });

//workjs,多线程
// const worker = new Worker("./worker.js");
import MyWorker from './worker?worker'
const worker = new MyWorker()
worker.onmessage = function (e) {
  // console.log(e);
}
// --------------------------------------------------
//导入单模块
import { text } from './json/data.json'
console.log(text)
//导入多模块
const moudle = import.meta.globEager('./json/*')
Object.entries(moudle).forEach(([key, val]) => {
  console.log(key, val.default)
  // val().then((result) => {
  //   console.log("res", result.default);
  // });
})
console.log(moudle)
// -------------------------------------------------------
const app = new Vue({
  render: (h) => h(App),
}).$mount('#app')

export default app
