import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friendSignUpRequest } from '../actions/index';
import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';


export class SignUpForm extends Component {
    state = {
        name: '',
        age: null,
        email: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.friendSignUpRequest(this.state);
    }

    render() {
        return (
            <div>
                <Grid container >
                    <Paper style={{ width: '100%', margin: 20, boxShadow: '0 0 10px 2px orange' }}>
                        <form onSubmit={this.onSubmit}>
                            <Typography variant="h5" >
                                Friend Sign Up Form
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                label="name"
                                name="name"
                                margin="normal"
                                variant="outlined"
                                value={this.state.name}
                                onChange={this.handleChanges}
                                required
                            />
                            <TextField
                                id="outlined-basic"
                                label="age"
                                name="age"
                                margin="normal"
                                variant="outlined"
                                value={this.state.age}
                                onChange={this.handleChanges}
                                required
                            />
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
                            <Button type="submit" style={{background: "black", color: 'white'}} >Submit</Button>
                        </form>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default connect((state) => { return {} }, { friendSignUpRequest })(SignUpForm);
