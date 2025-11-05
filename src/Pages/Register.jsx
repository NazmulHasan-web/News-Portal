import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser,setUser,updateUser}=use(AuthContext)
    const [nameError,setNameError]=useState("")
    const navigate=useNavigate()

    const handleRegister=(e)=>{
        e.preventDefault();

        const form=e.target
        const name=form.name.value
        if(name.length<5){
            setNameError("Name should be at least 5 character")
            return;
        }
        else{
            setNameError("")
        }
        
        const photo=form.photo.value
        const email=form.email.value
        const password=form.password.value

        createUser(email,password)
        .then(result=>{
            // console.log(result.user)
            updateUser({
                displayName:name,
                photoURL:photo,
            })

            .then(()=>{
               setUser({...result.user, displayName:name,
                photoURL:photo,}) 
                navigate("/")
            })
            .catch(error=>{
                console.log(error)
                setUser(result.user)
            })
            


        })

        .catch(error=>{
            console.log(error)
        })
       
        

    }
    return (
         <div className='flex justify-center items-center min-h-screen'>
                    <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl py-5">
                        <h2 className='font-semibold text-3xl text-center'>Register your account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />
                            {
                                nameError && <p className='text-red-500'>{nameError}</p>
                            }
                            {/* Photo URL */}
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" required />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            {/* Password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <p className='py-4 text-center'>Already  Have An Account ? <Link to="/auth/login" className='text-red-500 underline hover:cursor-pointer'>Login</Link></p>
                        </fieldset>
                    </form>
                    </div>
                </div>
    );
};

export default Register;