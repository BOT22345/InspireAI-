import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <h1>Layout</h1>
    <Outlet></Outlet>
    </>
  )
}

export default Layout