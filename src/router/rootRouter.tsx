import MyLayout from '@/views/MyLayout'
import Home from '@/views/Home'
import About from '@/views/About'
// children 与 index 不能在同一级
const menuRouter: object[] = [
  {
    name: '首页',
    path: 'home',
    element: <Home/>,
    index: true
  },
  {
    name: '关于',
    path: 'about',
    element: <About/>
  }
]
const rootRouter: object[] = [
  {
    name: '菜单',
    path: '/',
    element: <MyLayout/>,
    children: menuRouter
  }
]

export default rootRouter