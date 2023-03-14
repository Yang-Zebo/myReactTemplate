import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'



const Index = () => {
  const [menuItems, setMenuItems] = useState([])
  const getItems = (routes: Object[]) => {
    return
  }
  const onClick = () => {}
  return (
    <Menu onClick={ onClick }
          style={ { width: 256 } }
          mode="inline"
          items={ menuItems }/>
    // <div>
    //   <Link to="/home">home</Link>
    //   <br/>
    //   <Link to="/about">about</Link>
    // </div>
  )
}

export default Index