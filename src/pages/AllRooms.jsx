import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CheckBox =({label, selected = false, onChange = () => {}})=>{
    return(
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type='checkbox' checked={selected} onChange={(e)=> onChange(e.target.checked, label)}/>
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const RadioButton =({label, selected = false, onChange = () => {}})=>{
    return(
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type='radio'  name="sortoption" checked={selected} onChange={(e)=> onChange(label)}/>
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const AllRooms = () => {
    const navigate =useNavigate()
    const [openFilters, setopenFilters] = useState(false)

    const roomType =[
        "Single Bed",
        "Double Bed",
        "Luxury Room",
        "Family Suite"
    ];
    const priceRanges =[
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000',
        '3000 to 5000',
        '5000+'
    ];
    const sortoptions = [
        'Price: Low to High',
        'Price: High to Low',
        'Popularity',
        'Newest'
    ]

  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row gap-6'>
        <div className='w-full lg:w-[70%]'>
            <p className='text-gray-500/90 text-sm'>Showing {roomsDummyData.length} Search results</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6'>
                {roomsDummyData.map((room, index)=>(
                    <div onClick={()=>{navigate('/rooms/'+room._id); scrollTo(0,0)}} key={room._id} className='relative w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] cursor-pointer'>
                        <img src={room.images[0]} alt='' className='w-full h-48 object-cover' />
                        {index % 2 === 0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p>}
                        <div className='p-4 pt-5'>
                            <div className='flex items-center justify-between'>
                                <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p>
                                <div className='flex items-center gap-1'>
                                    <img src={assets.starIconFilled} alt='star-icon' />4.5
                                </div>
                            </div>
                            <div className='flex items-center gap-1 text-sm'>
                                <img src={assets.locationFilledIcon} alt='location-icon' />
                                <span>{room.hotel.address}</span>
                            </div>
                            <div className='flex items-center justify-between mt-4'>
                                <p className='text-xl font-playfair font-medium text-gray-800'>${room.pricePerNight}<span className='text-sm text-gray-500'>/night</span></p>
                                <button className='flex items-center gap-2 text-primary font-medium hover:underline'>
                                    View Details
                                    <img src={assets.arrowIcon} alt='arrow-icon' className='w-3.5' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-full lg:w-[30%] bg-white border border-gray-300 rounded-xl max-h-[80vh]'>
            <div className='flex items-center justify-between px-5 py-4 border-b border-gray-300'>
                <p className='text-gray-800 font-medium'>Filters</p>
                <div className='text-primary text-sm font-medium cursor-pointer'>
                     <span onClick={()=> setopenFilters(!openFilters)} className='lg:hidden'>
                        {openFilters ? 'HIDE' :'SHOW'}</span>
                    <span className='hidden lg:block'>CLEAR</span>
                </div>
            </div>

            <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700` }>
                <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
                    {roomType.map((room, index)=>(
                        <CheckBox key={index} label={room} />
                    ))}
                </div>
                <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>Price Range</p>
                    {priceRanges.map((range, index)=>(
                        <CheckBox key={index} label={` $ ${range}`} />
                    ))}
                </div>

                    <div className='px-5 pt-5 pb-7'>
                    <p className='font-medium text-gray-800 pb-2'>Sort By</p>
                    {sortoptions.map((option, index)=>(
                        <RadioButton key={index} label={option} />
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default AllRooms