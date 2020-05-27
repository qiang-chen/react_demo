/**
 * @description 
 * @author cq
 * @Date 2020-05-26 19:43:09
 * @LastEditTime 2020-05-27 16:00:29
 * @LastEditors cq
 */

import React, { FunctionComponent } from 'react'
import { Modal } from 'antd'
import { connect } from "react-redux"

type ReduxDemoModalProps = {
  isVisable: boolean
  onSubmit: () => void
  onClose: () => void
}

const ReduxDemoModal: FunctionComponent<ReduxDemoModalProps> = ({ isVisable, onSubmit, onClose }) => {
  // console.log(homeList);
  return (
    <Modal
      getContainer={false}
      title="select"
      visible={isVisable}
      width={650}
      maskClosable={true}
      onCancel={onClose}
    >
      <h1>
        我是连接redux使用的
      </h1>
    </Modal>
  )
}

const mapStateToProps = (state: any) => {
  return {
    homeList: state.homeReducer.list,
  }
}

const mapDispatchToProps = (_dispatch: any) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ReduxDemoModal))
