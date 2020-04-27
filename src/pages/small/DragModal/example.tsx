/**
 * @description 
 * @author cq
 * @Date 2020-04-24 15:47:56
 * @LastEditTime 2020-04-26 16:40:35
 * @LastEditors cq
 */
import React, { useState, FunctionComponent, useEffect } from 'react'
import produce from 'immer'
import TopicList from './TopicList';




type ExampleProps = {
  previewList: any[]
  handlePreviewList: (val: any) => void
}

const Example: FunctionComponent<ExampleProps> = ({ previewList, handlePreviewList }) => {
  const [topic, setTopic] = useState(previewList)
  const handleDND = (dragIndex: number, hoverIndex: any) => {
    // previewList.splice(dragIndex, 1) //移除拖拽项
    // previewList.splice(hoverIndex, 0, tmp) //插入放置项  splice会修改引用类型指针  慎用
    const newPreviewList = produce(previewList, draft => {
      let tmp = draft[dragIndex] //临时储存文件
      draft.splice(dragIndex, 1)
      draft.splice(hoverIndex, 0, tmp)
    })

    handlePreviewList(newPreviewList)
    // handlePreviewList(previewList)
  };

  useEffect(() => {
    setTopic(previewList);
  }, [previewList]);

  useEffect(() => {
 
  }, [])


  const renderCard = (item: { id: number; text: any; }, index: number) => {
    return (
      <TopicList
        key={item.id}
        text={item.text}
        id={item.id}
        index={index}
        moveCard={handleDND}
      />
    )
  }

  return <div>
    {
      topic.map((item: any, i: number) => renderCard(item, i))
    }
  </div>
}
export default Example