import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Listings from './Listings';
import history from './components/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path ="/listings" component={Listings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
