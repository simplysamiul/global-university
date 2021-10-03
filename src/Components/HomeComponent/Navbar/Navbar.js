import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className="nav-bg" position="fixed">
                    <Toolbar className="nav-container">
                    <Typography className="university-name" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <i class="fas fa-user-graduate university-icon"></i> GLOBAL - University
                    </Typography>
                    <div className="nav-menu">
                    <ul>
                        <li><NavLink to = "/home" activeStyle={{color: "white", borderBottom: "2px solid #aece61"}}>Home</NavLink></li>
                        <li><NavLink to = "/about">About-Us</NavLink></li>
                        <li><NavLink to = "courses">Courses</NavLink></li>
                        <li><NavLink to = "/success">Success</NavLink></li>
                        <li><NavLink to = "covid_19_info">Covid-19</NavLink></li>
                    </ul>
                    </div>
                    </Toolbar>
                </AppBar>
            </Box> 
        </div>
    );
};

export default Navbar;