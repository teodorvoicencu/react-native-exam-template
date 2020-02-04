// @format
import React, { ReactElement } from 'react';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const BookTripScreen = ({ navigation }: any): ReactElement => {
    const trip = navigation.getParam('trip');

    const [value, setValue] = React.useState('');

    return (
        <Layout style={styles.layout}>
            <Text style={styles.title}>{trip.name}</Text>
            <Text style={styles.rooms}>{`Available rooms: ${trip.rooms}`}</Text>
            <Input
                label="Rooms"
                placeholder="Number of rooms to reserve"
                value={value}
                onChangeText={setValue}
                keyboardType="numeric"
            />
            <Button
                style={styles.button}
                status="success"
                size="small"
                appearance="filled"
            >
                Book
            </Button>
        </Layout>
    );
};

export default withNavigation(BookTripScreen);

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 24,
        paddingVertical: 16
    },
    rooms: {
        fontSize: 16,
        paddingVertical: 8
    },
    button: {
        marginVertical: 16,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});
