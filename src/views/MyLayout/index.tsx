import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Layout } from 'antd'
import Menus from './components/Menus'
const { Header, Sider, Content } = Layout
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea'
}
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9'
}
const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9'
}
const Index = () => {
  return (
    <Layout style={ { height: '100%' } }>
      <Header style={ headerStyle }>Header</Header>
      <Layout>
        <Sider style={ siderStyle }>
          <Menus/>
        </Sider>
        <Content style={ contentStyle }>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Index