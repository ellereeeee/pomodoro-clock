import React, { Component } from 'react';
import './App.css';

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
          <i class="material-icons">arrow_drop_up</i>
          <p>25:00:00</p> {/*Timer placeholder*/}
          <i class="material-icons">arrow_drop_down</i>
        </div>
        <i className="material-icons play-arrow">play_arrow</i>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <i class="material-icons topleft">info_outline</i>
        <i class="material-icons topright">history</i>
        <div className="flex-container">
          <TaskInput />
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
