import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from './components/Google/google.jsx';
import "./App.css"

const App = () => {
  const handleLoginSuccess = (response) => {
    console.log(response);
    console.log('ID Token:', response.credential); // This is the ID token
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId="411741985663-tg443sjtbg4m8k6m9mflf87r9or57jbm.apps.googleusercontent.com" >
      <div id='main'>
        <h1>Google Sign-In</h1>
        <GoogleLoginButton
          className="google-signin-btn"
          onLoginSuccess={handleLoginSuccess}
          onLoginError={handleLoginError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;