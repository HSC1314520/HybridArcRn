import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DataModule } from '@navigation/bridge/index'
import Navigation from '@navigation/Navigation'

const HomeScreen = ({ navigation }) => {

  const [homeTitle2, setHomeTitle] = useState('')
  const homeTitle = DataModule?.getHomeTitle()

  useEffect(() => {
    DataModule?.getHomeTitle2()?.then(data => {
      setHomeTitle(data)
    })
  }, [])

  navigate = (route) => {
    Navigation.navigate(route, navigation)?.then(data => {
      if (data) {
        console.log(`Navigate page successfully. (route: ${route})`)
      } else {
        console.error(`Navigate page failed! (route: ${route})`)
      }
    }).catch(error => {
      console.error(`Navigate page error! (route: ${route})`, error)
    })
  }

  return (
    <View style={styles.container}>
      {
      homeTitle ? (
        <Text style={styles.title}>{homeTitle}</Text>
      ) : null
      }
      {
      homeTitle2 ? (
        <Text style={styles.title}>{homeTitle2}</Text>
      ) : null
      }
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          navigation.navigate('AScreen', {
            "title": "这是a页面",
            "status": true
          })
        }}
      >
        <Text style={styles.buttonText}>Navigate A Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.navigate("hybridarc://react-native/b")
        }}
      >
        <Text style={styles.buttonText}>Navigate B Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.navigate("hybridarc://react-native/c")
        }}
      >
        <Text style={styles.buttonText}>Navigate C Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.navigate("hybridarc://native/one")
        }}
      >
        <Text style={styles.buttonText}>Navigate Native One Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.navigate("hybridarc://native/two")
        }}
      >
        <Text style={styles.buttonText}>Navigate Native Two Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.navigate("hybridarc://native/unknown")
        }}
      >
        <Text style={styles.buttonText}>Navigate Native Unknown Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.navigate("hybridarc://native/error")
        }}
      >
        <Text style={styles.buttonText}>Navigate Native Error Page</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'white'
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

export default HomeScreen