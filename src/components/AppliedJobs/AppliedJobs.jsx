import React from 'react';
import { getShoppingCart } from '../../fakeData/fakeDb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const storedCart = getShoppingCart();
    //console.log(storedCart);
    let appliedJobs = [];
    for(const id in storedCart)
    {
        for(let i=0; i<jobs.length; i++) 
        {
            if(jobs[i].id==id) appliedJobs.push(jobs[i]);
        }
    }

    return (
        <div style={{padding: '20px 100px 20px 100px'}}>
            <h2 style={{textAlign:'center'}}>Job You Have Applied: {appliedJobs.length}</h2>
            {
                appliedJobs.map(appliedJob=> <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;