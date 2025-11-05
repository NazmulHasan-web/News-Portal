import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router';


const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
        <div className='space-y-5 '>
            <img className=' h-[400px] w-full object-cover' src={news.image_url} alt="" />
            <h2 className='text-2xl font-bold'>{news.title} </h2>
            <p>{news.details} </p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}><FaLongArrowAltLeft></FaLongArrowAltLeft> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;