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

const ClientScreen = ({ trips }: Props): ReactElement => {
    const tripsList =
        trips.length > 0
            ? trips.map(trip => (
                  <TripCard
                      key={trip.id}
                      id={trip.id}
                      name={trip.name}
                      rooms={trip.rooms}
                      type={trip.type}
                      status={trip.status}
                  />
              ))
            : null;

    return (
        <Layout style={styles.layout}>
            <ScrollView style={styles.scroll}>{tripsList}</ScrollView>
        </Layout>
    );
};

export default withTrips(ClientScreen);

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 24,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    scroll: {
        flex: 1,
        width: '100%'
    }
});
