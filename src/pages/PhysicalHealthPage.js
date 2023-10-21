import React from 'react';
import '../App.css';
import Logo from '../assets/images/Logo.svg';
import Avatar from '../assets/images/Avatar.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function SimplePage(props) {

    function getCurrentDate() {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date;
    }


    return (
        <div className='App'>
            <div id='top-div'>
                <div>
                <img style={{ width: "130px"}} src={Logo} alt="Logo" />
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
                <p style={{marginTop: "-5px"}}>
                    Today is {getCurrentDate()}. Make sure to hydrate and move around.
                </p>
            </div>

        </div>
    );
}

export default SimplePage;




