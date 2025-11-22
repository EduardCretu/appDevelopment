import { View, useColorScheme, StyleSheet} from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light
  return (
    <View style={[{backgroundColor: theme.uiBackground}, styles.card, style]}
        {...props}/>
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
        boxShadow: '1px 1px 5px rgba(0,0,0,0.2)',
    }
})