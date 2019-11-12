import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/splash-page" component={SplashPage} />
        <Route component={SplashPage} />
      </Switch>
    </div>
  );
}

export default App;
