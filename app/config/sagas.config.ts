// @format
import { all, takeLatest } from 'redux-saga/effects';
import { fetchAvailable, book, TripTypes } from '../trip/redux';
import { add, HistoryTypes } from '../history/redux';

export default function* rootSaga() {
    try {
        yield all([takeLatest(TripTypes.FETCH_AVAILABLE, fetchAvailable)]);
        yield all([takeLatest(TripTypes.TRIPS_BOOK, book)]);
        yield all([takeLatest(HistoryTypes.ADD, add)]);
    } catch (e) {
        console.log(e);
    }
}
