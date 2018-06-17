import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Title extends Component {
  render() {
    const hours = Math.floor(this.props.time / 1000 / 60 / 60);
    const minutes = Math.floor((this.props.time / 1000 / 60) % 60);
    const seconds = Math.floor((this.props.time / 1000) % 60);
    return (
      <div>
        <Helmet>
          {this.props.time > 0 ?
            <title>
              {hours ? hours.toString() + ":" : ""}
              {minutes === 0 ? "00" : minutes.toString() < 10 ? "0" + minutes.toString() : minutes.toString()}:
              {seconds === 0 ? "00" : seconds.toString() < 10 ? "0" + seconds.toString() : seconds.toString()}
            </title> :
            <title>00:00</title>
          }
        </Helmet>
      </div>
    );
  }
}

export default Title;