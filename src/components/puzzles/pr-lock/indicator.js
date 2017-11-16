import React from 'react';

import './pr-lock.css';

import IndicatorOff from './assets/indicator-off.svg';
import IndicatorGreen from './assets/indicator-green.svg';
import IndicatorRed from './assets/indicator-red.svg';


const Indicator = ({state}) => {
  var indicatorSrc;
  switch (state) {
    case "off":
      indicatorSrc = IndicatorOff;
      break;
    case "green":
      indicatorSrc = IndicatorGreen;
      break;
    case "red":
      indicatorSrc = IndicatorRed;
      break;
    default:
      indicatorSrc = IndicatorOff;
  }

  return (
    <div className="indicator">
      <img alt={`indicator-${state}`} src={indicatorSrc} />
    </div>
  );
}

export default Indicator;
