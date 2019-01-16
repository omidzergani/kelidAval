import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers';
import { MainApplication } from './navigation';
import homeReducer from './reducers/homeReducer';

// geting the mainNavigator and makeing navigation reducer
const navReducer = createNavigationReducer(MainApplication);
// combining all reducers
const Reducers = combineReducers({ nav: navReducer, homeReducer });
// making a middleware for navigator
const middleWare = createReactNavigationReduxMiddleware('root', state => state.nav);
// reduxify navigator
const Main = reduxifyNavigator(MainApplication, 'root');
// maping the state to props
const mapStateToProps = state => ({ state: state.nav });
// connect the Main to redux
const Navigation = connect(mapStateToProps)(Main);
// make the store
const store = createStore(Reducers, applyMiddleware(middleWare));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
