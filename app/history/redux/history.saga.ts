// @format
import { put, select } from 'redux-saga/effects';
import { HistoryActions } from './history.redux';
import { Trip } from '../../trip/types';

type AddType = {
    trip: Trip;
};

export default function* add({ trip }: AddType) {
    try {
        yield put(HistoryActions.loading(true));
        const data = yield select(state => state.history.data);
        const result = [trip, ...data];
        yield put(HistoryActions.success(result));
        yield put(HistoryActions.loading(false));
    } catch (e) {
        yield put(HistoryActions.loading(false));
        console.log(e);
    }
}
