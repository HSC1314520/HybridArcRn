import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@pages/home/index'
import AScreen from '@pages/a/index'
import BScreen from '@pages/b/index'
import CScreen from '@pages/c/index'

const Stack = createNativeStackNavigator()
// stack路由配置
export default function StackNavigator({ initialRouteName, initialParams }) {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={initialRouteName === "Home" ? initialParams : undefined}
        options={{ headerShown: false /* 不显示标题 */ }}
      />
      <Stack.Screen
        name="AScreen"
        component={AScreen}
        initialParams={initialRouteName === "AScreen" ? initialParams : undefined}
        options={{ headerShown: false /* 不显示标题 */ }}
      />
      <Stack.Screen
        name="BScreen"
        component={BScreen}
        initialParams={initialRouteName === "BScreen" ? initialParams : undefined}
        options={{ headerShown: false /* 不显示标题 */ }}
      />
      <Stack.Screen
        name="CScreen"
        component={CScreen}
        initialParams={initialRouteName === "CScreen" ? initialParams : undefined}
        options={{ headerShown: false /* 不显示标题 */ }}
      />
    </Stack.Navigator>
  )
}