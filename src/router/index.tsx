import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { getReactRouter, getRouterTree } from '@/utils/routerUtils'
import baseRouter from './baseRouter'
import rootRouter from './rootRouter'

const routerTree: RouteObject[] = getRouterTree(getReactRouter(baseRouter), getReactRouter(rootRouter))
console.log('routerTree', routerTree)
const finalRouter = createBrowserRouter(routerTree)
export default finalRouter
