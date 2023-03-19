import MyLayout from '@/components/MyLayout'
import FirstPage from '@/views/FirstPage'
import menuRouter from '@/router/menuRouter'

const rootRouter: object[] = [
  {
    path: '/',
    element: <MyLayout/>,
    children: [
      {
        path: 'firstPage',
        element: <FirstPage/>,
        index: true
      }
    ]
  },
  ...menuRouter
]
export default rootRouter