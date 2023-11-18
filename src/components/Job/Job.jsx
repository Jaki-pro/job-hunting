import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Job.css'
import { Link } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../fakeData/fakeDb';
import { Toaster, toast } from 'react-hot-toast'; 
const Job = ({isdetails, job}) => {   
    const handleApplyJob=(id)=>
    {
        const storedCart = getShoppingCart();
        if(storedCart[id]>=1) {toast('Uhhu..You have already applied this Job'); console.log('already ache');}
        else addToDb(id);
    }
    return (
        <Card className='job' sx={{ maxWidth: 345 }}>
            <CardMedia className='img'
                component="img"
                alt="green iguana"
                height="140"
                image={job.logo}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {job.job_title}
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                   <span style={{fontWeight:'600'}}>Company</span> : {job.company_name}
                </Typography>
                {
                    isdetails? <Typography variant="body2" color="text.secondary">
                   <span style={{fontWeight:'600'}}>Salary</span> : {job.salary}
                </Typography>:''}
                {
                    isdetails? <Typography variant="body2" color="text.secondary">
                   <span style={{fontWeight:'600'}}>Phone</span> : {job.contact_information.phone}
                </Typography>:''}
                {
                    isdetails? <Typography variant="body2" color="text.secondary">
                   <span style={{fontWeight:'600'}}>Email</span> : {job.contact_information.email}</Typography>:''
                }
                {
                    isdetails?<Typography variant="body2" color="text.secondary">
                   <span style={{fontWeight:'600'}}>Address</span> : {job.contact_information.address}
                </Typography> :''
                } 
                 
               
            </CardContent>
            {
                !isdetails?<CardActions>
                <Link to={`/job-details/${job.id}`}>
                    <Button size="large" variant='contained' style={{textTransform:'capitalize', margin: '0 auto' }}>View Details</Button>
                </Link>
            </CardActions>:<Button onClick={()=>handleApplyJob(job.id)} variant='contained' size="large" style={{textTransform:'capitalize', margin: '0 auto'}}>Apply Now</Button> 
            } 
            <Toaster style={{}}></Toaster>
        </Card>
    );
};
Job.propTypes;
export default Job;