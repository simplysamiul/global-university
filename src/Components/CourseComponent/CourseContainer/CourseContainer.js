import React from 'react';
import courseImg from '../../../resource/images/course.jpg';
import Diploma from '../Diploma/Diploma';
import Graduation from '../Graduation/Graduation';
import PostGraduation from '../PostGraduation/PostGraduation';
import PreUniversity from '../PreUniversity/PreUniversity';
import './CourseContainer.css';

const CourseContainer = () => {
    return (
        <div>
            <div className="course-slider">
                <img style={{height: "450px", width: "100%"}} src={courseImg} alt="" />
            </div>
            <div className="section-body">
            <div className="section-header">
                <h1>Programme <span>Details</span> </h1>
            </div>
            <PreUniversity />
            <Diploma />
            <Graduation />
            <PostGraduation />
            </div>
        </div>
    );
};

export default CourseContainer;