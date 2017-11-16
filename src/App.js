import React, { Component } from 'react';
import { Container } from 'reactstrap';

import ProjectRoomLockPuzzle from './components/puzzles/pr-lock/pr-lock';


class App extends Component {
  render() {
    return (
      <Container>
        <ProjectRoomLockPuzzle />
      </Container>
    );
  }
}

export default App;
