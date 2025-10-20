import React from 'react'
import {useNavigate} from "react-router-dom";
const Hero = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='px-4 py-80 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradient_background.jpg)] bg-cover bg-repeat min-h-screen'>
        <div className="text-center mb-6 ">
          <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">Create amazing content <br></br> with <span className="text-primary">AI tools</span></h1>
          <p className='mt-4 max-w-xs sm:ma x-w-lg 2xl:max-w-xl m-auto max-smm:text-xs text-gray-600 text-xl  '>Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow</p>
        </div>
        <div className="flex flex-wrap justify-center gap -4 text-sm max-sm:text-xs py-10">
          <button onClick={()=>{navigate('/ai')}}className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 acrive:scale-95 transition cursor-pointer h-30 w-100 text-3xl'>Start creating now</button>
        </div>
    </div>
    </>
  )
}

export default Hero