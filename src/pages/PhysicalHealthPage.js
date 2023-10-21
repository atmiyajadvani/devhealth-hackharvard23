import React from 'react';
import '../App.css';
import Logo from '../assets/images/Logo.svg';
import Avatar from '../assets/images/Avatar.png';

function SimplePage() {
    return (
        <div className='App'>
            <div id='top-div'>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div id='top-nav-right'>
                    <div id='nav-pill'>
                        Your Team: HackHarvard 
                    </div>
                    <img id='avatar-img' src={Avatar} alt="Avatar" />
                </div>
            </div>

            <div id='main-div'>
                <h1>Overview</h1>
            </div>

        </div>
    );
}

export default SimplePage;




