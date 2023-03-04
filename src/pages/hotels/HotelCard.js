import React from 'react';
import { GoLocation } from 'react-icons/go';
import { FaRegUserCircle } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const HotelCard = ({ data }) => {
    const { name, img, price, capacity, ratings, street,id } = data

    return (
        <div>
            <div className='[&_.imgClass]:hover:scale-105 mb-5  overflow-hidden'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} className="imgClass duration-300" alt="car!" />
                    </PhotoView>
                </PhotoProvider>
                <div className='h-48 bg-white border border-gray-100 hover:shadow-lg duration-500 text-sm'>
                    <div className=' my-auto grid grid-cols-5'>
                        <div className='col-span-3 px-5 my-3 border-r-[0.8px] border-gray-200'>
                            <p className='text-xl  font-semibold '>{name}</p>
                            <p className='flex gap-3 mt-5'> <GoLocation />{street}</p>
                        </div>
                        <div className='col-span-2 px-5 my-3  text-center'>
                            <p className='text-2xl text-blue-400 font-bold'>${price}</p>
                            <p>/night</p>
                            <p className='flex items-center gap-2'><FaRegUserCircle />{capacity} Persons</p>
                            <p className='flex items-center gap-2'><FcRating />{ratings}</p>
                        </div>
                        
                    <div className='px-5 mt-6'>
                    <Link to={`/hotels/${id}`} className='mt-2 mb-8 px-3 py-2 bg-slate-300 text-[#003a6c] hover:bg-[#0b3962] hover:text-white duration-500 tracking-[2px] text-xs'>DETAILS</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;