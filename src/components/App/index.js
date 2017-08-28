import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the landing page</h1>
        <Link to = "/counter">Counter</Link>
      </div>
    );
  }
}

export default App;
