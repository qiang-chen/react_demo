/**
 * @description slect下拉菜单支持多选和互斥
 * @author cq
 * @Date 2020-04-26 16:51:38
 * @LastEditTime 2020-04-26 19:50:47
 * @LastEditors cq
 */

import React, { FunctionComponent } from 'react'
import { Modal, Form, Select } from 'antd'
import { FormProps } from 'antd/es/form';

const { Option } = Select;

type SelectModalProps = {
  isVisable: boolean
  onSubmit: () => void
  onClose: () => void
}

const SelectModal: FunctionComponent<SelectModalProps & FormProps> = ({ isVisable, onSubmit, onClose }) => {
  const [form] = Form.useForm();
  const handleattnCourseIds = (value: any[]) => {
    const index = value.findIndex(item => item === '未出勤')
    if (index !== -1) {
      value.splice(index, 1)
    }
    form.setFieldsValue({ 'attnCourseIds': value })
  }
  const onFinish = (values: any) => {
    console.log(values);
    onSubmit()
  }
  return (
    <Modal
      getContainer={false}
      title="select"
      visible={isVisable}
      width={650}
      maskClosable={true}
      onCancel={onClose}
      onOk={() => {
        form
          .validateFields()
          .then((values: any) => {
            form.resetFields();
            onFinish(values);
          })
          .catch((info: any) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        name="basic"
        form={form} //注意这个玩意必须要加的 哼
        //initialValues={}  通过这个属性设置对象来设置form的默认值可以
      >
        <Form.Item
          label="互斥测试"
          name="attnCourseIds"
        >
          <Select
            style={{ minWidth: 200 }}
            onChange={handleattnCourseIds}
            mode='multiple'
            placeholder='演练互斥状态'
            dropdownRender={menu => {
              const handleNoAtten = (_val: any) => {
                form.setFieldsValue({ 'attnCourseIds': ['未出勤'] })
              }
              return (
                <div>
                  {menu}
                  <div style={{ padding: '4px 8px 8px 8px', cursor: 'pointer', marginLeft: '12px' }}>
                    <p onClick={handleNoAtten} style={{ height: '24px' }}>我是一条互斥的Option数据</p >
                  </div>
                </div>
              )
            }}
          >
            <Option key={1} value={1} >第一条数据</Option>
            <Option key={2} value={2} >第二条数据</Option>
            <Option key={3} value={3} >第三条数据</Option>
            <Option key={4} value={4} >第四条数据</Option>
          </Select>
        </Form.Item>
      </Form>

    </Modal>
  )
}


export default React.memo(SelectModal)
