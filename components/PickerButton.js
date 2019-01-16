import React, { Component } from 'react';
import {
  StyleSheet,
  PickerIOS,
  TouchableOpacity,
  View,
  Button,
  Animated,
  Easing
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP } from 'react-native-responsive-screen';
import Text from '../components/CustomText';

const Scroll = new Animated.Value(0);

export class PickerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PickerValue: ''
    };
  }
  get CustomButton() {
    const { width = wp('71.5%'), height = 50, label, color = '#03a3c5', onPress } = this.props;
    return (
      <TouchableOpacity
        style={[styles.Button, { width, height, backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.ButtonLabel}>{label}</Text>
      </TouchableOpacity>
    );
  }

  PcikerShow = () => {
    Scroll.setValue(0);
    Animated.timing(Scroll, {
      duration: 500,
      toValue: 200,
      easing: Easing.in
    }).start();
  };

  PickerHide = () => {
    Scroll.setValue(200);
    Animated.timing(Scroll, {
      duration: 400,
      toValue: 0,
      easing: Easing.in
    }).start();
  };

  render() {
    const { width = wp('71.5%'), height = 50, label, color = '#03a3c5', onPress } = this.props;
    const { PickerData, style, pickerStyle, itemStyle } = this.props;

    // const PickerProps = {
    //   isOpen: false,
    //   PickerSelectedValue: this.state.PickerValue,
    //   showPicker: () => {
    //     this.PcikerShow();
    //     PickerProps.isOpen = true;
    //   },
    //   hidePicker: () => {
    //     this.PickerHide();
    //     PickerProps.isOpen = false;
    //     PickerProps.PickerSelectedValue = PickerProps.PickerValue;
    //   },
    //   selectValue: value => {
    //     this.setState({ PickerValue: value });
    //   }
    // };

    return (
      <View>
        <TouchableOpacity
          style={[styles.Button, { width, height, backgroundColor: color }]}
          onPress={this.props.onPress}
        >
          <Text style={styles.ButtonLabel}>{label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    height: heightPercentageToDP('12.5%'),
    alignSelf: 'center',
    borderRadius: wp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp('1.25%')
  },
  ButtonLabel: {
    color: 'white',
    fontWeight: 'bold'
  },
  Picker: {},
  AnimatedPickerIos: {
    width: wp('100%'),
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2'
  },
  PickerCloseIcon: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'flex-end'
  }
});
