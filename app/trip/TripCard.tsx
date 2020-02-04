// @format
import React, { ReactElement, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardHeader } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { HouseIcon, PlaneIcon } from '../icons';
import { Trip } from './types';

const TripHeader = (name: string): ReactElement => <CardHeader title={name} />;
const TripFooter = (book: () => void) => {
    return (
        <View style={styles.footer}>
            <Button
                status="success"
                size="small"
                appearance="filled"
                onPress={book}
            >
                Book
            </Button>
        </View>
    );
};

type TripCardProps = {
    trip: Trip;
    navigation: any;
};

const TripCard = ({ trip, navigation }: TripCardProps): ReactElement => {
    const connected = useSelector((state: any) => state.network.connected);
    const { name, rooms, type } = trip;

    const book = useCallback(() => {
        navigation.navigate(`Book`, { id: trip.id, trip });
    }, [navigation, trip]);
    return (
        <Card
            style={styles.card}
            header={() => TripHeader(name)}
            footer={connected ? () => TripFooter(book) : undefined}
        >
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

export default withNavigation(TripCard);

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
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
