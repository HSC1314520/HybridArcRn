import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from '@navigation/index'

function App(data) {

  const { routeName, params } = data ?? {}

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'transparent',
        },
      }}
    >
      <StackNavigator initialRouteName={routeName} initialParams={params} />
    </NavigationContainer>
  )
}

export default App