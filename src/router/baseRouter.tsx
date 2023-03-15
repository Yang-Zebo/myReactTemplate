import Login from '@/views/Login'
import Error404 from '@/views/ErrorPage/Error404'
const baseRouter: Object[] = [
  {
    name: 'login',
    path: '/login',
    element: <Login/>
  },
  {
    name: 'Page404',
    path: '/Page404',
    element: <Error404/>
  }
]
export default baseRouter