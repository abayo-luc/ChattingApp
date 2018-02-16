import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Container from '../components/Container/Container';
import LoginTextInput from '../components/TextInput/LoginTextInput';
import Logo from '../components/Logo/Logo';

class Login extends Component {
    render(){
        return(
            <Container >
                <StatusBar transucent={false} barStyle="light-content"/>
                <Text>Chat</Text>
                <Logo/>
                <View>
                    <LoginTextInput text="USANAME"/>
                    <LoginTextInput text="PASSWORD" secureTextEntry={true}/>
                </View>    
            </Container>
        )
    }
}
export default Login;