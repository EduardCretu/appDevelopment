import { StyleSheet, Text, View } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

const contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coontact Us</Text>
      <Link href="/" style={[styles.link, {color:'white'}]}>CLICK MEEE</Link>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(51, 51, 51, 1)'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'white'
    }
})