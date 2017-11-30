import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import ProjectRoomLockPuzzle from './components/puzzles/pr-lock/pr-lock';

import Cover from './components/Cover';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Cover}/>
        <Route path='/pr' component={ProjectRoomLockPuzzle}/>
      </Switch>
    );
  }
}

export default App;
