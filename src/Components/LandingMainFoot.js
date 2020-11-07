import React from 'react';
import Footimage from './Footimage.png';
import Twitter from './twitter.png';
import Facebook from './facebook.png';
import LinkedIn from './linkedin.png';
import Instagram from './instagram.png';
import Youtube from './youtube.png';
import Vimeo from './vimeo.png';
import Copyright from './copyright.png';
import './LandingFooter.css';

function LandingMainFoot() {
    return (
        <div className="landing-mainFoot">
            <ul className="landing-mainFootUl">
                <li><a id="aa1" href="#build">Build Software</a></li>
                <li><a id="aa2" href="#design">Design Different</a></li>
                <li><a id="aa3" href="#knowledge">Apply Your Knowledge</a></li>
                <li><a id="aa4" href="#faq">FAQ</a></li>
            </ul>

            <p className="landing-Foottxt">Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria</p>

            <a className="landing-Foottxt1" href="#contactus">Get in touch</a>

            <img src={Footimage} className="landing-footImage" alt="Footimage" />

            <p className="landing-Foottxt2">Learnable is proud to be a collaborative effort of all the arms of our product team</p>

            <a className="landing-Foottxt3" href="#headtodev">Head to DevStudio</a>

            <div className="landing-socialIcons">
                <img src={Twitter} className="landing-twitter" alt="twitter" />
                <img src={Facebook} className="landing-facebook" alt="facebook" />
                <img src={LinkedIn} className="landing-linkedin" alt="linkedin" />
                <img src={Instagram} className="landing-instagram" alt="instagram" />
                <img src={Youtube} className="landing-youtube" alt="youtube" />
                <img src={Vimeo} className="landing-vimeo" alt="vimeo" />
            </div>
            
            <img src={Copyright} className="landing-copyright" alt="copyright" />
            <p href="#copyright" className="landing-Foottxt4">Genesys 2020</p>

            <p href="#privacystatement" className="landing-Foottxt5">Privacy Statement</p>
        </div>
    );
}

export default LandingMainFoot;
