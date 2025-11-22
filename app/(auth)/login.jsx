import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { Link } from 'expo-router'
import {useUser} from '../../hooks/useUser'

//Themed Custom Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedPressable from '../../components/ThemedPressable'
import ThemedTextBox from '../../components/ThemedTextBox'
import { useState } from 'react'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user} = useUser()

  const handleSubmit = () => {
    console.log('current user:', user)
    console.log('Login form submitted', email, password)
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        
        <Spacer />

        <ThemedText title={true} style={styles.title}>
          Login to Your Account
        </ThemedText>

        <ThemedTextBox 
          placeholder='Email' 
          style={styles.txtBox}
          keyboardType= "Email-address"
          autoCorrect={false} 
          autoComplete={'off'}
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextBox 
          placeholder='Password' 
          style={styles.txtBox}
          keyboardType= "password" 
          autoCorrect={false} 
          autoComplete={'off'}          
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <ThemedPressable onPress={handleSubmit} style={styles.btn}>
          <Text style={{color:'white'}}>Login</Text>
        </ThemedPressable>
        
        <Spacer height={100} />

        <Link href="/register">
          <ThemedText style={{ textAlign: "center" }}>
            Register instead
          </ThemedText>
        </Link>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '60%'
  },
  txtBox: {
    width: '80%',
    marginBottom: 20
  }
})