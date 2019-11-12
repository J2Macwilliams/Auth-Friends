import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions/index";

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

const FriendsList = (props) => {
    // console.log("FriendsList", props);
    const classes = useStyles();
    return (
        <>
            

            <Button className={classes.button} onClick={() => props.dispatch(getFriends())}>Peeps</Button>
            {props.isLoading && <div>spinner</div>}
            {props.error && <div>{props.error.message}</div>}
            <Grid container spacing={1}>

                {props.friends.map(pals => (
                    <Grid item key={pals.name} xs={6} sm={3} md={2}>
                        <Card  className={classes.card}>

                            <Typography variant="h4">
                                {pals.name}
                            </Typography>
                            <Typography variant="h5">
                                age: {pals.age}
                            </Typography>
                            <Typography variant="h5">
                                email: {pals.email} 
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default connect(state => {
    return state;
})(FriendsList);