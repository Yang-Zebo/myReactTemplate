import MyLayout from '@/views/MyLayout'
import Home from '@/views/Home'
import About from '@/views/About'
import { RouteObject, createBrowserRouter } from 'react-router-dom'

export const routes: RouteObject[] = [

  {
    path: '/',
    element: <MyLayout/>,
    children: [
      {
        element: <Home/>,
        index: true
      },
      { path: 'home',
        element: <Home/>,
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  }]

const GetRoutes = () => {
  return createBrowserRouter(routes)
}
export default GetRoutes
