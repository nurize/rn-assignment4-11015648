import { Text, View, Pressable, TextInput, Image } from 'react-native';
import styles from './styles.js';
import Login from './myComponents/LoginPage.js';

export default function App() {
  const appleIcon = require("./assets/apple-icon.jpg");
  const googleIcon = require("./assets/google-icon.png");
  const facebookIcon = require("./assets/facebook-icon.jpg");
  return (
    <View style={styles.container}>
      <Login googleIcon={googleIcon} facebookIcon={facebookIcon} appleIcon={appleIcon}/>
    </View>
  );
}

