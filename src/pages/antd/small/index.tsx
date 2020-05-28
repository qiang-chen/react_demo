/**
 * @description demo功能演练区
 * @author cq
 * @Date 2020-04-27 19:34:08
 * @LastEditTime 2020-05-27 16:38:39
 * @LastEditors cq
 */

import React, { FunctionComponent, useState, useCallback } from 'react'
import DragModal from "./DragModal/index"
import SelectModal from "./SelectModal/index"
import ReduxDemoModal from "./ReduxDemoModal/index"
import { Button } from 'antd'

type SmallDemoProps = {

}


const SmallDemo: FunctionComponent<SmallDemoProps> = () => {
  const [modalOpen, setModal] = useState("")
  // const [collapsed, setCollapsed] = useState(false);//控制左边导航是否打开

  // const toggle = () => {
  //   setCollapsed(!collapsed)
  // };
  // const [preview, setPreview] = useState(defaultPreview);
  const handleSubmit = useCallback(
    () => setModal(""),
    []);
  //useCallback  用它包住后就不会产生每次父组件更新的时候重新创建这个handleClose函数了
  //只有第二个参数发生改变才会重新创建它
  const handleClose = useCallback(
    () => setModal(""),
    []);

  // const onCollapse = (collapsed: any) => {
  //   console.log(collapsed);
  // }
  return (
    <>
      <h1>我是small页面</h1>
      <Button type="primary" onClick={() => setModal("DragModal")}>拖拽弹框练习</Button>
      <Button type="primary" onClick={() => setModal("SelectModal")}>select下拉菜单</Button>
      <Button type="primary" onClick={() => setModal("ReduxDemoModal")}>redux的拖拽</Button>
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
      <ReduxDemoModal
        isVisable={modalOpen === "ReduxDemoModal"}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    </>
  )
}


export default React.memo(SmallDemo)
