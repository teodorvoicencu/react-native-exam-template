// @format
import React, { ReactElement } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const ClientScreen = (): ReactElement => {
    return (
        <Layout style={styles.layout}>
            <Text category="h1">Home</Text>
        </Layout>
    );
};

export default ClientScreen;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
