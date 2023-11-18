import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import AllJobs from './components/AllJobs/AllJobs.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx'; 
import JobsLoader from '../src/loader/JobsLoader.js'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'; 
import Statistics from './components/Statistics/Statistics.jsx'; 

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>, 
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: JobsLoader,
      },
      {
        path:'all-jobs',
        element:<AllJobs></AllJobs>,
        loader: JobsLoader
      },
      {
        path: 'job-details/:jobId',
        element: <JobDetails></JobDetails>,  
        loader: JobsLoader,
      },
      {
        path:'applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: JobsLoader
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>
      },

      {
        path:'*',
        element:'nothing'
      }
    ]
  }, 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
