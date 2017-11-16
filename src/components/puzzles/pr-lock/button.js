import React from 'react';

import './pr-lock.css';

const KeypadButton = (props) => {
  const value = props.value;
  return (
    <button onClick={() => {props.onButtonPress(value)}} className="keypad-button" value={value}>{value}</button>
  );
}

export default KeypadButton;
