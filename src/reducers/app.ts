import { appTypes } from '../types';
import { Action } from 'redux';

export interface appInterface {
    data: object[]
}
const INITIAL_STATE: appInterface = {
    data: []
}

export default (state: appInterface = INITIAL_STATE, action: Action): appInterface => {
    switch (action.type) {
        case appTypes.TRIGGER_SEARCH_QUERY:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}