import React, { Component } from 'react';
import './PomodoroTimer.css';
import Info from './Info'

class Timer extends Component {
  render() {
    const hours = Math.floor(this.props.time / 1000 / 60 / 60);
    const minutes = Math.floor((this.props.time / 1000 / 60) % 60);
    const seconds = Math.floor((this.props.time / 1000) % 60);
    return (
      <div>
        <svg width="20em" height="20em">
          <circle cx="10em" cy="10em" r="5.8em" fill="none" stroke="#FFF" stroke-width=".05em"></circle>
          <circle className="pulse" cx="10em" cy="10em" r="5.8em" fill="none" stroke="#FFF" stroke-width=".2em" stroke-dasharray="36.442em" stroke-dashoffset={36.442 * this.props.offsetModifier + "em"}></circle>
        </svg> 
        <div className="timer flex-container">
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
  state = { toggleInfo: false, timerActive: false, time: 1500000, timerType: "Pomodoro", offsetModifier: 1 };
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
      if (this.state.time < 50) {
        this.setState({ offsetModifier: 0 });
        clearInterval(this.timer);
      } else {
        const lapsedTime = Date.now() - startTime;
        this.setState({ time: this.initialStateTime - lapsedTime });
        this.setState({
          offsetModifier: this.state.time / this.initialStateTime
        });
      }
    }, 10);
    this.setState({ timerActive: true });
  };
  handleResetTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerActive: false });
    this.setState({ offsetModifier: 1 });
    if (this.state.time < 50) {
      (this.state.timerType == "Pomodoro") ? this.setState({ timerType: "Rest", time: 300000 }) : this.setState({ timerType: "Pomodoro", time: 3000 });
        } else {
      this.setState({ time: this.initialStateTime });
    }
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
            offsetModifier={this.state.offsetModifier}        
          />
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;
