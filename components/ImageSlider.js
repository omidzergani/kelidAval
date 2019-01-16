import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeSlideImage: 0
    };
  }

  componentWillMount() {
    this.setState({ ...this.state, data: (this.props.images ? this.props.images : null) });
  }
  
  get pagination() {
    const { data, activeSlideImage } = this.state;

    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlideImage}
        dotStyle={{
          width: 5,
          height: 10,
          borderRadius: 5
        }}
        containerStyle={styles.pagination}
        inactiveDotOpacity={0.8}
        inactiveDotScale={0.6}
        dotColor="#03a3c5"
        inactiveDotColor="white"
      />
    );
  }
  
  ImagesToRender = ({ item }) => (
    <View style={styles.ImageViewItem}>
      <Image
        style={styles.ImageViewItemImage}
        source={{ uri: item, cache: 'force-cache' }}
        // Ios only defaultSource={{ uri: 'kelidAvalBlue' }}
        fadeDuration={1000}
        resizeMode="cover"
      />
    </View>
  );
  render() {
    return (
      <View>
        <Carousel
                  ref={c => {
                    this.carousel = c;
                  }}
                  data={this.state.data}
                  style={styles.slider}
                  renderItem={this.ImagesToRender}
                  sliderWidth={wp('100%')}
                  itemWidth={wp('100%')}
                  enableSnap
                  layoutCardOffset={10}
                  onSnapToItem={index => this.setState({ ...this.state, activeSlideImage: index })}
        />
        {this.pagination}   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slider: {
    backgroundColor: 'black'
  },
  ImageViewItem: {
    width: '100%',
    height: hp('40%')
  },
  ImageViewItemImage: {
    width: '100%',
    height: '100%'
  },
  pagination: {
    position: 'absolute',
    top: hp('30%'),
    left: wp('35%'),
    zIndex: 2
  }
});
