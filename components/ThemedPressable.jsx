import { StyleSheet, Pressable } from 'react-native'
import { colors } from '../constants/colors'

function ThemedPressable({style, ...props}) {
  return (
    <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed, style]}
     {...props}
    />
  )
}

export default ThemedPressable

const styles = StyleSheet.create({
      btn: {
        backgroundColor: colors.primary,
        padding:15,
        borderRadius: 10,
        marginVertical:10
    },
    pressed: {
        opacity: 0.8,
    }


})