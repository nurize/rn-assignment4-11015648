import { Text, View, Pressable, Image, FlatList } from 'react-native';
import styles from '../styles';
import React from 'react';

const JobTabs = () => {
  const popularJobs = require("../data/popularJobs.json");
  const burgerKing = require("../assets/burger-king.png");
  const beats = require("../assets/beats.png");
  const facebookIcon = require("../assets/facebook-icon.png");

  return (
    <View style={styles.popuplarJobs}>
      <View style={styles.jobs}>
        <Text style={styles.jobsHeader}>Popular Jobs</Text>
        <Pressable >
          <Text style={styles.viewJobs}>See all</Text>
        </Pressable>
      </View>

      <FlatList 
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
                <View style={styles.jobName}>
                  <Text style={styles.position}>{item.job_title}</Text>
                  <Text style={styles.company}>{item.company}</Text>
                </View>
                <View style={styles.locationSalary}>
                  <Text style={styles.jobSalary}>{item.salary}</Text>
                  <Text style={styles.companyLocation}>{item.location}</Text>
                </View>
              </View>
            )
          }} 
        />
      </View>
  )
}

export default JobTabs;