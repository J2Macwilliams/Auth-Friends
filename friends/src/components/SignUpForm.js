import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friendSignUpRequest } from '../actions/index';
import { Paper, Grid, TextField, Button } from '@material-ui/core';


export class SignUpForm extends Component {
    state = {
        name: '',
        age: null ,
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
                    <Paper style={{width: '100%',}}>
                        <form onSubmit={this.onSubmit}>
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
                        <Button type="submit" >Submit</Button>
                        </form>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default connect((state) => { return {} }, { friendSignUpRequest })(SignUpForm);
