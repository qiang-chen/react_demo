/**
 * @description 
 * @author cq
 * @Date 2020-04-27 16:39:13
 * @LastEditTime 2020-05-25 16:13:34
 * @LastEditors cq
 */

import React from 'react'
import HOME from "../pages/antd/small/index"
const routeConfig: any[]=[
  {
    path:"/pages/antd",
    name: "antd组件演练",
    redirect:"/pages/antd/small",
    children:[
      {
        path: "/pages/antd/small",
        name: "demo区",
        component: React.lazy(() =>
          import('../pages/antd/small/index'))
        // component:HOME
      },
      {
        path: "/pages/antd/ui",
        name: "页面排版",
        component: React.lazy(() =>
          import('../pages/antd/ui/index'))
      }
    ] 
  }, {
    path: "/pages/left",
    name: "左侧测试demo",
    redirect: "/pages/antd/left",
    children: [
      {
        path: "/pages/antd/l",
        name: "demo区",
        component: React.lazy(() =>
          import('../pages/antd/small/index'))
      },
      {
        path: "/pages/antjsd/ui",
        name: "页面排版",
        component: React.lazy(() =>
          import('../pages/antd/ui/index'))
      }
    ]
  }
]

export default routeConfig