import React from 'react';
import {Link} from 'react-router-dom';
import MainNav from '../Components/Menu/MainNav';
import SecNav from '../Components/Menu/SecNav';
import Fast from '../Access/Fast.png';
import Magazine from '../Access/Magazine.png';
import Wired from '../Access/Wired.png';
import WebVision from '../Access/WebVision.png';
import Interaction from '../Access/Interaction.png';
import Journal from '../Access/Journal.png';
import Journal1 from '../Access/Journal1.png';
import Journal2 from '../Access/Journal2.png';
import Journal3 from '../Access/Journal3.png';
import Dropdown from '../Access/Dropdown.png';
import faqLine from '../Access/faqLine.png';
import ApplyData from '../Access/ApplyData.png';
import learningDoesnt from '../Access/LearningDoesnt.png';
import Nnamdi from '../Access/Nnamdi.png';
import Ositadinma from '../Access/Ositadinma.png';
import Idowu from '../Access/Idowu.png';
import Ezra from '../Access/Ezra.png';
import David from '../Access/David.png';
import Emmanuel from '../Access/Emmanuel.png';
import Fun from '../Access/Fun.png';
import play from '../Access/Play.png';
import culture from '../Access/Culture.png';
import eligible from '../Access/Eligible.png';
import learnExperience from '../Access/LearnExperience.png';
import peopleGreat from '../Access/PeopleGreat.png';
import ArrowDown from '../Access/ArrowDown.png';
import UpArrow from '../Access/Uparrow.png';
import hero from '../Access/Hero.png';
import Footimage from '../Access/Footimage.png';
import Facebook from '../Access/facebook.png';
import Twitter from '../Access/twitter.png';
import Instagram from '../Access/instagram.png';
import LinkedIn from '../Access/linkedin.png';
import Youtube from '../Access/youtube.png';
import Vimeo from '../Access/vimeo.png';
import Copyright from '../Access/copyright.png';
import White from '../Access/white-side-arrow.png';
import Blue from '../Access/blue-side-arrow.png';

