import React, { Component } from 'react';
// import { Row, Col } from 'reactstrap';
import Draggable from 'react-draggable';

import mailAppUI from '../assets/mail_app.png';

class MailApp extends Component {
  render () {
    return (
      <Draggable defaultPosition={{x: 600, y: 500}}>
        {/* <Row style={{ backgroundColor: "white", position: "absolute", top: "100px", left:"100px" }}>
          <Col md="4">
            <ul>
          <li>Mail 1</li>
          <li>Mail 2</li>
            </ul>
          </Col>
          <Col md="8">
            <p>Mail content</p>
          </Col>
        </Row> */}
        <img alt="UI mock" style={{ width: "500px" }} src={mailAppUI} />
      </Draggable>
    );
  }
}

export default MailApp;
