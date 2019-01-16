import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Animation from 'lottie-react-native';
import home from '../asset/home.json';
// import 
// { 
//   widthPercentageToDP as wp,
//    heightPercentageToDP as hp 
// } 
// from 'react-native-responsive-screen';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.Animation.play();
  }
  render() {
    return (
      <SafeAreaView>
        <View style={[styles.loadingView, this.props.style]}>
          <Animation
            ref={animation => {
              this.Animation = animation;
            }}
            style={{
              width: 100,
              height: 100
            }}
            loop
            source={home}
            speed={this.props.speed || 2}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loadingView: {
    // width: wp('100%'),
    // height: hp('90%'),
    width: '100%',
    height: '100%',
   // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //position: 'absolute'
  }
});
