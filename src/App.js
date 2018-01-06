import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {default as TopNavBar} from './components/TopNavBar';

import {default as Home} from './views/Home';
import {default as BulletinBoard} from './views/BulletinBoard';
import {default as Activities} from './views/Activities';

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
          <TopNavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/bulletinBoard" component={BulletinBoard}/>
          <Route exact path="/activities" component={Activities}/>
        </div>
      </Router>
    );
  }
}

export default App;
