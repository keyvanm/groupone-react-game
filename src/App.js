import React, { Component } from 'react';
import { Container } from 'reactstrap';

import DoorHandlePuzzle from './components/puzzles/door-handle';


class App extends Component {
  render() {
    return (
      <Container>
        <DoorHandlePuzzle />
      </Container>
    );
  }
}

export default App;
