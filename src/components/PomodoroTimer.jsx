import React, { Component } from "react";
import "./PomodoroTimer.css";
import Info from "./Info";
import { CSSTransitionGroup } from "react-transition-group";
import icon from "../assets/alarm_on.png";
import Timer from "./Timer";

class PomodoroTimer extends Component {
  state = {
    toggleInfo: false,
    timerActive: false,
    time: 1500000,
    timerType: "Pomodoro",
    offsetModifier: 1
  };
  handleIncrementTime = () =>
    this.setState(prevState => ({ time: (prevState.time += 300000) }));
  handleDecrementTime = () => {
    if (this.state.time > 300000) {
      this.setState(prevState => ({ time: (prevState.time -= 300000) }));
    }
  };
  handleStartTimer = () => {
    this.initialStateTime = this.state.time;
    const startTime = Date.now();
    this.timer = setInterval(() => {
      if (this.state.time <= 0) {
        this.setState({ offsetModifier: 0 });
        clearInterval(this.timer);
        if ("Notification" in window) {
          var text =
            this.state.timerType === "Pomodoro"
              ? "Take a break."
              : "Time to work.";
          new Notification("Finished!", { body: text, icon: icon });
        }
      } else {
        const lapsedTime = Date.now() - startTime;
        this.setState({
          time: this.initialStateTime - lapsedTime,
          offsetModifier: this.state.time / this.initialStateTime
        });
      }
    }, 10);
    this.setState({ timerActive: true });
  };
  handleResetTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerActive: false, offsetModifier: 1 });
    if (this.state.time < 50) {
      this.state.timerType === "Pomodoro"
        ? this.setState({ timerType: "Rest", time: 300000 })
        : this.setState({ timerType: "Pomodoro", time: 1500000 });
    } else {
      this.setState({ time: this.initialStateTime });
    }
  };
  handleToggleInfo = () => {
    this.setState({ toggleInfo: !this.state.toggleInfo });
  };
  render() {
    const { timerType, toggleInfo, timerActive, time, offsetModifier } = this.state;
    if ("Notification" in window && Notification.permission !== "denied") {
      Notification.requestPermission();
    }
    return (
      <div>
        {/* Use two separate backgrounds to transition color 
            via opacity because gradients are not animatable. */}
        <div className="PomodoroBackground" />
        {/* CSSTransitionGroup applies fade to mounting and unmounting elements. */}
        <CSSTransitionGroup
          transitionName="gradientTransition"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={500}
        >
          {timerType === "Rest" ? (
            <div className="RestBackground" key="RestBackground" />
          ) : (
            ""
          )}
        </CSSTransitionGroup>
        <div className="PomodoroTimer">
          <Info
            visibility={toggleInfo}
            toggle={this.handleToggleInfo}
          />
          <button
            className="material-icons topleft"
            onClick={this.handleToggleInfo}
          >
            <i>info_outline</i>
          </button>
          <div className="flex-container">
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={500}
            >
              {!timerActive ? (
                <h3 className="message" key="set">
                  Set a time.
                </h3>
              ) : time < 50 ? (
                <h3 className="message" key="done">
                  Done.
                </h3>
              ) : timerType === "Rest" ? (
                <h3 className="message" key="rest">
                  Rest.
                </h3>
              ) : (
                <h3 className="message" key="focus">
                  Focus.
                </h3>
              )}
            </CSSTransitionGroup>
            {/* offsetModifier state updates the radial 
                timer based on remaining time. */}
            <Timer
              timerActive={timerActive}
              time={time}
              handleIncrementTime={this.handleIncrementTime}
              handleDecrementTime={this.handleDecrementTime}
              handleStartTimer={this.handleStartTimer}
              handleResetTimer={this.handleResetTimer}
              offsetModifier={offsetModifier}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;
