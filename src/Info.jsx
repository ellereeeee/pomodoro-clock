import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className="info">
        <i class="material-icons topright">close</i>
        <p>This is a Pomodoro Clock application. It utilizes a time management method to break work into intervals separated by short breaks. After four work intervals are finished, take a longer break and repeat.</p>
        <h3>Buttons:</h3>
        <i className="material-icons">play_arrow</i><p>start timer</p>
        <i className="material-icons">arrow_drop_up</i><p>increment by 5 minutes</p>
        <i className="material-icons">arrow_drop_down</i><p>decrement by 5 minutes</p>
        <i className="material-icons">close</i><p>reset timer</p>
        <i className="material-icons">history</i><p>view pomodoro history</p>
        <p>Check <a href="https://francescocirillo.com/pages/pomodoro-technique" target="_blank">here</a> for more info on the Pomodoro Technique.</p>
      </div>
    );
  }
}

export default Info;