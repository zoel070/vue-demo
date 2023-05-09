import Vue from "vue";
import Router from "vue-router";
import { fetchFilterPermissionRoutes, commonRoutes } from "./routes.js";
import NProgress from "nprogress"; //加载条
import "nprogress/nprogress.css"; //加载条样式
import DataStore from "@/global/storage/index";

Vue.use(Router);
const appRouter = new Router({
  mode: "history",
  routes: commonRoutes
});

appRouter.hasAddRouter = false;
// eslint-disable-next-line
appRouter.beforeEach(async (to, from, next) => {
  NProgress.start();
  // 没有登录，重定向到登录页
  const TOKEN = DataStore.getToken();
  if (!TOKEN && to.name !== "AccountLogin") {
    next({ name: "AccountLogin", replace: true });
    return;
  }

  if (TOKEN) {
    if (!appRouter.hasAddRouter) {
      const filterRoutes = await fetchFilterPermissionRoutes();
      appRouter.hasAddRouter = true;
      appRouter.addRoutes(filterRoutes);
      // 确保路由已经添加完成
      next({ ...to, replace: true });
      return;
    }

    // 已经登录并且在登录页重定向到主页
    if (to.name === "AccountLogin") {
      next({ name: "Root", replace: true });
      return;
    }
  }
  next();
});

// eslint-disable-next-line
appRouter.afterEach((to, from) => {
  NProgress.done();
});

export default appRouter;
