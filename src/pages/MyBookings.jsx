import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

    const [bookings, setBookings]= useState(userBookingsDummyData)
  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>

        <Title title='My Bookings' subTitle='Easily manage your past, current, and upcoming Hotel reservations in one place. Plan your trips seamlessly with just a few clicks' align='left' />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
            <div className="w-1/3">Hotels</div>
            <div className="w-1/3">Date & Timings</div>
            <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking)=>(
            <div key={booking._id}  className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                {/* -----------Hotel Details------------  */}
                <div className='flex items-start gap-4 pr-5'>
                    <img src={booking.room.images[0]} alt='' className='h-20 w-20 sm:h-24 sm:w-24 rounded-lg object-cover'/>
                    <div className='flex flex-col'>
                        <p className='text-lg font-medium'>{booking.room.hotel.name}</p>
                        <p className='text-gray-500 text-sm'>{booking.room.roomType}</p>
                        <div className='flex items-center gap-1 text-sm'>
                            <img src={assets.locationFilledIcon} alt='location-icon' />
                            <span>{booking.room.hotel.address}</span>
                        </div>
                    </div>
                </div>
                {/* -----------Date & Timings------------  */}
              <div className='flex items-start justify-between sm:justify-start gap-5 sm:gap-10 pt-3 md:pt-0'>
                    <div>
                        <p>Check-In</p>
                        <p className='text-gray-500 text-sm'>
                            {new Date(booking.checkInDate).toDateString()}
                        </p>
                        </div>
                        <div>
                             <p>Check-Out</p>
                        <p className='text-gray-500 text-sm'>
                            {new Date(booking.checkOutDate).toDateString()}
                        </p>

                   </div>
              </div>
                 {/* -----------Payment Status------------  */}
                <div className='flex flex-col items-start justify-center pt-3'>
                    <div className='flex items-center gap-2'>
                        <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                        <p className={`text-sm ${booking.isPaid ? "text-green-600" : "text-red-600"}`}>
                            {booking.isPaid ? "Paid" : "Unpaid"}
                             </p>
                        </div>
                        {!booking.isPaid && (
                            <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>
                                Pay Now
                            </button>
                        )}
                </div>
            </div>

        ))}
    </div>

    </div>

  )
}

export default MyBookings