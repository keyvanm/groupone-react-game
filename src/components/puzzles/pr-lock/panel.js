import React, { Component } from 'react';

import Indicator from './indicator';
import Keypad from './keypad';
import Handle from './handle';

import './pr-lock.css';


class Panel extends Component {
  constructor(props) {
      super(props);
      this.state = { indState: "off", entry: "" };
  }

  onKeyPress = (val) => {
    var entry = this.state.entry;
    entry += val;
    if (entry.length === 5) {
      if (entry === "1030#"){
        this.setState({ entry: "", indState: "green" });
        setTimeout(function () { this.setState({ indState: "off" }); }.bind(this), 4000);
      } else {
        this.setState({ entry: "", indState: "red" });
        setTimeout(function () { this.setState({ indState: "off" }); }.bind(this), 4000);
      }
    } else if (entry.length < 5) {
      this.setState({ entry });
    }
  }

  render () {
    const indState = this.state.indState;
    return (
      <div className="panel">
        <Indicator state={indState}/>
        <Keypad onKeyPress={this.onKeyPress}/>
        <Handle disabled={indState !== "green"} />
      </div>
    );
  }
}

export default Panel;
