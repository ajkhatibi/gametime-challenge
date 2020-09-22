import { combineReducers } from 'redux';
import app, { appInterface } from './app';

export interface storeInterface {
    app: appInterface
}

export default combineReducers<storeInterface>({
    app,
})