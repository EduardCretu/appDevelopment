import { StyleSheet, Text, View, Image } from 'react-native'
import {Link} from 'expo-router'
import Logo from '../assets/img/ciggy.jpg'
import React from 'react'


const index = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo}/>
      <Text style={styles.title}>WebDev but for apps</Text>
      <Text style={{color:'red'}}>John & Leftheris</Text>
      <Text>&gt;:&#x29;</Text>
      <View style={styles.card}>
        <Text style={{color:'white'}}>
            Amerika ya :D!!!
        </Text>
      </View>
      <Link href='/about' style={[styles.link,{color:'white'}]}> CLICK ME</Link>
      <Link href='/contact' style={[styles.link,{color:'white'}]}> CLICK ME</Link>

    </View>
  )
}

export default index

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
    },
    card: {
        margin: 5,
        padding: 20,
        borderRadius: 5,
        boxShadow: '5px 5px 5px rgba(0,0,0,0.2)',
        backgroundColor: '#727272ff',
        color: '#ffffff'
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 15
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'white'
    }
})