import React from 'react';

import KeypadButton from './button';

import './pr-lock.css';

const Keypad = ({value}) => {
  return (
    <div className="keypad">
      <div>
        <KeypadButton value="1" />
        <KeypadButton value="2" />
        <KeypadButton value="3" />
      </div>
      <div>
        <KeypadButton value="4" />
        <KeypadButton value="5" />
        <KeypadButton value="6" />
      </div>
      <div>
        <KeypadButton value="7" />
        <KeypadButton value="8" />
        <KeypadButton value="9" />
      </div>
      <div>
        <KeypadButton value="*" />
        <KeypadButton value="0" />
        <KeypadButton value="#" />
      </div>
    </div>
  )
}

export default Keypad;
