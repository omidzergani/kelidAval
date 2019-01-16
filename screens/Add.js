import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import { withNavigation, NavigationEvents } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Text from '../components/CustomText';
import CustomButton from '../components/CustomButton';

class Add extends Component {
  static navigationOptions = {
    title: '',
    tabBarLabel: false,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="plus" size={18} color={tintColor} style={styles.AddStyle} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      estatePic: [
        {
          key: '1',
          Image: 'https://www.designboom.com/wp-content/uploads/2013/05/abctmahallat08.jpg'
        },
        {
          key: '2',
          Image: 'https://www.designboom.com/wp-content/uploads/2013/05/abctmahallat08.jpg'
        },
        {
          key: '3',
          Image: 'https://www.designboom.com/wp-content/uploads/2013/05/abctmahallat08.jpg'
        },
        {
          key: '4',
          Image: 'https://www.designboom.com/wp-content/uploads/2013/05/abctmahallat08.jpg'
        },
        {
          key: '5',
          Image: 'https://www.designboom.com/wp-content/uploads/2013/05/abctmahallat08.jpg'
        },
        {
          key: '6',
          Image: 'https://www.designboom.com/wp-content/uploads/2013/05/abctmahallat08.jpg'
        },
        {
          key: '7',
          Image: 'https://www.designboom.com/wp-content/uploads/2013/05/abctmahallat08.jpg'
        }
      ]
    };

    this.PopUp = new Animated.Value(0);
  }

  onPress = () => {
    ImagePicker.openPicker({
      width: 1000,
      height: 500,
      cropping: true,
      multiple: true
    }).then(images => console.log(images));
  };
  ImageItemList = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={{ uri: item.Image }} resizeMode={'contain'} />
    </View>
  );

  ShowPopUp = () => {
    this.PopUp.setValue(0);
    Animated.timing(this.PopUp, {
      duration: 500,
      easing: Easing.elastic(1),
      toValue: 600
    }).start();
  };

  ImagePickerOptions = {
    title: 'انتخاب تصویر',
    storageOptions: {
      skipBackUp: true,
      path: 'images'
    }
  };
  render() {
    const top = this.PopUp.interpolate({
      inputRange: [0, 600],
      outputRange: [600, 10]
    });
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ justifyContent: 'center' }}>
          <NavigationEvents onDidFocus={this.ShowPopUp} />
          <Animated.View style={[styles.modal, { top }]}>
            <View
              style={{
                height: '18.5%',
                backgroundColor: '#f2f2f2',
                width: '100%',
                borderRadius: 10,
                flexDirection: 'row'
              }}
            >
              <TouchableOpacity style={styles.listItem} onPress={this.onPress}>
                <Icon name="plus" size={18} color={'#03a3c5'} style={{ marginBottom: 5 }} />
                <Text style={{ fontSize: 10 }}>اضافه کردن عکس</Text>
              </TouchableOpacity>
              <FlatList
                data={this.state.estatePic}
                style={styles.imagePicker}
                horizontal
                stickyHeaderIndices={[0]}
                contentContainerStyle={{ height: 100 }}
                renderItem={this.ImageItemList}
              />
            </View>
          </Animated.View>
        </SafeAreaView>

        <View
          style={{
            backgroundColor: 'rgba(10,10,10,0.8)',
            position: 'absolute',
            width: wp('100%'),
            height: hp('100%'),
            justifyContent: 'center'
          }}
        >
          <CustomButton
            label="دوربین را باز کن"
            color="#f2f2f2"
            style={{
              marginBottom: 0,
              borderTopRightRadius: wp('2.5%'),
              borderTopLeftRadius: wp('2.5%')
            }}
            labelColor="#03a3c5"
            labelSize={12}
          />
          <CustomButton
            label="گالری را بازکن"
            color="#f2f2f2"
            style={{
              marginTop: 1,
              borderBottomRightRadius: wp('2.5%'),
              borderBottomLeftRadius: wp('2.5%')
            }}
            labelColor="#03a3c5"
            labelSize={12}
          />
          <CustomButton
            label="انصراف"
            color="#f2f2f2"
            labelColor="#03a3c5"
            labelSize={12}
            borderRadius={wp('2.5%')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#03a3c5',
    width: '95%',
    height: '97%',
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 10,
    top: 600,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10
  },
  AddStyle: {
    backgroundColor: '#03a3c5',
    padding: 12,
    borderRadius: 12,
    alignSelf: 'center',
    color: 'white',
    paddingLeft: 13,
    paddingRight: 13,
    overflow: 'hidden',
    elevation: 10
  },
  imagePicker: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    borderRadius: 10
  },
  listItem: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,

    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1
    }
  }
});

export default withNavigation(Add);
