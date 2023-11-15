import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

const pages = import.meta.glob("../pages/*.vue");

const routers = Object.keys(pages).map((r) => {
  const name = r.match(/\.\.\/pages(.*)\.vue$/)[1].toLowerCase(); //匹配所有.vue文件
  return {
    path: name == "/home" ? "/" : name,
    component: pages[r], //()=>import '../pages/*.vue'
  };
});
export function Router() {
  return createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: routers,
  });
}
