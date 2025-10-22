import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'

const home = () => {
  return (
    <>
    <div className="bg-[url('/gradient_background.jpg')] bg-cover bg-no-repeat bg-center min-h-screen text-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <AiTools></AiTools>
      <Testimonial></Testimonial>
    </div>
    </>
  )
}

export default home