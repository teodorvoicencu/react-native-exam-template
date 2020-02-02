// @format
import React, { ReactElement } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const OtherScreen = (): ReactElement => {
    return (
        <Layout style={styles.layout}>
            <Text category="h1">Other</Text>
        </Layout>
    );
};

export default OtherScreen;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
