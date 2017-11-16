import React, { Component } from 'react';

import './pr-lock.css';

import IndicatorOff from './assets/indicator-off.svg';
import IndicatorGreen from './assets/indicator-green.svg';
import IndicatorRed from './assets/indicator-red.svg';


export default class Indicator extends Component {
  constructor (props) {
    super(props);

    this.state = { state: "off" };  // green, red, off
  }

  render () {
    var indicatorSrc;
    switch (this.state.state) {
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
        <img src={indicatorSrc} />
      </div>
    );
  }
}
