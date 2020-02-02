// @format
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home.screen';
import OtherScreen from '../screens/Other.screen';
import NavDrawer from '../navigation/NavDrawer';

const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Other: OtherScreen
    },
    {
        contentComponent: NavDrawer
    }
);

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
