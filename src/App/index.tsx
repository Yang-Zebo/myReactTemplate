import finalRouter from '@/router'
import { RouterProvider } from 'react-router-dom'
import './index.module.less'


function Index() {
  return (
    <RouterProvider router={finalRouter} />
  )
}

export default Index
