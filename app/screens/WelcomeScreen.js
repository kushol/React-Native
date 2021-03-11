import React from 'react';
import { StyleSheet, ImageBackground, Platform, View } from 'react-native';
import AppScreen from '../component/AppScreen';
import AppText from '../component/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColor from '../config/AppColor';
import AppButton from '../component/AppButton';



const blurRadiusValue = Platform.OS === 'android' ? 7 : 6;

function WelcomeScreen(props) {
    return (
      <AppScreen>
          <ImageBackground source={require("../assets/background.jpg")} style={styles.background} blurRadius={blurRadiusValue}>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons name= 'cake' size={68} color={AppColor.white}/> 
                <AppText>Welcome to WoodenSpoon</AppText>  
            </View>     
            <View style={styles.buttonContainer}>
                <AppButton title='Login'></AppButton>         
                <AppButton title='Register' color='secondaryColor'></AppButton>         
            </View>          
          </ImageBackground>
      </AppScreen>  
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
    },
    welcomeContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    buttonContainer:{
        marginTop: 350,
        width: '50%',
        height: 100,
        justifyContent: 'space-between',
        alignContent: 'center',

        

    }    
})

export default WelcomeScreen;