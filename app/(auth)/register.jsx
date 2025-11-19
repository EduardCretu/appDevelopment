import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedPressable from '../../components/ThemedPressable'
import Spacer from '../../components/Spacer'


const Register = () => {
  const handleSubmit = () => {
    console.log('Register form submitted')
  }


  return (
    <ThemedView style={styles.container}>

      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Register an Account
      </ThemedText>

      <ThemedPressable onPress={handleSubmit} style={styles.btn}>
        <Text style={{color:'white'}}>Register</Text>
      </ThemedPressable>

      <Spacer height={100} />

      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>
          Login instead
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
  }
})