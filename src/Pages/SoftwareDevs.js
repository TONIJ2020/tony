import React from 'react';
// import MainNav from '../Components/Menu/MainNav';
// import SecNav from '../Components/Menu/SecNav';
import PeopleGreat from '../Assets/PeopleGreat.png';
import SoftDevImg1 from '../Assets/SoftDevImg1.png';
import UpArrow from '../Assets/Uparrow.png';
import Footimage from '../Assets/Footimage.png';
import Facebook from '../Assets/facebook.png';
import Twitter from '../Assets/twitter.png';
import Instagram from '../Assets/instagram.png';
import LinkedIn from '../Assets/linkedin.png';
import Youtube from '../Assets/youtube.png';
import Vimeo from '../Assets/vimeo.png';
import Copyright from '../Assets/copyright.png';

function SoftwareDevs() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <MainNav />
        <SecNav /> 
      </header> */}

      <main>
        <div className="main-software-developers-div">
            <h1 className="main-software-developers-title-text">The Learnable Software Developer</h1>

            <img src={PeopleGreat} alt="" className="SoftDevImg" />

            <p className="main-software-developers-paragraph-text">Creativity means a lot to us. So we look for people who can think both logistically and artistically, and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who care about working with their team to add the Genesys flavour to every project.<br /> <br />As a developer, being part of the team exposes you to a range of diverse, like-minded talented people who are sure to make the experience fun for you. You’ll get a shot at building amazing things, developing yourself, learning on the job, while exchanging healthy jokes and having random hangouts once in a while.</p>

            <h2 className="main-software-developers-second-title-text">“You are someone people can count on. Every day, you come in ready to make great things happen.”</h2>

            <img src={SoftDevImg1} alt="" className="second-software-development-img" />

            <h3 className="main-software-developers-third-title-text">We expect you to…</h3>

            <h4 className="main-software-developers-forth-text">Play nice with other people.<br /><br />Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates.<br /><br />Love to code. You understand the basics of programming and object-oriented design and development.<br /><br />Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.<br /><br />Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.<br /><br />Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.</h4>    
        </div>
      </main>
      
      <div className="main-software-devs-subscribe-div">
        <div className="sec-subcribe-div">
            <img src={UpArrow} className="subscribe-up-arrow" alt="" />

            <div className="subscribe-div">
                <h1 className="subscribe-title-text">Stay up to date on what we are doing and new learning opportunities</h1>

                <h2 className="subscribe-email-text">Your email</h2>

                <input type="text" className="subscribe-input"/>

                <p className="subscribe-view-privacy-policy">View Privacy Policy</p>

                <button className="subscribe-button">
                    <p className="subscribe-button-text">subscribe</p>
                </button>
            </div>
        </div>
    </div>

    {/* <footer>
        <div className="software-devs-mainFoot">
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
    </footer> */}
    </div>
  );
}

export default SoftwareDevs;
