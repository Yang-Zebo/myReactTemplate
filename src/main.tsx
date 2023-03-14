import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.less'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider
    theme={ {
      token: {
        colorPrimary: '#13c2c2'
      }
    } }
    locale={ zhCN }>
    <App/>
  </ConfigProvider>
)
