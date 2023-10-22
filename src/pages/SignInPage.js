import '../App.css';
import React from 'react';
import Logo from '../assets/images/Logo.svg';
import GoogleButton from 'react-google-button';

import PhysicalHealthPage from './PhysicalHealthPage';
import GoalsPage from './GoalsPage';
import MentalHealthPage from './MentalHealthPage';
import WellBeingPage from './WellBeingPage';

import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignInPage() {

  const navigate = useNavigate();
  function authenticateUser() {
    console.log("User authenticated");
  
    fetch('/auth/google', {
      method: 'GET',
    })
      .then(response => {
        if (response.status === 200) {
          // Authentication was successful, you can redirect or perform other actions
          console.log('Authentication successful');
          navigate('/physicalhealth');
          
        } else if (response.status === 401) {
          console.log('Authentication failed');
        } else {
          console.log('Unexpected response status:', response.status);
        }
      })
      .catch(error => {
        console.error('Error during authentication:', error);
        // Handle network or other errors
      });
  }
  

  const getApi = async () => {
    axios.get("/").then(res => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      <div id='pill'>
        Built by Team DevHealth
      </div>

      <img style={{ marginTop: "30px", width: "160px" }} src={Logo} alt="Logo" />
      <h1 style={{ fontSize: "38px", marginTop: "50px" }}>The Well-Being Platform <br /> for Developers</h1>
      <p style={{ fontSize: "20px", marginTop: "-10px" }}>For developers to prioritize well-being through personalized health insights.</p>

      <div className='App'>
        <GoogleButton style={{ marginTop: "120px" }}
          onClick={authenticateUser} />
        <p>By continuing with Apple, you agree to DevHealth’s Terms of Service and Privacy Policy</p>
      </div>
    </div>
  );
}

export default SignInPage;
