import React, { useEffect, useState } from 'react'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import StarRating from '../components/StarRating' // Added import for StarRating

const RoomDetails = () => {
    const {id} =useParams()
    const[room,setRoom] =useState(null)
    const[mainImage, setMainImage] =useState(null)
    useEffect(()=>{
        const foundRoom = roomsDummyData.find(room => room._id === id);
        if (foundRoom) {
            setRoom(foundRoom);
            setMainImage(foundRoom.images[0]);
        }
    },[id])

        return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        {/* Room Details  */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}<span className='font-inter text-sm'>({room.roomType})</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-50 rounded-full'>20% OFF</p>
        </div>
        {/* Room Rating  */}
        <div className='flex items-center gap-1 mt-2'>
            <StarRating />
            <p className='ml-2'>200+ reviews</p>
        </div>

        {/* Room Images  */}
        <div className='flex flex-wrap gap-4 mt-8'>
            <img src={mainImage} alt='' className='flex-1 max-h-[500px] object-cover rounded-xl min-w-[60%] '/>
            <div className='flex flex-1 flex-wrap gap-4 min-w-[30%]'>
                {room.images.map((image, index)=>(
                    <img onClick={()=>setMainImage(image)} key={index} src={image} alt='' className='w-full max-w-[160px] h-32 object-cover rounded-xl cursor-pointer'/>
                ))}
            </div>
        </div>

        {/* Overview  */}
        <h2 className='text-2xl font-playfair mt-16'>Overview</h2>
        <div className='flex flex-wrap justify-between gap-x-12 gap-y-4 mt-6'>
            {roomCommonData.map((data, index)=>(
                <div key={index} className='flex items-center gap-3 w-60'>
                    <img src={data.icon} alt={data.title} className='w-6.5' />
                    <div>
                        <p className='text-base'>{data.title}</p>
                        <p className='text-gray-500'>{data.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Room Facilities  */}
        <h2 className='text-2xl font-playfair mt-16'>Room Facilities</h2>
        <div className='flex flex-wrap justify-between gap-x-12 gap-y-4 mt-6'>
        {facilityIcons.map((spec, index)=>(
            <div key={index} className='flex items-center gap-3 w-60'>
                <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5'/>
                <div>
                    <p className='text-base'>{spec.title}</p>
                    <p className='text-gray-500'>{spec.description}</p>
                    </div>
                </div>
        ))}
        </div>
        <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
            <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availablility. You get the comfortable two bedroom apartmant that has a true city feeling.</p>
        </div>
        {/* Hosted By  */}
        <div className='flex flex-col items-start gap-4'>
            <div className='flex gap-4'>
                <img src={room.hotel.owner.image} alt='Host' className='h-14 w-14 md:h-18 md:w-18 rounded-full' />
                <div className='flex items-center mt-1'>
                    <StarRating />
                    <p className='ml-2'>Hosted by {room.hotel.name}</p>
                </div>
            </div>
        </div>
        <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary/90 transition-all active:scale-95'>
            Book Now
        </button>
    </div>
  )
}

export default RoomDetails