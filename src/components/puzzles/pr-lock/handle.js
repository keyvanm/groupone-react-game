import React from 'react';

import './pr-lock.css';


const Handle = (props) => {
  return (
    <a href={props.disabled ? null : "/home"} target="_blank">
      <div className="handle">
      </div>
    </a>
  );
}

export default Handle;
