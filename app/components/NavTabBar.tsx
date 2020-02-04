// @format
import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const NavTabBar = ({ navigation }: any) => {
    const onSelect = (index: number) => {
        const selectedTabRoute = navigation.state.routes[index];
        navigation.navigate(selectedTabRoute.routeName);
    };

    return (
        <BottomNavigation
            style={styles.bottom}
            selectedIndex={navigation.state.index}
            onSelect={onSelect}
        >
            <BottomNavigationTab title="Trips" />
            <BottomNavigationTab title="History" />
        </BottomNavigation>
    );
};

export default NavTabBar;

const styles = StyleSheet.create({
    bottom: {
        paddingBottom: 24
    }
});
