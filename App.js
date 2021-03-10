//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';



import AppButton from './app/component/AppButton';
import AppText from './app/component/AppText';
import AppColor from './app/config/AppColor';

export default function App() {
  return (
    <View style={styles.container}>
      <AppButton title="Click here"></AppButton>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.otherColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
