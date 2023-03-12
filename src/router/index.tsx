import MyLayout from '@/views/MyLayout'
import Home from '@/views/Home'
import About from '@/views/About'
import { useRoutes, RouteObject, Navigate } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home"/>
  },
  {
    path: '/',
    element: <MyLayout/>,
    children: [
      {
        path: 'home',
        element: <Home/>
      }, {
        path: 'about',
        element: <About/>
      }
    ]
  }]

const GetRoutes = () => {
  return useRoutes(routes)
}
export default GetRoutes
