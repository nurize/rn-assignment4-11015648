import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../styles';
import React from 'react';

const Profile = ({displayText, displayMail}) => {
  const profile = require("../assets/profile.png");
  const redDot = require("../assets/red-dot.png");

  return (
    <View style={styles.profile}>
      <View>
        <Text style={styles.usernameHeader}> {displayText} </Text>
        <Text style={styles.emailHeader}> {displayMail} </Text>
      </View>
      <View>
        <ImageBackground 
          source={profile} 
          style={styles.profileImage}
        >
          <Image source={redDot} style={styles.redDot}/>
        </ImageBackground>
      </View>
    </View>
  )
}

export default Profile;