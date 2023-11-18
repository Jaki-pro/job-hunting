import React, { useContext, useEffect, useState } from 'react'; 
import { useLoaderData, useLocation } from 'react-router-dom'; 
import { JobsContext } from '../Layout/Layout'; 
import axios from 'axios';
import './JobDetails.css'
import Job from '../Job/Job';
const JobDetails = ({children}) => {  
    const jobs = useLoaderData(); 
    const location = useLocation(); 
    const {pathname} = location; 
    const array = pathname.split("/"); 
    const id = array[array.length-1];
    const jobId = parseInt(id, 10);
    let job;
    // console.log('jobs ',jobs);
    for(const eachJob of jobs)
    {
        if(eachJob.id==jobId) {job=eachJob; break;}
    }
    return (
        <div className='job-details'>
            <div className='description'>
                <p><span style={{fontWeight:'800', fontSize:'20px'}}>Job Description:{job.id} </span>{job.job_description}</p>
                <p><span style={{fontWeight:'800', fontSize:'20px'}}>Job Responsibility: </span>{job.job_responsibility}</p>
                <p><span style={{fontWeight:'800', fontSize:'20px'}}>Educational Requirements:</span> {job.educational_requirements}</p>
            </div> 
            <Job isapplied={children} isdetails={true} job={job}></Job>
        </div>
    );
};
JobDetails.propTypes;
export default JobDetails;