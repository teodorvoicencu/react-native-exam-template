// @format
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Drawer } from '@ui-kitten/components';

const NavDrawer = ({ navigation }: any) => {
    const onSelect = (index: number) => {
        const { [index]: selectedTabRoute } = navigation.state.routes;
        navigation.navigate(selectedTabRoute.routeName);
    };

    return (
        <SafeAreaView>
            <Drawer
                data={[{ title: 'Home' }, { title: 'Settings' }]}
                onSelect={onSelect}
            />
        </SafeAreaView>
    );
};

export default NavDrawer;
