// @format
import React, { ReactElement } from 'react';
import { Layout } from '@ui-kitten/components';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TripCard from '../trip/TripCard';
import { Trip } from '../trip/types';

const HistoryScreen = (): ReactElement => {
    const trips = useSelector((state: any) => state.history.data);
    const tripsList =
        trips.length > 0
            ? trips.map((trip: Trip) => <TripCard key={trip.id} trip={trip} />)
            : null;

    return (
        <Layout style={styles.layout}>
            <ScrollView style={styles.scroll}>{tripsList}</ScrollView>
        </Layout>
    );
};

export default HistoryScreen;

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
