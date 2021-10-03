import React from 'react';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  "https://media.13newsnow.com/assets/WVEC/images/34af2191-3ac8-4b97-8631-bbeb6425d04e/34af2191-3ac8-4b97-8631-bbeb6425d04e_1140x641.jpeg",
  "https://www.macleans.ca/wp-content/uploads/2014/04/Student-studying-Post.jpg",
  "https://searchengineland.com/figz/wp-content/seloads/2017/07/university-college-student-ss-1920.jpg"
];
const ImgSlider = () => {
    return (
        <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img style={{height: "600px", width: "100%"}} src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img style={{height: "600px", width: "100%"}} src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img style={{height: "600px", width: "100%"}} src={fadeImages[2]} />
        </div>
      </Fade>
    </div>
    );
};

export default ImgSlider;