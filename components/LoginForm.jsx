'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await signIn("credentials", { email, password, redirect: false })
            if(res.error){
                setError("Username or Password Wrong")
                return
            }
            router.replace('dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col p-5 md:w-[500px] md:h-[400px] w-[300px] h-[400px] border-t-[4px] border-blue-500 border-[1px]  shadow-xl rounded-lg'>
            <div className='mx-auto'>
                <h1 className='font-bold md:text-lg text-sm'>Welcome to our Awesome Project</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <div className='flex flex-col p-2'>
                        <label className='text-sm md:text-[15px] font-bold'>E-mail :</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} required type='email' placeholder='Email@email.com.....' className='p-2 text-sm md:text-[15px] outline-sky-500 border-[2px] rounded-lg border-sky-500' />
                    </div>
                    <div className='flex flex-col p-2'>
                        <label className='text-sm md:text-[15px] font-bold'>Password :</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} required type='password' placeholder='*******' className='p-2 text-sm md:text-[15px] outline-sky-500 border-[2px] rounded-lg border-sky-500' />
                    </div>
                </div>
                <div className='flex flex-col justify-between h-[150px]'>
                    <div className='h-[50px] mt-5 flex justify-end'>
                        <button type='submit' className='bg-sky-300 font-bold hover:bg-white duration-200 md:w-full w-[100px] rounded-full border-[1px] border-sky-600'>Login</button>
                    </div>
                    {
                        error ? <div className=' h-10 flex justify-center items-center'>
                            <p className='px-5 py-1 bg-red-400 rounded-full w-fit text-sm'>{error}</p>
                        </div> : null
                    }
                    <Link href='/register' className='text-sm text-end'>Don't have an account? <span className='underline cursor-pointer'>register</span></Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm