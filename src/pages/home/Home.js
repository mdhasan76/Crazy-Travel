import React from 'react';
import useTitle from '../../shared/useTitle';
import About from './About';
import Banner from './Banner';
import Services from './Services';
import State from './State';

const Home = () => {
    useTitle("Crazy Travel")
    return (
        <div>
            <Banner />
            <Services />
            <State />
            <About />
        </div>
    );
};

export default Home;