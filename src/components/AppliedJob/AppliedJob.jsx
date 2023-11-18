import React from 'react';
import './AppliedJob.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const AppliedJob = ({appliedJob}) => {
    return (
        <div className='applied-job'>
            <img src={appliedJob.logo} alt="" />
            <div className="middle">
                <h4>{appliedJob.job_title}</h4>
                <h5>{appliedJob.company_name}</h5>
                <p>{appliedJob.contact_information.address}</p>
            </div>
            <Link to={`/job-details/${appliedJob.id}`}>
                <Button variant='contained' style={{textTransform:'capitalize'}}>View Details</Button>
                 
            </Link>
            
        </div>
    );
};
AppliedJob.propTypes;
export default AppliedJob;