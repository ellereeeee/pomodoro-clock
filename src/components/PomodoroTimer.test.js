import React from 'react';
import ReactDOM from 'react-dom';
import PomodoroTimer from './PomodoroTimer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PomodoroTimer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
