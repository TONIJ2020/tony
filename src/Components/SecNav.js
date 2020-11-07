import React from 'react';
import './NavBar.css';

function SecNav() {
    return(
        <div className="second-menu-navigation-div">
            <nav className="second-menu-navigation-bar">
                <ul className="second-menu-ul">
                    <li className="second-menu-li"><a className="home-menu" href="/learnable">home</a></li>
                    <li className="second-menu-li"><a className="software-developers-menu" href="/developers">software developers</a></li>
                    <li className="second-menu-li"><a className="product-designers-menu" href="/designers">Product designers</a></li>
                    <li className="second-menu-li"><a className="apply-menu" href="/apply">apply</a></li>
                    <li className="second-menu-li"><a className="journal-menu" href="/journal">journal</a></li>
                    <li className="second-menu-li"><a className="faq-menu" href="/faq">faq</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default SecNav;