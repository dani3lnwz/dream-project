import React from 'react';
import {CheckCircleIcon} from '@heroicons/react/solid';

const Review = (props) => {
    const {name,rating,image,review} = props.review
    return (
        <div className='bg-gray-200'>
            {/* <div className='w-20 h-20 justify-center border-4 rounded'> */}
            {/* <img className='' src={image} alt="" />
            </div> */}
            <img className='' src={image} alt="" />
            <h2 className='font-bold text-3xl bg-slate-100'>Name: {name}</h2>
            <h4 className='text-1xl font-extrabold font-serif'>Rating: {rating}</h4>
            <p><small className='font-bold '>Review : {review}</small></p>
            {/* <p className='flex items-center'><CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon> hello</p> */}

            
        </div>
    );
};

export default Review;