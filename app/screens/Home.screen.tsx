// @format
import React, { ReactElement } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const HomeScreen = (): ReactElement => {
    return (
        <Layout style={styles.layout}>
            <Text category="h1">Home</Text>
        </Layout>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
