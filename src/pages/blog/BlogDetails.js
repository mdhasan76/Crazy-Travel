import React, { useContext } from 'react';
import { AiFillHeart, AiOutlineRight } from 'react-icons/ai';
import { MdOutlineDateRange } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../shared/AuthProvider';

const BlogDetails = () => {
    const { id } = useParams();
    const { blogData } = useContext(AuthContext);

    const { banner, cardImg, date, description1, description2, description3, description4, description5, react, title, view, travelBestImg, author } = blogData.find(d => d.id === parseInt(id));
    // console.log(details)
    return (
        <section >
            <div className='text-white relative bg-gradient-to-t from-black to-slate-500  
            h-[430px]'>
                <img src={banner} alt="/" className='absolute h-full w-full object-cover mix-blend-overlay' />
                <div className='flex flex-col justify-end h-full mx-auto p-10 md:p-20'>
                    <h2 className=' font-bold mb-3 tracking-[5px] text-3xl flex items-center'>Blog</h2>
                    <p className='font-medium text-lg flex'><Link to={'/'}>Home </Link>
                        <span className='inline-block'>{<AiOutlineRight className=' inline-block text-2xl ml-2 mr-2'
                        />}
                        </span> <span className='inline-block'><Link to="/blog"> Blog {<AiOutlineRight className='text-2xl ml-2 inline-block ' />}  </Link></span>
                        <span className='text-gray-300 ml-2'>{title}</span>
                    </p>
                </div>
            </div>
            <div className='max-w-4xl mx-auto p-5 lg:p-0 my-10'>
                <div>
                    {/* <img src={cardImg} alt="" className=''/> */}
                </div>
                <div className='flex items-center mb-5'>
                    <div className='flex'>
                        <MdOutlineDateRange className='mr-2' />
                        <span className='text-sm mr-3'>{date}</span>
                    </div>
                    <div className='flex'>
                        <FiMessageCircle className='mr-2' />
                        <span className='text-sm mr-3'> 0</span>
                    </div>
                    <div className='flex'>
                        <AiFillHeart className='mr-2' />
                        <span className='text-sm mr-3'> {react}</span>
                    </div>
                    <div className='flex'>
                        <FaEye className='mx-2' />
                        <span className='text-sm'> {view}</span>
                    </div>
                </div>
                <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description1}</p>
                <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description2}</p>

                <div className='grid grid-cols-6 mb-8'>
                    <div className='col-span-2'><img src={travelBestImg} className="h-72" alt="" /></div>
                    <div className='col-span-4 ml-5 '>
                        <h3 className='text-xl mb-5 font-semibold text-black'>Getting the best of Travel</h3>
                        <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description3}</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description4}</p>
                    <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description5}</p>
                </div>

                <div className='relative my-10 mb-20'>
                    <hr/>
                    <div className='absolute -top-14 left-[44%] '>
                        <img src={author.authorImg} alt="" className='w-28 h-28 ring-8 ring-white rounded-full object-cover
                        ' />
                    </div>
                    <div className='text-center mt-20'>
                        <p className='text-sm tracking-[1.5px] text-[#003a6c] font-semibold'>AUTHOR</p>
                        <p className='text-2xl font-semibold mb-8'>{author.name}</p>
                        <p style={{ lineHeight: "30px" }} className='mb-10 text-sm font-poppins text-center'>{author.authorDescription}</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;