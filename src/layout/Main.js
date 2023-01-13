import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Sidebar from '../Pages/Shared/Sidebar/Sidebar';

const Main = () => {
    return (
       <div>
         <div>
            <Header></Header>
        </div>
        <div className='flex'>
            
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
       </div>
    );
};

export default Main;