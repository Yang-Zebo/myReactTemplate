import { BrowserRouter } from 'react-router-dom'
import GetRoutes from '@/router'
import './index.less'

function Index() {
  return (
    <BrowserRouter>
      <GetRoutes/>
    </BrowserRouter>

  )
}

export default Index
