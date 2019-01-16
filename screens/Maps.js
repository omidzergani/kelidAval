import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationActions } from 'react-navigation';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';
import EstateMarker from '../components/EstateMarker';
import FlatJsonApi from './flatListData';

Mapbox.setAccessToken(
  'pk.eyJ1Ijoib21pZHplcmdhbnkiLCJhIjoiY2pxZTVzM3cwM2MzcTQ4cWhrZTZvdTM5YiJ9.by3hGClDPObExyy8tYGfuw'
);

class Maps extends Component {
  static navigationOptions = () => ({
    title: 'نقشه',
    headerStyle: {
      height: 50,
      backgroundColor: 'white'
    },
    headerTitleStyle: {
      width: '100%',
      alignContent: 'center'
    },
    tabBarIcon: ({ tintColor }) => <Icon name="map" color={tintColor} size={16} />
  });

  constructor(props) {
    super(props);
    this.state = {
      isPremisionGranted: false,
      isFetchingPremission: true,
      PermissionDenied: false,
      maoLoading: true,
      latitude: 48.6759,
      longitude: 31.313327,
      data: []
    };
    this.MapProps = {};
  }
  componentWillMount() {
    // Mapbox.requestAndroidLocationPermissions();

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.setState({
          ...this.state,
          latitude: coords.latitude,
          longitude: coords.longitude,
          data: FlatJsonApi
        });
      },
      ({ PERMISSION_DENIED }) => {
        if (PERMISSION_DENIED === 1) {
          this.setState({ PermissionDenied: true });
        }
      }
    );
  }

  navigateToItem = item => {
    this.props.navigation.navigate(
      NavigationActions.navigate({
        routeName: 'estateScreen',
        params: { ...item },
        action: NavigationActions.navigate({ routeName: 'itemPage' })
      })
    );
  };
  get Markers() {
    const mark = this.state.data.map(e => (
      <EstateMarker
        id={e.key.toString()}
        key={e.key.toString()}
        cordinate={e.cordinate}
        onPress={() => this.navigateToItem(e)}
      />
    ));

    return mark;
  }
  get MapView() {
    const { latitude, longitude } = this.state;
    return (
      <Mapbox.MapView
        ref={mapProps => {
          this.MapProps = mapProps;
        }}
        styleURL={Mapbox.StyleURL.Light}
        zoomLevel={10}
        style={styles.map}
        showUserLocation
        centerCoordinate={[longitude, latitude]}
        attributionEnabled={false}
        logoEnabled={false}
        compassEnabled
        rotateEnabled={false}
      >
        {this.Markers}
      </Mapbox.MapView>
    );
  }
  render() {
    const { PermissionDenied } = this.state;
    if (!PermissionDenied) {
      return <SafeAreaView style={styles.container}>{this.MapView}</SafeAreaView>;
    } else if (PermissionDenied) {
      return <View />;
    }
  }
}

//styles of this Intor Component

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

const mapStateToProps = state => ({
  ...state,
  store: state.nav
});

export default connect(mapStateToProps)(Maps);
