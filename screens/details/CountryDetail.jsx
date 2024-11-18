import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const CountryDetail = ({ navigation }) => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  );
};

export default CountryDetail;
