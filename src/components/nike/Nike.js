import React, { Component } from 'react';
import './Nike.css';
import logoBlack from '../../assets/air-jordan-logo-black.jpg'
import dontQuit from '../../assets/dont-quit.jpg'
import shoes from '../../assets/Screen Shot 2018-01-06 at 12.38.27 AM.png'
import running from '../../assets/running.jpeg'
import bras from '../../assets/bras.jpeg'
import couple from '../../assets/couple.jpeg'

// clone of nike's website, not functional. just to show styling.
class Nike extends Component {
    render() {
        return (
            <div className="Nike">
                <div className='header-container'>
                    <div className='nike-header'>
                        <div className='header-left'>
                            <div>NikePlus</div>
                            <div>img</div>
                            <div>Hurley</div>
                            <div>CONVERSE</div>
                        </div>

                        <div className='header-right'>
                            <div>Join / Log In To Nike+ Account</div>
                            <div>Help</div>
                            <div>img</div>
                            <div>img</div>
                        </div>
                    </div>

                    <div className='menu'>
                        <div className='menu-left'>
                            <div>swoosh</div>
                        </div>
                        <div className='menu-center'>
                            <div>MEN</div>
                            <div>WOMEN</div>
                            <div>BOYS</div>
                            <div>GIRLS</div>
                            <div>CUSTOMIZE</div>
                            <div>GIFT CARDS</div>
                        </div>
                        <div className='menu-right'>Search bar</div>
                    </div>
                </div>

                <div className='ad'>

                </div>

                <div className='landing-pic'>
                    <img src={dontQuit} />
                </div>

                <div className='section-break'>
                    <div className='break-content'>
                        <div className='break-content-top'>
                            <span className='break-header'>Hit the Gym Harder This Year</span>
                            <span className='break-info'>The new Metcon 4 is lighter, tougher and ready for a year of
                             high-intesity training and weightlifting</span>
                            <div className='break-content-bottom'>
                                <span>Shop Men's</span>
                                <span>Shop Women's</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='shoe-title'>
                    <span>Start 2018 Fresh</span>
                </div>

                <div className='shoes'>
                    <div className='shoe-container'>
                        <img src={shoes} />
                        <span className='shoe-name'>Nike Zoom Fly</span>
                        <span className='shoe-link'>Shop Zoom Fly</span>
                    </div>
                    <div className='shoe-container'>
                        <img src={shoes} />
                        <span className='shoe-name'>Nike Zoom Fly</span>
                        <span className='shoe-link'>Shop Zoom Fly</span>
                    </div>
                    <div className='shoe-container'>
                        <img src={shoes} />
                        <span className='shoe-name'>Nike Zoom Fly</span>
                        <span className='shoe-link'>Shop Zoom Fly</span>
                    </div>
                    <div className='shoe-container'>
                        <img src={shoes} />
                        <span className='shoe-name'>Nike Zoom Fly</span>
                        <span className='shoe-link'>Shop Zoom Fly</span>
                    </div>
                </div>

                <div className='running-pic'>
                    <img src={running} />
                </div>

                <div className='section-break'>

                </div>

                <div className='bras-pic'>
                    <img src={bras} />
                </div>

                <div className='couple-pic'>
                    <img src={couple} />
                </div>

                <div className='footer-container'>
                    <div className='footer-content'>

                    </div>
                </div>
            </div >
        );
    }
}

export default Nike;
