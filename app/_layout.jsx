import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import {colors} from '../constants/colors'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
    <>
        <StatusBar value='auto' hidden></StatusBar>
        <Stack screenOptions={{
            headerShown:false,
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title,
            headerTitleStyle: {color: 'white', }
        }}> 
            <Stack.Screen name="index" options={{title: 'Home', headerShown: true}}></Stack.Screen>
            <Stack.Screen name="about" options={{title: 'About', headerShown: true}}></Stack.Screen>
            <Stack.Screen name="contact" options={{title: 'Contact Us'}}></Stack.Screen>
        </Stack>
    </>  
  )
}

export default RootLayout

const styles = StyleSheet.create({})