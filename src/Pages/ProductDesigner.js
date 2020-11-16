import React from 'react';
// import MainNav from '../Components/Menu/MainNav';
// import SecNav from '../Components/Menu/SecNav';
import ProdDesign from '../Assets/ProdDesign.png';
import ProductDesign from '../Assets/ProductDesign.png';
import UpArrow from '../Assets/Uparrow.png';
// import Footimage from '../Assets/Footimage.png';
// import Facebook from '../Assets/facebook.png';
// import Twitter from '../Assets/twitter.png';
// import Instagram from '../Assets/instagram.png';
// import LinkedIn from '../Assets/linkedin.png';
// import Youtube from '../Assets/youtube.png';
// import Vimeo from '../Assets/vimeo.png';
// import Copyright from '../Assets/copyright.png';

function ProductDesigner() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <MainNav />
        <SecNav /> 
      </header> */}

      <main>
        <div className="product-designers-div">
            <h1 className="product-designers-title-text">The Learnable Product Designer</h1>

            <img src={ProdDesign} alt="" className="product-designers-img" />

            <p className="product-designers-paragraph-text">At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, talented people. You'll work hard with them to create things that will amaze everyone everywhere.<br /> <br />In addition to your team projects, you’ll be lending a hand to the creative team. Participating in brainstorm sessions, building winning pitches, preparing assets, and design scriptures for productions, you'll be in the thick of it all.<br /> <br />Oh, and you’ll make amazing friends while you're at it!</p>

            <h2 className="product-designers-second-title-text">“The greats weren’t great because at birth they could paint. The greats were great because they painted a lot.” <br />- Macklemore</h2>

            <img src={ProductDesign} alt="" className="product-designers-second-img" />

            <h3 className="product-designers-third-title-text">We expect you to…</h3>

            <h4 className="product-designers-second-paragraph-text">Play nice with other people.<br /><br />Be an actively engaged person. That means you are present, motivated, and social.<br /><br />Understand how to use the Figma design software<br /><br />Be able to create initial design layouts with confidence and know-how to effectively communicate concepts to everyone on your team.<br /><br />Have a basic understanding of design principles and theories to have creative courage. This is a tough industry, only the brave and sturdy remain.<br /><br />Be prepared to defend your decisions and take constructive criticism.</h4>

            <h3 className="product-designers-third-paragraph-text">To us, beauty without substance has no value. At Genesys, design thinking and execution are equally important, so we’re constantly on the lookout for not only the how but also the why.</h3>  
        </div>
      </main>
      
      <div className="main-product-designers-subscribe-div">
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
       */}
    </div>
  );
}

export default ProductDesigner;
