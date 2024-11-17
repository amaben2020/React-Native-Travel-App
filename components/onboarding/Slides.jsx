import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableText from '../reusable/ReusableText';

const Slides = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          title={item.title}
          family={'medium'}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />
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
