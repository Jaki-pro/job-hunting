
import { useContext, useEffect, useState } from 'react';
import Footer from '../Footer/Footer'; 
import Intro from '../Intro/Intro';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import Jobs from '../Jobs/Jobs';
import { JobsContext } from '../Layout/Layout';
import { useLoaderData } from 'react-router-dom'; 
const Home = () => {    
    const jobs = useLoaderData();  
    return (
        <div>
            
            <Intro></Intro>
            <JobCategoryList></JobCategoryList>
            {
                <Jobs jobs={jobs} isAll={true}></Jobs>
            } 
            <Footer></Footer>
        </div>
    );
};

export default Home;