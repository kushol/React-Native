import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import AppTextInput from '../component/AppTextInput';
import AppColor from '../config/AppColor';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from '../component/AppButton';
import {Formik} from 'formik';
import AppScreen from '../component/AppScreen';

function LoginScreen(props) {
    return (
        <AppScreen style={styles.container}>
        <View>
            <MaterialCommunityIcons name='cake' size={50}/>
        </View>
        
        <Formik 
           initialValues={{email:'',password:''}}
           onSubmit = {values => console.log(values)}
           >
            {({handleChange, handleSubmit})=>(
            <>
             
             <View style={styles.textInputContainer}>
                    <AppTextInput 
                        icon='email' 
                        placeholder="Enter your email address" 
                        autoCorrect={false}
                        onChangeText = {handleChange('email')}/>
                    <AppTextInput icon='lock' 
                        placeholder="Enter your password" 
                        autoCorrect={false} 
                        secureTextEntry={true}
                        onChangeText = {handleChange('password')}/>
                </View>
                <AppButton title='Login' style={styles.buttonContainer} onPress={handleSubmit}/>
            </>

            )}
            
            </Formik>
            </AppScreen> 

        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColor.otherColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputContainer:{
        marginTop:20,
        padding:30,
    },
    buttonContainer:{
        marginTop: 400,
        height: 100,
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 30,
    }
})
export default LoginScreen;