import axios from "axios"

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const loading = () => ({ type: LOADING })
export const success = (data) => ({ type: SUCCESS, payload: data })
export const failure = (data) => ({ type: FAILURE, payload: data })

//Post request ('C'reate in CRUD)
export function friendSignUpRequest(friendData) {
    return dispatch => {
        return axios.post('', friendData);
    }
};

//Get request ('R'ead in Crud)
export const getFriends = () => async (dispatch) => {
    try {
        dispatch(loading());

        axios.get('')
            .then(response => {
                
                const info = response.data
                dispatch(
                    success(info)
                )
            })

    } catch (error) {
        dispatch(failure(error))
    }
};

