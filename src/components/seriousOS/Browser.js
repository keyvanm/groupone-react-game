import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Badge } from 'reactstrap';

import './browser.css';
import iconWeb from '../assets/icon_web.png';


class Browser extends Component {
  constructor (props) {
    super(props);
    this.state = { url: "/pics.html" }
  }

  render () {
    return (
      <Draggable defaultPosition={{x: 0, y: -300}}>
        <div id="app_browser">
          <div id="browser_tool_bar">
            <div className="app_title">
              <img alt="icon" className="title_app_icon" src={iconWeb} />
              <div className="title_app_name">Browser</div>
              <div className="button_close"></div>
            </div>
            <input
              id="browser_address"
              type="text"
              placeholder="Type address here"
              value={this.state.url}
            />
            <h3 className="app_bookmarks" style={{padding: "10px"}}>
              <Badge color="primary" onClick={() => {this.setState({url: "/pics.html"})}}>Pic puzzle</Badge>{ '  ' }
              <Badge
                color="primary"
                onClick={() => {this.setState({ url: "https://www.hangmanwords.com/play/custom-cGF0cmljaw==" })}}
              >
                Hangman
              </Badge>{ '  ' }
              <Badge
                color="primary"
                onClick={() => {this.setState({ url: "/pr" })}}
              >
                Lock puzzle
              </Badge>
            </h3>
          </div>
          <iframe title="browser" id="browser_iframe" src={this.state.url} />
        </div>
      </Draggable>
    );
  }
}

export default Browser;
