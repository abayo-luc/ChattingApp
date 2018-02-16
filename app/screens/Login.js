import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import LoginContainer from '../components/LoginContainer/LoginContainer';


class Login extends Component {
    render(){
        return(
            <View>
                <StatusBar transucent={false} barStyle="light-content"/>
                <LoginContainer/>
            </View>
        )
    }
}

export default Login;