import React, { useContext } from 'react';
import Job from '../Job/Job';
import './Jobs.css' 
import Button from '@mui/material/Button'; 
import { Link, useLoaderData } from 'react-router-dom';
import { JobsContext } from '../Layout/Layout';
const Jobs = ({isAll, jobs}) => {   
    const jjobs = jobs;
    let sliceJobs=[];
    for(let i=0; i<4; i++) sliceJobs.push(jjobs[i]);
    !isAll?sliceJobs=jobs:''
    return (
        <div style={{padding:'0 200px 50px 200px', textAlign:'center'}}>
            <h1>Featured Jobs</h1> 
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='jobs'>
                {
                    sliceJobs.map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            {
                isAll?<Link to='/all-jobs'>
                <Button  style={{backgroundColor:'blue', textTransform:'capitalize'}} variant="contained">See all Jobs</Button>
                </Link>:''
            }
            
        </div>
    );
};
Jobs.propTypes;
export default Jobs;