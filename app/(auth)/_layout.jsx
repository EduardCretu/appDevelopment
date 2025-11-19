import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {colors} from '../../constants/colors'

const AuthLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
    <>
        <StatusBar style="auto"/>
        <Stack screenOptions={{
                    headerShown: false,
                    headerStyle: {backgroundColor: theme.navBackground},
                    headerTintColor: theme.title,
                    headerTitleStyle: {color: theme.title},
                    headerTitleAlign: 'center',
                    animation: 'none'
                }}> 
        </Stack>
    </>  
  )
}

export default AuthLayout

const styles = StyleSheet.create({})