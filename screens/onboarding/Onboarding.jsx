import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slides } from '../../components';

const Onboarding = () => {
  const slides = [
    {
      id: 1,
      image: require('./../../assets/images/1.png'),
      title: 'Find the perfect place to stay',
    },
    {
      id: 2,
      image: require('./../../assets/images/2.png'),
      title: 'Discover your best self',
    },
    {
      id: 3,
      image: require('./../../assets/images/3.png'),
      title: 'Find your perfect world',
    },
  ];
  return (
    <SafeAreaView>
      <Text>Onboarding</Text>

      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Slides item={item} />}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
