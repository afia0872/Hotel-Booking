import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
    const [DashboardData] = useState(dashboardDummyData) // Changed setDashboardData to DashboardData for clarity, as it's not being updated in this snippet

  return (
    <div>
        <Title align='left' font='outfit' title='Dashboard' subTitle='Monitor your room listings,track booking and analyze revenue -all in one place.Stay updated with real-time insight to ensure smooth operation.'/>

        <div className='flex gap-4 my-8'>
            {/* ----Total Booking-- */}
            <div className='bg-primary/10 border border-primary/10 rounded flex p-4 pr-8 items-center'> {/* Added items-center for better alignment */}
                <img src={assets.totalBookingIcon} alt='Total Bookings' className='max-sm:hidden h-10'/> {/* Added alt text */}
                <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500 text-lg'>Total Booking</p>
                    <p className='text-gray-400 text-base'>{DashboardData.totalBookings}</p> {/* Changed text-neutral-400 to text-gray-400 */}
                </div>
            </div>
            {/* Total revenue  */}
            <div className='bg-primary/10 border border-primary/10 rounded flex p-4 pr-8 items-center'> {/* Added items-center for better alignment */}
                <img src={assets.totalRevenueIcon} alt='Total Revenue' className='max-sm:hidden h-10'/> {/* Added alt text */}
                <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500 text-lg'>Total Revenue</p>
                    <p className='text-gray-400 text-base'>$ {DashboardData.totalRevenue}</p> {/* Changed text-neutral-400 to text-gray-400 */}
                </div>
            </div>
        </div>

        {/* Recent Bookings  */}
        <p className='text-gray-500 mt-8'>Recent Bookings</p>
        <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
            <table className='w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>User</th> {/* Added descriptive header */}
                        <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room</th> {/* Added descriptive header */}
                        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Price</th>
                        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Status</th>
                    </tr>
                </thead>
                <tbody className='text-sm'>
                    {DashboardData.recentBookings.map((item,index)=> (
                        <tr key={index}>
                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                {item.user.username}
                            </td>
                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                {item.room.roomType}
                            </td>
                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                                $ {item.totalPrice}
                            </td>
                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300'> {/* Removed flex as it interferes with text-center */}
                                <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                                    {item.isPaid ?'Completed' : 'Pending'} {/* Capitalized for consistency */}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard