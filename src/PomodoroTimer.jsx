import React, { Component } from 'react';
import './PomodoroTimer.css';
import Info from './Info'

class Timer extends Component {
  handleIncrementTime = () => {
    this.setState({ state: (this.state.time += 300000) });
  };
  handleDecrementTime = () => {
    if (this.state.time > 300000) {
      this.setState({ time: (this.state.time -= 300000) });
    }
  };
  handleStartTimer = () => {
    this.initialStateTime = this.state.time;
    const startTime = Date.now();
    this.timer = setInterval(() => {
      if (this.state.time < 10) {
        clearInterval(this.timer);
      } else {
        const lapsedTime = Date.now() - startTime;
        this.setState({ time: this.initialStateTime - lapsedTime });
      }
    }, 10);
    this.setState({ timerActive: true });
  };
  handleResetTimer = () => {
    clearInterval(this.timer);
    this.setState({ time: this.initialStateTime, timerActive: false });
  };
  render() {
    const hours = Math.floor(this.state.time / 1000 / 60 / 60);
    const minutes = Math.floor((this.state.time / 1000 / 60) % 60);
    const seconds = Math.floor((this.state.time / 1000) % 60);
    return (
      <div className="timer-flex-container">
        <div className="circle flex-container">
          {!this.state.timerActive ? (
            <button onClick={this.handleIncrementTime}>
              <i className="material-icons">arrow_drop_up</i>
            </button>
          ) : (
            ""
          )}
          <p>
            {hours ? hours + ":" : ""}
            {minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}:
            {seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}
          </p>
          {!this.state.timerActive ? (
            <button onClick={this.handleDecrementTime}>
              <i className="material-icons">arrow_drop_down</i>
            </button>
          ) : (
            ""
          )}
        </div>
        {!this.state.timerActive ? (
          <button
            className="material-icons play-reset"
            onClick={this.handleStartTimer}
          >
            <i>play_arrow</i>
          </button>
        ) : (
          <button
            className="material-icons play-reset"
            onClick={this.handleResetTimer}
          >
            <i>close</i>
          </button>
        )}
      </div>
    );
  }
}

class PomodoroTimer extends Component {
  state = { toggleInfo: false, timerActive: false, time: 1500000 };
  handleToggleInfo = () => {
    !this.state.toggleInfo
      ? this.setState({ toggleInfo: true })
      : this.setState({ toggleInfo: false });
  };
  render() {
    const Message = <h3 className="message">Focus...</h3>
    return (
      <div className="PomodoroTimer"> 
        <Info visibility={this.state.toggleInfo} toggle={this.handleToggleInfo}/>
        <button className="material-icons topleft" onClick={this.handleToggleInfo}><i>info_outline</i></button>
        <div className="flex-container">
          {Message}
          <Timer />
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;
