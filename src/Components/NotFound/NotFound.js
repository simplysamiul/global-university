import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../resource/images/404.gif';

const NotFound = () => {
    return (
        <div>
            <Link to = "/">
            <img style={{width: "100%", height : "100%"}} src={notFound} alt="" />
            </Link>
        </div>
    );
};

export default NotFound;