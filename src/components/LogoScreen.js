import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { LOG_IN_SCREEN } from '../values/screens';
import { NavigationActions } from 'react-navigation';

class LogoScreen extends Component {
    state = { 

    }

    componentDidMount() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
            NavigationActions.navigate({ routeName: LOG_IN_SCREEN }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View>
                <Text> logo here </Text>
            </View>
        );
    }
}

export default LogoScreen;