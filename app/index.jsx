import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import {Link} from 'expo-router'
import Logo from '../assets/img/ciggy.jpg'
import React from 'react'
import {colors} from '../constants/colors'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedCard from '../components/ThemedCard'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'



const index = () => {
  //const colorScheme = useColorScheme()
  //const theme = colors[colorScheme] ?? colors.light
  
  return (
    <ThemedView style={styles.container}>

        <ThemedLogo style={styles.logo}/>

      <ThemedText title={true} style={styles.title}>
        WebDev but for apps
      </ThemedText>

      <ThemedText style={{color:'red'}}>
        Microsoft hire me OR ELSE!!!
      </ThemedText>

      <ThemedText style={{fontWeight: 'bold'}}>
        &gt;:&#x29;
      </ThemedText>

      <ThemedText>
          Amerika ya :D !!!!
      </ThemedText>

      <Spacer></Spacer>
      
      <Link href='/login'>
        <ThemedCard style={styles.card}>
            <ThemedText style={styles.cardText}>Log in</ThemedText>  
        </ThemedCard>
      </Link>
      
      <Spacer height={10}></Spacer>

      <Link href='/register'>
        <ThemedCard style={styles.card}>
            <ThemedText style={styles.cardText}>Register</ThemedText>  
        </ThemedCard>
      </Link>

      <Spacer height={10}></Spacer>

      <Link href='/profile'>
        <ThemedCard style={styles.card}>
            <ThemedText style={styles.cardText}>Profile</ThemedText>  
        </ThemedCard>
      </Link>


    </ThemedView>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        margin: 5,
        fontWeight: 'bold',
        fontSize: 20,
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 15
    },
    card: {
      width: 150,
      height: 60,
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
    cardText: {
      fontWeight: 'bold',
      fontSize: 15,
      color: 'white'
    }
})