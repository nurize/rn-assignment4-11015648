import {  View, Pressable, TextInput, Image, ImageBackground } from 'react-native';
import styles from '../styles';
import React from 'react';

const Search = () => {
  const searchButton = require("../assets/search-button.png");
  const searchDesign = require("../assets/button-design.png");
  const searchIcon = require("../assets/search.png");

  return (
    <View style={styles.searchArea}>
      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.searchIcon}/>
        <TextInput 
          style={styles.search}
          placeholder="Search a job or position"
          placeholderTextColor="#95969D"
        />
      </View>
      <Pressable 
        style={styles.searchButtonContainer}
      > 
        <ImageBackground source={searchButton} style={styles.searchButton}>
          <Image source={searchDesign} style={styles.searchDesign}/>
        </ImageBackground>
      </Pressable>
    </View>
  )
}

export default Search;