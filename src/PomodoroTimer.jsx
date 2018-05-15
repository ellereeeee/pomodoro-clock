import React, { Component } from 'react';
import './PomodoroTimer.css';
import Info from './Info'

class Message extends Component {
  render() {
    return (
      <h3 className="message">Focus...</h3>
    );
  }
}

class Timer extends Component {
  state = { timerActive: false, time: 25 };
  render() {
    return (
      <div className="timer-flex-container">
        <div className="circle flex-container">
          <i className="material-icons">arrow_drop_up</i>
          <p>25:00:00</p> {/*Timer placeholder*/}
          <i className="material-icons">arrow_drop_down</i>
        </div>
        <button><i className="material-icons play-arrow">play_arrow</i></button>
      </div>
    );
  }
}

class PomodoroTimer extends Component {
  state = { toggleInfo: false};
  handleToggleInfo = () => {
    !this.state.toggleInfo
      ? this.setState({ toggleInfo: true })
      : this.setState({ toggleInfo: false });
  };
  render() {
    return (
      <div className="PomodoroTimer"> 
        <Info visibility={this.state.toggleInfo} toggle={this.handleToggleInfo}/>
        <button className="material-icons topleft" onClick={this.handleToggleInfo}><i>info_outline</i></button>
        <div className="flex-container">
          <Message />
          <Timer />
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;
