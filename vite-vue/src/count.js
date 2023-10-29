/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-25 11:12:37
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-10-25 11:26:16
 * @FilePath: /vite/vite-vue/count.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const count = 3;
/* 
编译环境的区分，import.meat.hot
*/
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log(newModule.count);
  });
}
