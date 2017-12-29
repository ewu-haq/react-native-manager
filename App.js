import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB4MZTd4Hok7TmtOmLBAlg97JBbQwabVWI',
      authDomain: 'react-native-manager-e2294.firebaseapp.com',
      databaseURL: 'https://react-native-manager-e2294.firebaseio.com',
      projectId: 'react-native-manager-e2294',
      storageBucket: '',
      messagingSenderId: '858222036738'
    }

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}