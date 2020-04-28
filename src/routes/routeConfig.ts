/**
 * @description 
 * @author cq
 * @Date 2020-04-27 16:39:13
 * @LastEditTime 2020-04-28 16:56:32
 * @LastEditors cq
 */

import React from 'react'
const routeConfig: any[]=[
  {
    path:"/pages/antd",
    name: "antd组件演练",
    key:"sub1",
    redirect:"/pages/antd/small",
    children:[
      {
        path: "/pages/antd/small",
        name: "demo区",
        key: "g1",
        component: React.lazy(() =>
          import('../pages/antd/small/index'))
      },
      {
        path: "/pages/antd/ui",
        name: "页面排版",
        key: "g2",
        component: React.lazy(() =>
          import('../pages/antd/ui/index'))
      }
    ]
    
  }
]

export default routeConfig