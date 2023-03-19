import {lazy} from 'react'
const MyLayout = lazy(() => import('@/components/MyLayout'))
import Test1_1 from '@/views/TestPage/Test1/Pages/Test1_1'
import Test1_2 from '@/views/TestPage/Test1/Pages/Test1_2'
const menuRouter: object[] = [
  {
    label: 'Test1',
    path: '/Test1',
    element: <MyLayout/>,
    children: [
      {
        label: 'Test1_1',
        path: 'Test1_1',
        element: <Test1_1 />,
        index: true
      },
      {
        label: 'Test1_2',
        path: 'Test1_2',
        element: <Test1_2 />,
        index: true
      }
    ]
  }
]

export default menuRouter