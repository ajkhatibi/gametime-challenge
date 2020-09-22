import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, SectionList, Text } from 'react-native';
import { SearchBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { queryShows } from '../actions';
import { storeInterface } from '../reducers';

export default function Main() {
    const [query, setQuery] = useState("")
    const state = useSelector((state: storeInterface) => state.app);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(queryShows(query))
    }, [query])

    const _renderSectionHeader = ({ section }) => {
        console.log('hi', section);
        return (
            <Text style={{ color: 'white' }}>hi</Text>
        )
    }
    const _renderItems = ({ items }) => {
        return (
            <Text style={{ color: 'white' }}>bye</Text>
        )
    }
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>
                <SearchBar value={query} onChangeText={(text) => setQuery(text)} />
                <SectionList
                    renderItem={_renderItems}
                    renderSectionHeader={_renderSectionHeader}
                    sections={state.data}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});