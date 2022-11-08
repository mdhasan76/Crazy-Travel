import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../home/ServiceCard';

const Allservices = () => {
    const services = useLoaderData()
    return (
        <div className='grid grid-cols-2 gap-5 my-8  md:grid-cols-3'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service} />)
            }

        </div>
    );
};

export default Allservices;