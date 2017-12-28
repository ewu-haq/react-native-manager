import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { CardSection, Card, Button, Input, Spinner } from './common/index';
export default class LoginForm extends React.Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress() {
        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this))
            });
    }

    onLoginFailed() {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderLogInButton() {
        if (this.state.loading){
            return <Spinner size='small'/>
        }
        else {
            return <Button onPress={this.onButtonPress.bind(this)}> Log In </Button>
        }
    }

    render() {
        return (
            <Card>
                <CardSection> 
                    <Input
                        placeholder='a@mail.com'
                        label='Email'
                        value= {this.state.email}
                        onChangeText={email => this.setState({ email: email, error: '' })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder='password'
                        label='Password'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} 
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}> 
                    {this.state.error} 
                </Text>

                <CardSection>
                    {this.renderLogInButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf:'center'
    }
}