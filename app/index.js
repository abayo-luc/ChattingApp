import React from 'react';
import {View, Text} from 'react-native';
import Login from './screens/Login'
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $primaryBlue: '#3385ff',
})

export default () => <Login/>;