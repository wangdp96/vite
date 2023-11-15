import { createApp } from "./mainssr.js";
import { renderToString } from "vue/server-renderer";

export async function render(url) {
  const { app, router } = await createApp();
  //   console.log(app, router);
  router.push(url);
  await router.isReady();
  const ctx = {};
  //转义成字符串
  const html = await renderToString(app, ctx);
  return html;
}
