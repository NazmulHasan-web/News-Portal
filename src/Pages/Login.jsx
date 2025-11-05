import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signIn}=use(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const [error,setError]=useState("")
    // console.log(location)
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        // console.log({email,password})
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(`${location.state? location.state:"/"}`)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (

            
                <div className='flex justify-center items-center min-h-screen'>
                    <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl py-5">
                        <h2 className='font-semibold text-3xl text-center'>Login your account</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required/>
                            {
                                error && <p className='text-red-500'> Wrong Password:{error} </p>
                            }
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='py-4 text-center'>Dont’t Have An Account ? <Link to="/auth/register" className='text-red-500 underline hover:cursor-pointer'>Register</Link></p>
                        </fieldset>
                    </form>
                    </div>
                </div>
         

            
    );
};

export default Login;