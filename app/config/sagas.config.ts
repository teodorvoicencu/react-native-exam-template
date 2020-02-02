// @format
import { all, takeLatest } from 'redux-saga/effects';
import { mock, MockTypes } from '../mock';

export default function* rootSaga() {
    try {
        yield all([takeLatest(MockTypes.MOCK, mock)]);
    } catch (e) {
        console.log(e);
    }
}
