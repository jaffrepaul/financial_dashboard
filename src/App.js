import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut, Radar, Polar } from 'react-chartjs-2';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="one">one</div>
        <div className="two">two</div>
        <div className="three">three</div>
        <div className="four">four</div>
      </div>
    );
  }
}

export default App;
