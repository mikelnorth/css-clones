import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      // home div will be the outer most container
      <div className="Home">
        <div className="header">
          <h1 className="title">Here are some links to websites I have Cloned</h1><br />
          <p>These websites are not fully functional, but are to show my ability with css styling, flexbox, and SCSS!</p>
        </div>

        {/* body div contains all of the content */}
        <div className='body'>
          <div className='link-container1'>
            <Link to='/nike' target='_blank'><div className='img-link1'></div></Link>
            <div className='link-info1'>
            {/* link to cloned website. */}
              <a href='https://www.nike.com/us/en_us/' target='_blank' style={{textDecoration: 'none'}}><h2>Clone of nike.com</h2></a>
              {/* description of cloned website. */}
              <p>Apple Inc. is an American multinational technology company.</p>
            </div>
          </div>

          <div className='link-container2'>
            <div className='img-link2'></div>
            <div className='link-info2'>
            <a href='https://www.berkshirehathawayhs.com/' target='_blank' style={{textDecoration: 'none'}}><h2>Clone of berkshirehathawayhs.com</h2></a>
              <p>Apple Inc. is an American multinational technology company.</p>
            </div>
          </div>

          <div className='link-container3'>
            <div className='img-link3'></div>
            <div className='link-info3'>
            <a href='https://www.vivint.com/' target='_blank' style={{textDecoration: 'none'}}><h2>Clone of vivint.com</h2></a>
              <p>Apple Inc. is an American multinational technology company.</p>
            </div>
          </div>

          <div className='link-container4'>
            <div className='img-link4'></div>
            <div className='link-info4'>
            <a href='https://www.overstock.com/' target='_blank' style={{textDecoration: 'none'}}><h2>Clone of overstock.com</h2></a>
              <p>Apple Inc. is an American multinational technology company.</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
