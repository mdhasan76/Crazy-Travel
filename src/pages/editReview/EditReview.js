import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const reviewData = useLoaderData();
    // console.log(reviewData)
    const updateReview = (e) => {
        e.preventDefault();
        const updateText = e.target.updateText.value;
        console.log(updateText);

        fetch(`http://localhost:5000/editreview/${reviewData._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ updateText })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='min-h-[80vh]'>
            <form onSubmit={updateReview}>
                <textarea className='border-2 w-full p-3 focus:outline-green-400' defaultValue={reviewData.reviewText} name='updateText' placeholder='add your review' ></textarea>
                <button className="border-none my-3 bg-blue-600 py-2 px-4 text-white font-medium rounded-lg hover:bg-red-400 duration-300">Update Review</button>
            </form>
        </div>
    );
};

export default EditReview;