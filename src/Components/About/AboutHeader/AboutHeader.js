import React from 'react';
import AboutImg from '../../../resource/images/About-Us.png';
import './AboutHeader.css';

const AboutHeader = () => {
    return (
        <div>
            <div className="about-header">
                <img src={AboutImg} alt="" />
            </div>
        </div>
    );
};

export default AboutHeader;