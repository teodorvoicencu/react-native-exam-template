// @format
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    init: [],
    loading: ['value'],
    success: ['data'],
    add: ['trip']
});

export const HistoryTypes = Types;
export const HistoryActions = Creators;

const INITIAL_STATE = {
    loading: false,
    data: []
};

export const historyReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.SUCCESS]: (state, { data }) => ({ ...state, data })
});
