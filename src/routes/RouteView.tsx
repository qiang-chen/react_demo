/**
 * @description 路由表循环
 * @author cq
 * @Date 2020-05-25 15:16:47
 * @LastEditTime 2020-05-25 16:27:08
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
  const deepRouteView = (children: any[]) => {
    return <Switch>
      {children.map((item: any, index: number) => {
        if (item.children) {
          deepRouteView(item.children)
        } else {
          if (item.redirect) {
            console.log(item, "item.redirect")
            return <Redirect to={item.redirect} key={index}></Redirect>
          } else {
            console.log(item)
            return <Route path={item.path} key={index} component={Home}></Route>
          }
        }
      })}
      {/* <Route path='/pages/antd/small' component={Home}></Route> */}
    </Switch>
  }
  return (
    <>
      {deepRouteView(children)}
    </>
  );
}
export default RouteView