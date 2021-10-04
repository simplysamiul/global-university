import React from 'react';
import './CourseSearch.css';

const CourseSearch = () => {
    return (
        <div className="search-container">
            <div className="section-title">
            <h3>Search For</h3>
            <h2>Course</h2>
            </div>
            <div className="course-search">
            <input type="text" placeholder = "ENTER COURSE NAME *" />
            <button><i className="fas fa-search"></i></button>
            </div>
        </div>
    );
};

export default CourseSearch;