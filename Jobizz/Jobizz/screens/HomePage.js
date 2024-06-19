import { Text, View, Pressable, TextInput, Image, RootTagContext, ImageBackground, FlatList } from 'react-native';
import styles from '../styles';
//import { useState } from 'react';

export default function Home({route}) {
  const jobs = require("../data/jobs.json");
  const popularJobs = require("../data/popularJobs.json");
  const profile = require("../assets/profile.png");
  const { username } = route.params;
  const { email } = route.params;
  const searchButton = require("../assets/search-button.png");
  const searchDesign = require("../assets/button-design.png");
  const redDot = require("../assets/red-dot.png");
  const searchIcon = require("../assets/search.png");
  const googleIcon = require("../assets/google-icon.png");
  const facebookIcon = require("../assets/facebook-icon.png");
  const burgerKing = require("../assets/burger-king.png");
  const beats = require("../assets/beats.png");

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

      <View style={styles.searchArea}>
        <TextInput 
          style={styles.search}
          placeholder="Search a job or position"
          placeholderTextColor="#95969D"
          
        />
        <Pressable 
          style={styles.searchButtonContainer}
        > 
          <ImageBackground source={searchButton} style={styles.searchButton}>
            <Image source={searchDesign} style={styles.searchDesign}/>
          </ImageBackground>
        </Pressable>
      </View>

      <View style={styles.allJobs}>
        <View style={styles.jobs}>
          <Text style={styles.jobsHeader}>Featured Jobs</Text>
          <Pressable >
            <Text style={styles.viewJobs}>See all</Text>
          </Pressable>
        </View>
        <FlatList 
          data={jobs}
          renderItem={({ item }) => {
            const logo = parseInt(item.id) === 1 ? facebookIcon : googleIcon ; 
            const backgroundColor = parseInt(item.id) === 1 ? "#2fa7ca" : "#04284A";

            return (
              <View style={[styles.jobCard, {backgroundColor: backgroundColor}]} key={item.id}>
                <View style={styles.jobHeader}>
                   <Image style={styles.jobLogo} source={logo}/>
                  <View >
                    <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                    <Text style={styles.jobCompany}>{item.Company}</Text>
                  </View>
                </View>
                <View style={styles.jobFooter}>
                  <Text style={styles.salary}> {item.Salary} </Text>
                  <Text style={styles.salary}> {item.Location} </Text>
                </View>
              </View>
            )
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.popuplarJobs}>
        <View style={styles.jobs}>
            <Text style={styles.jobsHeader}>Popular Jobs</Text>
            <Pressable >
              <Text style={styles.viewJobs}>See all</Text>
            </Pressable>
          </View>
        </View>

       {/*} <FlatList 
          data={popularJobs} 
          renderItem={({item}) => {
            let logo = "";
            if(parseInt(item.id) === 1) {
              logo = burgerKing;
            } else if(parseInt(item.id) === 2) {
              logo = beats;
            } else {
              logo = facebookIcon;
            }

            return (
              <View style={styles.jobTab}>
                <View style={styles.companyLogo}>
                  <Image source={logo} />
                </View>
                <View></View>
                <View></View>
              </View>
            )
          }} 
        /> */}
    </View>
  )
}