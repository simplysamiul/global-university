import React from 'react';
import './AboutBody.css';
import vision from '../../../resource/future/vision.jpg';
import mission from '../../../resource/future/mission.jpg';
import quality from '../../../resource/future/quality.jpg';
import value from '../../../resource/future/value.png';

const AboutBody = () => {
    return (
        <div className="about-info">
            <h3>About Us</h3>
            <p>Global (Malaysian Allied Health Sciences Academy) was founded in 2004 by Professor Tan Sri Dr. Hj. Mohamed Haniffa, whose vision involves the creation of a stronghold academic excellence in the South-East Asian region. Professor Tan Sri Datuk Dr. Haniffa is a clinical practitioner of Medicine, and is the Pro-Chancellor of Global University and the Executive Chairman of Global Group, under whose leadership, today Global University has grown to a full-fledged Malaysian higher education institution with programmes in the fields of Medicine, Biosciences, Dentistry, Pharmacy, Health Sciences, Nursing, Business, Finance, Hospitality Management, Information Technology, and Engineering at Diploma, Degree, Masters, and Doctoral levels.
            <br /><br />
            Global University’s vision is to produce qualified and compassionate professionals to serve the needs of the country in line with the national goals and the government transformation plans in the 21st century. The new 48-acre campus in Bandar Saujana Putra is the embodiment of that vision. Today Global University has students from 75 different countries and not just from the region of Asia, but as far as Australia, the United Kingdom, the United States of America and Canada.
            <br /><br />
            Global’s BE MORE maxim drives its strategies towards an education that is beyond classroom and textbooks for the cultivation of professional skills that allow its graduates to be fully equipped for the years ahead. Along with academic qualifications, Global students receive a CAREER PASSPORT filled with a series of elegant Masterclasses and internationally recognized professional certifications offered under Global’s P.R.I.D.E (Professional, Industry Ready Education) programme. Global students enjoy the IR4.0 curriculum with state-of-the-art facilities on campus, such as Additive Manufacturing Lab and AI-based Dental lab.
            <br /><br />
            Global University is fully accredited by the Malaysian Qualifications Agency (MQA) and awarded ONLINE UNIVERSITY status by the Ministry of Education Malaysia. Moving into the third decade of the 21st Century and aligning with the demands and capabilities of IR4.0, Global envisions to lead research, innovation and enterprises in the areas of its expertise. The online university status allows Global to provide border less education through its dynamic Learning Management System (LMS) that brings an education beyond the limits of physical expectations. Thus, Global University fits the convenience of achieving a dream, an ambition - a world of opportunities at the tip of one's fingers through a range of OPEN &#38; DISTANCE LEARNING programmes that is made to redesign the future of academic learning!</p>
            <div className="future-info">
                <img src={vision} alt="" />
                <img src={quality} alt="" />
                <img src={value} alt="" />
                <img src={mission} alt="" />
            </div>
        </div>
    );
};

export default AboutBody;