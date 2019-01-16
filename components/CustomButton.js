import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Text from '../components/CustomText';

const CustomButton = ({
  width = wp('71.5%'),
  height = wp('15%'),
  label,
  color = '#03a3c5',
  style,
  onPress,
  borderRadius,
  disabled,
  labelColor = 'white',
  labelSize,
  align = 'center'
}) => (
  <TouchableOpacity
    style={[
      styles.Button,
      style,
      {
        width,
        height,
        backgroundColor: color,
        borderRadius,
        opacity: disabled ? 0.5 : 1,
        alignSelf: align
      }
    ]}
    activeOpacity={0.8}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.ButtonLabel, { color: labelColor, fontSize: labelSize }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  Button: {
    borderRadius: wp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp('1.25%')
  },
  ButtonLabel: {
    color: 'white',
    // ios only
    fontFamily: 'IRANSansMobile',
    fontWeight: 'bold'
    //android
    //fontFamily: 'IRANSansMobile_Bold',
    //ios only
  }
});

export default CustomButton;
