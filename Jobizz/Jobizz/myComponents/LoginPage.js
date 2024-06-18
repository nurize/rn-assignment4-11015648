import { Text, View, Pressable, TextInput, Image } from 'react-native';
import styles from '../styles';

export default function Login({appleIcon, googleIcon, facebookIcon}) {
  return (
  <View >
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcomeMessage}>Welcome Back 👋</Text>
      <Text style={styles.coverMessage}>Let's log in. Apply to jobs!</Text>
      <View style={styles.inputs}>
        <TextInput style={styles.textInput} placeholder='Name' />
        <TextInput style={styles.textInput} placeholder='Email' />
      </View>
      <Pressable style={styles.logIn}>
        <Text style={styles.buttonText}> Log in</Text>
      </Pressable>
      <View style={styles.continueText}>
        <Text style={styles.line}></Text>
        <Text style={{color: "#AFB0B6"}}>Or continue with</Text>
        <Text style={styles.line}></Text>
      </View>
      <View style={styles.logos}>
        <Image source={appleIcon}/>
        <Image source={googleIcon}/>
        <Image source={facebookIcon}/>
      </View>
      <View style={styles.account}>
        <Text style={styles.accountText}>
          Haven't an account? 
        </Text>
        <Text style={styles.register}>
            Register
        </Text>
      </View>
    </View>
  );
}