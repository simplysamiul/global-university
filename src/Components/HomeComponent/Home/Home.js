import React from 'react';
import CourseSearch from '../CourseSearch/CourseSearch';
import HomeProgrammes from '../HomeProgrammes/HomeProgrammes';
import ImgSlider from '../ImgSlider/ImgSlider';
import OnlineLesson from '../OnlineLesson/OnlineLesson';

const Home = () => {
    return (
        <div>
            <ImgSlider />
            <CourseSearch />
            <HomeProgrammes />
            <OnlineLesson />
        </div>
    );
};

export default Home;