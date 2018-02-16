import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View, Text} from 'react-native';
import styles from './styles';


const Container = ({children})=>(
    <View style={{paddingTop: 22}}>
        {children}
    </View>
);

Container.propTypes = {
    children: PropTypes.any,
};
export default Container;