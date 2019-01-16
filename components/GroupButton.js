import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Text from '../components/CustomText';

const GroupButton = ({
  width = '100%',
  activeColor = '#03a3c5',
  inActiveColor = 'gray',
  title,
  display = 'row',
  align = 'center',
  FirstBtnPress = () => true,
  SecondBtnPress = () => true,
  FirstBtnActive = true,
  SecondBtnActive = false
}) => (
  <View style={{ width, flexDirection: display, alignItems: align }}>
    <TouchableOpacity
      style={[styles.selectBtn, { backgroundColor: FirstBtnActive ? activeColor : inActiveColor }]}
      onPress={FirstBtnPress}
    >
      <Icon style={styles.Icon} name="circle" color="white" size={13} solid={FirstBtnActive} />
      <Text style={styles.BtnTitle}>{title[0]}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.selectBtn, { backgroundColor: SecondBtnActive ? activeColor : inActiveColor }]}
      onPress={SecondBtnPress}
    >
      <Icon style={styles.Icon} name="circle" color="white" size={13} solid={SecondBtnActive} />
      <Text style={styles.BtnTitle}>{title[1]}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  selectBtn: {
    width: wp('35%'),
    height: 50,
    borderRadius: wp('2.5%'),
    alignItems: 'center',
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    marginTop: wp('1.25%'),
    marginBottom: wp('1.25%'),

    flexDirection: 'row'
  },
  BtnTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    width: '100%'
  },
  Icon: {
    position: 'absolute',
    right: wp('2.5%')
  }
});

export default GroupButton;
