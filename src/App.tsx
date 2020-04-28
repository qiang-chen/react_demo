/**
 * @description 
 * @author cq
 * @Date 2020-04-24 11:13:53
 * @LastEditTime 2020-04-28 18:19:54
 * @LastEditors cq
 */
import React, { useState, useCallback, Suspense, FunctionComponent } from 'react';
import { Button, Layout, Menu, Breadcrumb } from 'antd';

import { Link, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { MenuUnfoldOutlined, MenuFoldOutlined, MailOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import routeConfig from "./routes/routeConfig"
import DeepMenu from './components/DeepMenu';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


type AppProps = {

}

const App: FunctionComponent<AppProps> = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Layout className='box'>
          <Header className='header'>
            <div className='logoLeft'>
              <img
                src='https://www.tsinghua.edu.cn/publish/thu2018/images/logo_1.svg'
                alt='清华网'
              />
            </div>
          </Header>
          <Layout>
            <Sider className="Sider">
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1', 'g1']}
              >
                <DeepMenu
                  routeConfig={routeConfig}
                />
              </Menu>
            </Sider>
            <Layout>
              <Breadcrumb>
                <Breadcrumb.Item>
                  标题
            </Breadcrumb.Item>
              </Breadcrumb>
              <Suspense fallback={<div />}>
                {/* <div className='box'>
              <RouteView children={this.props.children} />
            </div> */}

              </Suspense>
            </Layout>
          </Layout>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
