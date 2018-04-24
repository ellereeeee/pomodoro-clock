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

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <i class="material-icons topleft">info_outline</i>
        <i class="material-icons topright">history</i>
        <div className="flex-container">
          <TaskInput />
        </div>
      </div>
    );
  }
}

export default App;
