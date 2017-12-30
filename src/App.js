import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">Here are some links to websites I have Cloned</h1><br />
          <p>These websites are not fully functional, but are to show my ability with css styling, flexbox, and SCSS!</p>
        </div>

        <div className='body'>
          <div className='left'>
            <div className='img-link1'></div>
            <div className='img-link3'></div>
          </div>

          <div className='right'>
            <div className='img-link2'></div>
            <div className='img-link4'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
