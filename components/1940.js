import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Component1940() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                    1940's BEST CARS
                </Text>
            </View>

            <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.image}
            source={require('../assets/images/1940/1.jpeg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                    1941 Pontiac Streamliner
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1940/2.jpeg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                Figoni and Falaschi Delahaye 135 MS 'Narval' (1946)
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1940/3.jpeg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                Alfa Romeo 6C 2500 Freccia d’Oro / Sport Coupe / Competizione (1946)
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1940/4.jpeg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1946 Triumph 1800 Roadster
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