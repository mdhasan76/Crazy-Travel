import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCard from './HotelCard';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() =>{
        axios.get('/hotel.json')
        .then(function (res){
            setHotels(res.data)
        })
        .catch(function (err){
            console.log(err)
        })
    },[])
    return (
        <div className='container mx-auto p-5'>
            <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
            {
                hotels?.map((d, i) => <HotelCard key={i} data={d} /> )
            }
        </div>
        </div>
    );
};

export default Hotels;