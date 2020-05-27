/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @description 
 * @author cq
 * @Date 2020-05-25 14:39:55
 * @LastEditTime 2020-05-27 11:17:08
 * @LastEditors cq
 */
import React, { FunctionComponent, useState, useEffect } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
import routeConfig from "../routes/routeConfig"

const { SubMenu } = Menu;
type deepMenuProps = {
  location: any
}

const DeepMenu: FunctionComponent<deepMenuProps> = ({ location }) => {
  // const [path, setPath] = useState(location.pathname);
  const [openKey, setOpenKey] = useState("");
  // let path = props.location.pathname;
  // const openKey = this.openKey;
  /* 
  根据menu的数据数组生成对应的标签数组
  使用reduce() + 递归调用
  */
  const findDefault = (routeConfig: any[], curObj: any): any => {
    for (let i = 0; i < routeConfig.length; i++) {
      if (routeConfig[i].children) {
        curObj = routeConfig[i]
        return findDefault(routeConfig[i].children, curObj)
      } else {
        if (routeConfig[i].path === location.pathname) {
          return curObj
        }
      }
    }
    // routeConfig.forEach((item: any) => {

    // })
  }

  useEffect(() => {
    const obj = findDefault(routeConfig, {});
    if (!obj){
      return
    }
    if (Object.keys(obj)) {
      setOpenKey(obj.path)
    }
  }, []);

  const getMenuNOdes = (menuList: any[]) => {
    // const path = props.location.pathname;
    return menuList.reduce((pre, item) => {
      // 向pre添加<Menu.Item>
      if (!item.children) {
        pre.push((
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <UserOutlined />
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        ));
      } else {
        pre.push((
          <SubMenu
            key={item.path}
            title={
              <span>
                <UserOutlined />
                <span>{item.name}</span>
              </span>
            }>
            {getMenuNOdes(item.children)}
          </SubMenu>
        ));
      }
      return pre;
    }, []);
  }
  /* 判断当前登录用户对item是否有权限 */
  // const hasAuth = (item: { children?: any; key?: any; isPublic?: any; }) => {
  //   const { key, isPublic } = item;
  //   // const menus = memoryUtils.user.role.menus;
  //   // const username = memoryUtils.user.username;

  //   /* 
  //   需要判断的情况:
  //   1.如果当前用户是admin
  //   2.如果当前item是公开的
  //   3.当前用户有此item的权限:key有没有在menus中
  //   */
  //   // if (username === 'admin' || isPublic || menus.indexOf(key) !== -1) {
  //   //   return true;
  //   // } else if (item.children) {  //4.如果当前用户有此item的某个子item的权限
  //   //   return !!item.children.find(child => menus.indexOf(child.key) !== -1)
  //   // }
  //   return false;
  // }
  return (
    <>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[openKey]}
      >
        {getMenuNOdes(routeConfig)}
      </Menu>
    </>
  );
}


export default withRouter(DeepMenu);