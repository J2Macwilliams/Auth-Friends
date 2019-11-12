import {LOADING , SUCCESS , FAILURE} from '../actions/index.js';

const initialState = [{
    name: '',
    age: '',
    email: '',
}]

export const reducer = (state = initialState, action) => {
    // console.log("reducer", action);
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
                smurfs: action.payload,
                isLoading: false
            }
        case FAILURE:
            return {
                ...state,
                smurfs: [],
                error: action.payload,
                isLoading: false
            }
        // case DELETE_SMURF_SUCCESS:
        //     const newState = ([...state, state])
        default:
            return state;
    }
}