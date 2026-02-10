import React from 'react';
import {TOTAL_SCREENS} from '../utilities/commonUtils';
import ScrollService from '../utilities/ScrollService';
import '../PortfolioContainer/Home/Footer/Footer.css';

export default function PortfolioContainer() {

    const mapAllScreens = ()=>{
        return(
            TOTAL_SCREENS.map((screen)=>(
                (screen.component) ? <screen.component screenName={screen.screen_name} key={screen.screen_name}
                id={screen.screen_name}/> : <div key={screen.screen_name}></div>
            ))
        )
    }
    return (
        <div className='portfolio-container'>
            {mapAllScreens()}
            <div className="scroll-container">
                <button
                    className="btn-scroll"
                    onClick={() => ScrollService.scrollHandler.scrollToHome()}
                >
                    <i className="fa fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

