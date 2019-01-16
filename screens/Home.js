import React, { Component } from 'react';
import { FlatList, RefreshControl, StatusBar, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import FlatData from './flatListData.json';
import HomeSlider from '../components/HomeSlider';
import ListItemCard from '../components/listItemCard';
import Loading from '../components/Loading';
import { toEstateScreen } from '../navigation/To';

class Home extends Component {
  static navigationOptions = {
    title: 'کلید اول',
    tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} size={16} />
  };

  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      sliderData: [],
      isControlRefreshing: false,
      dataLoaded: false
    };
  }

  async componentWillMount() {
    await this.getFlatListData();
    this.Slider = () => (
      <HomeSlider navigation={this.props.navigation} SliderItemData={this.state.sliderData} />
    );
  }

  getFlatListData = async () => {
    setTimeout(
      () => this.setState({ listData: FlatData, sliderData: FlatData, dataLoaded: true }),
      1000
    );
  };

  getFlatListDataWithRefresh = async () => {
    this.setState({ ...this.state, isControlRefreshing: true });
    setTimeout(
      () =>
        this.setState({
          ...this.state,
          listData: FlatData,
          sliderData: FlatData,
          isControlRefreshing: false
        }),
      2000
    );
  };

  navigateToItemPage = item => {
    this.props.navigation.navigate(toEstateScreen(item));
  };

  get homeList() {
    return (
      <FlatList
        data={this.state.listData}
        renderItem={({ item }) => (
          <ListItemCard item={item} onPress={() => this.navigateToItemPage(item)} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isControlRefreshing}
            title="بارگزاری مجدد"
            tintColor="#03a3c5"
            titleColor="black"
            renderToHardwareTextureAndroid
            onRefresh={this.getFlatListDataWithRefresh}
          />
        }
        initialNumToRender={20}
        renderToHardwareTextureAndroid
        windowSize={20}
        refreshing={this.state.isControlRefreshing}
        keyExtractor={item => item.key.toString()}
        ListHeaderComponent={this.Slider}
        enableSnap
        style={{ backgroundColor: 'white' }}
        extraData={this.state.listData}
      />
    );
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        {this.state.dataLoaded ? this.homeList : <Loading />}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  store: {
    ...state,
    navigation: state.nav
  }
});

export default connect(mapStateToProps)(Home);
