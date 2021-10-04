import React, { useEffect, useState } from 'react';
import HomeProgramme from '../HomeProgramme/HomeProgramme';
import './HomeProgrammes.css';

const HomeProgrammes = () => {
    const [programmes, setProgrammes] = useState([]);
    useEffect(()=>{
        fetch("./programmes.json")
        .then(res => res.json())
        .then(data => setProgrammes(data))
    },[])
    return (
        <div className="programmes-area">
            <h1>Our <span>Programmes</span></h1>
            <div className="programmes-container">
            {
                programmes.map(programme => <HomeProgramme programme ={programme} key = {programme.id} />)
            }
            </div>
        </div>
    );
};

export default HomeProgrammes;