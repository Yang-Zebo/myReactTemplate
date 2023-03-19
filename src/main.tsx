import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.less'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import antdTokenStyle from '@/styles/antdToken.module.less'


console.log('import.meta.env', import.meta.env)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider
    theme={ {
      token: antdTokenStyle
    } }
    locale={ zhCN }>
    <App/>
  </ConfigProvider>
)
