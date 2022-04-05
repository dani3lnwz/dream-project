import React from 'react';
import './Home.css'

import ProductReview from '../ProductReview/ProductReview';

const Home = () => {
  
    return (
        <div>
        <div className='grid md:grid-cols-2 gap-0 mt-8 '>
            <div>
                <h3 className='text-6xl font-bold mt-12 '>Your next Guitar  
                    <br />
                 <span id='ami' className='font-serif font-extrabold text-orange-400 '>Your best ChoOise</span>
                 </h3>
                 <p className='font-bold text-gray-700 m-10 text-2xl' >The Guitar is a fretted musical instrument that typically has six strings.It is held flat against the player's body and played by strumming or plucking the strings with the dominant Hand. <br />
                 A plectrum or individual fingers picks may also be used to strike the strings</p>
               
                 <button id='btn' className='text-4xl text-black-500 p-2 rounded-2 font-extrabold border-4 bg-slate-500'>Live Demo</button>
            </div>

            <div className='px-20 mx-20 mb-5 '>
                <img src={'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} alt="" />
            </div>
            </div>
            <ProductReview></ProductReview>
        </div>
    );
};

export default Home;