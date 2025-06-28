import React, { useState } from 'react'
import Title from '../../compnents/Title' // Assuming this path is correct
import { assets } from '../../assets/assets' // Assuming this path is correct

const AddRoom = () => {
    const [images, setImage] =useState({
        1:null,
        2:null,
        3:null,
        4:null,
    })
    const [inputs ,setInputs] =useState({
        roomType:'',
        PricePerNIght:0,
        amenities:{
            'Free Wifi' : false,
            'Free BreakFast':false,
            'Room Service':false,
            'Mountain View':false,
            'Pool Access':false
        }
    })

    // Handler for amenity checkbox change
    const handleAmenityChange = (amenityKey) => {
        setInputs(prevInputs => ({
            ...prevInputs,
            amenities: {
                ...prevInputs.amenities,
                [amenityKey]: !prevInputs.amenities[amenityKey]
            }
        }));
    };

    const handleImageChange = (e, key) => {
        const file = e.target.files[0];
        if (file) {
            setImage(prevImages => ({
                ...prevImages,
                [key]: file
            }));
        }
    };

  return (
    <form>
        <Title align='left' font='outfit' title='Add-Room' subTitle='Fill in the details carefully and accurate room details , pricing, and amenities,to enhance the user booking experience.'/>

        {/* Uploading Area For Image  */}
        <p className='text-gray-800 mt-10'>Images</p>
        <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'> {/* Changed grid=cols-2 to grid-cols-2 and sm:flrx to sm:flex */}
            {Object.keys(images).map((key)=> (
                <label htmlFor={`roomImage${key}`} key={key}>
                    <img src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt={`Upload Area ${key}`} className='cursor-pointer w-full max-w-[150px] aspect-square object-cover' /> {/* Added max-w, aspect-square, object-cover for better image display */}
                    <input type='file' accept='image/*' id={`roomImage${key}`} hidden onChange={(e) => handleImageChange(e, key)}/>
                </label>
            ))}
        </div>

        <div className='flex items-center gap-6 mt-6'>
            {/* Room Type */}
            <div className='max-w-60 w-full'>
                <label htmlFor='roomType' className='font-medium text-gray-500'>Room Type</label>
                <select id='roomType' className='border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
                    value={inputs.roomType} onChange={e=> setInputs({...inputs, roomType:e.target.value})}>
                    <option value="">Select Room Type</option>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Luxury Room">Luxury Room</option>
                    <option value="Family Suite">Family Suite</option>
                </select>
            </div>
            {/* Price Per Night */}
            <div>
                <p className='mt-4 text-gray-800'>Price <span className='text-xs'>/night</span></p> {/* Fixed <Price> tag to <p> */}
                <input type='number' placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24'
                value={inputs.PricePerNIght} onChange={e=> setInputs({...inputs, PricePerNIght:e.target.value})}/>
            </div>
        </div>

        <p className='text-gray-800 mt-4'>Amenities</p>
        <div className='flex flex-wrap mt-1 text-gray-700 gap-x-4'> {/* Changed flex=col to flex-wrap, text-gray-400 to text-gray-700 for better contrast */}
            {Object.keys(inputs.amenities).map((amenity, index)=> (
                <div key={index} className='flex items-center gap-1'>
                    <input type='checkbox' id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={()=> handleAmenityChange(amenity)}/> {/* Corrected onChange handler */}
                    <label htmlFor={`amenities${index+1}`}>{amenity}</label>
                </div>
            ))}
        </div>

        <button className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer'>
            Add Room
        </button>
    </form>
  )
}

export default AddRoom