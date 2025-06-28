import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    // The key prop should ideally be on the outermost element of the map function, which is often done in the parent component.
    // However, if this component is directly mapped in a parent, keeping key here is okay but less conventional for 'Link'.
    <Link to={'/rooms/' + room._id} onClick={() => window.scrollTo(0, 0)} className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'>
        <img src={room.images[0]} alt={room.name || 'Hotel Image'} className='w-full h-48 object-cover' /> {/* Added alt text, better sizing */}

       {index % 2 === 0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p>}
        <div className='p-4 pt-5'>
            <div className='flex items-center justify-between'>
               <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p> {/* Fixed: 'font=playfair' to 'font-playfair', 'hote.name' to 'hotel.name' */}
               <div className='flex items-center gap-1'>
                 <img src={assets.starIconFilled} alt='Star Icon' />4.5 {/* Added alt text */}
               </div>
            </div>
           <div className='flex items-center gap-1 text-sm'> {/* Fixed: 'items -center' to 'items-center' */}
            <img src={assets.locationFilledIcon} alt='Location Icon' className='w-4 h-4' /> {/* Added alt text and sizing */}
            <span>{room.hotel.address}</span>
           </div>
           <div className='flex items-center justify-between mt-4'>
            <p className='text-xl font-medium text-gray-800'>${room.price}</p>
            <button className='bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-all'>Book Now</button>
           </div>
        </div>
    </Link>
  );
};

export default HotelCard;