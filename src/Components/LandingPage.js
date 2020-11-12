import React from 'react';
import MainNav from '../Components/Menu/MainNav';
import Redhand from '../Assets/Redhand.png';
import startZone from '../Access/StartZone.png';
import agora from '../Access/Agora.png';
import Learn from '../Access/Learnable.png';
import Video from '../Access/Vimage.png';
import SkipDown from '../Access/SkipDown.png';
import play from '../Access/Play.png';
import Ignite from '../Access/Ignite.png';
import CodeVille from '../Access/CodeVille.png';
import Pink from '../Access/Pink.png';
import UpArrow from '../Access/Uparrow.png';
import Footimage from '../Access/Footimage.png';
import Facebook from '../Access/facebook.png';
import Twitter from '../Access/twitter.png';
import Instagram from '../Access/instagram.png';
import LinkedIn from '../Access/linkedin.png';
import Youtube from '../Access/youtube.png';
import Vimeo from '../Access/vimeo.png';
import Copyright from '../Access/copyright.png';

function LandingPage(props) {
    return (
        <>
            <div className="LandingPage">
                <header className="LandingPage-header">
                    <MainNav />
                </header>

                <main> 
                    <div className="main-opportunity-div">
                        <div className="opportunity-div">
                            <img src={Video} alt="" className="opportunity-video-img"/>
                            <img src={SkipDown} alt="" className="opportunity-skipdown-img"/>
                            <img src={play} alt="" className="opportunity-play-img"/>
                            <h1 className="opportunity-title-text">Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate.</h1>
                            <h3 className="opportunity-content-text">We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</h3>
                            <a href="#read more" className="opportunity-tag-text">#weAreGenesys</a>
                        </div>
                    </div>

                    <div className="main-landing-page-learnable-div" >
                        <div className="landing-page-learnable-div">
                            <img src={Learn} alt=""  className="landing-page-learnable-learn-img" />
                            <h1 className="landing-page-learnable-title-text">Learnable</h1>
                            <p className="landing-page-learnable-paragraph-text">Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
                            <a href="/learnable" className="landing-page-learnable-link-text" >Learn more</a>
                        </div>
                    </div>
                    
                    <div className="main-agora-div">
                        <div className="agora-div">
                            <img src={agora} alt="" className="agora-img"/>
                            <h1 className="agora-title-text">Agora</h1>
                            <p className="agora-paragraph-text">We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do.</p>
                            <a href="/" className="agora-link-text">Learn more</a>
                        </div>
                    </div>

                    <div className="main-startzone-div">
                        <div className="startzone-div">
                            <img src={startZone} alt="" className="startzone-img"/>
                            <h1 className="startzone-title-text">StartZone</h1>
                            <p className="startzone-paragraph-text">The business environment is harsh for early-stage businesses. We can help you rise above it all.</p>
                            <a className="startzone-link-text" href="/">Here’s How</a>
                        </div>
                    </div>

                    <div className="main-other-things-we-do-div">
                        <h1 className="main-other-things-we-do-title-text">Other things we do</h1>    

                        <div className="other-things-we-do-div">
                            <img src={Ignite} alt="" className="ignite-other-things-we-do-img"/>
                            <a href="read more1" className="ignite-other-things-we-do-link-text">Genesys Ignite</a>

                            <img src={CodeVille} alt="" className="codeville-other-things-we-do-img"/>
                            <a href="read more1" className="codeville-other-things-we-do-link-text">CodeVille</a>

                            <img src={Pink} alt="" className="pink-other-things-we-do-img"/>
                            <a href="read more1" className="pink-other-things-we-do-link-text">Pink summer of code</a>
                        </div>
                    </div>    

                    <div className="main-the-best-team-in-the-world-div">
                        <div className="the-best-team-in-the-world-div">
                            <img src={Redhand} alt="" className="the-best-team-in-the-world-img"/>
                            <h1 className="the-best-team-in-the-world-title-text">The best team in the world</h1>
                            <p className="the-best-team-in-the-world-paragraph-text">We work with the most amazing people our industry has to offer. They are really passionate about making a difference</p>
                            <a className="the-best-team-in-the-world-link-text" href="#read more">See team</a>
                        </div>
                    </div>
                </main>
                 
                <div className="main-landing-subscribe-div">
                    <div className="sec-subcribe-div">
                        <img src={UpArrow} className="subscribe-up-arrow" alt="" />

                        <div className="landing-subscribe-div">
                            <h1 className="subscribe-title-text">Stay up to date on what we are doing and new learning opportunities</h1>

                            <h2 className="subscribe-email-text">Your email</h2>

                            <input type="text" className="subscribe-input"/>

                            <p className="subscribe-view-privacy-policy">View Privacy Policy</p>

                            <button className="landing-subscribe-button">
                                <p className="subscribe-button-text">subscribe</p>
                            </button>
                        </div>
                    </div>
                </div>
           
                <footer>
                    <div className="landing-mainFoot">
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

export default LandingPage;
