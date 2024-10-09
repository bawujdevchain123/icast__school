import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer';

const MainLayout = () => {
  return (
    <>
        <Header/>
            <Outlet/>
        <Footer/>
   </>
  )
}

export default MainLayout