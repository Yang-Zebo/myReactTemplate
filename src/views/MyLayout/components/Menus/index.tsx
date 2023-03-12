import React, { useEffect, useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { routes } from '@/router'


const getItemsHandel = (routes: Object[]) => {

}

const Index = () => {
  const [menuItems, setMenuItems] = useState([])

  const onClick = () => {}
  return (
    <Menu onClick={ onClick }
          style={ { width: 256 } }
          mode="inline"
          items={ menuItems }/>
  )
}

export default Index