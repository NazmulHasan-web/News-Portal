import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center gap-5 bg-base-200 p-3 '>
            <p className='text-base-100 bg-secondary p-2 px-3 '>Latest</p>
            <Marquee className='flex gap-5 cursor-pointer' pauseOnHover={true} speed={50}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium!</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium!</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium!</p>
                
            </Marquee>
            
        </div>
    );
};

export default LatestNews;