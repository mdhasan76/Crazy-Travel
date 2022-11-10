import React from 'react';
import useTitle from '../../shared/useTitle';
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
        </div>
    );
};

export default Home;