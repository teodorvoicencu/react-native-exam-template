// @format
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { getThemeValue } from '@ui-kitten/components/theme/theme/theme.service';
import { dark } from '@eva-design/eva';
import NavTabBar from '../components/NavTabBar';
import TripsNavigator from './trips.navigation';
import HistoryScreen from '../screens/History.screen';

const ClientNavigator = createBottomTabNavigator(
    {
        Trips: TripsNavigator,
        History: HistoryScreen
    },
    {
        tabBarComponent: NavTabBar,
        initialRouteName: 'Trips',
        tabBarOptions: {
            style: {
                backgroundColor: getThemeValue('color-basic-800', dark)
            }
        }
    }
);

export default ClientNavigator;