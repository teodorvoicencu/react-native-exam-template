// @format
import React, { ReactElement, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/config/store.config';
import initAxios from './app/config/axios.config';
import AppContainer from './app/config/navigation.config';

const App = (): ReactElement => {
    useEffect(() => {
        initAxios();
    }, []);

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ApplicationProvider mapping={mapping} theme={darkTheme}>
                        <AppContainer />
                    </ApplicationProvider>
                </PersistGate>
            </Provider>
        </>
    );
};

export default App;
