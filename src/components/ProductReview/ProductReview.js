import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGuiterReview from '../hooks/useGuiterReview'
import Review from '../Review/Review';

const ProductReview = () => {
    const [reviews] = useGuiterReview();
    const reviewData = reviews.slice(0, 3);
    const navigate = useNavigate();

    return (
        <div   >
            <h1 className='text-4xl font-bold text-orange-600'>Customer Reviews(3)</h1>
            <div className='grid grid-cols-3 gap-5 mx-10 p-20'>
                {
                    reviewData.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
                
            </div>
            <button className='text-3xl font-bold text-red-600 border-2 bg-gray-300 m-2 p-2' onClick={()=> navigate('/reviews')}>See all reviews...</button>
        </div>
    );
};

export default ProductReview;