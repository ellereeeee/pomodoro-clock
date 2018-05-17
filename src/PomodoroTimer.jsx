import React, { Component } from 'react';
import './PomodoroTimer.css';
import Info from './Info'

class Timer extends Component {
  state = { timerActive: false, time: 1500000 };
  handleIncrementTime = () => {
    this.setState({ state: (this.state.time += 300000) });
  };
  handleDecrementTime = () => {
    this.setState({ time: (this.state.time -= 300000) });
  };
  handleStartTimer = () => {
    this.initialStateTime = this.state.time;
    const startTime = Date.now();
    this.timer = setInterval(() => {
      const lapsedTime = Date.now() - startTime;
      this.setState({ time: this.initialStateTime - lapsedTime });
    }, 10);
    this.setState({ timerActive: true });
  };
  render() {
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
          <p>25:00:00</p> {/*Timer placeholder*/}
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
  state = { toggleInfo: false};
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
