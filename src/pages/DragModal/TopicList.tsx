/**
 * @description 
 * @author cq
 * @Date 2020-04-24 15:50:27
 * @LastEditTime 2020-04-24 16:54:35
 * @LastEditors cq
 */
import React, { useRef, FunctionComponent } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes';
const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

type TopicListProps = {
  id:number
  text:string
  index:number
  moveCard:(index:number,i:number)=>void
}

const TopicList: FunctionComponent<TopicListProps> = ({ id, text, index, moveCard }) => {

  const ref:any = useRef(null)
  const [, drop] = useDrop({
    //定义拖拽的类型
    accept: ItemTypes.TOPIC,
    hover(item:any, monitor) {
      //异常处理判断
      if (!ref.current) {
        return
      }
      //拖拽目标的Index
      const dragIndex = item.index;
      //放置目标Index
      const hoverIndex = index;
      // 如果拖拽目标和放置目标相同的话，停止执行
      if (dragIndex === hoverIndex) {
        return
      }
      //如果不做以下处理，则卡片移动到另一个卡片上就会进行交换，下方处理使得卡片能够在跨过中心线后进行交换.
      //获取卡片的边框矩形
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      //获取X轴中点
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      //获取拖拽目标偏移量
      const clientOffset:any = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // 从上往下放置
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // 从下往上放置
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex);  //调用方法完成交换
      item.index = hoverIndex;  //重新赋值index，否则会出现无限交换情况
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TOPIC, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <div ref={ref} style={{ ...style, opacity }}>
      <span style={{ float: 'left' }}>{index + 1}.</span>
      <div className='stem' dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  )
}

export default TopicList