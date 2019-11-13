import axios from "axios"

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const loading = () => ({ type: LOADING })
export const success = (data) => ({ type: SUCCESS, payload: data })
export const failure = (data) => ({ type: FAILURE, payload: data })

//Get request ('R'ead in Crud)
export const getFriends = () => async (dispatch) => {
    try {
        dispatch(loading());

        axios.get('http://localhost:5000/api/friends')
            .then(response => {
                console.log('actions get',response)
                const info = response.data
                dispatch(
                    success(info)
                )
            })

    } catch (error) {
        dispatch(failure(error))
    }
};