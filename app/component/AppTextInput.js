import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Constants from 'expo-constants';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={27}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey',
        flexDirection:'row',
        marginTop: Constants.statusBarHeight,
        borderRadius: 25,
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
        width: '100%',
    },
    textInput:{
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Cochin',

    }
    
})

export default AppTextInput;