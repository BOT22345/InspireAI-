import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'

const home = () => {
  return (
    <>
    <div className="bg-[url('/gradient_background.jpg')] bg-cover bg-no-repeat bg-center min-h-screen text-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <AiTools></AiTools>
    </div>
    </>
  )
}

export default home