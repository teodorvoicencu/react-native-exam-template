// @format
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { getThemeValue } from '@ui-kitten/components/theme/theme/theme.service';
import { dark } from '@eva-design/eva';
import ClientScreen from '../screens/Client.screen';
import EmployeeScreen from '../screens/Employee.screen';
import NavDrawer from '../components/NavDrawer';

const DrawerNavigator = createDrawerNavigator(
    {
        Client: ClientScreen,
        Employee: EmployeeScreen
    },
    {
        contentComponent: NavDrawer,
        initialRouteName: 'Client',
        drawerBackgroundColor: getThemeValue('color-basic-800', dark)
    }
);

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
