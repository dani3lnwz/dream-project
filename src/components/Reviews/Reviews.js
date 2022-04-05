import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import useGuiterReview from '../hooks/useGuiterReview';


const Reviews = () => {
    const [reviews, setReviews] = useGuiterReview([]);
    
    return (
        <div className='grid md:grid-cols-4 gap-5 m-8 p-5 border-2'>
            
            {
                reviews.map(review => <Review 
                    key={review.id}
                    review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;