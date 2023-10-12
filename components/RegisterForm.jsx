'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("All fields are necessary.");
            return;
        }
        
        try {
            const resUserExists = await fetch("api/userExist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            
            const { user } = await resUserExists.json();
            
            if (user) {
                setError("User already exists.");
                return;
            }
            
            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            
            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push('/')
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };
    
    return (
        <div className='flex flex-col p-5 md:w-[500px] md:h-[400px] w-[300px] h-[450px] border-t-[4px] border-blue-500 border-[1px]  shadow-xl rounded-lg'>
            <div className='mx-auto'>
                <h1 className='font-bold md:text-lg text-sm'>Welcome to our Awesome Project</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <div className='flex flex-col p-2'>
                        <label className='text-sm md:text-[15px] font-bold'>Name :</label>
                        <input required value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='John Doe...' className='p-2 text-sm md:text-[15px] outline-sky-500 border-[2px] rounded-lg border-sky-500' />
                    </div>
                    <div className='flex flex-col p-2'>
                        <label className='text-sm md:text-[15px] font-bold'>E-mail :</label>
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email@email.com.....' className='p-2 text-sm md:text-[15px] outline-sky-500 border-[2px] rounded-lg border-sky-500' />
                    </div>
                    <div className='flex flex-col p-2'>
                        <label className='text-sm md:text-[15px] font-bold'>Password :</label>
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='*******' className='p-2 text-sm md:text-[15px] outline-sky-500 border-[2px] rounded-lg border-sky-500' />
                    </div>
                </div>
                <div className='flex flex-col justify-between h-[110px]'>
                    <div className='h-[50px] mt-5 flex justify-end'>
                        <button type='submit' className='bg-sky-300 font-bold hover:bg-white duration-200 md:w-full w-[100px] rounded-full border-[1px] border-sky-600'>Register</button>
                    </div>
                    <Link href='/' className='text-sm text-end'>Already have an account? <span className='underline cursor-pointer'>Login</span></Link>
                </div>
            </form>
            {
                error ? <div className=' h-full flex justify-center items-center'>
                    <p className='px-5 py-1 bg-red-400 rounded-full w-fit text-sm'>{error}</p>
                </div> : null
            }

        </div>
    )
}

export default RegisterForm