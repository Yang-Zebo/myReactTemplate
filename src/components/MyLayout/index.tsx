import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.less'
import MyMenu from '@/components/MyLayout/components/MyMenu'
import MyBreadcrumb from '@/components/MyLayout/components/MyBreadcrumb'
import { Layout } from 'antd'

const { Header, Content, Sider } = Layout
const Index: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className={ styles.layout }>
      <Sider collapsible collapsed={ collapsed } onCollapse={ (value) => setCollapsed(value) }>
        <div className={ styles.siderTitle }>
          { collapsed ? 'Temp' : 'ReactTemplate' }
        </div>
        <MyMenu/>
      </Sider>
      <Layout className={ styles.contentLayout }>
        <Header className={ styles.contentHeader }>
          <MyBreadcrumb/>
        </Header>
        <Content className={ styles.content }>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Index