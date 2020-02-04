// @format
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { getThemeValue } from '@ui-kitten/components/theme/theme/theme.service';
import { dark } from '@eva-design/eva';
import EmployeeScreen from '../screens/Employee.screen';
import NavDrawer from '../components/NavDrawer';
import ClientNavigator from '../navigation/client.navigation';

const DrawerNavigator = createDrawerNavigator(
    {
        Client: ClientNavigator,
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
