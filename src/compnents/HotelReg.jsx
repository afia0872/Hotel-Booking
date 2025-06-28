import React from 'react';
import { assets, cities } from '../assets/assets';

const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70'> {/* Increased z-index to 50 for modals */}
        <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
            <img src={assets.regImage} alt='Registration Image' className='w-1/2 rounded-xl hidden md:block' /> {/* Fixed: 'md:block0' to 'md:block', added alt text */}

            <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
            <img src={assets.closeIcon} alt='Close Icon' className='absolute top-4 right-4 h-4 cursor-pointer' /> {/* Added alt text */}
            <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p> {/* Fixed: 'font-semiblod' to 'font-semibold' */}

            {/* Hotel Name */}
            <div className='w-full mt-4'>
                <label htmlFor='name' className='font-medium text-gray-500'>
                    Hotel Name
                </label>
                <input id='name' type='text' placeholder='Type Here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/> {/* Fixed: 'Border' to 'border' */}
            </div>
            {/* Phone */}
            <div className='w-full mt-4'>
                <label htmlFor='contact' className='font-medium text-gray-500'> {/* Fixed: 'Contact' to 'contact' for consistency with htmlFor */}
                    Contact
                </label>
                <input id='contact' type='text' placeholder='Type Here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/> {/* Fixed: 'Border' to 'border' */}
            </div>
            {/* Address */}
            <div className='w-full mt-4'>
                <label htmlFor='address' className='font-medium text-gray-500'>
                    Address
                </label>
                <input id='address' type='text' placeholder='Type Here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/> {/* Fixed: 'Border' to 'border' */}
            </div>
            {/* Select City Drop Down */}
            <div className='w-full mt-4 max-w-60 mr-auto'>
                <label htmlFor='city' className='font-medium text-gray-500'>
                    City
                </label>
                <select id='city' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required > {/* Fixed: redundant 'className=' */}
                    <option value="">Select City</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            </div>
            <button type='submit' className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white px-6 py-2.5 rounded mt-8 w-full font-medium'> {/* Fixed: 'trasnition-all' to 'transition-all' */}
                Register Hotel
            </button>
            </div>
        </form>
    </div>
  );
};

export default HotelReg;