import React, { Component } from 'react';
import './Nike.css';
import logoBlack from '../../assets/air-jordan-logo-black.jpg'
import dontQuit from '../../assets/dont-quit.jpeg'
import shoes from '../../assets/Screen Shot 2018-01-06 at 12.38.27 AM.png'


// clone of nike's website, not functional. just to show styling.
class Nike extends Component {
    render() {
        return (
            <div className="Nike">
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

                <div className='ad'>

                </div>

                <div className='landing-pic'>
                    <img src={dontQuit} />
                </div>

                <div className='section-break'>

                </div>

                <div className='shoe-title'>
                    <span>Start 2018 Fresh</span>
                </div>

                <div className='shoe-container'>
                    <img src={shoes}/>
                    <img src={shoes}/>
                    <img src={shoes}/>
                    <img src={shoes}/>
                </div>
            </div>
        );
    }
}

export default Nike;
