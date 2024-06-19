import { Text, View, Pressable, Image, FlatList } from 'react-native';
import styles from '../styles';
import React from 'react';

const JobCards = () => {
  const googleIcon = require("../assets/google-icon.png");
  const facebookIcon = require("../assets/facebook-icon.png");
  const jobs = require("../data/jobs.json");

  return(
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
            <View style={styles.jobCards}>
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
            </View>
          )
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default JobCards;