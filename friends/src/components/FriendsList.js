import React from "react";


import axios from 'axios';

import { Grid, Card, Typography, makeStyles, Button } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,

    },

    card: {
        maxWidth: 300,
        margin: 7,
        padding: '2%'
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9

    },
    button: {
        fontSize: '1.6rem',
        background: 'blue',
        color: 'white',
        margin: '3%'

    }
}));

const axiosWithAuth = () => {
    return axios.create({
      headers: {
        authorization: sessionStorage.getItem("token")
      }
    });
  };



const FriendsList = (props) => {
    console.log("Friends", props);
    const classes = useStyles();

   
    return (
        <>
       
        </>
    )
}

export default FriendsList;