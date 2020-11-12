import React from 'react';
import logo from './Genesyslogo.png';
import './NavBar.css';
import NavToggler from './NavToggler';


function MainNav() {
    return(
        <div className="main-navigation-div">
            <div>
                <a href="/"><img src={logo} className="genesys-logo" alt="logo" /></a>
            </div>
            <NavToggler />        
        </div>
    );
}
 

export default MainNav;