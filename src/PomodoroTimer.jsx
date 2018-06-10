import React, { Component } from 'react';
import './PomodoroTimer.css';
import Info from './Info';
import { CSSTransitionGroup } from 'react-transition-group';

class Timer extends Component {
  render() {
    const hours = Math.floor(this.props.time / 1000 / 60 / 60);
    const minutes = Math.floor((this.props.time / 1000 / 60) % 60);
    const seconds = Math.floor((this.props.time / 1000) % 60);
    return (
      <div>
        <svg width="17em" height="17em" viewBox="0 0 20em 20em">
          <circle cx="8.5em" cy="8.5em" r="5.8em" fill="none" stroke="#FFF" strokeWidth=".05em"></circle>
          <circle className="pulse" cx="8.5em" cy="8.5em" r="5.8em" fill="none" stroke="#FFF" strokeWidth=".2em" strokeDasharray="36.442em" strokeDashoffset={36.442 * this.props.offsetModifier + "em"}></circle>
        </svg> 
        <div className="timer flex-container">
          <button className={!this.props.timerActive ? "" : "hide"} onClick={this.props.handleIncrementTime}>
            <i className="material-icons">arrow_drop_up</i>
          </button>
          <p>
            {hours ? hours + ":" : ""}
            {minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}:
            {seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}
          </p>
          <button className={!this.props.timerActive ? "" : "hide"} onClick={this.props.handleDecrementTime}>
            <i className="material-icons">arrow_drop_down</i>
          </button>
        </div>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {!this.props.timerActive ? (
            <button
              className="material-icons play-reset"
              onClick={this.props.handleStartTimer}
              key="start"
            >
              <i>play_arrow</i>
            </button>
          ) : (
            <button
              className="material-icons play-reset"
              onClick={this.props.handleResetTimer}
              key="reset"
            >
              <i>close</i>
            </button>
          )}
        </CSSTransitionGroup>
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
      (this.state.timerType == "Pomodoro") ? this.setState({ timerType: "Rest", time: 300000 }) : this.setState({ timerType: "Pomodoro", time: 1500000 });
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
    return (
      <div>
        <div className="PomodoroBackground" key="PomodoroBackground"></div>
        <CSSTransitionGroup
          transitionName="gradientTransition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
         >
          {this.state.timerType == "Rest" ? <div className="RestBackground" key="RestBackground"></div> : '' }
        </CSSTransitionGroup>
        <div className="PomodoroTimer">
          <Info visibility={this.state.toggleInfo} toggle={this.handleToggleInfo}/>
          <button className="material-icons topleft" onClick={this.handleToggleInfo}><i>info_outline</i></button>
          <div className="flex-container">
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {!this.state.timerActive ? <h3 className="message" key="set">Set a time.</h3> : (this.state.time < 50) ? <h3 className="message" key="done">Done.</h3> : this.state.timerType == "Rest" ? <h3 className="message" key="rest">Rest.</h3> : <h3 className="message" key="focus">Focus.</h3>}
            </CSSTransitionGroup>
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
      </div>
    );
  }
}

export default PomodoroTimer;
