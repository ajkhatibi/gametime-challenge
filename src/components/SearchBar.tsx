import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export const SearchBar = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.textInput}>
                <Icon name="search1" color="#8b8b8b" size={20} style={styles.iconStyle} />
                <TextInput
                    placeholder="Team, performer or venue..."
                    placeholderTextColor="#8b8b8b"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyling}
                    {...props}
                />
                {props.value ? <Icon onPress={props.cancelButton} name="closecircle" color="#8b8b8b" size={15} /> : null}
            </View>
            <TouchableOpacity onPress={props.cancelButton}>
                <Text allowFontScaling style={styles.cancel}>CANCEL</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: "#262628",
        width: "80%",
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputStyling: {
        color: 'white',
        flex: 1
    },
    iconStyle: {
        marginHorizontal: 5
    },
    cancel: {
        color: "#b0b0b0",
        fontWeight: '600',
        fontSize: 12,
        margin: 10
    }
})