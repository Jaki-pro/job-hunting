import React, { useContext } from 'react'; 
import Jobs from '../Jobs/Jobs';
import { JobsContext } from '../Layout/Layout';
import { useLoaderData } from 'react-router-dom';

const AllJobs = () => { 
    const jobs = useLoaderData();
    return (
        <Jobs isAll={false} jobs={jobs}></Jobs>
    );
};

export default AllJobs;