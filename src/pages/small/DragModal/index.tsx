/**
 * @description 拖拽小demo练习
 * @author cq
 * @Date 2020-04-24 14:12:10
 * @LastEditTime 2020-04-26 16:46:02
 * @LastEditors cq
 */

import React, { FunctionComponent, useState } from 'react'
import { Modal, Button } from 'antd'
import Example from './example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


type DragProps = {
  isVisable: boolean
  onSubmit: () => void
  onClose: () => void
}

// const defaultPreviewList = [
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
const defaultPreview = [
  {
    text: "我是第一条数据",
    id: 1
  }, {
    text: "我是第二条数据",
    id: 2
  }, {
    text: "我是第三条数据",
    id: 3
  }, {
    text: "我是第四条数据",
    id: 4
  }, {
    text: "我是第五条数据",
    id: 5
  }
]

// function reducer(state: { previewList: any; }, action: { type: any; payload: any }) {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         ...action.payload
//       }
//     default:
//       return [{}];
//   }
// }

const Drag: FunctionComponent<DragProps> = ({ isVisable, onSubmit, onClose }) => {

  // const [previewList, setPreviewList] = useReducer(reducer, { previewList: defaultPreviewList })
  const [preview, setPreview] = useState(defaultPreview);
  const handlePreviewList = (previewList: any) => {
    setPreview(previewList)
    // debugger
    // setPreviewList({ type: "increment", payload: previewList })
  }
  const handleAbc = () => {
    setPreview([{
      text: "我是第一条数据",
      id: 1
    }, {
      text: "我是第二条数据",
      id: 2
    },])
  }
  return (
    <Modal
      title="拖拽弹框"
      visible={isVisable}
      width={650}
      maskClosable={true}
      onCancel={onClose}
      onOk={onSubmit}
    >
      <DndProvider backend={HTML5Backend}>
        <Example
          // previewList={previewList.previewList}
          previewList={preview}
          handlePreviewList={handlePreviewList}
        />
        <Button onClick={handleAbc}>333333333</Button>
      </DndProvider>
    </Modal>
  )
}


export default React.memo(Drag)
