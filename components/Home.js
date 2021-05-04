import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <Image 
            style={styles.image}
            source={require('../assets/images/home/home-bg.jpg')} />
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                    CLASSIC NEVER DIES
                </Text>
                <Text style={{paddingTop: 10, textAlign: 'justify'}}>
                    Sure, there are more new model cars out there that have outstanding technology. But what makes classic cars more fun to drive? 
                    Because it simply brings us back to the good old days. It brings memory and having classic cars is much more achievement and 
                    fulfilling than owning some top new model cars. Classic Cars will never be boring. So if you're looking for a classic ride, we got you.
                    We'll show you some of the best classic rides you can get on this date!
                </Text>
            </View>
            <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.image}
            source={require('../assets/images/home/1940.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                    1940's
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/home/1950.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                    1950's
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/home/1960.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                    1960's
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/home/1970.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                    1970's
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/home/1980.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                    1980's
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/home/1990.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                    1990's
                </Text>
            <Image 
            style={styles.image}
            source={require('../assets/images/home/2000.jpg')} />
                <Text style={{paddingTop: 10, padding: 30}}>
                    2000's
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