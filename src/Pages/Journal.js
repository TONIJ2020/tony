import React from 'react';
import MainNav from '../Components/Menu/MainNav';
import SecNav from '../Components/Menu/SecNav';
import Apply from '../Access/Apply.png';
import Author from '../Access/Author.png';
import journal from '../Access/Journal.png';
import Journal1 from '../Access/Journal1.png';
import Journal2 from '../Access/Journal2.png';
import Journal3 from '../Access/Journal3.png';
import UpArrow from '../Access/Uparrow.png';
import Footimage from '../Access/Footimage.png';
import Facebook from '../Access/facebook.png';
import Twitter from '../Access/twitter.png';
import Instagram from '../Access/instagram.png';
import LinkedIn from '../Access/linkedin.png';
import Youtube from '../Access/youtube.png';
import Vimeo from '../Access/vimeo.png';
import Copyright from '../Access/copyright.png';


function Journal() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNav />
        <SecNav /> 
      </header>

      <main>
      <div className="mainJournalDiv">
            <div className="CategoriesDiv">
                <h1 className="mainJournalDivH1">Journal</h1>

                <button className="Journbtn">
                    <h5>Categories</h5>
                </button>

                <a href="#journinsp" className="journInsp">Inspiration</a>
            </div>


            <img src={Apply} alt="" className="journImg" />

            <h2 className="JournH2">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
            <p className="JournP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.</p>
            <img src={Author} alt="" className="author" />

            <div className="secJournDiv">
                <img src={journal} alt="" className="JournImg1" />
                <a href="#inspiration" className="journInsp1">Inspiration</a>
                <h2 className="JournH21">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
                <p className="JournP1">David Mong, Apr 9, 2020</p>

                <img src={Journal1} alt="" className="JournImg2" />
                <a href="#inspiration1" className="journInsp2">Inspiration</a>
                <h2 className="JournH22">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
                <p className="JournP2">David Mong, Apr 9, 2020</p>

                <img src={Journal2} alt="" className="JournImg3" />
                <a href="#inspiration2" className="journInsp3">Inspiration</a>
                <h2 className="JournH23">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
                <p className="JournP3">David Mong, Apr 9, 2020</p>

                <img src={Journal3} alt="" className="JournImg4" />
                <a href="#inspiration3" className="journInsp4">Inspiration</a>
                <h2 className="JournH24">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
                <p className="JournP4">Theresa Brazen, Apr 9, 2020</p>
           
                <img src={journal} alt="" className="JournImg5" />
                <a href="#inspiration" className="journInsp5">Inspiration</a>
                <h2 className="JournH25">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
                <p className="JournP5">David Mong, Apr 9, 2020</p>

                <img src={Journal1} alt="" className="JournImg6" />
                <a href="#inspiration1" className="journInsp6">Inspiration</a>
                <h2 className="JournH26">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
                <p className="JournP6">David Mong, Apr 9, 2020</p>

                <img src={Journal2} alt="" className="JournImg7" />
                <a href="#inspiration2" className="journInsp7">Inspiration</a>
                <h2 className="JournH27">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
                <p className="JournP7">David Mong, Apr 9, 2020</p>

                <img src={Journal3} alt="" className="JournImg8" />
                <a href="#inspiration3" className="journInsp8">Inspiration</a>
                <h2 className="JournH28">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
                <p className="JournP8">Theresa Brazen, Apr 9, 2020</p>
            </div>

            <button className="Journbtn1">
                    <h6>load more</h6>
            </button>            
        </div>
      </main>
      
      <div className="main-journal-subscribe-div">
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
        <div className="journal-mainFoot">
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
  );
}

export default Journal;
