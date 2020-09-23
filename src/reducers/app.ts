import { appTypes } from '../types';

export interface appInterface {
    data: object[]
}
const INITIAL_STATE: appInterface = {
    data: []
}

type Actions = { type: appTypes.TRIGGER_SEARCH_QUERY, payload: { events: object[] } }

export default (state: appInterface = INITIAL_STATE, action: Actions): appInterface => {
    switch (action.type) {
        case appTypes.TRIGGER_SEARCH_QUERY:
            return { ...state, data: action.payload.events.slice(0, 3) };
        default:
            return state;
    }
}