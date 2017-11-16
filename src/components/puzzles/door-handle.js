import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Badge } from 'reactstrap';


var SchilageIndicator = ({indicator}) => {
  var color;
  switch (indicator) {
    case "off":
      color = "secondary";
      break;
    case "green":
      color = "success";
      break;
    case "red":
      color = "danger";
      break;
    default:

  }
  return (
    <h2><Badge color={color}>Schilage</Badge></h2>
  );
}


export default class DoorHandlePuzzle extends Component {
  constructor (props) {
    super(props);
    this.state = { entry: "", indicator: "off"};  // off, green, red
  }

  handleNumClick = (event) => {
    var val = event.target.value;
    var entry = this.state.entry;
    entry += val;
    if (entry.length === 5) {
      if (entry === "1030#"){
        this.setState({ entry: "", indicator: "green" });
        setTimeout(function () { this.setState({ indicator: "off" }); }.bind(this), 3000);
      } else {
        this.setState({ entry: "", indicator: "red" });
        setTimeout(function () { this.setState({ indicator: "off" }); }.bind(this), 3000);
      }
    } else if (entry.length < 5) {
      this.setState({ entry });
    }
  }

  render () {
    return (
        <Row>
          <Col md="12">
            <Row className="justify-content-md-center">
              <Col md="2" className="text-center">
                <SchilageIndicator indicator={this.state.indicator}/>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="2">
                <Button onClick={this.handleNumClick} value="1" size="lg">1</Button>
                <Button onClick={this.handleNumClick} value="2" size="lg">2</Button>
                <Button onClick={this.handleNumClick} value="3" size="lg">3</Button>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="2">
                <Button onClick={this.handleNumClick} value="4" size="lg">4</Button>
                <Button onClick={this.handleNumClick} value="5" size="lg">5</Button>
                <Button onClick={this.handleNumClick} value="6" size="lg">6</Button>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="2">
                <Button onClick={this.handleNumClick} value="7" size="lg">7</Button>
                <Button onClick={this.handleNumClick} value="8" size="lg">8</Button>
                <Button onClick={this.handleNumClick} value="9" size="lg">9</Button>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="2">
                <Button onClick={this.handleNumClick} value="*" size="lg">*</Button>
                <Button onClick={this.handleNumClick} value="0" size="lg">0</Button>
                <Button onClick={this.handleNumClick} value="#" size="lg">#</Button>
              </Col>
            </Row>
          </Col>
        </Row>
    );
  }
}
