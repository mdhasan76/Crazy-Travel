import React from 'react';
import useTitle from '../../shared/useTitle';
import bannerImg from '../../assets/img/blogbanner.jpg';
import {AiOutlineRight} from "react-icons/ai"
import { Link } from 'react-router-dom';
 
const Blog = () => {
    useTitle("Blog")
    return (
        <section >
            <div className='text-white relative bg-gradient-to-t from-stone-900 to-slate-500  h-[430px]'>
                <img src={bannerImg} alt="/" className='absolute h-full w-full object-cover mix-blend-overlay'/>
                <div className='flex flex-col justify-end h-full mx-auto p-10 md:p-20'>
                 <h2 className=' font-bold mb-3 tracking-[5px] text-3xl flex items-center'>Blog</h2>
                    <p className='font-medium text-lg flex'><Link to={'/'}>Home</Link> <span className='inline-block'>{<AiOutlineRight className='text-2xl ml-2' />}</span> <span className='text-gray-300 ml-2'>Blog</span></p>
                </div>
            </div>
        </section>
    );
};

export default Blog;