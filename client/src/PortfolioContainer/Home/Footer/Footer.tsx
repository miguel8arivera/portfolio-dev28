import React from 'react';
import './Footer.css';
import ScrollService from "../../../utilities/ScrollService";
import shapeBg from '../../../assets/Home/shape-bg.png';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={shapeBg} alt='no internet connection'/>
            </div>
            <div className="scroll-container">
                <button
                    className="btn-scroll"
                    onClick={() => ScrollService.scrollHandler.scrollToHome()}
                    >
                    {" "}
                    <i className="fa fa-arrow-up"></i>
                </button>
            </div>
        </div>

    );
}

