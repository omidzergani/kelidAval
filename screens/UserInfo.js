import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';
import { toLoginScreen } from '../navigation/To';

export default class UserInfo extends Component {
  static navigationOptions = {
    title: 'کاربر',
    tabBarIcon: ({ tintColor }) => <Icon name="user" color={tintColor} size={20} />
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <CustomButton
            label="ورود /ثبت نام"
            style={styles.firstBtn}
            color="#0383c5"
            onPress={() => this.props.navigation.navigate(toLoginScreen())}
          />
          <CustomButton label="علاقه مندی ها" style={styles.middleBtn} />
          <CustomButton label="تماس با پشتیبانی" style={styles.middleBtn} />
          <CustomButton label="خروج از کانت" style={styles.lastBtn} disabled color="red" />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignContent: 'flex-start',
    justifyContent: 'center',
    height: hp('100%')
  },
  firstBtn: {
    borderTopLeftRadius: wp('2.5%'),
    borderTopRightRadius: wp('2.5%'),
    margin: StyleSheet.hairlineWidth
  },
  middleBtn: {
    margin: StyleSheet.hairlineWidth
  },
  lastBtn: {
    borderBottomLeftRadius: wp('2.5%'),
    borderBottomRightRadius: wp('2.5%'),
    margin: StyleSheet.hairlineWidth
  }
});
