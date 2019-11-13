import React, { Component } from 'react';


import axios from 'axios'

import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';

export class LoginForm extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        },
        isLoggedIn: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
            .post(
                "https://localhost:5000/api/login",
                this.state.credentials
            )
            .then(response => {
                console.log("response", response);
                const { data } = response;

                sessionStorage.setItem("token", data.payload);
                this.setState({ ...this.state, isLoggedIn: true });
            });
    };

    componentDidMount() {
        if (sessionStorage.getItem("token")) {
            this.setState({ ...this.state, isLoggedIn: true });
        } else {
            this.setState({ ...this.state, isLoggedIn: false });
        }
    }

    render() {
        return (
            <div>
                <Grid container >
                    <Paper style={{ width: '100%', margin: 20, boxShadow: '0 0 10px 2px' }}>
                        <form onSubmit={this.login}>
                            <Typography variant="h5" >
                                {this.state.isLoggedIn ? "LOGGED IN!" : "Please login"}
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                label="username"
                                name="username"
                                margin="normal"
                                variant="outlined"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                            />
                            <TextField
                                // type="password" 
                                id="outlined-basic"
                                label="password"
                                name="password"
                                margin="normal"
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                            <Button type="submit" style={{ background: 'dodgerblue' }} >Submit</Button>
                        </form>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default LoginForm;
