import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const ComponentsScreen = () => {
    return (
        <View>
            <Text style= {styleSheet.textStyle}>GEtting Started with react native.</Text>
            <Text style= {styleSheet.subHeader}>Hi there this is vikee!</Text>
        </View>
    );
}

const styleSheet = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize : 20
    }
})

export default ComponentsScreen;