/**
 * @description 
 * @author cq
 * @Date 2020-05-26 19:43:09
 * @LastEditTime 2020-05-28 10:43:22
 * @LastEditors cq
 */

import React, { FunctionComponent, useEffect } from 'react'
import { Modal, Button } from 'antd'
import { connect } from "react-redux"
import { HomeReducerState } from "../../../../ts-type/index"

type ReduxDemoModalProps = {
  isVisable: boolean
  onSubmit: () => void
  onClose: () => void
  addListItem: (val: number) => void;
}

const ReduxDemoModal: FunctionComponent<ReduxDemoModalProps & HomeReducerState> = (props) => {
  const { isVisable, onSubmit, onClose, homeList } = props;
  useEffect(() => {
    fetch("/home/list")
  }, []);

  const addItem = () => {
    let num = homeList[homeList.length - 1];
    props.addListItem(num + 1)
  }
  return (
    <Modal
      getContainer={false}
      title="select"
      visible={isVisable}
      width={650}
      maskClosable={true}
      onCancel={onClose}
      onOk={onSubmit}
    >
      <h1>
        我是连接redux使用的
      </h1>
      <Button type="primary" onClick={addItem}>添加新的一项</Button>
      <ul>
        {
          homeList.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </Modal>
  )
}

const mapStateToProps = (state: any) => {
  return {
    homeList: state.homeReducer.homeList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListItem: (item) => {
      dispatch({ type: "ADD_ITEM", payload: { item } })
    },
    // buyList: (fn) => {
    //   dispatch(fn)
    // },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ReduxDemoModal))
