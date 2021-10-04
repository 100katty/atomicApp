/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import { Background } from '../components/Background';
import { TextTusDatos } from '../components/TextTusDatos';

export const FinalScreen = () => {
  return (
    <>
    <ScrollView>
     <Background/>
        <View style={styles.container}>
          <Image
            source={require('../assets/logoblango.png')}
            resizeMode="cover"
            style={styles.logo}
          />
         <TextTusDatos/>
         <Image
             source={require('../assets/Group_4039.png')}
             style={styles.peopleimagen}
         />
        </View>
    </ScrollView>
    
    
      

    
   </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
  logo:{
    justifyContent:'center',
    height:100,
    marginLeft:90
},
  peopleimagen:{
      alignItems:'center',
      width:350,
      height:100,
      marginLeft:30,
      marginTop:50,
},
});

