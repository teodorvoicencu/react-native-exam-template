import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import { NetworkReducer } from '../network/redux';
import { tripReducer } from '../trip/redux';

const tripPersistConfig = {
    key: 'trips',
    storage: AsyncStorage,
    blacklist: []
};

const mainReducer = combineReducers({
    network: NetworkReducer,
    trips: persistReducer(tripPersistConfig, tripReducer)
});

const rootPersistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: ['network']
};
// Middleware: Redux Persist Persisted Reducer
const rootReducer = persistReducer(rootPersistConfig, mainReducer);

export default rootReducer;
