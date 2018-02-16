import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import styles from './styles'

const LoginTextInput =(props)=>{
    const {text, secureTextEntry} = props;
    return(
        <View style={styles.container}>
            <Text>{text}</Text>
            <TextInput {...props}/>
        </View>
    )
}

LoginTextInput.propTypes = {
   secureTextEntry: PropTypes.bool
}
export default LoginTextInput;

