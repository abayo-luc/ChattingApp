import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Container from '../components/Container/Container';
import LoginTextInput from '../components/TextInput/LoginTextInput';

class Login extends Component {
    render(){
        return(
            <Container>
                <StatusBar transucent={false} barStyle="light-content"/>
                <LoginTextInput text="USANAME"/>
                <LoginTextInput text="PASSWORD" secureTextEntry={true}/>
            </Container>
        )
    }
}

export default Login;