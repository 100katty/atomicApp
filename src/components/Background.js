/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, ImageBackground, ScrollView} from 'react-native';

export const Background = () => {
  return (
     
        <ImageBackground
            source={require('../assets/Mask_Group_1.png')}
            resizeMode="cover"
            style={styles.backgroundimage}
        />
     
  );
};
const styles = StyleSheet.create({
  backgroundimage: {
    position:'absolute',
    flex: 1,
    width:2000,
    height:3000,
    transform:[
      {rotate:'360deg'},
  ],
  },
});
