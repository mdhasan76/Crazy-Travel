import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../shared/Nav';

const Main = () => {
    return (
        <section>
            <Nav />
            <Outlet />
        </section>
    );
};

export default Main;