import React, { Component } from "react";
import "./Timer.css";
import { CSSTransitionGroup } from "react-transition-group";

class Timer extends Component {
  render() {
    const hours = Math.floor(this.props.time / 1000 / 60 / 60);
    const minutes = Math.floor((this.props.time / 1000 / 60) % 60);
    const seconds = Math.floor((this.props.time / 1000) % 60);
    return (
      <div>
        <svg width="17em" height="17em" viewBox="0 0 20em 20em">
          <circle
            cx="8.5em"
            cy="8.5em"
            r="5.8em"
            fill="none"
            stroke="#FFF"
            strokeWidth=".05em"
          />
        </svg>
        <svg
          className="pulse"
          width="17em"
          height="17em"
          viewBox="0 0 20em 20em"
        >
          <circle
            cx="8.5em"
            cy="8.5em"
            r="5.8em"
            fill="none"
            stroke="#FFF"
            strokeWidth=".2em"
            strokeDasharray="36.442em"
            strokeDashoffset={36.442 * this.props.offsetModifier + "em"}
          />
        </svg>
        <div className="timer flex-container">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={500}
          >
            {!this.props.timerActive ? (
              <button
                className="dropUp"
                key="increment"
                onClick={this.props.handleIncrementTime}
              >
                <i className="material-icons">arrow_drop_up</i>
              </button>
            ) : (
              ""
            )}
          </CSSTransitionGroup>
          {this.props.time > 0 ? (
            <p>
              {hours ? hours + ":" : ""}
              {minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}:
              {seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}
            </p>
          ) : (
            <p>00:00</p>
          )}
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={500}
          >
            {!this.props.timerActive ? (
              <button
                className="dropDown"
                key="decrement"
                onClick={this.props.handleDecrementTime}
              >
                <i className="material-icons">arrow_drop_down</i>
              </button>
            ) : (
              ""
            )}
          </CSSTransitionGroup>
        </div>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={1000}
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

export default Timer;
