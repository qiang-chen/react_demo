/**
 * @description 
 * @author cq
 * @Date 2020-04-27 16:39:13
 * @LastEditTime 2020-05-25 19:55:23
 * @LastEditors cq
 */

import React from 'react'
const routeConfig: any[]=[
  {
    path:"/pages/antd",
    name: "antd组件演练",
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
    children: [
      {
        path: "/pages/left/l",
        name: "demo区2",
        component: React.lazy(() =>
          import('../pages/antd/small/index'))
      },
      {
        path: "/pages/left/uih",
        name: "页面排版2",
        component: React.lazy(() =>
          import('../pages/antd/ui/index'))
      }
    ]
  }
]

export default routeConfig