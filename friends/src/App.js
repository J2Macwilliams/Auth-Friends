import React from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Splash from './components/SplashPage';
import Login from './components/LoginForm';
import SignUp from './components/SignUpForm';

import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

import { makeStyles, AppBar } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
 
  navLink: {
    textDecoration: 'none',
    background: 'white',
    margin: 5,
    padding: '1%',
    borderRadius: 10
  },
  appBarActiveNavButton: {
    background: 'red',

  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      
     <NavBar />
    
      <Switch>
        <PrivateRoute path='/protected' >
          <FriendsList />
        </PrivateRoute>
        <Route path="/signUp-page" component={SignUp} />
        <Route exact path="/" component={Splash} />
        <Route component={Splash} />
      </Switch>
    </div>
  );
}

export default App;
