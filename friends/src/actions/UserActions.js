import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {

    let config = {
      method: 'POST',
      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
      body: `username=${creds.username}&password=${creds.password}`
    }
  
    return dispatch => {
      // Dispatch requestLogin to kickoff the call to the API
      dispatch(requestLogin(creds))
  
      return 
      axios.get('http://localhost:5000/api/friends', config)
        .then(response =>
          response.json().then(user => ({ user, response }))
              ).then(({ user, response }) =>  {
          if (!response.ok) {
            // If there was a problem, we want to
            // dispatch the error condition
            dispatch(loginError(user.message))
            return Promise.reject(user)
          } else {
            // If login was successful, set the token in local storage
            localStorage.setItem('id_token', user.id_token)
            localStorage.setItem('id_token', user.access_token)
            // Dispatch the success action
            dispatch(receiveLogin(user))
          }
        }).catch(err => console.log("Error: ", err))
    }
  }