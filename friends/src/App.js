import React from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

import { makeStyles, AppBar } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navLink: {
    textDecoration: 'none',
    background: 'white',
    
  }

}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.appBar}>
      <NavLink exact to='/'  activeClassName="activeNavButton" className={classes.navLink} >
        Login
      </NavLink>
      <NavLink to='/protected' activeClassName="activeNavButton" className={classes.navLink} >FriendsList</NavLink>
      </AppBar>
      <Switch>
        <PrivateRoute path='/protected' >
          <FriendsList />
        </PrivateRoute>
        <Route path="/splash-page" component={SplashPage} />
        <Route component={SplashPage} />
      </Switch>
    </div>
  );
}

export default App;
