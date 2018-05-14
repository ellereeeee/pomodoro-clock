import React, { Component } from 'react';
import './PomodoroTimer.css';
import Info from './Info'

class TaskInput extends Component {
  render() {
    return (
      <form>
        <input  className="input" placeholder="Enter task..." type ="text"  />
      </form>
    );
  }
}

class Timer extends Component {
  render() {
    return (
      <div>
        <div className="circle flex-container">
          <i className="material-icons">arrow_drop_up</i>
          <p>25:00:00</p> {/*Timer placeholder*/}
          <i className="material-icons">arrow_drop_down</i>
        </div>
        <i className="material-icons play-arrow">play_arrow</i>
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
        <i className="material-icons topright">history</i>
        <div className="flex-container">
          <TaskInput />
          <Timer />
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;
