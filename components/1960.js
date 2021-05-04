import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Component1960() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                    1960's BEST CARS
                </Text>
            </View>

            <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.image}
            source={require('../assets/images/1960/1.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1960 Austin Mini
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1960/2.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1961 Jaguar XK-E
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1960/3.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1963 Chevrolet Corvette Sting Ray
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1960/4.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1964 Pontiac GTO
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