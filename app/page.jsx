import LoginForm from '@/components/LoginForm'
import { getServerSession } from 'next-auth'
import  {authOptions}  from '../app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const Login = async () => {
  const session = await getServerSession(authOptions)
  if (session){
    redirect('/dashboard')
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <LoginForm />
    </div>
  )
}

export default Login
