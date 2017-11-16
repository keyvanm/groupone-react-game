import React from 'react';

import Indicator from './indicator';
import Keypad from './keypad';
import Handle from './handle';

import './pr-lock.css';


const Panel = (props) => {
  return (
    <div className="handle-panel">
      <Indicator />
      <Keypad />
      <Handle />
    </div>
  );
}

export default Panel;
