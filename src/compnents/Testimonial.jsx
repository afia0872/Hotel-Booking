import React from 'react';
import Title from './Title';
import StarRating from './StarRating'; // Assuming StarRating is in the same directory
import { testimonials } from '../assets/assets'; // Fixed: Missing import for 'testimonials' - assuming it's in assets.js

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'> {/* Fixed: 'flec-col' to 'flex-col' */}
        <Title title="What Our Guests Say" subTitle="Discover why discerning travelers consistently choose Home Away From Home for their exclusive and luxurious accommodations around the world."/> {/* Fixed typo 'discering' to 'discerning', 'accomodations' to 'accommodations' */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full object-cover" src={testimonial.image} alt={`Profile picture of ${testimonial.name}`} /> {/* Added descriptive alt text */}
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            <StarRating rating={testimonial.rating} /> {/* Assuming testimonial has a rating property */}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
    </div>
  );
};

export default Testimonial;