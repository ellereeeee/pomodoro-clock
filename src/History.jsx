import React, { Component } from 'react';
import './History.css';
import { Link } from 'react-router-dom';

class TaskItem extends Component {
  render () {
    return (
      <div className="History-item">
        <i class="material-icons">alarm_on</i>
        <p>Work on Pomodoro for 25</p>
      </div>
    );
  }
}

class History extends Component {
  render() {
    return (
      <div className="History">
        <div className="test">
          <h3 className="topleft">History</h3>
          <i className="material-icons topright"><Link to="/">arrow_back</Link></i>
        </div>
        <div className="History-flex-container">
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
      </div>
    );
  }
}

export default History;