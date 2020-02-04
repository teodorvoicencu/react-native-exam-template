// @format
import React, { ReactElement } from 'react';
import { Layout, Spinner } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const LoadingSpinner = (): ReactElement => (
    <Layout style={styles.layout}>
        <Spinner size="giant" status="info" />
    </Layout>
);

export default LoadingSpinner;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
