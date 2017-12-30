import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import actions from '../actions';
import { Button } from './common';
import { Provider } from 'react-redux';

class EmployeeCreate extends Component {
    state = {  }
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Add new employee',
      });

    render() {
        return (
            <View>
                <Text> hello </Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {...state
        
    };
};

export default connect(mapStateToProps, actions)(EmployeeCreate);