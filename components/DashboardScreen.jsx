'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const DashboardScreen = () => {
const {data : session} = useSession()


  return (
    <div className='flex flex-col  p-5 md:w-[500px] md:h-[400px] w-[300px] h-[400px] border-t-[4px] border-blue-500 border-[1px]  shadow-xl rounded-lg'>
      <p className='text-center font-bold text-xl'>Hello , {session?.user?.name} 😊</p>
      <div className='mt-5'>
        <p>This your personal information</p>
        <div className='p-2 first-letter:'>
          <p>Username : {session?.user?.name}</p>
          <p>Email : {session?.user?.email}</p>
        </div>
      </div>
      <div className='h-full mt-5 flex justify-end items-end'>
        <button onClick={()=>signOut()} className='bg-sky-300 font-bold h-14 hover:bg-white duration-200 md:w-full w-[100px] rounded-full border-[1px] border-sky-600'>Sign Out</button>
      </div>
    </div>
  )
}

export default DashboardScreen