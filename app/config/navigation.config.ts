// @format
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { getThemeValue } from '@ui-kitten/components/theme/theme/theme.service';
import { dark } from '@eva-design/eva';
import HomeScreen from '../screens/Home.screen';
import OtherScreen from '../screens/Other.screen';
import NavDrawer from '../components/NavDrawer';

const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Other: OtherScreen
    },
    {
        contentComponent: NavDrawer,
        initialRouteName: 'Home',
        drawerBackgroundColor: getThemeValue('color-basic-800', dark)
    }
);

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
