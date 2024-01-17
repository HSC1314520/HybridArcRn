import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const BScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.b}>Hello B</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('AScreen')
        }}
      >
        <Text style={styles.buttonText}>Navigate A Page</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  b: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'yellow'
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

export default BScreen