import React from 'react';

import Indicator from './indicator';
import Keypad from './keypad';

import './pr-lock.css';


const Panel = (props) => {
  return (
    <div className="handle-panel">
      <Indicator />
      <Keypad />
    </div>
  );
}

export default Panel;
