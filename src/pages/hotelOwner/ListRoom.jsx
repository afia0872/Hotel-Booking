import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from './compnents/Title';// Corrected typo: compnents to components

const ListRoom = () => {
    const [rooms, setRooms] =useState(roomsDummyData)

    const handleAvailabilityToggle = (roomId) => {
        setRooms(prevRooms =>
            prevRooms.map(room =>
                room._id === roomId ? { ...room, isAvailable: !room.isAvailable } : room
            )
        );
    };

    // Helper function to format amenities
    const formatAmenities = (amenitiesObj) => {
        if (!amenitiesObj) return '';
        return Object.keys(amenitiesObj)
            .filter(key => amenitiesObj[key]) // Filter for amenities that are true
            .join(', ');
    };

  return (
    <div>
      <Title align='left' font='outfit' title='Room Listing' subTitle='View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.'/> {/* Fixed typo: p-to-date */}
        <p className='text-gray-500 mt-8'>All Room</p>

        <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'> {/* Corrected typo: borer to border */}
            <table className='w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
                        <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Amenities</th> {/* Changed Facility to Amenities for clarity */}
                        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Price /night</th>
                        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Availability</th> {/* Changed Actions to Availability for clarity */}
                    </tr>
                </thead>
                <tbody className='text-sm'>
                    {rooms.map((item,index)=> (
                        <tr key={index}>
                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                {item.roomType}
                            </td>
                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'> {/* Corrected typo: bordr-gray-300 to border-gray-300 */}
                                {formatAmenities(item.amenities)} {/* Use helper function */}
                            </td>
                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300'> {/* Corrected typo: bordr-gray-300 to border-gray-300 */}
                                $ {item.rent} {/* Assuming 'rent' is the property for price, based on RoomDetails.jsx */}
                            </td>
                             <td className='py-3 px-4 border-t border-gray-300 text-center'> {/* Corrected typo: bordr-gray-300 to border-gray-300 */}
                               <label className='relative inline-flex items-center cursor-pointer text-gray-900'> {/* Removed gap-3 as it's not needed here */}
                                    <input
                                        type='checkbox'
                                        className='sr-only peer'
                                        checked={item.isAvailable}
                                        onChange={() => handleAvailabilityToggle(item._id)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{item.isAvailable ? 'Available' : 'Unavailable'}</span>
                               </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListRoom