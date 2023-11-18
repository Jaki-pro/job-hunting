import React from 'react';
import img from '../../assets/images/user.png'
import './Intro.css' 
import Button from '@mui/material/Button';
const Intro = () => {
    return (
        <div className='intro'>
            <div className='intro-text-part'>
                <h2>One Step Closer To Your  </h2>
                <h2 style={{color:'blue'}}>Dream Job</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Button style={{marginTop:'20px'}}  variant="outlined" color="primary">get started</Button>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Intro;