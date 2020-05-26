/**
 * @description 路由表循环
 * @author cq
 * @Date 2020-05-25 15:16:47
 * @LastEditTime 2020-05-26 14:03:43
 * @LastEditors cq
 */
import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import NoFind from "../pages/NoFind/index"

type RouteViewProps = {
  children: any[]
}

const RouteView: FunctionComponent<RouteViewProps> = (props) => {
  const { children } = props;
  console.log(children);
  const deepRouteView = (children: any[]): any => {
    return children.map((item: any) => {
      if (item.children) {
        return deepRouteView(item.children);
      } else {
        console.log(item);
        return <Route path={item.path} key={item.path} component={item.component}></Route>
      }
    })
  }
  return (
    <Switch>
      <Redirect exact from="/" to="/pages/antd/small"></Redirect>
      {deepRouteView(children)}
      <Route component={NoFind}></Route>
    </Switch>
  );
}
export default RouteView