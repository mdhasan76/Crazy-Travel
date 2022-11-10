import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../shared/AuthProvider';
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const deleteReview = () => {
        toast.success("review Delete")


        // fetch("http://localhost:5000/deletereview", {
        //     method: "DELETE",
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
    }

    return (
        <div>
            <h2 className='text-3xl font-semibold py-3 mb-4'>My Review List:-</h2>
            <div className='p-3 mb-3 bg-indigo-200 grid grid-cols-5 items-center'>
                <div className='col-span-4'>
                    <p className='text-2xl font-medium'>Service Name</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad perferendis id similique nesciunt fuga excepturi dolorem modi asperiores quae maxime.</p>
                </div>
                <div className='text-right'>


                    <Link to={'/editreview'}><div className='inline-block  bg-white p-3 rounded-full duration-300 hover:bg-gray-300 hover:text-green-500 mx-3 text-center'>
                        <FaEdit className='text-3xl ' />
                    </div></Link>
                    <Link>
                        <div onClick={deleteReview} className='inline-block  bg-white p-3 rounded-full duration-300 text-red-400 hover:text-white hover:bg-red-400'>
                            <MdDelete className='text-3xl ' />
                        </div></Link>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyReviews;