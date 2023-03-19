import React from 'react'
import menuRouter from '@/router/menuRouter'
import { MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]


export const getMenuList = (menuRouter: any, fPath: string = '') => {
  const menuList: MenuItem[] =  menuRouter.map((item: any) => {
      const key = fPath ? `${fPath}/${item.path}` : item.path
      return {
        label: item.label,
        key,
        icon: item.icon,
        children: item.children?.length ? getMenuList(item.children, key) : undefined
      }
  })
  return menuList
}
const menuList = getMenuList(menuRouter)
console.log('menuList',menuList)
export default menuList