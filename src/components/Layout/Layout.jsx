import React, { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom'; 
export const JobsContext = createContext([]);
const Layout = () => {    
    return (
        <>
            <Header></Header> 
            <Outlet></Outlet> 
            
        </>
    );
};

export default Layout;