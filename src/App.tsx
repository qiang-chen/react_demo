/**
 * @description 
 * @author cq
 * @Date 2020-04-24 11:13:53
 * @LastEditTime 2020-05-25 16:28:08
 * @LastEditors cq
 */
import React, { useState, useCallback, Suspense, FunctionComponent } from 'react';
import { Button, Layout, Menu, Breadcrumb } from 'antd';

import { Link, BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import { MenuUnfoldOutlined, MenuFoldOutlined, MailOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import routeConfig from "./routes/routeConfig"
import LeftNav from "./components/LeftNav"
import RouteView from './routes/RouteView';
import Home from "./pages/antd/small/index"
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


type AppProps = {

}

const App: FunctionComponent<AppProps> = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout style={{ minHeight: '100%' }}>
          <Sider>
            <LeftNav></LeftNav>
          </Sider>
          <Layout>
            <h1>我是头</h1>
            <Content style={{ margin: 20, backgroundColor: '#fff' }}>
              <RouteView
                children={routeConfig}
              />
              
              {/* {RouteView(routeConfig)} */}
              {/* <Switch>
                <Route path='/pages/antd/small' component={Home}></Route>
              </Switch> */}
            我是页面主体部分
          </Content>
            {/* <Footer style={{ textAlign: 'center', color: '#ccc' }}>推荐使用谷歌浏览器,可以获得更佳页面操作体验</Footer> */}
          </Layout>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
