import { Text, StyleSheet } from 'react-native';
import React from 'react';

const ReusableText = ({ title, family, size, color, align }) => {
  return (
    <Text style={styles.textStyle(family, size, color, align)}>{title}</Text>
  );
};

export default ReusableText;

export const styles = StyleSheet.create({
  textStyle: (family, size, color, align) => ({
    fontFamily: family,
    fontSize: size,
    color,
    textAlign: align,
  }),
});
