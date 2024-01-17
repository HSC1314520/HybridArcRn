import { RouteModule } from '@navigation/bridge/index'
import navJson from '@navigation/nav.json'

const ROUTE_SCHEME = 'hybridarc://'

class Navigation {

  constructor() {
    if (!Navigation.instance) {
      Navigation.instance = this
    }
    return Navigation.instance
  }

  /**
   * 导航到路由页面
   * 
   * @param {string} route 路由地址
   * @param {import('@react-navigation/native').NavigationProp} navigation 本地React-Native路由，如果为null则表示为原生调用
   * @returns 如果是React-Native调用到非React-Native页面，则会返回一个Promise异步回调接口
   */
  navigate = (route, navigation = null) => {
    if (route.startsWith(ROUTE_SCHEME)) {
      const [routePart, paramsPart] = route.split('?')
      // 查找本地React-Native路由表
      const navElement = this.findLocalRouteNameByRoute(routePart)
      if (navElement) {
        // 解析参数
        const params = {}
        if (paramsPart) {
          const paramsArray = paramsPart.split('&')
          paramsArray.forEach((param) => {
            const [key, value] = param.split('=')
            params[key] = value
          })
        }
        console.log(`react-native route path. navElement = ${JSON.stringify(navElement)}.`)
        if (navigation) {
          // 存在本地路由，不启动React-Native容器，直接打开React-Native页面
          navigation.navigate(navElement.name, params)
          return
        }

        // 查找到路由，回调给原生处理
        RouteModule.navigateToReactNativeCallback({
          route: route,
          name: navElement.name,
          params: params,
          status: true
        })
        return
      }
    }

    console.log(`No react-native route path. (${route})`)
    if (navigation) {
      // React-Native 的路由表中没有找到，返回原生处理
      return this.navigateToNative(route)
    }
    // React-Native 的路由表中没有找到，回调给原生处理
    RouteModule.navigateToReactNativeCallback({
      route: route,
      status: false
    })
  }

  /**
   * React-Native调用非React-Native页面，将路由传递给原生，由原生处理。
   * @param {string} route 需要给原生处理的路由
   * @returns 异步回调Promise对象
   */
  navigateToNative = (route) => {
    return RouteModule.navigateToNative(route)
  }

  /**
   * 查找React-Native路由表
   * @param {string} route 需要查找的路由
   * @returns 找到的路由信息，如果没有找到则返回null
   */
  findLocalRouteNameByRoute = (route) => {
    const navList = navJson.route
    for (let navElement of navList) {
      if (navElement.route === route) {
        return navElement
      }
    }
    return null
  }
}

const instance = new Navigation()
Object.freeze(instance)

export default instance