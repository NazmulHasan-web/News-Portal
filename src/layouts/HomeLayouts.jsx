import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayouts = () => {
    const {state}=useNavigation()
    return (
        <div>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <LatestNews></LatestNews>
                
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-12 gap-5'>
                <aside className='order-1 md:order-1 md:col-span-3 md:sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="order-2 md:order-2 main col-span-6">
                    {state=="loading"?<Loading></Loading> :<Outlet></Outlet>}
                    
                </section>
                <aside className='order-3 md:order-3 col-span-3 md:sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;