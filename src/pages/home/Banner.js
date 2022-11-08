import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url("/src/assets/img/travel.jpg")] py-16 sm:py-20 lg:py-[150px] bg-cover bg-no-repeat rounded-lg'>
            <div className='flex justify-end '>
                <div className='max-w-2xl px-7 lg:px-10 '>
                    <h2 style={{ 'lineHeight': '1.5' }} className='  md:text-white font-bold text-3xl md:text-4xl lg:text-5xl'>Take Best Serivce & Make enjoyeble Trip with me</h2>
                    <p className='text-lg opacity-90 font-medium py-3 md:text-white'>Good idea and Good Person make your life easy. so, Discussion with me and take Right decission from me. </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;