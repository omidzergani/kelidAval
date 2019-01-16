import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import flatListData from '../screens/flatListData';
import ImageSlider from '../components/ImageSlider';
import ButtomBar from '../components/ButtomBar';
import PropertiesText from '../components/PropertiesText';
import Loading from '../components/Loading';

class estateScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeSlideImage: 0,
      phoneNumber: '09217086135',
      dataLoaded: false
    };
  }

  componentWillMount() {
    const estate = this.props.navigation.getParam('key');
    const data = flatListData;
    const inforamtion = data.filter(s => {
      if (s.key === estate) {
        return true;
      }
      return false;
    });
    setTimeout(
      () => this.setState({ ...this.state, data: inforamtion[0], dataLoaded: true }),
      3000
    );
  }

  get estateDetail() {
    return (
      <ScrollView>
        <ImageSlider images={this.state.data.homePic} />
        <View style={styles.DetailView}>
          <PropertiesText topic="ادرس" mainText="زیتون خ فیاز بین زمزم و زمرد" borderBottomHide />
          <PropertiesText topic="کد ملک" mainText="12388k" marginTop={hp('-4%')} />
          <PropertiesText topic="متراژ" mainText="۱۲۸ متری" borderBottomHide />
          <PropertiesText topic="سال ساخت" mainText="۱۳۸۵" marginTop={hp('-4%')} />
          <PropertiesText topic="مبلغ رهن" mainText="۱۴,۰۰۰,۰۰۰,۰۰۰" borderBottomHide />
          <PropertiesText topic="مبلغ اجاره" mainText="۱۴,۰۰۰,۰۰۰" marginTop={hp('-4%')} />
          <PropertiesText topic="تعداد طبقه" mainText="۲" borderBottomHide />
          <PropertiesText topic="طبقه" mainText="۱" borderBottomHide marginTop={hp('-4%')} />
          <PropertiesText topic="تعداد واحد" mainText="۴" borderBottomHide marginTop={hp('-4%')} />
          <PropertiesText topic="تعداد اتاق" mainText="۱" marginTop={hp('-4%')} />
          <PropertiesText
            topic=""
            mainText="برای دریافت اطلاعات بیشتر روی علامت تماس را لمس و با مشاور املاک گفتگو کنید"
            dirRight
          />
        </View>
        <ButtomBar phoneNumber={'09217086135'} />
      </ScrollView>
    );
  }
  get renderOnceButtomBar() {
    return <ButtomBar phoneNumber={'09217086135'} />;
  }
  renderOnceSlider = () => <ImageSlider images={this.state.data.homePic} />;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.dataLoaded ? this.estateDetail : <Loading />}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  DetailView: {
    minHeight: hp('50%'),
    width: wp('100%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: wp('1%'),
    paddingBottom: hp('12%')
  }
});

const mapStateToProps = state => ({
  myProps: state.nav
});

export default connect(mapStateToProps)(estateScreenComponent);
