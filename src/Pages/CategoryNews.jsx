import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCards from '../components/NewsCards';

const CategoryNews = () => {
    const { id } = useParams();  
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {

        if (id == "0") {
            setCategoryNews(data)
        }
        else if (id == "1") {
            const filterNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filterNews)
        }
        else {
            const filterNews = data.filter(news => news.category_id == id)
            setCategoryNews(filterNews)
        }
    }, [id, data])


    return (
        <div>
            <h2 className='font-bold mb-5'>Total News <span className='text-secondary'>{categoryNews.length} </span> Found</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=> <NewsCards news={news}></NewsCards>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;