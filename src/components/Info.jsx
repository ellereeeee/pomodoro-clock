import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className={this.props.visibility ? "info show" : "info"}>
        <button className="material-icons topright" onClick={this.props.toggle}><i>close</i></button>
        <p>This is a <a href="https://francescocirillo.com/pages/pomodoro-technique" target="_blank">pomodoro clock</a> application, or a productivity timer. Work for 25 minutes then rest for 5 minutes. Repeat 3 more times for a total of 2 hours, then take a 15 minute break. Repeat the whole cycle.</p>
        <h3>Buttons:</h3>
        <div className="info-flex-container">
          <i className="material-icons">play_arrow</i><p className="same-line">start timer</p>
        </div>
        <div className="info-flex-container"> 
          <i className="material-icons">arrow_drop_up</i><p className="same-line">increment by 5 minutes</p>
        </div>
        <div className="info-flex-container">
          <i className="material-icons">arrow_drop_down</i><p className="same-line">decrement by 5 minutes</p>
        </div>
        <div className="info-flex-container">
          <i className="material-icons">close</i><p className="same-line">reset timer</p>
        </div>
      </div>
    );
  }
}

export default Info;