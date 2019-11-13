import React, { Component } from "react";

import axios from 'axios';

import { Grid, Card, Typography } from '@material-ui/core';




const axiosWithAuth = () => {
    return axios.create({
        headers: {
            authorization: sessionStorage.getItem("token")
        }
    });
};

class FriendsList extends Component {
    state = {
        friends: [],

    };
    componentDidMount() {
        this.getData();
        if (!sessionStorage.getItem("token")) {
            console.error("Please Login!!!");
        } else {
            console.info("We are logged in");
        }
    }


    // getData = () => {
    //   axios.get("http://localhost:5000/api/friends", {
    //     headers: { authorization: sessionStorage.getItem("token") }
    //   })
    //     .then(res => res.json())
    //     .then(response => {
    //       this.setState({ friends: response.data });
    //     });
    // };
    getData = () => {
        const authAxios = axiosWithAuth();
        authAxios
            .get("http://localhost:5000/api/friends")
            .then(response => {
                console.log('Axios with Auth response', response)
                this.setState({ friends: response.data });
            });

    };


    render() {
        return (
            <div>
                <h1>Friends!</h1>
                <Grid>
                    {this.state.friends.map((pals, id) => (
                        <Grid Item xs={6} sm={3} md={2}>
                            <Card key={id} >
                                <Typography variant="h3" >
                                    {pals.name}
                                </Typography>
                                <Typography>
                                    {pals.email}
                                </Typography>
                                <Typography>
                                    {pals.age}
                                </Typography>
                            </Card>

                        </Grid>
                    )
                    )}
                </Grid>
            </div>
        );
    }
}

export default FriendsList;

