/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Background } from '../components/Background';
import { FlatlistPersonas } from '../components/FlatlistPersonas';
import { TextNuestro } from '../components/TextNuestro';
import { TextSomos } from '../components/TextSomos';
import { TextTe } from '../components/TextTe';
import { Title } from '../components/Title';

export const InicioScreen = () => {
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
          <Title/>
          <TouchableOpacity>
              <Text>Quiero Saber Mas</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/Group_4032.png')}
            style={styles.centroimagen}
          />
          <TouchableOpacity>
              <Text>Quiero ser parte</Text>
          </TouchableOpacity>
         <TextSomos/>
         <TextTe/>
         <Image
             source={require('../assets/Group_4040.png')}
             style={styles.peopleimagen}
         />
          <TouchableOpacity>
              <Text>Quiero ser parte</Text>
          </TouchableOpacity>
         <TextNuestro/>
         <FlatlistPersonas/>
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
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    logo:{
        justifyContent:'center',
        height:100,
        marginLeft:90
    },
    centroimagen:{
        justifyContent:'center',
        width:350,
        height:300,
        marginLeft:40,
    },
    peopleimagen:{
        alignItems:'center',
        width:350,
        height:100,
        marginLeft:30,
        marginTop:50,
  },
  });
