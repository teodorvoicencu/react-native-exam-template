// @format
import { put, call, select } from 'redux-saga/effects';
import axios from 'axios';

import { TripActions } from './trip.redux';

const selectNetwork = (state: any) => state.network.connected;

export default function* fetchAvailable() {
    try {
        const network = yield select(selectNetwork);
        if (network) {
            yield put(TripActions.loading(true));
            const response = yield call(axios.get, '/trips');
            if (response.status === 200) {
                yield put(TripActions.success(response.data));
            }
            yield put(TripActions.loading(false));
        }
    } catch (e) {
        yield put(TripActions.loading(false));
        yield put(TripActions.failure());
    }
}
