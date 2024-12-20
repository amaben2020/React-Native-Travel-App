import { Image, StyleSheet } from 'react-native';
import React from 'react';

const NetworkImage = ({ source, width, height, radius }) => {
  return (
    <Image
      source={{
        uri: source,
      }}
      style={styles.image(width, height, radius)}
      width={width}
      height={height}
      borderRadius={radius}
      resizeMode="cover"
    />
  );
};

export default NetworkImage;

const styles = StyleSheet.create({
  image: (width, height, radius) => ({
    width,
    height,
    borderRadius: radius,
  }),
});
