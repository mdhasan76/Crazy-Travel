import React from 'react';
import { BiUser } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineMessage } from 'react-icons/md';
// import contactBg from "../../assets/img/contactbg.jpg"

const Contact = () => {
    return (
        <div className='py-10  px-5 bg-[url("https://media.istockphoto.com/id/1141639313/photo/contact-us-woman-hand-holding-icon-customer-support-concept-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=b72JkIvEEmhF2XQyyb6F3bjD-Qsf8BNC13egb7isk6M=")] bg-cover object-fit bg-fixed'>
            <div className=' max-w-4xl mx-auto bg-slate-50 bg-opacity-80 shadow-xl'>
                <div className='my-10 p-7 max-w-4xl mx-auto'>
                    
                <h2 className='text-[#003a6c] text-2xl mb-8 font-semibold'>Leave Us a Message</h2>
                    <form className=''>
                        <div className='bg-[#e3f1f8] p-5 border-b-4 border-[#96daec] mb-8'>
                            <BiUser className='mr-2 text-xl inline-block' />
                            <input type="text" placeholder='Name' className='bg-transparent outline-none' />
                        </div>
                        <div className='grid sm:grid-cols-2 gap-5'>
                            <div className='bg-[#e3f1f8] p-5 border-b-4 border-[#96daec] mb-8'>
                                <IoIosCall className='mr-2 text-xl inline-block' />
                                <input type="number" placeholder='Phone' className='bg-transparent outline-none' />
                            </div>
                            <div className='bg-[#e3f1f8] p-5 border-b-4 border-[#96daec] mb-8'>
                                <MdEmail className='mr-2 text-xl inline-block' />
                                <input type="email" placeholder='Email' className='bg-transparent outline-none' />
                            </div>
                        </div>
                        <div className='relative bg-[#e3f1f8] p-5 border-b-4 border-[#96daec] mb-8'>
                            <MdOutlineMessage className='mr-2 text-xl inline-block absolute top-6' />
                            <textarea placeholder='Message' rows={5} className=' w-full ml-8 bg-transparent outline-none'></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;