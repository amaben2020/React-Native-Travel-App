import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SIZES } from '../../constants/theme';

const Slides = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: SIZES.width,
    height: SIZES.height,
  },
  stack: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
});
