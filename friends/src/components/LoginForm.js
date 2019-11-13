import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserId } from '../actions/index';
// import validateInput from 
import axios from 'axios'

import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';

const LoginForm = props =>{
   
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
    
          // Object provided under values is { username: '', password: '' }
          // Need to send that to the back end on success
          // Need to determine what to do on error state of login request
    
          if (!err) {
            console.log('Received values of form: ', values);
            axios
              .post("https://localhost:5000/api/friends", values)
              .then((res) => {
                console.log("Login successful ", res.data.token);
                props.setUserID(res.data.id);
                localStorage.setItem('token', res.data.token);
                props.history.push('/');
              })
              .catch((err) => { alert("ERROR LOGGING IN \n " + err) })
          }
        });
      };


   
    // handleChanges = e => {
    //     this.setState({
    //             [e.target.name]: e.target.value
            
    //     });
    // };

    
        return (
            
                <Grid container >
                    <Paper style={{ width: '100%', margin: 20, boxShadow: '0 0 10px 2px' }}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h5" >
                                {/* {this.state.isLoggedIn ? "LOGGED IN!" : "Please login"} */}
                                Login Form
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
            
        )
    
}



const mapStateToProps = state => ({
  userID: state.userID
});

export default connect(
  mapStateToProps,
  { setUserID }
)(LoginForm);
