import React from 'react';
import { Link } from 'react-router-dom'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { title, description, price, img, _id } = service;
    return (
        <div className="card glass mb-5 rounded-none">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} className="" alt="car!" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="font-bold text-xl pb-3 border-b ">{title}</h2>
                <h2 className="font-medium text-2xl pb-3 border-b text-right"> {price}</h2>
                <p>
                    {
                        description.length > 100 ? description.slice(0, 100) + '...' :
                            description
                    }
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`}>
                        <button className="border-none bg-blue-600 py-2 px-4 text-white font-medium rounded-lg hover:bg-red-400 duration-300 ">Dtails</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;