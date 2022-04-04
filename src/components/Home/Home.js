import React, { useState } from 'react';
// import { useSpring, animated} from 'react-spring';
import './Home.css'

const Home = () => {
    // const [flip, set] =useState(false)
    // const props = useSpring({
    //      to: { opacity: 1},
    //       from: {opacity: 0},
    //     reset: true,
    //     reverse: flip,
    //     delay: 200,
    //     onRest: () => set(!flip),
    //     })
    return (
        <div className='grid md:grid-cols-2 gap-0 mt-8 '>
            <div>
                <h3 className='text-6xl font-bold mt-12 '>Your next phone  
                    <br />
                 <span id='ami' className='font-serif font-extrabold text-orange-400 '>Your best phone</span>
                 </h3>
                 <p className='font-bold text-gray-700 m-10 text-2xl' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aliquam eius? Aut officia esse, quidem, quos perferendis mollitia voluptatem ex placeat voluptate molestiae, doloremque laborum vel? Magni, repudiandae. Accusamus, repudiandae.</p>
                 {/* <animated.div style={props}>I will Fade in</animated.div> */}
            </div>
            <div className='px-20 mx-20 mb-5 '>
                <img src={'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} alt="" />
            </div>
        </div>
    );
};

export default Home;