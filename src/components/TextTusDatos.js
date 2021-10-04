/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const TextTusDatos = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>TUS DATOS</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.title1}>HAN SIDO </Text>
            <Text style={styles.title2}>ENVIADOS</Text>
          </View>
            <Text style={styles.title3}>CON EXITO</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:10,
    },
    title1:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        //marginLeft:70,
    },
    title2:{
        color:'#EF3507',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:10,
    },
    title3:{
        color:'#EF3507',
        fontSize:30,
        fontWeight:'bold',
        //marginLeft:90,
    },
  });
