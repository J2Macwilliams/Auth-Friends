import React from 'react';

import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Splash from './components/SplashPage';


import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';


function App() {
  
  return (
    <div className="App">
      
     <NavBar />
    
      <Switch>
        <PrivateRoute path='/protected' >
        <FriendsList />
        </PrivateRoute>
        
        <Route exact path="/" component={Splash} />
        <Route component={Splash} />
      </Switch>
      
    </div>
  );
}

export default App;
