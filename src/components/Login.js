"use client"
import { getFunction } from '@/utils/utilsFunctions'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const [state , setState ] = React.useState({})
    const router = useRouter();

    const handleChange = (e) => {
        setState(state=>({...state,[e.target.name]:e.target.value}));
    }

    const handleClick = async(e) => {
      if(!Object.keys(state).length || !state.username || !state.password ||state.username === '' || state.password === ''){
        toast.error('Please enter username and password')
      }else{
        const res = await getFunction(state);
        console.log(res);
        router.push('/welcomepage')
      } 
    }

    return (
    <div className='flex flex-col bg-gray-300 justify-center items-center gap-2 w-full h-screen'>
      <div className='flex flex-col'>
        <label>Username</label>
        <input type='text' className='p-2 rounded focus:outline-sky-300' name='username' onChange={handleChange}/>
      </div>
      <div className='flex flex-col'>
        <label>Password</label>
        <input type='password' className='p-2 rounded focus:outline-sky-300' name='password' onChange={handleChange}/>
      </div>
      <button className='bg-blue-500 text-white p-2 rounded' onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
