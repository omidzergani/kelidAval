import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { connect } from 'react-redux';
import { toMainScreen } from '../navigation/To';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    setTimeout(this.NavigateToMain, 1000);
  };

  NavigateToMain = () => {
    this.props.navigation.replace(toMainScreen());
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#03a3c5" barStyle="light-content" />
        <Image
          source={{ uri: 'mainLogo' }}
          style={{ width: 150, height: 150, opacity: 0.7 }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03a3c5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  LogoBox: {
    flex: 4,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  loadingSpinner: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  store: {
    ...state,
    nav: state.nav
  }
});

export default connect(mapStateToProps)(SplashScreen);
