import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import Navbar from './components/layout/Navbar';

import backgroundImage from './pattern.png'

function App() {
  return (
    <Router>
    <div className="App" style={{background: `url(${backgroundImage})`}}>
      <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}></Route>
          
          </Switch>
        </div>
     </div>
     </Router>
  );
}

export default App;
