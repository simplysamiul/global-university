import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../../../resource/images/timage1.jpeg';
import image2 from '../../../resource/images/timage2.jpg';
import image3 from '../../../resource/images/image3.jpg';
import './ImgSlider.css';


const ImgSlider = () => {
    return (
      <div style = {{height : "550px"}}>
      <BackgroundSlideshow images={[ image1, image2, image3 ]} />
    </div>
    );
};

export default ImgSlider;