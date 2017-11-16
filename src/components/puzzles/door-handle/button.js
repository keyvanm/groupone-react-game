import React from 'react';

const KeypadButton = ({value}) => {
  return (
    <button className="keypad-button" value={value}>{value}</button>
  )
}
