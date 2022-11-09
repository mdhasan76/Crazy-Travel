import React from 'react';
import { useLoaderData } from 'react-router-dom'

const ServiceDetails = () => {
    const { img, title, description, price } = useLoaderData();
    return (
        <section>
            <div>
                <div>
                    <img src={img} className='object-cover w-full h-[350px] rounded-lg' alt="" />
                </div>
                <div className='max-w-xl mx-auto my-5'>
                    <h2 className='text-3xl font-semibold'>Service Name: {title}</h2>
                    <h3 className='text-2xl font-medium py-3'>Price: {price}</h3>
                    <p className='leading-7' style={{ lineHeight: "2rem" }}>Description: {description}</p>
                    <hr className='my-4' />
                    <h3 className='text-2xl '>Below our client Review:</h3>


                </div>
            </div>

        </section>
    )
};

export default ServiceDetails;