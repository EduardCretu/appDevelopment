import { Image, useColorScheme } from 'react-native'
import React from 'react'

import darkLogo from '../assets/img/ciggy.jpg'
import lightLogo from '../assets/img/notCiggy.jpg'

const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const logo = colorScheme === 'dark' ? darkLogo: lightLogo //termary operator. If colorScheme is strictly equal to 'dark' then we assign darklogo to the const, else lightlogo
  return (
    <Image source={logo} {...props} style={style}/>
  )
}

export default ThemedLogo
