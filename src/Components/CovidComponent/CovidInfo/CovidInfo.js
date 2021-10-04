import React from 'react';
import covid from "../../../resource/images/covid_19.jpg"
import CovidChart from '../CovidChart/CovidChart';
import './CovidInfo.css';

const CovidInfo = () => {
    return (
        <div>
            <div className="covid-header">
                <img src={covid} alt="" />
            </div>
            <div className="covid-body">
                <CovidChart />
            </div>
        </div>
    );
};

export default CovidInfo;