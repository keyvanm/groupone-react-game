import React, { Component } from 'react';

import Panel from './panel';
import Handle from './handle';

import './pr-lock.css';


export default class Lock extends Component {
  render () {
    return (
      <div>
        <Panel />
        <Handle />
      </div>
    )
  }
}
