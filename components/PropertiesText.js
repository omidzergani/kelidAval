import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Text from '../components/CustomText';

const PropertiesText = ({ topic, mainText, marginTop, borderBottomHide, dirRight }) => (
  <View
    style={[
      styles.container,
      {
        marginTop: marginTop || wp('1.25%'),
        borderBottomWidth: borderBottomHide ? 0 : StyleSheet.hairlineWidth
      }
    ]}
  >
    <Text style={styles.topic}>{topic} :</Text>
    <Text
      style={[
      styles.mainText,
      { textAlign: dirRight ? 'right' : 'left' }
      ]} numberOfLines={2}
    >
      {mainText}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('10%'),
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomColor: 'gray',
    paddingLeft: wp('1.25%')
  },
  topic: {
    flex: 1,
    color: '#a2a2a2',
    textAlign: 'right',
    marginLeft: wp('2.5%'),
    fontSize: wp('3.5%')
  },
  mainText: {
    textAlign: 'left',
    flex: 3,
    marginLeft: wp('1.25%'),
    fontSize: wp('3%')
  }
});
export default PropertiesText;
