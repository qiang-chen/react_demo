/**
 * @description 
 * @author cq
 * @Date 2020-04-27 16:39:13
 * @LastEditTime 2020-04-27 16:49:45
 * @LastEditors cq
 */

import React from 'react'

const routeConfig: any[]=[
  {
    path:"",
    component: React.lazy(() =>
      import('@/pages/small/DragModal'))
  }
]

export default routeConfig