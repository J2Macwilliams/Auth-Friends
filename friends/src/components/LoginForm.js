import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { setUserId } from '../actions/index';
// import validateInput from 
// import axios from 'axios'

import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';

export class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        errors: {},
        isLoading: false
    };

isValid() {
    const { errors, isValid} = validateInput(this.state);

    if (!isValid) {
        this.setState({errors});
    }
    return isValid; 
}

    onSubmit =e => {
        e.preventDefault();
    }
    handleChanges = e => {
        this.setState({
                [e.target.name]: e.target.value
            
        });
    };


    

   

    render() {
        return (
            <div>
                <Grid container >
                    <Paper style={{ width: '100%', margin: 20, boxShadow: '0 0 10px 2px' }}>
                        <form onSubmit={this.onSubmit}>
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
                                onChange={this.handleChanges}
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
                                onChange={this.handleChanges}
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

export default connect(null , )(LoginForm) ;
