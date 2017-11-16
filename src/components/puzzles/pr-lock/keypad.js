import React from 'react';

import KeypadButton from './button';

import './pr-lock.css';

const Keypad = (props) => {
  return (
    <div className="keypad">
      <div>
        <KeypadButton onButtonPress={props.onKeyPress} value="1" />
        <KeypadButton onButtonPress={props.onKeyPress} value="2" />
        <KeypadButton onButtonPress={props.onKeyPress} value="3" />
      </div>
      <div>
        <KeypadButton onButtonPress={props.onKeyPress} value="4" />
        <KeypadButton onButtonPress={props.onKeyPress} value="5" />
        <KeypadButton onButtonPress={props.onKeyPress} value="6" />
      </div>
      <div>
        <KeypadButton onButtonPress={props.onKeyPress} value="7" />
        <KeypadButton onButtonPress={props.onKeyPress} value="8" />
        <KeypadButton onButtonPress={props.onKeyPress} value="9" />
      </div>
      <div>
        <KeypadButton onButtonPress={props.onKeyPress} value="*" />
        <KeypadButton onButtonPress={props.onKeyPress} value="0" />
        <KeypadButton onButtonPress={props.onKeyPress} value="#" />
      </div>
    </div>
  )
}

export default Keypad;
