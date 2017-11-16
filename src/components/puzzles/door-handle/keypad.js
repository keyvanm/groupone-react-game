import React from 'react';

import KeypadButton from './button';

const Keypad = ({value}) => {
  return (
    <div>
      <Row>
        <Col><KeypadButton value="1" /></Col>
        <Col><KeypadButton value="2" /></Col>
        <Col><KeypadButton value="3" /></Col>
      </Row>
      <Row>
        <Col><KeypadButton value="4" /></Col>
        <Col><KeypadButton value="5" /></Col>
        <Col><KeypadButton value="6" /></Col>
      </Row>
      <Row>
        <Col><KeypadButton value="7" /></Col>
        <Col><KeypadButton value="8" /></Col>
        <Col><KeypadButton value="9" /></Col>
      </Row>
      <Row>
        <Col><KeypadButton value="*" /></Col>
        <Col><KeypadButton value="0" /></Col>
        <Col><KeypadButton value="#" /></Col>
      </Row>
    </div>
  )
}
