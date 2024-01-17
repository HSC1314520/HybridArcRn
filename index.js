import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import NativeRouteListener from '@navigation/RouteListenerModule'
import Navigation from '@navigation/Navigation'

const unsubscribe = NativeRouteListener((route) => {
  console.log(`Received route from native: ${route}`)
  Navigation.navigate(route)
})

AppRegistry.registerComponent(appName, () => App)