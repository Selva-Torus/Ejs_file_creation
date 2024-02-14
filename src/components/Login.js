"use client"
import { getFunction } from '@/utils/utilsFunctions'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const [state , setState ] = React.useState({})
    const router = useRouter();

    const handleChange = (e) => {
        setState(state=>({...state,[e.target.name]:e.target.value}));
    }

    const handleClick = async(e) => {
      const res = await getFunction(state);
      console.log(res);
      router.push('/welcomepage')
    }

    return (
    <div className='flex flex-col bg-gray-300 justify-center items-center gap-2 w-full h-screen'>
      <div className='flex flex-col'>
        <label>Username</label>
        <input type='text' name='username' onChange={handleChange}/>
      </div>
      <div className='flex flex-col'>
        <label>Password</label>
        <input type='password' name='password' onChange={handleChange}/>
      </div>
      <button className='bg-blue-500 text-white p-2 rounded' onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
