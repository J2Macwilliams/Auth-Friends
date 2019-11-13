import axios from "axios"
//Post request ('C'reate in CRUD)
export function friendSignUpRequest(friendData) {
    return dispatch => {
        return axios.post('http://localhost:5000/api/friends', friendData);
    }
};