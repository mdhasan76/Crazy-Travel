import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../shared/useTitle';
import ServiceCard from '../home/ServiceCard';

const Allservices = () => {
    useTitle("Services")
    const services = useLoaderData();
    // if (!services) {
    //     return <div className="flex justify-center items-center h-[50vh]">
    //         <div className="grid gap-2">
    //             <div className="flex items-center justify-center ">
    //                 <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
    //             </div>
    //         </div>
    //     </div>
    // }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 my-8  md:grid-cols-3 p-3'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service} />)
            }
        </div>
    );
};

export default Allservices;