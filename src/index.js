import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PomodoroTimer from './components/PomodoroTimer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <PomodoroTimer />
  , document.getElementById('root'));
registerServiceWorker();
