// @format
import { put, call, select } from 'redux-saga/effects';
import axios from 'axios';

import { TripActions } from './trip.redux';
import { Trip } from '../types';
import { HistoryActions } from '../../history/redux';

const selectNetwork = (state: any) => state.network.connected;

export function* fetchAvailable() {
    try {
        const network = yield select(selectNetwork);
        if (network) {
            yield put(TripActions.tripsLoading(true));
            const response = yield call(axios.get, '/trips');
            if (response.status === 200) {
                yield put(TripActions.tripsSuccess(response.data));
            }
            yield put(TripActions.tripsLoading(false));
        }
    } catch (e) {
        console.log(e);
        yield put(TripActions.tripsLoading(false));
        yield put(TripActions.tripsFailure());
    }
}

type BookType = {
    trip: Trip;
    rooms: number;
};

export function* book({ trip, rooms }: BookType) {
    try {
        yield put(TripActions.tripsLoading(true));
        const response = yield call(axios.post, '/book', {
            id: trip.id,
            rooms
        });
        if (response.status === 200) {
            yield put(HistoryActions.add(trip));
        }
        yield put(TripActions.tripsLoading(false));
    } catch (e) {
        console.log(e);
        yield put(TripActions.tripsLoading(false));
        yield put(TripActions.tripsFailure());
    }
}
