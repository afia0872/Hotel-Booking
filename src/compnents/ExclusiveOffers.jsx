import React from 'react';
import Title from './components/Title'; // Fixed: Typo 'compnents' to 'components'
import { assets, exclusiveOffers } from './assets/assets';

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title align='left' title='Exclusive Offer' subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories' /> {/* Fixed 'pacakages' to 'packages' */}
        <button className='flex items-center gap-2 font-medium cursor-pointer'> {/* Added basic styling for button */}
          View All Offers
          <img src={assets.arrowIcon} alt='arrow-icon' className='group-hover:translate-x-full transition-all' /> {/* Fixed: 'translate-x-l' to 'translate-x-full' (common Tailwind) */}
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full'> {/* Added grid for proper layout */}
        {exclusiveOffers.map((item) => (
          <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 pb-4 rounded-xl text-white bg-no-repeat bg-cover bg-center overflow-hidden' style={{ backgroundImage: `url(${item.image})` }}>
            <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>
              Exclusive Deal
            </p>
            <div className='flex flex-col justify-end h-full w-full pb-4'> {/* Ensures content is at the bottom */}
                <p className='text-2xl font-medium font-playfair'>{item.title}</p>
                <p className='text-sm'>{item.description}</p> {/* Fixed: Invalid nesting of <p> tags */}
                <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
            </div>
            <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5 text-white'> {/* Fixed: 'felx' to 'flex', 'cursor-pionter' to 'cursor-pointer' */}
              View Offers
              <img className='invert group-hover:translate-x-full transition-all' src={assets.arrowIcon} alt='arrow-icon' /> {/* Fixed: 'translate-x-l' to 'translate-x-full' */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;