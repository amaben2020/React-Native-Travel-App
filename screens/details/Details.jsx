import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const Details = () => {
  const route = useRoute();
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export default Details;
