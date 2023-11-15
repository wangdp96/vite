//ssr版本的main.js文件重构
import { createSSRApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import "./count.js";
import { foo } from "./foo.js";
import { test } from "./app.jsx";
import { Router } from "./router/router";

export async function createApp() {
  const app = createSSRApp(test);
  const router = Router();
  // console.log(router);
  app.use(router);
  return {
    app,
    router,
  };
}
