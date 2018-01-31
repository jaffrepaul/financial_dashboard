import React, { Component } from 'react';

import './App.css';
import data1 from './data/data_half1.json';
import data2 from './data/data_half2.json';
// import preload from './data/data_half2.json';

class App extends Component {
  render() {
    return (
      // <div>
      //   <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
      // </div>
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
