import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import { mockReducer } from '../mock';

const mainReducer = combineReducers({
    mock: mockReducer
});

const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ['mock'],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: []
};
// Middleware: Redux Persist Persisted Reducer
const rootReducer = persistReducer(persistConfig, mainReducer);

export default rootReducer;
