// components/Google/google.jsx
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = ({ onLoginSuccess, onLoginError, className }) => {
    const login = useGoogleLogin({
        onSuccess: onLoginSuccess,
        onError: onLoginError,
    });

    return (
        <button className={className} onClick={() => login()}>
            <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                style={{ width: 20, height: 20, marginRight: 10 }}
            />
            Sign in with Google
        </button>
    );
};

export default GoogleLoginButton;
