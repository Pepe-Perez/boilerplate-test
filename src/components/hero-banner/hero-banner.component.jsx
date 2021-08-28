import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

const HeroBanner = () => (

    <div>
        <div className="hero-banner">
            <div className="hero-banner__container">
                <h1>
                    Well, Hello there
                    <span>This is where your message should go.</span>
                </h1>
                <CustomButton>DOWNLOAD NOW</CustomButton>
            </div>
        </div>
    </div>
)

export default HeroBanner;