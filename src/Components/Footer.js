import React from 'react';

// import Footimage from '../Assets/Footimage.png';
// import Facebook from '../Assets/facebook.png';
// import Twitter from '../Assets/twitter.png';
// import Instagram from '../Assets/instagram.png';
// import LinkedIn from '../Assets/linkedin.png';
// import Youtube from '../Assets/youtube.png';
// import Vimeo from '../Assets/vimeo.png';
// import Copyright from '../Assets/copyright.png';

const Footer = () => {
    return(
        <footer>
            <div className="product-designers-mainFoot">
                <ul className="mainFootUl">
                    <li><a id="aa1" href="#build">Build Software</a></li>
                    <li><a id="aa2" href="#design">Design Different</a></li>
                    <li><a id="aa3" href="#knowledge">Apply Your Knowledge</a></li>
                    <li><a id="aa4" href="#faq">FAQ</a></li>
                </ul>

                <p className="Foottxt">Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria</p>

                <a className="Foottxt1" href="#contactus">Get in touch</a>

                <img src={Footimage} className="footImage" alt="Footimage" />

                <p className="Foottxt2">Learnable is proud to be a collaborative effort of all the arms of our product team</p>

                <a className="Foottxt3" href="#headtodev">Head to DevStudio</a>

                <div className="socialIcons">
                    <img src={Twitter} className="twitter" alt="twitter" />
                    <img src={Facebook} className="facebook" alt="facebook" />
                    <img src={LinkedIn} className="linkedin" alt="linkedin" />
                    <img src={Instagram} className="instagram" alt="instagram" />
                    <img src={Youtube} className="youtube" alt="youtube" />
                    <img src={Vimeo} className="vimeo" alt="vimeo" />
                </div>
                
                <img src={Copyright} className="copyright" alt="copyright" />
                <p href="#copyright" className="Foottxt4">Genesys 2020</p>

                <p href="#privacystatement" className="Foottxt5">Privacy Statement</p>
            </div>
        </footer>
      
    )
}
export default Footer