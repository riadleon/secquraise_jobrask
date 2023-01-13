import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Sidebar from '../Pages/Shared/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;