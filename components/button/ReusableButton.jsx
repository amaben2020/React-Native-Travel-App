import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SIZES } from '../../constants/theme';

const ReusableButton = ({
  onPress,
  textColor,
  btnText,
  borderWidth,
  width,
  backgroundColor,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(borderWidth, width, backgroundColor, borderColor)}
    >
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReusableButton;

const styles = StyleSheet.create({
  btnText: (textColor) => ({
    fontFamily: 'medium',
    fontSize: SIZES.medium,
    color: textColor,
  }),
  btnStyle: (borderWidth, width, backgroundColor, borderColor) => ({
    borderWidth,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: SIZES.small,
    backgroundColor,
    borderColor,
  }),
});
