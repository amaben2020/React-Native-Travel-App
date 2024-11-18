import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import NetworkImage from '../NetworkImage';
import { useNavigation } from '@react-navigation/native';

const Country = ({ item }) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate('CountryDetail', { item })}
    >
      <Text>{item.country}</Text>
      <NetworkImage radius={12} width={85} height={85} source={item.imageUrl} />
    </TouchableOpacity>
  );
};

export default Country;

const styles = StyleSheet.create({});
