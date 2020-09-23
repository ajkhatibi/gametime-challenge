import { appTypes } from '../types';
import { Action } from 'redux';
import { act } from 'react-test-renderer';

export interface appInterface {
    data: object[]
}
const INITIAL_STATE: appInterface = {
    data: []
}

export default (state: appInterface = INITIAL_STATE, action: Action): appInterface => {
    switch (action.type) {
        case appTypes.TRIGGER_SEARCH_QUERY:
            return { ...state, data: action.payload.events.slice(0, 3) };
        default:
            return state;
    }
}