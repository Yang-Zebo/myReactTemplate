import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu } from 'antd'
import styles from './index.module.less'
const { Header, Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined/>),
  getItem('Option 2', '2', <DesktopOutlined/>),
  getItem('User', 'sub1', <UserOutlined/>, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5')
  ]),
  getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined/>)
]

const Index: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className={styles.layout}>
      <Sider  collapsed={ collapsed } onCollapse={ (value) => setCollapsed(value) }>
        <div className={styles.siderTitle}>
          ReactTemplate
        </div>
        <Menu theme="dark" defaultSelectedKeys={ ['1'] } mode="inline" items={ items }/>
      </Sider>
      <Layout className={styles.contentLayout}>
        <Header className={styles.contentHeader}>
          <Breadcrumb items={[{ title: 'sample' }]}/>
        </Header>
        <Content className={styles.content}>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Index