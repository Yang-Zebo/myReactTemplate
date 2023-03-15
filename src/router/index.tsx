import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { getReactRouter, getRoutesTree } from '@/utils/routerUtils'
import baseRouter from './baseRouter'
import rootRouter from './rootRouter'

const routesTree: RouteObject[] = getRoutesTree(getReactRouter(baseRouter), getReactRouter(rootRouter))
console.log('routesTree', routesTree)
const GetRoutes = () => {
  return createBrowserRouter(routesTree)
}
export default GetRoutes
