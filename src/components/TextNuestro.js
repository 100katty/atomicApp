/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const TextNuestro = () => {
    return (
        <View style={styles.container}>
            <View style={styles.directionview}>
                <Text style={styles.title}>NUESTRO</Text>
                <Text style={styles.title1}>EQUIPO</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
    },
    directionview:{
        flexDirection:'row',
        justifyContent:'center',
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold', 
        //marginLeft:60,
    },
    title1:{
        color:'#EF3507',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:10,
    },
  });
