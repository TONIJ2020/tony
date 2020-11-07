import React from 'react'
import logo from './Genesyslogo.png'

function MainNav() {
    return(
        <div className="main-navigation-div">
            <a href="/"><img src={logo} className="genesys-logo" alt="logo" /></a>

            <nav className="main-navigation-bar">
                <ul className="main-menu-ul">
                    <li className="main-menu-li"><a className="learnable-menu" href="/learnable">Learnable</a></li>
                    <li className="main-menu-li"><a className="agora-menu" href="/">Agora</a></li>
                    <li className="main-menu-li"><a className="startzone-menu" href="/">StartZone</a></li>
                    <li className="main-menu-li"><a className="about-menu" href="/">About</a></li>
                    <li className="main-menu-li"><a className="contact-menu" href="/">Contact</a></li>
                </ul>
            </nav>
            

            <div>
                <a href="/" className="devstudio-text">build a product with</a>

                <a href="/"><button className="main-navigation-bar-button"><p className="main-navigation-bar-button-text">devstudio</p></button></a>
            </div>

            <i class="fa fa-bars main-navigation-navs__toggle" id="toggleNav" onClick={toggleMenu}></i>            
        </div>
    )
}

function toggleMenu(e) {
    var x = document.getElementsByClassName("main-menu-li");
    var y = document.getElementById('toggleNav')
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "block") {
            x[i].style.display = "none";
            y.className = 'fa fa-bars main-navigation-navs__toggle'
        } else {
            x[i].style.display = "block";
            y.className = 'fa fa-bars main-navigation-navs__toggle'
        }
    }
  }

export default MainNav;