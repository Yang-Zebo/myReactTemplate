import { RouteObject } from 'react-router-dom'
import { isLogin } from '@/utils/loginUtils'

export const getReactRouter: (ourRouter: object[]) => RouteObject[] = (ourRouter) => {
  const reactRoute: RouteObject[] = []
  ourRouter?.map((item: any) => {
    if(item.children?.length) {
      reactRoute.push({
        path: item.path,
        element: item.element,
        children: getReactRouter(item.children)
      })
    } else {
      if(item.index) {
        reactRoute.push({
          element: item.element,
          index: true
        }, {
          path: item.path,
          element: item.element
        })
      } else {
        reactRoute.push({
          path: item.path,
          element: item.element
        })
      }
    }
  })
  return reactRoute
}
export const getRoutesTree: (baseRouter: RouteObject[], rootRouter: RouteObject[]) => RouteObject[] = (baseRouter, rootRouter) => {
  if(isLogin() || true) {
    return [...baseRouter, ...rootRouter]
  } else {
    return baseRouter
  }
}