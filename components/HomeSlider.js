import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import Text from '../components/CustomText';
import { toEstateScreen } from '../navigation/To';

class HomeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.setState({ data: this.props.SliderItemData });
  }

  navigateToItemScreen = item => this.props.navigation.replace(toEstateScreen(item));

  ItemToRender = ({ item }) => (
    <TouchableHighlight
      onPress={() => this.navigateToItemScreen(item)}
      underlayColor={'transparent'}
      activeOpacity={1}
    >
      <View style={styles.sliderItem}>
        <View style={styles.badgeView}>
          <Text style={styles.badge}>ملک ویژه</Text>
        </View>
        <Image
          source={{ uri: item.homePic[0], cache: 'force-cache' }}
          style={styles.sliderItemBackground}
          // Ios only defaultSource={{ uri: 'kelidAvalBlue' }}
          fadeDuration={1000}
          resizeMode="cover"
        />
      </View>
    </TouchableHighlight>
  );

  render() {
    if (this.state.data) {
      return (
        <Carousel
          ref={c => {
            this.carousel = c;
          }}
          data={this.state.data}
          style={styles.slider}
          renderItem={this.ItemToRender}
          sliderWidth={wp('100%')}
          itemWidth={wp('90%')}
          contentContainerCustomStyle={styles.slider}
          layout={'stack'}
          enableSnap
          nestedScrollEnabled
          layoutCardOffset={7}
          invertStickyHeaders
          removeClippedSubviews={false}
        />
      );
    }
    return (
      <View style={styles.slider}>
        <Image
          source={{ uri: 'mainlogo', height: 130, width: 130 }}
          style={{ tintColor: '#03a3c5' }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    backgroundColor: 'white',
    padding: 5,
    zIndex: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: hp('40%')
  },
  sliderItem: {
    width: wp('100%'),
    height: hp('40%'),
    elevation: 2
  },
  sliderItemBackground: {
    width: '90%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: wp('2%')
  },
  badgeView: {
    height: '10%',
    width: '20%',
    backgroundColor: 'rgba(255, 76, 76, 0.7)',
    borderBottomStartRadius: wp('2%'),
    borderBottomEndRadius: wp('2%'),
    zIndex: 2,
    alignSelf: 'center',
    right: -wp('25%'),
    justifyContent: 'center'
  },
  badge: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    fontSize: wp('4%'),
    alignSelf: 'flex-end'
  }
});

const mapStateToprops = state => ({
  store: state.nav
});

export default connect(mapStateToprops)(HomeSlider);
