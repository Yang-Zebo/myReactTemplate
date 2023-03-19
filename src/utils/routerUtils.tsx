import { RouteObject } from 'react-router-dom'
import { isLogin } from '@/utils/loginUtils'

export const getRouterTree: (baseRouter: object[], rootRouter: object[]) => object[] = (baseRouter, rootRouter) => {
  if(isLogin() || true) {
    return [...baseRouter, ...rootRouter]
  } else {
    return baseRouter
  }
}
export const getReactRouter: (finalRouter: object[]) => RouteObject[] = (finalRouter) => {
  const reactRoute: RouteObject[] = []
  finalRouter.map(((item: any) => {
    if(item.children?.length) {
      if(item.index) {
        reactRoute.push(
          {
            element: item.element,
            index: true
          },
          {
            path: item.path,
            element: item.element,
            children: getReactRouter(item.children)
          })
      } else {
        reactRoute.push({
          path: item.path,
          element: item.element,
          children: getReactRouter(item.children)
        })
      }
    } else {
      if(item.index) {
        reactRoute.push(
          {
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
  }))
  return reactRoute
}