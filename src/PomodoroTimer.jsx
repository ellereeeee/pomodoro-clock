import React, { Component } from 'react';
import './PomodoroTimer.css';
import Info from './Info'

class Timer extends Component {
  render() {
    const hours = Math.floor(this.props.time / 1000 / 60 / 60);
    const minutes = Math.floor((this.props.time / 1000 / 60) % 60);
    const seconds = Math.floor((this.props.time / 1000) % 60);
    return (
      <div className="timer-flex-container">
        <div className="circle flex-container">
          {!this.props.timerActive ? (
            <button onClick={this.props.handleIncrementTime}>
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
          {!this.props.timerActive ? (
            <button onClick={this.props.handleDecrementTime}>
              <i className="material-icons">arrow_drop_down</i>
            </button>
          ) : (
            ""
          )}
        </div>
        {!this.props.timerActive ? (
          <button
            className="material-icons play-reset"
            onClick={this.props.handleStartTimer}
          >
            <i>play_arrow</i>
          </button>
        ) : (
          <button
            className="material-icons play-reset"
            onClick={this.props.handleResetTimer}
          >
            <i>close</i>
          </button>
        )}
      </div>
    );
  }
}

class PomodoroTimer extends Component {
  state = { toggleInfo: false, timerActive: false, time: 3000, timerType: "Pomodoro" };
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
        (this.state.timerType == "Pomodoro") ? this.setState({ timerType: "Rest" }) : this.setState({ timerType: "Pomodoro" });
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
  handleToggleInfo = () => {
    !this.state.toggleInfo
      ? this.setState({ toggleInfo: true })
      : this.setState({ toggleInfo: false });
  };
  render() {
    const Message = <h3 className="message">Focus...</h3>
    return (
      <div className={(this.state.timerType == "Pomodoro") ? "PomodoroTimer PomodoroBackground" : "PomodoroTimer RestBackground"}> 
        <Info visibility={this.state.toggleInfo} toggle={this.handleToggleInfo}/>
        <button className="material-icons topleft" onClick={this.handleToggleInfo}><i>info_outline</i></button>
        <div className="flex-container">
          {Message}
          <Timer 
            timerActive={this.state.timerActive}
            time={this.state.time}
            handleIncrementTime={this.handleIncrementTime}
            handleDecrementTime={this.handleDecrementTime}    
            handleStartTimer={this.handleStartTimer}
            handleResetTimer={this.handleResetTimer}        
          />
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;
