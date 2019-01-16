import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { connect } from 'react-redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {
  Home,
  Maps,
  UserInfo,
  Search,
  Add,
  estateScreenComponent,
  SplashScreen,
  SignIn,
  SignUp
} from '../screens';

YellowBox.ignoreWarnings(['Require cycle:']);
export const Middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
const AppTabNavigator = createBottomTabNavigator(
  {
    Maps,
    Home,
    UserInfo,
    Search,
    Add
  },
  {
    order: ['UserInfo', 'Maps', 'Add', 'Search', 'Home'],
    initialRouteName: 'Home',
    swipeEnabled: true,
    animationEnabled: true,
    navigationOptions: {
      headerBackTitle: 'بازگشت'
    },
    tabBarOptions: {
      style: {
        height: hp('9%'),
        borderWidth: 0,
        borderTopColor: 'white'
      },
      showLabel: false,
      activeTintColor: '#03a3c5'
    },
    lazy: true
  }
);
const SplashAndIntro = createSwitchNavigator(
  { SplashScreen },
  {
    initialRouteName: 'SplashScreen',

    navigationOptions: {
      header: null
    }
  }
);

const LoginScreen = createSwitchNavigator(
  {
    SignIn
  },
  {
    navigationOptions: {
      headerTransparent: true,
      headerTintColor: '#03a3c5',
      headerBackTitle: 'بازگشت'
    }
  }
);

const SignUpScreen = createSwitchNavigator(
  {
    SignUp
  },
  {
    navigationOptions: {
      headerTransparent: true,
      headerTintColor: '#03a3c5',
      headerBackTitle: 'بازگشت'
    }
  }
);

const AppStackNavigator = createStackNavigator(
  {
    Main: {
      screen: AppTabNavigator,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
        headerBackTitle: 'بازگشت'
      }
    },
    estateScreen: {
      screen: estateScreenComponent,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('title'),
        headerTintColor: '#03a3c5',
        headerBackTitle: 'بازگشت'
      })
    },
    LoginScreen,
    SignUpScreen,
    SplashAndIntro
  },
  {
    initialRouteName: 'SplashAndIntro',
    navigationOptions: {
      headerBackTitle: 'بازگشت'
    },
    defaultNavigationOptions: {
      headerBackTitle: 'بازگشت'
    }
  }
);

export const MainApplication = createAppContainer(AppStackNavigator);
class Navigation extends Component {
  render() {
    return <MainApplication />;
  }
}
const mapStateToProps = state => ({
  store: {
    ...state,
    navigation: state.nav
  }
});

export default connect(mapStateToProps)(Navigation);
