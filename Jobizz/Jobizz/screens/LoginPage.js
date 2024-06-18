import { Text, View, Pressable, TextInput, Image } from 'react-native';
import styles from '../styles';
import { useState } from 'react';


export default function Login({navigation}) {
  const appleIcon = require("../assets/apple-icon.jpg");
  const googleIcon = require("../assets/google-icon.png");
  const facebookIcon = require("../assets/facebook-icon.jpg");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  //const [errors, setErrors] = useState({});

  const handleUsernameChange = (text) => {
    setUsername(text);
  }

  const handleEmailChange = (text) => {
    setEmail(text);
  }

  {/*const validateForm = () => {
    let errors = {};

    if(!username) errors.username = "Username is required";
    if(!email) errors.email = "Email is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };*/}

  return (
  <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcomeMessage}>Welcome Back 👋</Text>
      <Text style={styles.coverMessage}>Let's log in. Apply to jobs!</Text>
      <View style={styles.inputs}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Name' 
          value={username}
          onChange={handleUsernameChange}
        />
        <TextInput 
          style={styles.textInput} 
          placeholder='Email'
          value={email} 
          onChange={handleEmailChange}
        />
      </View>
      <Pressable 
        style={styles.logIn}
        onPress={() => navigation.navigate("Home", {
          username: username,
          email: email
        })}>
           {/*if(!validateForm()){
             return (
                 errors.email ? <Text style={styles.errorMessage}>{errors.email}</Text> : null || errors.username ? <Text style={styles.errorMessage}>{errors.username}</Text> : null 
             )
        }}}}>*/}
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