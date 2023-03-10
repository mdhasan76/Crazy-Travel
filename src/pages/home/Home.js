import React from 'react';
import useTitle from '../../shared/useTitle';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import GetHotels from './GetHotels';
import OurBlog from './OurBlog';
import Services from './Services';
import ServiceT from './ServiceT';
import State from './State';

const Home = () => {
    useTitle("Crazy Travel")
    return (
        <div>
            <Banner />
            <GetHotels/>
            <ServiceT/>
            <Services />
            <State />
            <About />
            <OurBlog/>
            <Contact/>
        </div>
    );
};

export default Home;