import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useLoaderData, Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData()
    // console.log(services)
    return (
        <section className='my-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5  md:grid-cols-3 p-4'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service} />)
                }

            </div>
            <div className='text-center mt-6'>
                <Link to={'/services'} className="inline-block border-none bg-blue-600 py-2 px-4 text-white font-medium rounded-lg hover:bg-red-400 duration-300 hover:scale-105">See More <AiOutlineArrowRight className='inline' /> </Link>
            </div>
        </section>
    );
};

export default Services;