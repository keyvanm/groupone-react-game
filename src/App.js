import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import ProjectRoomLockPuzzle from './components/puzzles/pr-lock/pr-lock';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/pr' component={ProjectRoomLockPuzzle}/>
      </Switch>
    );
  }
}

export default App;
