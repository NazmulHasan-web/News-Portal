import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data=useLoaderData();
    const {id}=useParams()
    const [news,setNews]=useState({})
    
    // console.log(data,id,news)
    useEffect(()=>{
        const newsDetails=data.find(singleNews=>singleNews.id==id)
        setNews(newsDetails)
    },[data,id])
    return (
        <div>
           <header>
                <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 py-8 gap-8'>
                <section className='col-span-9'>
                    <h2 className='font-bold py-5'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='w-full md:col-span-3'>
                    <RightAside></RightAside>
                 </aside>

           </main>
        </div>
    );
};

export default NewsDetails;