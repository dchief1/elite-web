// components/LandingPage.tsx
import React, { useState } from 'react';
import { Menu, X, Play } from 'lucide-react';
import logo from "./images/elitelogo.png";


interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <a 
      href={href} 
      className="hover:text-purple-500 font-medium text-xl transition-colors duration-200"
    >
      {children}
    </a>
);

const LandingPage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white font-sans">

        {/* Navbar Container */}
        <div>
            {/* Navbar */}
            <nav className="flex justify-between items-center px-4 py-3 sm:px-6 max-w-7xl mx-auto bg-black">


                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src={logo.src} alt="Elite Logo" className="h-16 sm:h-12" />
                </div>


                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    <a href="#pricing" className="hover:text-orange-800 font-medium text-xl">Pricing</a>
                    <a href="#about" className="hover:text-purple-800 font-medium text-xl">About Us</a>
                    <a href="#contact" className="hover:text-purple-500 font-medium text-xl">Contact Us</a>
                    <a href="#faq" className="hover:text-orange-800 font-medium text-xl">FAQ</a>
                </div>


                {/* Desktop Join Waitlist Button */}
                <button className="hidden md:block border-2 font-medium border-white hover:border-purple-800 px-5 py-2 rounded-2xl transition text-xl">
                Join Waitlist
                </button>


                {/* Mobile Menu Button */}
                <button 
                onClick={toggleMenu}
                className="lg:hidden z-10 p-2 text-white"
                >
                {isMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="w-6" />
                )}
                </button>

                <div className={` fixed inset-0 bg-black bg-opacity-95 lg:hidden transition-transform duration-300 ease-in-out
                        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}
                    >
                    <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
                        <a href="#pricing">Pricing</a>
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#faq">FAQ</a>
                        <button className="border-2 font-medium border-white hover:border-purple-500 hover:text-purple-500 px-5 py-2 rounded-2xl transition duration-200 text-xl">
                        Join Waitlist
                        </button>
                    </div>
                </div>

                {/* INTERNAL CSS STYLING FOR THE ANIMATED LINEAR GRADIENT BORDER */}
                <style>
                    {`
                    .headerBorder {
                    background: linear-gradient(-45deg, #f0440e, #781e02, #3b03ab, #5a05f7, #FFA500);
                    background-size: 400% 400%;
                    animation: gradient 10s ease infinite;
                    
                    }

                    @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                    }
                    `}
                </style>
            {/* INTERNAL CSS - END */}

            </nav>
            <div className='headerBorder h-0.5 h-1'></div>
        </div>


        {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">


          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              A fast track to career success powered with AI features for both{' '}
              <span className="font-bold text-purple-700">companies</span> & <span className='font-bold text-orange-700'>professionals</span>
            </h1>
            <div className='border-4 w-80 -mt-5 border-purple-500/20'></div>
            
            <p className="text-gray-300 text-base sm:text-lg">
              With the use of AI and a unique algorithm to make perfect matches between 
              talented professionals and exciting opportunities across the globe.
            </p>

            <div className="flex justify-start">
              <button className="group inline-flex items-center gap-4 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300">
                <span className="text-lg font-bold">Join Waitlist</span>
                <span className="text-2xl transform transition-transform duration-300 group-hover:translate-x-2 font-bold">
                  ⟶
                </span>
              </button>
            </div>
          </div>


          {/* Right Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video bg-gray-700 rounded-xl overflow-hidden">
              <button className="absolute inset-0 w-full h-full flex items-center justify-center group transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
