/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Title = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Desarolla todo</Text>
          <Text style={styles.title1}>tu POTENCIAL</Text>
          <Text style={styles.title2}>dentro del equipo</Text>
          <Text style={styles.title3}>ATOMICLABS</Text>
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
        fontSize:40,
        fontWeight:'bold',
        //marginLeft:50,
    },
    title1:{
        color:'#EF3507',
        fontSize:40,
        fontWeight:'bold',
        //marginLeft:50,
    },
    title2:{
        color:'white',
        fontSize:33,
        fontWeight:'bold',
        //marginLeft:50,
    },
    title3:{
        color:'#EF3507',
        fontSize:42,
        fontWeight:'bold',
        //marginLeft:50,
    },
  });
