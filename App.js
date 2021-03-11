import React from 'react';
import { StyleSheet} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  return (
   
    <WelcomeScreen/>
    
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'lightblue',

  }
}

);
