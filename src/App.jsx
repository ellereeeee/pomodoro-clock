import React, { Component } from 'react';
import PomodoroTimer from './PomodoroTimer';
import History from './History';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PomodoroTimer}/>
        <Route exact path="/history" component={History}/>
      </Switch>
    )
  }
}

export default App;