import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import multivrsImg from './multivrsImg.jpg';

class Cover extends Component {
  constructor (props) {
    super(props);
    this.state = { progress: 0 };
  }

  componentWillMount () {
    const loaderFunc = setInterval(() => {
      console.log("timeout");
      const progress = this.state.progress + 1;
      if (progress === 50) {
        clearInterval(loaderFunc);
        const fastLoaderFunc = setInterval(() => {
          console.log("timeout");
          const progress = this.state.progress + 5;
          if (progress >= 100) {
            window.location.assign("/pr");
            clearInterval(fastLoaderFunc);
          }
          this.setState({ progress });
        }, 80);
      }
      this.setState({ progress });
    }, 40);
  }
  render () {
    return (
      <div style={{ backgroundImage: `url(${multivrsImg})`, backgroundSize: "contain", width: "100%", height: "500px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <Progress value={this.state.progress} />
      </div>
    );
  }
}

export default Cover;
