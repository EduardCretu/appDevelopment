import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
//import {colors} from '../constants/colors'

//themed Components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const contact = () => {
  //const colorScheme = useColorScheme()
  //const theme = colors[colorScheme] ?? colors.light
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact Us</ThemedText>
      
    </ThemedView>
  )
}

export default contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})