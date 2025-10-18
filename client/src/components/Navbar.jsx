import React from 'react'
import {assets} from '../assets/assets.js';
import {useNavigate} from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='fixed z-5 w-full bg-blue-100 backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
        <div className='flex align-center justify-center items-center rounded-half px-5 py-5'>
        <img src={assets.logo} alt='logo' className='w-10 h-20 sm:w-44 cursor-pointer' onClick={()=>{navigate('/')}} ></img>
        <h1 className='text-5xl text-black=200'>InspireAI-</h1>
        </div>
        <button className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 h-20 text-xl'>Get started <ArrowRight classname='w-10 h-10'></ArrowRight></button>
    </div>
  )
}

export default Navbar