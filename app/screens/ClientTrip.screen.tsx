// @format
import React, { ReactElement } from 'react';
import { Layout } from '@ui-kitten/components';
import { ScrollView, StyleSheet } from 'react-native';
import TripCard from '../trip/TripCard';
import withTrips from '../trip/withTrips';
import { Trip } from '../trip/types';

type Props = {
    trips: Trip[];
};

const ClientTripScreen = ({ trips }: Props): ReactElement => {
    const tripsList =
        trips.length > 0
            ? trips.map(trip => <TripCard key={trip.id} trip={trip} />)
            : null;

    return (
        <Layout style={styles.layout}>
            <ScrollView style={styles.scroll}>{tripsList}</ScrollView>
        </Layout>
    );
};

export default withTrips(ClientTripScreen);

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        paddingTop: 48,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    scroll: {
        flex: 1,
        paddingHorizontal: 24,
        width: '100%'
    }
});
