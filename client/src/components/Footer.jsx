import React from 'react'
import {assets} from "../assets/assets.js"
const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
    <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6 mt-40">
        <div className="md:max-w-96">
            <div className='flex align-center items-center'>
            <img className='h-9' src={assets.logo} alt="logo"></img>
            <h1 className="text-white">InspireAI-</h1>
            </div>
            <p className="mt-6 text-sm">
                Experience the power of AI with InspireAi-. <br></br> Transform your content creation with our suite fo premium AI toosl. Write articles, generate imagess, and enhance your workflow.
            </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
                <h2 className="font-semibold mb-5 text-white">Company</h2>
                <ul className="text-sm space-y-2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>
            <div>
                <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
                <div className="text-sm space-y-2">
                    <p>+1-212-456-7890</p>
                    <p>contact@example.com</p>
                </div>
            </div>
        </div>
    </div>
    <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © <a href="https://prebuiltui.com">BOT2234</a>. All Right Reserved.
    </p>
</footer>
  )
}

export default Footer