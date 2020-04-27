/**
 * @description 
 * @author cq
 * @Date 2020-04-24 11:13:53
 * @LastEditTime 2020-04-27 15:35:31
 * @LastEditors cq
 */
import React, { useState, useCallback, Suspense, FunctionComponent } from 'react';
import { Button, Layout, Menu, Breadcrumb } from 'antd';
import DragModal from "./pages/small/DragModal/index"
import SelectModal from "./pages/small/SelectModal/index"
import { Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import { MenuUnfoldOutlined, MenuFoldOutlined, MailOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

type AppProps = {

}

const App: FunctionComponent<AppProps> = () => {
  const [modalOpen, setModal] = useState("")
  const [collapsed, setCollapsed] = useState(false);//控制左边导航是否打开

  const toggle = () => {
    setCollapsed(!collapsed)
  };
  // const [preview, setPreview] = useState(defaultPreview);
  const handleSubmit = useCallback(
    () => setModal(""),
    []);
  //useCallback  用它包住后就不会产生每次父组件更新的时候重新创建这个handleClose函数了
  //只有第二个参数发生改变才会重新创建它
  const handleClose = useCallback(
    () => setModal(""),
    []);

  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
  }
  return (
    <BrowserRouter>
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
              {/* 一级路由 */}
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>antd组件演练</span>
                  </span>
                }
              >
                {/* 二级路由 */}
                <SubMenu key="g1" title="demo区">
                  {/* 三级小路由 */}
                  <Menu.Item key="1">
                    <UserOutlined />
                    <Link to="/apps"> demo演练区</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <UploadOutlined />
                    <Link to="/apps3"> 功能暂定区</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="g2" title="排版区">
                  <Menu.Item key="3">
                    <UserOutlined />
                    <Link to="/app"> 页面排版区</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <UploadOutlined />
                    <Link to="/app2s"> 功能暂定区</Link>
                  </Menu.Item>
                </SubMenu>
              </SubMenu>

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
              <Button type="primary" onClick={() => setModal("DragModal")}>拖拽弹框练习</Button>
              <Button type="primary" onClick={() => setModal("SelectModal")}>select下拉菜单</Button>
              {/* 拖拽弹框练习 */}
              <DragModal
                isVisable={modalOpen === "DragModal"}
                onSubmit={handleSubmit}
                onClose={handleClose}
              />
              {/* select下拉框练习 */}
              <SelectModal
                isVisable={modalOpen === "SelectModal"}
                onSubmit={handleSubmit}
                onClose={handleClose}
              />
            </Suspense>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>

    // <Layout className="box">
    //   <Sider trigger={null} collapsible collapsed={collapsed} className="Sider" onBreakpoint={onCollapse}>
    //     <div className="logo" />
    //     <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    //       <Menu.Item key="1">
    //         <UserOutlined />
    //         <span>demo演练区</span>
    //       </Menu.Item>
    //       <Menu.Item key="2">
    //         <VideoCameraOutlined />
    //         <span>页面排版区</span>
    //       </Menu.Item>
    //       <Menu.Item key="3">
    //         <UploadOutlined />
    //         <span>功能暂定区</span>
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    //   <Layout className="site-layout">
    //     <Header className="site-layout-background" style={{ padding: 0 }}>
    //       {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    //         className: 'trigger',
    //         onClick: toggle,
    //       })}
    //     </Header>
    //     <Content
    //       className="site-layout-background"
    //       style={{
    //         margin: '24px 16px',
    //         padding: 24,
    //         minHeight: 280,
    //       }}
    //     >

    //     </Content>
    //   </Layout>
    // </Layout>
  );
}

export default App;
