import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function About() {
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>ABOUT US</Text>
                <Text style={{textAlign: 'justify'}}>
                    Us, the founders of Classic Cars are also enthusiast about Old Classic Cars. We started this movement in our garage.
                    And we build and restore many classic cars that's why we know what classic cars are easy to own and easy to maintain
                    if you just have a heart for it. Then some of our friends asked for some suggestions what Classic Cars to buy that is 
                    easy to maintain and also friendly to the budget. Until we got kinda famous in our place and everyone kept messaging us
                    and asking for advices because they are all curious how our classic cars is still up and running and can still keep up with 
                    the newer models on this date. That's when we started this movement to share everyone what knowledge we acquired from building 
                    owning a Classic Car ourselves.
                </Text>
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