import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Log in',
      });

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password, navigation } = this.props;
        this.props.loginUser({email, password, navigation})
    }

    renderError() {
        if(!this.props.error || 0 === this.props.error.length) {
            return (
                <View style={styles.errorViewStyle}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size='large'/>
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
            <CardSection>
                <Input
                    label='Email'
                    placeholder='a@mail.com'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
            </CardSection>
            <CardSection>
                <Input
                    secureTextEntry
                    label='Password'
                    placeholder='password'
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
            </CardSection>

            {this.renderError()}

            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
        );
    }
}

const styles = {
    errorViewStyle: {
        backgroundColor: 'white'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);