import React from 'react';

import './pr-lock.css';

const KeypadButton = ({value}) => {
  return (
    <button className="keypad-button" value={value}>{value}</button>
  )
}

export default KeypadButton;
