/**
 * @description 路由表循环
 * @author cq
 * @Date 2020-05-25 15:16:47
 * @LastEditTime 2020-05-25 20:03:59
 * @LastEditors cq
 */
import React, { FunctionComponent } from 'react';
import { Switch, Route } from "react-router-dom";
type RouteViewProps = {
  children: any[]
}

// export default RouteView

const RouteView: FunctionComponent<RouteViewProps> = ({ children }) => {
  const deepRouteView = (children: any[]): any => {
    return <>
      {children.map((item: any) => {
        if (item.children) {
          return deepRouteView(item.children)
        } else {
          console.log(item.path + Math.random());
          return <Route path={item.path} key={item.path + Math.random()} component={item.component}></Route>
        }
      })}
    </>
  }
  return (
    <>
      <Switch>
        {deepRouteView(children)}
      </Switch>
    </>
  );
}
export default RouteView