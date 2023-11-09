/*
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-25 17:11:14
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-08 17:20:58
 * @FilePath: /vite/vite-vue2/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [createVuePlugin()],
  optimizeDeps: {
    // include: ['MyComponent'],
  },
  presets: ['@babel/preset-env'],
  build: {
    target: 'es2015',
  },
})
