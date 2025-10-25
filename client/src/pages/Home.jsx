import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const home = () => {
  return (
    <>
    <div className="bg-[url('/gradient_background.jpg')] bg-cover bg-no-repeat bg-center min-h-screen text-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <AiTools></AiTools>
      <Testimonial></Testimonial>
      <Plan></Plan>
      <Footer></Footer>
    </div>
    </>
  )
}

export default home