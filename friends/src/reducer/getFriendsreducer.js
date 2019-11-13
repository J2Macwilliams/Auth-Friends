import {LOADING , SUCCESS , FAILURE} from '../actions/index.js';

const initialState = {
    friends: [],
    error: null,
    isLoading: false,
}

const getFriendsReducer = (state = initialState, action) => {
    console.log("reducer", action);
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isLoading: false
            }
        case FAILURE:
            return {
                ...state,
                friends: [],
                error: action.payload,
                isLoading: false
            }
        
        default:
            return state;
    }
}
export default getFriendsReducer