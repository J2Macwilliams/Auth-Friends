import { combineReducers } from 'redux';

import authReducer from './authReducer';
import getFriendsReducer from './getFriendsReducer';


export const rootReducer = combineReducers({
    authReducer,
    getFriendsReducer
})