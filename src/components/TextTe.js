/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const TextTe = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>¡TE ENCANTARÁ</Text>
          <Text style={styles.title1}>TRABAJAR CON</Text>
          <Text style={styles.title2}>NOSOTROS!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
       // marginLeft:70,
    },
    title1:{
        color:'#EF3507',
        fontSize:30,
        fontWeight:'bold',
        //marginLeft:70,
    },
    title2:{
        color:'#EF3507',
        fontSize:30,
        fontWeight:'bold',
        //marginLeft:105,
    },
  });
