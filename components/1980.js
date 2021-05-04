import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Component1980() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                    1980's BEST CARS
                </Text>
            </View>

            <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.image}
            source={require('../assets/images/1980/1.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1985-1992 Chevrolet Camaro IROC-Z
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1980/2.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1984-1991 Audi 5000 and 100
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1980/3.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1981-1992 Toyota Cressida
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/1980/4.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                1981-1984 Nissan Maxima (810)
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