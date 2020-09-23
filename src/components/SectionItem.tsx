import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';

interface Performers {
    hero_image_url: string;
}
interface Props {
    event: {
        name: string;
        category: string;
        datetime_local: Date;
        section_map_id: string;
    },
    performers: Performers[],
    venue: {
        image_url: string;
    },
    type: string;
}
export const SectionItem = (props: Props) => {
    const renderImageOrDate = () => {
        if (props.type === 'performers') {
            const IMAGE = props.performers[0].hero_image_url;
            console.log(IMAGE);
            return (
                <Image source={{ uri: IMAGE }} style={styles.image} />
            )
        } else if (props.type === 'event') {
            const date = moment(props.event.datetime_local).format("MM/DD");
            const day = moment(props.event.datetime_local).format("ddd")
            return (
                <View style={[styles.leftView]}>
                    <Text allowFontScaling style={styles.title}>{date}</Text>
                    <Text allowFontScaling style={styles.subTitle}>{day}</Text>
                </View>
            )
        } else if (props.type === 'venue') {
            const IMAGE = props.venue.image_url;
            return (
                <Image source={{ uri: IMAGE }} style={styles.image} />
            )
        }
    }

    return (
        <View style={styles.container}>
            {renderImageOrDate()}
            <View style={styles.titleView}>
                <Text allowFontScaling style={styles.title}>{props.event.name}</Text>
                <Text allowFontScaling style={[styles.title, styles.subTitle]}>{props.event.category}</Text>
            </View>
            {props.type !== "event" ? <Icon name="right" color="white" size={24} style={styles.iconStyle} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1b1b1b",
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 70
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        width: '80%'
    },
    titleView: {
        margin: 10,
        flex: 1
    },
    subTitle: {
        color: '#8b8b8b',
    },
    leftView: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 60
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 10
    },
    iconStyle: {
        margin: 10
    }
})