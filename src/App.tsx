/**
 * @description 
 * @author cq
 * @Date 2020-04-24 11:13:53
 * @LastEditTime 2020-04-26 19:08:58
 * @LastEditors cq
 */
import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import DragModal from "./pages/DragModal/index"
import SelectModal from "./pages/SelectModal/index"
import './App.css';

// const defaultPreview = [
//   {
//     text: "我是第一条数据",
//     id: 1
//   }, {
//     text: "我是第二条数据",
//     id: 2
//   }, {
//     text: "我是第三条数据",
//     id: 3
//   }, {
//     text: "我是第四条数据",
//     id: 4
//   }, {
//     text: "我是第五条数据",
//     id: 5
//   }
// ]

function App() {
  const [modalOpen, setModal] = useState("")
  // const [preview, setPreview] = useState(defaultPreview);
  const handleSubmit = useCallback(
    () => setModal(""),
    []);
  //useCallback  用它包住后就不会产生每次父组件更新的时候重新创建这个handleClose函数了
  //只有第二个参数发生改变才会重新创建它
  const handleClose = useCallback(
    () => setModal(""),
    []);

  return (
    <div className="App">
      <Button type="primary" onClick={() => setModal("DragModal")}>拖拽弹框练习</Button>
      <Button type="primary" onClick={() => setModal("SelectModal")}>select下拉菜单</Button>
      <DragModal
        isVisable={modalOpen === "DragModal"}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
      <SelectModal
        isVisable={modalOpen === "SelectModal"}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
