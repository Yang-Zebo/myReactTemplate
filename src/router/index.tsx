import { createBrowserRouter } from 'react-router-dom'
import { getRouterTree, getReactRouter } from '@/utils/routerUtils'
import rootRouter from '@/router/rootRouter'
import baseRouter from '@/router/baseRouter'

const finalRouter = getRouterTree(rootRouter, baseRouter)
const reactRouter = createBrowserRouter(getReactRouter(finalRouter))
export default reactRouter
