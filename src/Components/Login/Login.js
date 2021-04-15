import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import loginLogo from '../../Photos/Icons/login.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';



const Login = () => {
    document.title="Login";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);

        }).catch(function(error) {
            console.log(error);
          });
    }

    return (
        <div className="login-section container">
            <div className="login-btn"> 
            <button className="btn"style={{backgroundColor:"#ff6b6b"}} onClick={handleGoogleSignIn}> <FontAwesomeIcon className="icon" icon={faGooglePlusG} /> Sign In with Google
            </button>
            </div>
            <div className="login-img">
                <img className="img-fluid" src={loginLogo} alt=""/>
            </div>
        </div>
    );
};

export default Login;