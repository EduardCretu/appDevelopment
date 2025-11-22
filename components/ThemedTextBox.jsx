import { useColorScheme, TextInput } from 'react-native'
import { colors } from '../constants/colors'

const ThemedTextBox = ({style, width, height ,...props}) => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
    <TextInput
        placeholderTextColor={theme.iconColour}
        style={[
            {
                backgroundColor: theme.uiBackground,
                color: theme.text,
                padding: 20,
                borderRadius: 10,

            },
            style
        ]}
        {...props}
    />
  )
}

export default ThemedTextBox
