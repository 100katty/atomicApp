/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {usePersonas} from '../hook/usePersonas';

const Item = ({name, area}) => (
  <View>
    <Text>{name}</Text>
    <Text>{area}</Text>
  </View>
);

export const FlatlistPersonas = () => {
  const personas = usePersonas();

  const renderItem = ({item}) => {
    <Item name={item.name} />;
  };

  return (
    <FlatList
      data={personas}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
  );
};