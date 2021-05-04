import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Component1970() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                    1970's BEST CARS
                </Text>
            </View>

            <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.image}
            source={require('../assets/images/1970/1.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1970 Ford Mustang Boss 302
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1970/2.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1970 Dodge Challenger
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1970/3.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1970 Chevrolet Chevelle SS
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1970/4.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1970 AMC Rebel ''The Machine''
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