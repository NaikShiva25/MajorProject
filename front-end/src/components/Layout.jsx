import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Contact from './Contact'

const Layout = () => {
  return (
    <>
    <Navigation/>
    <Outlet/>
    <Contact/>
    </>
  )
}

export default Layout