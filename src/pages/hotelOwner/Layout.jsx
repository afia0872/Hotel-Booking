import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar' // Corrected typo: compnents to components
import Sidebar from '../../components/hotelOwner/Sidebar' // Corrected typo: compnents to components
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='flex h-full'>
                <Sidebar />
                <div className='flex-1 p-4 pt-10 md:px-10 h-full overflow-y-auto'> {/* Added overflow-y-auto for content scrolling */}
                    <Outlet/>
                </div>
        </div>
    </div>
  )
}

export default Layout