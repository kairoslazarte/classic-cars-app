import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Component2000() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                    2000's BEST CARS
                </Text>
            </View>

            <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.image}
            source={require('../assets/images/2000/4.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                LS-VTEC 2000 Honda Civic Hatchback
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/2000/1.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                2004 Toyota Prius
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/2000/2.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                2006 BMW 3-Series
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/2000/3.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                2009 Chevrolet Corvette ZR1
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