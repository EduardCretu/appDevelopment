import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {colors} from '../constants/colors'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
    <>
        <StatusBar value='auto' hidden></StatusBar>
        <Stack screenOptions={{
            headerShown:true,
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title,
            headerTitleStyle: {color: theme.title},
            headerTitleAlign: 'center'
        }}> 
            <Stack.Screen name='(auth)' options={{headerShown:false}}/>
            <Stack.Screen name="index" options={{title: 'Home', headerShown: true}}/>
        </Stack>
    </>  
  )
}

export default RootLayout

const styles = StyleSheet.create({})