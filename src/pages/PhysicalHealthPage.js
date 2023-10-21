import React from 'react';
import '../App.css';
import Logo from '../assets/images/Logo.svg';

function SimplePage() {
    return (
        <div className='App'>
            <div id='top-div'>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div>
                    <div id='nav-pill'>
                        Built by Team DevHealth
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimplePage;




