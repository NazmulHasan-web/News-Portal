import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import login from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut}=use(AuthContext)
    

    const handleLogOut=()=>{
        // console.log("click")

        logOut()
        .then(()=>{
            alert("Logout successfully")
        })
        .catch(error=>{
            // console.log(error)
        })
    }
    return (
        <div className='w-11/12 mx-auto space-y-3 text-center md: flex justify-between items-center mt-5'>
           <div className="">{user && user.email} </div>
            <div className="flex gap-5  text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-5 items-center">
                <img src={`${user ? user.photoURL:login}`} alt="" />
                {
                    user ?(<button onClick={handleLogOut} className='btn btn-primary px-8'>LogOut</button>):(<Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>) 
                }
                

            </div>
        </div>
    );
};

export default Navbar;