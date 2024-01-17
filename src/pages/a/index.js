import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const AScreen = ({ navigation, route }) => {

  const { title, status } = route.params ?? {}

  return (
    <View style={styles.container}>
      <Text style={styles.a}>Hello A</Text>
      <Text style={styles.a}>{`Received params: Title - ${title}, Status - ${status}`}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('BScreen')
        }}
      >
        <Text style={styles.buttonText}>Navigate B Page</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  a: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
})

export default AScreen