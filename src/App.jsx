import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
// Corrected import path for HotelReg
import HotelReg from './compnents/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import MyBookings from './pages/MyBookings';
import Dashboard from './pages/hotelOwner/Dashboard';
import Footer from './compnents/Footer';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';
// Corrected typo in Navbar import path
import Navbar from './components/Navbar';
import Title from './compnents/Title';

const App = () => {
  // useLocation hook must be called inside a component that is rendered within a <Router>
  // In your index.js, BrowserRouter wraps App, so this is correct.
  const isOwnerPath = useLocation().pathname.includes("owner");
 
  return (
    <div className='font-sans bg-gray-100 min-h-screen'>
      {/* Navbar is conditionally rendered based on the path */}
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh] container mx-auto p-4'>
        <Routes>
          {/* Main routes */}
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/rooms/:id' element={<RoomDetails/>} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/hotel-register' element={<HotelReg />} />
          <Route path='/Title' element={<Title/>} />
          
          {/* Nested routes for hotel owner panel */}
          <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>}/> {/* Default route for /owner */}
            <Route path='add-room' element={<AddRoom/>}/>
            <Route path='list-room' element={<ListRoom/>}/>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  ); 
};

export default App;
