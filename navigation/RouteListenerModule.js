import { NativeEventEmitter, DeviceEventEmitter } from 'react-native'
import { RouteModule } from '@navigation/bridge/index'

// const routeModuleEvents = new NativeEventEmitter(RouteModule)
const EVENT_NAME = 'rn_routes'

const NativeRouteListener = (callback) => {
  if (Platform.OS === 'android') {
    DeviceEventEmitter.addListener(EVENT_NAME, callback)
  } else if (Platform.OS === 'ios') {
    const routeModuleEvents = new NativeEventEmitter(RouteModule)
    routeModuleEvents.addListener(EVENT_NAME, callback)
  }

  // 返回一个移除监听的函数
  return () => {
    // routeModuleEvents.removeListener('navigate_route', callback)
    // DeviceEventEmitter.removeListener(EVENT_NAME, callback)
  }
}

export default NativeRouteListener