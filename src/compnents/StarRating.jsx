import React from 'react';
import { assets } from '../assets/assets';

const StarRating = ({ rating = 4 }) => { // Default rating is 4
  return (
    <>
        {Array(5).fill('').map((_, index) => (
            <img
                key={index} // Added key prop for mapped elements
                src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
                alt={rating > index ? `Filled Star ${index + 1}` : `Outline Star ${index + 1}`} // Descriptive alt text
                className='w-4.5 h-4.5'
            />
        ))}
    </>
  );
};

export default StarRating;