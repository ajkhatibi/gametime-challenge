import { Dispatch } from 'redux';
import axios from 'axios';

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
        console.log(data)
    } catch (error) {
        throw new Error(error);
    }
}