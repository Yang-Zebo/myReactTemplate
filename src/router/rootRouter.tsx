import MyLayout from '@/views/MyLayout'
import Home from '@/views/Home'
import About from '@/views/About'

const rootRouter: object[] = [
  {
    name: '菜单',
    path: '/',
    element: <MyLayout/>,
    children: [
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
  }]
export default rootRouter