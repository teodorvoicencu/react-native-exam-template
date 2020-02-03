/* eslint-disable import/no-extraneous-dependencies */
// @format
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import Reactotron from 'reactotron-react-native';
// @ts-ignore
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
// @ts-ignore
import sagaPlugin from 'reactotron-redux-saga';
import rootSaga from './sagas.config';
import rootReducer from './redux.config';

const sagaMiddleware = createSagaMiddleware();

const reactotron = Reactotron.configure()
    .useReactNative()
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect();

// @ts-ignore
const create = __DEV__ ? reactotron.createStore.bind(reactotron) : createStore;

const store = create(rootReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
