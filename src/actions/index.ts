import { Dispatch } from 'redux';
import axios from 'axios';
import { appTypes } from '../types';

const api = axios.create({
    baseURL: "https://mobile-staging.gametime.co/v1"
})
export const queryShows = (q: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.get("/search", {
            params: {
                q
            }
        });
        dispatch({ type: appTypes.TRIGGER_SEARCH_QUERY, payload: data });
    } catch (error) {
        throw new Error(error);
    }
}