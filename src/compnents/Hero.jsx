import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>

      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Hotel Experience</p> {/* Fixed: 'Experince' to 'Experience' */}
      <h1 className='font-playfair text-2xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination</h1> {/* Fixed: 'font-blod' to 'font-bold' */}
      <p className='max-w-xl mt-2 text-sm md:text-base'>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p> {/* Fixed: 'wxclusive' to 'exclusive', 'Unparalled' to 'Unparalleled', 'max-w-130' to 'max-w-xl' */}

      <form className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt='Calendar Icon' className='h-4' />
            <label htmlFor='destinationInput'>Destination</label>
          </div>
          <input list='destinations' id='destinationInput' type='text' className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' placeholder='Select destination' />
          {/* Datalist for destinations - assuming you have one */}
          <datalist id='destinations'>
            <option value='New York' />
            <option value='Paris' />
            <option value='London' />
            <option value='Tokyo' />
          </datalist>
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt='Calendar Icon' className='h-4' />
            <label htmlFor='checkIn'>Check in</label>
          </div>
          <input id='checkIn' type='date' className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' />
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt='Calendar Icon' className='h-4' />
            <label htmlFor='checkOut'>Check out</label>
          </div>
          <input id='checkOut' type='date' className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' />
        </div>

        <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
          <label htmlFor='guests'>Guests</label>
          <input min={1} max={4} id='guests' type='number' className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16' placeholder='0' />
        </div>

        <button type='submit' className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
          <img src={assets.searchIcon} alt='Search Icon' className='w-3.5 invert' />
          Search
        </button>
      </form>
    </div>
  );
};

export default Hero;