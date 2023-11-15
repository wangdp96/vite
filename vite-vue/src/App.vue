<!--
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-24 16:06:33
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-09 19:00:47
 * @FilePath: /vite/vite-vue/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts"></script>

<template>
  <div>
    <router-link to="/">home</router-link
    ><router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
