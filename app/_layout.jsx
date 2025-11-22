import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import {colors} from '../constants/colors'
import { UserProvider } from '../contexts/UserContext'


const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
    <UserProvider>
        <StatusBar value='auto' hidden></StatusBar>
        <Stack screenOptions={{
            headerShown: false,
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title,
            headerTitleStyle: {color: theme.title},
            headerTitleAlign: 'center'
        }}> 
            
            <Stack.Screen name="index" options={{title: 'Home', headerShown: true}}/>
            <Stack.Screen name="(auth)" options={{headerShown:false}}/>
            <Stack.Screem name="(dashboard)" options={{headerShown:false}}/>
        </Stack>
    </UserProvider>  
  )
}

export default RootLayout

const styles = StyleSheet.create({})