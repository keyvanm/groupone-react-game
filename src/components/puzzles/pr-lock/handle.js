import React from 'react';

import './pr-lock.css';


const Handle = (props) => {
  return (
    <a href={props.disabled ? null : "https://google.com"} target="_blank">
      <div className="handle">
      </div>
    </a>
  );
}

export default Handle;
