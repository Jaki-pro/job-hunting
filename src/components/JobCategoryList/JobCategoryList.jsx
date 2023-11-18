import React from 'react';
import icon1 from '../../assets/icons/accounts.png'
import icon2 from '../../assets/icons/calendar.png'
import icon3 from '../../assets/icons/chip.png'
import icon4 from '../../assets/icons/creative.png'
import './JobCategoryList.css'
const JobCategoryList = () => {
    return (
        <div className='job-category-list'>
            <h2>Job Category List</h2>
            <p style={{margin:'10px'}}>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='categories'>
                <div>
                    <img src={icon1} alt="" />
                    <h4>Account & Finance</h4>
                    <p>300 Jobs Available</p>
                </div>
                <div>
                    <img src={icon2} alt="" />
                    <h4>Account & Finance</h4>
                    <p>300 Jobs Available</p>
                </div>
                <div>
                    <img src={icon3} alt="" />
                    <h4>Account & Finance</h4>
                    <p>300 Jobs Available</p>
                </div>
                <div>
                    <img src={icon4} alt="" />
                    <h4>Account & Finance</h4>
                    <p>300 Jobs Available</p>
                </div>

            </div>

        </div>
    );
};

export default JobCategoryList;