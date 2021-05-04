import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Contact() {
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 30}}>CONTACT US</Text>
                <View style={{paddingLeft: 20, paddingRight: 20}}>
                <Text style={{textAlign: 'justify'}}>
                    Address: Block 9 Lot 17 Windy Avenue Northwind Subdivision Brgy. Nagkaisang Nayon
                </Text>
                <Text style={{paddingTop: 10, textAlign: 'justify'}}>
                    Contact Number: 09063475153
                </Text>
                <Text style={{paddingTop: 10, textAlign: 'justify'}}>
                    Email: ClassicCars@gmail.com
                </Text>
                <Text style={{paddingTop: 10, }}>
                    Facebook: https://www.facebook.com/ClassicCars/
                </Text>
                <Text style={{paddingTop: 10, }}>
                    Website: https://classiccars.com
                </Text>
            </View>
            </View>
        </View>
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