import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';
import AppColor from '../config/AppColor';

function AppText({children}) {
    return (
  
        <Text style={styles.text}> {children} </Text>
    );
}

export default AppText;

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Cochin',
        color:AppColor.white,
    }

})