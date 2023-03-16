import React from 'react'
import styles from './index.module.less'
import { Form, Input, Checkbox, Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const goToHomePage = () => {
    const navigate = useNavigate()
    navigate('/home')
  }
  const onFinish = (values: any) => {
    console.log('Success:', values)
    goToHomePage()
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={ styles.loginContainer }>
      <div className={ styles.formBox }>
        <div className={ styles.title }>登录/注册</div>
        <Form
          name="basic"
          size="large"
          onFinish={ onFinish }
          onFinishFailed={ onFinishFailed }
          labelCol={ { span: 6 } }
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={ [{ required: true, message: 'Please input your username!' }] }
          >
            <Input prefix={ <UserOutlined/> }/>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={ [{ required: true, message: 'Please input your password!' }] }
          >
            <Input.Password prefix={ <LockOutlined/> }/>
          </Form.Item>

          <Form.Item wrapperCol={ { offset: 6 } } name="remember" valuePropName="checked">
            <Checkbox>记住账号</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={ { offset: 6 } }>
            <Button type="primary" htmlType="submit" style={ { marginRight: '10px' } }>
              登录
            </Button>
            <Button htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Index