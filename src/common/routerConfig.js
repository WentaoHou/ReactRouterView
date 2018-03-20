import {asyncComponent} from "./asyncComponent";

export default function () {
   const routes = [
      {
         path: "/",
         component: asyncComponent(() => import ("@/layout")),
         redirect: "/user",
         childRoutes: [
            {
               path: "/user",
               component: asyncComponent(() => import ("@/routes/user")),
               redirect: "/user/a",
               childRoutes: [
                  {
                     path: "/user/a",
                     component: asyncComponent(() => import ("@/routes/user/users/a"))
                  }, {
                     path: "/user/b",
                     component: asyncComponent(() => import ("@/routes/user/users/b"))
                  }, {
                     path: "/user/c",
                     component: asyncComponent(() => import ("@/routes/user/users/c"))
                  }, {
                     path: "/user/d",
                     component: asyncComponent(() => import ("@/routes/user/users/d"))
                  }
               ]
            }, {
               path: "/dept",
               component: asyncComponent(() => import ("@/routes/dept")),
               childRoutes: [
                  {
                     path: "/dept/jishu",
                     component: asyncComponent(() => import ("@/routes/dept/jishu")),
                     childRoutes: [
                        {
                           path: "/dept/jishu/web",
                           component: asyncComponent(() => import ("@/routes/dept/jishu/web")),
                           childRoutes: [
                              {
                                 path: "/dept/jishu/web/:nameen",
                                 component: asyncComponent(() => import ("@/routes/dept/jishu/web/info.js"))
                              }
                           ]
                        }, {
                           path: "/dept/jishu/java",
                           component: asyncComponent(() => import ("@/routes/dept/jishu/java"))
                        }, {
                           path: "/dept/jishu/bigdata",
                           component: asyncComponent(() => import ("@/routes/dept/jishu/bigdata"))
                        }
                     ]
                  }, {
                     path: "/dept/renshi",
                     component: asyncComponent(() => import ("@/routes/dept/renshi")),
                     childRoutes: [
                        {
                           path: "/dept/renshi/renshi1",
                           component: asyncComponent(() => import ("@/routes/dept/renshi/renshi1"))
                        }, {
                           path: "/dept/renshi/renshi2",
                           component: asyncComponent(() => import ("@/routes/dept/renshi/renshi2"))
                        }, {
                           path: "/dept/renshi/renshi3",
                           component: asyncComponent(() => import ("@/routes/dept/renshi/renshi3"))
                        }
                     ]
                  }, {
                     path: "/dept/shichang",
                     component: asyncComponent(() => import ("@/routes/dept/shichang")),
                     childRoutes: [
                        {
                           path: "/dept/shichang/shichang1",
                           component: asyncComponent(() => import ("@/routes/dept/shichang/shichang1"))
                        }, {
                           path: "/dept/shichang/shichang2",
                           component: asyncComponent(() => import ("@/routes/dept/shichang/shichang2"))
                        }, {
                           path: "/dept/shichang/shichang3",
                           component: asyncComponent(() => import ("@/routes/dept/shichang/shichang3"))
                        }
                     ]
                  }
               ]
            }, {
               path: "/role",
               component: asyncComponent(() => import ("@/routes/role"))
            }, {
               path: "/log",
               component: asyncComponent(() => import ("@/routes/log"))
            }, {
               path: "/menu",
               component: asyncComponent(() => import ("@/routes/menu"))
            }, {
               path: "/dict",
               component: asyncComponent(() => import ("@/routes/dict"))
            }
         ]
      }
   ]
   return routes;
}