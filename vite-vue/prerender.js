//打包生成静态文件，随处引用
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);

// json文件引入不支持，需要转化require
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//SSR 清单 模块 ID 到它们关联的 chunk 和资源文件的映射
const manifest = require("./dist/static/ssr-manifest.json");

const toAbsolute = (p) => path.resolve(__dirnameNew, p);
//定义模版，读取index
const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");

import { render } from "./dist/server/entry-server.js";
//读取资源文件夹
const routerToPrerender = fs
  .readdirSync(toAbsolute("src/pages"))
  .map((file) => {
    const name = file.replace(/\.vue$/, "").toLowerCase();
    return name === "home" ? "/" : `/${name}`;
  });
//根据文件名称匹配对应静态资源文件
!(async () => {
  for (const url of routerToPrerender) {
    //文件名映射关联的chunk资源，借助于manifest
    const apphtml = await render(url, manifest);
    const html = template.replace("<!--wdp-->", apphtml);
    const filePath = `dist/static${url == "/" ? "/index" : url}.html`;
    //写入一个和pages对应的路由静态资源文件
    fs.writeFileSync(toAbsolute(filePath), html);
  }
  //删除文件
  fs.unlinkSync(toAbsolute("dist/static/ssr-manifest.json"));
})();
