
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
import AppColor from '../config/AppColor';

function AppButton({title, color='primaryColor'}) {
    return (
      <TouchableOpacity>   
        <View style={[styles.button, {backgroundColor:AppColor[color]}]}>
            <Text style={styles.text}> {title} </Text>
        </View>
      </TouchableOpacity> 
    );
}


const styles = StyleSheet.create({
    button:{
        backgroundColor: AppColor.secondaryColor,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text:{
        color: AppColor.otherColor,
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',

    }
})

export default AppButton;
