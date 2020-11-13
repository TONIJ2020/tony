import React from 'react';
import MainNav from '../Components/Menu/MainNav';
import SecNav from '../Components/Menu/SecNav';
import Dropdown from '../Assets/Dropdown.png';
import faqLine from '../Assets/faqLine.png';
import FaqHand from '../Assets/FaqHand.png';
import UpArrow from '../Assets/Uparrow.png';
import Footimage from '../Assets/Footimage.png';
import Facebook from '../Assets/facebook.png';
import Twitter from '../Assets/twitter.png';
import Instagram from '../Assets/instagram.png';
import LinkedIn from '../Assets/linkedin.png';
import Youtube from '../Assets/youtube.png';
import Vimeo from '../Assets/vimeo.png';
import Copyright from '../Assets/copyright.png';

function FAQ() {
    return (
        <div className="App">
            <header className="App-header">
                <MainNav />
                <SecNav /> 
            </header>

            <main>
                <div className="mainfaqDiv">
                <h1 className="faqtitle">FAQ</h1>
                <img src={FaqHand} alt="" className="faqHand"/>

                <a href="#question" className="question" >How many people can attend a course?</a>
                <img src={Dropdown} alt="" className="imgUrlx"/>
                <img src={faqLine} alt="" className="imgUrly"/>

                <a href="#question1" className="question1" >What’s the learning experience like?</a>
                <img src={Dropdown} alt="" className="imgUrlx1"/>
                <img src={faqLine} alt="" className="imgUrly1"/>

                <a href="#question2" className="question2" >Who are the coaches?</a>
                <img src={Dropdown} alt="" className="imgUrlx2"/>
                <img src={faqLine} alt="" className="imgUrly2"/>

                <a href="#question3" className="question3" >How far in advance should we book?</a>
                <img src={Dropdown} alt="" className="imgUrlx3"/>
                <img src={faqLine} alt="" className="imgUrly3"/>

                <a href="#question4" className="question4" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx4"/>
                <img src={faqLine} alt="" className="imgUrly4"/>
                
                <a href="#question5" className="question5" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx5"/>
                <img src={faqLine} alt="" className="imgUrly5"/>

                <a href="#question6" className="question6" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx6"/>
                <img src={faqLine} alt="" className="imgUrly6"/>

                <a href="#question7" className="question7" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx7"/>
                <img src={faqLine} alt="" className="imgUrly7"/>

                <a href="#question8" className="question8" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx8"/>
                <img src={faqLine} alt="" className="imgUrly8"/>

                <a href="#question9" className="question9" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx9"/>
                <img src={faqLine} alt="" className="imgUrly9"/>

                <a href="#question10" className="question10" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx10"/>
                <img src={faqLine} alt="" className="imgUrly10"/>

                <a href="#question11" className="question11" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx11"/>
                <img src={faqLine} alt="" className="imgUrly11"/>

                <a href="#question12" className="question12" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx12"/>
                <img src={faqLine} alt="" className="imgUrly12"/>

                <a href="#question13" className="question13" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx13"/>
                <img src={faqLine} alt="" className="imgUrly13"/>

                <a href="#question14" className="question14" >Can you customize your courses?</a>
                <img src={Dropdown} alt="" className="imgUrlx14"/>
                <img src={faqLine} alt="" className="imgUrly14"/>
                </div>
            </main>

            <div className="main-faq-subscribe-div">
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
            <div className="faq-mainFoot">
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

export default FAQ;
