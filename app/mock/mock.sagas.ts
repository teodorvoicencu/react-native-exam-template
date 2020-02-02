// @format

import { put, call } from 'redux-saga/effects';
import { MockActions } from './mock.redux';

type MockType = {
    message: string;
};

export default function* mock({ message }: MockType) {
    try {
        yield put(MockActions.loading, true);
        yield call(console.log, message);
        yield put(MockActions.loading, false);
    } catch (e) {
        yield put(MockActions.failure);
        yield put(MockActions.loading, false);
    }
}
