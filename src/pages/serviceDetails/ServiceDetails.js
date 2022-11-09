import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../shared/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { _id, img, title, description, price } = useLoaderData();

    const addReview = (e) => {
        e.preventDefault()
        const reviewText = e.target.review.value;
        const reviewData = { review: reviewText, serviceId: _id, title, reviewer: { reviewerImg: user.photoURL, name: user.displayName } }
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
                    <h3 className='text-2xl '>Below our client Review:</h3>

                    <form onSubmit={addReview}>
                        <textarea className='border-2 w-full p-3 focus:outline-green-400' name='review' placeholder='add your review'></textarea>
                        <button className="border-none bg-blue-600 py-2 px-4 text-white font-medium rounded-lg hover:bg-red-400 duration-300">Add Review</button>
                    </form>
                </div>
            </div>

        </section>
    )
};

export default ServiceDetails;