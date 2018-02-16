import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class LoginContainer extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Chat</Text>
            </View>
        )
    }
}

export default LoginContainer;