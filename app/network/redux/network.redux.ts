// @format
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    init: [],
    update: ['status'],
    hideModal: []
});

export const NetworkTypes = Types;
export const NetworkActions = Creators;

const INITIAL_STATE = {
    connected: true,
    visible: false
};

export const NetworkReducer = createReducer(INITIAL_STATE, {
    [Types.HIDE_MODAL]: state => ({ ...state, visible: false }),
    [Types.UPDATE]: (state, { status }) =>
        status
            ? {
                  ...state,
                  connected: status,
                  visible: false
              }
            : { ...state, connected: status, visible: true }
});
