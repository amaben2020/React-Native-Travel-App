import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const CountryDetail = ({ navigation }) => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>CountryDetail</Text>
    </View>
  );
};

export default CountryDetail;
