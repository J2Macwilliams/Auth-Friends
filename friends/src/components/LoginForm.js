import React, { Component } from 'react';

import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';

export class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        // this.props.friendSignUpRequest(this.state);
    }

    render() {
        return (
            <div>
                <Grid container >
                    <Paper style={{ width: '100%', }}>
                        <form onSubmit={this.onSubmit}>
                            <Typography variant="h5" >
                                Login
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                label="email"
                                name="email"
                                margin="normal"
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.handleChanges}
                                required
                            />
                            <TextField
                                type="password"
                                id="outlined-basic"
                                label="password"
                                name="password"
                                margin="normal"
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.handleChanges}
                                required
                            />
                            <Button type="submit" >Submit</Button>
                        </form>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default LoginForm
