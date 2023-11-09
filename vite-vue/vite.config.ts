/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-24 16:06:33
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-08 19:15:10
 * @FilePath: /vite/vite01/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";

import path from "path";
// const { resolve } = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), legacy({ targets: ["defaults", "not IE 11"] })],
  optimizeDeps: {
    // include: ["esm-dep"],
  },
  cacheDir: "./.cache",
  resolve: {
    alias: {
      "@styles": "/src/assets/styles",
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    target: "es2015",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        nested: path.resolve(__dirname, "nested/index.html"),
      },
    },
  },
});
