import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import menuList from '@/utils/menuList'

const MyMenu = () => {
  const navigate = useNavigate()
  const [defaultSelectedKeys] = useState(['/Test1/Test1_1'])
  const [openKeys, setOpenKeys] = useState(['/Test1'])
  const menuClick = ({ key }: { key: string }) => {
    navigate(key)
  }
  return (
    <Menu theme="dark" defaultSelectedKeys={ defaultSelectedKeys } openKeys={ openKeys } mode="inline"
          items={ menuList } onClick={ menuClick }/>
  )
}

export default MyMenu