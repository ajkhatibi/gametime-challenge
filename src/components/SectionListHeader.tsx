import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    type: string;
}

export const SectionListHeader = (props: Props) => {
    const title = props.type.charAt(0).toLocaleUpperCase() + props.type.slice(1);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
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