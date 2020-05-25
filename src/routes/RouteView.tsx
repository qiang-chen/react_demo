/**
 * @description 路由表循环
 * @author cq
 * @Date 2020-05-25 15:16:47
 * @LastEditTime 2020-05-25 19:29:21
 * @LastEditors cq
 */
import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/antd/small/index"
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
          if (item.redirect) {
            console.log(item, "item.redirect")
            return <Redirect to={item.redirect} key={item.path}></Redirect>
          } else {
            console.log(item.path, 4578900)
            return <Route path={item.path} key={item.path + 1} component={item.component}></Route>
          }
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