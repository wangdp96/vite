<!--
 * @Author: wdp01015138 wdp01015138@alibaba-inc.com
 * @Date: 2023-10-27 16:21:32
 * @LastEditors: wdp01015138 wdp01015138@alibaba-inc.com
 * @LastEditTime: 2023-11-03 14:16:58
 * @FilePath: /vite/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# vite

#### 介绍

vite 学习

#### 软件架构

软件架构说明

#### 安装教程

1.  安装 node
2.  npm create vite
3.  切换到根目录下 npm i
4.  npm run dev

#### 使用说明

1.  vite 默认安装 vue3
2.  vue2 版本需要安装纯 js-vite 项目然后自行安装 vue@2

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

#### 特技

1.  使用 Readme_XXX.md 来支持不同的语言，例如 Readme_en.md, Readme_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

#### web component 组件使用

1. 需要注意 component 组件的编译环境，node 版本等
2. vue2 中使用需要注意编译包的问题@esbuild/darwin-arm64，新的 vite+vue2 项目需要注意配置信息
3. npm 包老语发需要转义处理才能识别编译运行，不然一直会报 default 的语法错误
4. presets: ['@babel/preset-env'],vue2 的 config 中
