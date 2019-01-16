import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import GroupButton from '../components/GroupButton';
import CustomButton from '../components/CustomButton';
// import PickerButton from '../components/PickerButton';

export default class Search extends Component {
  static navigationOptions = {
    title: 'جستوجو',
    tabBarIcon: ({ tintColor }) => <Icon name="search" size={16} color={tintColor} />
  };

  constructor(props) {
    super(props);
    this.state = {
      cyties: [
        { key: 0, value: 'همه شهر ها', label: 'همه شهر ها' },
        { key: 1, value: 'تهران', label: 'تهران' },
        { key: 2, value: 'اهواز', label: 'اهواز' },
        { key: 3, value: 'یزد', label: 'یزد' },
        { key: 4, value: 'مشهد', label: 'مشهد' },
        { key: 5, value: 'شیراز', label: 'شیراز' },
        { key: 6, value: 'اصفهان', label: 'اصفهان' }
      ],
      Sell: true,
      city: 'همه شهر ها',
      choosedCity: 'همه شهر ها',
      chooseCity: false
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.filterView}>
        <View style={styles.logoView}>
          <Image source={{ uri: 'mainLogo' }} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.selectorView}>
          <GroupButton
            title={['  خرید / فروش', 'رهن / اجاره']}
            FirstBtnActive={this.state.Sell}
            SecondBtnActive={!this.state.Sell}
            FirstBtnPress={() => this.setState({ ...this.state, Sell: true })}
            SecondBtnPress={() => this.setState({ ...this.state, Sell: false })}
          />
          <CustomButton
            label={'همه شهر ها'}
            onPress={() => {
              if (this.PickerProps.isOpen === false) {
                this.PickerProps.showPicker();
                console.log(this.PickerProps);
              }
            }}
            borderRadius={wp('2.5')}
          />
          <CustomButton label={'همه ی محدود ها'} borderRadius={wp('2.5')} />
          <CustomButton label={'همه موارد (معامله)'} borderRadius={wp('2.5')} />

          <CustomButton label="جستجو کن" color="orange" borderRadius={wp('2.5')} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  filterView: {
    height: '100%',
    justifyContent: 'center'
  },
  main: {
    flex: 1
  },
  logoView: {
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    tintColor: '#03a3c5',
    alignSelf: 'center'
  },
  selectorView: {
    alignSelf: 'center'
  }
});
