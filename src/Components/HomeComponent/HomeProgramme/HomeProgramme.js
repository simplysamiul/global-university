import React from 'react';
import './HomeProgramme.css';

const HomeProgramme = (props) => {
    const {programmes_name, duration, semester, image} = props.programme;
    return (
        <div className="programe-cart">
           <img src={image} alt="" />
           <div className="text-box">
               <div className="cart-text">
                   <h2>{programmes_name}</h2>
                   <h4>Duration : {duration}</h4>
                   <h4>Each-Semester : {semester}</h4>
               </div>
           </div>
        </div>
    );
};

export default HomeProgramme;