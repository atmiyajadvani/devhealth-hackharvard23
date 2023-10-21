import '../App.css';
import React from 'react';
import Logo from '../assets/images/Logo.svg';
import GoogleButton from 'react-google-button'

function SignInPage() {
    return (
      <div className="App">
        <div id='pill'>
          Built by Team DevHealth
        </div>

        <img style={{marginTop: "30px", width: "160px"}} src={Logo} alt="Logo" />
        <h1 style={{fontSize: "38px", marginTop: "50px"}}>The Well-Being platform <br/>for Developers</h1>
        <p style={{fontSize: "20px", marginTop: "-10px"}}>For developers to prioritize well-being through personalized health insights.</p>

        <div className='App'>
          {/* <button id='apple-login'>Sign in with Apple</button> */}
          <GoogleButton style={{marginTop: "120px"}}
            onClick={() => { console.log('Google button clicked') }}/>
          <p>By continuing with Apple, you agree to DevHealth’s Term of Service and Privacy Policy</p>
        </div>
      </div>

    );
}

export default SignInPage;
