import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableText from '../reusable/ReusableText';
import ReusableButton from '../button/ReusableButton';

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

        <ReusableButton
          onPress={() => {}}
          btnText={"Let's go"}
          width={(SIZES.width - 50) / 2.2}
          borderColor={COLORS.red}
          backgroundColor={COLORS.red}
          textColor={COLORS.white}
          borderWidth={0}
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
