// @format

import { createStackNavigator } from 'react-navigation-stack';
import ClientTripScreen from '../screens/ClientTrip.screen';
import BookTripScreen from '../screens/BookTrip.screen';

const TripsNavigator = createStackNavigator({
    Trips: {
        screen: ClientTripScreen
    },
    Book: {
        screen: BookTripScreen
    }
});

export default TripsNavigator;
