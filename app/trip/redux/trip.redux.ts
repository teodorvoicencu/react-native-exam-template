// @format
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    init: [],
    fetchAvailable: [],
    loading: ['value'],
    success: ['data'],
    failure: []
});

export const TripTypes = Types;
export const TripActions = Creators;

const INITIAL_STATE = {
    loading: false,
    data: []
};

export const tripReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.SUCCESS]: (state, { data }) => ({ ...state, data })
});
