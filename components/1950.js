import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Component1950() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                    1950's BEST CARS
                </Text>
            </View>

            <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.image}
            source={require('../assets/images/1950/1.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                Ford Thunderbird
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1950/2.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                Chevrolet Corvette (C1)
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1950/3.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                Maserati A6GCS/53
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1950/4.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                BMW 507
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