//构建服务器
//require不是定义在ES module里的，需要改成import
// const express = require("express");
import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//利用vite中的一些创建server的方法
const { createServer } = require("vite");
// import { createServer } from "vite";
import { render as serverEntry } from "./dist/server/entry-server.js";
import serverStatic from "serve-static";
import fs from "fs";
import path from "path";
//在commonjs中，注入了__dirname，__filename, module, exports, require五个内置变量用于实现导入导出的能力。而在esm中，因为规范已经完全不一样，故实现方式也是不一样的。
//在esm中，显然模块的导入导出使用export/import，自然不会再用exports /require，同理__dirname，__filename也有对应的规范写法。
import { fileURLToPath } from "url";
const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);
//生产环境区分
async function createViteServer(
  isProd = process.env.NODE_ENV === "production"
) {
  const indexProd = isProd
    ? fs.readFileSync(
        path.resolve(__dirnameNew, "./dist/client/index.html"),
        "utf-8"
      )
    : "";
  //SSR 清单 模块 ID 到它们关联的 chunk 和资源文件的映射
  const manifest = isProd ? require("./dist/client/ssr-manifest.json") : {};
  const app = express();
  let vite;
  //开发环境下
  if (!isProd) {
    //中间件的形式创建服务，禁用vite自身携带的服务器逻辑，并让上层服务器接管我们服务器的控制
    vite = await createServer({
      server: {
        middlewareMode: "true",
      },
      appType: "custom",
    });
    //创建中间件实例
    app.use(vite.middlewares);
  } else {
    //生产环境,编译打包文件
    app.use(
      serverStatic(path.resolve(__dirnameNew, "dist/client"), { index: false })
    );
  }
  //拦截所有请求
  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    let template;
    let render;
    try {
      if (!isProd) {
        //获取项目html文件
        template = fs.readFileSync(
          path.resolve(__dirnameNew, "./index.html"),
          "utf-8"
        );
        //使用vitehtml转换，将注入vitehtml客户端，从vite插件中使用
        //文件名映射关联的chunk资源，借助于manifest
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
      } else {
        template = indexProd;
        render = serverEntry;
      }
      //渲染html
      const apphtml = await render(url, manifest);
      const html = template.replace("<!--wdp-->", apphtml);
      //返回渲染
      res
        .status(200)
        .set({
          "content-type": "text/html",
        })
        .end(html);
    } catch (e) {
      // vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });
  app.listen(5173);
}
//接管了package.json中的vite服务
createViteServer();
