import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SectionListHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.type.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#272727",
        flexDirection: 'row',
        alignItems: 'center',
        height: 25,
        paddingHorizontal: 20
    },
    text: {
        color: "#8b8b8b",
        fontSize: 12,
        fontWeight: 'bold'
    }
})