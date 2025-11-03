import React from 'react';
import { NavLink } from 'react-router';
import login from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center mt-5'>
           <div className=""></div>
            <div className="flex gap-5 items-center text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-5 items-center">
                <img src={login} alt="" />
                <button className='btn btn-primary px-8'>Login</button>

            </div>
        </div>
    );
};

export default Navbar;