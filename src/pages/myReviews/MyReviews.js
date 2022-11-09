import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../shared/AuthProvider';

const MyReviews = () => {
    // const { user } = useContext(AuthContext);
    // const userMail = user;
    // useEffect(() => {
    //     fetch(`http://localhost:5000/myreviews?email=${userMail}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)

    //         })
    // }, [])
    return (
        <div>
            review page
        </div>
    );
};

export default MyReviews;