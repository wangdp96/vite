/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-25 11:33:16
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-10-25 17:03:10
 * @FilePath: /vite/vite-vue/src/foo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const foo = () => {
  console.log("foo122");
};
/* 
热更新中有的副作用，异步定时器
*/

let amount = {
  sum: 0,
};
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    if (times) {
      clearInterval(times);
    }
  });
  console.log("qqq", import.meta.hot.data.amount);
  amount = import.meta.hot.data.amount = {
    sum: import.meta.hot.data.amount ? import.meta.hot.data.amount.sum : 0,
  };
}

let times = setInterval(() => {
  amount.sum++;
  console.log(amount.sum);
}, 1000);
export { amount };
