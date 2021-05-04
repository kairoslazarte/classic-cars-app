import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Component1990() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                    1990's BEST CARS
                </Text>
            </View>

            <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.image}
            source={require('../assets/images/1990/1.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                Porsche 911 Carrera RS
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1990/2.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                Bugatti EB110
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1990/3.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                BMW Z1
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1990/4.png')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                BMW M3 Lightweight
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    wrap: {
        padding: 30
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    image: {
        width: 500,
        height: 185,
        resizeMode: 'contain',
    }
})