import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../shared/AuthProvider';
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviewData, setReviewData] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviewData(data)
            })
    }, [user?.email])
    console.log(reviewData)

    const deleteReview = (id) => {
        fetch(`http://localhost:5000/deletereview/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const newReviewData = reviewData.filter(review => review._id !== data._id)
                setReviewData(newReviewData)
                toast.success("review Delete")
            })
    }

    return (
        <div>
            <h2 className='text-3xl font-semibold py-3 mb-4'>My Review List:-</h2>
            {
                reviewData.length > 0 ?
                    reviewData.map(review =>

                        <div key={review._id} className='p-3 mb-3 bg-indigo-200 grid grid-cols-5 items-center rounded-lg'>
                            <div className='col-span-4'>
                                <p className=' font-medium'>service:  {review.title}</p>
                                <p>{review.reviewText}</p>
                            </div>
                            <div className='text-right'>

                                <Link to={'/editreview'}><div className='inline-block  bg-white p-3 rounded-full duration-300 hover:bg-gray-300 hover:text-green-500 mx-3 text-center'>
                                    <FaEdit className='text-3xl ' />
                                </div></Link>
                                <Link>
                                    <div onClick={() => deleteReview(review._id)} className='inline-block  bg-white p-3 rounded-full duration-300 text-red-400 hover:text-white hover:bg-red-400'>
                                        <MdDelete className='text-3xl ' />
                                    </div></Link>

                            </div>
                        </div>)

                    :

                    <div className='text-5xl min-h-[50vh] flex items-center justify-center'>You Have No Review added Yet</div>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyReviews;