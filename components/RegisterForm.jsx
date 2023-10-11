import Link from 'next/link'
import React from 'react'

const RegisterForm = () => {
    return (
        <div className='flex flex-col p-5 md:w-[500px] md:h-[400px] w-[300px] h-[400px] border-t-[4px] border-blue-500 border-[1px]  shadow-xl rounded-lg'>
            <div className='mx-auto'>
                <h1 className='font-bold md:text-lg text-sm'>Welcome to our Awesome Project</h1>
            </div>
            <form>
                <div className='flex flex-col'>
                    <div className='flex flex-col p-2'>
                        <label className='text-sm md:text-[15px] font-bold'>Name :</label>
                        <input type='text' placeholder='John Doe...' className='p-2 text-sm md:text-[15px] outline-sky-500 border-[2px] rounded-lg border-sky-500' />
                    </div>
                    <div className='flex flex-col p-2'>
                        <label className='text-sm md:text-[15px] font-bold'>E-mail :</label>
                        <input type='email' placeholder='Email@email.com.....' className='p-2 text-sm md:text-[15px] outline-sky-500 border-[2px] rounded-lg border-sky-500' />
                    </div>
                    <div className='flex flex-col p-2'>
                        <label className='text-sm md:text-[15px] font-bold'>Password :</label>
                        <input type='password' placeholder='*******' className='p-2 text-sm md:text-[15px] outline-sky-500 border-[2px] rounded-lg border-sky-500' />
                    </div>
                </div>
                <div className='flex flex-col justify-between h-[110px]'>
                    <div className='h-[50px] mt-5 flex justify-end'>
                        <button className='bg-sky-300 font-bold hover:bg-white duration-200 md:w-full w-[100px] rounded-full border-[1px] border-sky-600'>Register</button>
                    </div>
                    <Link href='/' className='text-sm text-end'>Already have an account? <span className='underline cursor-pointer'>Login</span></Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm