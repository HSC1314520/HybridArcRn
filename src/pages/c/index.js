import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CScreen = ({ route }) => {

  const { title, status } = route.params ?? {}

  return (
    <View style={styles.container}>
      <Text style={styles.c}>Hello C</Text>
      <Text style={styles.c}>{`Received params: Title - ${title}, Status - ${status}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  c: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
})

export default CScreen