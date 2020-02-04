// @format
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    init: [],
    fetchAvailable: [],
    tripsLoading: ['value'],
    tripsSuccess: ['data'],
    tripsFailure: [],
    tripsBook: ['trip', 'rooms']
});

export const TripTypes = Types;
export const TripActions = Creators;

const INITIAL_STATE = {
    loading: false,
    data: []
};

export const tripReducer = createReducer(INITIAL_STATE, {
    [Types.TRIPS_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.TRIPS_SUCCESS]: (state, { data }) => ({ ...state, data })
});
