import React from 'react';
import Logo from '../../../../Photos/Icons/Sitelogo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light navbar-main container fixed-top  ">
        <div className="container-fluid">
        <img className="img-fluid" style={{width:"50px"}} src={Logo} alt=""/>
          <a className="navbar-brand text-white navbar-name" href="/">Carbon Hood</a>
          <button className="navbar-toggler toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse main-container"id="navbarSupportedContent">
            <ul className="navbar-nav navbar-container">
              <li className="nav-item ">
                <a className="nav-link active text-white navbar-a" aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  DASHBOARD
                </a>
                <ul  style={{backgroundColor: '#2f3542'}} className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item text-white" href="/admin">ADMIN</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/" tabindex="-1" aria-disabled="true">SERVICES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/" tabindex="-1" aria-disabled="true">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/" tabindex="-1" aria-disabled="true">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;