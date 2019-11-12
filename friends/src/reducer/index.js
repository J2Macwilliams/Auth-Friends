import {LOADING , SUCCESS , FAILURE}

const initialState = [{
    name: '',
    age: '',
    email: '',
}]

export const reducer = (state = initialState, action) => {
// console.log("reducer", action);
switch(action.type){
    default: 
    return state;
}
}