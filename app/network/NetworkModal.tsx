// @format
import React, { ReactElement, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Modal, Text } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { NetworkActions } from './redux';
import { TripActions } from '../trip/redux';

const NetworkModal = (): ReactElement => {
    const visible = useSelector((state: any) => state.network.visible);
    const dispatch = useDispatch();

    const hideModal = useCallback(() => dispatch(NetworkActions.hideModal()), [
        dispatch
    ]);

    const retryTrips = useCallback(() => {
        NetInfo.fetch().then(state => {
            const status = state.isConnected;
            dispatch(NetworkActions.update(status));
            if (status) {
                dispatch(TripActions.fetchAvailable);
            }
            hideModal();
        });
    }, [dispatch, hideModal]);

    const renderModalElement = () => (
        <Layout style={styles.modalContainer}>
            <Text>You are not connected to internet</Text>
            <Layout style={styles.actions}>
                <Button
                    style={styles.button}
                    status="primary"
                    onPress={retryTrips}
                >
                    Retry
                </Button>
                <Button
                    style={styles.button}
                    status="basic"
                    onPress={hideModal}
                >
                    Dismiss
                </Button>
            </Layout>
        </Layout>
    );

    return (
        <Modal backdropStyle={styles.backdrop} visible={visible}>
            {renderModalElement()}
        </Modal>
    );
};

export default NetworkModal;

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        padding: 16
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    button: {
        margin: 8
    },
    actions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8
    }
});
