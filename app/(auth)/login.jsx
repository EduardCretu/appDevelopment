import { StyleSheet, Pressable, Text, Button } from 'react-native'
import { Link } from 'expo-router'
import { colors } from '../../constants/colors'

//Themed Custom Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedPressable from '../../components/ThemedPressable'

const Login = () => {
  const handleSubmit = () => {
    console.log('Login form submitted')
  }
  return (
    <ThemedView style={styles.container}>
      
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

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
  )
}

export default Login

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