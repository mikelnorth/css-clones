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
          <div className='link-container1'>
            <div className='img-link1'></div>
            <div className='link-info1'>
              <h2>Clone of nike.com</h2>
              <p>Apple Inc. is an American multinational technology company.</p>
            </div>
          </div>

          <div className='link-container2'>
            <div className='img-link2'></div>
            <div className='link-info2'>
              <h2>Clone of berkshirehathawayhs.com</h2>
              <p>Apple Inc. is an American multinational technology company.</p>
            </div>
          </div>

          <div className='link-container3'>
            <div className='img-link3'></div>
            <div className='link-info3'>
              <h2>Clone of vivint.com</h2>
              <p>Apple Inc. is an American multinational technology company.</p>
            </div>
          </div>

          <div className='link-container4'>
            <div className='img-link4'></div>
            <div className='link-info4'>
              <h2>Clone of overstock.com</h2>
              <p>Apple Inc. is an American multinational technology company.</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
