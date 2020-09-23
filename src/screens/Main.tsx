import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, SectionList, View, ScrollView } from 'react-native';
import { SearchBar, SectionListHeader, SectionItem } from '../components';
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

    const renderListItems = (state: Array, type: string) => {
        return (
            <View style={styles.listViewSeperator}>
                <SectionListHeader type={type} />
                {state.data.map((item, index) => {
                    return (
                        <SectionItem {...item} type={type} />
                    )
                })}
            </View>
        )
    }
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>
                <SearchBar value={query} onChangeText={(text) => setQuery(text)} />
                <ScrollView>
                    {renderListItems(state, "event")}
                    {renderListItems(state, "performers")}
                    {renderListItems(state, "venue")}
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    listViewSeperator: {
        marginBottom: 10
    }
});