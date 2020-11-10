import React from 'react';

import styled from 'styled-components';
import './NavBar.css';

const Ul = styled.div`
    z-index: 2;
    @media only screen and (max-width:375px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0px;
        height: 489px;
        width: 232px;
        padding-top: 0px;
        transition: transform 0.3s ease-in-out;

        .learnable-menu, .startzone-menu, .agora-menu, .about-menu, .contact-menu, .main-navigation-bar-button-text {
            color: #273043;
            margin-right: 20px;
        }
    }
`;

function NavMenu({open}) {
    return (
            <nav className="main-navigation-bar">
                <Ul open={open} className="main-menu-ul">
                    <li className="main-menu-li"><a className="learnable-menu" href="/learnable">Learnable</a></li>
                    <li className="main-menu-li"><a className="agora-menu" href="/">Agora</a></li>
                    <li className="main-menu-li"><a className="startzone-menu" href="/">StartZone</a></li>
                    <li className="main-menu-li"><a className="about-menu" href="/">About</a></li>
                    <li className="main-menu-li"><a className="contact-menu" href="/">Contact</a></li>

                    <li><a href="/" className="devstudio-text">build a product with</a></li>
                    <li><a href="/"><button className="main-navigation-bar-button"></button><p className="main-navigation-bar-button-text">devstudio</p></a></li>
                </Ul>
            </nav>
    );
}

export default NavMenu;
