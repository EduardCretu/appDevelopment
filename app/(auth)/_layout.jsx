import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import {colors} from '../../constants/colors'

export default function AuthLayout() {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
    <>
        <StatusBar style="auto"/>
          <Stack screenOptions={{
            headerShown: true,
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


const styles = StyleSheet.create({})