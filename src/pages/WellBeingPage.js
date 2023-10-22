import '../App.css';
import React, { useState } from 'react';
import Logo from '../assets/images/Logo.svg';
import Avatar from '../assets/images/Avatar.png';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import {useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WellBeingPage() {

    const tabs = ['Physical', 'Mental', 'Wellbeing'];

    const [currentTab, setCurrentTab] = useState(3);
    const navigate = useNavigate();

    function getCurrentDate() {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date;
    }

    // Define a function to handle tab changes
    const handleTabChange = (event, newValue) => {
            setCurrentTab(newValue);
    }

    function goPhysical(){
        navigate('/physicalhealth');
    }

    function goMental(){
        navigate('/mentalhealth');
    }

    const getApi = async ()=> {
        axios.get("/wellbeings").then((res)=>{console.log(res.data)});
      };
  
      useEffect(()=>{
        getApi();
      }, []);
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

            <div className="App">
                <Paper>
                    <Tabs
                    >
                        {tabs.map((tab, index) => (
                            <Tab key={index} label={tab} />
                        ))}
                    </Tabs>
                </Paper>
                {currentTab === 0 && <button onClick={goPhysical}></button>}
                {currentTab === 1 && <button onClick={goMental}></button>}
            </div>
        </div>
            
    );

}

export default WellBeingPage;
