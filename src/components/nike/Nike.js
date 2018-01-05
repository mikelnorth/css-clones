import React, { Component } from 'react';
import './Nike.css';
import logoBlack from '../../assets/air-jordan-logo-black.jpg'

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
            </div>
        );
    }
}

export default Nike;
