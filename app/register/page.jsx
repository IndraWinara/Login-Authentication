import RegisterForm from '@/components/RegisterForm'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const Register = async () => {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/dashboard')
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <RegisterForm />
    </div>
  )
}

export default Register