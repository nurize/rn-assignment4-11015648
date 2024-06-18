import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native';

export default function App() {
  const appleIcon = require("./assets/apple-icon.jpg");
  const googleIcon = require("./assets/google-icon.png");
  const facebookIcon = require("./assets/facebook-icon.jpg");
  return (
    <View style={styles.container}>
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
      <View>
        <Text style={styles.accountText}>
          Haven't an account? 
          <Text style={styles.register}>
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    paddingTop: 150,
    paddingHorizontal: 30,
    flexDirection: "column",
    alignContent: "flex-start",
    rowGap: 10,
    fontFamily: "Poppins"
  },
  title: {
    fontFamily: 'Poppins', 
    color: '#356899', 
    fontWeight: '600', 
    fontSize: 22,
    //marginBottom: 15,
    //alignSelf: "flex-start"
  }, 
  welcomeMessage: {
    fontFamily: 'Poppins', 
    color: '#0D0D26', 
    fontSize: 26, 
    fontWeight: '600'
  }, 
  coverMessage: {
    fontFamily: 'Poppins', 
    fontWeight: '400', 
    fontSize: 16, 
    color: '#0D0D26'
  }, 
  textInput: {
    width: 360,
    height: 60,
    borderRadius: 10,
    borderColor: "#AFB0B6",
    borderWidth: 1,
    padding: 15,
  }, 
  inputs: {
    marginTop: 40, 
    flexDirection: "column",
    rowGap: 25,
  }, 
  logIn: {
    height: 56,
    width: 360,
    backgroundColor: "#356899",
    borderRadius: 10,
    borderColor: "none",
    marginTop: 25,
  }, 
  buttonText: {
    color: "#fff",
    paddingHorizontal: 150,
    paddingVertical: 16,
    fontSize: 18
  }, 
  continueText: {
    flexDirection: "row",
    columnGap: 10,
    marginTop: 50,
    fontWeight: "light", 
  }, 
  line: {
    borderWidth: 0.5,
    borderColor: "#AFB0B6",
    width: 110,
    height: 0,
    marginTop: 10,
  }, 
  logos: {
   flexDirection: "row",
   alignContent: "center", 
   paddingHorizontal: 30,
   marginBottom: 20,
  }
});
