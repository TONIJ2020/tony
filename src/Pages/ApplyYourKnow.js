import React from 'react';
import MainNav from '../Components/Menu/MainNav';
import SecNav from '../Components/Menu/SecNav';
import apply from '../Access/Apply.png';
import Knowledge from '../Access//Knowledge.png';
import UpArrow from '../Access//Uparrow.png';
import Footimage from '../Access//Footimage.png';
import Facebook from '../Access//facebook.png';
import Twitter from '../Access//twitter.png';
import Instagram from '../Access//instagram.png';
import LinkedIn from '../Access//linkedin.png';
import Youtube from '../Access//youtube.png';
import Vimeo from '../Access//vimeo.png';
import Copyright from '../Access//copyright.png';

function ApplyYourKnow() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <MainNav />
            <SecNav /> 
          </header>

          <main>
            <div className="apply-your-knowledge-div">
              <h1 className="apply-your-knowledge-title-text">Apply Your Knowledge</h1>

              <p className="apply-your-knowledge-paragraph-text">Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.</p>

              <img src={Knowledge} className="applyImg" alt="" />

              <img src={apply} className="applyImg1" alt="" />

              <h2 className="apply-your-how-to-get-in-text">How To Get In</h2>
              <p className="apply-your-how-to-get-in-paragraph-text">We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.</p>

              <h2 className="apply-your-online-application-text">Online Application</h2>
              <p className="apply-your-online-application-paragraph-text">Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our prep curriculum that contains everything you need to prepare for the physical and technical assessment.</p>
              <a href="#applyonline" className="applyOnline" >Apply here</a>

              <h2 className="apply-your-phone-call-interview-text">Phone Call Interviews</h2>
              <p className="apply-your-phone-call-interview-paragraph-text">We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim.</p>

              <h2 className="apply-your-final-assessment-text">Final Assessment</h2>
              <p className="apply-your-final-assessment-paragraph-text">At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team.</p>

              <h2 className="apply-your-get-in-text">Get In</h2>
              <p className="apply-your-get-in-paragraph-text">If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help, support and love that we can muster along the way!</p>
            </div>
          </main>
        
          <div className="main-apply-your-knowledge-subscribe-div">
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

          <footer>
            <div className="apply-your-knowledge-mainFoot">
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

        </div>
      </>
    );
}

export default ApplyYourKnow;
