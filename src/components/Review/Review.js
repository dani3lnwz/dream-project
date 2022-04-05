import React from 'react';


const Review = (props) => {
    const {name,rating,image,review} = props.review
    return (
        <div className='bg-gray-200'>
           
            <img className='' src={image} alt="" />
            <h2 className='font-bold text-3xl bg-slate-100 '>Name: {name}</h2>
            <h4 className='text-2xl font-extrabold font-serif text-red-500'>Rating: {rating}</h4>
            <p><small className='font-bold '>Review : {review}</small></p>
        </div>
    );
};

export default Review;