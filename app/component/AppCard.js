import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function AppCard({image, title, subtitle}) {
    return (
        <View style={styles.container}>
            <Image source={{uri:image}} style={styles.image}/>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text>{subtitle}</Text>
            </View>           
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image: {
		borderRadius: 10,
		height: 100,
        width:"100%",
	},
    title:{
        fontSize: 24,
		fontWeight: "bold",
    }
})

export default AppCard;