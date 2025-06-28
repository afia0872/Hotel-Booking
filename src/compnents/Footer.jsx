import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9 invert opacity-80' />
                    <p className='text-sm'>
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={assets.instagramIcon} alt='Instagram Icon' className='w-6'/></a> {/* Added proper links and alt text */}
                        {/* Facebook */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={assets.facebookIcon} alt='Facebook Icon' className='w-6'/></a> {/* Added proper links and alt text */}
                        {/* Twitter */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={assets.twitterIcon} alt='Twitter Icon' className='w-6' /></a> {/* Added proper links and alt text */}
                        {/* LinkedIn */}
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={assets.linkendinIcon} alt='LinkedIn Icon' className='w-6' /></a> {/* Added proper links and alt text */}
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>QUICK LINKS</p> {/* Changed placeholder text based on common footer sections */}
                    <ul className='mt-3 text-sm flex flex-col gap-2'>
                        <li><a href="/" className='hover:underline'>Home</a></li>
                        <li><a href="/rooms" className='hover:underline'>Hotels</a></li>
                        <li><a href="/about" className='hover:underline'>About Us</a></li>
                        <li><a href="/contact" className='hover:underline'>Contact</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>SUPPORT</p> {/* Changed placeholder text */}
                    <ul className='mt-3 text-sm flex flex-col gap-2'>
                        <li><a href="/faq" className='hover:underline'>FAQ</a></li>
                        <li><a href="/terms" className='hover:underline'>Terms of Service</a></li>
                        <li><a href="/privacy" className='hover:underline'>Privacy Policy</a></li>
                        <li><a href="/help" className='hover:underline'>Help Center</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="email" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' aria-label='Your email' /> {/* Changed type to email, added aria-label */}
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r' aria-label='Subscribe to newsletter'> {/* Added aria-label */}
                            {/* Arrow icon */}
                            <img src={assets.arrowIcon} alt='Subscribe Arrow Icon' className='w-3.5 invert' />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Home Away From Home. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="/privacy" className='hover:underline'>Privacy</a></li>
                    <li><a href="/terms" className='hover:underline'>Terms</a></li>
                    <li><a href="/sitemap" className='hover:underline'>Sitemap</a></li>
                </ul>
            </div>
        </div>
  );
};

export default Footer;