// @format
import React, { ReactElement, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { PersistGate } from 'redux-persist/integration/react';
import NetInfo from '@react-native-community/netinfo';
import { PersistorAction } from 'redux-persist/es/types';
import { store, persistor } from './app/config/store.config';
import initAxios from './app/config/axios.config';
import AppContainer from './app/config/navigation.config';
import { NetworkActions } from './app/network/redux';
import NetworkModal from './app/network/NetworkModal';

const App = (): ReactElement => {
    useEffect(() => {
        initAxios();
    }, []);

    NetInfo.addEventListener(state => {
        const status = state.isConnected;
        console.log(status);
        store.dispatch(NetworkActions.update(status) as PersistorAction);
    });

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ApplicationProvider mapping={mapping} theme={darkTheme}>
                        <NetworkModal />
                        <AppContainer />
                    </ApplicationProvider>
                </PersistGate>
            </Provider>
        </>
    );
};

export default App;
