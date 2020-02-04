// @format
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardHeader } from '@ui-kitten/components';
import { HouseIcon, PlaneIcon } from '../icons';
import { Trip } from './types';

const TripHeader = (name: string): ReactElement => <CardHeader title={name} />;

const TripCard = (props: Trip): ReactElement => {
    const { name, rooms, type } = props;
    return (
        <Card style={styles.card} header={() => TripHeader(name)}>
            <View style={styles.info}>
                <HouseIcon />
                <Text style={styles.text}>{rooms}</Text>
            </View>
            <View style={styles.info}>
                <PlaneIcon />
                <Text style={styles.text}>{type}</Text>
            </View>
        </Card>
    );
};

export default TripCard;

const styles = StyleSheet.create({
    card: {
        alignSelf: 'stretch',
        textAlign: 'center',
        marginBottom: 8
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 8
    },
    text: {
        paddingHorizontal: 8,
        fontSize: 24,
        textTransform: 'capitalize'
    }
});
