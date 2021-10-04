/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';
import { Background } from '../components/Background';
import { ProgressLine } from '../components/ProgressLine';
import { useForm } from '../hooks/useForm';

export const RegistroPart1Screen = () => {
  const {nombre, apellido, onChange}= useForm ({
    email:'',
    password:''

});

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
          <ProgressLine/>
          <View>
            <Text>Nombre</Text>
                    <TextInput
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="text"
                        underlineColorAndroid="white"
                        selectionColor="white"

                        //onchange,value
                        onChangeText={(value)=>onChange(value,'nombre')}
                        value={nombre}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
            <Text>Apellido</Text>
                    <TextInput
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="text"
                        underlineColorAndroid="white"
                        selectionColor="white"

                        //onchange,value
                        onChangeText={(value)=>onChange(value,'apellido')}
                        value={apellido}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
          </View>
          <Image
             source={require('../assets/Group_4033.png')}
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
