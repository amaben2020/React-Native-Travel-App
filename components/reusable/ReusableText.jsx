import { Text, StyleSheet } from 'react-native';
import React from 'react';

const ReusableText = ({ title, family, size, color }) => {
  return <Text style={styles.textStyle(family, size, color)}>{title}</Text>;
};

export default ReusableText;

export const styles = StyleSheet.create({
  textStyle: (family, size, color) => ({
    fontFamily: family,
    fontSize: size,
    color,
  }),
});
