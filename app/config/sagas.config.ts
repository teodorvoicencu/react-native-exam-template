// @format
import { all, takeLatest } from 'redux-saga/effects';
import { fetchAvailable, TripTypes } from '../trip/redux';

export default function* rootSaga() {
    try {
        yield all([takeLatest(TripTypes.FETCH_AVAILABLE, fetchAvailable)]);
    } catch (e) {
        console.log(e);
    }
}
