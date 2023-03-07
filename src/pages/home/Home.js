import React from 'react';
import useTitle from '../../shared/useTitle';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import GetHotels from './GetHotels';
import Services from './Services';
import State from './State';

const Home = () => {
    useTitle("Crazy Travel")
    return (
        <div>
            <Banner />
            <GetHotels/>
            <Services />
            <State />
            <About />
            <Contact/>
        </div>
    );
};

export default Home;