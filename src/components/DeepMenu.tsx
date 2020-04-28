/**
 * @description 递归循环配置表
 * @author cq
 * @Date 2020-04-28 16:51:04
 * @LastEditTime 2020-04-28 17:39:04
 * @LastEditors cq
 */
import React, { FunctionComponent } from 'react';
import { Menu } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
type deepMenuProps = {
  routeConfig: any[]
}

const DeepMenu: FunctionComponent<deepMenuProps> = ({ routeConfig }) => {

  return (
    <>
      {
        routeConfig.map((item: any, index) => {
          if (item.children) {
            return <DeepMenu
              routeConfig={item.children}
            />
          } else {
            return <SubMenu
              key={item.key}
              title={
                <span>
                  <MailOutlined />
                  <span>{item.name}</span>
                </span>
              }
            >
              {/* 二级路由 */}
              <SubMenu key={item.key} title={item.name}>
                {/* 三级小路由 */}
                <Menu.Item key={item.key}>
                  <UserOutlined />
                  <Link to={item.path}> {item.name}</Link>
                </Menu.Item>

              </SubMenu>
            </SubMenu>
          }
        }
        )
      }
    </>
  );
}


export default DeepMenu