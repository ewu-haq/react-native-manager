import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';
import LogoScreen from './src/components/LogoScreen';
import { LOGO_SCREEN, LOG_IN_SCREEN, EMPLOYEE_LIST_SCREEN, ADD_EMPLOYEE_SCREEN  } from './src/values/screens';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

const AppWithNavigationState = StackNavigator({
  LOGO_SCREEN: { screen: LogoScreen },
  LOG_IN_SCREEN: { screen: LoginForm },
  EMPLOYEE_LIST_SCREEN: { screen: EmployeeList },
  ADD_EMPLOYEE_SCREEN: { screen: EmployeeCreate },
});

class App extends React.Component {
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
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;