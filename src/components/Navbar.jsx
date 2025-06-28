import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useClerk ,useUser, UserButton } from '@clerk/clerk-react';


const NavBar = () => {
       const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {openSignIn} = useClerk() // Fixed: openSingIn to openSignIn
    const {user} =useUser()
    const navigate =useNavigate()
    const location =useLocation()

    useEffect(() => {
        // If not on the homepage, set isScrolled to true immediately and don't listen for scroll
        if (location.pathname !== '/') {
            setIsScrolled(true);
            return; // Exit early if not on homepage
        }

        // If on the homepage, determine isScrolled based on scroll position
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        // Set initial scroll state for homepage
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]); // Re-run effect when pathname changes

    return (
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link to='/'>
                    <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        // Changed <a> to <Link> for client-side routing
                        <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}

                    {user &&  <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${isScrolled ? 'text-black border-gray-300' : 'text-white border-white'}`} onClick={()=> navigate('/owner')}>
                        Dashboard
                    </button>
                    }
                    {!user && <button onClick={openSignIn} className={`px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${isScrolled ? 'text-black border border-gray-300' : 'text-white border border-white'}`}>
                        Login
                    </button>}
                   {user &&  <UserButton afterSignOutUrl='/' appearance={{
                        elements:{
                            userButtonPopoverCard:"p-2",
                            userButtonAvatarBox:"w-9 h-9"
                        }
                    }}/>}
                    <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt='menu-icon' className={`${isScrolled && 'invert'} h-4`} />
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <img src={assets.closeIcon} alt='close-menu' className="h-6.5" />
                    </button>

                    {navLinks.map((link, i) => (
                        // Changed <a> to <Link> for client-side routing
                        <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}

                   {user &&  <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all " onClick={()=> navigate('/owner')}>
                        Dashboard
                    </button>
                    }

                  {!user &&  <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>}
                </div>
            </nav>
       
    );
};

export default NavBar;