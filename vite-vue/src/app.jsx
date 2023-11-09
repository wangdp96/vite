import { UpOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import "@styles/app1.css";
//下面两种样式模块导入都可以
// import example from "@styles/example.module.css";
import { titleSize } from "@styles/example.module.css";
//sass,less,stylus
import "@styles/sass.scss";
import "@styles/less.less";
import "@styles/stylus.styl";

//图片引入
const imageUrl = new URL("./assets/vite.jpeg", import.meta.url).href;

const test = defineComponent({
  render() {
    return (
      <div class="title" class={titleSize}>
        hello jsx
        <UpOutlined />
        <span>hhhhhhahahahahahah</span>
        <img src={imageUrl}></img>
      </div>
    );
  },
});
export { test };
