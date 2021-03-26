import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AuthNavigator from './navigator/AuthNavigator';
import WelcomeScreen from './screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppCard from './component/AppCard';

const data = [
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png",
		subtitle: "$1,500 / 3,000",
		title: "Panda"
	},
	{
		image:
			"https://images.unsplash.com/photo-1517976487492-5750f3195933?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
		subtitle: "$ 2B / 6B",
		title: "Rocket"
	}
];

export default function App() {
  return (
      <View style={styles.container}>
        <FlatList 
          data={data}
          keyExtractor={(_,index) => index.toString()}
          renderItem={({ item }) => (
            <AppCard
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}/>
              )}
        />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
});
