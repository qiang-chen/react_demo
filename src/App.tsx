/**
 * @description 
 * @author cq
 * @Date 2020-04-24 11:13:53
 * @LastEditTime 2020-05-25 20:01:01
 * @LastEditors cq
 */
import React, { Suspense, FunctionComponent } from 'react';
import { Layout } from 'antd';

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import routeConfig from "./routes/routeConfig"
import LeftNav from "./components/LeftNav"
import RouteView from './routes/RouteView';
const { Sider, Content } = Layout;


type AppProps = {

}

const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100%' }}>
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <h1>我是头</h1>
          <Content style={{ margin: 20, backgroundColor: '#fff' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <RouteView
                children={routeConfig}
              />
            我是页面主体部分
            </Suspense>
          </Content>
          {/* <Footer style={{ textAlign: 'center', color: '#ccc' }}>推荐使用谷歌浏览器,可以获得更佳页面操作体验</Footer> */}
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
