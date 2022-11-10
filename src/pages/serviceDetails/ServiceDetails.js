import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../shared/AuthProvider';
import useTitle from '../../shared/useTitle';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { _id, img, title, description, price } = useLoaderData();
    const [review, setReview] = useState([]);
    useTitle("Service Details")

    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    // console.log(review)

    const addReview = (e) => {
        e.preventDefault()
        const reviewText = e.target.review.value;
        const reviewData = {
            review: reviewText,
            serviceId: _id,
            title,
            reviewer: { email: user.email, reviewerImg: user.photoURL, name: user.displayName }
        }

        fetch("http://localhost:5000/addreview", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.target.reset()
        console.log(reviewData)
    }

    return (
        <section>
            <div>
                <div>
                    <img src={img} className='object-cover w-full h-[350px] rounded-lg' alt="" />
                </div>
                <div className='max-w-xl mx-auto my-5'>
                    <h2 className='text-3xl font-semibold'>Service Name: {title}</h2>
                    <h3 className='text-2xl font-medium py-3'>Price: {price}</h3>
                    <p className='leading-7' style={{ lineHeight: "2rem" }}>Description: {description}</p>
                    <hr className='my-4' />
                    <h3 className='text-2xl mb-3'>Below our client Review:</h3>


                    <div>
                        {
                            review.map(review => <div key={review._id} className='bg-stone-100 p-4 rounded-lg mb-3'>
                                <p className='text-lg py-3'>{review.reviewText}</p>
                                <div>
                                    <h2>Review by-</h2>
                                    <div className='py-2 flex items-center' >
                                        <img alt='' className='h-6 w-6 rounded-full'
                                            src={review.userInfo?.reviewerImg
                                            } />
                                        <span className='text- font-medium ml-2'>{review.userInfo?.name}</span>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    {
                        user ? <form onSubmit={addReview}>
                            <textarea className='border-2 w-full p-3 focus:outline-green-400' name='review' placeholder='add your review' required></textarea>
                            <button className="border-none w-full my-3 bg-blue-600 py-2 px-4 text-white font-medium rounded-lg hover:bg-red-400 duration-300">Add Review</button>
                        </form>
                            :
                            <div>
                                <h3 className='text-lg text-semibold text-red-600 mt-10'>Please Login first for add your Review</h3>
                                <Link to={'/login'} className="border-none w-full block text-center my-3 bg-blue-600 py-2 px-4 text-white font-medium rounded-lg hover:bg-red-400 duration-300">Login Now</Link>
                            </div>
                    }
                </div>
            </div>

        </section>
    )
};

export default ServiceDetails;