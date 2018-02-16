import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const LoginTextInput =(props)=>{
    const {text, secureTextEntry} = props;
    return(
        <View style={{paddingTop: 20}}>
            <Text>{text}</Text>
            <TextInput {...props}/>
        </View>
    )
}

LoginTextInput.propTypes = {
   secureTextEntry: PropTypes.bool
}

export default LoginTextInput;

