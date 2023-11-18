import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import Button from '@mui/material/Button';
const Header = () => {
    return (
        <div className='header'>
            <h4>Job Hunting</h4>
            <div>
                <NavLink to='/' className={({isActive})=> isActive? 'active':''}>Home</NavLink>
                <NavLink to={'/statistics'} className={({isActive})=> isActive?'active':''}>Statistics</NavLink>
                <NavLink to={'/applied-jobs'} className={({isActive})=> isActive?'active':''}>Applied Jobs</NavLink>
                <NavLink to={'/blog'} className={({isActive})=> isActive?'active':''}>Blog</NavLink>
            </div>
            <Button style={{textTransform:'capitalize', backgroundColor:'rgb(13, 81, 81)'}} variant="contained">Start Applying</Button>
        </div>
    );
};

export default Header;