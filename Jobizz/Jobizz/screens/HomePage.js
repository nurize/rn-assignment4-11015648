import React from 'react';
import {  View, ScrollView } from 'react-native';
import styles from '../styles';
import  Profile  from '../myComponents/profile.js';
import  Search  from '../myComponents/Search.js';
import  JobCards  from '../myComponents/jobCards.js';
import  JobTabs  from '../myComponents/JobTabs.js';


export default function Home({route}) {
  const { username } = route.params;
  const { email } = route.params;

  const getUsername = () => {
    return username || "Eric Atsu";
  }

  const getEmail = () => {
    return email || "eric@gmail.com";
  }

  const displayText = getUsername();
  const displayMail = getEmail();

  return (
    <View style={styles.home}> 
      <ScrollView>
        <Profile displayText={"Eric Atsu."} displayMail={"eric@gmail.com"}/>
        <Search />
        <JobCards />
        <JobTabs />
      </ScrollView>
    </View>
  )
}