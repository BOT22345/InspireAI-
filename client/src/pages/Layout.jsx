import React from 'react'
import { Outlet } from 'react-router-dom'
import {assets} from "../assets/assets.js"
import {useNavigate} from "react-router-dom"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const Layout = () => {
  const navigate=useNavigate();
  const [sidebar, setSidebar]=useState(true);
  return (
    <>
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
        <div className="flex align-center justify-center items-center rounded-half px-5 py-5">
                <img
                  src={assets.logo}
                  alt="logo"
                  className="w-5 h-10 sm:w-22 cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                ></img>
                <h1 className="text-3xl text-black">InspireAI-</h1>
              </div>
        {
          sidebar ? <X onClick={()=>setSidebar(false)}className="w-6 h-6 text-gray-600 sm:hidden"></X> : <Menu onClick={()=>setSidebar(true)} className="w-6 h-6 text-gray-600 sm:hidden"></Menu>
        } 
      </nav>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default Layout