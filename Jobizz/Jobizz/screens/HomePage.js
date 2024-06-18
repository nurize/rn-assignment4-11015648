import { Text, View, Pressable, TextInput, Image, RootTagContext } from 'react-native';
import styles from '../styles';
//import { useState } from 'react';

export default function Home({route}) {
  //const profile = require
  const { username } = route.params;

  const displayUsername = () => {
    let text = "";
    if({ username }) { 
      text = {username}
    } 
    else 
    { 
      text = "Eric Atsu" 
    }
    return text;
  }

  const displayText = displayUsername();

  return (
    <View> 
      <View>
        <View>
          <Text style={styles.usernameHeader}> {displayText} </Text>
          <Text style={styles.emailHeader}>eric@gmail.com</Text>
        </View>
        <View>
          
        </View>
      </View>
    </View>
  )
}