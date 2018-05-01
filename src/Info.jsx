import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className="info">
        <i class="material-icons topright">close</i>
        <p>This is a Pomodoro Clock application. It utilizes a time management method to break work into intervals separated by short breaks. After four work intervals are finished, take a longer break and repeat.</p>
        <h3>Buttons:</h3>
        <div>
          <i className="material-icons">play_arrow</i><p className="same-line">start timer</p>
        </div>
        <div>  
          <i className="material-icons">arrow_drop_up</i><p className="same-line">increment by 5 minutes</p>
        </div>
        <div>
          <i className="material-icons">arrow_drop_down</i><p className="same-line">decrement by 5 minutes</p>
        </div>
        <div>
          <i className="material-icons">close</i><p className="same-line">reset timer</p>
        </div>
        <div>
          <i className="material-icons">history</i><p className="same-line">view pomodoro history</p>
        </div>
        <p className="link">Check <a href="https://francescocirillo.com/pages/pomodoro-technique" target="_blank">here</a> for more info on the Pomodoro Technique.</p>
      </div>
    );
  }
}

export default Info;