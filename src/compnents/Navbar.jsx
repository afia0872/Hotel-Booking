import React, { useState, useEffect } from 'react'; // Fixed: Missing useState and useEffect imports
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';


const NavBar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/' }, // Consider linking to a specific experience page if available
        { name: 'About', path: '/' },     // Consider linking to a specific about page if available
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { openSignIn } = useClerk(); // Fixed: 'openSingIn' to 'openSignIn'
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Simplified scroll logic
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10 || location.pathname !== '/');
        };

        // Initial check for non-home path
        setIsScrolled(location.pathname !== '/');

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]); // Added location.pathname to dependency array to re-run on path change

    return (
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
                {/* Logo */}
                <Link to='/'>
                    <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}> {/* Changed `a` to `Link` for internal navigation */}
                            {link.name}
                            <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${isScrolled ? "bg-gray-700" : "bg-white"}`}></span>
                        </Link>
                    ))}
                    {user && (
                        <button onClick={() => navigate('/owner')} className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${isScrolled ? "border-gray-400 hover:bg-gray-100" : "border-white text-white hover:bg-white hover:text-black"}`}>
                            Dashboard
                        </button>
                    )}
                    {user ? (
                        <UserButton afterSignOutUrl='/' />
                    ) : (
                        <button onClick={openSignIn} className={`px-8 py-2.5 rounded-full transition-all duration-500 ${isScrolled ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-200"}`}>
                            Login
                        </button>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <div className='flex items-center md:hidden gap-4'>
                   {user && <UserButton afterSignOutUrl='/' />}
                    <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt='Menu Icon' className={`${isScrolled && 'invert'} h-4 cursor-pointer`} /> {/* Added alt text */}
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <img src={assets.closeIcon} alt='Close Menu Icon' className="h-6.5" /> {/* Added alt text */}
                    </button>

                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}> {/* Changed `a` to `Link` */}
                            {link.name}
                        </Link>
                    ))}

                   {user &&  <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all " onClick={()=> navigate('/owner')}>
                        Dashboard
                    </button>
                    }

                  {!user &&  <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"> {/* Fixed: 'openSingIn' to 'openSignIn' */}
                        Login
                    </button>}
                </div>
            </nav>
    );
};

export default NavBar;