/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-26 15:49:10
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-10-26 15:58:15
 * @FilePath: /vite/vite-vue2/worker.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var i = 0
function timeCount() {
  i++
  postMessage(i)
  //   setTimeout(timeCount, 1000);
  setTimeout(() => {
    timeCount()
  }, 1000)
}
timeCount()
