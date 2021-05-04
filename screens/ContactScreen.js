import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Contact from '../components/Contact'

export default class ContactScreen extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.header}>
                    <TouchableOpacity 
                        style={{alignItems: "flex-end", margin: 16}}
                        onPress={this.props.navigation.openDrawer} >
                    <FontAwesome5 name="bars" size={30} color="#161924" />
                    </TouchableOpacity>
                    <Contact />
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    header: {
        flex: 1,
        backgroundColor: "rgba(167, 95, 0, 0.418)",
        marginTop: 20
    }
})