function Home() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <MainNav />
          <SecNav /> 
        </header>

        <main>
          <div className="learnable-notification-div">
            <h1 className="learnable-notification-heading">Coming soon: Learnable ‘20</h1>
            <h2 className="learnable-notification-brochure-sub-heading">Learnable ‘20 Brochure</h2>
            <p className="learnable-notification-paragraph-text">We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</p>
            <a href="#notification" className="notification-click-to-download-link">Click link to download...</a>
          </div>

          <div className="main-everything-is-learnable-div">
            <h1 className="main-everything-is-learnable-title-text">Everything is Learnable</h1>
            <p className="main-everything-is-learnable-paragraph-text">Learnable is the perfect product development internship program brought to you by Genesys.</p>
            <img src={ArrowDown} alt="" className="everything-is-learnable-arrowdown" />

            <img src={hero} alt="" className="everything-is-learnable-img" />
            <img src={play} alt="" className="everything-is-learnable-video-icon" />

            <div className="everything-is-learnable-div">
              <div className="everything-is-learnable-development-div">
                <Link to="/developers"><h1 className="everything-is-learnable-development-title-text">Development</h1></Link>
                <img src={Blue} className="development-side-arrow-img" alt="" />
                <p className="everything-is-learnable-development-paragraph-text">What to expect</p>
              </div>
              <div className="everything-is-learnable-product-design-div">
              <Link to="/designers"><h1 className="everything-is-learnable-product-design-title-text">Product Design</h1></Link>
              <img src={White} className="product-design-side-arrow-img" alt="" />
                <p className="everything-is-learnable-product-design-paragraph-text">What to expect</p>
              </div>

              <h1 className="everything-is-learnable-305">305</h1>
              <p className="everything-is-learnable-young-software-devs">Young Software Developers Trained</p>

              <h1 className="everything-is-learnable-2100">2100</h1>
              <p className="everything-is-learnable-tech-enthusiasts">Tech Enthusiasts</p>

              <h1 className="everything-is-learnable-8">8</h1>
              <p className="everything-is-learnable-start-ups">StartUps Incubated</p>

              <h1 className="everything-is-learnable-250">250</h1>
              <p className="everything-is-learnable-small-business">Small Businesses supported</p>
            </div>
          </div>

          <div className="make-people-great-div">
              <img src={peopleGreat} alt=""  className="make-people-great-img"/>
              <h1 className="make-people-great-title-text">We Make People Great</h1>
              <p className="make-people-great-paragraph">As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry.<br /><br />We primarily educate and groom software developers and designers, preparing them for the industry.</p>
          </div>

          <div className="an-unusual-learning-experience-div">
            <img src={learnExperience} alt=""  className="an-unusual-learning-experience-img"/>
            <h1 className="an-unusual-learning-experience-title-text">An Unusual Learning Experience</h1>
            <p className="an-unusual-learning-experience-paragraph">At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.<br /><br />Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.</p>
          </div>

          <div className="main-learn-to-build-software-div">
            <p className="main-learn-to-build-software-paragraph">For  Developers</p>
            <h1 className="main-learn-to-build-software-title">Learn to Build Software the Right Way</h1>
            <p className="main-learn-to-build-software-content">We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way.<br /><br />We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.</p>
            <a href="/developers" className="main-learn-to-build-software-link">Learn more</a>

            <div className="program-with-javascript-div">
                <h1 className="program-with-javascript-content">Program with JavaScript</h1>
            </div>
            <div className="web-development-with-react-div">
                <h1 className="web-development-with-react-content">Web Development with React</h1>
            </div>
            <div className="managing-data-with-mongodb-div">
                <h1 className="managing-data-with-mongodb-content">Managing Data with MongoDB</h1>
            </div>
            <div className="version-control-with-git-div">
                <h1 className="version-control-with-git-content">Version Control with Git</h1>
            </div>
            <div className="building-apis-with-nodejs-div">
                <h1 className="building-apis-with-nodejs-content">Building APIs with NodeJS</h1>
            </div>
            <div className="deploying-with-heroku-div">
                <h1 className="deploying-with-heroku-content">Deploying with Heroku</h1>
            </div>
          </div>

          <div className="main-design-different-div">
            <p className="main-design-different-paragraph-text">For  Designers</p>
            <h1 className="main-design-different-title-text">Design Different</h1>
            <h3 className="main-design-different-content-text">We love to make things work perfectly. That’s why our design learning path exposes you to the science of user-oriented design.<br /><br />Design is at the heart of everything we do at Genesys. Right from the start of the program, you’ll get your hands dirty as you get practically involved in the world’s most modern design concepts. At Genesys, we’re building designers who put the users first.</h3>
            <a href="/designers" className="main-design-different-link-text">Learn more</a>

              <div className="design-ui-div">
                  <h1 className="design-ui-text">Design User Interfaces</h1>
              </div>
              <div className="apply-design-thinking-div">
                  <h1 className="apply-design-thinking-text">Apply Design Thinking</h1>
              </div>
              <div className="copy-write-for-projects-div">
                  <h1 className="copy-write-for-projects-text">Copy write for Projects</h1>
              </div>
              <div className="craft-user-experiences-div">
                  <h1 className="craft-user-experiences-text">Craft User Experiences</h1>
              </div>
              <div className="build-information-architecture-div">
              <h1 className="build-information-architecture-text">Build Information Architecture</h1>
              </div>
              <div className="brand-projects-div">
              <h1 className="brand-projects-text">Brand Products</h1>
              </div>
          </div>

          <div className="main-who-is-eligible-div">
            <div className="who-is-eligible-div">
              <img src={eligible} alt="" className="who-is-eligible-img" />
              <h1 className="who-is-eligible-title">Who is Eligible?</h1>
              <p className="who-is-eligible-paragraph-text">We believe learning should be a fun To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.<br /> <br />To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency.</p>
            </div>
          </div>

          <div className="main-our-culture-div">
            <div className="our-culture-div">
              <img src={culture} alt="" className="our-culture-img"/>
              <img src={play} alt="" className="our-culture-img-play"/>
              <h1 className="our-culture-title-text">Our Culture</h1>
              <p className="our-culture-paragraph-text">Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration.</p>
            </div>
          </div>

          <div className="main-learning-can-be-fun-div">
            <div className="learning-can-be-fun-div">
              <img src={Fun} alt="" className="learning-can-be-fun-img"/>
              <h1 className="learning-can-be-fun-title-text">Learning can be fun…</h1>
              <h3 className="learning-can-be-fun-paragraph-text">We believe learning should be a fun experience. For this reason, we don’t do all the learning in the classroom.<br /> <br />The Learnable experience can not be complete without the bag of fun times which you’ll have. To us, every task is an opportunity to have some fun. But we do well to throw in a good number of activities to add to this. You will find yourself partaking in a lot of healthy activities such as cooking, sports, music, hangouts, and even random dates.<br /> <br />Trust us when we say we know how to have fun.</h3>
            </div>
          </div>

          <div className="main-learn-from-the-experts-div">
            <h1 className="main-learn-from-the-experts-title-text">Learn from the Experts</h1>
            <p className="main-learn-from-the-experts-paragraph-text">As a learnable intern, you will be learning from the best software developers and product designers our industry has to offer. You will spend the first 3 months in the classroom with industry experts who have a wealth of experience from developing amazing products for various customers in our industry.</p>    

            <div className="learn-from-the-experts-div">
              <img src={Nnamdi} alt="" className="learn-from-the-experts-nnamdi-img" />
              <h2 className="learn-from-the-experts-title-text1">Nnamdi</h2>
              <p className="learn-from-the-experts-paragraph-text1" >Managing Director</p>

              <img src={Ositadinma} alt="" className="learn-from-the-experts-osita-img"/>
              <h2 className="learn-from-the-experts-title-text2">Ositadinma</h2>
              <p className="learn-from-the-experts-paragraph-text2" >Learnable Coordinator</p>

              <img src={Idowu} alt="" className="learn-from-the-experts-idowu-img"/>
              <h2 className="learn-from-the-experts-title-text3">Idowu</h2>
              <p className="learn-from-the-experts-paragraph-text3">Scrum Professional</p>

              <img src={Ezra} alt="" className="learn-from-the-experts-ezra-img"/>
              <h2 className="learn-from-the-experts-title-text4">Ezra</h2>
              <p className="learn-from-the-experts-paragraph-text4" >Assistant Learnable Coordinator</p>

              <img src={David} alt="" className="learn-from-the-experts-david-img"/>
              <h2 className="learn-from-the-experts-title-text5">David</h2>
              <p className="learn-from-the-experts-paragraph-text5">Design Lead</p>

              <img src={Emmanuel} alt="" className="learn-from-the-experts-emma-img" />
              <h2 className="learn-from-the-experts-title-text6">Emmanuel</h2>
              <p className="learn-from-the-experts-paragraph-text6">Software Lead</p>
            </div>
          </div>

          <div className="main-learning-doesnt-have-to-be-div">
            <div className="learning-doesnt-have-to-be-div">
              <img src={learningDoesnt} alt="" className="learning-doesnt-have-to-be-img"/>
              <h1 className="learning-doesnt-have-to-be-title-text">Learning doesn’t always have to be in the classroom</h1>
              <p className="learning-doesnt-have-to-be-paragraph-text">We have designed other learning activities that aren’t classroom-based. You will learn how to be a better person, how to have good conversations, how to work better with people and most importantly, how to lead other people. Hey! We’ll even teach you how to run a business during the Learnable Business Sessions.</p>
            </div>
          </div>

          <div className="main-learnable-apply-your-knowledge-div">
            <div className="learnable-apply-your-knowledge-div">
              <img src={ApplyData} alt="" className="learnable-apply-your-knowledge-img" />
              <h1 className="learnable-apply-your-knowledge-title-text">Apply Your Knowledge</h1>
              <p className="learnable-apply-your-knowledge-paragraph-text">Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.</p>
              <a href="#get-started" className="learnable-apply-your-knowledge-link">Get Started</a>
            </div>
          </div>

          <div className="main-learnable-faq-div">
            <h1 className="learnable-faq-title">FAQ</h1>

            <div className="learnable-faq-div">
              <a href="#question" className="learnable-faq-question" >How many people can attend a course?</a>
              <img src={Dropdown} alt="" className="learnable-faq-dropdown"/>
              <img src={faqLine} alt="" className="learnable-faq-line"/>

              <a href="#question1" className="learnable-faq-question1" >What’s the learning experience like?</a>
              <img src={Dropdown} alt="" className="learnable-faq-dropdown1"/>
              <img src={faqLine} alt="" className="learnable-faq-line1"/>

              <a href="#question2" className="learnable-faq-question2" >Who are the coaches?</a>
              <img src={Dropdown} alt="" className="learnable-faq-dropdown2"/>
              <img src={faqLine} alt="" className="learnable-faq-line2"/>

              <a href="#question3" className="learnable-faq-question3" >How far in advance should we book?</a>
              <img src={Dropdown} alt="" className="learnable-faq-dropdown3"/>
              <img src={faqLine} alt="" className="learnable-faq-line3"/>

              <a href="#question4" className="learnable-faq-question4" >Can you customize your courses?</a>
              <img src={Dropdown} alt="" className="learnable-faq-dropdown4"/>
              <img src={faqLine} alt="" className="learnable-faq-line4"/>

              <a href="/faq" className="learnable-faq-link">See all</a>
            </div> 
          </div>

          <div className="main-learnable-journal-div" >
            <h1 className="main-learnable-journal-title-text">Journal</h1>
            <a href="/journal" className="learnable-journal-view-all-link">View all</a>

            <div className="learnable-journal-div">
              <img src={Journal} alt="" className="learnable-img-journal" />
              <a href="#inspiration" className="learnable-journal-inspiration-text1">Inspiration</a>
              <h2 className="learnable-journal-title-text1">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
              <p className="learnable-journal-reference-text1">David Mong, Apr 9, 2020</p>

              <img src={Journal1} alt="" className="learnable-img-journal1" />
              <a href="#inspiration1" className="learnable-journal-inspiration-text2">Inspiration</a>
              <h2 className="learnable-journal-title-text2">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
              <p className="learnable-journal-reference-text2">David Mong, Apr 9, 2020</p>

              <img src={Journal2} alt="" className="learnable-img-journa2" />
              <a href="#inspiration2" className="learnable-journal-inspiration-text3">Inspiration</a>
              <h2 className="learnable-journal-title-text3">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
              <p className="learnable-journal-reference-text3">David Mong, Apr 9, 2020</p>

              <img src={Journal3} alt="" className="learnable-img-journal3" />
              <a href="#inspiration3" className="learnable-journal-inspiration-text4">Inspiration</a>
              <h2 className="learnable-journal-title-text4">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
              <p className="learnable-journal-reference-text4">Theresa Brazen, Apr 9, 2020</p>
            </div>
          </div>

          <div className="mentioned-in-div">
            <h1 className="mentioned-in-title-text">Mentioned in</h1>
            <img src={Fast} alt="" className="fast-img-in-mentioned-in"/>
            <img src={Magazine} alt="" className="magazine-img-in-mentioned-in"/>
            <img src={Wired} alt="" className="wired-img-in-mentioned-in"/>
            <img src={WebVision} alt="" className="webvision-img-in-mentioned-in"/>
            <img src={Interaction} alt="" className="interaction-img-in-mentioned-in"/>
          </div>
        </main>
        
        <div className="main-home-subscribe-div">
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
          <div className="home-mainFoot">
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

export default Home;