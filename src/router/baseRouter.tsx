import Login from '@/views/Login'
import Error404 from '@/views/ErrorPage/Error404'
const baseRouter: Object[] = [
  {
    label: 'login',
    path: '/login',
    element: <Login/>
  },
  {
    label: 'Page404',
    path: '/Page404',
    element: <Error404/>
  }
]
export default baseRouter