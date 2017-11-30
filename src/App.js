import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import ProjectRoomLockPuzzle from './components/puzzles/pr-lock/pr-lock';

import Cover from './components/Cover';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Cover}/>
        <Route path='/pr' component={ProjectRoomLockPuzzle}/>
        <Route path='/home' component={Home}/>
      </Switch>
    );
  }
}

export default App;
