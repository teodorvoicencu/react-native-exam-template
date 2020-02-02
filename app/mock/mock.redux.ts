// @format
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    init: [],
    loading: ['value'],
    mock: ['message'],
    success: ['data'],
    failure: []
});

export const MockTypes = Types;
export const MockActions = Creators;

const INITIAL_STATE = {
    loading: false,
    data: []
};

export const mockReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.SUCCESS]: (state, { data }) => ({
        ...state,
        ...data
    })
});
