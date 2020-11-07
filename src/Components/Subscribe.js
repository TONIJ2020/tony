import React from 'react';
import UpArrow from './Uparrow.png';
import './Subscribe.css';

function Subscribe() {
    return (
        <div className="main-subscribe-div">
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
    );
}

export default Subscribe;
