<!--
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-25 17:13:39
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-03 11:00:48
 * @FilePath: /vite/vite-vue2/app.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div style="color: red">wdp</div>
    <div style="color: yellow">wdp</div>
    <div class="bgc">wdp</div>
    <div class="bgc2">wdp</div>
    <div class="bgc1">wdp</div>
    <div class="bgc3">wdp</div>
    <div>wdp</div>
    <my-component :count="9"></my-component>
  </div>
</template>
<script>
import 'wdp-component'
export default {
  components: {},
}
</script>
